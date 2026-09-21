import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import { requireAdmin, boundedInteger } from './admin-auth.mjs';
const root = process.env.IMPERIAL_AUDIT_ROOT || process.cwd();
const ts = createRequire(join(root,'scripts/check-master-audit.mjs'))('typescript');
async function walk(dir) { const paths=[]; for(const item of await readdir(dir,{withFileTypes:true})) { const path=join(dir,item.name); if(item.isDirectory()) paths.push(...await walk(path)); else if(item.name==='route.ts')paths.push(path); } return paths; }
const routes = [...await walk(join(root,'app/api/admin')),join(root,'app/admin-login/route.ts')];
const password='synthetic-test-password-not-a-real-secret-123';
const credentials = `Basic ${Buffer.from('audit-test:'+password).toString('base64')}`;
function environment() {process.env.ADMIN_USERNAME='audit-test';process.env.ADMIN_PASSWORD=password;process.env.NEXT_PUBLIC_DESIGN_PREVIEW='0';process.env.NODE_ENV='test';}
function compile(path,source,dbOverride) {
  let touches=0;
  const db=dbOverride || new Proxy({}, {get(){touches++;throw Error('PRIVATE_DATABASE_ERROR_TOKEN');}});
  const schema=new Proxy({}, {get(_target,table){return new Proxy({}, {get(_t,column){return {table,column};}});}});
  const orm=new Proxy({}, {get(){return (...args)=>args;}});
  const exported={};
  const code=ts.transpileModule(source,{fileName:path,compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS},reportDiagnostics:true});
  assert.equal(code.diagnostics.length,0,`syntax ${path}`);
  vm.runInNewContext(code.outputText, {exports:exported,Response,Request,URL,Date,process,Buffer,console,
    require(name){if(name==='next/server')return {NextRequest:Request,NextResponse:{json:(data,options)=>Response.json(data,options)}};if(name==='@/lib/admin-auth')return {requireAdmin,boundedInteger};if(name==='@/lib/db')return {db};if(name==='@/lib/db/schema')return schema;if(name==='drizzle-orm')return orm;if(name==='@/lib/db/utils')return {convertKeysToCamel:value=>value};throw Error('Unexpected import '+name);}
  }, {filename:path});
  return {exported,touches:()=>touches};
}
for(const path of routes) {
  const source=await readFile(path,'utf8');
  const compiled=compile(path,source);
  for(const method of ['GET','POST','PUT','PATCH','DELETE','HEAD']) {
    if(typeof compiled.exported[method]!=='function')continue;
    test(`${path.replace(root+'/','')} ${method} rejects unauthenticated access before DB or body`,async()=>{
      environment();const request=new Request('https://imperialcleaninginc.com/api/admin/test',{method,headers:{'x-middleware-subrequest':'middleware:middleware:middleware:middleware:middleware'}});
      const response=await compiled.exported[method](request,{params:{id:'test-id'}});
      assert.equal(response.status,401);assert.equal(compiled.touches(),0);assert.match(response.headers.get('cache-control'),/no-store/);
    });
    if(!['GET','HEAD'].includes(method))test(`${path.replace(root+'/','')} ${method} blocks cross-site authenticated write`,async()=>{
      environment();const response=await compiled.exported[method](new Request('https://imperialcleaninginc.com/api/admin/test',{method,headers:{authorization:credentials,origin:'https://attacker.example','sec-fetch-site':'cross-site'}}),{params:{id:'test-id'}});
      assert.equal(response.status,403);assert.equal(compiled.touches(),0);
    });
  }
}
test('complete existing admin API inventory is guarded, plus the new challenge endpoint',()=>assert.equal(routes.length,15));
test('authorized database failure returns no raw error or token',async()=>{
  environment();const path=join(root,'app/api/admin/pricing/route.ts');const c=compile(path,await readFile(path,'utf8'));
  const response=await c.exported.GET(new Request('https://imperialcleaninginc.com/api/admin/pricing',{headers:{authorization:credentials}}));
  assert.equal(response.status,500);assert.equal(c.touches(),1);assert.ok(!(await response.text()).includes('PRIVATE_DATABASE'));
});
const calculatorPath=join(root,'app/api/admin/projects/calculate/route.ts');
const calculatorSource=await readFile(calculatorPath,'utf8');
function calculator(rates=[]) {return compile(calculatorPath,calculatorSource,{select(){return {from(){return {where:async()=>rates};}};}}).exported.POST;}
function calculateRequest(body){return new Request('https://imperialcleaninginc.com/api/admin/projects/calculate',{method:'POST',headers:{authorization:credentials,origin:'https://imperialcleaninginc.com','content-type':'application/json'},body:JSON.stringify(body)});}
const valid={buildingType:'office',buildingSqft:1000,cleanupPhases:['final'],margin:0.15};
for(const patch of [{buildingSqft:0},{buildingSqft:-1},{buildingSqft:'1000'},{cleanupPhases:[]},{margin:-1},{cleanupPhases:['final',22]}])test('calculator rejects invalid input '+JSON.stringify(patch),async()=>{environment();assert.equal((await calculator()(calculateRequest({...valid,...patch}))).status,400);});
test('calculator preserves original markup arithmetic, and deduplicates phases',async()=>{
  environment();const response=await calculator([{cleanupPhase:'final',pricePerSqftMid:'0.25',pricePerSqftLow:'0.20',pricePerSqftHigh:'0.30',sqftPerHourPerPerson:500}])(calculateRequest({...valid,cleanupPhases:['final','final']}));
  const body=await response.json();assert.equal(response.status,200);assert.equal(body.phases.length,1);assert.equal(body.total,287.5);assert.equal(body.phases[0].baseCost,250);
});
test('missing price produces no partial success total',async()=>{environment();const response=await calculator()(calculateRequest(valid));assert.equal(response.status,422);const body=await response.json();assert.ok(!('total'in body));});

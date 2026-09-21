import test from 'node:test';
import assert from 'node:assert/strict';
import { checkAdminAccess, requireAdmin, boundedInteger } from './admin-auth.mjs';
const password = 'synthetic-fixture-only-password:with-colon';
const config = { username: 'fixture-admin', password };
function headers(user = config.username, secret = password, extra = {}) {
  return new Headers({authorization: 'Basic ' + Buffer.from(user + ':' + secret).toString('base64'), ...extra});
}
test('admin reads require valid server credentials', () => assert.equal(checkAdminAccess(headers(), 'GET', config), 200));
test('missing configuration fails closed', () => assert.equal(checkAdminAccess(headers(), 'GET', {}), 503));
test('short passwords fail closed', () => assert.equal(checkAdminAccess(headers(), 'GET', {...config, password:'short'}), 503));
test('preview cannot read protected records', () => assert.equal(checkAdminAccess(headers(), 'GET', {...config, preview:true}), 503));
test('missing authorization is challenged', () => assert.equal(checkAdminAccess(new Headers(), 'GET', config), 401));
test('incorrect username is rejected', () => assert.equal(checkAdminAccess(headers('wrong'), 'GET', config), 401));
test('incorrect password is rejected', () => assert.equal(checkAdminAccess(headers(config.username,'wrong'), 'GET', config), 401));
test('malformed authorization is rejected', () => assert.equal(checkAdminAccess(new Headers({authorization:'Basic !!!'}), 'GET', config), 401));
test('middleware bypass header cannot grant access', () => assert.equal(checkAdminAccess(new Headers({'x-middleware-subrequest':'middleware:middleware:middleware:middleware:middleware'}),'GET',config),401));
for (const method of ['POST','PUT','PATCH','DELETE']) {
  test(method + ' accepts authenticated same-origin requests', () => assert.equal(checkAdminAccess(headers(config.username,password,{origin:'https://imperialcleaninginc.com','sec-fetch-site':'same-origin'}),method,config),200));
  test(method + ' rejects cross-site requests', () => assert.equal(checkAdminAccess(headers(config.username,password,{origin:'https://attacker.example','sec-fetch-site':'cross-site'}),method,config),403));
}
test('misleading hostname does not count as same origin', () => assert.equal(checkAdminAccess(headers(config.username,password,{origin:'https://imperialcleaninginc.com.attacker.example'}),'POST',config),403));
test('passwords containing colons work', () => assert.equal(checkAdminAccess(headers(),'GET',config),200));
test('no secret appears in an error response', async () => {
  process.env.ADMIN_USERNAME=config.username; process.env.ADMIN_PASSWORD=password; process.env.NEXT_PUBLIC_DESIGN_PREVIEW='0';
  const response=requireAdmin(new Request('https://imperialcleaninginc.com/api/admin/projects'));
  assert.equal(response.status,401); assert.ok(response.headers.get('www-authenticate'));
  assert.match(response.headers.get('cache-control'),/no-store/); assert.match(response.headers.get('x-robots-tag'),/noindex/);
  assert.ok(!(await response.text()).includes(password));
});
test('pagination cannot be negative, unbounded, nonfinite or invalid', () => {
  for (const value of ['-1','Infinity','NaN','1.2','bad','999999999999999999999']) assert.equal(boundedInteger(value,50,100),50);
  assert.equal(boundedInteger('999',50,100),100); assert.equal(boundedInteger('0',50,100),1); assert.equal(boundedInteger(null,50,100),50);
});

test('state-changing Basic-auth requests require an origin',()=>{const h=new Headers({authorization:'Basic '+Buffer.from('tester:'+'a'.repeat(24)).toString('base64')});assert.equal(checkAdminAccess(h,'POST',{username:'tester',password:'a'.repeat(24)}),403);});

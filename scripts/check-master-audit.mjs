import { createRequire } from 'node:module';
import { mkdtemp, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const temporary = await mkdtemp(join(tmpdir(), 'imperial-audit-'));
try {
  for (const [source, target] of [['lib/contact-delivery.ts','contact-delivery.mjs'],['lib/analytics.ts','analytics.mjs'],['lib/public-route-paths.ts','public-route-paths.mjs'],['app/robots.ts','robots.mjs']]) {
    const result = ts.transpileModule(await readFile(source,'utf8'), {compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022},reportDiagnostics:true});
    if (result.diagnostics.length) throw new Error('Syntax diagnostics in '+source);
    await writeFile(join(temporary,target),result.outputText.replace('"./public-route-paths"','"./public-route-paths.mjs"'));
  }
  const tests = (await readdir('tests/master-audit')).filter(name=>name.endsWith('.test.mjs'));
  for (const name of tests) await writeFile(join(temporary,name),await readFile(join('tests/master-audit',name)));
  const result = spawnSync(process.execPath, ['--test', ...tests.map(name=>join(temporary,name))], {stdio:'inherit',env:process.env});
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally { await rm(temporary,{recursive:true,force:true}); }

import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const root = process.env.IMPERIAL_AUDIT_ROOT || process.cwd();
const ts = createRequire(join(root, 'package.json'))('typescript');
const config = ts.getParsedCommandLineOfConfigFile(join(root, 'tsconfig.json'), {}, {
  ...ts.sys,
  onUnRecoverableConfigFileDiagnostic(diagnostic) {
    throw new Error(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
  },
});
assert.ok(config, 'The repository tsconfig.json must be readable.');
assert.equal(config.errors.length, 0, 'The repository compiler configuration must be valid.');

test('production compiler target supports the native iterables used by the application', () => {
  assert.ok(
    config.options.target !== undefined && config.options.target >= ts.ScriptTarget.ES2015,
    'Set and Map iteration require an explicit ES2015-or-newer target. Do not fall back to ES5.',
  );
  assert.equal(config.options.strict, true, 'Keep strict checking enabled.');
});

test('publishing policy passes semantic type checking with the production compiler settings', () => {
  // This dependency-free module is the actual file that blocked publication.
  // Check types, not just syntax. Disable build-cache writes and unrelated ambient
  // packages for this isolated check; keep the project target, libs and strictness.
  const program = ts.createProgram([join(root, 'lib/publishing-policy.ts')], {
    ...config.options,
    incremental: false,
    noEmit: true,
    types: [],
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  const messages = ts.formatDiagnostics(diagnostics, {
    getCanonicalFileName: file => file,
    getCurrentDirectory: () => root,
    getNewLine: () => '\n',
  });
  assert.equal(diagnostics.length, 0, messages);
});

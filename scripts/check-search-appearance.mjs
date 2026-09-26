import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync, mkdtempSync, rmSync, symlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';

const root = process.cwd();
const require = createRequire(join(root, 'package.json'));
const ts = require('typescript');
const sharp = require('sharp');
const config = ts.getParsedCommandLineOfConfigFile(join(root, 'tsconfig.json'), {}, { ...ts.sys, onUnRecoverableConfigFileDiagnostic(d) { throw new Error(ts.flattenDiagnosticMessageText(d.messageText, '\n')); } });
assert.ok(config && !config.errors.length, 'Read the actual application compiler settings.');
const sources = ['app/imperial-cleaning-icon-96.png/route.ts', 'app/imperial-cleaning-icon-192.png/route.ts', 'lib/schema-serialization.ts', 'lib/search-appearance.ts', 'lib/search-preview.ts', 'data/construction-cost-content.ts', 'app/search-previews/[filename]/route.ts', 'app/site-media/[filename]/route.ts'];
const scratch = mkdtempSync(join(tmpdir(), 'imperial-search-'));
const output = process.env.SEARCH_EVIDENCE_DIR;
let checks = 0;
function check(name, fn) { fn(); checks++; console.log(`PASS ${name}`); }
try {
  const program = ts.createProgram(sources.map(p => join(root, p)), { ...config.options, noEmit: true, incremental: false });
  const diagnostics = ts.getPreEmitDiagnostics(program);
  check('new metadata, media renderers and route handlers pass project semantic type checking', () => assert.equal(diagnostics.length, 0, ts.formatDiagnostics(diagnostics, { getCanonicalFileName: p => p, getCurrentDirectory: () => root, getNewLine: () => '\n' })));
  for (const source of sources) {
    const compiled = ts.transpileModule(readFileSync(source, 'utf8'), { fileName: source, compilerOptions: { ...config.options, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.Node10, incremental: false }, reportDiagnostics: true });
    assert.equal(compiled.diagnostics.length, 0, source);
    const target = join(scratch, source.replace(/\.ts$/, '.js'));
    mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, compiled.outputText);
  }
  mkdirSync(join(scratch, 'data'), { recursive: true });
  writeFileSync(join(scratch, 'data/search-listings.json'), readFileSync('data/search-listings.json'));
  mkdirSync(join(scratch, 'node_modules/@'), { recursive: true });
  symlinkSync(join(scratch, 'lib'), join(scratch, 'node_modules/@/lib'), 'dir');
  symlinkSync(dirname(dirname(require.resolve('sharp'))), join(scratch, 'node_modules/sharp'), 'dir');
  const appearance = require(join(scratch, 'lib/search-appearance.js'));
  const { serializeStructuredData } = require(join(scratch, 'lib/schema-serialization.js'));
  for (const text of ['</script><script>alert(1)</script>', 'Rough & final \"cleaning\"', 'Unicode: \u2028 \u2029', 'Source review text, preserved verbatim']) {
    check('structured-data serialization preserves values without an HTML breakout: ' + JSON.stringify(text), () => {
      const payload = { '@type': 'WebPage', description: text };
      const encoded = serializeStructuredData(payload);
      assert.ok(!encoded.includes('<'));
      assert.deepEqual(JSON.parse(encoded), payload);
    });
  }
  const mediaRoute = require(join(scratch, 'app/search-previews/[filename]/route.js'));
  const photoRoute = require(join(scratch, 'app/site-media/[filename]/route.js'));
  const expected = JSON.parse(readFileSync('data/public-routes.generated.json', 'utf8'));
  const entries = JSON.parse(readFileSync('data/search-listings.json', 'utf8'));
  check('reviewed listings cover exactly the 95 registered public pages', () => assert.deepEqual([...appearance.searchPaths].sort(), [...expected].sort()));
  check('all titles and descriptions are distinct', () => { assert.equal(new Set(Object.values(entries).map(e => e.title)).size, 95); assert.equal(new Set(Object.values(entries).map(e => e.description)).size, 95); });
  check('every title carries the brand once without unsupported promotional claims', () => {
    for (const entry of Object.values(entries)) {
      assert.equal((entry.title.match(/Imperial Cleaning/g) || []).length, 1);
      assert.doesNotMatch(entry.title + entry.description, /premier|best in|24 hours|guarantee|licensed|certified|\$\d|\u2014|--/i);
    }
  });
  check('new preview paths cannot collide', () => assert.equal(new Set(expected.map(appearance.previewFilename)).size, 95));
  check('private paths, tracking variants, unknown paths and object prototype names are rejected', () => {
    for (const path of ['/admin', '/api/contact', '/contact?email=private', '/unknown', 'constructor', '__proto__', 'https://foreign.example/']) assert.throws(() => appearance.buildSearchMetadata(path));
  });
  check('static preview enumeration matches the public page set exactly', () => assert.deepEqual(mediaRoute.generateStaticParams().map(p => p.filename).sort(), expected.map(appearance.previewFilename).sort()));
  if (output) mkdirSync(output, { recursive: true });
  const inventory = [], fingerprints = new Set();
  for (const path of expected) {
    const metadata = appearance.buildSearchMetadata(path, { published: '2026-09-01', modified: '2026-09-25' });
    check(path + ': consistent canonical, title, description, social metadata and icons', () => {
      assert.equal(metadata.alternates.canonical, 'https://imperialcleaninginc.com' + path);
      assert.equal(metadata.title.absolute, entries[path].title);
      assert.equal(metadata.description, entries[path].description);
      assert.equal(metadata.openGraph.title, metadata.title.absolute);
      assert.equal(metadata.twitter.title, metadata.title.absolute);
      assert.equal(metadata.openGraph.description, metadata.description);
      assert.equal(metadata.twitter.description, metadata.description);
      assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
      assert.deepEqual(metadata.icons, appearance.SITE_ICONS);
      assert.ok(!('robots' in metadata), 'Page metadata must not override the environment/private index policy.');
      assert.equal(metadata.openGraph.images[0].url, metadata.twitter.images[0].url);
      assert.match(metadata.openGraph.images[0].alt, /^Imperial Cleaning Inc title card:/);
    });
    const filename = appearance.previewFilename(path);
    const response = await mediaRoute.GET(new Request('https://imperialcleaninginc.com/search-previews/' + filename), { params: { filename } });
    const bytes = Buffer.from(await response.arrayBuffer()), info = await sharp(bytes).metadata();
    check(path + ': actual route handler returns a usable 1200 by 630 PNG', () => {
      assert.equal(response.status, 200); assert.equal(response.headers.get('content-type'), 'image/png');
      assert.equal(info.width, 1200); assert.equal(info.height, 630); assert.equal(info.format, 'png');
      assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    });
    // A missing font must not silently produce an empty card heading.
    const pixels = await sharp(bytes).extract({ left: 85, top: 200, width: 845, height: 275 }).removeAlpha().raw().toBuffer();
    let white = 0; for (let i = 0; i < pixels.length; i += 3) if (pixels[i] > 220 && pixels[i + 1] > 220 && pixels[i + 2] > 220) white++;
    check(path + ': visible heading pixels are present', () => assert.ok(white > 500));
    const sha = createHash('sha256').update(bytes).digest('hex'); fingerprints.add(sha);
    inventory.push({ path, filename, canonical: metadata.alternates.canonical, title: metadata.title.absolute, description: metadata.description, width: info.width, height: info.height, bytes: bytes.length, sha256: sha });
    if (output && ['/', '/construction-cleaning', '/commercial-cleaning', '/resources/post-construction-cleaning-cost', '/idaho/construction-cleaning/idaho-falls', '/utah/commercial-cleaning/salt-lake-city'].includes(path)) writeFileSync(join(output, filename), bytes);
  }
  check('all 95 page-specific share graphics are distinct', () => assert.equal(fingerprints.size, 95));
  for (const filename of ['unknown.png', '../hero-logo.webp', 'home.svg', 'home.png?title=spoof']) {
    const response = await mediaRoute.GET(new Request('https://imperialcleaninginc.com/search-previews/unknown.png'), { params: { filename } });
    check('invalid preview ' + filename + ' is a 404, not an arbitrary image renderer', () => assert.equal(response.status, 404));
  }
  for (const size of [96, 192]) {
    const iconRoute = require(join(scratch, `app/imperial-cleaning-icon-${size}.png/route.js`));
    const response = await iconRoute.GET();
    const iconBytes = Buffer.from(await response.arrayBuffer());
    const image = await sharp(iconBytes).metadata();
    if (output) writeFileSync(join(output, `imperial-cleaning-icon-${size}.png`), iconBytes);
    check(`${size}-pixel brand favicon is square PNG above the recommended minimum`, () => { assert.equal(image.width, size); assert.equal(image.height, size); assert.equal(image.format, 'png'); assert.equal(response.status, 200); assert.equal(response.headers.get('content-type'), 'image/png'); });
  }
  const photo = await photoRoute.GET(new Request('https://imperialcleaninginc.com/site-media/commercial-office-interior.webp'), { params: { filename: 'commercial-office-interior.webp' } });
  const photoBytes = Buffer.from(await photo.arrayBuffer()), photoInfo = await sharp(photoBytes).metadata();
  check('existing office photograph is served as a smaller 1600px WebP', () => {
    assert.equal(photo.status, 200); assert.equal(photoInfo.format, 'webp'); assert.equal(photoInfo.width, 1600);
    assert.ok(photoBytes.length < readFileSync('public/images/commercial-interior.jpg').length);
  });
  const badPhoto = await photoRoute.GET(new Request('https://imperialcleaninginc.com/site-media/missing'), { params: { filename: '../private' } });
  check('photo endpoint never reads a caller-selected file', () => assert.equal(badPhoto.status, 404));
  const tsx = ['components/structured-data.tsx','app/page.tsx','app/layout.tsx','app/about/page.tsx','app/contact/page.tsx','app/construction-cleaning/page.tsx','app/commercial-cleaning/page.tsx','app/service-areas/page.tsx','app/service-areas/idaho/page.tsx','app/service-areas/utah/page.tsx','app/resources/page.tsx','app/resources/[slug]/page.tsx','app/privacy-policy/page.tsx','app/terms-of-service/page.tsx','app/sitemap/page.tsx','app/reviews/page.tsx','app/[state]/[service]/[city]/page.tsx','components/hero-section.tsx','components/pages/industry-cleaning-page.tsx'];
  for (const file of tsx) check(file + ': TSX syntax', () => assert.equal(ts.transpileModule(readFileSync(file, 'utf8'), { fileName: file, compilerOptions: config.options, reportDiagnostics: true }).diagnostics.length, 0));
  check('the balanced homepage retains both service actions and image priority', () => {
    const hero = readFileSync('components/hero-section.tsx', 'utf8');
    assert.ok(hero.includes('Get a construction quote')); assert.ok(hero.includes('href="/commercial-cleaning" className="ic-button secondary"'));
    assert.ok(hero.includes('Office interior with glass partitions, desks, and carpeted floors')); assert.match(hero, /\bpriority\s*\/>/);
  });
  check('current private/preview safeguards and broad public crawler access are retained', () => {
    assert.match(readFileSync('app/layout.tsx', 'utf8'), /index: !preview, follow: !preview/);
    assert.match(readFileSync('middleware.ts', 'utf8'), /privateRoute \|\| preview \|\| policy.noindex/);
    assert.match(readFileSync('app/robots.ts', 'utf8'), /userAgent: '\*', allow: '\/'/);
  });
  check('review quotes remain source data, with no self-serving review-star graph', () => {
    const source = readFileSync('app/reviews/page.tsx', 'utf8') + readFileSync('components/review-browser.tsx', 'utf8');
    assert.ok(source.includes('{review.text}')); assert.ok(source.includes('href={review.sourceUrl}'));
    assert.doesNotMatch(source, /'@type': '(Review|AggregateRating)'/);
  });
  check('the refreshed construction cost guide contains no unverified numeric rate', () => {
    const source = readFileSync('data/construction-cost-content.ts', 'utf8');
    assert.doesNotMatch(source, /\$\s*\d/); assert.ok(source.includes('not a full scope'));
    assert.ok(readFileSync('data/guides.ts', 'utf8').includes("guide.slug === 'post-construction-cleaning-cost' ? constructionCostUpdate"));
  });

  check('existing root search copy agrees with the reviewed homepage entry', () => {
    const source = readFileSync('data/service-priorities.ts', 'utf8');
    assert.ok(source.includes(entries['/'].title));
    assert.ok(source.includes(entries['/'].description));
  });
  check('literal routes delegate to the reviewed metadata with the correct path', () => {
    const paths = ['/about','/contact','/construction-cleaning','/commercial-cleaning','/service-areas','/service-areas/idaho','/service-areas/utah','/resources','/privacy-policy','/terms-of-service','/sitemap'];
    for (const path of paths) {
      const file = readFileSync('app' + path + '/page.tsx', 'utf8');
      assert.ok(file.includes('buildSearchMetadata'), path);
      assert.ok(file.includes("'" + path + "'") || file.includes('"' + path + '"'), path);
    }
    assert.match(readFileSync('lib/industry-page-utils.ts','utf8'), /buildSearchMetadata\(`/);
    for (const file of ['app/[state]/[service]/[city]/page.tsx','app/resources/[slug]/page.tsx']) assert.ok(readFileSync(file,'utf8').includes('buildSearchMetadata'));
  });
  if (output) {
    writeFileSync(join(output, 'verified-search-assets.json'), JSON.stringify({ checks, environment: { node: process.version, typescript: ts.version, sharp: sharp.versions.sharp }, scope: 'Direct module/route-handler tests, not a complete Next.js build or live deployment.', photo: { oldBytes: readFileSync('public/images/commercial-interior.jpg').length, newBytes: photoBytes.length }, inventory }, null, 2));
    writeFileSync(join(output, 'commercial-office-interior.webp'), photoBytes);
  }
  console.log(`\n${checks} search-appearance checks passed. Full Next.js build and production crawl remain separate gates.`);
} finally { rmSync(scratch, { recursive: true, force: true }); }

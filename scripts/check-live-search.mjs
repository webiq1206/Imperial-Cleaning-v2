import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Read-only acceptance check to run after this commit has been deployed.
const canonicalOrigin = 'https://imperialcleaninginc.com';
const origin = new URL(process.env.SEO_VERIFY_ORIGIN || canonicalOrigin).origin;
const listings = JSON.parse(readFileSync('data/search-listings.json', 'utf8'));
const paths = Object.keys(listings);
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(?:39|x27);/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
const attrs = tag => Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g), m => [m[1].toLowerCase(), decode(m[2] ?? m[3])]));
const filename = path => (path === '/' ? 'home' : path.slice(1).replaceAll('/', '-')) + '.png';
const results = [];
async function get(path) {
  const response = await fetch(origin + path, { headers: { 'User-Agent': 'ImperialSearchAppearanceVerification/1.0' }, signal: AbortSignal.timeout(25000), redirect: 'follow' });
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response;
}
async function verify(path) {
  const errors = [];
  try {
    const response = await get(path), html = await response.text(), listing = listings[path];
    const tags = Array.from(html.matchAll(/<(?:meta|link)\b[^>]*>/gi), m => attrs(m[0]));
    const meta = name => tags.find(tag => tag.name === name || tag.property === name)?.content;
    const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
    const canonical = tags.find(tag => tag.rel === 'canonical')?.href;
    const image = `${canonicalOrigin}/search-previews/${filename(path)}`;
    const expect = (actual, expected, label) => { if (actual !== expected) errors.push(`${label}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`); };
    expect(title, listing.title, 'title');
    expect(meta('description'), listing.description, 'description');
    expect(canonical, canonicalOrigin + path, 'canonical');
    expect(meta('og:title'), listing.title, 'Open Graph title');
    expect(meta('og:description'), listing.description, 'Open Graph description');
    expect(meta('og:url'), canonical, 'Open Graph URL');
    expect(meta('og:image'), image, 'Open Graph image');
    expect(meta('twitter:image'), image, 'Twitter image');
    if (!tags.some(tag => tag.rel === 'icon' && tag.href?.endsWith('/imperial-cleaning-icon-96.png'))) errors.push('96px brand favicon is not declared');
    if (/noindex/i.test((meta('robots') || '') + ' ' + (response.headers.get('x-robots-tag') || ''))) errors.push('noindex found on an intended public page');
    const preview = await get('/search-previews/' + filename(path)), bytes = Buffer.from(await preview.arrayBuffer());
    expect(preview.headers.get('content-type')?.split(';')[0], 'image/png', 'preview type');
    if (bytes.length < 24 || bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a' || bytes.readUInt32BE(16) !== 1200 || bytes.readUInt32BE(20) !== 630) errors.push('preview is not a 1200x630 PNG');
  } catch (error) { errors.push(error instanceof Error ? error.message : String(error)); }
  results.push({ path, passed: !errors.length, errors });
  console.log(`${errors.length ? 'FAIL' : 'PASS'} ${path}${errors.length ? ': ' + errors.join('; ') : ''}`);
}
let cursor = 0;
await Promise.all(Array.from({ length: 3 }, async () => { for (;;) { const index = cursor++; if (index >= paths.length) return; await verify(paths[index]); } }));
try {
  for (const size of [96, 192]) {
    const response = await get(`/imperial-cleaning-icon-${size}.png`), bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 24 || bytes.readUInt32BE(16) !== size || bytes.readUInt32BE(20) !== size) throw new Error(`Invalid ${size}px favicon`);
  }
  const robots = await (await get('/robots.txt')).text();
  if (!/User-Agent:\s*\*/i.test(robots) || !/Allow:\s*\//i.test(robots) || /Disallow:\s*\/\s*$/mi.test(robots)) throw new Error('Public wildcard crawler permission is missing or blocked');
  const sitemap = await (await get('/sitemap.xml')).text();
  for (const path of paths) if (!sitemap.includes(`<loc>${canonicalOrigin + path}</loc>`)) throw new Error(`Sitemap missing ${path}`);
  results.push({ path: 'shared-assets-and-discovery', passed: true, errors: [] });
} catch (error) { results.push({ path: 'shared-assets-and-discovery', passed: false, errors: [String(error)] }); }
const report = { checkedAt: new Date().toISOString(), origin, scope: 'Actual HTTP metadata and asset verification. Does not prove Google indexing, snippet selection, or rankings.', passed: results.filter(row => row.passed).length, failed: results.filter(row => !row.passed).length, results };
const destination = resolve(process.env.SEO_VERIFY_OUTPUT || 'search-production-verification.json');
writeFileSync(destination, JSON.stringify(report, null, 2) + '\n');
console.log(`Report: ${destination}. Passed: ${report.passed}. Failed: ${report.failed}.`);
if (report.failed) process.exitCode = 1;

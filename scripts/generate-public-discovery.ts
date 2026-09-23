import { mkdir, writeFile, rename, readFile, unlink } from 'node:fs/promises';
import { dirname } from 'node:path';
import { getPageRegistry } from '../lib/page-registry';
import { buildLLMS, buildPublicSitemap, selectPublicPaths, type PublicationRules, type PublicBusinessFacts } from '../lib/publishing-policy';
import rules from '../data/publication-rules.json';
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_CITY_LINE, BUSINESS_HOURS, BUSINESS_FULL_ADDRESS, GOOGLE_LISTING_URL } from '../data/business-info';

async function main() {
  const registry = getPageRegistry().map(page => page.url);
  const paths = selectPublicPaths(registry, rules as PublicationRules);
  if (!paths.length || !paths.includes('/') || !paths.includes('/contact')) throw new Error('Required public pages are missing. Existing generated output was not replaced.');
  buildPublicSitemap(registry, rules as PublicationRules); // Validate significant modification dates before replacing files.
  const facts: PublicBusinessFacts = { name: BUSINESS_NAME, phone: BUSINESS_PHONE, email: BUSINESS_EMAIL, city: BUSINESS_CITY_LINE,
    fullAddress: BUSINESS_FULL_ADDRESS, googleListingUrl: GOOGLE_LISTING_URL,
    hours: `Monday-Friday ${BUSINESS_HOURS.weekday.label}; Saturday ${BUSINESS_HOURS.saturday.label}; Sunday closed` };
  const outputs: [string,string][] = [
    ['data/public-routes.generated.json', JSON.stringify(paths,null,2)+'\n'],
    ['public/llms.txt', buildLLMS(paths,facts)],
    ['public/llms-full.txt', buildLLMS(paths,facts,true)],
  ];
  if (process.argv.includes('--check')) {
    for (const [path,content] of outputs) if (await readFile(path,'utf8') !== content) throw new Error(`Stale generated file: ${path}. Run npm run discovery:generate.`);
    console.log(`Public discovery is current: ${paths.length} routes.`); return;
  }
  // Validate all output before writing. Temporary files live beside their destinations for atomic rename.
  const staged: [string,string][] = [];
  try {
    for (const [path,content] of outputs) { await mkdir(dirname(path),{recursive:true}); const temporary=`${path}.build-tmp`; await writeFile(temporary,content,'utf8'); staged.push([temporary,path]); }
    for (const [temporary,path] of staged) await rename(temporary,path);
  } finally { await Promise.all(staged.map(([temporary]) => unlink(temporary).catch(() => undefined))); }
  console.log(`Generated public discovery for ${paths.length} canonical pages. No network request was made.`);
}
main().catch(error => { console.error(error instanceof Error ? error.message : 'Public discovery generation failed.'); process.exitCode=1; });

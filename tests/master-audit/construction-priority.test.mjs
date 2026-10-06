import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';

const root = process.env.IMPERIAL_AUDIT_ROOT || process.cwd();
const ts = createRequire(join(root, 'package.json'))('typescript');
const read = path => readFileSync(join(root, path), 'utf8');
const config = ts.getParsedCommandLineOfConfigFile(join(root, 'tsconfig.json'), {}, {
  ...ts.sys, onUnRecoverableConfigFileDiagnostic(d) { throw Error(ts.flattenDiagnosticMessageText(d.messageText, '\n')); },
});
assert.ok(config && !config.errors.length);
const temporary = mkdtempSync(join(tmpdir(), 'imperial-construction-priority-'));
after(() => rmSync(temporary, { recursive: true, force: true }));
const modules = ['data/service-priorities.ts', 'data/navigation.ts', 'data/home-faqs.ts', 'lib/construction-links.ts', 'lib/publishing-policy.ts'];
for (const source of modules) {
  const compiled = ts.transpileModule(read(source), { compilerOptions: { ...config.options, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.Node10, incremental: false }, fileName: source, reportDiagnostics: true });
  assert.equal(compiled.diagnostics.length, 0, source + ": " + compiled.diagnostics.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\n")).join("\n"));
  const path = join(temporary, source.replace(/\.ts$/, '.js'));
  mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, compiled.outputText);
}
const require = createRequire(join(root, 'package.json'));
const { homeSearch, constructionPhases, constructionResources, quoteServices, quoteServiceFromSearch, CONSTRUCTION_QUOTE_HREF } = require(join(temporary, 'data/service-priorities.js'));
const { navigation } = require(join(temporary, 'data/navigation.js'));
const { homeFaqs } = require(join(temporary, 'data/home-faqs.js'));
const { constructionPriorityLinks, selectRelatedLinks } = require(join(temporary, 'lib/construction-links.js'));
const { buildLLMS, buildPublicSitemap } = require(join(temporary, 'lib/publishing-policy.js'));
const paths = JSON.parse(read('data/public-routes.generated.json'));
const known = new Set(paths);
const facts = { name:'Imperial Cleaning Inc', phone:'(208) 520-3202', email:'service@imperialcleaninginc.com', city:'Idaho Falls, ID 83402', hours:'Monday-Friday 8:00 AM - 5:00 PM; Saturday 9:00 AM - 1:00 PM; Sunday closed', fullAddress:'2653 Clarence Pl, Idaho Falls, ID 83402', googleListingUrl:'https://share.google/MfZvSeSp2XJUxm3GH' };

test('changed pure modules pass semantic type checking under the project ES2017 settings', () => {
  assert.equal(config.options.target, ts.ScriptTarget.ES2017);
  const program = ts.createProgram(modules.map(path => join(root, path)), { ...config.options, incremental:false, noEmit:true, types:[] });
  const errors = ts.getPreEmitDiagnostics(program);
  assert.equal(errors.length, 0, ts.formatDiagnostics(errors, { getCanonicalFileName:x=>x, getCurrentDirectory:()=>root, getNewLine:()=> '\n' }));
});
test('changed TSX components have no TypeScript syntax diagnostics', () => {
  for (const path of ['app/page.tsx','app/layout.tsx','components/hero-section.tsx','components/pages/home-client.tsx','components/layout/footer.tsx','components/quote-form.tsx','components/contextual-contact.tsx','components/shared/related-content.tsx']) {
    const result = ts.transpileModule(read(path), { compilerOptions: config.options, fileName:path, reportDiagnostics:true });
    assert.equal(result.diagnostics.length, 0, path);
  }
});
test('homepage search promise leads with construction and names only the headquarters city', () => {
  // Search Console, 2026-10-01: the homepage is the only page ranking for "commercial cleaning idaho falls",
  // "janitorial services idaho falls" and "office cleaning idaho falls", and those positions slipped from
  // 5-6 (Q3 2025) to 8-14 (Q3 2026). The title may name Idaho Falls; other cities belong on their own pages.
  assert.match(homeSearch.title, /^Construction/);
  assert.match(homeSearch.title, /Idaho Falls/);
  assert.match(homeSearch.description, /^Construction cleanup and post-construction cleaning/);
  for (const value of [homeSearch.title,homeSearch.keywords]) assert.doesNotMatch(value, /Boise|Pocatello|Salt Lake/);
  assert.doesNotMatch(homeSearch.keywords, /Idaho Falls/);
  assert.match(homeSearch.keywords, /construction cleanup/); assert.match(homeSearch.keywords, /construction cleaning/); assert.match(homeSearch.keywords, /post construction cleanup/);
});
test('title, social cards, and homepage schema use the same construction-first source', () => {
  const source=read('app/page.tsx'); assert.ok((source.match(/homeSearch\.title/g)||[]).length>=4);
  assert.match(source,/description: homeSearch.description/); assert.match(source,/canonical: origin/);
  assert.doesNotMatch(source,/index:\s*true/);
});
test('hero leads with construction and gives commercial cleaning an explicit visible action', () => {
  const source=read('components/hero-section.tsx');assert.match(source,/<h1>\{homeSearch.headline\}/);
  assert.match(source,/href=\{CONSTRUCTION_QUOTE_HREF\}/); assert.match(source,/Post-construction cleanup for general contractors/);
  assert.match(source,/href="\/commercial-cleaning" className="ic-button secondary"/);
  assert.match(source,/recurring commercial cleaning for offices and business facilities/);
  assert.ok(source.indexOf('href={CONSTRUCTION_QUOTE_HREF}') < source.indexOf('href="/commercial-cleaning"'));
  assert.match(source,/className="hero-phone"/);
  assert.equal(CONSTRUCTION_QUOTE_HREF,'/contact?service=construction');
});
test('all construction phases are distinct canonical destinations in the leading menu', () => {
  assert.equal(navigation[0].id,'construction');assert.equal(navigation[0].links[0].href,'/construction-cleaning');
  assert.equal(new Set(constructionPhases.map(p=>p.href)).size,3);
  for (const phase of constructionPhases) assert.ok(navigation[0].links.some(link=>link.href===phase.href));
});
test('commercial cleaning remains an accessible secondary menu, without new unsupported specialty promotion', () => {
  assert.equal(navigation[1].id,'commercial');assert.equal(navigation[1].links[0].href,'/commercial-cleaning');
  assert.ok(navigation[1].links.some(link=>link.href==='/office-cleaning'));
  assert.ok(navigation[1].links.some(link=>link.href==='/janitorial-services'));
  assert.ok(!navigation.flatMap(group=>group.links).some(link=>['/commercial-floor-care','/property-management-cleaning'].includes(link.href)));
});
test('every new navigation and planning link resolves to an existing canonical public route', () => {
  for (const link of [...navigation.flatMap(group=>group.links),...constructionPhases,...constructionResources]) {
    assert.ok(known.has(link.href),link.href); assert.ok(!/[?#]/.test(link.href));
  }
});
test('both service cards are in the first section before phase detail and reviews', () => {
  const source=read('components/pages/home-client.tsx');
  const first=source.indexOf('id="services"'),commercial=source.indexOf('id="commercial-cleaning"');
  const end=source.indexOf('</section>',first);
  assert.ok(first>=0 && commercial>first && commercial<end);
  assert.ok(source.indexOf('id="construction-service-title"')<commercial);
  for (const marker of ['id="construction-phases"','id="reviews"','id="construction-resources"','id="service-areas"']) assert.ok(source.indexOf(marker)>end,marker);
  assert.equal((source.match(/id="commercial-cleaning"/g)||[]).length,1);
  assert.doesNotMatch(source,/ALSO AVAILABLE|commercial-secondary|Need regular cleaning after the building opens/);
});
test('construction proof reuses named source reviews rather than relabeling commercial testimonials', () => {
  const source=read('components/pages/home-client.tsx');
  for(const author of ['Ryan S.','V Josephson','Miles F.'])assert.ok(source.includes(author));
  assert.match(source,/mentionedServices\?\.includes\("construction-cleaning"\)/);assert.match(source,/\{review.text\}/);assert.match(source,/href=\{review.sourceUrl\}/);
});
test('FAQ copy leads with construction while preserving a truthful secondary commercial answer', () => {
  assert.match(homeFaqs[0].question,/post-construction/);assert.match(homeFaqs.at(-1).answer,/also provide/); assert.match(homeFaqs.at(-1).answer,/Construction cleanup remains our primary focus/);
  assert.equal(new Set(homeFaqs.map(f=>f.id)).size,homeFaqs.length);
  const source=read('app/page.tsx');assert.match(source,/mainEntity: homeFaqs.map/);assert.match(source,/text: faq.answer/);
});
test('new homepage copy does not reintroduce price, inspection, certification, or dispatch guarantees', () => {
  const copy=JSON.stringify({homeSearch,constructionPhases,constructionResources,homeFaqs});
  assert.doesNotMatch(copy,/\$\d|within 24 hours|same-day response|passes? (?:all |final )?inspection|OSHA.certified|100% satisfaction/i);
  assert.doesNotMatch(copy,/\u2014|--|&mdash;|&#8212;/);
});
test('construction is the first quote choice without removing either remaining choice', () => {
  assert.deepEqual(quoteServices.map(option=>option.value),['construction','commercial','both']);
  assert.match(read('components/quote-form.tsx'),/quoteServices.map/);
});
test('quote context accepts only one explicit recognized service', () => {
  for(const value of ['construction','commercial','both'])assert.equal(quoteServiceFromSearch('?service='+value),value);
  for(const search of ['', '?service=unknown','?service=Construction','?service=construction&service=commercial','?email=test@example.test','?service='])assert.equal(quoteServiceFromSearch(search),undefined);
});
test('quote context preserves an existing visitor choice and all delivery safeguards', () => {
  const source=read('components/quote-form.tsx');
  assert.ok(source.includes('if (!form.getValues("service") && context.service)'));
  assert.ok(source.includes('if (!form.getValues("location") && context.location)'));
  for(const text of ['Idempotency-Key','result?.status !== "accepted"','typeof result?.receipt !== "string"','controller.abort()','if (inFlight.current) return'])assert.ok(source.includes(text));
});
test('sticky contact suppression recognizes query-bearing quote CTAs', () => {
  const source=read('components/contextual-contact.tsx');assert.ok(source.includes('a[href^="/contact?"]'));
  for(const text of ["pathname === '/contact'",'!editing','!keyboard','!modal','!privacy'])assert.ok(source.includes(text));
});
test('all 24 construction city pages receive construction-specific related links with no broken targets', () => {
  const cities=paths.filter(path=>/^\/(idaho|utah)\/construction-cleaning\//.test(path));assert.equal(cities.length,24);
  for(const path of cities){const links=constructionPriorityLinks(path);assert.ok(links.length);assert.equal(links[0].url,'/construction-cleaning');for(const link of links){assert.ok(known.has(link.url),link.url);assert.notEqual(link.url,path);}}
});
test('commercial landing pages do not receive forced construction recommendation overrides', () => {
  for(const path of paths.filter(path=>/\/commercial-cleaning\//.test(path)))assert.deepEqual(constructionPriorityLinks(path),[]);
  assert.deepEqual(constructionPriorityLinks('/office-cleaning'),[]);
});
test('construction priorities also apply to the phase pages and construction resources', () => {
  for(const path of ['/construction-cleaning',...constructionPhases.map(p=>p.href),...constructionResources.map(p=>p.href)]){
    const links=constructionPriorityLinks(path);assert.ok(links.length);assert.ok(links.every(link=>known.has(link.url)&&link.url!==path));
  }
});
test('related links retain pins, exclusions, deduplication, and source-specific limits', () => {
  const links=selectRelatedLinks('/construction-cleaning',[{url:'/contact',anchor:'duplicate'}],[{url:'/contact',anchor:'Pinned quote'}],['/construction-cleaning/final-clean'],4);
  assert.equal(links[0].anchor,'Pinned quote');assert.equal(links.length,4);assert.equal(new Set(links.map(l=>l.url)).size,links.length);
  assert.ok(!links.some(l=>l.url==='/construction-cleaning/final-clean'));assert.deepEqual(selectRelatedLinks('/',[],[],[],0),[]);
});
test('default commercial recommendations remain unchanged where no exclusions or duplicates exist', () => {
  const base=[{url:'/janitorial-services',anchor:'Janitorial'},{url:'/contact',anchor:'Contact'}];
  assert.deepEqual(selectRelatedLinks('/commercial-cleaning',base),base);
});
test('both generated AI guides lead with construction and retain every canonical NAP fact', () => {
  for(const full of [false,true]){
    const text=buildLLMS(paths,facts,full),file=full?'public/llms-full.txt':'public/llms.txt';
    assert.equal(text,read(file));assert.ok(text.includes('> Construction cleanup and post-construction cleaning'));
    const serviceBlock=text.split('## Services')[1].split('## Coverage')[0];
    assert.ok(serviceBlock.indexOf('/construction-cleaning)')<serviceBlock.indexOf('/commercial-cleaning)'));
    for(const key of ['name','phone','email','fullAddress','googleListingUrl'])assert.ok(text.includes(facts[key]),key);
  }
});
test('public route inventory remains at 95 with valid reviewed publication dates', () => {
  const rules=JSON.parse(read('data/publication-rules.json'));assert.equal(rules['/'].modified,'2026-10-01');
  const sitemap=buildPublicSitemap(paths,rules,new Date('2026-10-06T23:59:59Z'));
  assert.equal(sitemap.length,95);assert.ok(known.has('/commercial-cleaning'));assert.ok(known.has('/construction-cleaning'));
});
test('layout and footer descriptions follow construction-first positioning without changing identity constants', () => {
  assert.match(read('app/layout.tsx'),/const description = 'Construction cleanup and post-construction cleaning/);
  const footer=read('components/layout/footer.tsx');assert.match(footer,/Construction cleanup for builders and contractors/);
  assert.match(footer,/Commercial cleaning for offices and business facilities/);
  assert.match(footer,/Get a quote for your project or workplace/);
  assert.ok(footer.includes('BUSINESS_FULL_ADDRESS'));assert.ok(footer.includes('PrivacySettingsButton'));
});

test('each early service card has its own service details and matching quote destination', () => {
  const source=read('components/pages/home-client.tsx');
  const section=source.slice(source.indexOf('id="services"'),source.indexOf('id="construction-phases"'));
  const split=section.indexOf('id="commercial-cleaning"');
  const construction=section.slice(0,split),commercial=section.slice(split);
  assert.match(construction,/href="\/construction-cleaning"/);
  assert.match(construction,/href=\{CONSTRUCTION_QUOTE_HREF\}/);
  for (const path of ['/commercial-cleaning','/office-cleaning','/janitorial-services']) {
    assert.ok(commercial.includes('href="'+path+'"')); assert.ok(known.has(path));
  }
  assert.match(commercial,/href="\/contact\?service=commercial"/);
  assert.equal(quoteServiceFromSearch('?service=commercial'),'commercial');
  assert.doesNotMatch(commercial,/href=\{CONSTRUCTION_QUOTE_HREF\}/);
});
test('service overview uses full-size shared cards and stacks both offers on mobile', () => {
  const source=read('components/pages/home-client.tsx'),css=read('app/construction-priority.css');
  assert.equal((source.match(/service-overview-card"/g)||[]).length,2);
  assert.match(css,/\.service-overview-grid \{ display:grid; grid-template-columns:minmax\(0,1\.2fr\) minmax\(0,1fr\)/);
  assert.match(css,/@media\(max-width:767px\) \{\s*\.imperial-site \.service-overview-grid \{ grid-template-columns:1fr; \}/);
  assert.match(css,/\.service-overview-actions \.text-link \{ min-height:44px/);
  assert.doesNotMatch(css,/commercial-secondary/);
  assert.ok(css.includes('.construction-first-hero .button-row .ic-button { width:100%; }'));
});

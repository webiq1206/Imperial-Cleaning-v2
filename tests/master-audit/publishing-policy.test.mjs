import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import { selectPublicPaths, buildPublicSitemap, buildLLMS, publicationResponse } from './publishing-policy.mjs';
const original=['/','/contact','/commercial-cleaning','/resources/guide'];
const facts={name:'Imperial Cleaning Inc',phone:'(208) 520-3202',email:'service@imperialcleaninginc.com',city:'Idaho Falls, ID 83402',hours:'Office hours',fullAddress:'2653 Clarence Pl, Idaho Falls, ID 83402',googleListingUrl:'https://share.google/MfZvSeSp2XJUxm3GH'};
test('creation joins the registry without a second handwritten list',()=>assert.ok(selectPublicPaths([...original,'/new-page']).includes('/new-page')));
test('duplicate registry paths do not duplicate exports',()=>assert.equal(selectPublicPaths([...original,'/contact']).length,4));
for(const rule of [{state:'draft'},{state:'removed'},{indexable:false}])test('excluded state leaves both discovery outputs '+JSON.stringify(rule),()=>{const paths=selectPublicPaths(original,{'/resources/guide':rule});assert.ok(!paths.includes('/resources/guide'));assert.ok(!buildLLMS(paths,facts,true).includes('/resources/guide'));});
test('rename exports new canonical, not old alias',()=>{const paths=selectPublicPaths([...original,'/resources/new-guide'],{'/resources/guide':{canonical:'/resources/new-guide'}});assert.ok(!paths.includes('/resources/guide'));assert.ok(paths.includes('/resources/new-guide'));assert.equal(publicationResponse('/resources/guide',{'/resources/guide':{canonical:'/resources/new-guide'}}).status,308);});
test('unpublish status is not an empty 200 shell',()=>{assert.equal(publicationResponse('/resources/guide',{'/resources/guide':{state:'draft'}}).status,404);assert.equal(publicationResponse('/resources/guide',{'/resources/guide':{state:'removed'}}).status,410);});
test('deletion from registry removes the link',()=>assert.ok(!buildLLMS(selectPublicPaths(original.filter(p=>p!=='/resources/guide')),facts,true).includes('/resources/guide')));
test('private routes, drafts, external links and queries cannot enter exports',()=>{const paths=selectPublicPaths([...original,'/admin','/admin-login','/admin/projects/name','/api/admin/stats','/_next/internal','/contact?email=secret','https://attacker.example/path']);assert.deepEqual(paths,original.sort());});
for(const canonical of ['https://attacker.example/contact','/missing','/api/admin/stats'])test('reject invalid canonical '+canonical,()=>assert.throws(()=>selectPublicPaths(original,{'/resources/guide':{canonical}})));
test('reject canonical chains and excluded destinations',()=>{assert.throws(()=>selectPublicPaths(original,{'/resources/guide':{canonical:'/contact'},'/contact':{indexable:false}}));assert.throws(()=>selectPublicPaths(original,{'/resources/guide':{canonical:'/contact'},'/contact':{canonical:'/commercial-cleaning'}}));});
test('no significant date is invented for unchanged or unknown content',()=>{const rows=buildPublicSitemap(original,{'/contact':{modified:'2026-09-21'}},new Date('2026-09-22'));assert.equal(rows.find(r=>r.url.endsWith('/contact')).lastModified,'2026-09-21');assert.ok(!('lastModified' in rows.find(r=>r.url.endsWith('/commercial-cleaning'))));});
for(const modified of ['not-a-date','2026-02-31','2099-01-01'])test('bad or future lastmod fails generation '+modified,()=>assert.throws(()=>buildPublicSitemap(original,{'/contact':{modified}},new Date('2026-09-22'))));
test('business-fact edits flow to both generated reference files',()=>{for(const full of [false,true]){const text=buildLLMS(original,{...facts,phone:'test-changed-phone'},full);assert.ok(text.includes('test-changed-phone'));assert.ok(!text.includes('(208)'));}});
test('reference files omit unsupported review counts, inspection promises and prices',()=>{const text=buildLLMS(original,facts);assert.ok(!text.includes('42 reviews'));assert.ok(!text.includes('102 reviews'));assert.ok(!text.includes('102+'));assert.ok(!text.includes('102+ verified reviews'));assert.ok(!text.includes('$0.15'));});
test('committed generated routes remain complete and unique at this checkpoint',async()=>{const paths=JSON.parse(await readFile('data/public-routes.generated.json','utf8'));assert.equal(new Set(paths).size,paths.length);assert.deepEqual(selectPublicPaths(paths),paths);assert.ok(paths.includes('/'));assert.ok(paths.includes('/contact'));});

// Regression: discovery generation must satisfy the existing NAP prebuild gate.
for (const full of [false, true]) {
  const filename = full ? 'llms-full.txt' : 'llms.txt';
  test(filename + ' includes the canonical address and original Google listing', () => {
    const text = buildLLMS(original, facts, full);
    assert.ok(text.includes(facts.fullAddress));
    assert.ok(text.includes(facts.googleListingUrl));
    assert.equal(text.split(facts.googleListingUrl).length - 1, 1);
    assert.ok(text.includes('Service-area pages describe coverage, not separate staffed offices.'));
  });
  test(filename + ' propagates address and listing updates without stale facts', () => {
    const updated = { ...facts, fullAddress: 'Changed test address', googleListingUrl: 'https://share.google/TestListing' };
    const text = buildLLMS(original, updated, full);
    assert.ok(text.includes(updated.fullAddress));
    assert.ok(text.includes(updated.googleListingUrl));
    assert.ok(!text.includes(facts.fullAddress));
    assert.ok(!text.includes(facts.googleListingUrl));
  });
}
for (const key of ['fullAddress', 'googleListingUrl']) {
  for (const value of [undefined, '', '   ']) {
    test('discovery rejects a missing ' + key + ' (' + JSON.stringify(value) + ')', () => {
      assert.throws(() => buildLLMS(original, { ...facts, [key]: value }), new RegExp('Missing required public business fact: ' + key));
    });
  }
}
test('both committed reference files match generation and satisfy the NAP facts', async () => {
  const paths = JSON.parse(await readFile('data/public-routes.generated.json', 'utf8'));
  const publishedFacts = { ...facts, hours: 'Monday-Friday 8:00 AM - 5:00 PM; Saturday 9:00 AM - 1:00 PM; Sunday closed' };
  for (const full of [false, true]) {
    const file = full ? 'public/llms-full.txt' : 'public/llms.txt';
    const content = await readFile(file, 'utf8');
    assert.equal(content, buildLLMS(paths, publishedFacts, full), file + ' is stale');
    for (const key of ['name', 'phone', 'email', 'fullAddress', 'googleListingUrl']) {
      assert.ok(content.includes(publishedFacts[key]), file + ' is missing ' + key);
    }
  }
});

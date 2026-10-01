import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { allServiceLocations } from '../data/service-locations';
import { localPlanning, nearbyLocations } from '../data/local-planning';
import { guides } from '../data/guides';
import { guideTools, guideToolText } from '../data/guide-tools';
import { quoteContext, quoteHref } from '../lib/quote-context';
import { buildServiceLocationUrl } from '../lib/routing-utils';
import { searchListing } from '../lib/search-appearance';
import { GET } from '../app/resources/[slug]/worksheet/route';
import { GET as contactAvailability } from '../app/api/contact/availability/route';
let checks=0;
function check(name:string,fn:()=>void){fn();checks++;console.log('PASS '+name);}
async function main(){
  const previousKey=process.env.RESEND_API_KEY, previousFrom=process.env.CONTACT_FROM_EMAIL, previousSendGrid=process.env.SENDGRID_API_KEY;
  delete process.env.RESEND_API_KEY; delete process.env.CONTACT_FROM_EMAIL; delete process.env.SENDGRID_API_KEY;
  try {
    const readiness=await contactAvailability();
    const body=await readiness.json();
    check('unconfigured contact readiness is explicit and never cached or indexed',()=>{assert.deepEqual(body,{available:false});assert.equal(readiness.headers.get('Cache-Control'),'no-store');assert.match(readiness.headers.get('X-Robots-Tag')||'',/noindex/);});
  } finally {
    if(previousKey!==undefined)process.env.RESEND_API_KEY=previousKey;
    if(previousFrom!==undefined)process.env.CONTACT_FROM_EMAIL=previousFrom;
    if(previousSendGrid!==undefined)process.env.SENDGRID_API_KEY=previousSendGrid;
  }
  check('24 cities have distinct planning entries',()=>{assert.equal(allServiceLocations.length,24);assert.equal(new Set(Object.values(localPlanning).flat()).size,48);});
  for(const city of allServiceLocations){
    check(city.name+' has useful planning and geographic neighbors',()=>{assert.equal(localPlanning[city.name]?.length,2);const nearby=nearbyLocations(city);assert.equal(nearby.length,4);assert.ok(nearby.every(other=>other.name!==city.name&&other.state===city.state));});
    for(const service of ['construction-cleaning','commercial-cleaning'] as const){
      const path=buildServiceLocationUrl(city.state,service,city.name);
      check(path+' owns metadata and passes quote context',()=>{const context=quoteContext(path);assert.equal(context.service,service==='construction-cleaning'?'construction':'commercial');assert.equal(context.location,`${city.name}, ${city.state}`);assert.deepEqual(quoteContext('/contact',quoteHref(path).split('?')[1]),context);assert.ok(searchListing(path).title.includes(city.name));assert.ok(searchListing(path).description.includes(city.name));});
    }
  }
  check('Boise nearby links prioritize Treasure Valley',()=>{const boise=allServiceLocations.find(city=>city.name==='Boise')!;assert.deepEqual(new Set(nearbyLocations(boise).map(city=>city.name)),new Set(['Meridian','Eagle','Nampa','Caldwell']));});
  check('unknown and duplicate query values are not reflected',()=>{assert.deepEqual(quoteContext('/contact','?service=bad&location=secret'),{service:undefined,location:undefined});assert.equal(quoteContext('/contact','?location=Boise%2C%20Idaho&location=Eagle%2C%20Idaho').location,undefined);});
  check('all 17 guides share the refreshed content and tools',()=>{assert.equal(guides.length,17);assert.equal(Object.keys(guideTools).length,17);assert.equal(guides.find(g=>g.slug==='post-construction-cleaning-cost')?.readTime,'4 min read');});
  for(const guide of guides){
    check(guide.slug+' has a complete editable worksheet',()=>{const text=guideToolText(guide.slug)!;assert.ok(text.includes(guideTools[guide.slug].title));assert.ok(text.includes('Notes / exclusions'));assert.ok(guideTools[guide.slug].rows.length>=3);});
    const response=await GET(new Request(`http://localhost/resources/${guide.slug}/worksheet`),{params:Promise.resolve({slug:guide.slug})});
    check(guide.slug+' download is safe and nonindexable',()=>{assert.equal(response.status,200);assert.equal(response.headers.get('X-Robots-Tag'),'noindex');assert.ok(response.headers.get('Content-Disposition')?.includes('.md'));});
    assert.equal(await response.text(),guideToolText(guide.slug));
  }
  const unknown=await GET(new Request('http://localhost'),{params:Promise.resolve({slug:'unknown'})});
  check('unknown worksheet returns 404',()=>assert.equal(unknown.status,404));
  check('RFP example weights total 100',()=>assert.equal(guideTools['commercial-cleaning-rfp-template'].rows.reduce((sum,row)=>sum+parseInt(row[1]),0),100));
  check('local template does not consume unsupported legacy claims',()=>{const text=readFileSync('components/pages/service-location-client.tsx','utf8');assert.doesNotMatch(text,/location-content-utils|ISO-certified|zero deficiencies|marketTier|majorEmployers/);});
  console.log(`${checks} website update checks passed.`);
}
main().catch(error=>{console.error(error);process.exitCode=1;});

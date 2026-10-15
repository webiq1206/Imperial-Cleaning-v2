// Isolated fixture: all HTTP requests are fulfilled locally or aborted; no production traffic.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:390,height:844}});
 let submitted=0;let rejectSubmission=true;
 await context.route('**/*',async route=>{
   const url=new URL(route.request().url());
   if(url.hostname!=='imperialcleaninginc.com') return route.abort();
   if(url.pathname.startsWith('/api/')) {
     if(url.pathname==='/api/contact/availability')return route.fulfill({json:{available:true}});
     submitted++; return rejectSubmission ? route.fulfill({status:503,json:{error:'LOCAL SYNTHETIC FAILURE'}}) : route.fulfill({json:{success:true,status:'accepted',receipt:'LOCAL-SYNTHETIC-ONLY'}});
   }
   const response=await context.request.get('http://127.0.0.1:4317'+url.pathname+url.search);
   return route.fulfill({response});
 });
 const results=[];
 for(const viewport of [{width:1180,height:757},{width:320,height:568}]) {
 const page=await context.newPage();page.setDefaultTimeout(120000);
 await page.setViewportSize(viewport);
 await page.goto('https://imperialcleaninginc.com/contact?service=construction');
 await page.locator('.privacy-panel').waitFor();
 await page.screenshot({path:`../contact-notice-${viewport.width}-oct15.png`});
 await page.getByLabel('City and state',{exact:false}).fill('THIS IS A TEST, ID');
 await page.getByRole('button',{name:'Continue',exact:true}).press('Enter');
 await page.getByRole('heading',{name:'How can we reach you?'}).waitFor();
 const back=page.getByRole('button',{name:'Back',exact:true});
 await back.scrollIntoViewIfNeeded();
 await back.evaluate(e=>{const r=e.getBoundingClientRect();window.scrollTo({top:window.scrollY+r.top+r.height/2-(innerHeight-36),behavior:'instant'});});
 // Focus outside the form without scrolling: a returning notice must not cover pointer targets.
 await page.locator('#main-content').evaluate(e=>e.focus({preventScroll:true}));
 await page.waitForTimeout(100);
 const rect=await back.boundingBox();
 const hit=await page.evaluate(({x,y})=>document.elementFromPoint(x,y)?.closest('button')?.textContent,{x:rect.x+rect.width/2,y:rect.y+rect.height/2});
 await page.mouse.click(rect.x+rect.width/2,rect.y+rect.height/2);
 await page.waitForTimeout(100);
 const returned=await page.getByRole('heading',{name:'Tell us about your space.'}).count();
 results.push({viewport,hit,returned});
 {
 assert.equal(returned,1);
 assert.equal(await page.getByLabel('City and state',{exact:false}).inputValue(),'THIS IS A TEST, ID');
 await page.getByRole('button',{name:'Continue',exact:true}).press('Enter');
 await page.getByRole('button',{name:'Back',exact:true}).press('Enter');
 assert.equal(await page.getByLabel('City and state',{exact:false}).inputValue(),'THIS IS A TEST, ID');
 }
 await page.close();
 }
 console.log(JSON.stringify({results,mockedSubmissions:submitted},null,2));
 assert.equal(submitted,0);
 await context.unrouteAll({behavior:'wait'});await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

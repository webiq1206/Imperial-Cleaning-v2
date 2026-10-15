// Isolated fixture: all HTTP requests are fulfilled locally or aborted; no production traffic.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:390,height:844}});
 let submitted=0;let rejectSubmission=true;let tearingDown=false;
 await context.route('**/*',async route=>{
   const url=new URL(route.request().url());
   if(url.hostname!=='imperialcleaninginc.com') return route.abort();
   if(url.pathname.startsWith('/api/')) {
     if(url.pathname==='/api/contact/availability')return route.fulfill({json:{available:true}});
     submitted++; return rejectSubmission ? route.fulfill({status:503,json:{error:'LOCAL SYNTHETIC FAILURE'}}) : route.fulfill({json:{success:true,status:'accepted',receipt:'LOCAL-SYNTHETIC-ONLY'}});
   }
   const owner=route.request().frame().page();
   const response=await context.request.get('http://127.0.0.1:4317'+url.pathname+url.search);
   try { await route.fulfill({response}); } catch(error) {
     // Page/context teardown can cancel a pending local response; active-test failures still throw.
     if ((!owner.isClosed() && !tearingDown) || !String(error).includes('Route is already handled')) throw error;
   }
 });
 let page=await context.newPage();page.setDefaultTimeout(120000);
 const results=[];
 for(const width of [320,390,430,768,1024,1280,1440]){
   await page.setViewportSize({width,height:width===320?568:844});
   await page.goto('https://imperialcleaninginc.com/contact?service=construction');
   await page.getByRole('button',{name:'Continue',exact:true}).waitFor();
   const dims=await page.evaluate(()=>({client:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
   results.push({width,...dims});assert.equal(dims.scroll,dims.client);
 }
 await page.locator('.privacy-panel').waitFor();
 await page.setViewportSize({width:390,height:844});
 await page.getByLabel('City and state',{exact:false}).fill('THIS IS A TEST, ID');
 for(let i=0;i<3;i++){
   await page.getByRole('button',{name:'Continue',exact:true}).press('Enter');
   const title=page.getByRole('heading',{name:'How can we reach you?'});
   await title.waitFor();await page.waitForTimeout(100);
   const pos=await title.evaluate(e=>({top:e.getBoundingClientRect().top,header:document.querySelector('header').getBoundingClientRect().bottom,focused:document.activeElement===e}));
   results.push({focus:i,...pos});assert(pos.focused);assert(pos.top>=pos.header);
   if(i<2)await page.getByRole('button',{name:'Back',exact:true}).click();
 }
 await page.getByLabel('Full name',{exact:false}).fill('THIS IS A TEST');
 await page.locator('.form-consent a').click();
 await page.waitForURL('**/privacy-policy');
 await page.goBack();
 await page.getByLabel('Full name',{exact:false}).waitFor();
 assert.equal(await page.getByLabel('Full name',{exact:false}).inputValue(),'THIS IS A TEST');
 await page.goForward();await page.goBack();
 assert.equal(await page.getByLabel('Full name',{exact:false}).inputValue(),'THIS IS A TEST');
 await page.reload();
 assert.equal(await page.getByLabel('Full name',{exact:false}).inputValue(),'THIS IS A TEST');
 await page.getByRole('button',{name:'Back',exact:true}).click();
 assert.equal(await page.getByLabel('City and state',{exact:false}).inputValue(),'THIS IS A TEST, ID');
 await page.setViewportSize({width:320,height:568});
 await page.locator('summary').filter({hasText:'Add project notes'}).click();
 await page.getByLabel('Anything we should know?').fill('THIS IS A TEST notes');
 assert.equal(await page.locator('.privacy-panel').evaluate(e=>getComputedStyle(e).position),'relative');
 await page.getByRole('button',{name:'Continue',exact:true}).focus();
 assert.equal(await page.locator('.privacy-panel').evaluate(e=>getComputedStyle(e).position),'relative');
 await page.screenshot({path:'../local-320.png'});
 await page.getByRole('button',{name:'Continue',exact:true}).click();
 await page.getByLabel('Email',{exact:false}).fill('synthetic@example.invalid');
 await page.getByLabel('Phone',{exact:false}).fill('2025550100');
 await page.getByRole('button',{name:'Request my free quote',exact:false}).click();
 await page.getByText('LOCAL SYNTHETIC FAILURE',{exact:false}).waitFor();
 assert.equal(await page.getByLabel('Full name',{exact:false}).inputValue(),'THIS IS A TEST');
 rejectSubmission=false;
 await page.getByRole('button',{name:'Request my free quote',exact:false}).click();
 await page.getByRole('heading',{name:'Your request was submitted.'}).waitFor();
 assert.equal(await page.evaluate(()=>sessionStorage.getItem('imperial:quote-draft:v1')),null);
 await page.reload();
 await page.getByLabel('City and state',{exact:false}).waitFor();
 assert.equal(await page.getByLabel('City and state',{exact:false}).inputValue(),'');
 await page.close();
 page=await context.newPage();
 await page.goto('https://imperialcleaninginc.com/contact');
 await page.getByRole('button',{name:'Continue',exact:true}).waitFor();
 await page.waitForTimeout(500);
 assert.equal(await page.locator('input[type=radio]:checked').count(),0);
 await page.setViewportSize({width:768,height:1024});
 await page.getByRole('button',{name:'Open navigation'}).click();
 const menu=page.getByRole('dialog');
 await menu.getByRole('link',{name:'Request Quote',exact:true}).waitFor();
 assert(await menu.getByRole('link',{name:/Call /}).isVisible());
 assert(await menu.getByRole('link',{name:/Text /}).isVisible());
 await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'Open navigation'}).waitFor();
 await page.screenshot({path:'../local-768.png'});
 await page.setViewportSize({width:1280,height:900});
 await page.getByRole('button',{name:'Services',exact:true}).click();
 const bounds=await page.locator('#services-mega-menu-panel').boundingBox();
 assert(bounds.x>=0 && bounds.x+bounds.width<=1280);
 await page.keyboard.press('Escape');
 assert.equal(submitted,2);
 console.log(JSON.stringify({results,history:'Back/Forward/reload preserves name, city and step',consent:'contact notice remains in document flow while notes and Continue have focus',mockedSubmissions:submitted},null,2));
 tearingDown=true;
 // Do not wait indefinitely for background prefetch handlers after every assertion has completed.
 await context.unrouteAll({behavior:'ignoreErrors'});
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

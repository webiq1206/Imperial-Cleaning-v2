import test from 'node:test';
import assert from 'node:assert/strict';
import * as a from './analytics.mjs';
let events=[];
function reset(){events=[];process.env.NEXT_PUBLIC_DESIGN_PREVIEW='0';global.window={gtag:(...args)=>events.push(args),dataLayer:[],__imperialAnalyticsConsent:true};}
test('successful inquiry is one lead, never a purchase or invented revenue',()=>{reset();a.trackConversionComplete('contact_form',{sourcePage:'quote_form',serviceType:'construction-cleaning',location:'Jared Private, 123 Address, private@example.test'});assert.equal(events.length,1);assert.equal(events[0][1],'generate_lead');assert.ok(!JSON.stringify(events).includes('Private'));assert.ok(!JSON.stringify(events).includes('purchase'));assert.ok(!('value' in events[0][2]));});
test('phone click is not completed call, lead or purchase',()=>{reset();a.trackConversionComplete('phone_call',{sourcePage:'quote_form'});assert.equal(events[0][1],'click_phone');});
test('free-text labels and error messages are dropped',()=>{reset();a.trackEvent('untrusted_event','private@example.test','Jared Private',900);a.trackAnalyticsError('event_error','token=secret&email=private@example.test');assert.ok(!/private|secret|Jared|900/.test(JSON.stringify(events)));});
test('search queries and rankings are not fabricated browser events',()=>{reset();a.trackSEOPerformance('address','construction-cleaning',{searchQuery:'private',rankingPosition:1});assert.equal(events.length,0);});
test('legacy page-view calls delegate to the sole deduplicating owner',()=>{reset();let forwarded='';window.__imperialTrackPage=url=>{forwarded=url;};a.trackPageView('/contact?email=private@example.test');assert.equal(events.length,0);assert.equal(forwarded,'/contact?email=private@example.test');});
test('private and unknown routes are not tracked',()=>{reset();a.trackPageView('/admin/projects/customer-id');a.trackPageView('/unknown-customer-name');assert.equal(events.length,0);});
test('tracking exceptions never bubble into form success handling',()=>{reset();window.gtag=()=>{throw Error('blocked');};assert.doesNotThrow(()=>a.trackConversionComplete('contact_form',{sourcePage:'quote_form'}));});
test('preview never emits analytics',()=>{reset();process.env.NEXT_PUBLIC_DESIGN_PREVIEW='1';a.trackConversionComplete('contact_form',{sourcePage:'quote_form'});assert.equal(events.length,0);});
test('server-side call does nothing',()=>{delete global.window;assert.doesNotThrow(()=>a.trackEvent('form_start'));});

test('denied consent emits no helper events',()=>{reset();window.__imperialAnalyticsConsent=false;a.trackEvent('form_start');a.trackConversionComplete('contact_form',{sourcePage:'quote_form'});assert.equal(events.length,0);});

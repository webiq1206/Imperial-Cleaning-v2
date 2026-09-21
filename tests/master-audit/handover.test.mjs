import test from 'node:test';
import assert from 'node:assert/strict';
import {handoverGroups,handoverItems,buildHandoverText} from './handover-checklist.mjs';
test('twenty unique tasks cover four handover stages',()=>{assert.equal(handoverItems.length,20);assert.equal(new Set(handoverItems.map(i=>i.id)).size,20);assert.equal(handoverGroups.length,4);});
test('blank download retains all items and scope limitation',()=>{const text=buildHandoverText([]);assert.equal((text.match(/\[ \]/g)||[]).length,20);assert.ok(text.includes('Not a cleaning procedure'));});
test('selected download marks each known item once',()=>{const text=buildHandoverText([handoverItems[0].id,handoverItems[0].id]);assert.ok(text.includes('1 of 20'));assert.equal((text.match(/\[x\]/g)||[]).length,1);});
test('unknown or injected selections never become document text',()=>{const text=buildHandoverText(['private@example.test','<script>injected</script>']);assert.ok(!text.includes('private@example.test'));assert.ok(!text.includes('<script>'));assert.ok(text.includes('0 of 20'));});
test('all-complete export remains a planning aid, not an inspection certificate',()=>{const text=buildHandoverText(handoverItems.map(i=>i.id));assert.ok(text.includes('20 of 20'));assert.ok(text.includes('inspection certification'));});

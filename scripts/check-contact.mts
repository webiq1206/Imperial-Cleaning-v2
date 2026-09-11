import assert from 'node:assert/strict';
import { NextRequest } from 'next/server';
import { POST } from '../app/api/contact/route';
// This check must never contact the email service.
delete process.env.RESEND_API_KEY;
delete process.env.CONTACT_FROM_EMAIL;
delete process.env.NEXT_PUBLIC_DESIGN_PREVIEW;
const request = (body: string) => new NextRequest('http://preview.invalid/api/contact', {method:'POST',headers:{'Content-Type':'application/json'},body});
const valid = {name:'Preview Test',email:'preview@example.com',phone:'2085550100',service:'commercial',location:'Idaho Falls, ID'};
assert.equal((await POST(request('{'))).status,400);
assert.equal((await POST(request('{}'))).status,400);
assert.equal((await POST(request(JSON.stringify({...valid,phone:'abcdefghij'})))).status,400);
assert.equal((await POST(request(JSON.stringify(valid)))).status,503);
process.env.NEXT_PUBLIC_DESIGN_PREVIEW='1';
assert.equal((await POST(request(JSON.stringify(valid)))).status,403);
console.log('Contact checks passed: malformed data, required fields, phone validation, missing delivery configuration, and preview submission blocking. No email sent.');

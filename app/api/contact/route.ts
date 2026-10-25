import { NextRequest, NextResponse } from 'next/server';
import { BUSINESS_EMAIL } from '@/data/business-info';
import { assertContactOrigin, contactIdempotencyKey, CONTACT_ATTACHMENT_LIMIT, CONTACT_BODY_LIMIT, ContactRequestError, deliverContactMail, readContactPayload, resolveContactProvider, type ContactMail } from '@/lib/contact-delivery';
import { prepareContactSubmission } from '@/lib/contact-submit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const unavailable = 'Online requests are temporarily unavailable. Please call (208) 520-3202 or email service@imperialcleaninginc.com.';
function reply(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '60' } : {}) } });
}
export async function POST(request: NextRequest) {
  if (process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1') return reply({ success: false, error: 'Design preview: submissions are disabled.' }, 403);
  try {
    assertContactOrigin(request, process.env.NODE_ENV === 'development');
    const declared = request.headers.get('content-length');
    const small = declared != null && /^\d+$/.test(declared) && Number(declared) <= CONTACT_BODY_LIMIT;
    const { value, bytes } = await readContactPayload(request, CONTACT_ATTACHMENT_LIMIT, small ? 5_000 : 20_000);
    const prepared = prepareContactSubmission(value, bytes);
    if (!prepared.ok) return reply({ success: false, error: prepared.error, ...(prepared.fieldErrors ? { fieldErrors: prepared.fieldErrors } : {}) }, prepared.status);
    const provider = resolveContactProvider();
    if (!provider) return reply({ success: false, error: unavailable }, 503);
    const mail: ContactMail = prepared.intent === 'short'
      ? {
        from: provider.from, to: BUSINESS_EMAIL, reply_to: prepared.data.email,
        subject: prepared.data.service ? `Cleaning request: ${prepared.data.service}` : 'Cleaning request',
        text: ['Request type: Short request', `Name: ${prepared.data.name}`, `Email: ${prepared.data.email}`, `Phone: ${prepared.data.phone}`, `Service: ${prepared.data.service || 'Not provided'}`, `Location: ${prepared.data.location || 'Not provided'}`, `Attachment: ${prepared.attachment?.filename || 'None'}`, '', prepared.data.message].join('\n'),
        ...(prepared.attachment ? { attachments: [prepared.attachment] } : {}),
      }
      : {
        from: provider.from, to: BUSINESS_EMAIL, reply_to: prepared.data.email,
        subject: `Cleaning quote request: ${prepared.data.service}`,
        text: [`Name: ${prepared.data.name}`, `Company: ${prepared.data.company || 'Not provided'}`, `Email: ${prepared.data.email}`, `Phone: ${prepared.data.phone}`, `Service: ${prepared.data.service}`, `Location: ${prepared.data.location}`, '', prepared.data.message || 'No additional notes.'].join('\n'),
      };
    const receipt = await deliverContactMail(provider.apiKey, mail, contactIdempotencyKey(request.headers.get('idempotency-key')), fetch, undefined, provider.name);
    return reply({ success: true, status: 'accepted', receipt }, 200);
  } catch (error) {
    if (error instanceof ContactRequestError) return reply({ success: false, error: error.message }, error.status);
    return reply({ success: false, error: unavailable }, 500);
  }
}

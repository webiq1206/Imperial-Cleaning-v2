import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contact-schema';
import { BUSINESS_EMAIL } from '@/data/business-info';
import { assertContactOrigin, contactIdempotencyKey, ContactRequestError, deliverContactMail, readContactBody, resolveContactProvider } from '@/lib/contact-delivery';

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
    const parsed = contactSchema.safeParse(await readContactBody(request));
    if (!parsed.success) {
      const fieldErrors = Object.fromEntries(parsed.error.issues.filter(issue => issue.path[0] !== 'website').map(issue => [String(issue.path[0]), issue.message]));
      return reply({ success: false, error: 'Please check your contact details and try again.', fieldErrors }, 400);
    }
    const provider = resolveContactProvider();
    if (!provider) return reply({ success: false, error: unavailable }, 503);
    const data = parsed.data;
    const receipt = await deliverContactMail(provider.apiKey, {
      from: provider.from, to: BUSINESS_EMAIL, reply_to: data.email,
      subject: `Cleaning quote request: ${data.service}`,
      text: [`Name: ${data.name}`, `Company: ${data.company || 'Not provided'}`, `Email: ${data.email}`, `Phone: ${data.phone}`, `Service: ${data.service}`, `Location: ${data.location}`, '', data.message || 'No additional notes.'].join('\n'),
    }, contactIdempotencyKey(request.headers.get('idempotency-key')), fetch, undefined, provider.name);
    return reply({ success: true, status: 'accepted', receipt }, 200);
  } catch (error) {
    if (error instanceof ContactRequestError) return reply({ success: false, error: error.message }, error.status);
    return reply({ success: false, error: unavailable }, 500);
  }
}

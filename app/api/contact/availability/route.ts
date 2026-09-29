import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public configuration readiness, not a delivery or inbox guarantee. Never expose credentials.
export async function GET() {
  const available = process.env.NEXT_PUBLIC_DESIGN_PREVIEW !== '1'
    && Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
  return NextResponse.json({ available }, {
    headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
  });
}

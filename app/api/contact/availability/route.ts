import { NextResponse } from 'next/server';
import { resolveContactProvider } from '@/lib/contact-delivery';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public configuration readiness, not a delivery or inbox guarantee. Never expose credentials.
export async function GET() {
  const available = process.env.NEXT_PUBLIC_DESIGN_PREVIEW !== '1' && resolveContactProvider() !== null;
  return NextResponse.json({ available }, {
    headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
  });
}

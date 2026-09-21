import { NextRequest, NextResponse } from 'next/server';
import rules from '@/data/publication-rules.json';
import { publicationResponse, type PublicationRules } from '@/lib/publishing-policy';

/** Response policy only. Authentication is independently enforced in every admin handler and layout. */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const policy = publicationResponse(path, rules as PublicationRules);
  const response = policy.location ? NextResponse.redirect(policy.location, 308) : policy.status === 404 || policy.status === 410 ? new NextResponse('This page is unavailable.', {status:policy.status}) : NextResponse.next();
  const privateRoute = path === '/admin-login' || path === '/admin' || path.startsWith('/admin/') || path === '/api' || path.startsWith('/api/');
  const preview = process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1';
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  if (privateRoute || preview || policy.noindex) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, nosnippet');
    response.headers.set('Cache-Control', 'private, no-store, max-age=0');
  }
  return response;
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };

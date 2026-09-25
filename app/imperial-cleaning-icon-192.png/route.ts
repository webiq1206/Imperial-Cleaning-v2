import { renderBrandIcon } from '@/lib/search-preview';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export async function GET() {
  const icon = await renderBrandIcon(192);
  return new Response(new Uint8Array(icon), { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff' } });
}

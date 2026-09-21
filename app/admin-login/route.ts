import { requireAdmin } from '@/lib/admin-auth';
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  const denied = requireAdmin(request); if (denied) return denied;
  return new Response(null, { status: 303, headers: { Location: '/admin/projects', 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow' } });
}

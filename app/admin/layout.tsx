import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/admin-auth';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { robots: { index: false, follow: false, googleBot: { index: false, follow: false } } };
export default async function AdminLayout({children}: {children: React.ReactNode}) {
  const incoming = await headers();
  const request = new Request('https://imperialcleaninginc.com/admin', {headers:new Headers(Array.from(incoming.entries()))});
  if (requireAdmin(request)) redirect('/admin-login');
  return <div data-clarity-mask="true">{children}</div>;
}

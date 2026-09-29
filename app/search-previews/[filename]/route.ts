import { previewFilename, previewPath, searchPaths } from '@/lib/search-appearance';
import { renderSearchPreview } from '@/lib/search-preview';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return searchPaths.map(path => ({ filename: previewFilename(path) })); }
export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const path = previewPath(filename);
  if (!path) return new Response('Not found', { status: 404 });
  const image = await renderSearchPreview(path);
  return new Response(new Uint8Array(image), { headers: {
    'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff',
  } });
}

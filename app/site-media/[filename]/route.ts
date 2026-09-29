import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return [{ filename: 'commercial-office-interior.webp' }]; }
export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  if (filename !== 'commercial-office-interior.webp') return new Response('Not found', { status: 404 });
  const original = await readFile(join(process.cwd(), 'public/images/commercial-interior.jpg'));
  const image = await sharp(original).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff' } });
}

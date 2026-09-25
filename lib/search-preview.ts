import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { searchListing, SEARCH_BRAND } from './search-appearance';

/** Brand graphics, not project photographs. All text comes from the reviewed allowlist. */
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]!));
export function previewLines(text: string, maximum = 30): string[] {
  const placeBreak = text.lastIndexOf(' in ');
  if (placeBreak > 0 && text.length > maximum && text.slice(placeBreak + 1).length <= maximum) {
    return [...previewLines(text.slice(0, placeBreak), maximum), text.slice(placeBreak + 1)];
  }
  const lines: string[] = []; let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (line + ' ' + word).length > maximum) { lines.push(line); line = word; }
    else line = line ? line + ' ' + word : word;
  }
  if (line) lines.push(line);
  if (lines.length > 4) throw new Error('Preview heading needs editorial shortening.');
  return lines;
}
let mark: Promise<Buffer> | undefined;
async function brandMark() {
  // Reuse the exact approved lion asset already used by the header.
  if (!mark) mark = readFile(join(process.cwd(), 'public/hero-logo.webp')).then(bytes => sharp(bytes).resize(170, 170, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()).catch(error => { mark = undefined; throw error; });
  return mark;
}
export async function renderSearchPreview(path: string): Promise<Buffer> {
  const listing = searchListing(path);
  const lines = previewLines(listing.imageLabel);
  const category = listing.kind === 'article' ? 'CLEANING GUIDES & CHECKLISTS' : listing.intent === 'construction' ? 'CONSTRUCTION CLEANUP' : listing.intent === 'commercial' ? 'COMMERCIAL CLEANING' : 'PROJECTS & WORKPLACES';
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#090c11"/>
    <rect x="54" y="54" width="8" height="522" rx="4" fill="#00bfff"/>
    <path d="M54 576H1146" stroke="#946ae1" stroke-width="3"/>
    <text x="92" y="104" fill="#ffffff" font-size="29" font-family="Arial, sans-serif" font-weight="700">${escape(SEARCH_BRAND)}</text>
    <text x="94" y="166" fill="#82dcff" font-size="20" font-family="Arial, sans-serif" letter-spacing="2">${escape(category)}</text>
    ${lines.map((line, i) => `<text x="90" y="${255 + i * 66}" fill="#ffffff" font-size="51" font-family="Arial, sans-serif" font-weight="600">${escape(line)}</text>`).join('')}
    <text x="94" y="547" fill="#c7ced8" font-size="22" font-family="Arial, sans-serif">imperialcleaninginc.com</text>
  </svg>`;
  return sharp(Buffer.from(svg)).composite([{ input: await brandMark(), left: 967, top: 59 }]).png({ compressionLevel: 9 }).toBuffer();
}

/** Square favicon derived from the same approved lion. No external asset or font request. */
export async function renderBrandIcon(size: 96 | 192): Promise<Buffer> {
  const original = await readFile(join(process.cwd(), 'public/hero-logo.webp'));
  const inset = Math.round(size / 12);
  return sharp(original)
    .extract({ left: 172, top: 11, width: 670, height: 849 })
    .resize(size - inset * 2, size - inset * 2, { fit: 'contain', background: '#000000' })
    .flatten({ background: '#000000' })
    .extend({ top: inset, bottom: inset, left: inset, right: inset, background: '#000000' })
    .png({ compressionLevel: 9 }).toBuffer();
}

/** Optional file on the short request form. Validated again on the server before any email is sent. */
export const LEAD_ATTACHMENT_MAX_BYTES = 4 * 1024 * 1024;
const FILE_ERROR = 'Please attach a PDF, JPG, PNG, or WebP, or send the request without a file.';
const SIZE_ERROR = 'Please use a file under 4 MB, or remove it and send the request.';
const TYPE_ERROR = 'Please attach a PDF, JPG, PNG, or WebP file.';

export type LeadAttachment = { filename: string; contentType: string; data: string };
export type AttachmentParse =
  | { ok: true; attachment?: LeadAttachment }
  | { ok: false; status: number; error: string };

const TYPES: Record<string, { ext: string; magic: (bytes: Uint8Array) => boolean }> = {
  'application/pdf': { ext: 'pdf', magic: bytes => bytes.length >= 5 && bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46 },
  'image/jpeg': { ext: 'jpg', magic: bytes => bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff },
  'image/png': { ext: 'png', magic: bytes => bytes.length >= 8 && [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every((byte, index) => bytes[index] === byte) },
  'image/webp': { ext: 'webp', magic: bytes => bytes.length >= 12 && bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50 },
};

export function normalizeLeadFileType(contentType: string): string | null {
  const type = contentType.toLowerCase().split(';')[0].trim();
  if (type === 'image/jpg' || type === 'image/pjpeg') return 'image/jpeg';
  return TYPES[type] ? type : null;
}

function safeFilename(name: string, ext: string): string {
  const base = (name.split(/[/\\]/).pop() || 'attachment').replace(/[^A-Za-z0-9._-]+/g, '').replace(/^\.+/, '').slice(0, 80);
  if (base.toLowerCase().endsWith(`.${ext}`)) return base || `attachment.${ext}`;
  const stem = base.replace(/\.[A-Za-z0-9]+$/, '') || 'attachment';
  return `${stem}.${ext}`;
}

function decodeBase64(data: string): Uint8Array | null {
  try {
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  } catch { return null; }
}

/** Accepts one optional PDF or image. Anything else is refused, including on the multi-step quote. */
export function parseLeadAttachment(input: unknown): AttachmentParse {
  if (input == null || input === '') return { ok: true };
  if (typeof input !== 'object' || Array.isArray(input)) return { ok: false, status: 400, error: FILE_ERROR };
  const record = input as Record<string, unknown>;
  const data = record.data;
  const filename = typeof record.filename === 'string' ? record.filename : 'attachment';
  const declared = typeof record.contentType === 'string' ? record.contentType : '';
  if (typeof data !== 'string' || data.length === 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(data) || data.length % 4 !== 0) {
    return { ok: false, status: 400, error: FILE_ERROR };
  }
  if (data.length > Math.ceil(LEAD_ATTACHMENT_MAX_BYTES / 3) * 4 + 4) return { ok: false, status: 413, error: SIZE_ERROR };
  const bytes = decodeBase64(data);
  if (!bytes || bytes.length === 0 || bytes.length > LEAD_ATTACHMENT_MAX_BYTES) return { ok: false, status: 413, error: SIZE_ERROR };
  const contentType = Object.entries(TYPES).find(([, spec]) => spec.magic(bytes))?.[0];
  if (!contentType) return { ok: false, status: 400, error: TYPE_ERROR };
  const raw = declared.toLowerCase().split(';')[0].trim();
  if (raw && raw !== 'application/octet-stream' && normalizeLeadFileType(raw) !== contentType) {
    return { ok: false, status: 400, error: 'That file does not match its type. Please attach a PDF, JPG, PNG, or WebP.' };
  }
  return { ok: true, attachment: { filename: safeFilename(filename, TYPES[contentType].ext), contentType, data } };
}

export async function fileToLeadAttachment(file: Blob & { name?: string; type?: string }): Promise<AttachmentParse> {
  if (file.size === 0) return { ok: true };
  if (file.size > LEAD_ATTACHMENT_MAX_BYTES) return { ok: false, status: 413, error: SIZE_ERROR };
  const bytes = new Uint8Array(await file.arrayBuffer());
  const parts: string[] = [];
  const chunk = 0x8000;
  for (let index = 0; index < bytes.length; index += chunk) {
    const slice = bytes.subarray(index, index + chunk);
    let part = '';
    for (let offset = 0; offset < slice.length; offset += 1) part += String.fromCharCode(slice[offset]);
    parts.push(part);
  }
  return parseLeadAttachment({ filename: file.name || 'attachment', contentType: file.type || '', data: btoa(parts.join('')) });
}

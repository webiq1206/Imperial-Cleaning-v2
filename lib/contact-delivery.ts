/** Request controls shared by the quote route and its isolated tests. No customer data is logged. */
export class ContactRequestError extends Error {
  constructor(public status: number, message: string) { super(message); this.name = 'ContactRequestError'; }
}
export const CONTACT_BODY_LIMIT = 24_000;
export const CONTACT_TIMEOUT_MS = 15_000;
const PUBLIC_ORIGINS = new Set(['https://imperialcleaninginc.com', 'https://www.imperialcleaninginc.com']);

export function assertContactOrigin(request: Request, development = false): void {
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite === 'cross-site') throw new ContactRequestError(403, 'Please use the quote form on our website.');
  // Browsers supply Origin on this JSON POST. Non-browser clients without Origin are not authenticated by this check.
  if (!origin) return;
  if (PUBLIC_ORIGINS.has(origin)) return;
  if (development) {
    try {
      const parsed = new URL(origin);
      if (['localhost', '127.0.0.1', '[::1]'].includes(parsed.hostname) && ['http:', 'https:'].includes(parsed.protocol)) return;
    } catch { /* Reject malformed origins below. */ }
  }
  throw new ContactRequestError(403, 'Please use the quote form on our website.');
}

export async function readContactBody(request: Request, maxBytes = CONTACT_BODY_LIMIT, timeoutMs = 5_000): Promise<unknown> {
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get('content-type') || '')) {
    throw new ContactRequestError(415, 'Please use the online quote form, or call (208) 520-3202.');
  }
  const declared = request.headers.get('content-length');
  if (declared && (!/^\d+$/.test(declared) || Number(declared) > maxBytes)) throw new ContactRequestError(413, 'Please shorten your project notes and try again.');
  const reader = request.body?.getReader();
  if (!reader) throw new ContactRequestError(400, 'The request was empty. Please try again.');
  let timer: ReturnType<typeof setTimeout> | undefined;
  let timedOut = false;
  const chunks: Uint8Array[] = [];
  let size = 0;
  const deadline = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      timedOut = true;
      void reader.cancel().catch(() => undefined);
      reject(new ContactRequestError(408, 'Your request took too long. Please retry with the same details.'));
    }, timeoutMs);
  });
  try {
    const content = (async () => {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBytes) throw new ContactRequestError(413, 'Please shorten your project notes and try again.');
        chunks.push(value);
      }
      if (timedOut) throw new ContactRequestError(408, 'Your request took too long. Please try again.');
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
      try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)); }
      catch { throw new ContactRequestError(400, 'The request was not valid. Please check your details and retry.'); }
    })();
    return await Promise.race([content, deadline]);
  } finally {
    if (timer) clearTimeout(timer);
    void reader.cancel().catch(() => undefined);
  }
}

export function contactIdempotencyKey(header: string | null): string {
  // Old cached clients may not send a key. New clients retain the same UUID across unchanged retries.
  if (!header) return `imperial-quote/${crypto.randomUUID()}`;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(header)) {
    throw new ContactRequestError(400, 'Please refresh the form and try again.');
  }
  return `imperial-quote/${header.toLowerCase()}`;
}

export type ContactMail = { from: string; to: string; reply_to: string; subject: string; text: string };
export async function deliverContactMail(
  apiKey: string, mail: ContactMail, idempotencyKey: string,
  fetcher: typeof fetch = fetch, timeoutMs = CONTACT_TIMEOUT_MS,
): Promise<string> {
  try {
    const response = await fetcher('https://api.resend.com/emails', {
      method: 'POST', cache: 'no-store',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': idempotencyKey },
      body: JSON.stringify(mail), signal: AbortSignal.timeout(timeoutMs),
    });
    if (response.status === 429) throw new ContactRequestError(429, 'Online requests are busy. Please wait a minute and retry, or call (208) 520-3202.');
    if (response.status === 409) throw new ContactRequestError(409, 'This request is still being processed. Please retry with the same details in a moment.');
    if (!response.ok) throw new ContactRequestError(502, 'We could not submit your request. Your details remain in the form so you can retry.');
    const result: unknown = await response.json();
    const id = result && typeof result === 'object' && 'id' in result ? (result as { id: unknown }).id : null;
    if (typeof id !== 'string' || !/^[a-zA-Z0-9_-]{1,100}$/.test(id)) throw new ContactRequestError(502, 'We could not confirm your submission. Please retry with the same details.');
    return id; // Provider acceptance, not proof of inbox delivery or a qualified lead.
  } catch (error) {
    if (error instanceof ContactRequestError) throw error;
    throw new ContactRequestError(502, 'We could not confirm your submission. Please retry with the same details, or call (208) 520-3202.');
  }
}

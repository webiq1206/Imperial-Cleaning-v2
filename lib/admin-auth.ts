import { createHash, timingSafeEqual } from 'node:crypto';

export type AdminCredentials = { username?: string; password?: string; preview?: boolean };
const PUBLIC_ORIGINS = new Set(['https://imperialcleaninginc.com', 'https://www.imperialcleaninginc.com']);
const READ_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);
const PRIVATE_HEADERS = {
  'Cache-Control': 'private, no-store, max-age=0',
  'X-Robots-Tag': 'noindex, nofollow, nosnippet',
  'X-Content-Type-Options': 'nosniff',
};

function equalSecret(candidate: string, expected: string): boolean {
  return timingSafeEqual(createHash('sha256').update(candidate).digest(), createHash('sha256').update(expected).digest());
}

/** Authentication runs in every protected handler, not just middleware or client code. */
export function checkAdminAccess(headers: Headers, method: string, config: AdminCredentials): number {
  if (config.preview || !config.username || !config.password || config.password.length < 24) return 503;
  const authorization = headers.get('authorization') || '';
  if (authorization.length > 4096 || !/^Basic [A-Za-z0-9+/]+={0,2}$/i.test(authorization)) return 401;
  let credentials = '';
  try { credentials = new TextDecoder('utf-8', { fatal: true }).decode(Buffer.from(authorization.slice(6), 'base64')); }
  catch { return 401; }
  const separator = credentials.indexOf(':');
  if (separator < 1) return 401;
  const usernameOK = equalSecret(credentials.slice(0, separator), config.username);
  const passwordOK = equalSecret(credentials.slice(separator + 1), config.password);
  if (!usernameOK || !passwordOK) return 401;
  if (!READ_METHODS.has(method.toUpperCase())) {
    if (headers.get('sec-fetch-site') === 'cross-site') return 403;
    const origin = headers.get('origin');
    if (!origin) return 403;
    if (origin && !PUBLIC_ORIGINS.has(origin)) {
      if (process.env.NODE_ENV !== 'development') return 403;
      try { if (!['localhost', '127.0.0.1', '[::1]'].includes(new URL(origin).hostname)) return 403; }
      catch { return 403; }
    }
  }
  return 200;
}

export function requireAdmin(request: Request): Response | null {
  const status = checkAdminAccess(request.headers, request.method, {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    preview: process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1',
  });
  if (status === 200) return null;
  const message = status === 503 ? 'Admin access is not configured. Contact the site owner.' : status === 403 ? 'This request is not allowed.' : 'Administrator sign-in is required.';
  return Response.json({ error: message }, {
    status,
    headers: { ...PRIVATE_HEADERS, ...(status === 401 ? { 'WWW-Authenticate': 'Basic realm="Imperial admin", charset="UTF-8"' } : {}) },
  });
}

export function boundedInteger(value: string | null, fallback: number, maximum: number): number {
  if (value === null || !/^\d+$/.test(value)) return fallback;
  const number = Number(value);
  return Number.isSafeInteger(number) ? Math.max(1, Math.min(maximum, number)) : fallback;
}

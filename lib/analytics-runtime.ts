import { safeAnalyticsPath } from './public-route-paths';

export type ConsentChoice = 'granted' | 'denied';
export const CONSENT_KEY = 'imperial.analytics.v1';
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;
/** Preserve only the origin of known search and AI referrers, never prompts, paths or query strings. */
export function safeAcquisitionReferrer(raw: string): string {
  try {
    const url = new URL(raw);
    const hosts = ['google.com', 'bing.com', 'duckduckgo.com', 'search.yahoo.com', 'ecosia.org', 'chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'claude.ai', 'gemini.google.com', 'copilot.microsoft.com', 'copilot.com'];
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return '';
    return hosts.some(host => url.hostname === host || url.hostname === `www.${host}`) ? `${url.origin}/` : '';
  } catch { return ''; }
}
const DENIED = { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };
type Config = { measurementId?: string; clarityId?: string; preview?: boolean };
declare global {
  interface Window {
    __imperialAnalyticsConsent?: boolean;
    __imperialTrackPage?: (url: string) => void;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

export function readConsent(raw: string | null, now = Date.now()): ConsentChoice | null {
  try {
    const entry = JSON.parse(raw || 'null');
    if (entry?.version !== 1 || !['granted', 'denied'].includes(entry.choice)) return null;
    if (!Number.isFinite(entry.expires) || entry.expires <= now || entry.expires > now + CONSENT_MAX_AGE + 60_000) return null;
    return entry.choice;
  } catch { return null; }
}
export function serializeConsent(choice: ConsentChoice, now = Date.now()): string {
  return JSON.stringify({ version: 1, choice, expires: now + CONSENT_MAX_AGE });
}

/** One owner for optional tags, consent and page views. Creating this controller makes no requests. */
export function createAnalyticsRuntime(config: Config, browser: Window, document: Document) {
  let consent: ConsentChoice = 'denied';
  let initialized = false;
  let lastPage = '';
  let active = false;
  let replayStarted = false;
  let replayStopped = false;
  const acquisitionReferrer = safeAcquisitionReferrer(document.referrer || '');
  const measurementId = /^G-[A-Z0-9]+$/.test(config.measurementId || '') ? config.measurementId! : '';
  const clarityId = /^[a-z0-9]{6,24}$/.test(config.clarityId || '') ? config.clarityId! : '';
  const production = () => !config.preview && browser.location.protocol === 'https:' && ['imperialcleaninginc.com', 'www.imperialcleaninginc.com'].includes(browser.location.hostname);
  const allowedPath = () => production() ? safeAnalyticsPath(browser.location.href) : null;
  const globalPrivacy = () => (browser.navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  function send(...args: unknown[]) { try { browser.gtag?.(...args); } catch { /* Optional measurement cannot block the site. */ } }
  function replay(...args: unknown[]) { try { browser.clarity?.(...args); } catch { /* Replay is optional. */ } }
  function stopReplay() {
    if (!replayStarted) return;
    replay('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
    replay('stop');
    replayStarted = false;
    replayStopped = true;
  }
  function replayAllowed() {
    // Replay can contain full URLs. Do not record query-bearing, fragment-bearing, private or unknown routes.
    return !!allowedPath() && consent === 'granted' && !globalPrivacy() && !browser.location.search && !browser.location.hash;
  }
  function startReplay() {
    if (!clarityId || replayStarted || replayStopped || !replayAllowed()) return;
    const queue: unknown[][] = [];
    if (!browser.clarity) {
      const clarity = ((...args: unknown[]) => { queue.push(args); }) as NonNullable<Window['clarity']>;
      clarity.q = queue;
      browser.clarity = clarity;
    }
    replay('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
    const script = document.createElement('script');
    script.id = 'imperial-clarity'; script.async = true;
    script.src = `https://www.clarity.ms/tag/${clarityId}`;
    script.onload = () => { if (!replayAllowed()) stopReplay(); };
    script.onerror = () => { replayStarted = false; replayStopped = true; };
    replayStarted = true;
    document.head.appendChild(script);
  }
  function initialize(path: string) {
    if (!measurementId || initialized) return;
    initialized = true;
    browser.dataLayer = browser.dataLayer || [];
    browser.gtag = function () { browser.dataLayer.push(arguments); };
    send('consent', 'default', DENIED);
    send('set', 'ads_data_redaction', true);
    send('js', new Date());
    send('config', measurementId, {
      send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
      page_location: `https://imperialcleaninginc.com${path}`, page_referrer: acquisitionReferrer,
    });
    send('consent', 'update', { ...DENIED, analytics_storage: 'granted' });
    const script = document.createElement('script');
    script.id = 'imperial-ga'; script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }
  function page(url: string) {
    const current = allowedPath();
    if (!current || !replayAllowed()) stopReplay();
    const permitted = !!current && consent === 'granted' && !globalPrivacy();
    browser.__imperialAnalyticsConsent = permitted && !!measurementId;
    if (measurementId) (browser as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = !permitted;
    if (!permitted) { if (initialized && active) send('consent', 'update', DENIED); active = false; return; }
    const path = safeAnalyticsPath(url);
    if (!path || path !== current) return;
    initialize(path);
    if (!active && initialized) send('consent', 'update', { ...DENIED, analytics_storage: 'granted' });
    active = true;
    startReplay();
    if (!measurementId || lastPage === path) return;
    const previousPage = lastPage;
    lastPage = path;
    send('set', { page_location: `https://imperialcleaninginc.com${path}`, page_referrer: previousPage ? `https://imperialcleaninginc.com${previousPage}` : acquisitionReferrer });
    send('event', 'page_view', { page_path: path, page_location: `https://imperialcleaninginc.com${path}`, page_referrer: previousPage ? `https://imperialcleaninginc.com${previousPage}` : acquisitionReferrer });
  }
  function clearAnalyticsCookies() {
    // Remove only known optional analytics cookies. Essential site/session cookies are untouched.
    for (const pair of document.cookie.split(';')) {
      const name = pair.split('=')[0].trim();
      if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_clck$|_clsk$)/.test(name)) continue;
      for (const domain of ['', '; domain=imperialcleaninginc.com', '; domain=.imperialcleaninginc.com']) {
        document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax; Secure`;
      }
    }
  }
  function setConsent(value: ConsentChoice) {
    consent = globalPrivacy() ? 'denied' : value;
    browser.__imperialAnalyticsConsent = false;
    if (measurementId) (browser as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = consent !== 'granted';
    if (consent === 'denied') {
      if (initialized) send('consent', 'update', DENIED);
      stopReplay(); clearAnalyticsCookies(); lastPage = ''; active = false;
      return;
    }
    if (initialized) send('consent', 'update', { ...DENIED, analytics_storage: 'granted' });
    page(browser.location.href);
  }
  browser.__imperialAnalyticsConsent = false;
  browser.__imperialTrackPage = page;
  return { page, setConsent, isAvailable: () => production() && !!allowedPath() && !!(measurementId || clarityId), globalPrivacy };
}


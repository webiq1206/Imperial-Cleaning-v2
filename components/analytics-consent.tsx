'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CONSENT_KEY, createAnalyticsRuntime, readConsent, serializeConsent, type ConsentChoice } from '@/lib/analytics-runtime';
import { trackCTAClick, trackEvent } from '@/lib/analytics';

let runtime: ReturnType<typeof createAnalyticsRuntime> | undefined;
export default function AnalyticsConsent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [privacySignal, setPrivacySignal] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [notice, setNotice] = useState('');
  const [interacting, setInteracting] = useState(false);
  const shown = visible && !interacting;
  useEffect(() => {
    if (!runtime) runtime = createAnalyticsRuntime({
      measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || 'x5wa4ucb26',
      preview: process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1',
    }, window, document);
    let saved: ConsentChoice | null = null;
    try { saved = readConsent(localStorage.getItem(CONSENT_KEY)); } catch { /* Consent remains denied when storage is unavailable. */ }
    setPrivacySignal(runtime.globalPrivacy());
    runtime.setConsent(saved || 'denied');
    setVisible(runtime.isAvailable() && !saved && !runtime.globalPrivacy());
    const open = () => {
      if (!runtime?.isAvailable()) return;
      opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setVisible(true);
      requestAnimationFrame(() => panel.current?.querySelector<HTMLButtonElement>('button')?.focus());
    };
    const storage = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY) return;
      const choice = readConsent(event.newValue);
      runtime?.setConsent(choice || 'denied');
      setVisible(!choice && !!runtime?.isAvailable());
    };
    const route = () => runtime?.page(window.location.href);
    // One listener measures contact links and quote CTAs. The mobile bar reports its own clicks.
    const contactClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!link || link.closest('[data-contextual-contact]')) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('mailto:')) trackEvent('email_click', 'contact');
      else if (href.startsWith('sms:')) trackEvent('sms_click', 'contact');
      else if (href.startsWith('tel:')) trackCTAClick('phone_call', { page: window.location.pathname, section: 'phone_link' });
      else {
        try {
          const target = new URL(href, window.location.origin);
          if (target.origin === window.location.origin && target.pathname === '/contact') trackCTAClick('quote_request', { page: window.location.pathname, section: 'quote_link' });
        } catch { /* Ignore non-URL links. */ }
      }
    };
    document.addEventListener('click', contactClick);
    window.addEventListener('imperial:privacy-settings', open);
    window.addEventListener('storage', storage);
    window.addEventListener('hashchange', route);
    window.addEventListener('popstate', route);
    return () => {
      document.removeEventListener('click', contactClick);
      window.removeEventListener('imperial:privacy-settings', open);
      window.removeEventListener('storage', storage);
      window.removeEventListener('hashchange', route);
      window.removeEventListener('popstate', route);
    };
  }, []);
  useEffect(() => { runtime?.page(window.location.href); if (!runtime?.isAvailable()) setVisible(false); }, [pathname, searchParams]);
  useEffect(() => {
    const inspect = () => {
      const active = document.activeElement;
      const typing = active instanceof HTMLElement && !!active.closest('input,textarea,select,[contenteditable=true]');
      const dialog = !!document.querySelector('[role=dialog][data-state=open],[role=dialog][aria-modal=true]');
      const keyboard = !!window.visualViewport && window.innerHeight - window.visualViewport.height > 150;
      setInteracting(typing || dialog || keyboard);
    };
    document.addEventListener('focusin', inspect); document.addEventListener('focusout', inspect);
    window.visualViewport?.addEventListener('resize', inspect);
    const observer = new MutationObserver(inspect);
    observer.observe(document.body, {childList:true,subtree:true,attributes:true,attributeFilter:['data-state','aria-modal']});
    inspect();
    return () => {document.removeEventListener('focusin',inspect);document.removeEventListener('focusout',inspect);window.visualViewport?.removeEventListener('resize',inspect);observer.disconnect();};
  }, []);
  useEffect(() => {
    document.documentElement.dataset.privacyOpen = shown ? 'true' : 'false';
    return () => { delete document.documentElement.dataset.privacyOpen; };
  }, [shown]);
  const choose = (choice: ConsentChoice) => {
    const actual = runtime?.globalPrivacy() ? 'denied' : choice;
    runtime?.setConsent(actual);
    try { localStorage.setItem(CONSENT_KEY, serializeConsent(actual)); } catch { /* In-memory choice still takes effect. */ }
    setVisible(false);
    setNotice(actual === 'granted' ? 'Optional analytics enabled.' : 'Optional analytics disabled.');
    opener.current?.focus(); opener.current = null;
  };
  return <>
    <span className="sr-only" role="status">{notice}</span>
    {shown && <section ref={panel} className="privacy-panel" aria-labelledby="privacy-title" data-clarity-mask="true">
      <div><h2 id="privacy-title">Your privacy choices</h2><p>Analytics stay off unless you allow them. Quotes work either way. <Link href="/privacy-policy">Privacy policy</Link>.</p>
      {privacySignal && <p>Your browser’s privacy preference keeps optional analytics off.</p>}</div>
      <div className="privacy-actions"><button type="button" onClick={() => choose('denied')}>Keep analytics off</button><button type="button" onClick={() => choose('granted')} disabled={privacySignal}>Allow analytics</button></div>
    </section>}
  </>;
}


'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_PHONE_TEL } from '@/data/business-info';
import { safeAnalyticsPath } from '@/lib/public-route-paths';
import { trackCTAClick } from '@/lib/analytics';
import { quoteHref } from '@/lib/quote-context';

export default function ContextualContact() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!pathname || pathname === '/contact' || !safeAnalyticsPath(pathname)) { setVisible(false); return; }
    const mobile = window.matchMedia('(max-width: 767px)');
    let frame = 0;
    const inspect = () => {
      frame = 0;
      const active = document.activeElement;
      const editing = active instanceof HTMLElement && !!active.closest('input,textarea,select,[contenteditable=true]');
      const keyboard = !!window.visualViewport && window.innerHeight - window.visualViewport.height > 150;
      const modal = !!document.querySelector('[role=dialog][data-state=open],[role=dialog][aria-modal=true]');
      const privacy = document.documentElement.dataset.privacyOpen === 'true';
      const height = window.visualViewport?.height || window.innerHeight;
      const otherCTA = Array.from(document.querySelectorAll<HTMLElement>('a[href="/contact"],a[href^="/contact?"],[data-primary-cta],.quote-form')).some(element => {
        if (element.closest('[data-contextual-contact]')) return false;
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < height && rect.right > 0 && rect.left < window.innerWidth && style.visibility !== 'hidden' && style.display !== 'none';
      });
      const focusedInsideBar = active instanceof HTMLElement && !!active.closest('[data-contextual-contact]');
      setVisible(mobile.matches && !editing && !keyboard && !modal && !privacy && (focusedInsideBar || (window.scrollY > 240 && !otherCTA)));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(inspect); };
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-state', 'aria-modal'] });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-privacy-open'] });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.visualViewport?.addEventListener('resize', schedule);
    document.addEventListener('focusin', schedule); document.addEventListener('focusout', schedule);
    inspect();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', schedule);window.removeEventListener('resize', schedule);window.visualViewport?.removeEventListener('resize', schedule);document.removeEventListener('focusin', schedule);document.removeEventListener('focusout', schedule); };
  }, [pathname]);
  if (!visible) return null;
  return <nav className="contextual-contact" data-contextual-contact="true" aria-label="Quick contact">
    <a href={`tel:${BUSINESS_PHONE_TEL}`} className="contextual-call" onClick={() => trackCTAClick('phone_call', {page:pathname || '/',section:'mobile_contact'})}><Phone size={18} aria-hidden="true" />Call</a>
    <Link href={quoteHref(pathname || '/')} className="ic-button" onClick={() => trackCTAClick('quote_request',{page:pathname || '/',section:'mobile_contact'})}>Get a free quote<ArrowUpRight size={18} aria-hidden="true" /></Link>
  </nav>;
}

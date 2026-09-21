/** Browser analytics for observed actions only. No invented revenue, contact details, free text, or raw query strings. */
import { safeAnalyticsPath } from "./public-route-paths";
declare global { interface Window { dataLayer: any[]; gtag: (...args: any[]) => void; } }
type Service = 'construction-cleaning' | 'commercial-cleaning';
type Tier = 'primary' | 'secondary' | 'extended';
type Context = { serviceType?: Service; location?: string; marketTier?: Tier; sourcePage?: string; sessionDuration?: number };
type Params = Record<string, string | number | boolean>;
const service = (value?: string) => value === 'construction-cleaning' || value === 'commercial-cleaning' ? value : 'general';
const tier = (value?: string) => ['primary', 'secondary', 'extended'].includes(value || '') ? value! : 'general';
// Only controlled labels are transmitted. Callers' arbitrary text and location arguments are intentionally omitted.
function token(value: string | undefined, allowed: readonly string[], fallback = 'other') { return value && allowed.includes(value) ? value : fallback; }
function enabled() { return typeof window !== 'undefined' && process.env.NEXT_PUBLIC_DESIGN_PREVIEW !== '1' && typeof window.gtag === 'function'; }
function event(name: string, parameters: Params = {}) {
  if (!enabled()) return;
  const path = safeAnalyticsPath(window.location?.href || 'https://imperialcleaninginc.com/');
  if (!path) return;
  try { window.gtag('event', name, { page_location: `https://imperialcleaninginc.com${path}`, page_referrer: '', ...parameters }); } catch { /* Tracking must never change a completed business action. */ }
}
export function initGA() {
  if (typeof window === 'undefined' || process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1') return;
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!id || !/^G-[A-Z0-9]+$/.test(id)) return;
  // The layout owns loading and consent. A second initializer must not create duplicate tags or page views.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
}
export function trackPageView(url: string) {
  const path = safeAnalyticsPath(url);
  if (path) event('page_view', { page_path: path, page_location: `https://imperialcleaninginc.com${path}` });
}
export function trackEvent(action: string, category?: string, label?: string, _value?: number) {
  const name = token(action, ['form_start', 'form_submit', 'form_error', 'quote_form_open', 'phone_click', 'email_click', 'file_download', 'checklist_use', 'checklist_download', 'checklist_print', 'consent_update'], 'interaction');
  // form_submit is a supplemental diagnostic. generate_lead is the single lead key event.
  event(name, { event_category: token(category, ['contact', 'navigation', 'resources', 'engagement', 'privacy']), event_label: token(label, ['quote_request', 'construction', 'commercial', 'both', 'construction_checklist', 'grant', 'deny', 'revoke']) });
}
export function trackServicePageView(serviceType: Service, _location?: string, marketTier?: Tier) { event('service_page_view', { service_type: service(serviceType), market_tier: tier(marketTier) }); }
export function trackNavigationInteraction(action: 'dropdown_open' | 'dropdown_close' | 'menu_click' | 'submenu_hover' | 'mobile_menu_toggle' | 'internal_link_click', menu: 'services' | 'service_areas' | 'main_nav' | 'related_links', _label?: string) { event('navigation_interaction', { navigation_action: action, navigation_menu: menu }); }
export function trackServiceNavigation(serviceType: Service, navigationPath: 'direct_link' | 'dropdown_selection' | 'submenu_location', _location?: string) { event('service_navigation', { service_type: service(serviceType), navigation_path: navigationPath }); }
export function trackCTAClick(ctaType: 'quote_request' | 'phone_call' | 'contact_form' | 'service_navigation', source: { page: string; section: string; serviceType?: Service; location?: string; marketTier?: Tier }) { event(ctaType === 'phone_call' ? 'click_phone' : 'cta_click', { cta_type: ctaType, service_type: service(source.serviceType), market_tier: tier(source.marketTier) }); }
export function trackFormInteraction(action: 'form_open' | 'form_step' | 'form_submit' | 'form_abandon', formType: 'contact_form' | 'quote_request', step?: number, context?: Context) {
  event('form_interaction', { form_action: action, form_type: formType, form_step: Math.max(1, Math.min(2, step || 1)), service_type: service(context?.serviceType) });
}
export function trackConversionComplete(conversionType: 'quote_request' | 'phone_call' | 'contact_form', context: Context & { sourcePage: string }) {
  if (conversionType === 'phone_call') { event('click_phone', { interaction: 'phone_link' }); return; }
  // Call this only after the route has a provider receipt. It does not mean contacted, qualified, booked, won, or delivered.
  event('generate_lead', { form_id: 'imperial_quote', lead_type: 'cleaning_inquiry', service_type: service(context.serviceType), lead_status: 'submitted' });
}
export function trackContentEngagement(contentType: 'case_study' | 'faq' | 'testimonial' | 'stats' | 'location_grid', action: 'view' | 'expand' | 'collapse' | 'click' | 'scroll', _contentId?: string, context?: Context) { event('content_engagement', { content_type: contentType, engagement_action: action, service_type: service(context?.serviceType) }); }
export function trackScrollDepth(depth: 25 | 50 | 75 | 90 | 100, pageType: 'homepage' | 'service-hub' | 'service-location' | 'about' | 'contact', context?: Context) { event('scroll', { scroll_depth: depth, page_type: pageType, service_type: service(context?.serviceType) }); }
export function trackLocationInteraction(action: 'location_view' | 'location_click' | 'location_cta' | 'location_info_expand', _location: string, marketTier: Tier, serviceType?: Service) { event('location_interaction', { location_action: action, market_tier: tier(marketTier), service_type: service(serviceType) }); }
export function trackServiceDemand(serviceType: Service, _location: string, demandIndicator: 'page_view' | 'cta_click' | 'quote_request' | 'return_visit') { event('service_demand', { service_type: service(serviceType), demand_indicator: demandIndicator }); }
export function trackUserJourney(stage: 'discovery' | 'consideration' | 'decision' | 'conversion', _touchpoint: string, context?: Context) { event('user_journey', { journey_stage: stage, service_type: service(context?.serviceType) }); }
export function trackSEOPerformance(_location: string, _serviceType: Service, _metrics: { organicTraffic?: boolean; searchQuery?: string; rankingPosition?: number; localSearchResult?: boolean }) {
  // Real search-query and rank analysis belongs in Search Console. Do not manufacture it from browser input.
}
export function trackAnalyticsError(errorType: 'tracking_failure' | 'ga_load_error' | 'event_error', _errorDetails?: string) { event('analytics_error', { error_type: errorType }); }

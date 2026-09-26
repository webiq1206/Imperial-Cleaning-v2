import { allServiceLocations } from '@/data/service-locations';
import { buildServiceLocationUrl } from '@/lib/routing-utils';
import { quoteServiceFromSearch, type QuoteService } from '@/data/service-priorities';

export type QuoteContext = { service?: QuoteService; location?: string };
/** Only known service/location values are accepted. Never copy arbitrary query text. */
export function quoteContext(pathname: string, search = ''): QuoteContext {
  const query = new URLSearchParams(search);
  const location = allServiceLocations.find(city =>
    ['construction-cleaning', 'commercial-cleaning'].some(service => buildServiceLocationUrl(city.state, service, city.name) === pathname) ||
    (query.getAll('location').length === 1 && query.get('location') === `${city.name}, ${city.state}`));
  const service = quoteServiceFromSearch(search) ||
    (pathname.includes('construction') ? 'construction' :
      /commercial|janitorial|office|porter|warehouse|industrial|manufacturing|restaurant|school|dealership|property-management/.test(pathname) ? 'commercial' : undefined);
  return { service, location: location ? `${location.name}, ${location.state}` : undefined };
}
export function quoteHref(pathname: string): string {
  const context = quoteContext(pathname);
  const query = new URLSearchParams();
  if (context.service) query.set('service', context.service);
  if (context.location) query.set('location', context.location);
  return `/contact${query.size ? `?${query}` : ''}`;
}

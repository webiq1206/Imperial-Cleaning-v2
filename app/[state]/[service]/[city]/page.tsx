import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLocationClient from '@/components/pages/service-location-client';
import { StructuredData } from '@/components/structured-data';
import { allServiceLocations, type ServiceLocation } from '@/data/service-locations';
import { locationToSlug, isValidServiceLocation, buildServiceLocationUrl } from '@/lib/routing-utils';
import { buildSearchMetadata, searchImage, searchListing, canonicalUrl } from '@/lib/search-appearance';

interface PageProps { params: Promise<{ state: string; service: string; city: string }> }
const serviceNames: Record<string, string> = { 'construction-cleaning': 'Construction Cleaning', 'commercial-cleaning': 'Commercial Cleaning' };
const stateNames: Record<string, string> = { idaho: 'Idaho', utah: 'Utah' };
export async function generateStaticParams() {
  const params: { state: string; service: string; city: string }[] = [];
  for (const location of allServiceLocations) {
    const state = location.state.toLowerCase(), city = locationToSlug(location.name);
    for (const service of ['construction-cleaning', 'commercial-cleaning']) {
      if (isValidServiceLocation(service, city, state)) params.push({ state, service, city });
    }
  }
  return params;
}
function findLocation(state: string, city: string): ServiceLocation | undefined {
  return allServiceLocations.find(location => location.state === stateNames[state] && locationToSlug(location.name) === city);
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, service, city } = await params;
  if (!findLocation(state, city) || !serviceNames[service] || !isValidServiceLocation(service, city, state)) notFound();
  return buildSearchMetadata(`/${state}/${service}/${city}`);
}
export default async function ServiceLocationPage({ params }: PageProps) {
  const { state, service, city } = await params;
  const location = findLocation(state, city), serviceName = serviceNames[service];
  if (!location || !serviceName || !isValidServiceLocation(service, city, state)) notFound();
  const serviceType = service as 'construction-cleaning' | 'commercial-cleaning';
  const path = buildServiceLocationUrl(location.state, serviceType, location.name);
  const url = canonicalUrl(path), listing = searchListing(path);
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`,
    name: `${serviceName} in ${location.name}`, description: listing.description,
    serviceType: serviceName, url, image: searchImage(path).url,
    provider: { '@id': 'https://imperialcleaninginc.com/#organization' },
    areaServed: { '@type': 'City', name: location.name, containedInPlace: { '@type': 'State', name: location.state } },
  };
  const pageSchema = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, url, name: listing.title, description: listing.description, primaryImageOfPage: { '@type': 'ImageObject', url: searchImage(path).url, width: 1200, height: 630, caption: searchImage(path).alt, encodingFormat: 'image/png' }, mainEntity: { '@id': `${url}#service` }, isPartOf: { '@id': 'https://imperialcleaninginc.com/#website' } };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://imperialcleaninginc.com/' },
    { '@type': 'ListItem', position: 2, name: `${location.state} Service Areas`, item: `https://imperialcleaninginc.com/service-areas/${state}` },
    { '@type': 'ListItem', position: 3, name: serviceName, item: `https://imperialcleaninginc.com/${serviceType}` },
    { '@type': 'ListItem', position: 4, name: `${location.name} ${serviceName}`, item: url },
  ] };
  // Coverage is not a separate branch office. No auto-generated prices, sub-offers,
  // ratings, or unreviewed FAQ claims are added to the structured graph.
  return <><StructuredData data={[pageSchema, serviceSchema, breadcrumbSchema]} /><ServiceLocationClient location={location} serviceType={serviceType} serviceName={serviceName} /></>;
}

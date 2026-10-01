import Link from 'next/link';
import { quoteHref } from '@/lib/quote-context';
import { servicePolicy } from '@/data/service-policy';
import { Phone, ArrowRight } from 'lucide-react';
import { StructuredData } from '@/components/structured-data';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import RelatedContent from '@/components/shared/related-content';
import type { IndustryPage } from '@/data/industries';
import { canonicalUrl, searchListing, searchImage } from '@/lib/search-appearance';

export default function IndustryCleaningPage({ industry }: { industry: IndustryPage }) {
  const path = `/${industry.slug}`, url = canonicalUrl(path), listing = searchListing(path);
  const parentName = industry.parentName ?? 'Commercial Cleaning';
  const parentHref = industry.parentHref ?? '/commercial-cleaning';
  const ctaLabel = industry.ctaLabel ?? 'Get a Free Quote';
  const ctaHeading = industry.ctaHeading ?? `Discuss your ${industry.name.toLowerCase()} scope`;
  const guidanceOnly = path === '/commercial-cleaning-cost';
  const image = searchImage(path);
  const pageSchema = {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, url,
    name: industry.h1, description: listing.description,
    isPartOf: { '@id': 'https://imperialcleaninginc.com/#website' },
    about: { '@id': 'https://imperialcleaninginc.com/#organization' },
    primaryImageOfPage: { '@type': 'ImageObject', url: image.url, width: image.width, height: image.height, caption: image.alt, encodingFormat: image.type },
    ...(!guidanceOnly ? { mainEntity: { '@id': `${url}#service` } } : {}),
  };
  const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: industry.name, serviceType: industry.name, description: listing.description, url, image: image.url, provider: { '@id': 'https://imperialcleaninginc.com/#organization' }, areaServed: [{ '@type': 'State', name: 'Idaho' }, { '@type': 'State', name: 'Utah' }] };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://imperialcleaninginc.com/' },
    { '@type': 'ListItem', position: 2, name: parentName, item: `https://imperialcleaninginc.com${parentHref}` },
    { '@type': 'ListItem', position: 3, name: industry.name, item: url },
  ] };
  // Retain useful visible content. Do not turn every unverified feature or FAQ
  // into a machine-readable offer, and do not represent guidance as a service.
  return <>
    <StructuredData data={[pageSchema, ...(!guidanceOnly ? [serviceSchema] : []), breadcrumbSchema]} />
    <div className="bg-card/30 border-b border-border/20"><div className="max-w-7xl mx-auto px-6 lg:px-8 py-4"><Breadcrumbs includeStructuredData={false} items={[{ name: parentName, href: parentHref }, { name: industry.name }]} /></div></div>
    <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom"><div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">{industry.h1}</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">{listing.description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href={quoteHref(path)} className="ic-button">{ctaLabel}<ArrowRight size={18} aria-hidden="true" /></Link><a href="tel:+12085203202" className="ic-button secondary"><Phone size={18} aria-hidden="true" />Call (208) 520-3202</a></div>
    </div></section>
    <section className="site-width py-8"><p className="reading-width">{industry.directAnswer}</p><p className="scope-note">{servicePolicy.exclusions}</p></section>
    <nav className="jump-links" aria-label="On this page"><a href="#included">Scope</a><a href="#why-imperial">Why Imperial</a><a href="#faq">Common questions</a></nav>
    <section id="included" className="py-24 px-6 bg-card/30"><div className="max-w-7xl mx-auto">
      <div className="text-center mb-16"><h2 className="text-4xl mb-6 text-foreground">{guidanceOnly ? 'Planning considerations' : `${industry.name}: scope and tasks`}</h2></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{industry.services.map(service => <div key={service.title} className="glass-card-elevated p-6 rounded-lg hover-lift-gentle"><h3 className="text-lg mb-3 text-foreground">{service.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p></div>)}</div>
    </div></section>
    <section id="why-imperial" className="py-24 px-6"><div className="max-w-7xl mx-auto"><div className="text-center mb-16"><h2 className="text-4xl mb-6 text-foreground">Why Imperial Cleaning</h2></div><div className="grid md:grid-cols-3 gap-8">{industry.whyUs.map(reason => <div key={reason.title} className="glass-card-elevated p-8 rounded-lg text-center"><h3 className="text-xl mb-3 text-foreground">{reason.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p></div>)}</div></div></section>
    <section id="faq" className="py-24 px-6 bg-card/30"><div className="max-w-4xl mx-auto"><div className="text-center mb-16"><h2 className="text-4xl mb-6 text-foreground">{industry.name} FAQ</h2></div><div className="space-y-6">{industry.faqs.map(faq => <details key={faq.question} className="service-faq-item"><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    <RelatedContent pageUrl={path} heading="Related Cleaning Services" description="Explore relevant cleaning services, resources, and service areas." override={{ pin: [{ url: parentHref, anchor: parentName }, { url: '/contact', anchor: 'Request a free cleaning quote' }] }} />
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"><div className="max-w-4xl mx-auto text-center"><div className="glass-card-elevated sophisticated-glow p-12 rounded-lg"><h2 className="text-3xl lg:text-4xl mb-6 tracking-tight text-foreground">{ctaHeading}</h2><p className="text-lg text-muted-foreground mb-8 leading-relaxed">Request a free quote. Confirm the service scope, availability, and schedule with the team.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href={quoteHref(path)} className="ic-button">{ctaLabel}</Link><a href="tel:+12085203202" className="ic-button secondary">Call (208) 520-3202</a></div></div></div></section>
  </>;
}

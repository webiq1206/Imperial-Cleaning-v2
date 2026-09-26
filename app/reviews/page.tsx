import type { Metadata } from 'next';
import ReviewBrowser from '@/components/review-browser';
import Link from 'next/link';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { StructuredData } from '@/components/structured-data';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import RelatedContent from '@/components/shared/related-content';
import { verifiedReviews, RATING_SOURCES, GOOGLE_LISTING_URL } from '@/data/reviews';
import { buildSearchMetadata, canonicalUrl, searchListing, searchImage } from '@/lib/search-appearance';

const path = '/reviews', url = canonicalUrl(path);
export const metadata: Metadata = buildSearchMetadata(path);
export default function ReviewsPage() {
  const collection = { '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${url}#collection`, url, name: 'Imperial Cleaning Inc Customer Reviews', description: searchListing(path).description, image: searchImage(path).url, isPartOf: { '@id': 'https://imperialcleaninginc.com/#website' }, about: { '@id': 'https://imperialcleaninginc.com/#organization' }, publisher: { '@id': 'https://imperialcleaninginc.com/#organization' } };
  const breadcrumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://imperialcleaninginc.com/' }, { '@type': 'ListItem', position: 2, name: 'Reviews', item: url }] };
  return <>
    {/* Company-hosted reviews do not establish eligibility for Google's review stars. */}
    <StructuredData data={[collection, breadcrumbs]} />
    <div className="bg-card/30 border-b border-border/20"><div className="max-w-7xl mx-auto px-6 lg:px-8 py-4"><Breadcrumbs includeStructuredData={false} items={[{ name: 'Reviews' }]} /></div></div>
    <section className="py-20 px-6 hero-sophisticated-bg noise-overlay grain-texture"><div className="max-w-4xl mx-auto text-center"><Star className="w-5 h-5 text-primary mx-auto mb-4" aria-hidden="true" /><h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-foreground">Imperial Cleaning Reviews</h1><p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Customer feedback about construction cleanup and commercial cleaning. Read the comments below and follow the source links to check the original public profiles.</p></div></section>
    <section className="px-6"><div className="max-w-4xl mx-auto glass-card-elevated rounded-lg p-6"><p className="text-sm text-muted-foreground leading-relaxed">This page is published and curated by Imperial Cleaning Inc, not an independent review site. Review text is reproduced from the existing source records without changing its wording. Displayed dates are recorded snapshots and may be approximate. The linked profiles are the source for current ratings, dates, and the full review record.</p></div></section>
    <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><h2 className="text-2xl md:text-3xl text-foreground mb-8">Check the original profiles</h2><div className="grid md:grid-cols-3 gap-6">{[{ platform: 'Google Business Profile', url: GOOGLE_LISTING_URL }, ...RATING_SOURCES].map(source => <a key={source.platform} href={source.url} target="_blank" rel="noopener noreferrer" className="glass-card-elevated p-6 rounded-lg hover-lift-gentle"><span className="flex gap-2 items-center">{source.platform}<ExternalLink size={16} aria-hidden="true" /></span><p className="text-sm text-muted-foreground mt-3">Open the profile for current reviews and ratings.</p></a>)}</div></div></section>
    <section className="ic-section"><div className="site-width"><h2>What customers wrote</h2><ReviewBrowser reviews={verifiedReviews}/></div></section>
    <section className="py-16 px-6"><div className="max-w-4xl mx-auto"><h2 className="text-2xl text-foreground mb-6">Questions before hiring a cleaning company</h2><h3 className="text-lg mb-2">Is this an independent review page?</h3><p className="text-muted-foreground mb-6">No. It is Imperial&apos;s own collection of customer feedback. Check the linked platforms for the original record and use it alongside your scope review and conversations with providers.</p><h3 className="text-lg mb-2">How can I leave a review?</h3><p className="text-muted-foreground mb-6">Share an honest account of your experience on a linked public profile. Feedback does not need to be positive, and contacting the team is not a prerequisite for leaving a review.</p><h3 className="text-lg mb-2">What should I confirm before booking?</h3><p className="text-muted-foreground mb-6">Confirm the actual tasks, service location, schedule, price, exclusions, and any insurance or onboarding documents your project requires.</p><Link href="/contact" className="ic-button">Request a free cleaning quote</Link></div></section>
    <RelatedContent pageUrl={path} heading="Services behind the reviews" description="Explore construction cleanup and commercial cleaning." limit={5} />
  </>;
}

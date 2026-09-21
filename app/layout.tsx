import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import './globals.css';
import './redesign.css';
import './audit-improvements.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AnalyticsConsent from '@/components/analytics-consent';
import ContextualContact from '@/components/contextual-contact';
import {
  BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_GEO, BUSINESS_OPENING_HOURS_SCHEMA,
  BUSINESS_PHONE_TEL, GOOGLE_LISTING_URL, DIRECTORY_CITATIONS,
} from '@/data/business-info';

const Toaster = dynamic(() => import('@/components/ui/toaster').then(m => ({ default: m.Toaster })), { ssr: false });
const preview = process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1';
const origin = 'https://imperialcleaninginc.com';
const description = 'Commercial cleaning and post-construction cleanup for businesses, contractors and facility managers across Idaho and Utah. Request a cleaning quote.';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: 'Commercial & Construction Cleaning | Imperial Cleaning', template: '%s | Imperial Cleaning Inc' },
  description,
  authors: [{ name: 'Imperial Cleaning Inc' }], creator: 'Imperial Cleaning Inc', publisher: 'Imperial Cleaning Inc',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website', locale: 'en_US', url: origin, siteName: 'Imperial Cleaning Inc',
    title: 'Imperial Cleaning Inc | Commercial & Construction Cleaning', description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Imperial Cleaning Inc' }],
  },
  twitter: { card: 'summary_large_image', title: 'Imperial Cleaning Inc | Commercial & Construction Cleaning', description, images: ['/og-image.png'] },
  robots: {
    index: !preview, follow: !preview,
    googleBot: { index: !preview, follow: !preview, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Individual pages declare their own canonical. Do not inherit the homepage URL onto new pages.
  icons: { icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }, { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest', category: 'business',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#000000' };
const ORG_ID = `${origin}/#organization`;
const WEBSITE_ID = `${origin}/#website`;
const siteJsonLd = [
  {
    '@context': 'https://schema.org', '@type': ['Organization', 'ProfessionalService'], '@id': ORG_ID,
    name: 'Imperial Cleaning Inc', url: origin, logo: `${origin}/hero-logo.png`, image: `${origin}/og-image.png`, description,
    telephone: BUSINESS_PHONE_TEL, email: BUSINESS_EMAIL,
    address: { '@type': 'PostalAddress', streetAddress: BUSINESS_ADDRESS.street, addressLocality: BUSINESS_ADDRESS.city, addressRegion: BUSINESS_ADDRESS.state, postalCode: BUSINESS_ADDRESS.postalCode, addressCountry: BUSINESS_ADDRESS.country },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS_GEO.latitude, longitude: BUSINESS_GEO.longitude },
    openingHoursSpecification: BUSINESS_OPENING_HOURS_SCHEMA,
    contactPoint: { '@type': 'ContactPoint', telephone: BUSINESS_PHONE_TEL, contactType: 'customer service', email: BUSINESS_EMAIL, areaServed: ['US-ID', 'US-UT'], availableLanguage: 'English' },
    areaServed: [
      { '@type': 'State', name: 'Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho' },
      { '@type': 'State', name: 'Utah', sameAs: 'https://en.wikipedia.org/wiki/Utah' },
      ...['Idaho Falls', 'Pocatello', 'Boise', 'Twin Falls', 'Rexburg', 'Salt Lake City', 'Logan', 'Ogden', 'Provo'].map(name => ({ '@type': 'City', name })),
    ],
    sameAs: [GOOGLE_LISTING_URL, ...DIRECTORY_CITATIONS, 'https://www.facebook.com/imperialcleaninginc', 'https://www.instagram.com/imperialcleaninginc/', 'https://www.linkedin.com/company/imperial-cleaning-inc'],
    hasMap: GOOGLE_LISTING_URL, foundingDate: '2015',
    slogan: 'Construction cleanup and commercial cleaning across Idaho and Utah.',
    // No unsupported employee count, certifications or rating claims are inserted to satisfy a validator.
    knowsAbout: ['Post-construction cleaning', 'Construction debris removal', 'Final cleaning', 'Commercial janitorial services', 'Office cleaning', 'Medical office cleaning'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Cleaning', url: `${origin}/construction-cleaning`, description: 'Post-construction cleanup, debris removal, and final cleaning services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Cleaning', url: `${origin}/commercial-cleaning`, description: 'Office cleaning and commercial facility cleaning services' } },
      ],
    },
  },
  { '@context': 'https://schema.org', '@type': 'WebSite', '@id': WEBSITE_ID, url: origin, name: 'Imperial Cleaning Inc', description, publisher: { '@id': ORG_ID }, inLanguage: 'en-US' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-US" suppressHydrationWarning>
    <body className="imperial-site" suppressHydrationWarning>
      <Header />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
      <Toaster />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, '\\u003c') }} />
      <Suspense fallback={null}><AnalyticsConsent /></Suspense>
      <ContextualContact />
    </body>
  </html>;
}

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_GEO,
  BUSINESS_OPENING_HOURS_SCHEMA,
  BUSINESS_PHONE_TEL,
  GOOGLE_LISTING_URL,
  DIRECTORY_CITATIONS,
} from '@/data/business-info';

const Toaster = dynamic(() => import('@/components/ui/toaster').then(m => ({ default: m.Toaster })), { ssr: false });

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imperialcleaninginc.com'),
  title: {
    default: 'Imperial Cleaning Inc | Professional Commercial & Construction Cleaning in Idaho & Utah',
    template: '%s | Imperial Cleaning Inc',
  },
  description: 'Professional construction cleanup and commercial cleaning services across Idaho and Utah. Licensed, insured, and trusted since 2015. Serving Idaho Falls, Boise, Salt Lake City, and 24+ locations.',
  keywords: [
    'commercial cleaning',
    'construction cleanup',
    'post-construction cleaning',
    'Idaho cleaning services',
    'Utah cleaning services',
    'office cleaning',
    'industrial cleaning',
    'Idaho Falls cleaning',
    'Boise cleaning',
    'Salt Lake City cleaning',
  ],
  authors: [{ name: 'Imperial Cleaning Inc' }],
  creator: 'Imperial Cleaning Inc',
  publisher: 'Imperial Cleaning Inc',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imperialcleaninginc.com',
    siteName: 'Imperial Cleaning Inc',
    title: 'Imperial Cleaning Inc | Professional Commercial & Construction Cleaning',
    description: 'Professional construction cleanup and commercial cleaning services across Idaho and Utah. Licensed, insured, and trusted since 2015.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Imperial Cleaning Inc - Professional Commercial Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imperial Cleaning Inc | Professional Commercial & Construction Cleaning',
    description: 'Professional construction cleanup and commercial cleaning services across Idaho and Utah.',
    images: ['/og-image.png'],
    site: '@imperialcleaninginc',
    creator: '@imperialcleaninginc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://imperialcleaninginc.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

// Sitewide JSON-LD graph: canonical Organization (stable @id) + WebSite.
// Every other page references these via @id rather than re-declaring them.
// NOTE: A WebSite SearchAction is intentionally omitted - the on-site search is a
// client-only modal with no query-string results route, and Google has deprecated
// the sitelinks searchbox. Add a SearchAction only if a real /search?q= route ships.
const ORG_ID = 'https://imperialcleaninginc.com/#organization';
const WEBSITE_ID = 'https://imperialcleaninginc.com/#website';

const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    // One canonical entity node for the whole site. Every page (home, contact,
    // state hubs, city Service providers) references this node via @id instead
    // of re-declaring divergent LocalBusiness copies.
    // ProfessionalService is a LocalBusiness subtype - naming the narrower type
    // gives search and answer engines a clearer category than a bare
    // Organization/LocalBusiness pair.
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: 'Imperial Cleaning Inc',
    url: 'https://imperialcleaninginc.com',
    logo: 'https://imperialcleaninginc.com/hero-logo.png',
    image: 'https://imperialcleaninginc.com/og-image.png',
    description: 'Professional construction cleanup and commercial cleaning services across Idaho and Utah. Licensed, insured, and trusted since 2015.',
    telephone: BUSINESS_PHONE_TEL,
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS.street,
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.state,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    openingHoursSpecification: BUSINESS_OPENING_HOURS_SCHEMA,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_PHONE_TEL,
      contactType: 'customer service',
      email: 'service@imperialcleaninginc.com',
      areaServed: ['US-ID', 'US-UT'],
      availableLanguage: 'English',
    },
    areaServed: [
      { '@type': 'State', name: 'Idaho', sameAs: 'https://en.wikipedia.org/wiki/Idaho' },
      { '@type': 'State', name: 'Utah', sameAs: 'https://en.wikipedia.org/wiki/Utah' },
      { '@type': 'City', name: 'Idaho Falls', sameAs: 'https://en.wikipedia.org/wiki/Idaho_Falls,_Idaho' },
      { '@type': 'City', name: 'Pocatello', sameAs: 'https://en.wikipedia.org/wiki/Pocatello,_Idaho' },
      { '@type': 'City', name: 'Boise', sameAs: 'https://en.wikipedia.org/wiki/Boise,_Idaho' },
      { '@type': 'City', name: 'Twin Falls', sameAs: 'https://en.wikipedia.org/wiki/Twin_Falls,_Idaho' },
      { '@type': 'City', name: 'Rexburg', sameAs: 'https://en.wikipedia.org/wiki/Rexburg,_Idaho' },
      { '@type': 'City', name: 'Salt Lake City', sameAs: 'https://en.wikipedia.org/wiki/Salt_Lake_City' },
      { '@type': 'City', name: 'Logan', sameAs: 'https://en.wikipedia.org/wiki/Logan,_Utah' },
      { '@type': 'City', name: 'Ogden', sameAs: 'https://en.wikipedia.org/wiki/Ogden,_Utah' },
      { '@type': 'City', name: 'Provo', sameAs: 'https://en.wikipedia.org/wiki/Provo,_Utah' },
    ],
    sameAs: [
      GOOGLE_LISTING_URL,
      ...DIRECTORY_CITATIONS,
      'https://www.facebook.com/imperialcleaninginc',
      'https://www.instagram.com/imperialcleaninginc/',
      'https://www.linkedin.com/company/imperial-cleaning-inc',
    ],
    hasMap: GOOGLE_LISTING_URL,
    slogan: 'Construction cleanup and commercial cleaning across Idaho and Utah.',
    foundingDate: '2015',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50,
    },
    priceRange: '$$',
    knowsAbout: [
      'Post-construction cleaning',
      'Construction debris removal',
      'Final clean and inspection preparation',
      'Commercial janitorial services',
      'Office cleaning',
      'Medical office cleaning',
      'Floor care and maintenance',
      'OSHA-compliant site cleanup',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Cleaning',
            description: 'Post-construction cleanup, debris removal, and final cleaning services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Cleaning',
            description: 'Office cleaning, facility maintenance, and industrial cleaning services',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: 'https://imperialcleaninginc.com',
    name: 'Imperial Cleaning Inc',
    description: 'Professional construction cleanup and commercial cleaning services across Idaho and Utah.',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Toaster />
        
        {/* JSON-LD Structured Data - inline, no JS execution needed */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        
        {/* Google Analytics - deferred to first user interaction for performance */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <script
            dangerouslySetInnerHTML={{ __html: `(function(){var l=false;function g(){if(l)return;l=true;var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}';s.async=true;document.head.appendChild(s);s.onload=function(){window.dataLayer=window.dataLayer||[];function t(){dataLayer.push(arguments)}t('js',new Date());t('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}')};['scroll','click','touchstart'].forEach(function(e){document.removeEventListener(e,g,{passive:true,capture:true})})}['scroll','click','touchstart'].forEach(function(e){document.addEventListener(e,g,{passive:true,capture:true,once:true})})})();` }}
          />
        )}

        {/* Microsoft Clarity - user behavior analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window, document, "clarity", "script", "x5wa4ucb26");`,
          }}
        />
      </body>
    </html>
  );
}

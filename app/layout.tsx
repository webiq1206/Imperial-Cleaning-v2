import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

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
    creator: '@imperialclean',
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

// Organization JSON-LD for entire site
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Imperial Cleaning Inc',
  url: 'https://imperialcleaninginc.com',
  logo: 'https://imperialcleaninginc.com/header-logo.png',
  image: 'https://imperialcleaninginc.com/og-image.png',
  description: 'Professional construction cleanup and commercial cleaning services across Idaho and Utah. Licensed, insured, and trusted since 2015.',
  telephone: '+1-208-520-3202',
  email: 'service@imperialcleaninginc.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Idaho Falls',
    addressRegion: 'ID',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Idaho' },
    { '@type': 'State', name: 'Utah' },
  ],
  sameAs: [
    'https://www.facebook.com/Imperialcleaninginc',
    'https://www.instagram.com/imperialcleaninginc/',
    'https://www.linkedin.com/company/imperial-cleaning-inc',
  ],
  foundingDate: '2015',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
  priceRange: '$$',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main id="main-content">
          {children}
        </main>
        <Toaster />
        
        {/* JSON-LD Structured Data - inline, no JS execution needed */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        
        {/* Google Analytics - deferred to first user interaction for performance */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <script
            dangerouslySetInnerHTML={{ __html: `(function(){var l=false;function g(){if(l)return;l=true;var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}';s.async=true;document.head.appendChild(s);s.onload=function(){window.dataLayer=window.dataLayer||[];function t(){dataLayer.push(arguments)}t('js',new Date());t('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}')};['scroll','click','touchstart'].forEach(function(e){document.removeEventListener(e,g,{passive:true,capture:true})})}['scroll','click','touchstart'].forEach(function(e){document.addEventListener(e,g,{passive:true,capture:true,once:true})})})();` }}
          />
        )}
      </body>
    </html>
  );
}

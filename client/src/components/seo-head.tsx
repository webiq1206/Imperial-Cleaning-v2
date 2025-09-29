import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  openGraph?: {
    title: string;
    description: string;
    image?: string;
    type?: string;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    image?: string;
  };
  structuredData?: Record<string, any>[];
}

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  openGraph,
  twitter,
  structuredData = []
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    updateMetaTag('name', 'description', description);

    // Update or create canonical URL
    if (canonicalUrl) {
      updateLinkTag('rel', 'canonical', 'href', canonicalUrl);
    }

    // Update or create Open Graph tags
    if (openGraph) {
      updateMetaTag('property', 'og:title', openGraph.title);
      updateMetaTag('property', 'og:description', openGraph.description);
      updateMetaTag('property', 'og:type', openGraph.type || 'website');
      updateMetaTag('property', 'og:url', canonicalUrl || window.location.href);
      
      if (openGraph.image) {
        updateMetaTag('property', 'og:image', openGraph.image);
      }
    }

    // Update or create Twitter Card tags
    if (twitter) {
      updateMetaTag('name', 'twitter:card', twitter.card);
      updateMetaTag('name', 'twitter:title', twitter.title);
      updateMetaTag('name', 'twitter:description', twitter.description);
      
      if (twitter.image) {
        updateMetaTag('name', 'twitter:image', twitter.image);
      }
    }

    // Remove existing structured data scripts with our identifier
    const existingSchemas = document.querySelectorAll('script[data-schema-type]');
    existingSchemas.forEach(script => script.remove());

    // Add new structured data scripts
    if (structuredData && structuredData.length > 0) {
      structuredData.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema-type', schema['@type'] || `schema-${index}`);
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonicalUrl, openGraph, twitter, structuredData]);

  return null;
}

// Helper function to update or create meta tags
function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let metaTag = document.querySelector(`meta[${attribute}="${attributeValue}"]`) as HTMLMetaElement;
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, attributeValue);
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
}

// Helper function to update or create link tags
function updateLinkTag(attribute: string, attributeValue: string, hrefAttribute: string, href: string) {
  let linkTag = document.querySelector(`link[${attribute}="${attributeValue}"]`) as HTMLLinkElement;
  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.setAttribute(attribute, attributeValue);
    document.head.appendChild(linkTag);
  }
  linkTag.setAttribute(hrefAttribute, href);
}

// Structured Data Schema Generators
export const createLocalBusinessSchema = (overrides: Partial<any> = {}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://imperialcleaninginc.com/#localbusiness",
  "name": "Imperial Cleaning Inc",
  "alternateName": "Imperial Cleaning",
  "description": "Headquartered in Idaho Falls, providing professional construction and commercial cleaning services across Idaho and Utah. Trusted by contractors and businesses for reliable, efficient cleaning solutions throughout Idaho and Utah.",
  "url": "https://imperialcleaninginc.com",
  "telephone": "+1-208-520-3202",
  "email": "service@imperialcleaninginc.com",
  "logo": "https://imperialcleaninginc.com/hero-logo.png",
  "image": "https://imperialcleaninginc.com/hero-logo.png",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Credit Card, ACH Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Blvd",
    "addressLocality": "Idaho Falls",
    "addressRegion": "ID",
    "postalCode": "83402",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.4666",
    "longitude": "-112.0336"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Boise",
      "sameAs": "https://en.wikipedia.org/wiki/Boise,_Idaho"
    },
    {
      "@type": "City", 
      "name": "Meridian",
      "sameAs": "https://en.wikipedia.org/wiki/Meridian,_Idaho"
    },
    {
      "@type": "City",
      "name": "Nampa", 
      "sameAs": "https://en.wikipedia.org/wiki/Nampa,_Idaho"
    },
    {
      "@type": "City",
      "name": "Eagle",
      "sameAs": "https://en.wikipedia.org/wiki/Eagle,_Idaho"
    },
    {
      "@type": "City",
      "name": "Caldwell",
      "sameAs": "https://en.wikipedia.org/wiki/Caldwell,_Idaho"
    },
    {
      "@type": "State",
      "name": "Idaho",
      "sameAs": "https://en.wikipedia.org/wiki/Idaho"
    },
    {
      "@type": "State",
      "name": "Utah", 
      "sameAs": "https://en.wikipedia.org/wiki/Utah"
    }
  ],
  "serviceType": [
    "Construction Cleaning",
    "Commercial Cleaning", 
    "Post Construction Cleanup",
    "Janitorial Services",
    "Office Cleaning",
    "Industrial Cleaning"
  ],
  "openingHours": [
    "Mo-Fr 07:00-18:00"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Cleaning",
          "description": "Post-construction cleanup services for contractors throughout Idaho and Utah"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Cleaning",
          "description": "Regular commercial cleaning services for businesses in the Treasure Valley"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-208-520-3202",
    "contactType": "customer service",
    "areaServed": ["ID", "UT"],
    "availableLanguage": "English"
  },
  ...overrides
});

export const createOrganizationSchema = (overrides: Partial<any> = {}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://imperialcleaninginc.com/#organization", 
  "name": "Imperial Cleaning Inc",
  "alternateName": "Imperial Cleaning",
  "url": "https://imperialcleaninginc.com",
  "logo": "https://imperialcleaninginc.com/hero-logo.png",
  "image": "https://imperialcleaninginc.com/hero-logo.png",
  "description": "Idaho Falls headquartered commercial and construction cleaning company serving Idaho and Utah with professional cleaning solutions for contractors and businesses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Blvd",
    "addressLocality": "Idaho Falls",
    "addressRegion": "ID", 
    "postalCode": "83402",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-208-520-3202",
    "contactType": "customer service",
    "areaServed": ["ID", "UT"]
  },
  "founder": {
    "@type": "Person",
    "name": "Imperial Cleaning Management Team"
  },
  "foundingDate": "2010",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "25"
  },
  "serviceArea": [
    {
      "@type": "State",
      "name": "Idaho"
    },
    {
      "@type": "State", 
      "name": "Utah"
    }
  ],
  ...overrides
});

export const createServiceSchema = (service: {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: Array<{
    "@type": string;
    "name": string;
    "sameAs"?: string;
  }>;
  provider?: any;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "serviceType": service.serviceType,
  "provider": service.provider || {
    "@type": "LocalBusiness",
    "name": "Imperial Cleaning Inc",
    "url": "https://imperialcleaninginc.com"
  },
  "areaServed": service.areaServed || [
    {
      "@type": "State",
      "name": "Idaho"
    },
    {
      "@type": "State",
      "name": "Utah" 
    }
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification", 
      "priceCurrency": "USD"
    }
  }
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createAggregateRatingSchema = (overrides: Partial<any> = {}) => ({
  "@context": "https://schema.org", 
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Imperial Cleaning Inc",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Idaho Falls",
      "addressRegion": "ID",
      "addressCountry": "US"
    }
  },
  "ratingValue": "4.9",
  "bestRating": "5",
  "worstRating": "1", 
  "reviewCount": "127",
  ...overrides
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
import { useEffect } from "react";

export interface SEOProps {
 title: string;
 description: string;
 keywords?: string;
 canonicalUrl?: string;
 robots?: string;
 language?: string;
 author?: string;
 viewport?: string;
 themeColor?: string;
 geography?: {
  region?: string;
  placename?: string;
  position?: string;
 };
 openGraph?: {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  url?: string;
  siteName?: string;
  locale?: string;
 };
 twitter?: {
  card: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  site?: string;
  creator?: string;
 };
 structuredData?: Record<string, any>[];
}

export default function SEOHead({
 title,
 description,
 keywords,
 canonicalUrl,
 robots = 'index, follow',
 language = 'en',
 author,
 viewport = 'width=device-width, initial-scale=1',
 themeColor = '#1a365d',
 geography,
 openGraph,
 twitter,
 structuredData = []
}: SEOProps) {
 useEffect(() => {
  // Update document title
  document.title = title;

  // Update basic meta tags
  updateMetaTag('name', 'description', description);
  updateMetaTag('name', 'robots', robots);
  updateMetaTag('name', 'viewport', viewport);
  updateMetaTag('name', 'theme-color', themeColor);
  updateMetaTag('http-equiv', 'Content-Language', language);
  
  if (keywords) {
   updateMetaTag('name', 'keywords', keywords);
  }
  
  if (author) {
   updateMetaTag('name', 'author', author);
  }
  
  // Geographic targeting meta tags
  if (geography) {
   if (geography.region) {
    updateMetaTag('name', 'geo.region', geography.region);
   }
   if (geography.placename) {
    updateMetaTag('name', 'geo.placename', geography.placename);
   }
   if (geography.position) {
    updateMetaTag('name', 'geo.position', geography.position);
   }
  }

  // Update or create canonical URL
  if (canonicalUrl) {
   updateLinkTag('rel', 'canonical', 'href', canonicalUrl);
  }

  // Update or create Open Graph tags
  if (openGraph) {
   updateMetaTag('property', 'og:title', openGraph.title);
   updateMetaTag('property', 'og:description', openGraph.description);
   updateMetaTag('property', 'og:type', openGraph.type || 'website');
   updateMetaTag('property', 'og:url', openGraph.url || canonicalUrl || window.location.href);
   updateMetaTag('property', 'og:site_name', openGraph.siteName || 'Imperial Cleaning Inc');
   updateMetaTag('property', 'og:locale', openGraph.locale || 'en_US');
   
   if (openGraph.image) {
    updateMetaTag('property', 'og:image', openGraph.image);
    updateMetaTag('property', 'og:image:alt', openGraph.imageAlt || openGraph.title);
    updateMetaTag('property', 'og:image:width', '1200');
    updateMetaTag('property', 'og:image:height', '630');
   }
  }

  // Update or create Twitter Card tags
  if (twitter) {
   updateMetaTag('name', 'twitter:card', twitter.card);
   updateMetaTag('name', 'twitter:title', twitter.title);
   updateMetaTag('name', 'twitter:description', twitter.description);
   
   if (twitter.site) {
    updateMetaTag('name', 'twitter:site', twitter.site);
   }
   
   if (twitter.creator) {
    updateMetaTag('name', 'twitter:creator', twitter.creator);
   }
   
   if (twitter.image) {
    updateMetaTag('name', 'twitter:image', twitter.image);
    updateMetaTag('name', 'twitter:image:alt', twitter.imageAlt || twitter.title);
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
 }, [title, description, keywords, canonicalUrl, robots, language, author, viewport, themeColor, geography, openGraph, twitter, structuredData]);

 return null;
}

// Helper function to update or create meta tags with validation
function updateMetaTag(attribute: string, attributeValue: string, content: string) {
 if (!content || content.trim() === '') {
  return; // Skip empty content
 }
 
 let metaTag = document.querySelector(`meta[${attribute}="${attributeValue}"]`) as HTMLMetaElement;
 if (!metaTag) {
  metaTag = document.createElement('meta');
  metaTag.setAttribute(attribute, attributeValue);
  document.head.appendChild(metaTag);
 }
 metaTag.content = content.trim();
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
 "foundingDate": "2015",
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

// WebSite schema with search functionality
export const createWebSiteSchema = (overrides: Partial<any> = {}) => ({
 "@context": "https://schema.org",
 "@type": "WebSite",
 "@id": "https://imperialcleaninginc.com/#website",
 "name": "Imperial Cleaning Inc",
 "alternateName": "Imperial Cleaning",
 "url": "https://imperialcleaninginc.com",
 "description": "Professional construction and commercial cleaning services across Idaho and Utah. Trusted by contractors and businesses for reliable cleaning solutions.",
 "publisher": {
  "@type": "Organization",
  "name": "Imperial Cleaning Inc",
  "logo": {
   "@type": "ImageObject",
   "url": "https://imperialcleaninginc.com/hero-logo.png"
  }
 },
 "potentialAction": {
  "@type": "SearchAction",
  "target": {
   "@type": "EntryPoint",
   "urlTemplate": "https://imperialcleaninginc.com/search?q={search_term_string}"
  },
  "query-input": "required name=search_term_string"
 },
 "inLanguage": "en-US",
 ...overrides
});

// ContactPoint schema for contact information
export const createContactPointSchema = (overrides: Partial<any> = {}) => ({
 "@context": "https://schema.org",
 "@type": "ContactPoint",
 "telephone": "+1-208-520-3202",
 "email": "service@imperialcleaninginc.com",
 "contactType": "customer service",
 "areaServed": ["ID", "UT"],
 "availableLanguage": "English",
 "hoursAvailable": {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
   "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ],
  "opens": "07:00",
  "closes": "18:00"
 },
 ...overrides
});

// Review schema for individual reviews
export const createReviewSchema = (review: {
 author: string;
 reviewBody: string;
 ratingValue: number;
 datePublished?: string;
}) => ({
 "@context": "https://schema.org",
 "@type": "Review",
 "author": {
  "@type": "Person",
  "name": review.author
 },
 "reviewBody": review.reviewBody,
 "reviewRating": {
  "@type": "Rating",
  "ratingValue": review.ratingValue,
  "bestRating": 5,
  "worstRating": 1
 },
 "datePublished": review.datePublished || new Date().toISOString().split('T')[0],
 "itemReviewed": {
  "@type": "LocalBusiness",
  "name": "Imperial Cleaning Inc"
 }
});

// PostalAddress utility schema
export const createPostalAddressSchema = (address: {
 streetAddress?: string;
 addressLocality: string;
 addressRegion: string;
 postalCode?: string;
 addressCountry?: string;
}) => ({
 "@type": "PostalAddress",
 ...(address.streetAddress && { "streetAddress": address.streetAddress }),
 "addressLocality": address.addressLocality,
 "addressRegion": address.addressRegion,
 "postalCode": address.postalCode || "83402",
 "addressCountry": address.addressCountry || "US"
});

// Hours of operation schema
export const createOpeningHoursSchema = (hours?: Array<{
 dayOfWeek: string[];
 opens: string;
 closes: string;
}>) => {
 const defaultHours = [
  {
   dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
   opens: "07:00",
   closes: "18:00"
  },
  {
   dayOfWeek: ["Saturday"],
   opens: "08:00",
   closes: "16:00"
  }
 ];
 
 return (hours || defaultHours).map(hour => ({
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": hour.dayOfWeek,
  "opens": hour.opens,
  "closes": hour.closes
 }));
};

// Article schema for blog posts or informational content
export const createArticleSchema = (article: {
 headline: string;
 description: string;
 author?: string;
 datePublished?: string;
 dateModified?: string;
 image?: string;
 url: string;
}) => ({
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": article.headline,
 "description": article.description,
 "author": {
  "@type": "Organization",
  "name": article.author || "Imperial Cleaning Inc"
 },
 "publisher": {
  "@type": "Organization",
  "name": "Imperial Cleaning Inc",
  "logo": {
   "@type": "ImageObject",
   "url": "https://imperialcleaninginc.com/hero-logo.png"
  }
 },
 "datePublished": article.datePublished || new Date().toISOString(),
 "dateModified": article.dateModified || new Date().toISOString(),
 "mainEntityOfPage": {
  "@type": "WebPage",
  "@id": article.url
 },
 "image": article.image || "https://imperialcleaninginc.com/hero-logo.png",
 "url": article.url
});

// Professional Service schema for specific cleaning services
export const createProfessionalServiceSchema = (service: {
 name: string;
 description: string;
 serviceType: string;
 location: {
  name: string;
  state: string;
 };
 url: string;
}) => ({
 "@context": "https://schema.org",
 "@type": "ProfessionalService",
 "name": service.name,
 "description": service.description,
 "serviceType": service.serviceType,
 "provider": {
  "@type": "LocalBusiness",
  "name": "Imperial Cleaning Inc",
  "address": createPostalAddressSchema({
   addressLocality: "Idaho Falls",
   addressRegion: "ID"
  }),
  "telephone": "+1-208-520-3202",
  "url": "https://imperialcleaninginc.com"
 },
 "areaServed": {
  "@type": "City",
  "name": service.location.name,
  "containedInPlace": {
   "@type": "State",
   "name": service.location.state
  }
 },
 "url": service.url,
 "offers": {
  "@type": "Offer",
  "availability": "https://schema.org/InStock",
  "priceCurrency": "USD"
 }
});
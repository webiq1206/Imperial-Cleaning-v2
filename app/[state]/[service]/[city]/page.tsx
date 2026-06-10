import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLocationClient from "@/components/pages/service-location-client";
import { StructuredData } from "@/components/structured-data";
import { allServiceLocations, type ServiceLocation } from "@/data/service-locations";
import { locationToSlug, isValidServiceLocation, buildServiceLocationUrl } from "@/lib/routing-utils";
import {
  generateLocationDescription,
  generateEnhancedServiceFeatures,
  generateLocationFAQ,
} from "@/lib/location-content-utils";

interface PageProps {
  params: Promise<{
    state: string;
    service: string;
    city: string;
  }>;
}

// Map slugs to readable names
const serviceNames: Record<string, string> = {
  "construction-cleaning": "Construction Cleaning",
  "commercial-cleaning": "Commercial Cleaning"
};

const stateNames: Record<string, string> = {
  "idaho": "Idaho",
  "utah": "Utah"
};

// Generate static params for all location pages
export async function generateStaticParams() {
  const params: { state: string; service: string; city: string }[] = [];
  
  allServiceLocations.forEach((location) => {
    const stateSlug = location.state.toLowerCase();
    const citySlug = locationToSlug(location.name);
    
    // Only generate pages for service/location combinations the business actually
    // offers, so we never ship a thin page for an unavailable service.
    (["construction-cleaning", "commercial-cleaning"] as const).forEach((service) => {
      if (isValidServiceLocation(service, citySlug, stateSlug)) {
        params.push({ state: stateSlug, service, city: citySlug });
      }
    });
  });
  
  return params;
}

// Find location by state and city slug
function findLocation(state: string, citySlug: string): ServiceLocation | undefined {
  const stateName = stateNames[state.toLowerCase()];
  return allServiceLocations.find(
    (loc) => loc.state === stateName && locationToSlug(loc.name) === citySlug
  );
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, service, city } = await params;
  const location = findLocation(state, city);
  const serviceName = serviceNames[service];
  
  if (!location || !serviceName) {
    return {
      title: "Service Not Found | Imperial Cleaning Inc",
    };
  }
  
  const stateAbbr = location.state === "Idaho" ? "ID" : "UT";
  const isConstruction = service === "construction-cleaning";
  
  // Optimized title (55-60 chars) with primary keyword first.
  // Fall back to a shorter form for long region names so the title fits in SERP.
  const shortService = isConstruction ? "Construction Cleanup" : "Commercial Cleaning";
  let title = `${location.name} ${serviceName} | Imperial Cleaning ${stateAbbr}`;
  if (title.length > 60) {
    title = `${location.name} ${shortService} | Imperial ${stateAbbr}`;
  }
  if (title.length > 65) {
    title = `${location.name} ${shortService} | Imperial Cleaning`;
  }
  
  const serviceDesc = isConstruction 
    ? "post-construction cleanup & debris removal" 
    : "office cleaning & facility maintenance";
  let description = `Professional ${serviceName.toLowerCase()} in ${location.name}, ${stateAbbr}. Expert ${serviceDesc}. Licensed & insured. Call (208) 520-3202!`;
  if (description.length < 140 && location.county) {
    description = `Professional ${serviceName.toLowerCase()} in ${location.name}, ${stateAbbr}. Serving ${location.county}. Expert ${serviceDesc}. Call (208) 520-3202!`;
  }
  if (description.length > 160) {
    description = description.substring(0, 157) + "...";
  }
  
  // Enhanced keywords with local terms
  const locationKeywords = location.keywords?.slice(0, 3).join(", ") || "";
  const keywords = `${location.name} ${serviceName.toLowerCase()}, ${serviceName.toLowerCase()} ${location.name} ${stateAbbr}, ${location.county || location.name} cleaning services, ${locationKeywords}`;
  
  return {
    // Absolute: city titles already carry the brand; the layout template
    // would otherwise append a second "| Imperial Cleaning Inc".
    title: { absolute: title },
    description,
    keywords,
    authors: [{ name: "Imperial Cleaning Inc" }],
    openGraph: {
      title: `${location.name} ${serviceName} Services | Imperial Cleaning Inc`,
      description: `Professional ${serviceName.toLowerCase()} in ${location.name}, ${location.state}. Expert ${isConstruction ? "post-construction cleanup" : "janitorial"} services. Licensed & insured.`,
      url: `https://imperialcleaninginc.com/${state}/${service}/${city}`,
      siteName: "Imperial Cleaning Inc",
      locale: "en_US",
      type: "website",
      images: [{
        url: "https://imperialcleaninginc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: `${serviceName} Services in ${location.name}, ${location.state}`
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.name} ${serviceName} | Imperial Cleaning`,
      description: `Professional ${serviceName.toLowerCase()} in ${location.name}, ${stateAbbr}. Licensed & insured.`,
    },
    alternates: {
      canonical: `https://imperialcleaninginc.com/${state}/${service}/${city}`,
    },
    other: {
      "geo.region": `US-${stateAbbr}`,
      "geo.placename": `${location.name}, ${location.state}`,
      ...(location.coordinates && {
        "geo.position": `${location.coordinates.lat};${location.coordinates.lng}`,
        "ICBM": `${location.coordinates.lat}, ${location.coordinates.lng}`
      })
    },
  };
}

// JSON-LD is built and rendered server-side so structured data is guaranteed
// to be present in the initial HTML for every crawler, independent of any
// client-side hydration.
function buildCitySchemas(
  location: ServiceLocation,
  serviceType: "construction-cleaning" | "commercial-cleaning",
  serviceName: string
) {
  const metaDescription = generateLocationDescription(serviceType, location);
  const serviceFeatures = generateEnhancedServiceFeatures(serviceType, location);
  const faqs = generateLocationFAQ(serviceType, location);
  const stateSlug = location.state.toLowerCase();
  const pageUrl = buildServiceLocationUrl(location.state, serviceType, location.name);
  const citySlug = locationToSlug(location.name);

  // City pages describe a Service offered in a specific city. The provider is
  // the canonical Organization declared sitewide (referenced by @id) - we
  // deliberately do NOT emit a separate per-city LocalBusiness, which would
  // falsely imply a physical branch in each city (a doorway/spam signal).
  // No aggregateRating is emitted until a verifiable review source exists
  // (see data/reviews.ts).
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${location.name} ${serviceName} Services`,
    "description": metaDescription,
    "serviceType": serviceName,
    "url": `https://imperialcleaninginc.com${pageUrl}`,
    "image": "https://imperialcleaninginc.com/og-image.png",
    "provider": { "@id": "https://imperialcleaninginc.com/#organization" },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      ...(location.coordinates && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng,
        },
      }),
      "containedInPlace": location.county
        ? {
            "@type": "AdministrativeArea",
            "name": location.county,
            "containedInPlace": { "@type": "State", "name": location.state },
          }
        : { "@type": "State", "name": location.state },
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": serviceFeatures.features
        .slice(0, 5)
        .map((feature: { title: string; description: string }) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature.title,
            "description": feature.description,
          },
        })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": `${location.state} Service Areas`, "item": `https://imperialcleaninginc.com/service-areas/${stateSlug}` },
      { "@type": "ListItem", "position": 3, "name": serviceName, "item": `https://imperialcleaninginc.com/${serviceType}` },
      { "@type": "ListItem", "position": 4, "name": `${location.name} ${serviceName}`, "item": `https://imperialcleaninginc.com/${stateSlug}/${serviceType}/${citySlug}` },
    ],
  };

  return [serviceSchema, breadcrumbSchema, faqSchema];
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { state, service, city } = await params;
  const location = findLocation(state, city);
  const serviceName = serviceNames[service];
  
  if (!location || !serviceName || !isValidServiceLocation(service, city, state)) {
    notFound();
  }

  const serviceType = service as "construction-cleaning" | "commercial-cleaning";
  const schemas = buildCitySchemas(location, serviceType, serviceName);

  return (
    <>
      <StructuredData data={schemas} />
      <ServiceLocationClient
        location={location}
        serviceType={serviceType}
        serviceName={serviceName}
      />
    </>
  );
}

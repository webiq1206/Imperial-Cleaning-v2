import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLocationClient from "@/components/pages/service-location-client";
import { allServiceLocations, type ServiceLocation } from "@/data/service-locations";
import { locationToSlug } from "@/lib/routing-utils";

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
    
    // Generate for both service types
    params.push(
      { state: stateSlug, service: "construction-cleaning", city: citySlug },
      { state: stateSlug, service: "commercial-cleaning", city: citySlug }
    );
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
  
  // Optimized title (55-60 chars) with primary keyword first
  const title = `${location.name} ${serviceName} | Imperial Cleaning ${stateAbbr}`;
  
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
    title,
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

export default async function ServiceLocationPage({ params }: PageProps) {
  const { state, service, city } = await params;
  const location = findLocation(state, city);
  const serviceName = serviceNames[service];
  
  if (!location || !serviceName) {
    notFound();
  }
  
  return (
    <ServiceLocationClient
      location={location}
      serviceType={service as "construction-cleaning" | "commercial-cleaning"}
      serviceName={serviceName}
    />
  );
}

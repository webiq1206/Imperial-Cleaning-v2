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
  
  const title = `${location.name} ${serviceName} Services | Imperial Cleaning Inc`;
  const description = `Professional ${serviceName.toLowerCase()} in ${location.name}, ${location.state}. Expert ${service === "construction-cleaning" ? "post-construction cleanup" : "janitorial and office cleaning"} services. Licensed & insured. Call (208) 520-3202 for free quote!`;
  
  return {
    title,
    description,
    keywords: `${location.name} ${serviceName.toLowerCase()}, ${location.state} cleaning services, ${location.name} cleaning company, ${service.replace("-", " ")} ${location.name}`,
    openGraph: {
      title,
      description,
      url: `https://imperialcleaninginc.com/${state}/${service}/${city}`,
      siteName: "Imperial Cleaning Inc",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://imperialcleaninginc.com/${state}/${service}/${city}`,
    },
    other: {
      "geo.region": `US-${location.state === "Idaho" ? "ID" : "UT"}`,
      "geo.placename": `${location.name}, ${location.state}`,
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

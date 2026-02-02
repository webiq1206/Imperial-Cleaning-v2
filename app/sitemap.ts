import { MetadataRoute } from "next";
import { allServiceLocations } from "@/data/service-locations";
import { locationToSlug } from "@/lib/routing-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imperialcleaninginc.com";

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/construction-cleaning`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/commercial-cleaning`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/service-areas/idaho`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas/utah`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Dynamic location pages
  const locationPages: MetadataRoute.Sitemap = [];
  
  allServiceLocations.forEach((location) => {
    const stateSlug = location.state.toLowerCase();
    const citySlug = locationToSlug(location.name);

    // Construction cleaning pages
    locationPages.push({
      url: `${baseUrl}/${stateSlug}/construction-cleaning/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });

    // Commercial cleaning pages
    locationPages.push({
      url: `${baseUrl}/${stateSlug}/commercial-cleaning/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return [...staticPages, ...locationPages];
}

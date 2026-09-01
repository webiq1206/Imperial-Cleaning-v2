import { MetadataRoute } from "next";
import { allServiceLocations } from "@/data/service-locations";
import { locationToSlug, isValidServiceLocation } from "@/lib/routing-utils";
import { guides } from "@/data/guides";
import { industries } from "@/data/industries";

// Stable lastModified so the sitemap doesn't report every URL as changed on every
// build (which dilutes the signal). Bump this date when content is meaningfully updated.
const LAST_UPDATED = new Date("2026-09-01");

// City-page priority by market tier, so primary markets carry more weight than
// extended/sparse markets rather than all sitting at a flat 0.7.
const tierPriority: Record<string, number> = {
  primary: 0.8,
  secondary: 0.7,
  extended: 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imperialcleaninginc.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/construction-cleaning`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/commercial-cleaning`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/service-areas`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/idaho`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/utah`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/sitemap`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Resource/guide pages
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/resources/${guide.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Industry pages (restored legacy URLs)
  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/${industry.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic location pages (only valid service/location combinations)
  const locationPages: MetadataRoute.Sitemap = [];

  allServiceLocations.forEach((location) => {
    const stateSlug = location.state.toLowerCase();
    const citySlug = locationToSlug(location.name);
    const priority = tierPriority[location.marketTier] ?? 0.6;

    (["construction-cleaning", "commercial-cleaning"] as const).forEach((service) => {
      if (isValidServiceLocation(service, citySlug, stateSlug)) {
        locationPages.push({
          url: `${baseUrl}/${stateSlug}/${service}/${citySlug}`,
          lastModified: LAST_UPDATED,
          changeFrequency: "weekly",
          priority,
        });
      }
    });
  });

  return [...staticPages, ...industryPages, ...guidePages, ...locationPages];
}

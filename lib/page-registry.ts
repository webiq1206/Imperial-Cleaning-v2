import { allServiceLocations, type ServiceLocation } from "@/data/service-locations";
import { buildServiceLocationUrl, locationToSlug } from "@/lib/routing-utils";
import { guides } from "@/data/guides";

export type PageType =
  | "home"
  | "service-hub"
  | "state-hub"
  | "service-areas-hub"
  | "city-service"
  | "about"
  | "contact"
  | "resource-hub"
  | "resource"
  | "legal";

export interface PageEntry {
  url: string;
  type: PageType;
  title: string;
  h1: string;
  anchor: string;
  state?: "Idaho" | "Utah";
  service?: "construction-cleaning" | "commercial-cleaning";
  city?: string;
  county?: string;
  industries: string[];
  marketTier?: "primary" | "secondary" | "extended";
  authorityBoost: number;
  isMoneyPage: boolean;
}

const SERVICE_LABEL: Record<string, string> = {
  "construction-cleaning": "Construction Cleaning",
  "commercial-cleaning": "Commercial Cleaning",
};

const TIER_BOOST: Record<string, number> = {
  primary: 0.4,
  secondary: 0.2,
  extended: 0.05,
};

function cityEntries(): PageEntry[] {
  const entries: PageEntry[] = [];
  for (const loc of allServiceLocations) {
    const services: Array<"construction-cleaning" | "commercial-cleaning"> = [];
    if (loc.services.constructionCleanup) services.push("construction-cleaning");
    if (loc.services.commercialCleaning) services.push("commercial-cleaning");

    for (const service of services) {
      const serviceLabel = SERVICE_LABEL[service];
      const url = buildServiceLocationUrl(loc.state, service, loc.name);
      entries.push({
        url,
        type: "city-service",
        title: `${loc.name} ${serviceLabel} | Imperial Cleaning ${loc.state === "Idaho" ? "ID" : "UT"}`,
        h1: `${serviceLabel} in ${loc.name}, ${loc.state}`,
        anchor: `${serviceLabel} in ${loc.name}`,
        state: loc.state,
        service,
        city: loc.name,
        county: loc.county,
        industries: loc.demographics.economicBase,
        marketTier: loc.marketTier,
        authorityBoost: TIER_BOOST[loc.marketTier] ?? 0,
        isMoneyPage: false,
      });
    }
  }
  return entries;
}

function staticEntries(): PageEntry[] {
  return [
    {
      url: "/",
      type: "home",
      title: "Imperial Cleaning Inc | Idaho & Utah Cleaning Services",
      h1: "Imperial Cleaning Inc",
      anchor: "Imperial Cleaning home",
      industries: [],
      authorityBoost: 0.5,
      isMoneyPage: false,
    },
    {
      url: "/construction-cleaning",
      type: "service-hub",
      title: "Construction Cleaning Services | Imperial Cleaning Inc",
      h1: "Construction Cleaning Services",
      anchor: "Construction Cleaning Services",
      service: "construction-cleaning",
      industries: ["Construction"],
      authorityBoost: 1.0,
      isMoneyPage: true,
    },
    {
      url: "/commercial-cleaning",
      type: "service-hub",
      title: "Commercial Cleaning Services | Imperial Cleaning Inc",
      h1: "Commercial Cleaning Services",
      anchor: "Commercial Cleaning Services",
      service: "commercial-cleaning",
      industries: [],
      authorityBoost: 1.0,
      isMoneyPage: true,
    },
    {
      url: "/service-areas",
      type: "service-areas-hub",
      title: "Service Areas | Idaho & Utah | Imperial Cleaning",
      h1: "Our Service Areas",
      anchor: "Idaho & Utah service areas",
      industries: [],
      authorityBoost: 0.7,
      isMoneyPage: false,
    },
    {
      url: "/service-areas/idaho",
      type: "state-hub",
      title: "Idaho Cleaning Service Areas | Imperial Cleaning Inc",
      h1: "Idaho Cleaning Services",
      anchor: "Idaho service areas",
      state: "Idaho",
      industries: [],
      authorityBoost: 0.6,
      isMoneyPage: false,
    },
    {
      url: "/service-areas/utah",
      type: "state-hub",
      title: "Utah Cleaning Service Areas | Imperial Cleaning Inc",
      h1: "Utah Cleaning Services",
      anchor: "Utah service areas",
      state: "Utah",
      industries: [],
      authorityBoost: 0.6,
      isMoneyPage: false,
    },
    {
      url: "/about",
      type: "about",
      title: "About Imperial Cleaning Inc | Idaho & Utah Cleaning",
      h1: "About Imperial Cleaning Inc",
      anchor: "About Imperial Cleaning",
      industries: [],
      authorityBoost: 0.8,
      isMoneyPage: false,
    },
    {
      url: "/contact",
      type: "contact",
      title: "Contact Imperial Cleaning | Free Quote Idaho & Utah",
      h1: "Contact Imperial Cleaning",
      anchor: "Request a free cleaning quote",
      industries: [],
      authorityBoost: 2.0,
      isMoneyPage: true,
    },
    {
      url: "/resources",
      type: "resource-hub",
      title: "Cleaning Resources & Guides | Imperial Cleaning Inc",
      h1: "Cleaning Guides & Resources",
      anchor: "Cleaning guides & resources",
      industries: [],
      authorityBoost: 0.5,
      isMoneyPage: false,
    },
    {
      url: "/sitemap",
      type: "legal",
      title: "Sitemap | Imperial Cleaning Inc",
      h1: "Sitemap",
      anchor: "Site map",
      industries: [],
      authorityBoost: 0,
      isMoneyPage: false,
    },
    {
      url: "/privacy-policy",
      type: "legal",
      title: "Privacy Policy | Imperial Cleaning Inc",
      h1: "Privacy Policy",
      anchor: "Privacy Policy",
      industries: [],
      authorityBoost: 0,
      isMoneyPage: false,
    },
    {
      url: "/terms-of-service",
      type: "legal",
      title: "Terms of Service | Imperial Cleaning Inc",
      h1: "Terms of Service",
      anchor: "Terms of Service",
      industries: [],
      authorityBoost: 0,
      isMoneyPage: false,
    },
  ];
}

function resourceEntries(): PageEntry[] {
  return guides.map((guide) => ({
    url: `/resources/${guide.slug}`,
    type: "resource" as const,
    title: guide.metaTitle,
    h1: guide.title,
    anchor: guide.title,
    industries:
      guide.category === "Commercial Cleaning"
        ? ["Commercial"]
        : guide.category === "Construction Cleaning"
        ? ["Construction"]
        : [],
    authorityBoost: 0.2,
    isMoneyPage: false,
  }));
}

let cached: PageEntry[] | null = null;

export function getPageRegistry(): PageEntry[] {
  if (cached) return cached;
  cached = [...staticEntries(), ...resourceEntries(), ...cityEntries()];
  return cached;
}

export function findPage(url: string): PageEntry | undefined {
  return getPageRegistry().find((p) => p.url === url);
}

export function getTopCitiesForState(
  state: "Idaho" | "Utah",
  limit = 4
): ServiceLocation[] {
  const tierOrder = { primary: 0, secondary: 1, extended: 2 };
  return allServiceLocations
    .filter((l) => l.state === state)
    .sort((a, b) => {
      const t = tierOrder[a.marketTier] - tierOrder[b.marketTier];
      if (t !== 0) return t;
      const popA = parseInt((a.population || "0").replace(/[^0-9]/g, ""), 10) || 0;
      const popB = parseInt((b.population || "0").replace(/[^0-9]/g, ""), 10) || 0;
      return popB - popA;
    })
    .slice(0, limit);
}

export { locationToSlug };

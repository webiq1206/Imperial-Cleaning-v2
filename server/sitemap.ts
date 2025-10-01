import { allServiceLocations } from "../shared/service-locations";

// Inline locationToSlug function to avoid client import issues
function locationToSlug(locationName: string): string {
  return locationName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap(): string {
  const baseUrl = 'https://imperialcleaninginc.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Main Pages (priority: 1.0, changefreq: weekly)
  const mainPages: SitemapUrl[] = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    }
  ];

  // Service Hub Pages (priority: 0.9, changefreq: weekly)
  const serviceHubPages: SitemapUrl[] = [
    {
      url: `${baseUrl}/construction-cleaning`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/commercial-cleaning`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    }
  ];

  // Service Area Pages (priority: 0.85, changefreq: monthly)
  const serviceAreaPages: SitemapUrl[] = [
    {
      url: `${baseUrl}/idaho-service-areas`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/utah-service-areas`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.85
    }
  ];

  // Legal/Other Pages (priority: 0.3, changefreq: yearly)
  const legalPages: SitemapUrl[] = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/sitemap`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  // City-Specific Service Pages (priority: 0.8, changefreq: monthly)
  // Format: https://imperialcleaninginc.com/state/service/city/
  const serviceTypes = ['construction-cleaning', 'commercial-cleaning'];
  const cityServicePages: SitemapUrl[] = [];

  // Generate URLs for each service/location combination
  for (const service of serviceTypes) {
    for (const location of allServiceLocations) {
      // Check if location supports this service
      const supportsService = (service === 'construction-cleaning') 
        ? location.services.constructionCleanup 
        : location.services.commercialCleaning;

      if (supportsService) {
        const stateSlug = location.state.toLowerCase();
        const citySlug = locationToSlug(location.name);
        cityServicePages.push({
          url: `${baseUrl}/${stateSlug}/${service}/${citySlug}/`,
          lastmod: currentDate,
          changefreq: 'monthly',
          priority: 0.8
        });
      }
    }
  }

  // Combine all URLs in proper order
  const allUrls = [
    ...mainPages,
    ...serviceHubPages,
    ...serviceAreaPages,
    ...cityServicePages,
    ...legalPages
  ];

  // Generate XML sitemap
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const sitemapOpenTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const sitemapCloseTag = '</urlset>';

  const urlEntries = allUrls.map(urlData => {
    let entry = `  <url>\n    <loc>${urlData.url}</loc>`;
    
    if (urlData.lastmod) {
      entry += `\n    <lastmod>${urlData.lastmod}</lastmod>`;
    }
    
    if (urlData.changefreq) {
      entry += `\n    <changefreq>${urlData.changefreq}</changefreq>`;
    }
    
    if (urlData.priority !== undefined) {
      entry += `\n    <priority>${urlData.priority}</priority>`;
    }
    
    entry += '\n  </url>';
    return entry;
  }).join('\n');

  return [
    xmlHeader,
    sitemapOpenTag,
    urlEntries,
    sitemapCloseTag
  ].join('\n');
}

// Generate sitemap statistics for monitoring
export function getSitemapStats() {
  // Count static pages
  const mainPagesCount = 3; // Homepage, About, Contact
  const serviceHubCount = 2; // Construction, Commercial
  const serviceAreaCount = 2; // Idaho, Utah
  const legalPagesCount = 3; // Privacy, Terms, Sitemap page
  const staticCount = mainPagesCount + serviceHubCount + serviceAreaCount + legalPagesCount;
  
  const locationCount = allServiceLocations.length;
  
  // Count dynamic city/service routes
  let constructionCleaningCount = 0;
  let commercialCleaningCount = 0;
  
  for (const location of allServiceLocations) {
    if (location.services.constructionCleanup) constructionCleaningCount++;
    if (location.services.commercialCleaning) commercialCleaningCount++;
  }
  
  const dynamicCount = constructionCleaningCount + commercialCleaningCount;
  const totalUrls = staticCount + dynamicCount;
  
  return {
    static_pages: {
      main_pages: mainPagesCount,
      service_hubs: serviceHubCount,
      service_areas: serviceAreaCount,
      legal_pages: legalPagesCount,
      total: staticCount
    },
    dynamic_pages: {
      construction_cleaning: constructionCleaningCount,
      commercial_cleaning: commercialCleaningCount,
      total: dynamicCount
    },
    locations_covered: locationCount,
    total_urls: totalUrls,
    last_generated: new Date().toISOString()
  };
}
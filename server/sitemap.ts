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
  
  // Static routes
  const staticUrls: SitemapUrl[] = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
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
    },
    {
      url: `${baseUrl}/service-areas/idaho`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/service-areas/utah`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    }
  ];

  // Dynamic service/location routes
  const serviceTypes = ['construction-cleaning', 'commercial-cleaning'];
  const dynamicUrls: SitemapUrl[] = [];

  // Generate URLs for each service/location combination
  for (const service of serviceTypes) {
    for (const location of allServiceLocations) {
      // Check if location supports this service
      const supportsService = (service === 'construction-cleaning') 
        ? location.services.constructionCleanup 
        : location.services.commercialCleaning;

      if (supportsService) {
        const locationSlug = locationToSlug(location.name);
        dynamicUrls.push({
          url: `${baseUrl}/${service}/${locationSlug}`,
          lastmod: currentDate,
          changefreq: 'weekly',
          priority: location.marketTier === 'primary' ? 0.8 : 
                   location.marketTier === 'secondary' ? 0.7 : 0.6
        });
      }
    }
  }

  // Combine all URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

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
  const staticCount = 7; // Homepage, About, Contact, 2 service hubs, 2 service areas
  const locationCount = allServiceLocations.length;
  
  // Count dynamic routes
  let constructionCleaningCount = 0;
  let commercialCleaningCount = 0;
  
  for (const location of allServiceLocations) {
    if (location.services.constructionCleanup) constructionCleaningCount++;
    if (location.services.commercialCleaning) commercialCleaningCount++;
  }
  
  const dynamicCount = constructionCleaningCount + commercialCleaningCount;
  const totalUrls = staticCount + dynamicCount;
  
  return {
    static_urls: staticCount,
    dynamic_urls: dynamicCount,
    total_urls: totalUrls,
    locations_covered: locationCount,
    construction_cleaning_pages: constructionCleaningCount,
    commercial_cleaning_pages: commercialCleaningCount,
    last_generated: new Date().toISOString()
  };
}
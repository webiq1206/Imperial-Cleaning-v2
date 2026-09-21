import type { MetadataRoute } from 'next';

/** Public permission is broad; robots.txt is never a substitute for authentication. */
export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_DESIGN_PREVIEW === '1') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    // A single wildcard group avoids more-specific agents bypassing shared exclusions.
    // This covers legitimate search, AI search, user fetchers, training, and research crawlers.
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api', '/admin', '/tmp/', '/__tests__/'] }],
    sitemap: 'https://imperialcleaninginc.com/sitemap.xml',
  };
}

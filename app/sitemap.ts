import type { MetadataRoute } from 'next';
import { getPageRegistry } from '@/lib/page-registry';
import { buildPublicSitemap, type PublicationRules } from '@/lib/publishing-policy';
import rules from '@/data/publication-rules.json';

/** Generated from the same registry/policy as internal discovery and analytics routing. */
export default function sitemap(): MetadataRoute.Sitemap {
  return buildPublicSitemap(getPageRegistry().map(page => page.url), rules as PublicationRules);
}

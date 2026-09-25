import type { Metadata } from 'next';
import type { IndustryPage } from '@/data/industries';
import { buildSearchMetadata } from '@/lib/search-appearance';

/** One reviewed listing per retained service or industry URL. */
export function buildIndustryMetadata(industry: IndustryPage): Metadata {
  return buildSearchMetadata(`/${industry.slug}`);
}

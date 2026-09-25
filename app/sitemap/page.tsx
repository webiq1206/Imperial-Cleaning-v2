import type { Metadata } from 'next';
import SiteDirectoryContent from '@/components/pages/site-directory-content';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/sitemap');
export default function HtmlSitemapPage() { return <SiteDirectoryContent />; }

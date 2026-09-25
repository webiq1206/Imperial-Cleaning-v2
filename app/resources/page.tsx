import type { Metadata } from 'next';
import ResourcesContent from '@/components/pages/resources-index-content';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/resources');
export default function ResourcesHubPage() { return <ResourcesContent />; }

import type { Metadata } from 'next';
import ServiceAreasContent from '@/components/pages/service-areas-index-content';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/service-areas');
export default function ServiceAreasHubPage() { return <ServiceAreasContent />; }

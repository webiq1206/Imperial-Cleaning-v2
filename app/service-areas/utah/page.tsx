import type { Metadata } from 'next';
import ServiceAreasUtahClient from '@/components/pages/service-areas-utah-client';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/service-areas/utah');
export default function ServiceAreasUtahPage() { return <ServiceAreasUtahClient />; }

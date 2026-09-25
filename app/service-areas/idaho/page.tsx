import type { Metadata } from 'next';
import ServiceAreasIdahoClient from '@/components/pages/service-areas-idaho-client';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/service-areas/idaho');
export default function ServiceAreasIdahoPage() { return <ServiceAreasIdahoClient />; }

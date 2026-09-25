import type { Metadata } from 'next';
import CommercialCleaningClient from '@/components/pages/commercial-cleaning-client';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/commercial-cleaning');
export default function CommercialCleaningPage() { return <CommercialCleaningClient />; }

import type { Metadata } from 'next';
import ConstructionCleaningClient from '@/components/pages/construction-cleaning-client';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/construction-cleaning');
export default function ConstructionCleaningPage() { return <ConstructionCleaningClient />; }

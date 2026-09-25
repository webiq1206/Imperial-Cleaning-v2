import type { Metadata } from 'next';
import ServiceTermsContent from '@/components/pages/service-terms-content';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/terms-of-service');
export default function TermsOfServicePage() { return <ServiceTermsContent />; }

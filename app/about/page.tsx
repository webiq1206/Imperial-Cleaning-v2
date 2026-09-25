import type { Metadata } from 'next';
import AboutClient from '@/components/pages/about-client';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/about');
export default function AboutPage() { return <AboutClient />; }

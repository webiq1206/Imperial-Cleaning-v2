import type { Metadata } from 'next';
import ContactClient from '@/components/pages/contact-client';
import { buildSearchMetadata } from '@/lib/search-appearance';

export const metadata: Metadata = buildSearchMetadata('/contact');
export default function ContactPage() { return <ContactClient />; }

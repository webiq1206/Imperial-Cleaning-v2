import type { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData } from '@/components/structured-data';
import RelatedContent from '@/components/shared/related-content';
import PrivacySettingsButton from '@/components/privacy-settings-button';
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from '@/data/business-info';

const canonical = 'https://imperialcleaninginc.com/privacy-policy';
const description = 'How Imperial Cleaning Inc uses information you provide, handles optional website analytics, and lets you change your privacy choices or contact the team.';
export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Imperial Cleaning Inc' }, description,
  alternates: { canonical },
  openGraph: { title: 'Privacy Policy | Imperial Cleaning Inc', description, url: canonical, type: 'website', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title: 'Privacy Policy | Imperial Cleaning Inc', description, images: ['/og-image.png'] },
};
export default function PrivacyPolicyPage() {
  return <>
    <StructuredData data={[
      { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: 'Imperial Cleaning Inc Privacy Policy', description, dateModified: '2026-09-21', publisher: { '@id': 'https://imperialcleaninginc.com/#organization' } },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://imperialcleaninginc.com/' }, { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: canonical }] },
    ]} />
    <section className="ic-section"><div className="site-width policy-content">
      <span className="eyebrow">IMPERIAL CLEANING INC</span><h1>Privacy policy</h1>
      <p>Learn how we collect, use, and safeguard your information.</p><p>Last updated: September 21, 2026</p>
      <h2>Introduction</h2>
      <p>Imperial Cleaning Inc (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.</p>
      <p>We operate throughout Idaho and Utah, providing construction cleanup and commercial cleaning services. This policy applies to our business operations and digital platforms.</p>
      <h2>Information you provide</h2>
      <p>We may collect your name, email address, phone number, company name and job title, project location and service requirements, and billing and payment information when you provide it in the course of requesting or receiving services.</p>
      <p>The website quote form requests your contact details, service, city and state. Company details and project notes are optional. The form sends this information through our email delivery provider so the team can respond to your request.</p>
      <h2>How we use your information</h2>
      <p>We use your information to provide cleaning services and project quotes, communicate about services, schedules and billing, improve our services and customer experience, and comply with legal and regulatory requirements.</p>
      <h2>Optional website analytics</h2>
      <p>The website uses Google Analytics and Microsoft Clarity only after you allow optional analytics. These providers may process technical information about your browser and device and how you use the site. Clarity provides session replay and interaction analysis.</p>
      <p>Our custom analytics events exclude the contact details and project notes entered in the quote form. The form is masked for session replay. The page addresses sent by our custom analytics code omit query strings and fragments. Replay is disabled on pages with query strings or fragments, and optional tracking is excluded from admin and unrecognized routes.</p>
      <p>Accepting analytics is not required to browse services, request a quote, call or email us. Your preference is stored in this browser for up to 180 days. You can change it using <PrivacySettingsButton /> in the footer. A Global Privacy Control signal keeps optional analytics off.</p>
      <p>Turning analytics off prevents future optional collection through these site controls and removes known analytics cookies that this site can remove. It does not erase information already received by a provider. Requests already in transit may finish. Essential hosting and security logs and the information you submit to contact us are separate from optional analytics.</p>
      <h2>Data security</h2>
      <p>We use technical and organizational measures intended to protect personal information against unauthorized access, alteration, disclosure or destruction. No website or transmission method can be guaranteed completely secure.</p>
      <h2>Contact us</h2>
      <p>For questions about this policy or requests concerning your personal information, email <a href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a> or call <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE}</a>.</p>
      <Link href="/contact" className="ic-button">Contact Imperial Cleaning</Link>
    </div></section>
    <RelatedContent pageUrl="/privacy-policy" heading="Continue exploring Imperial Cleaning" limit={5} />
  </>;
}

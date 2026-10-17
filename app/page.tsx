import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import HomeClient from "@/components/pages/home-client";
import { getPublicReviewLine } from "@/lib/review-claims.server";
import { StructuredData } from "@/components/structured-data";
import { homeFaqs } from "@/data/home-faqs";
import { homeSearch } from "@/data/service-priorities";
import { SITE_ICONS, searchImage } from "@/lib/search-appearance";

const origin = "https://imperialcleaninginc.com/";
export const metadata: Metadata = {
  title: { absolute: homeSearch.title },
  description: homeSearch.description,
  keywords: homeSearch.keywords,
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: homeSearch.title, description: homeSearch.description, url: origin,
    siteName: "Imperial Cleaning Inc", locale: "en_US", type: "website",
    images: [searchImage('/')],
  },
  twitter: { card: "summary_large_image", title: homeSearch.title, description: homeSearch.description, images: [searchImage('/').url] },
  alternates: { canonical: origin },
  icons: SITE_ICONS,
  // Inherit the environment-aware index policy from the root layout.
};
const webPageSchema = {
  "@context": "https://schema.org", "@type": "WebPage", "@id": `${origin}#webpage`,
  url: origin, name: homeSearch.title, description: homeSearch.description,
  isPartOf: { "@id": `${origin}#website` },
  about: { "@id": `${origin}#organization` }, inLanguage: "en-US",
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: homeFaqs.map(faq => ({
    "@type": "Question", name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: origin }],
};
export default function HomePage() {
  return <>
    <StructuredData data={[webPageSchema, faqSchema, breadcrumbSchema]} />
    <HeroSection />
    <HomeClient reviewLine={getPublicReviewLine()} />
  </>;
}

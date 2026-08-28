import type { Metadata } from "next";
import type { IndustryPage } from "@/data/industries";

/** Shared metadata builder for the four industry pages. */
export function buildIndustryMetadata(industry: IndustryPage): Metadata {
  const url = `https://imperialcleaninginc.com/${industry.slug}`;
  return {
    // Absolute: industry metaTitles already carry the brand suffix.
    title: { absolute: industry.metaTitle },
    description: industry.metaDescription,
    keywords: industry.keywords,
    authors: [{ name: "Imperial Cleaning Inc" }],
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      siteName: "Imperial Cleaning Inc",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://imperialcleaninginc.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${industry.name} Services in Idaho & Utah | Imperial Cleaning Inc`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      site: "@imperialcleaninginc",
      creator: "@imperialcleaninginc",
      images: ["https://imperialcleaninginc.com/og-image.png"],
    },
    other: {
      "geo.region": "US-ID",
      "geo.placename": "Idaho Falls, Idaho",
    },
  };
}

import { Metadata } from "next";
import AboutClient from "@/components/pages/about-client";

export const metadata: Metadata = {
  title: "About Imperial Cleaning Inc | Idaho & Utah Cleaning",
  description: "Learn about Imperial Cleaning Inc, Idaho's trusted cleaning company since 2015. Licensed, bonded & insured with expert construction cleanup and commercial cleaning services across ID & UT.",
  keywords: "about Imperial Cleaning, Idaho cleaning company, Utah cleaning services, professional cleaners, construction cleanup experts, commercial cleaning specialists, Idaho Falls headquarters",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "About Imperial Cleaning Inc | Idaho & Utah's Premier Cleaning Company",
    description: "Discover Imperial Cleaning Inc's story - Idaho's most trusted cleaning company since 2015. Expert construction cleanup and commercial cleaning across Idaho and Utah.",
    url: "https://imperialcleaninginc.com/about",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "About Imperial Cleaning Inc - Professional Cleaning Company Idaho & Utah"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Imperial Cleaning Inc | Idaho & Utah Cleaning Experts",
    description: "Learn about Imperial Cleaning Inc - Idaho's premier cleaning company since 2015. Licensed, bonded & insured cleaning services across Idaho and Utah.",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/about",
  },
  other: {
    "geo.region": "ID-UT",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4666;-112.0336",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

import { Metadata } from "next";
import CommercialCleaningClient from "@/components/pages/commercial-cleaning-client";

export const metadata: Metadata = {
  title: "Idaho & Utah Commercial Cleaning | Imperial Cleaning Inc",
  description: "Professional commercial cleaning services across Idaho & Utah. Daily, weekly & monthly schedules for offices & businesses. Call (208) 520-3202 today!",
  keywords: "commercial cleaning Idaho Utah, office cleaning, janitorial services, business cleaning Idaho Falls, medical facility cleaning, retail cleaning services",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Idaho & Utah Commercial Cleaning | Imperial Cleaning Inc",
    description: "Professional commercial cleaning services across Idaho & Utah. Daily, weekly & monthly schedules for offices & businesses.",
    url: "https://imperialcleaninginc.com/commercial-cleaning",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idaho & Utah Commercial Cleaning | Imperial Cleaning Inc",
    description: "Professional commercial cleaning services across Idaho & Utah. Daily, weekly & monthly schedules for offices & businesses.",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/commercial-cleaning",
  },
  other: {
    "geo.region": "ID-UT",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4666;-112.0336",
  },
};

export default function CommercialCleaningPage() {
  return <CommercialCleaningClient />;
}

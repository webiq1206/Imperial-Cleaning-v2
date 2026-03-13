import { Metadata } from "next";
import ConstructionCleaningClient from "@/components/pages/construction-cleaning-client";

export const metadata: Metadata = {
  title: "Idaho & Utah Construction Cleaning | Imperial Cleaning Inc",
  description: "Professional post-construction cleanup across Idaho & Utah. Expert debris removal & inspection-ready cleaning for contractors. Call (208) 520-3202 today!",
  keywords: "construction cleanup Idaho Utah, post construction cleaning, debris removal, final inspection cleaning, construction site cleaning Idaho Falls, building cleanup services",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Idaho & Utah Construction Cleaning | Imperial Cleaning Inc",
    description: "Professional post-construction cleanup across Idaho & Utah. Expert debris removal & inspection-ready cleaning for contractors.",
    url: "https://imperialcleaninginc.com/construction-cleaning",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Construction Cleaning Services in Idaho & Utah | Imperial Cleaning Inc"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idaho & Utah Construction Cleaning | Imperial Cleaning Inc",
    description: "Professional post-construction cleanup across Idaho & Utah. Expert debris removal & inspection-ready cleaning for contractors.",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/construction-cleaning",
  },
  other: {
    "geo.region": "ID-UT",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4666;-112.0336",
  },
};

export default function ConstructionCleaningPage() {
  return <ConstructionCleaningClient />;
}

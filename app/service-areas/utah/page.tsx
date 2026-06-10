import { Metadata } from "next";
import ServiceAreasUtahClient from "@/components/pages/service-areas-utah-client";

export const metadata: Metadata = {
  title: { absolute: "Utah Cleaning Services | Wasatch Front | Imperial Cleaning Inc" },
  description: "Professional commercial & construction cleaning in Salt Lake City, Logan, Ogden, Provo & Wasatch Front. Expert Utah cleaning services. Call today!",
  keywords: "Salt Lake City cleaning, Utah commercial cleaning, Wasatch Front janitorial, Logan construction cleanup, Ogden office cleaning, Provo cleaning services, Utah County cleaning, Weber County cleaners",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Wasatch Front Cleaning Services | Imperial Cleaning Utah",
    description: "Professional commercial and construction cleaning services throughout Salt Lake City, Logan, Ogden, Provo and the entire Wasatch Front region in Utah.",
    url: "https://imperialcleaninginc.com/service-areas/utah",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Utah Cleaning Services - Salt Lake City, Logan, Ogden, Provo | Imperial Cleaning Inc"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasatch Front Cleaning Services | Imperial Cleaning Utah",
    description: "Expert cleaning services across Salt Lake City, Logan, Ogden, Provo & Wasatch Front. Professional construction & commercial cleaning in Utah.",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/service-areas/utah",
  },
  other: {
    "geo.region": "US-UT",
    "geo.placename": "Salt Lake City, Utah",
    "geo.position": "40.7608;-111.8910",
  },
};

export default function ServiceAreasUtahPage() {
  return <ServiceAreasUtahClient />;
}

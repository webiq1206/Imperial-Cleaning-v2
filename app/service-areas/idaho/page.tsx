import { Metadata } from "next";
import ServiceAreasIdahoClient from "@/components/pages/service-areas-idaho-client";

export const metadata: Metadata = {
  title: { absolute: "Idaho Cleaning Services | Imperial Cleaning Inc" },
  description: "Construction & commercial cleaning in Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Serving Bonneville & Bannock County. Free quotes!",
  keywords: "Idaho Falls cleaning, Eastern Idaho construction cleanup, Pocatello commercial cleaning, Twin Falls janitorial services, Rexburg cleaning company, Boise cleaning services, Bonneville County cleaning, Bannock County cleaners",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Idaho Cleaning Services | Imperial Cleaning Inc",
    description: "Professional construction and commercial cleaning services throughout Idaho Falls, Pocatello, Twin Falls, and the entire Eastern Idaho region.",
    url: "https://imperialcleaninginc.com/service-areas/idaho",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Idaho Cleaning Services - Idaho Falls, Pocatello, Boise | Imperial Cleaning Inc"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eastern Idaho Cleaning Services | Imperial Cleaning Inc",
    description: "Expert cleaning services across Idaho Falls, Pocatello, Twin Falls & Eastern Idaho. Professional construction & commercial cleaning solutions from our headquarters.",
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
    images: ["https://imperialcleaninginc.com/og-image.png"],
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/service-areas/idaho",
  },
  other: {
    "geo.region": "US-ID",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.5102;-112.0842",
  },
};

export default function ServiceAreasIdahoPage() {
  return <ServiceAreasIdahoClient />;
}

import { Metadata } from "next";
import ContactClient from "@/components/pages/contact-client";

export const metadata: Metadata = {
  title: "Contact Imperial Cleaning | Free Quote Idaho & Utah",
  description: "Contact Imperial Cleaning Inc for professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free quotes on construction cleanup & commercial cleaning. Idaho Falls headquarters.",
  keywords: "contact Imperial Cleaning, cleaning quote Idaho, Utah cleaning services, (208) 520-3202, service@imperialcleaninginc.com, Idaho Falls cleaning company, free cleaning estimate",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Contact Imperial Cleaning Inc | Professional Cleaning Services Idaho & Utah",
    description: "Contact Idaho's premier cleaning company for professional construction cleanup and commercial cleaning services. Free quotes available across Idaho and Utah.",
    url: "https://imperialcleaninginc.com/contact",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Contact Imperial Cleaning Inc - Free Cleaning Quotes Idaho & Utah"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Imperial Cleaning Inc | Free Cleaning Quotes",
    description: "Get professional cleaning services in Idaho & Utah. Call (208) 520-3202 for free construction cleanup and commercial cleaning quotes.",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/contact",
  },
  other: {
    "geo.region": "ID-UT",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4666;-112.0336",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

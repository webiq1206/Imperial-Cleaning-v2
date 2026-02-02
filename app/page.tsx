import { Metadata } from "next";
import HomeClient from "@/components/pages/home-client";

export const metadata: Metadata = {
  title: "Commercial & Construction Cleaning Services | Idaho Falls, ID & Utah | Imperial Cleaning",
  description: "Premier commercial & construction cleaning serving Idaho Falls, Pocatello, Twin Falls, Salt Lake City & Wasatch Front. Licensed & insured in Idaho and Utah. Call (208) 520-3202 for free quote!",
  keywords: "Idaho Falls commercial cleaning, Eastern Idaho construction cleanup, Pocatello office cleaning, Twin Falls janitorial services, Utah commercial cleaning, Salt Lake City cleaning, Wasatch Front cleaning, southeastern Idaho cleaning company, Bonneville County cleaning, Bannock County commercial cleaners, post construction cleanup",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Commercial & Construction Cleaning | Idaho & Utah | Imperial Cleaning Inc.",
    description: "Leading commercial and construction cleaning company serving Idaho Falls, Eastern Idaho, and Utah's Wasatch Front. Professional cleaning solutions for businesses and contractors across two states.",
    url: "https://imperialcleaninginc.com/",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial & Construction Cleaning | Idaho & Utah | Imperial Cleaning Inc.",
    description: "Professional commercial & construction cleaning throughout Idaho and Utah. Serving Idaho Falls, Pocatello, Salt Lake City & Wasatch Front. Licensed & insured.",
    site: "@imperialcleaning",
    creator: "@imperialcleaning",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "ID-UT",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4933;-112.0339",
  },
};

export default function HomePage() {
  return <HomeClient />;
}

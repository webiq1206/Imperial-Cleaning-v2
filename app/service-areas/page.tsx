import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Building2, HardHat, ArrowRight } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import RelatedContent from "@/components/shared/related-content";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { idahoLocations, utahLocations, extendedIdahoLocations, extendedUtahLocations, type ServiceLocation } from "@/data/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";

export const metadata: Metadata = {
  title: "Service Areas | Idaho & Utah Cleaning | Imperial Cleaning",
  description:
    "Imperial Cleaning Inc serves 24+ cities across Idaho and Utah from our Idaho Falls headquarters. Explore our commercial and construction cleaning service areas.",
  keywords:
    "Idaho cleaning service areas, Utah cleaning service areas, Imperial Cleaning coverage, commercial cleaning Idaho Utah, construction cleanup service areas",
  authors: [{ name: "Imperial Cleaning Inc" }],
  openGraph: {
    title: "Service Areas | Idaho & Utah | Imperial Cleaning Inc",
    description:
      "Commercial and construction cleaning across 24+ cities in Idaho and Utah, headquartered in Idaho Falls.",
    url: "https://imperialcleaninginc.com/service-areas",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [{
      url: "https://imperialcleaninginc.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Imperial Cleaning Inc service areas across Idaho and Utah",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Idaho & Utah | Imperial Cleaning Inc",
    description: "Commercial and construction cleaning across 24+ cities in Idaho and Utah.",
    images: ["https://imperialcleaninginc.com/og-image.png"],
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
  },
  alternates: {
    canonical: "https://imperialcleaninginc.com/service-areas",
  },
  other: {
    "geo.region": "US-ID",
    "geo.placename": "Idaho Falls, Idaho",
    "geo.position": "43.4666;-112.0336",
  },
};

const idahoCities = [...idahoLocations, ...extendedIdahoLocations];
const utahCities = [...utahLocations, ...extendedUtahLocations];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://imperialcleaninginc.com/service-areas" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://imperialcleaninginc.com/service-areas#collection",
  "url": "https://imperialcleaninginc.com/service-areas",
  "name": "Imperial Cleaning Inc Service Areas",
  "description": "Commercial and construction cleaning service areas across Idaho and Utah.",
  "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" },
  "about": { "@id": "https://imperialcleaninginc.com/#organization" },
};

function CityList({ cities }: { cities: ServiceLocation[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
      {cities.map((city) => (
        <li key={`${city.state}-${city.name}`} className="flex flex-wrap items-center gap-x-2 text-sm">
          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
          <span className="text-foreground">{city.name}</span>
          <span className="text-muted-foreground/60">&middot;</span>
          <Link
            href={buildServiceLocationUrl(city.state, "construction-cleaning", city.name)}
            className="text-primary/90 hover:text-primary transition-colors"
          >
            Construction
          </Link>
          <Link
            href={buildServiceLocationUrl(city.state, "commercial-cleaning", city.name)}
            className="text-primary/90 hover:text-primary transition-colors"
          >
            Commercial
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceAreasHubPage() {
  return (
    <>
      <StructuredData data={[collectionSchema, breadcrumbSchema]} />

      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs includeStructuredData={false} items={[{ name: "Service Areas" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6 hero-sophisticated-bg noise-overlay grain-texture">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary uppercase tracking-wider">Idaho & Utah Coverage</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight text-foreground">
            Our Service Areas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Headquartered in Idaho Falls, Imperial Cleaning Inc provides commercial and construction
            cleaning across {idahoCities.length + utahCities.length}+ cities in Idaho and Utah. Choose your state or city
            below to see local services, or explore our two core service lines.
          </p>
        </div>
      </section>

      {/* State hubs + service hubs */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-card-elevated p-8 rounded-lg">
            <h2 className="text-2xl text-foreground mb-3">Idaho Cleaning Services</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Our primary market, centered on our Idaho Falls headquarters, with same-day response across eastern Idaho.
            </p>
            <CityList cities={idahoCities} />
            <Link href="/service-areas/idaho" className="inline-flex items-center text-primary hover:text-primary/80 mt-6 text-sm">
              View all Idaho coverage <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="glass-card-elevated p-8 rounded-lg">
            <h2 className="text-2xl text-foreground mb-3">Utah Cleaning Services</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Growing coverage across the Wasatch Front and Cache Valley with the same professional standards.
            </p>
            <CityList cities={utahCities} />
            <Link href="/service-areas/utah" className="inline-flex items-center text-primary hover:text-primary/80 mt-6 text-sm">
              View all Utah coverage <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-foreground text-center mb-10">Explore Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/construction-cleaning" className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
              <HardHat className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Construction Cleaning</h3>
              <p className="text-sm text-muted-foreground">Post-construction cleanup, debris removal, and inspection-ready final cleaning across Idaho and Utah.</p>
            </Link>
            <Link href="/commercial-cleaning" className="glass-card-elevated p-8 rounded-lg hover-lift-gentle group">
              <Building2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">Commercial Cleaning</h3>
              <p className="text-sm text-muted-foreground">Office cleaning, janitorial programs, and facility maintenance for businesses throughout the region.</p>
            </Link>
          </div>
        </div>
      </section>

      <RelatedContent
        pageUrl="/service-areas"
        heading="Explore More"
        description="Jump to a state hub, a service, or get a free quote."
        limit={5}
      />
    </>
  );
}

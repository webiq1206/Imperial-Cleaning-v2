import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { idahoLocations, utahLocations, extendedIdahoLocations, extendedUtahLocations, type ServiceLocation } from "@/data/service-locations";
import { buildServiceLocationUrl, isValidServiceLocation, locationToSlug } from "@/lib/routing-utils";
import { guides } from "@/data/guides";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: { absolute: "Sitemap | Imperial Cleaning Inc" },
  description:
    "Browse every page on the Imperial Cleaning Inc website - services, service areas across Idaho and Utah, resource guides, and company pages.",
  alternates: { canonical: "https://imperialcleaninginc.com/sitemap" },
  openGraph: {
    title: "Sitemap | Imperial Cleaning Inc",
    description: "Browse every page on the Imperial Cleaning Inc website.",
    url: "https://imperialcleaninginc.com/sitemap",
    siteName: "Imperial Cleaning Inc",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://imperialcleaninginc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imperial Cleaning Inc sitemap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Imperial Cleaning Inc",
    description: "Browse every page on the Imperial Cleaning Inc website.",
    site: "@imperialcleaninginc",
    creator: "@imperialcleaninginc",
    images: ["https://imperialcleaninginc.com/og-image.png"],
  },
};

const idahoCities = [...idahoLocations, ...extendedIdahoLocations];
const utahCities = [...utahLocations, ...extendedUtahLocations];

function CityLinks({ cities }: { cities: ServiceLocation[] }) {
  return (
    <ul className="space-y-2">
      {cities.map((city) => {
        const stateSlug = city.state.toLowerCase();
        const citySlug = locationToSlug(city.name);
        const services = (["construction-cleaning", "commercial-cleaning"] as const).filter((s) =>
          isValidServiceLocation(s, citySlug, stateSlug)
        );
        return (
          <li key={`${city.state}-${city.name}`} className="text-sm">
            <span className="text-foreground">{city.name}, {city.state}:</span>{" "}
            {services.map((s, i) => (
              <span key={s}>
                <Link href={buildServiceLocationUrl(city.state, s, city.name)} className="text-primary hover:underline">
                  {s === "construction-cleaning" ? "Construction Cleaning" : "Commercial Cleaning"}
                </Link>
                {i < services.length - 1 ? <span className="text-muted-foreground"> &middot; </span> : null}
              </span>
            ))}
          </li>
        );
      })}
    </ul>
  );
}

function SectionLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.href} className="text-sm">
          <Link href={l.href} className="text-primary hover:underline">{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function HtmlSitemapPage() {
  return (
    <>
      <div className="bg-card/30 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Breadcrumbs includeStructuredData={false} items={[{ name: "Sitemap" }]} />
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4 tracking-tight text-foreground">Sitemap</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Every page on imperialcleaninginc.com. Looking for the XML version for search engines?
            It&apos;s at{" "}
            <a href="/sitemap.xml" className="text-primary hover:underline">/sitemap.xml</a>.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h2 className="text-xl text-foreground mb-4 border-b border-border/30 pb-2">Main Pages</h2>
              <SectionLinks
                links={[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact / Free Quote" },
                ]}
              />

              <h2 className="text-xl text-foreground mb-4 mt-10 border-b border-border/30 pb-2">Services</h2>
              <SectionLinks
                links={[
                  { href: "/construction-cleaning", label: "Construction Cleaning" },
                  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
                  { href: "/reviews", label: "Customer Reviews" },
                  ...industries.map((industry) => ({
                    href: `/${industry.slug}`,
                    label: industry.name,
                  })),
                ]}
              />

              <h2 className="text-xl text-foreground mb-4 mt-10 border-b border-border/30 pb-2">Service Areas</h2>
              <SectionLinks
                links={[
                  { href: "/service-areas", label: "All Service Areas" },
                  { href: "/service-areas/idaho", label: "Idaho Coverage" },
                  { href: "/service-areas/utah", label: "Utah Coverage" },
                ]}
              />

              <h2 className="text-xl text-foreground mb-4 mt-10 border-b border-border/30 pb-2">Resources</h2>
              <SectionLinks
                links={[
                  { href: "/resources", label: "Resource Center" },
                  ...guides.map((g) => ({ href: `/resources/${g.slug}`, label: g.title })),
                ]}
              />

              <h2 className="text-xl text-foreground mb-4 mt-10 border-b border-border/30 pb-2">Legal</h2>
              <SectionLinks
                links={[
                  { href: "/privacy-policy", label: "Privacy Policy" },
                  { href: "/terms-of-service", label: "Terms of Service" },
                ]}
              />
            </div>

            <div>
              <h2 className="text-xl text-foreground mb-4 border-b border-border/30 pb-2">Idaho Locations</h2>
              <CityLinks cities={idahoCities} />
            </div>

            <div>
              <h2 className="text-xl text-foreground mb-4 border-b border-border/30 pb-2">Utah Locations</h2>
              <CityLinks cities={utahCities} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

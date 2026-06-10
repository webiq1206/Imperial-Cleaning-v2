import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Imperial Cleaning Inc" },
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/construction-cleaning", label: "Construction Cleaning Services" },
  { href: "/commercial-cleaning", label: "Commercial Cleaning Services" },
  { href: "/service-areas/idaho", label: "Idaho Service Areas" },
  { href: "/service-areas/utah", label: "Utah Service Areas" },
  { href: "/resources", label: "Cleaning Guides & Resources" },
  { href: "/contact", label: "Get a Free Quote" },
];

export default function NotFound() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-primary mb-4">404</p>
        <h1 className="text-4xl lg:text-5xl mb-6 tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          The page you are looking for does not exist or has moved. Here are the
          most useful places to go next.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-card-elevated p-4 rounded-lg flex items-center justify-between group hover:border-primary/40 transition-colors"
            >
              <span className="text-foreground">{link.label}</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <a
            href="tel:+12085203202"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent transition-colors"
          >
            <Phone className="w-4 h-4" /> Call (208) 520-3202
          </a>
          <Link
            href="/sitemap"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-card-foreground rounded-lg hover:bg-accent transition-colors"
          >
            <MapPin className="w-4 h-4" /> Browse All Pages
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import linksManifest from "@/data/internal-links.json";
import { ArrowRight } from "lucide-react";
import { selectRelatedLinks } from "@/lib/construction-links";

interface RelatedLink { url: string; anchor: string; score: number; }
interface Manifest { totalPages: number; links: Record<string, RelatedLink[]>; }
const manifest = linksManifest as unknown as Manifest;
export interface RelatedContentOverride {
  pin?: { url: string; anchor: string }[];
  rename?: Record<string, string>;
  exclude?: string[];
}
interface RelatedContentProps {
  pageUrl: string; limit?: number; heading?: string; description?: string;
  override?: RelatedContentOverride; variant?: "section" | "inline";
}
export default function RelatedContent({ pageUrl, limit = 5, heading = "Related Resources", description, override, variant = "section" }: RelatedContentProps) {
  const items = selectRelatedLinks(pageUrl, manifest.links[pageUrl] || [], override?.pin, override?.exclude, limit)
    .map(link => ({ ...link, anchor: override?.rename?.[link.url] || link.anchor }));
  if (!items.length) return null;
  if (variant === "inline") return <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">{items.map(item => <Link key={item.url} href={item.url} className="text-primary hover:underline" data-testid={`related-link-${item.url.replace(/\//g, "-")}`}>{item.anchor}</Link>)}</div>;
  const headingId = `related-content-${pageUrl.replace(/[^a-z0-9-]/gi, "-")}`;
  return <section className="py-16 px-4 bg-card/30" aria-labelledby={headingId}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10"><h2 id={headingId} className="text-3xl mb-3 text-foreground">{heading}</h2>{description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}</div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{items.map(item => <li key={item.url}><Link href={item.url} className="group glass-card-elevated p-5 rounded-lg flex items-start justify-between gap-3 hover-lift-gentle" data-testid={`related-link-${item.url.replace(/\//g, "-")}`}><span className="text-foreground group-hover:text-primary transition-colors">{item.anchor}</span><ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" aria-hidden="true" /></Link></li>)}</ul>
    </div>
  </section>;
}

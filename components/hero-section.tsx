import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, MapPin, Check } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
import { CONSTRUCTION_QUOTE_HREF, homeSearch } from "@/data/service-priorities";

export default function HeroSection({ imageAlt }: { imageAlt?: string } = {}) {
  return <section className="home-hero construction-first-hero">
    <div className="site-width hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="accent-rule" /> CONSTRUCTION CLEANING FOR COMMERCIAL PROJECTS</p>
        <h1>{homeSearch.headline}<br /><span className="brand-gradient">{homeSearch.benefit}</span></h1>
        <p className="hero-description">Post-construction cleanup for general contractors, builders, and commercial projects. From rough cleaning to final detail and touch-ups, we help prepare your finished space for handover.</p>
        <div className="button-row"><Link href={CONSTRUCTION_QUOTE_HREF} className="ic-button">Get a construction quote <ArrowUpRight size={19} aria-hidden="true" /></Link><a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-link">Call {BUSINESS_PHONE}</a></div>
        <div className="hero-assurance"><ClipboardCheck size={17} aria-hidden="true" /> Free project quote <span>·</span> <span className="assurance-local">Scope and schedule confirmed before work</span></div>
      </div>
      <div className="hero-visual">
        <Image className="hero-photo" src="/images/commercial-interior.jpg" alt={imageAlt ?? "A bright commercial interior"} fill sizes="(max-width: 767px) 100vw, 48vw" priority />
        <div className="photo-shade" />
        <div className="hero-photo-label"><MapPin size={16} aria-hidden="true" /> IDAHO & UTAH</div>
        <div className="hero-photo-card"><span className="eyebrow">FROM THE LAST TRADE TO HANDOVER</span><strong>You build it.<br />We handle the cleanup.</strong><span><Check size={16} aria-hidden="true" /> Rough clean <Check size={16} aria-hidden="true" /> Final clean <Check size={16} aria-hidden="true" /> Touch-ups</span></div>
      </div>
    </div>
    <div className="site-width hero-service-links"><span>Plan your project cleanup</span><Link href="/construction-cleaning">Construction cleanup services <ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/resources/construction-cleanup-process-checklist">Construction handover checklist <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
  </section>;
}

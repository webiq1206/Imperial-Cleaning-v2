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
        <p className="hero-description">Post-construction cleanup for general contractors, builders, and commercial projects across Idaho and Utah, coordinated from our Idaho Falls headquarters. From rough cleaning to final detail, we help prepare your space for handover. We also provide recurring commercial cleaning for offices and business facilities.</p>
        <div className="button-row"><Link href={CONSTRUCTION_QUOTE_HREF} className="ic-button">Get a construction quote <ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/commercial-cleaning" className="ic-button secondary">Commercial cleaning <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
        <div className="hero-assurance"><ClipboardCheck size={17} aria-hidden="true" /> Free cleaning quote <a href={`tel:${BUSINESS_PHONE_TEL}`} className="hero-phone">Call {BUSINESS_PHONE}</a></div>
      </div>
      <div className="hero-visual">
        <Image className="hero-photo" src="/site-media/commercial-office-interior.webp" alt={imageAlt ?? "Office interior with glass partitions, desks, and carpeted floors"} fill sizes="(max-width: 767px) 100vw, 48vw" priority />
        <div className="photo-shade" />
        <div className="hero-photo-label"><MapPin size={16} aria-hidden="true" /> IDAHO & UTAH</div>
        <div className="hero-photo-card"><span className="eyebrow">FROM THE LAST TRADE TO HANDOVER</span><strong>You build it.<br />We handle the cleanup.</strong><span><Check size={16} aria-hidden="true" /> Rough clean <Check size={16} aria-hidden="true" /> Final clean <Check size={16} aria-hidden="true" /> Touch-ups</span></div>
      </div>
    </div>
    <div className="site-width hero-service-links"><span>Find your cleaning service</span><Link href="/construction-cleaning">Construction cleanup services <ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/commercial-cleaning">Commercial cleaning services <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
  </section>;
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin, Check } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
export default function HeroSection({ imageAlt }: { imageAlt?: string } = {}) {
  return <section className="home-hero">
    <div className="site-width hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="accent-rule" /> COMMERCIAL & CONSTRUCTION CLEANING</p>
        <h1>Clean spaces.<br /><span className="brand-gradient">Better first<br className="desktop-break" /> impressions.</span></h1>
        <p className="hero-description">From your daily operations to your next project handover, get cleaning you can count on. Proudly serving businesses across Idaho and Utah.</p>
        <div className="button-row"><Link href="/contact" className="ic-button">Get a free quote <ArrowUpRight size={19} aria-hidden="true" /></Link><a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-link">Call {BUSINESS_PHONE}</a></div>
        <div className="hero-assurance"><ShieldCheck size={17} aria-hidden="true" /> Licensed, insured & bonded <span>·</span> <span className="assurance-local">Locally owned since 2015</span></div>
      </div>
      <div className="hero-visual"><Image className="hero-photo" src="/images/commercial-interior.jpg" alt="A bright, well-kept commercial workspace" fill sizes="(max-width: 767px) 100vw, 48vw" priority />
        <div className="photo-shade" /><div className="hero-photo-label"><MapPin size={16} aria-hidden="true" /> IDAHO & UTAH</div>
        <div className="hero-photo-card"><span className="eyebrow">YOUR SPACE. OUR STANDARD.</span><strong>Ready for the day.<br />Ready for what’s next.</strong><span><Check size={16} /> Commercial cleaning <Check size={16} /> Construction cleanup</span></div>
      </div>
    </div>
    <div className="site-width hero-service-links"><span>What does your space need?</span><Link href="/commercial-cleaning">Ongoing commercial cleaning <ArrowUpRight size={19} /></Link><Link href="/construction-cleaning">Post-construction cleanup <ArrowUpRight size={19} /></Link></div>
  </section>;
}

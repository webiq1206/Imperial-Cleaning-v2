/* Restored October 1, 2026 on owner direction: the pre-September-11 hero (textured dark background,
   subtle parallax glow, the Imperial lion mark under a dark overlay) carrying the current
   construction-first copy and both service actions. */
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
import { CONSTRUCTION_QUOTE_HREF, homeSearch } from "@/data/service-priorities";
import LeadRequest from "@/components/lead-request";

export default function HeroSection({ imageAlt }: { imageAlt?: string } = {}) {
  return <section className="home-hero construction-first-hero relative min-h-[85vh] md:min-h-screen hero-sophisticated-bg noise-overlay grain-texture vignette-radial overflow-hidden flex items-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-72 h-72 md:hidden" aria-hidden="true">
      <Image src="/hero-logo.webp" alt="" className="w-full h-full object-contain opacity-15" width={288} height={288} loading="lazy" />
    </div>
    <div className="absolute inset-0 parallax-subtle opacity-20 hidden md:block" aria-hidden="true">
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-cyan-300/5 rounded-full blur-xl" />
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-cyan-600/5 rounded-full blur-lg" />
    </div>
    <div className="absolute inset-0 parallax-gentle opacity-10 hidden md:block" aria-hidden="true">
      <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-cyan-600/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-cyan-300/10 to-cyan-600/5 rounded-full blur-xl" />
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
      <div className="flex items-center gap-12 py-24 md:py-16">
        <div className="hero-copy flex-1 max-w-2xl z-20">
          <div className="mb-8"><span className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 glass-effect sophisticated-glow text-xs tracking-[0.15em] uppercase text-secondary-color">Construction cleaning for commercial projects</span></div>
          <h1>{homeSearch.headline}<br /><span className="brand-gradient">{homeSearch.benefit}</span></h1>
          <div className="hero-lead contact-form-card"><LeadRequest placement="hero" /></div>
          <p className="hero-description text-lg md:text-xl text-secondary-color mt-8 mb-10 max-w-xl leading-relaxed">Post-construction cleanup for general contractors, builders, and commercial projects across Idaho and Utah, coordinated from our Idaho Falls headquarters. From rough cleaning to final detail, we help prepare your space for handover. We also provide recurring commercial cleaning for offices and business facilities.</p>
          <div className="button-row"><Link href={CONSTRUCTION_QUOTE_HREF} className="ic-button">Get a construction quote <ArrowUpRight size={19} aria-hidden="true" /></Link><Link href="/commercial-cleaning" className="ic-button secondary">Commercial cleaning <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
          <div className="hero-assurance">Free cleaning quote <a href={`tel:${BUSINESS_PHONE_TEL}`} className="hero-phone">Call {BUSINESS_PHONE}</a></div>
        </div>
        <div className="flex-1 items-center justify-center relative z-10 hidden md:flex">
          <div className="relative parallax-depth"><div className="logo-3d-container relative">
            <Image src="/hero-logo.webp" alt={imageAlt ?? "Imperial Cleaning Inc lion logo"} className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] object-contain opacity-25" width={512} height={512} priority />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50 parallax-subtle" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 blur-2xl hero-glow-gradient" aria-hidden="true" />
          </div></div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true"><div className="absolute inset-0 sophisticated-bg-primary opacity-60" /></div>
  </section>;
}

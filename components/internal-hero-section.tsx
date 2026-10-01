"use client";
/* Restored October 1, 2026 on owner direction: the pre-September-11 interior hero (textured dark
   background, pill label, large light heading, the lion mark at the right under a dark overlay)
   with the current titles, subtitles and calls to action supplied by each page. */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactFormModal from "@/components/contact-form-modal";
interface InternalHeroSectionProps {
  title: string; subtitle: string; pillText?: string; imageAlt?: string;
  primaryCTA?: { text: string; onClick: () => void };
  secondaryCTA?: { text: string; href: string }; minHeight?: string;
}
export default function InternalHeroSection({ title, subtitle, pillText, imageAlt, primaryCTA, secondaryCTA, minHeight = "min-h-[60vh]" }: InternalHeroSectionProps) {
  const [open, setOpen] = useState(false);
  return <><section className={`page-hero relative ${minHeight} hero-sophisticated-bg noise-overlay grain-texture vignette-radial overflow-hidden flex items-center`}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-64 h-64 md:hidden" aria-hidden="true">
      <Image src="/hero-logo.webp" alt="" className="w-full h-full object-contain opacity-15" width={256} height={256} loading="lazy" />
    </div>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
      <div className="flex items-center gap-12">
        <div className="flex-1 max-w-3xl z-20">
          <div className="mb-6"><span className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 glass-effect text-xs tracking-[0.15em] uppercase text-secondary-color">{pillText || "Imperial Cleaning Inc."}</span></div>
          <h1 className="mb-6">{title}</h1>
          <p className="hero-description text-lg md:text-xl text-secondary-color mb-8 max-w-2xl leading-relaxed">{subtitle}</p>
          <div className="button-row">
            <button type="button" className="ic-button" onClick={primaryCTA?.onClick || (() => setOpen(true))}>{primaryCTA?.text || "Get a free quote"}<ArrowUpRight size={18} aria-hidden="true" /></button>
            {secondaryCTA && <Link className="ic-button secondary" href={secondaryCTA.href}>{secondaryCTA.text}</Link>}
          </div>
        </div>
        <div className="flex-1 items-center justify-center relative hidden lg:flex" aria-hidden="true">
          <div className="relative parallax-depth"><div className="logo-3d-container relative">
            <Image src="/hero-logo.webp" alt={imageAlt ?? ""} className="w-64 h-64 xl:w-80 xl:h-80 object-contain opacity-25" width={320} height={320} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
            <div className="absolute inset-0 blur-2xl hero-glow-gradient" />
          </div></div>
        </div>
      </div>
    </div>
  </section><ContactFormModal isOpen={open} onClose={() => setOpen(false)} /></>;
}

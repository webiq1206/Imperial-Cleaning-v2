"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import ContactFormModal from "@/components/contact-form-modal";
interface InternalHeroSectionProps {
  title: string; subtitle: string; pillText?: string; imageAlt?: string;
  primaryCTA?: { text: string; onClick: () => void };
  secondaryCTA?: { text: string; href: string }; minHeight?: string;
}
export default function InternalHeroSection({ title, subtitle, pillText, primaryCTA, secondaryCTA }: InternalHeroSectionProps) {
  const [open, setOpen] = useState(false);
  return <><section className="internal-hero"><div className="site-width internal-hero-grid"><div>
    <p className="eyebrow">{pillText || "IMPERIAL CLEANING INC."}</p><h1>{title}</h1><p className="hero-description">{subtitle}</p>
    <div className="button-row"><button className="ic-button" onClick={primaryCTA?.onClick || (() => setOpen(true))}>{primaryCTA?.text || "Get a free quote"}<ArrowUpRight size={18} aria-hidden="true" /></button>
      {secondaryCTA && <Link className="text-link" href={secondaryCTA.href}>{secondaryCTA.text}</Link>}
    </div>
  </div><aside className="hero-service-note"><ShieldCheck size={27} /><span className="eyebrow">BUILT AROUND YOUR SPACE</span><p className="hero-note-title">A clear scope.<br />A dependable team.</p><p>Tell us about your facility, location, and schedule. We’ll help you plan the right clean.</p><Link href="/reviews" className="text-link">Hear from our customers <ArrowUpRight size={16} /></Link></aside></div></section><ContactFormModal isOpen={open} onClose={() => setOpen(false)} /></>;
}

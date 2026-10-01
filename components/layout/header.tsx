"use client";
/* Restored October 1, 2026 on owner direction: the pre-September-11 sticky glass header with the
   Services mega menu, flat state and company links, call and text links and a pill quote button.
   Links come from data/navigation.ts and data/service-locations.ts so the menu stays in step with
   the public routes. No nested interactive elements, no promotional claims. */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { navigation } from "@/data/navigation";
import { allServiceLocations } from "@/data/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import SearchBar from "@/components/search-bar";
import { quoteHref } from "@/lib/quote-context";

type Tab = "construction" | "commercial";
const tabs: { id: Tab; label: string; blurb: string; hub: string }[] = [
  { id: "construction", label: "Construction cleaning", blurb: "Rough, final and touch-up cleaning for commercial projects", hub: "/construction-cleaning" },
  { id: "commercial", label: "Commercial cleaning", blurb: "Recurring office, janitorial and facility cleaning", hub: "/commercial-cleaning" },
];
const states = ["Idaho", "Utah"] as const;
const flat = "text-sm text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide";
const menuLink = "block text-sm text-muted-foreground hover:text-foreground py-1 transition-colors";
const pill = "inline-flex items-center justify-center rounded-full glass-button text-foreground h-11 px-6 text-sm hover:-translate-y-0.5 transition-all duration-300 hover-shimmer";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("construction");
  const [mobile, setMobile] = useState(false);
  const [mobileTab, setMobileTab] = useState<Tab | "">("");
  const [search, setSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => { setMenuOpen(false); setMobile(false); setSearch(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false); };
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", key);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", key); };
  }, [menuOpen]);
  const group = (id: Tab) => navigation.find(g => g.id === id)?.links ?? [];
  const company = navigation.find(g => g.id === "company")?.links ?? [];
  const cities = (state: string, service: Tab) => allServiceLocations.filter(l => l.state === state).map(l => ({ name: l.name, href: buildServiceLocationUrl(l.state, `${service}-cleaning`, l.name) }));
  const quote = quoteHref(pathname || "/");
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 glass-effect sophisticated-glow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-4 lg:gap-8">
          <Link href="/" className="flex items-center flex-shrink-0 transition-opacity duration-300 hover:opacity-90" aria-label="Imperial Cleaning Inc home">
            <Image src="/header-logo.svg" alt="Imperial Cleaning Inc" className="h-5 w-auto opacity-70" width={200} height={20} priority unoptimized />
          </Link>
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <div className="relative" ref={menuRef}>
              <button type="button" className={`${flat} flex items-center rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary/50`} onClick={() => setMenuOpen(open => !open)} aria-haspopup="true" aria-expanded={menuOpen} aria-controls="services-mega-menu-panel">
                Services<svg className={`ml-1 h-3 w-3 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div id="services-mega-menu-panel" className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] max-w-[calc(100vw-32px)] rounded-xl glass-card-elevated sophisticated-glow transition-opacity duration-300 ease-out ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} aria-hidden={!menuOpen}>
                <div className="flex p-2 gap-2 border-b border-border/20">{tabs.map(t => <button key={t.id} type="button" onClick={() => setTab(t.id)} className={`flex-1 px-4 py-3 rounded-lg text-sm transition-colors duration-200 border ${tab === t.id ? "bg-[hsl(195_100%_50%/0.12)] text-foreground border-[hsl(195_100%_50%/0.35)]" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-transparent"}`} aria-pressed={tab === t.id}>{t.label}</button>)}</div>
                {tabs.filter(t => t.id === tab).map(t => <div key={t.id} className="p-6">
                  <div className="flex items-start justify-between gap-6 mb-5"><div><p className="text-foreground">{t.label} services</p><p className="text-xs text-muted-foreground mt-1">{t.blurb}</p></div><Link href={t.hub} className="text-sm text-primary hover:underline whitespace-nowrap" onClick={() => setMenuOpen(false)}>View all →</Link></div>
                  <div className="grid grid-cols-[1.15fr_1fr_1fr] gap-6">
                    <div><p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Services</p><ul className="space-y-0.5">{group(t.id).slice(0, 8).map(l => <li key={l.href}><Link href={l.href} className={menuLink} onClick={() => setMenuOpen(false)}>{l.label}</Link></li>)}</ul></div>
                    {states.map(state => <div key={state}><p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">{state}</p><ul className="space-y-0.5">{cities(state, t.id).map(c => <li key={c.href}><Link href={c.href} className={menuLink} onClick={() => setMenuOpen(false)}>{c.name}</Link></li>)}</ul></div>)}
                  </div>
                </div>)}
              </div>
            </div>
            <Link href="/service-areas/idaho" className={flat}>Idaho</Link>
            <Link href="/service-areas/utah" className={flat}>Utah</Link>
            <Link href="/resources" className={flat}>Guides</Link>
            <Link href="/about" className={flat}>About</Link>
            <Link href="/contact" className={flat}>Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button type="button" className="text-muted-foreground hover:text-foreground transition-colors p-1" onClick={() => setSearch(true)} aria-label="Search website"><Search size={18} aria-hidden="true" /></button>
            <a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label={`Call us at ${BUSINESS_PHONE}`}><span className="hidden lg:inline">{BUSINESS_PHONE}</span><span className="lg:hidden">Call</span></a>
            <a href={`sms:${BUSINESS_PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label={`Text us at ${BUSINESS_PHONE}`}>Text</a>
            <Link href={quote} className={pill}>Request Quote</Link>
          </div>
          <Sheet open={mobile} onOpenChange={setMobile}>
            <SheetTrigger asChild><button type="button" className="md:hidden text-foreground p-2 rounded-md hover:bg-secondary/50" aria-label="Open navigation"><Menu aria-hidden="true" /></button></SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 glass-overlay overflow-y-auto">
              <SheetTitle>Navigation</SheetTitle><SheetDescription className="sr-only">Cleaning services across Idaho and Utah.</SheetDescription>
              <nav className="mt-6 space-y-6" aria-label="Mobile navigation">
                <div className="space-y-2">{tabs.map(t => <div key={t.id}>
                  <button type="button" className="w-full flex items-center justify-between gap-4 glass-button rounded-lg px-4 py-3 text-left text-foreground" onClick={() => setMobileTab(mobileTab === t.id ? "" : t.id)} aria-expanded={mobileTab === t.id}><span>{t.label}<span className="block text-xs text-muted-foreground mt-0.5">{t.blurb}</span></span><span aria-hidden="true">{mobileTab === t.id ? "−" : "+"}</span></button>
                  {mobileTab === t.id && <div className="pl-4 pt-2 space-y-1">
                    <Link href={t.hub} className="block py-2 text-sm text-primary">View all {t.label.toLowerCase()} →</Link>
                    {group(t.id).map(l => <Link key={l.href} href={l.href} className="block py-2 text-sm text-muted-foreground">{l.label}</Link>)}
                    {states.map(state => <details key={state} className="pt-1"><summary className="py-2 text-sm text-foreground cursor-pointer">{state} cities</summary><div className="grid grid-cols-2 gap-1 pb-2">{cities(state, t.id).map(c => <Link key={c.href} href={c.href} className="py-1.5 text-sm text-muted-foreground">{c.name}</Link>)}</div></details>)}
                  </div>}
                </div>)}</div>
                <div><p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Quick links</p>
                  <Link href="/service-areas/idaho" className="block py-2 text-sm text-foreground">Idaho service areas</Link>
                  <Link href="/service-areas/utah" className="block py-2 text-sm text-foreground">Utah service areas</Link>
                  {company.map(l => <Link key={l.href} href={l.href} className="block py-2 text-sm text-foreground">{l.label}</Link>)}
                </div>
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <Link href={quote} className="inline-flex w-full items-center justify-center rounded-full bg-foreground text-background h-12 px-8 text-base">Request Quote</Link>
                  <a href={`tel:${BUSINESS_PHONE_TEL}`} className="block text-center text-sm text-muted-foreground">Call {BUSINESS_PHONE}</a>
                  <a href={`sms:${BUSINESS_PHONE_TEL}`} className="block text-center text-sm text-muted-foreground">Text {BUSINESS_PHONE}</a>
                  <button type="button" className="w-full glass-button rounded-full h-11 text-sm text-foreground" onClick={() => { setMobile(false); setSearch(true); }}>Search the website</button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <SearchBar isOpen={search} onClose={() => setSearch(false)} />
  </>;
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Search, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/brand-logo";
import { navigation } from "@/data/navigation";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import SearchBar from "@/components/search-bar";
import { quoteHref } from "@/lib/quote-context";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState("");
  const pathname = usePathname();
  useEffect(() => { setOpen(false); setMenu(""); setSearch(false); }, [pathname]);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="site-header">
      <div className="site-width header-row">
        <BrandLogo />
        <NavigationMenu className="desktop-navigation" value={menu} onValueChange={setMenu} aria-label="Main navigation">
          <NavigationMenuList>
            {navigation.map(group => <NavigationMenuItem key={group.label} value={group.label}>
              <NavigationMenuTrigger className="nav-trigger">{group.label}</NavigationMenuTrigger>
              <NavigationMenuContent><div className="nav-panel">
                <span className="eyebrow">{group.label}</span>
                <ul>{group.links.map(link => <li key={link.href}><NavigationMenuLink asChild active={pathname === link.href}>
                  <Link href={link.href} onClick={() => setMenu("")} className="nav-link" aria-current={pathname === link.href ? "page" : undefined}>
                    <span>{link.label}{"detail" in link && <small>{link.detail}</small>}</span><ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </NavigationMenuLink></li>)}</ul>
              </div></NavigationMenuContent>
            </NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="header-actions">
          <button className="icon-button search-toggle" onClick={() => setSearch(true)} aria-label="Search website"><Search size={19} /></button>
          <a className="header-phone" href={`tel:${BUSINESS_PHONE_TEL}`}><Phone size={16} aria-hidden="true" />{BUSINESS_PHONE}</a>
          <Link href={quoteHref(pathname || "/")} className="ic-button small header-quote">Get a free quote <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><button className="icon-button menu-toggle" aria-label="Open navigation"><Menu /></button></SheetTrigger>
            <SheetContent className="mobile-drawer">
              <SheetTitle>Explore Imperial</SheetTitle><SheetDescription>Cleaning services across Idaho and Utah.</SheetDescription>
              <nav aria-label="Mobile navigation"><Accordion type="single" collapsible>
                {navigation.map(group => <AccordionItem key={group.label} value={group.label}><AccordionTrigger>{group.label}</AccordionTrigger><AccordionContent>
                  {group.links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
                </AccordionContent></AccordionItem>)}
              </Accordion></nav>
              <button className="ic-button secondary" onClick={() => {setOpen(false); setSearch(true);}}><Search size={18} />Search the website</button>
              <Link href={quoteHref(pathname || "/")} className="ic-button" onClick={() => setOpen(false)}>Get a free quote <ArrowUpRight size={18} /></Link>
              <a className="drawer-phone" href={`tel:${BUSINESS_PHONE_TEL}`}><Phone size={18} />{BUSINESS_PHONE}</a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <SearchBar isOpen={search} onClose={() => setSearch(false)} />
  </>;
}

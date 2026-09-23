import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import BrandLogo from "@/components/brand-logo";
import PrivacySettingsButton from "@/components/privacy-settings-button";
import { navigation } from "@/data/navigation";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, BUSINESS_EMAIL, BUSINESS_FULL_ADDRESS, BUSINESS_HOURS } from "@/data/business-info";
export default function Footer() {
  return <footer className="site-footer">
    <div className="site-width">
      <div className="footer-invitation"><div><span className="eyebrow">LET’S PLAN YOUR NEXT PROJECT</span><h2>Get your construction cleanup in the plan.</h2></div><Link href="/contact" className="ic-button">Get a free quote <ArrowUpRight size={19} aria-hidden="true" /></Link></div>
      <div className="footer-grid"><div className="footer-brand"><BrandLogo /><p>Construction cleanup for commercial contractors and builders across Idaho and Utah. Recurring commercial cleaning is also available.</p>
        <a href={`tel:${BUSINESS_PHONE_TEL}`}><Phone size={16} aria-hidden="true" />{BUSINESS_PHONE}</a>
        <a href={`mailto:${BUSINESS_EMAIL}`}><Mail size={16} aria-hidden="true" />{BUSINESS_EMAIL}</a>
        <p className="footer-address"><MapPin size={16} aria-hidden="true" />{BUSINESS_FULL_ADDRESS}</p>
      </div>
      {navigation.filter(g => g.id !== "areas").map(group => <nav key={group.label} aria-label={`Footer ${group.label}`}><h3>{group.label}</h3>{group.links.slice(0,group.id === "commercial" ? 5 : undefined).map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>)}
      </div>
      <nav className="footer-coverage" aria-label="Footer service areas"><Link href="/service-areas/idaho">Idaho service areas</Link><Link href="/service-areas/utah">Utah service areas</Link><Link href="/service-areas">Find your city</Link></nav>
      <div className="footer-hours"><span>Office hours · Mountain Time</span><span>Mon-Fri {BUSINESS_HOURS.weekday.label}</span><span>Sat {BUSINESS_HOURS.saturday.label} · Sunday closed</span></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Imperial Cleaning Inc.</span><div><Link href="/privacy-policy">Privacy</Link><PrivacySettingsButton /><Link href="/terms-of-service">Terms</Link><Link href="/sitemap">Sitemap</Link></div></div>
    </div>
  </footer>;
}

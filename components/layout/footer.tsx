/* Restored October 1, 2026 on owner direction: the pre-September-11 footer layout (brand column,
   service columns, service areas, company, hours, quote box, crawlable NAP block, industries and
   guides) with the current approved copy. The promotional trust badges of the old footer are not
   reinstated. The sitewide city block from the September 29 crawl fix stays. */
import Image from "next/image";
import Link from "next/link";
import PrivacySettingsButton from "@/components/privacy-settings-button";
import { navigation } from "@/data/navigation";
import { allServiceLocations } from "@/data/service-locations";
import { buildServiceLocationUrl } from "@/lib/routing-utils";
import { getTopCitiesForState, getIndustryNavLinks, getGuideNavLinks } from "@/lib/page-registry";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_TEL, BUSINESS_EMAIL, BUSINESS_ADDRESS, BUSINESS_CITY_LINE, BUSINESS_FULL_ADDRESS, BUSINESS_HOURS, GOOGLE_LISTING_URL } from "@/data/business-info";

const social = [
  { label: "Facebook", href: "https://www.facebook.com/imperialcleaninginc" },
  { label: "Instagram", href: "https://www.instagram.com/imperialcleaninginc/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/imperial-cleaning-inc" },
];
const footerStates = (["Idaho", "Utah"] as const).map(state => ({ state, slug: state.toLowerCase(), top: getTopCitiesForState(state, 4), all: allServiceLocations.filter(city => city.state === state) }));
const item = "block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200";
const heading = "text-lg text-foreground mb-5";
const label = "text-xs uppercase tracking-wider text-muted-foreground mb-2";

export default function Footer() {
  const construction = navigation.find(group => group.id === "construction")?.links ?? [];
  const commercial = navigation.find(group => group.id === "commercial")?.links.slice(0, 6) ?? [];
  const company = navigation.find(group => group.id === "company")?.links ?? [];
  const industries = getIndustryNavLinks();
  const guides = getGuideNavLinks();
  return <footer className="border-t border-border/30 py-20 px-6 footer-sophisticated-bg noise-overlay grain-texture vignette-top">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-4">
          <Image src="/header-logo.svg" alt="Imperial Cleaning Inc" className="h-8 w-auto mb-6 opacity-80" width={320} height={32} loading="lazy" unoptimized />
          <p className="text-muted-foreground leading-relaxed max-w-md mb-6">Construction cleanup for builders and contractors. Commercial cleaning for offices and business facilities across Idaho and Utah.</p>
          <div className="space-y-2 mb-6">
            <a href={`tel:${BUSINESS_PHONE_TEL}`} className="block text-foreground hover:text-primary transition-colors">{BUSINESS_PHONE}</a>
            <a href={`mailto:${BUSINESS_EMAIL}`} className="block text-foreground hover:text-primary transition-colors break-all">{BUSINESS_EMAIL}</a>
            <p className="text-sm text-muted-foreground">{BUSINESS_FULL_ADDRESS}</p>
          </div>
          <p className={label}>Connect with us</p>
          <div className="flex gap-5">{social.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s.label}</a>)}</div>
        </div>
        <div className="lg:col-span-3">
          <h3 className={heading}>Our services</h3>
          <p className={label}>Construction cleaning</p>
          {construction.map(link => <Link key={link.href} href={link.href} className={item}>{link.label}</Link>)}
          <p className={`${label} mt-6`}>Commercial cleaning</p>
          {commercial.map(link => <Link key={link.href} href={link.href} className={item}>{link.label}</Link>)}
        </div>
        <div className="lg:col-span-5 grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className={heading}>Service areas</h3>
            {footerStates.map(group => <div key={group.state} className="mb-6">
              <Link href={`/service-areas/${group.slug}`} className="text-sm text-primary hover:underline">View {group.state} service areas →</Link>
              <div className="grid grid-cols-2 gap-x-4 mt-2">{group.top.map(city => <Link key={city.name} href={buildServiceLocationUrl(city.state, "commercial-cleaning", city.name)} className={item}>{city.name}</Link>)}</div>
              {group.all.length > group.top.length && <p className="text-xs text-muted-foreground mt-1">+ {group.all.length - group.top.length} more cities</p>}
            </div>)}
          </div>
          <div>
            <h3 className={heading}>Company</h3>
            {company.map(link => <Link key={link.href} href={link.href} className={item}>{link.label}</Link>)}
            <Link href="/service-areas" className={item}>Service areas</Link>
            <Link href="/sitemap" className={item}>Site map</Link>
            <h4 className="text-foreground mt-8 mb-3">Business hours</h4>
            <ul className="text-sm text-muted-foreground space-y-1"><li>Mon-Fri: {BUSINESS_HOURS.weekday.label}</li><li>Saturday: {BUSINESS_HOURS.saturday.label}</li><li>Sunday: Closed</li><li className="text-xs">Mountain Time</li></ul>
            <div className="mt-6 p-4 rounded-lg border border-[hsl(195_100%_50%/0.25)] bg-[hsl(195_100%_50%/0.08)]">
              <p className="text-sm text-foreground mb-2">Get a quote for your project or workplace.</p>
              <Link href="/contact" className="block text-sm text-primary hover:underline">Request a free quote →</Link>
              <a href={`tel:${BUSINESS_PHONE_TEL}`} className="block text-sm text-primary hover:underline mt-1">Call {BUSINESS_PHONE} →</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 pt-10 mb-10">
        <h3 className={heading}>Visit or contact us</h3>
        <address className="not-italic text-sm text-muted-foreground leading-relaxed grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div><span className="block text-foreground">{BUSINESS_NAME}</span>{BUSINESS_ADDRESS.street}<br />{BUSINESS_CITY_LINE}</div>
          <div><span className="block text-foreground">Phone</span><a href={`tel:${BUSINESS_PHONE_TEL}`} className="hover:text-foreground">{BUSINESS_PHONE}</a></div>
          <div><span className="block text-foreground">Email</span><a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-foreground break-all">{BUSINESS_EMAIL}</a></div>
          <div><span className="block text-foreground">Google listing</span><a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">View our Google Business Profile</a></div>
        </address>
      </div>
      <div className="grid md:grid-cols-3 gap-10 border-t border-border/30 pt-10 mb-10">
        <div><h3 className={heading}>Industries we clean</h3><div className="grid grid-cols-2 gap-x-4">{industries.map(link => <Link key={link.href} href={link.href} className={item}>{link.label}</Link>)}</div></div>
        <div><h3 className={heading}>Cleaning guides</h3><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-4">{guides.map(link => <Link key={link.href} href={link.href} className={item}>{link.label}</Link>)}</div></div>
        <div><h3 className={heading}>Proof &amp; pricing</h3>
          <Link href="/reviews" className={item}>Customer reviews</Link>
          <Link href="/commercial-cleaning-cost" className={item}>Commercial cleaning costs</Link>
          <Link href="/resources/post-construction-cleaning-cost" className={item}>Post-construction cleaning cost</Link>
          <Link href="/contact" className={item}>Request a free quote</Link>
        </div>
      </div>
      {/* Sitewide crawlable links to every city page. Search Console reported 48 of 95 URLs "Discovered - currently not indexed" on 2026-09-29. */}
      <nav className="footer-cities border-t border-border/30 pt-8 mb-8" aria-label="Construction cleanup by city">{footerStates.map(group => <p key={group.state}><strong>{group.state} construction cleanup:</strong> {group.all.map((city, index) => <span key={city.name}>{index > 0 && ", "}<Link href={buildServiceLocationUrl(city.state, "construction-cleaning", city.name)}>{city.name}</Link></span>)}</p>)}</nav>
      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Imperial Cleaning Inc. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-5"><Link href="/privacy-policy" className="hover:text-foreground">Privacy</Link><PrivacySettingsButton /><Link href="/terms-of-service" className="hover:text-foreground">Terms</Link><Link href="/sitemap" className="hover:text-foreground">Sitemap</Link></div>
      </div>
    </div>
  </footer>;
}

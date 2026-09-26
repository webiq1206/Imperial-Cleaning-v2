import Link from "next/link";
import InternalHeroSection from "@/components/internal-hero-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import LocationVerifiedReviews from "@/components/location-verified-reviews";
import { type ServiceLocation } from "@/data/service-locations";
import { BUSINESS_HOURS_SHORT, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/data/business-info";
import { constructionPhases, constructionResources } from "@/data/service-priorities";
import { servicePolicy } from "@/data/service-policy";
import { localPlanning, nearbyLocations } from "@/data/local-planning";
import { buildServiceLocationUrl } from "@/lib/routing-utils";
import { quoteHref } from "@/lib/quote-context";

interface Props { location: ServiceLocation; serviceType: "construction-cleaning" | "commercial-cleaning"; serviceName: string }
export default function ServiceLocationClient({location, serviceType, serviceName}: Props) {
  const construction = serviceType === "construction-cleaning";
  const pageUrl = buildServiceLocationUrl(location.state, serviceType, location.name);
  const quote = quoteHref(pageUrl);
  const otherService = construction ? "commercial-cleaning" : "construction-cleaning";
  const planning = localPlanning[location.name];
  const tasks = construction ? [
    ["Dust and accessible surfaces", "Detail accessible ledges, trim, cabinetry and fixtures after the area is released by the contractor. Confirm surface-specific methods before work."],
    ["Glass and finishing details", "List reachable glass, tracks, labels and residue in the scope. Height access, coatings and delicate finishes need a separate review."],
    ["Floors and handover areas", "Plan material-appropriate floor cleaning, restrooms and break areas. Heavy waste, hauling and subsequent touch-ups are separate scope decisions."]
  ] : [
    ["Offices and shared spaces", "Plan trash removal, reachable-surface dusting and vacuuming without disturbing private documents, electronics or personal items."],
    ["Restrooms and break rooms", "Set cleaning frequency, touchpoint tasks and consumable responsibilities according to actual use."],
    ["Floors, entries and glass", "Separate routine vacuuming and mopping from periodic floor restoration, carpet extraction and glass projects."]
  ];
  const faqs = [
    {q: `Do you offer ${construction ? "post-construction cleaning" : "commercial cleaning"} in ${location.name}?`, a: `Yes. ${location.name} is in our ${location.state} service area. Send the property location and scope so we can confirm availability for your requested dates. Coverage does not indicate a separate branch office.`},
    {q: construction ? "Which cleaning phase should I request?" : "How often should my facility be cleaned?", a: construction ? "Request rough cleaning for agreed debris and initial dust, final cleaning after finishing work, and touch-ups after later trades or walkthroughs. We confirm the areas and timing for each visit." : "Start with traffic, restroom use, opening hours and the condition of each area. Daily, several-times-weekly and periodic tasks can be combined in a written scope."},
    {q: "How much will the cleaning cost?", a: servicePolicy.pricing},
    {q: "Can you meet my deadline or preferred hours?", a: servicePolicy.scheduling},
    {q: "What is excluded from a standard quote?", a: servicePolicy.exclusions}
  ];
  return <>
    <div className="site-width py-4"><Breadcrumbs includeStructuredData={false} items={[{name:`${location.state} service areas`,href:`/service-areas/${location.state.toLowerCase()}`},{name:serviceName,href:`/${serviceType}`},{name:location.name}]}/></div>
    <InternalHeroSection title={`${construction ? "Post-Construction Cleaning" : "Commercial Cleaning"} in ${location.name}, ${location.state}`}
      subtitle={construction ? `Construction cleanup for new builds, renovations and tenant improvements in ${location.name}. Plan rough, final and touch-up cleaning around the contractor’s handover schedule.` : `Commercial cleaning and janitorial services for offices and business facilities in ${location.name}. Build a recurring scope around the rooms, tasks and hours that matter to your team.`}
      pillText={`${location.state.toUpperCase()} SERVICE AREA`} secondaryCTA={{text:"Call our team",href:`tel:${BUSINESS_PHONE_TEL}`}} />
    <nav className="jump-links" aria-label="On this page"><a href="#included">What’s included</a><a href="#local-planning">Local planning</a><a href="#process">How it works</a><a href="#faq">Questions</a></nav>
    <section id="included" className="ic-section"><div className="site-width"><span className="eyebrow">A CLEAR SCOPE FROM THE START</span><h2>{construction ? "From construction dust to the final walkthrough." : "A cleaning schedule built around your building."}</h2><p className="reading-width">Choose the tasks you need, confirm exclusions and agree the service window before work begins. We are headquartered in Idaho Falls and coordinate work across our listed Idaho and Utah service areas.</p>
      <div className="audit-grid">{tasks.map(([title,text])=><div className="glass-card-elevated audit-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div><p className="scope-note">{servicePolicy.exclusions}</p>
      {construction && <div className="audit-grid">{constructionPhases.map(phase=><Link className="glass-card-elevated audit-card" key={phase.href} href={phase.href}><span className="eyebrow">{phase.stage}</span><h3>{phase.label}</h3><p>{phase.description}</p><span className="text-link">Explore this phase</span></Link>)}</div>}
    </div></section>
    <section id="local-planning" className="ic-section review-section"><div className="site-width audit-two-col"><div><span className="eyebrow">PLAN YOUR LOCATION</span><h2>Cleaning a property in {location.name}?</h2><p>{planning?.[construction ? 0 : 1]}</p><p>{location.county ? `For a property in ${location.county}, ` : "To confirm coverage, "}send the full site location, approximate cleanable area and desired start or handover date. ZIP codes help identify the site but do not establish crew availability.</p>{location.zipCodes?.length ? <p className="text-sm">Local ZIP references: {location.zipCodes.join(", ")}.</p> : null}<p>{servicePolicy.scheduling}</p><Link className="text-link" href={`/service-areas/${location.state.toLowerCase()}`}>See {location.state} coverage</Link></div>
      <aside className="glass-card-elevated audit-card"><h3>Your quote checklist</h3><ul className="audit-list"><li>City, property type and approximate area</li><li>{construction ? "Rough, final or touch-up phase and trade-release date" : "Rooms, current concerns and desired cleaning frequency"}</li><li>Floor types, access restrictions and working hours</li><li>{construction ? "Disposal responsibilities and walkthrough contact" : "Restocking, periodic tasks and building contact"}</li></ul><p>Do not send alarm codes, keys, patient information or other sensitive details in the quote form.</p><Link href={quote} className="ic-button" data-primary-cta>Request a free quote</Link><p className="text-sm">Office contact hours: {BUSINESS_HOURS_SHORT} (Mountain Time). Crew scheduling is confirmed separately.</p><a className="text-link" href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE}</a></aside>
    </div></section>
    <section id="process" className="ic-section"><div className="site-width"><h2>From your request to an agreed scope.</h2><div className="audit-grid">{[
      ["01 / Tell us what you need", "Send the location, scope and preferred schedule. Your service and city are already selected in the quote form."],
      ["02 / Confirm the details", "We review access, condition, tasks and timing with you. A walkthrough may be needed before pricing."],
      ["03 / Review your quote", "Check the work, exclusions, schedule and price before deciding. Agree how completed tasks and any follow-up will be reviewed."]
    ].map(([title,text])=><div key={title} className="audit-card"><h3>{title}</h3><p>{text}</p></div>)}</div><p>{servicePolicy.quality}</p></div></section>
    <LocationVerifiedReviews city={location.name} state={location.state} service={serviceType}/>
    <section id="faq" className="ic-section"><div className="site-width reading-width"><h2>Questions before requesting a quote.</h2>{faqs.map(f=><details key={f.q} className="service-faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
    <section className="ic-section review-section"><div className="site-width"><h2>Nearby service areas and useful next steps.</h2><div className="audit-two-col"><div><h3>{serviceName} nearby</h3><ul className="audit-list">{nearbyLocations(location).map(city=><li key={city.name}><Link href={buildServiceLocationUrl(city.state,serviceType,city.name)}>{serviceName} in {city.name}</Link></li>)}</ul><Link className="text-link" href={buildServiceLocationUrl(location.state,otherService,location.name)}>{construction ? "Commercial cleaning" : "Construction cleanup"} in {location.name}</Link></div><div><h3>Plan the scope</h3><ul className="audit-list">{(construction ? constructionResources : [{label:"Janitorial services",href:"/janitorial-services"},{label:"Office cleaning",href:"/office-cleaning"},{label:"Commercial cleaning scope template",href:"/resources/janitorial-scope-of-work-template"}]).map(item=><li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul><Link href={quote} className="ic-button" data-primary-cta>Request your {location.name} quote</Link></div></div></div></section>
  </>;
}


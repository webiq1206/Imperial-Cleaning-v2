"use client";
import Link from "next/link";
import { ArrowUpRight, HardHat, Building2, ClipboardCheck, CalendarClock, MapPin, Check } from "lucide-react";
import { verifiedReviews } from "@/data/reviews";
import { homeFaqs } from "@/data/home-faqs";
import { constructionPhases, constructionResources, CONSTRUCTION_QUOTE_HREF } from "@/data/service-priorities";

export default function HomeClient() {
  // Use the existing owner-supplied construction reviews verbatim. Do not recast commercial reviews as construction proof.
  const reviews = ["Ryan S.", "V Josephson", "Miles F."].flatMap(author => {
    const review = verifiedReviews.find(item => item.author === author && item.mentionedServices?.includes("construction-cleaning"));
    return review ? [review] : [];
  });
  return <>
    <section id="services" className="ic-section service-overview" aria-labelledby="service-overview-title"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">FOR YOUR PROJECT. FOR YOUR WORKPLACE.</span><h2 id="service-overview-title">Construction cleanup<br />and commercial cleaning.</h2></div><p>Plan a cleanup for your next handover or recurring care for an established workplace. Choose the service that fits.</p></div>
      <div className="service-overview-grid">
        <article className="service-card construction service-overview-card" aria-labelledby="construction-service-title">
          <div className="service-card-top"><HardHat size={30} aria-hidden="true" /><span>01 / PROJECT CLEANUP</span></div>
          <h3 id="construction-service-title">Construction cleanup</h3>
          <p>Take your commercial project from the last trade to a clean handover. Coordinate the cleanup around released areas, new finishes, and your construction schedule.</p>
          <ul><li><Check aria-hidden="true" />New builds, renovations, and tenant improvements</li><li><Check aria-hidden="true" />Rough, final, and touch-up cleaning</li><li><Check aria-hidden="true" />A defined scope for your project</li></ul>
          <div className="service-overview-actions"><Link href="/construction-cleaning" className="ic-button">Explore construction cleanup <ArrowUpRight size={18} aria-hidden="true" /></Link><Link href={CONSTRUCTION_QUOTE_HREF} className="text-link">Request a construction quote <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </article>
        <article id="commercial-cleaning" className="service-card service-overview-card" aria-labelledby="commercial-service-title">
          <div className="service-card-top"><Building2 size={30} aria-hidden="true" /><span>02 / ONGOING CLEANING</span></div>
          <h3 id="commercial-service-title">Commercial cleaning</h3>
          <p>Keep your workplace ready for staff and customers with recurring office cleaning and janitorial services. Set the scope and frequency around your facility.</p>
          <ul><li><Check aria-hidden="true" /><Link href="/office-cleaning">Office cleaning</Link></li><li><Check aria-hidden="true" /><Link href="/janitorial-services">Janitorial services</Link></li><li><Check aria-hidden="true" />Cleaning around your business hours</li></ul>
          <div className="service-overview-actions"><Link href="/commercial-cleaning" className="ic-button secondary">Explore commercial cleaning <ArrowUpRight size={18} aria-hidden="true" /></Link><Link href="/contact?service=commercial" className="text-link">Request a commercial quote <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        </article>
      </div>
    </div></section>
    <section id="construction-phases" className="ic-section"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">CONSTRUCTION CLEANUP BY PHASE</span><h2>Construction cleaning.<br />From rough to final.</h2></div><p>Keep your trades focused on the build. Plan the cleanup around released work areas, new finishes, and the handover ahead.</p></div>
      <div className="construction-phase-grid">{constructionPhases.map(phase => <article className="service-card construction" key={phase.href}>
        <div className="service-card-top"><HardHat size={28} aria-hidden="true" /><span>{phase.stage}</span></div>
        <h3>{phase.label}</h3><p>{phase.description}</p>
        <Link href={phase.href} className="service-link">Explore this cleaning phase <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </article>)}</div>
      <div className="button-row construction-section-actions"><Link className="ic-button" href={CONSTRUCTION_QUOTE_HREF}>Request a free project quote <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="text-link" href="/construction-cleaning">View construction cleanup services <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </div></section>
    {reviews.length > 0 && <section id="reviews" className="ic-section review-section"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">CONSTRUCTION PROJECT FEEDBACK</span><h2>What contractors say<br />about working with Imperial.</h2></div><Link href="/reviews" className="text-link">Read customer reviews <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      <div className="review-grid">{reviews.map(review => <figure className="review-card" key={review.author}>
        <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(Math.max(0, Math.min(5, review.rating)))}</div>
        <blockquote>“{review.text}”</blockquote><figcaption><span className="review-avatar" aria-hidden="true">{review.author[0]}</span><span><strong>{review.author}</strong><a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">{review.source} review <ArrowUpRight size={12} aria-hidden="true" /></a></span></figcaption>
      </figure>)}</div>
    </div></section>}
    <section id="compliance" className="ic-section"><div className="site-width standards-layout">
      <div><span className="eyebrow">A CLEAR PLAN BEFORE THE CREW ARRIVES</span><h2>Keep cleanup aligned<br />with your construction schedule.</h2><p className="section-intro">The right cleaning phase depends on what is finished, what is still underway, and when each area can be released.</p><Link href="/construction-cleaning" className="text-link">Plan your post-construction cleanup <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      <div className="process-list">{[
        { icon: ClipboardCheck, title: "Share the project scope", text: "Tell us the building type, approximate area, current condition, and cleaning phase you need." },
        { icon: CalendarClock, title: "Coordinate access and timing", text: "Confirm released areas, remaining trades, surface restrictions, and the requested handover date." },
        { icon: Check, title: "Review the agreed cleaning work", text: "Use a clear task list to review the clean and identify any separately planned touch-up visit." },
      ].map((item, index) => <div key={item.title}><span className="process-number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><item.icon size={24} aria-hidden="true" /></div>)}</div>
    </div></section>
    <section id="construction-resources" className="ic-section construction-resources"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">BEFORE THE FINAL WALKTHROUGH</span><h2>Plan the cost.<br />Check the details.</h2></div><p>Use these guides to define the cleaning scope and prepare for project handover.</p></div>
      <div className="construction-resource-grid">{constructionResources.map(resource => <Link href={resource.href} className="construction-resource-card" key={resource.href}><h3>{resource.label}</h3><p>{resource.detail}</p><span>Read the guide <ArrowUpRight size={18} aria-hidden="true" /></span></Link>)}</div>
    </div></section>
    <section id="service-areas" className="ic-section area-section"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">CONSTRUCTION CLEANUP COVERAGE</span><h2>Commercial projects.<br />Across Idaho and Utah.</h2></div><p>Find the construction-cleaning page for your city and contact us to confirm the project scope, access, and schedule.</p></div>
      <div className="area-cards">{[
        { state: "Idaho", slug: "idaho", cities: [{name:"Idaho Falls",slug:"idaho-falls"},{name:"Pocatello",slug:"pocatello"},{name:"Rexburg",slug:"rexburg"},{name:"Boise",slug:"boise"}] },
        { state: "Utah", slug: "utah", cities: [{name:"Salt Lake City",slug:"salt-lake-city"},{name:"Logan",slug:"logan"},{name:"Ogden",slug:"ogden"},{name:"Provo",slug:"provo"}] },
      ].map(area => <article className="area-card construction-area-card" key={area.slug}><div><span className="eyebrow"><MapPin size={14} aria-hidden="true" />CONSTRUCTION SERVICE AREAS</span><h3>{area.state}</h3><ul>{area.cities.map(city => <li key={city.slug}><Link href={`/${area.slug}/construction-cleaning/${city.slug}`}>Construction cleanup in {city.name}<ArrowUpRight size={15} aria-hidden="true" /></Link></li>)}</ul><Link className="text-link" href={`/service-areas/${area.slug}`}>View all {area.state} service areas <ArrowUpRight size={17} aria-hidden="true" /></Link></div></article>)}
      </div><p className="area-commercial-note">Need recurring cleaning instead? See <Link href="/idaho/commercial-cleaning/idaho-falls">commercial cleaning in Idaho Falls</Link> or <Link href="/commercial-cleaning">commercial cleaning across Idaho and Utah</Link>.</p><Link href="/service-areas" className="text-link area-all">Find every service area <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div></section>
    {/* Native details/summary keeps every answer in the server HTML (closed until opened), so the FAQPage JSON-LD matches crawlable content. */}
    <section id="faq" className="ic-section"><div className="site-width faq-layout"><div><span className="eyebrow">CONSTRUCTION CLEANUP QUESTIONS</span><h2>Before the crew<br />gets to work.</h2><p>Planning a build, renovation, or final clean?</p><Link href={CONSTRUCTION_QUOTE_HREF} className="text-link">Talk through your project <ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="home-faq">{homeFaqs.map(faq => <details key={faq.id} id={faq.id} className="service-faq-item"><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
  </>;
}

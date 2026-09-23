"use client";
import Link from "next/link";
import { ArrowUpRight, HardHat, ClipboardCheck, CalendarClock, MapPin, Check } from "lucide-react";
import { verifiedReviews } from "@/data/reviews";
import { homeFaqs } from "@/data/home-faqs";
import { constructionPhases, constructionResources, CONSTRUCTION_QUOTE_HREF } from "@/data/service-priorities";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function HomeClient() {
  // Use the existing owner-supplied construction reviews verbatim. Do not recast commercial reviews as construction proof.
  const reviews = ["Ryan S.", "V Josephson", "Miles F."].flatMap(author => {
    const review = verifiedReviews.find(item => item.author === author && item.mentionedServices?.includes("construction-cleaning"));
    return review ? [review] : [];
  });
  return <>
    <section id="services" className="ic-section"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">OUR PRIMARY SERVICE</span><h2>Construction cleaning.<br />From rough to final.</h2></div><p>Keep your trades focused on the build. Plan the cleanup around released work areas, new finishes, and the handover ahead.</p></div>
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
      </div><Link href="/service-areas" className="text-link area-all">Find every service area <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div></section>
    <section id="commercial-cleaning" className="ic-section commercial-secondary"><div className="site-width commercial-secondary-inner">
      <div><span className="eyebrow">ALSO AVAILABLE</span><h2>Ongoing commercial cleaning.</h2><p>Need regular cleaning after the building opens? We also provide recurring office cleaning and janitorial services for commercial facilities.</p></div>
      <div><Link href="/commercial-cleaning" className="ic-button secondary">Explore commercial cleaning <ArrowUpRight size={18} aria-hidden="true" /></Link><Link href="/contact?service=commercial" className="text-link">Request a commercial quote <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </div></section>
    <section id="faq" className="ic-section"><div className="site-width faq-layout"><div><span className="eyebrow">CONSTRUCTION CLEANUP QUESTIONS</span><h2>Before the crew<br />gets to work.</h2><p>Planning a build, renovation, or final clean?</p><Link href={CONSTRUCTION_QUOTE_HREF} className="text-link">Talk through your project <ArrowUpRight size={18} aria-hidden="true" /></Link></div><Accordion type="single" collapsible className="home-faq">{homeFaqs.map(faq => <AccordionItem key={faq.id} value={faq.id}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
  </>;
}

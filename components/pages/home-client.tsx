"use client";
import Link from "next/link";
import { ArrowUpRight, Building2, HardHat, ShieldCheck, ClipboardCheck, CalendarClock, MapPin, Check } from "lucide-react";
import { verifiedReviews } from "@/data/reviews";
import { homeFaqs } from "@/data/home-faqs";
import { navigation } from "@/data/navigation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
export default function HomeClient() {
  const reviews = [verifiedReviews[1], verifiedReviews[3], verifiedReviews.find(r => r.author === "Sarah S.") || verifiedReviews[0]];
  return <>
    <section id="services" className="ic-section"><div className="site-width">
      <div className="section-heading"><div><span className="eyebrow">CLEANING THAT FITS YOUR BUSINESS</span><h2>The right clean.<br />For the way you work.</h2></div><p>One reliable team for everyday upkeep, demanding projects, and the details that make a difference.</p></div>
      <div className="service-cards">
        <article className="service-card"><div className="service-card-top"><Building2 size={30} /><span>01 / ONGOING CARE</span></div><h3>Commercial cleaning</h3><p>A welcoming workplace for your team and your customers. We build a cleaning schedule around your facility and business hours.</p><ul><li><Check />Office & janitorial services</li><li><Check />Floor care & day porters</li><li><Check />Industrial & specialty spaces</li></ul><Link href="/commercial-cleaning" className="service-link">Explore commercial cleaning <ArrowUpRight size={20} /></Link></article>
        <article className="service-card construction"><div className="service-card-top"><HardHat size={30} /><span>02 / PROJECT HANDOVER</span></div><h3>Construction cleaning</h3><p>Take your project from the last trade to a polished handover. A coordinated clean for builders, contractors, and property owners.</p><ul><li><Check />Rough cleaning & debris removal</li><li><Check />Final cleaning & detailing</li><li><Check />Touch-ups before occupancy</li></ul><Link href="/construction-cleaning" className="service-link">Explore construction cleaning <ArrowUpRight size={20} /></Link></article>
      </div>
      <div className="industry-row"><span>Spaces we clean</span>{navigation[1].links.slice(0,6).map(l => <Link href={l.href} key={l.href}>{l.label}<ArrowUpRight size={14} /></Link>)}</div>
    </div></section>
    <section id="reviews" className="ic-section review-section"><div className="site-width"><div className="section-heading"><div><span className="eyebrow">THE WORD FROM OUR CUSTOMERS</span><h2>A reputation earned<br />one clean at a time.</h2></div><Link href="/reviews" className="text-link">Read customer reviews <ArrowUpRight size={18} /></Link></div>
      <div className="review-grid">{reviews.map(r => <figure className="review-card" key={r.author}><div className="review-stars" aria-label={`${r.rating} out of 5 stars`}>★★★★★</div><blockquote>“{r.text}”</blockquote><figcaption><span className="review-avatar" aria-hidden="true">{r.author[0]}</span><span><strong>{r.author}</strong><a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">{r.source} review <ArrowUpRight size={12} /></a></span></figcaption></figure>)}</div>
    </div></section>
    <section id="compliance" className="ic-section"><div className="site-width standards-layout"><div><span className="eyebrow">LESS TO MANAGE. MORE PEACE OF MIND.</span><h2>Good cleaning starts<br />with a clear plan.</h2><p className="section-intro">You should know what’s being cleaned, when the team will arrive, and who to call. We keep it straightforward.</p><Link href="/about" className="text-link">Get to know Imperial <ArrowUpRight size={18} /></Link></div>
      <div className="process-list">{[
        {icon:ClipboardCheck,title:"Walk through your needs",text:"We review the space, priorities, and scope with you before work begins."},
        {icon:CalendarClock,title:"Set the scope and schedule",text:"Get a cleaning plan that fits your operations or construction timeline."},
        {icon:ShieldCheck,title:"Clean, check, and follow through",text:"Our team completes the work and checks the details. Certificates of insurance are available on request."}
      ].map((x,i) => <div key={x.title}><span className="process-number">0{i+1}</span><div><h3>{x.title}</h3><p>{x.text}</p></div><x.icon size={24} aria-hidden="true" /></div>)}</div>
    </div></section>
    <section id="service-areas" className="ic-section area-section"><div className="site-width"><div className="section-heading"><div><span className="eyebrow">LOCAL ROOTS. REGIONAL REACH.</span><h2>At home in Idaho.<br />At work across two states.</h2></div><p>Headquartered in Idaho Falls, serving commercial facilities and construction projects across Idaho and Utah.</p></div><div className="area-cards">
      {[{state:"Idaho",cities:"Idaho Falls · Pocatello · Rexburg · Twin Falls · Boise",note:"Our home state"},{state:"Utah",cities:"Salt Lake City · Logan · Ogden · Provo · Orem",note:"Across the Wasatch Front and beyond"}].map(a => <Link key={a.state} href={`/service-areas/${a.state.toLowerCase()}`} className="area-card"><div><span className="eyebrow"><MapPin size={14} />{a.note}</span><h3>{a.state}</h3><p>{a.cities}</p></div><span className="circle-arrow"><ArrowUpRight size={23} /></span></Link>)}
    </div><Link href="/service-areas" className="text-link area-all">View every service area <ArrowUpRight size={17} /></Link></div></section>
    <section id="faq" className="ic-section"><div className="site-width faq-layout"><div><span className="eyebrow">A FEW HELPFUL ANSWERS</span><h2>Before we get<br />to work.</h2><p>Have a question about your space?</p><Link href="/contact" className="text-link">Talk with our team <ArrowUpRight size={18} /></Link></div><Accordion type="single" collapsible className="home-faq">{homeFaqs.map((f,i) => <AccordionItem key={f.question} value={`faq-${i}`}><AccordionTrigger>{f.question}</AccordionTrigger><AccordionContent>{f.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
  </>;
}

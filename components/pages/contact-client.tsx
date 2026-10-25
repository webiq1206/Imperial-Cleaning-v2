"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Check, ArrowUpRight } from "lucide-react";
import LeadRequest from "@/components/lead-request";
import { StructuredData } from "@/components/structured-data";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, BUSINESS_EMAIL, BUSINESS_FULL_ADDRESS, BUSINESS_HOURS_SHORT } from "@/data/business-info";
export default function ContactClient() {
  return <><StructuredData data={{"@context":"https://schema.org","@type":"ContactPage","name":"Contact Imperial Cleaning Inc","url":"https://imperialcleaninginc.com/contact","mainEntity":{"@id":"https://imperialcleaninginc.com/#organization"}}} />
    <section className="contact-page"><div className="site-width"><nav className="simple-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Contact & quote</span></nav><div className="contact-layout contact-lead-layout">
      <div className="contact-copy contact-intro"><span className="eyebrow">LET’S GET YOUR SPACE READY</span><h1>Request a free<br /><span className="brand-gradient">cleaning quote.</span></h1><p>Tell us what you need. We’ll discuss your space, confirm the scope, and put together a free quote.</p></div>
      <div className="contact-form-card"><LeadRequest placement="contact" /></div>
      <div className="contact-copy contact-support">
        <ul className="contact-benefits"><li><Check /> Commercial & construction cleaning</li><li><Check /> Schedules built around your operations</li><li><Check /> Licensed, insured & bonded</li></ul>
        <div className="contact-methods"><a href={`tel:${BUSINESS_PHONE_TEL}`}><Phone /><span><small>Call our team</small><strong>{BUSINESS_PHONE}</strong></span><ArrowUpRight /></a><a href={`sms:${BUSINESS_PHONE_TEL}`}><Phone /><span><small>Prefer a text?</small><strong>Text Imperial Cleaning</strong></span><ArrowUpRight /></a><a href={`mailto:${BUSINESS_EMAIL}`}><Mail /><span><small>Email us</small><strong>{BUSINESS_EMAIL}</strong></span><ArrowUpRight /></a></div>
        <p className="contact-address"><MapPin size={17} />{BUSINESS_FULL_ADDRESS}</p><p className="contact-hours">{BUSINESS_HOURS_SHORT} (Mountain Time)<br />Sunday closed.</p>
      </div>
    </div></div></section>
    <section className="ic-section contact-next"><div className="site-width"><span className="eyebrow">WHAT HAPPENS NEXT?</span><div className="next-steps"><div><span>01</span><h2>We review your request.</h2><p>We’ll reach out to understand your priorities and answer your questions.</p></div><div><span>02</span><h2>We confirm the scope.</h2><p>If needed, we arrange a walkthrough to review your facility or jobsite.</p></div><div><span>03</span><h2>You get a clear quote.</h2><p>Review the work and schedule before deciding how you’d like to proceed.</p></div></div></div></section>
  </>;
}


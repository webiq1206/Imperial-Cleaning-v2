"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import InternalHeroSection from "@/components/internal-hero-section";
import { StructuredData } from "@/components/structured-data";
export default function AboutClient() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://imperialcleaninginc.com/about#aboutpage",
    "url": "https://imperialcleaninginc.com/about",
    "name": "About Imperial Cleaning Inc",
    "description": "Professional construction and commercial cleaning company serving Idaho and Utah since 2015. Headquartered in Idaho Falls with comprehensive cleaning solutions for businesses and contractors.",
    "mainEntity": { "@id": "https://imperialcleaninginc.com/#organization" },
    "isPartOf": { "@id": "https://imperialcleaninginc.com/#website" }
    // TODO(real-data): once the owner/leadership consent to attribution, add a
    // "Person" founder node here and reference it from the Organization "founder"
    // field in app/layout.tsx, e.g.:
    //   { "@type": "Person", "@id": ".../#founder", "name": "<Owner Name>",
    //     "jobTitle": "Founder & Owner", "worksFor": { "@id": ".../#organization" } }
    // Real, named leadership materially strengthens E-E-A-T for a local service brand.
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imperialcleaninginc.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://imperialcleaninginc.com/about" }
    ]
  };

  const aboutFaqs = [
    {
      question: "Who is Imperial Cleaning Inc?",
      answer: "Imperial Cleaning Inc is a local, family-owned commercial and construction cleaning company founded in 2015 and headquartered in Idaho Falls, Idaho. We provide post-construction cleanup and commercial janitorial services to businesses and contractors across 24 cities in Idaho and Utah."
    },
    {
      question: "Is Imperial Cleaning licensed and insured?",
      answer: "Yes. Imperial Cleaning Inc is fully insured and bonded in both Idaho and Utah, carrying general liability insurance and workers' compensation coverage. Certificates of insurance and additional insured documentation are available on request."
    },
    {
      question: "How long has Imperial Cleaning been in business?",
      answer: "Imperial Cleaning Inc was founded in 2015 in Idaho Falls, giving us over a decade of experience in construction cleanup and commercial cleaning across the Intermountain West."
    },
    {
      question: "What areas does Imperial Cleaning serve?",
      answer: "We serve 16 cities in Idaho, including Idaho Falls, Pocatello, Rexburg, Twin Falls, and Boise, and 8 cities in Utah, including Salt Lake City, Logan, Ogden, and Provo. Contact us to confirm availability for your property and requested dates."
    },
    {
      question: "What makes Imperial Cleaning different from other cleaning companies?",
      answer: "We are a local company headquartered in Idaho Falls, not a national franchise. Clients work directly with our team to agree the scope, schedule and price. We review completed work against the agreed tasks and discuss any follow-up needs."
    }
  ];

  const aboutFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return <>
    <StructuredData data={[aboutPageSchema,breadcrumbSchema,aboutFaqSchema]} />
    <InternalHeroSection title="Local roots. A higher standard of clean." subtitle="Imperial Cleaning Inc has served businesses and contractors from Idaho Falls since 2015. Today, we bring that same care to commercial and construction projects across Idaho and Utah." pillText="ABOUT IMPERIAL CLEANING" secondaryCTA={{text:"Read our customer reviews",href:"/reviews"}} />
    <section className="ic-section"><div className="site-width about-story"><div><span className="eyebrow">OUR STORY</span><h2>Built on care.<br />Backed by follow-through.</h2><p>Imperial started in Idaho Falls with a straightforward goal: provide cleaning that businesses and contractors can rely on.</p><p>Our work covers ongoing commercial cleaning, specialized facility care, and post-construction cleanup. We coordinate with your team, define the scope, and check the details before the job is done.</p><p>From offices and medical practices to warehouses and construction sites, we adapt the work to the space and the people who use it.</p><Link className="text-link" href="/service-areas">Explore our service areas <ArrowUpRight size={18} /></Link></div><div className="about-brand-panel"><Image src="/hero-logo.webp" alt="Imperial Cleaning lion logo" width={280} height={260} /><span className="eyebrow">IDAHO FALLS, IDAHO</span><strong>Locally owned.<br />Personally invested.</strong><span>Serving Idaho & Utah since 2015</span></div></div></section>
    <section className="ic-section review-section"><div className="site-width"><span className="eyebrow">WHAT YOU CAN EXPECT</span><div className="next-steps">{[{title:"Clear communication",text:"Know the scope, understand the schedule, and reach a real person when you need help."},{title:"Attention to the details",text:"A planned cleaning process and quality checks help keep your facility ready for work."},{title:"Confidence in your team",text:"Licensed, insured, and bonded. Certificates of insurance and additional insured documentation are available on request."}].map(x => <div key={x.title}><h2>{x.title}</h2><p>{x.text}</p></div>)}</div></div></section>
    <section className="ic-section"><div className="site-width faq-layout"><div><span className="eyebrow">GET TO KNOW US</span><h2>Your questions,<br />answered.</h2></div><div>{aboutFaqs.map(f => <details key={f.question} className="service-faq-item"><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>
  </>;
}

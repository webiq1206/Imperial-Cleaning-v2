// Single source of truth for the homepage FAQ. Both the visible accordion
// (components/faq-section.tsx) and the FAQPage JSON-LD (app/page.tsx) read from
// this plain module, so the structured data always matches what renders.
//
// This intentionally lives in a non-"use client" module so it can be imported by
// the Server Component home page; importing it from a client component module
// would turn it into an unreadable client reference on the server.

export interface HomeFaq {
  id: string;
  question: string;
  answer: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    id: "service-areas",
    question: "What areas in Idaho and Utah do you serve?",
    answer: "Imperial Cleaning Inc. is headquartered in Idaho Falls and provides commercial and construction cleaning across Idaho and Utah. Our primary service region is eastern Idaho - Idaho Falls, Ammon, Pocatello, Chubbuck, Blackfoot, Rexburg, Rigby, and Shelley - with same-day response. We also serve the Magic Valley (Twin Falls), the Treasure Valley (Boise, Meridian, Nampa, Caldwell, Eagle), and Utah markets including Logan, Ogden, Salt Lake City, Provo, and the Wasatch Front. Larger projects are scheduled statewide across both states."
  },
  {
    id: "construction-cleanup-process",
    question: "What does your post-construction cleanup process include?",
    answer: "Our construction cleanup follows a comprehensive 3-phase process: Phase 1 is rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is final inspection-ready cleaning with touch-ups, floor protection, and a complete project walkthrough. This systematic approach ensures your construction project anywhere in Idaho or Utah meets inspection standards and is ready for occupancy."
  },
  {
    id: "commercial-cleaning-scheduling",
    question: "How flexible are your commercial cleaning schedules?",
    answer: "We offer extremely flexible commercial cleaning schedules across Idaho and Utah to accommodate your business needs. Office cleaning and janitorial services are available daily, weekly, bi-weekly, and monthly. We work around your business hours - before opening, after closing, or during off-peak times. For 24/7 facilities, we provide overnight and weekend services, and urgent cleanup is available with same-day response in our primary eastern Idaho region."
  },
  {
    id: "insurance-bonding-compliance",
    question: "Are you fully insured and bonded for commercial projects?",
    answer: "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial and construction cleaning projects in our service areas. We carry substantial liability coverage and are fully bonded, providing complete protection for your property and peace of mind. Our insurance certificates are readily available and we can add your business as an additional insured for larger projects."
  },
  {
    id: "pricing-quote-process",
    question: "How do you determine pricing for cleaning services?",
    answer: "Most post-construction cleaning runs $0.15 to $0.60 per square foot, with single-phase final cleans at the lower end and multi-phase or specialized projects at the higher end. Commercial cleaning is typically priced as a monthly contract based on square footage, frequency, and scope. We provide detailed, transparent quotes with no hidden fees - most estimates are delivered within 24 hours, with both per-square-foot and flat-rate options for construction cleanup."
  },
  {
    id: "construction-timeline-coordination",
    question: "How do you coordinate with construction timelines and contractors?",
    answer: "We work closely with general contractors, project managers, and construction teams across Idaho and Utah to ensure seamless timeline coordination. Our crews integrate with your project schedule, providing cleaning at critical milestones: rough clean after drywall, detailed clean after painting and flooring, and final clean before inspection. We maintain constant communication and can adjust our schedule to meet accelerated deadlines or address weather-related delays common in Intermountain West construction projects."
  },
  {
    id: "specialized-equipment-techniques",
    question: "What specialized equipment do you use for construction and commercial cleaning?",
    answer: "Imperial Cleaning Inc. utilizes professional-grade equipment specifically designed for construction and commercial cleaning. This includes HEPA filtration systems for dust removal, commercial floor scrubbers, high-reach window cleaning equipment, and specialized post-construction vacuum systems. We use eco-friendly cleaning solutions and state-of-the-art carpet cleaning equipment. All equipment is regularly maintained and operated by trained professionals."
  },
  {
    id: "quality-assurance-guarantees",
    question: "What quality assurance measures and guarantees do you provide?",
    answer: "We guarantee 100% satisfaction on all cleaning services throughout Idaho and Utah. Every project includes a comprehensive quality checklist and final walkthrough with the client. For ongoing commercial cleaning accounts, we conduct regular quality audits and provide detailed service reports. If any aspect of our work doesn't meet your standards, we return within 24 hours to address the issue at no additional cost. Our quality assurance process ensures consistent, professional results."
  },
  {
    id: "environmental-safety-practices",
    question: "What environmental and safety practices do you follow?",
    answer: "Imperial Cleaning Inc. prioritizes environmental responsibility and safety in all operations across our service areas. We use EPA-approved, eco-friendly cleaning products whenever possible and follow all required safety guidelines. Our team is trained in proper chemical handling, blood-borne pathogen procedures, and construction site safety protocols. We maintain all required safety certifications and provide regular training updates. For commercial clients, we offer green cleaning programs that meet professional building standards."
  },
  {
    id: "staff-training-background",
    question: "How do you ensure your cleaning staff is properly trained and vetted?",
    answer: "All Imperial Cleaning Inc. employees undergo comprehensive background checks, drug screening, and professional training before serving clients. Our training program covers proper cleaning techniques, safety protocols, customer service standards, and equipment operation. Staff receive ongoing education and certification updates. For commercial accounts requiring additional security clearance, we can accommodate higher-level background verification. Our team is fully bonded and insured, providing additional protection for your facility."
  },
  {
    id: "payment-terms-invoicing",
    question: "What are your payment terms and invoicing procedures?",
    answer: "We offer flexible payment terms for both commercial cleaning contracts and construction cleanup projects across Idaho and Utah. Standard terms include net 15 or net 30 for established commercial accounts, with discounts available for annual contracts. We accept various payment methods including ACH transfers, checks, and credit cards. Detailed invoices are provided with itemized services and can be customized to match your accounting requirements. For large construction projects, we can arrange progress billing to align with project milestones."
  }
];

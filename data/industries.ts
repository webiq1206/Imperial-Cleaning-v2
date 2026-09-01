/**
 * Industry-specific commercial cleaning pages.
 *
 * These four pages restore the legacy WordPress URLs that previously ranked
 * (and were 301'd to /commercial-cleaning in the interim). Rebuilding them at
 * their exact original slugs recovers the legacy link equity directly with no
 * redirect hop.
 *
 * Content rules: capabilities and process only - no named clients, contract
 * claims, or certifications that cannot be verified (owner decision 2026-06-10).
 */

import { serviceHubs } from "@/data/service-hubs";

export interface IndustryPage {
  /** URL slug. Nested routes use a path-style slug (e.g. construction-cleaning/rough-clean). */
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Direct-answer paragraph for AEO / featured snippets */
  directAnswer: string;
  services: { title: string; description: string }[];
  whyUs: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string;
  parentName?: string;
  parentHref?: string;
  ctaLabel?: string;
  ctaHeading?: string;
  serviceLine?: "commercial-cleaning" | "construction-cleaning";
}

const coreIndustries: IndustryPage[] = [
  {
    slug: "medical-office-cleaning",
    name: "Medical Office Cleaning",
    metaTitle: "Medical Office Cleaning Idaho & Utah | Imperial Cleaning Inc",
    metaDescription:
      "Professional medical office cleaning in Idaho & Utah. Infection-control protocols for clinics, dental & medical offices. Call (208) 520-3202!",
    h1: "Medical Office Cleaning in Idaho & Utah",
    intro:
      "Patients judge a practice the moment they walk in. Imperial Cleaning provides medical office cleaning for clinics, dental practices, urgent care centers, and outpatient facilities across Idaho and Utah, following infection-control protocols that go beyond standard janitorial work.",
    directAnswer:
      "Medical office cleaning differs from standard office cleaning in three ways: EPA-registered hospital-grade disinfectants, strict high-touch and exam-room disinfection protocols, and staff trained in bloodborne pathogen handling. Imperial Cleaning provides all three for medical and dental offices throughout Idaho and Utah.",
    services: [
      { title: "Exam Room Disinfection", description: "Detailed disinfection of exam tables, counters, and high-touch surfaces between deep-clean cycles using hospital-grade products." },
      { title: "Waiting Area & Reception Cleaning", description: "Daily cleaning of the spaces patients see first - floors, seating, check-in counters, and entry glass." },
      { title: "Restroom Sanitation", description: "Disinfection and restocking with documented frequency, critical for patient-facing facilities." },
      { title: "Floor Care for Clinical Spaces", description: "Hard-floor disinfection and burnishing appropriate for clinical corridors and treatment areas." },
      { title: "High-Touch Surface Programs", description: "Door handles, light switches, handrails, and shared equipment surfaces on a defined disinfection schedule." },
      { title: "After-Hours Scheduling", description: "Cleaning scheduled around patient hours so your practice is never disrupted." },
    ],
    whyUs: [
      { title: "Infection-Control Trained", description: "Our team completes bloodborne pathogen training and follows color-coded cleaning systems to prevent cross-contamination between zones." },
      { title: "Documented & Consistent", description: "Defined scopes, checklists, and supervisor inspections so your facility passes scrutiny every day, not just inspection day." },
      { title: "Fully Insured & Bonded", description: "General liability and workers' compensation coverage, with additional insured certificates available for your practice." },
    ],
    faqs: [
      {
        question: "Do you clean dental offices and specialty clinics?",
        answer: "Yes. We clean general medical offices, dental practices, chiropractic and physical therapy clinics, urgent care centers, and outpatient specialty facilities throughout Idaho and Utah.",
      },
      {
        question: "What disinfectants do you use in medical facilities?",
        answer: "We use EPA-registered, hospital-grade disinfectants applied with correct dwell times, and we can align products with your facility's existing infection-control policies on request.",
      },
      {
        question: "Can you clean after patient hours?",
        answer: "Yes. Most medical clients schedule evening or early-morning service so cleaning never interferes with patient care. Weekend service is also available.",
      },
      {
        question: "How is medical office cleaning priced?",
        answer: "Pricing depends on square footage, number of exam rooms, cleaning frequency, and protocol requirements. Most medical offices fall in a custom monthly contract. Call (208) 520-3202 for a free walkthrough and quote within 24 hours.",
      },
    ],
    keywords:
      "medical office cleaning Idaho, dental office cleaning, clinic cleaning services, medical facility cleaning Utah, healthcare cleaning Idaho Falls",
  },
  {
    slug: "restaurant-cleaning-services",
    name: "Restaurant Cleaning",
    metaTitle: "Restaurant Cleaning Services Idaho & Utah | Imperial Cleaning",
    metaDescription:
      "Professional restaurant cleaning in Idaho & Utah. Front-of-house, kitchen-adjacent & floor care that supports health inspections. Call (208) 520-3202!",
    h1: "Restaurant Cleaning Services in Idaho & Utah",
    intro:
      "Health scores and first impressions decide whether diners come back. Imperial Cleaning provides restaurant and food-service cleaning for dining rooms, commercial kitchens' adjacent areas, restrooms, and entryways across Idaho and Utah - on schedules built around your service hours.",
    directAnswer:
      "Restaurant cleaning services typically cover dining room and front-of-house cleaning, restroom sanitation, floor degreasing and care, window and entry glass, and high-touch disinfection - performed overnight or between service periods so the restaurant is inspection-ready every morning.",
    services: [
      { title: "Dining Room & Front-of-House", description: "Tables, seating, floors, and entry areas cleaned nightly so every service starts spotless." },
      { title: "Floor Degreasing & Care", description: "Degreasing and scrubbing for tile, quarry tile, and slip-prone back-of-house floor surfaces." },
      { title: "Restroom Sanitation", description: "Disinfection and restocking - the restroom is where diners judge your kitchen's cleanliness." },
      { title: "Window & Entry Glass", description: "Storefront glass, entry doors, and display surfaces kept streak-free." },
      { title: "High-Touch Disinfection", description: "Menus stations, door handles, POS areas, and shared surfaces on a defined schedule." },
      { title: "Overnight & Off-Hours Service", description: "Cleaning scheduled after close or before open so your team walks into a ready restaurant." },
    ],
    whyUs: [
      { title: "Built Around Service Hours", description: "Overnight, early-morning, and split schedules - we work when your kitchen is closed, not when customers are seated." },
      { title: "Health-Inspection Mindset", description: "Our checklists target the floor-sink-surface areas inspectors check, supporting your team's own kitchen sanitation program." },
      { title: "Fully Insured & Bonded", description: "General liability and workers' compensation coverage with certificates available for franchise and landlord requirements." },
    ],
    faqs: [
      {
        question: "Do you clean commercial kitchens?",
        answer: "We clean kitchen-adjacent areas including floors, walls, and surfaces. Specialized equipment cleaning such as hood and exhaust systems is referred to certified hood-cleaning providers, and we can coordinate scheduling around them.",
      },
      {
        question: "Can you clean overnight after closing?",
        answer: "Yes. Most restaurant clients use overnight or early-morning service. We coordinate access and alarm procedures with your management so service never disrupts operations.",
      },
      {
        question: "How often should a restaurant be professionally cleaned?",
        answer: "Most full-service restaurants use nightly front-of-house cleaning with weekly deep floor care and monthly detail work. Fast-casual locations often start at 3-5 nights per week. We build the schedule around traffic and budget.",
      },
      {
        question: "How much does restaurant cleaning cost?",
        answer: "Pricing depends on square footage, frequency, and scope. Contact us at (208) 520-3202 for a free site visit and a written quote within 24 hours.",
      },
    ],
    keywords:
      "restaurant cleaning services Idaho, restaurant cleaning Utah, food service cleaning, dining room cleaning, commercial kitchen area cleaning Idaho Falls",
  },
  {
    slug: "school-cleaning-services",
    name: "School Cleaning",
    metaTitle: "School Cleaning Services Idaho & Utah | Imperial Cleaning Inc",
    metaDescription:
      "Professional school & daycare cleaning in Idaho & Utah. Classroom disinfection, gym floor care & summer deep cleans. Call (208) 520-3202!",
    h1: "School & Educational Facility Cleaning in Idaho & Utah",
    intro:
      "Schools concentrate hundreds of students into shared spaces every day. Imperial Cleaning provides cleaning for K-12 schools, daycare centers, charter schools, and training facilities across Idaho and Utah - with background-checked staff and schedules built around the academic calendar.",
    directAnswer:
      "School cleaning services include daily classroom and restroom cleaning, high-touch disinfection of desks and door handles, cafeteria and gym floor care, and summer deep cleans (floor refinishing, detailed disinfection) timed to academic breaks. All Imperial Cleaning staff are background-checked.",
    services: [
      { title: "Classroom Cleaning & Disinfection", description: "Desks, chairs, floors, and high-touch surfaces cleaned daily with products safe for learning environments." },
      { title: "Restroom Sanitation", description: "High-frequency disinfection and restocking for the highest-traffic restrooms in any facility type." },
      { title: "Cafeteria & Multipurpose Rooms", description: "Floor care, table cleaning, and post-meal turnaround for shared dining and activity spaces." },
      { title: "Gym & Hard Floor Care", description: "Dust mopping, auto-scrubbing, and periodic refinishing programs for gym and corridor floors." },
      { title: "Summer & Break Deep Cleans", description: "Floor stripping and waxing, detailed disinfection, and project work scheduled during academic breaks." },
      { title: "Daycare & Early Learning", description: "Toy-safe, child-safe cleaning protocols for daycare centers and preschools." },
    ],
    whyUs: [
      { title: "Background-Checked Staff", description: "Every team member passes a background check before working in any facility - mandatory for school environments." },
      { title: "Academic Calendar Scheduling", description: "Daily after-hours service during the school year, with deep-clean projects timed to summer, winter, and spring breaks." },
      { title: "Fully Insured & Bonded", description: "General liability and workers' compensation coverage, with documentation for district and board requirements." },
    ],
    faqs: [
      {
        question: "Are your staff background-checked for school work?",
        answer: "Yes. All Imperial Cleaning employees undergo background checks before serving any client, and we can provide documentation to meet district or charter board requirements.",
      },
      {
        question: "Can you handle summer deep cleaning?",
        answer: "Yes. Summer break is when we strip and refinish floors, deep clean carpets, disinfect classrooms top to bottom, and complete project work that cannot happen during the school year.",
      },
      {
        question: "Do you clean daycare and preschool facilities?",
        answer: "Yes. We follow child-safe cleaning protocols for daycare centers and preschools, including toy-area cleaning and non-toxic product options.",
      },
      {
        question: "How is school cleaning priced?",
        answer: "School pricing is typically a monthly contract based on square footage, daily scope, and frequency, with summer project work quoted separately. Call (208) 520-3202 for a free walkthrough.",
      },
    ],
    keywords:
      "school cleaning services Idaho, school janitorial Utah, daycare cleaning, classroom disinfection, educational facility cleaning Idaho Falls",
  },
  {
    slug: "car-dealership-cleaning",
    name: "Car Dealership Cleaning",
    metaTitle: "Car Dealership Cleaning Idaho & Utah | Imperial Cleaning Inc",
    metaDescription:
      "Professional car dealership cleaning in Idaho & Utah. Showroom floors, glass walls & service-area cleaning that sells cars. Call (208) 520-3202!",
    h1: "Car Dealership Cleaning in Idaho & Utah",
    intro:
      "A showroom sells with shine. Imperial Cleaning provides dealership cleaning for showrooms, customer lounges, sales offices, and service-area customer zones across Idaho and Utah - keeping the glass, floors, and vehicles' backdrop spotless.",
    directAnswer:
      "Car dealership cleaning covers showroom floor polishing and auto-scrubbing, floor-to-ceiling glass cleaning, customer lounge and restroom upkeep, sales office cleaning, and service-write-up area maintenance - typically on a nightly schedule so the showroom opens spotless every morning.",
    services: [
      { title: "Showroom Floor Care", description: "Auto-scrubbing, burnishing, and polishing programs for the high-gloss floors that showcase inventory." },
      { title: "Glass Wall & Window Cleaning", description: "Dealership showrooms are walls of glass - we keep them streak-free inside and out at reachable heights." },
      { title: "Customer Lounge & Waiting Areas", description: "Seating, coffee stations, floors, and restrooms - the spaces where buyers form opinions while they wait." },
      { title: "Sales Office & Desk Cleaning", description: "Nightly cleaning of sales floors, offices, and conference rooms ready for the next day's deals." },
      { title: "Service Write-Up & Customer Zones", description: "The customer-facing side of the service department, kept clean despite constant shop-floor traffic." },
      { title: "Nightly & Weekend Scheduling", description: "Service after close so the dealership opens spotless without interrupting sales hours." },
    ],
    whyUs: [
      { title: "Showroom-Grade Floor Care", description: "Commercial floor equipment and polish programs that maintain the high-gloss finish dealership floors demand." },
      { title: "Consistent Nightly Service", description: "Supervised checklists ensure the showroom, lounge, and restrooms meet the same standard every single morning." },
      { title: "Fully Insured & Bonded", description: "General liability and workers' compensation coverage for work around high-value inventory." },
    ],
    faqs: [
      {
        question: "Do you clean the service shop floor?",
        answer: "We focus on customer-facing areas: showroom, lounge, offices, restrooms, and service write-up zones. Heavy shop-floor degreasing can be quoted as project work depending on the facility.",
      },
      {
        question: "Can you maintain high-gloss showroom floors?",
        answer: "Yes. We run scheduled auto-scrub and burnish programs designed for polished concrete and tile showroom floors, keeping the finish reflective without buildup.",
      },
      {
        question: "When do you clean dealerships?",
        answer: "Most dealership clients use nightly after-close service, with periodic weekend project work for floor restoration and glass detail.",
      },
      {
        question: "How much does dealership cleaning cost?",
        answer: "Pricing depends on showroom size, glass area, frequency, and floor care scope. Call (208) 520-3202 for a free walkthrough and a written quote within 24 hours.",
      },
    ],
    keywords:
      "car dealership cleaning Idaho, dealership showroom cleaning Utah, auto dealership janitorial, showroom floor polishing Idaho Falls",
  },
];

export const industries: IndustryPage[] = [...coreIndustries, ...serviceHubs];

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industries.find((industry) => industry.slug === slug);
}

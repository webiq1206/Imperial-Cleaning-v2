/**
 * Cornerstone educational guides for topical authority (SEO/AEO/GEO).
 *
 * These are genuinely useful, vendor-neutral explainers that do NOT depend on any
 * private business data. Each guide renders at /resources/[slug] with Article +
 * FAQPage (and optional HowTo) JSON-LD. The /resources hub lists all guides.
 */

import { playbookGuides } from "@/data/playbook-guides";
import { constructionCostUpdate } from "@/data/construction-cost-content";

export interface GuideSection {
  heading: string;
  body: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideStep {
  name: string;
  text: string;
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface Guide {
  slug: string;
  /** Visible H1 / hub card title */
  title: string;
  /** <title> tag (<= ~60 chars where possible) */
  metaTitle: string;
  description: string;
  category: "Construction Cleaning" | "Commercial Cleaning" | "Buying Guide";
  readTime: string;
  datePublished: string;
  dateModified: string;
  /** Short lead answer used in the hero and as the AEO summary. */
  intro: string;
  sections: GuideSection[];
  /** Optional ordered steps -> rendered as a list and as HowTo JSON-LD. */
  steps?: GuideStep[];
  faqs: GuideFaq[];
  related: GuideLink[];
}

const DATE_PUBLISHED = "2026-06-05";
const DATE_MODIFIED = "2026-06-05";

const coreGuides: Guide[] = [
  {
    slug: "what-is-post-construction-cleaning",
    title: "What Is Post-Construction Cleaning? A Complete Guide",
    metaTitle: "What Is Post-Construction Cleaning? | Imperial Cleaning",
    description:
      "Post-construction cleaning is the specialized cleanup that prepares a newly built or renovated space for occupancy. Learn what it includes, the phases, and why it matters.",
    category: "Construction Cleaning",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Post-construction cleaning is the specialized deep cleaning performed after a building project is finished, removing construction debris, dust, and residue so the space is safe, inspection-ready, and ready for occupancy. It is more thorough than standard cleaning and is typically done in distinct phases.",
    sections: [
      {
        heading: "What does post-construction cleaning include?",
        body: [
          "Post-construction cleaning removes the fine drywall dust, adhesive residue, paint splatter, stickers, sawdust, and debris that ordinary cleaning is not equipped to handle. It covers every surface a project touches: windows and frames, light fixtures, HVAC vents, cabinetry, fixtures, floors, walls, and trim.",
          "Unlike routine janitorial work, post-construction cleaning uses HEPA filtration, specialized vacuums, and detailed hand-cleaning to capture the ultra-fine particulate that settles into every crevice after construction. The goal is a finished space that looks move-in ready and can pass a final inspection.",
        ],
      },
      {
        heading: "The three phases of post-construction cleanup",
        body: [
          "Phase 1 - Rough clean: Performed after major construction is complete but before final finishes. Crews remove large debris, leftover materials, and trash, and sweep or vacuum the space so finishing trades can work.",
          "Phase 2 - Final clean: The detailed phase. Every surface is cleaned, dust is removed from all fixtures and ledges, windows are cleaned inside and out, and floors are mopped, buffed, or treated according to material.",
          "Phase 3 - Touch-up clean: A final pass just before handover or inspection. Crews address fingerprints, smudges, and any dust that resettled, and complete a walkthrough so the space is genuinely move-in ready.",
        ],
      },
      {
        heading: "Why post-construction cleaning matters",
        body: [
          "A professional post-construction clean protects your finishes and equipment, supports a smooth final inspection, and lets a building open or change hands on schedule. Fine construction dust can also damage HVAC systems and affect indoor air quality if it is not properly removed.",
          "For contractors, outsourcing the cleanup keeps skilled trades focused on building rather than cleaning, and provides a consistent, documented standard for every project handover.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between post-construction cleaning and regular cleaning?",
        answer:
          "Regular cleaning maintains an already-finished space. Post-construction cleaning removes construction-specific debris and ultra-fine dust using specialized equipment, and prepares a newly built or renovated space for inspection and occupancy.",
      },
      {
        question: "How long does post-construction cleaning take?",
        answer:
          "It depends on the size of the space and the amount of debris, but most commercial projects are cleaned in phases over one to several days. A site assessment provides an accurate timeline before work begins.",
      },
      {
        question: "Who is responsible for post-construction cleaning?",
        answer:
          "Responsibility is set in the construction contract. General contractors often hire a specialized post-construction cleaning company to ensure the space meets inspection and handover standards.",
      },
    ],
    related: [
      { label: "Construction Cleanup Process & Checklist", href: "/resources/construction-cleanup-process-checklist" },
      { label: "Post-Construction Cleaning Cost Factors", href: "/resources/post-construction-cleaning-cost" },
      { label: "Our Construction Cleaning Services", href: "/construction-cleaning" },
    ],
  },
  {
    slug: "construction-cleanup-process-checklist",
    title: "Construction Cleanup Process & Checklist",
    metaTitle: "Construction Cleanup Process & Checklist | Imperial Cleaning",
    description:
      "A step-by-step construction cleanup process and checklist - from rough clean to final inspection-ready handover - so your project opens on schedule.",
    category: "Construction Cleaning",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "A reliable construction cleanup follows a repeatable process: assess the site, complete a rough clean, perform the detailed final clean, verify quality against a checklist, and coordinate the final inspection. Following the same steps every time produces consistent, inspection-ready results.",
    sections: [
      {
        heading: "Construction cleanup checklist by area",
        body: [
          "Windows & glass: Remove stickers, labels, paint, and adhesive; clean glass, tracks, and frames.",
          "Floors: Vacuum with HEPA filtration, then mop, buff, or treat based on material (concrete, tile, hardwood, carpet, vinyl).",
          "Surfaces & fixtures: Dust and wipe all horizontal surfaces, ledges, cabinetry, countertops, light fixtures, and HVAC vents.",
          "Restrooms & break areas: Sanitize fixtures, mirrors, and counters; remove construction residue.",
          "Final detail: Spot-clean walls, remove fingerprints and smudges, and complete a punch-list walkthrough.",
        ],
      },
      {
        heading: "How contractors keep cleanup on schedule",
        body: [
          "The biggest scheduling risk is leaving cleanup until the very end. Coordinating cleaning crews at milestones - after drywall, after paint and flooring, and before inspection - keeps the project moving and prevents a last-minute crunch before handover.",
          "Clear documentation also helps: before/after photos, disposal records, and a completion checklist give the owner and inspector confidence that the space meets standards.",
        ],
      },
    ],
    steps: [
      {
        name: "Site assessment",
        text: "Walk the site to evaluate debris volume, surface types, and any inspection or compliance requirements, then build the cleanup plan and timeline.",
      },
      {
        name: "Rough clean",
        text: "Remove large debris and leftover materials, and complete an initial dust removal so finishing trades can work.",
      },
      {
        name: "Final detailed clean",
        text: "Clean every surface, fixture, window, and floor using HEPA filtration and material-appropriate methods.",
      },
      {
        name: "Quality verification",
        text: "Inspect the space against a detailed checklist and address any items before handover.",
      },
      {
        name: "Inspection & handover",
        text: "Coordinate the final inspection, complete touch-ups, and deliver completion documentation.",
      },
    ],
    faqs: [
      {
        question: "What are the phases of construction cleanup?",
        answer:
          "Construction cleanup is typically done in three phases: a rough clean to remove debris, a detailed final clean of every surface, and a touch-up clean before inspection and handover.",
      },
      {
        question: "When should construction cleanup be scheduled?",
        answer:
          "Schedule cleaning at key milestones - after drywall, after paint and flooring, and before final inspection - rather than only at the very end of the project, to keep the timeline on track.",
      },
    ],
    related: [
      { label: "What Is Post-Construction Cleaning?", href: "/resources/what-is-post-construction-cleaning" },
      { label: "Post-Construction Cleaning Cost Factors", href: "/resources/post-construction-cleaning-cost" },
      { label: "Our Construction Cleaning Services", href: "/construction-cleaning" },
    ],
  },
  {
    slug: "post-construction-cleaning-cost",
    title: "Post-Construction Cleaning Cost: What Drives the Price",
    metaTitle: "Post-Construction Cleaning Cost Factors | Imperial Cleaning",
    description:
      "Understand what drives post-construction cleaning cost - square footage, project type, cleanup phase, debris, and access - and how quotes are structured.",
    category: "Buying Guide",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Post-construction cleaning in Idaho and Utah typically runs $0.15 to $0.60 per square foot for most commercial projects, with a single final clean at the lower end and multi-phase programs (rough, final, and touch-up cleans) at the higher end. The total depends on the size of the space, the type of project, the number of cleanup phases, debris volume, and site accessibility. An on-site assessment is the most accurate way to estimate cost.",
    sections: [
      {
        heading: "Typical price ranges",
        body: [
          "Per square foot: Most commercial post-construction cleaning falls between $0.15 and $0.60 per square foot. A standard single-phase final clean of an office or retail space usually lands in the $0.15-$0.30 range, while multi-phase programs, medical builds, and projects with heavy debris run $0.30-$0.60 or more.",
          "By project size: As a rough guide, a 5,000 sq ft office final clean often falls in the $750-$1,500 range; a 20,000 sq ft commercial build with rough and final phases commonly runs $6,000-$12,000. Small remodels may instead be quoted as a flat rate or hourly.",
          "These are planning ranges, not quotes - every project is priced from its actual scope. Free, written quotes are delivered within 24 hours.",
        ],
      },
      {
        heading: "The main factors that affect cost",
        body: [
          "Square footage: Larger spaces take more time and labor, which is the single biggest driver of cost.",
          "Project type: A medical, lab, or clean-room build requires stricter protocols than a standard office or retail build, which affects labor and equipment.",
          "Cleanup phases: A single final clean costs less than a multi-phase program that includes rough, final, and touch-up cleans.",
          "Debris volume and disposal: Heavy debris and specialized disposal requirements increase cost.",
          "Access and scheduling: Multi-story buildings, tight deadlines, and after-hours work can all affect the quote.",
        ],
      },
      {
        heading: "How quotes are typically structured",
        body: [
          "Reputable cleaning companies provide transparent quotes with no hidden fees, structured either per square foot or as a flat rate for the defined scope. For ongoing or multi-phase work, pricing may be broken out by phase.",
          "Always confirm what is included - which surfaces, how many phases, disposal, and any inspection coordination - so you are comparing like-for-like across bids.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does post-construction cleaning cost per square foot?",
        answer:
          "Most commercial post-construction cleaning in Idaho and Utah runs $0.15 to $0.60 per square foot. Single-phase final cleans of standard offices typically fall at $0.15-$0.30; multi-phase programs, medical builds, and heavy-debris projects run $0.30-$0.60 or more. Exact pricing depends on scope - free quotes are provided within 24 hours.",
      },
      {
        question: "How is post-construction cleaning priced?",
        answer:
          "It is typically priced per square foot or as a flat project rate. The estimate reflects the size of the space, project type, number of cleanup phases, debris volume, and site access.",
      },
      {
        question: "Why do post-construction cleaning quotes vary so much?",
        answer:
          "Quotes vary because scope varies. A single final clean of a small office is very different from a multi-phase clean of a large medical facility. An on-site assessment produces the most accurate, comparable estimate.",
      },
    ],
    related: [
      { label: "What Is Post-Construction Cleaning?", href: "/resources/what-is-post-construction-cleaning" },
      { label: "Construction Cleanup Process & Checklist", href: "/resources/construction-cleanup-process-checklist" },
      { label: "Request a Free Quote", href: "/contact" },
    ],
  },
  {
    slug: "commercial-cleaning-vs-janitorial",
    title: "Commercial Cleaning vs. Janitorial Services: What's the Difference?",
    metaTitle: "Commercial Cleaning vs. Janitorial Services | Imperial Cleaning",
    description:
      "Commercial cleaning and janitorial services overlap but aren't identical. Learn the difference, what each covers, and which your facility needs.",
    category: "Commercial Cleaning",
    readTime: "5 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Janitorial services usually refer to routine, day-to-day upkeep - trash, restrooms, vacuuming, and surface cleaning - while commercial cleaning is a broader category that also includes deeper, periodic, and specialized work such as floor care, window cleaning, and post-construction cleanup. Most facilities use a mix of both.",
    sections: [
      {
        heading: "What janitorial services cover",
        body: [
          "Janitorial work is the recurring maintenance that keeps a facility presentable every day: emptying trash, cleaning and restocking restrooms, vacuuming and mopping floors, wiping common surfaces, and tidying break rooms.",
          "It is typically scheduled daily, several times a week, or weekly, and is the foundation of a clean, healthy workplace.",
        ],
      },
      {
        heading: "What commercial cleaning adds",
        body: [
          "Commercial cleaning is the umbrella term that includes janitorial work plus deeper and specialized services: hard-floor stripping and refinishing, carpet extraction, high and low dusting, window cleaning, disinfection programs, and one-time or periodic deep cleans.",
          "It also covers industry-specific needs - medical-grade disinfection, food-safe sanitation, or clean-room protocols - that go beyond routine upkeep.",
        ],
      },
      {
        heading: "Which does your facility need?",
        body: [
          "Most businesses need both: a recurring janitorial program for daily upkeep, plus periodic commercial deep cleaning for floors, carpets, windows, and specialized requirements. A good provider builds a single program that combines them around your schedule and budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is janitorial the same as commercial cleaning?",
        answer:
          "Not exactly. Janitorial services are the routine, recurring upkeep of a facility. Commercial cleaning is a broader category that includes janitorial work plus deeper and specialized services like floor care, window cleaning, and disinfection.",
      },
      {
        question: "Do I need daily janitorial service or periodic deep cleaning?",
        answer:
          "Most facilities benefit from both - a recurring janitorial schedule for daily cleanliness and periodic deep cleaning for floors, carpets, and specialized needs. A provider can combine them into one program.",
      },
    ],
    related: [
      { label: "Our Commercial Cleaning Services", href: "/commercial-cleaning" },
      { label: "What Is Post-Construction Cleaning?", href: "/resources/what-is-post-construction-cleaning" },
      { label: "Request a Free Quote", href: "/contact" },
    ],
  },
];

export const guides: Guide[] = [...coreGuides, ...playbookGuides].map(guide => ({
  ...guide,
  ...(guide.slug === 'post-construction-cleaning-cost' ? constructionCostUpdate : {}),
  dateModified: '2026-09-26',
}));

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

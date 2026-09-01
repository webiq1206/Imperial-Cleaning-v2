/**
 * Playbook guides: RFP templates, checklists, frequency guides, and buying guides
 * for commercial facility managers. Renders at /resources/[slug] when merged with guides.ts.
 */

import type { Guide } from "@/data/guides";

const DATE_PUBLISHED = "2026-09-01";
const DATE_MODIFIED = "2026-09-01";

export const playbookGuides: Guide[] = [
  {
    slug: "commercial-cleaning-rfp-template",
    title: "Commercial Cleaning RFP Template: What to Include",
    metaTitle: "Commercial Cleaning RFP Template | Imperial Cleaning",
    description:
      "Use this commercial cleaning RFP template to define scope, scoring criteria, insurance requirements, and site-walk rules so you receive comparable, qualified bids.",
    category: "Buying Guide",
    readTime: "8 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "A commercial cleaning RFP should define your facility profile, a detailed scope of work, service frequency, quality standards, insurance and compliance requirements, and a clear scoring method. Include a mandatory site walk so vendors price the actual building, not a generic square-footage guess. Imperial Cleaning, based in Idaho Falls since 2015, provides written quotes within 24 hours for facilities across Idaho and Utah.",
    sections: [
      {
        heading: "What belongs in the RFP cover sheet?",
        body: [
          "Start with facility basics: legal entity name, site address, total square footage, number of floors, business hours, and primary contact for scheduling site walks. Note any security requirements, badge access, or after-hours entry rules.",
          "State the contract term you want (typically 12 to 36 months), desired start date, and whether you are rebidding an existing program or launching a new one. Include the number of sites if this is a multi-location award.",
          "List submission deadline, required format (PDF or portal upload), and where questions should be sent. A single Q&A window with written answers shared to all bidders keeps the process fair.",
        ],
      },
      {
        heading: "Scope of work section (copy-paste starter list)",
        body: [
          "Daily tasks: Empty all trash and replace liners; clean and disinfect restrooms (fixtures, mirrors, counters, partitions, floors); wipe high-touch surfaces (door handles, light switches, elevator buttons); vacuum carpeted areas and spot-clean visible spills; mop hard floors in entries, break rooms, and restrooms; tidy break rooms (countertops, sinks, tables).",
          "Weekly tasks: Detail dust horizontal surfaces in offices and conference rooms; clean interior glass and smudges at entries; wipe kitchen appliances and microwave interiors; inspect supply closets and restock from client-provided or vendor-provided inventory (specify which).",
          "Periodic tasks: High and low dusting; carpet extraction; hard-floor scrub and recoat or strip and wax; interior window cleaning; upholstery vacuuming. Define frequencies by area type or attach a frequency matrix.",
          "Exclusions and owner responsibilities: Note who moves furniture, who provides consumables, and whether day porter or porter trash runs are in scope. Ambiguity here is a common source of change orders after award.",
        ],
      },
      {
        heading: "Insurance, compliance, and staffing requirements",
        body: [
          "Require general liability ($1M per occurrence / $2M aggregate is common for commercial accounts), workers compensation as required by state law, and auto liability if the vendor transports equipment or hauls trash off-site. Ask for a certificate of insurance naming your organization as additional insured before start date.",
          "Request proof of bonding if your procurement policy requires it, W-9, business license, and a written statement that all workers are employees or properly documented subcontractors. Ask whether the vendor conducts background checks for staff with after-hours access.",
          "Specify green-product requirements, SDS availability, and any industry rules (HIPAA awareness for medical-adjacent sites, food-safe protocols near production areas). Vendors should describe training and supervision, including who inspects the site and how often.",
        ],
      },
      {
        heading: "Site walk and bid instructions",
        body: [
          "Mandate a site walk for all finalists. Provide a sign-in sheet and a map of the building. Vendors should note floor types by zone, restroom count, special areas (server rooms, labs, warehouses), and any known problem areas (heavy salt at entries, oily machine tracks).",
          "Instruct bidders to price the written scope exactly. Prohibit alternate frequencies unless submitted as a clearly labeled optional line item. Require a fixed monthly price, list of assumptions, and hourly rate for out-of-scope work.",
          "Include a sample service schedule (nightly, 5x weekly, etc.) and your expected holiday policy. Ask how the vendor handles call-outs, fill-in staff, and emergency spills.",
        ],
      },
      {
        heading: "Scoring criteria you can copy into the RFP",
        body: [
          "Price (30 to 40%): Total monthly cost for defined scope, not lowest line item alone. Penalize bids that omit periodic tasks you listed.",
          "Scope compliance (20 to 25%): Did the vendor address every section and frequency without vague language like \"as needed\"?",
          "References and experience (15 to 20%): Similar facility type, size, and schedule. Call at least two references and ask about missed cleans, turnover, and billing accuracy.",
          "Quality and inspection plan (10 to 15%): Written QA process, inspection frequency, reporting format, and response time for deficiencies.",
          "Insurance, safety, and sustainability (10%): Meets minimums, green options if required, documented training.",
          "Interview and site walk notes (5 to 10%): Professionalism, questions asked, understanding of your building. A vendor who skips the walk should not win on price alone.",
        ],
      },
    ],
    steps: [
      {
        name: "Define facility profile and contract term",
        text: "Document square footage, hours, locations, floor types, and desired contract length. Identify internal stakeholders who will score bids.",
      },
      {
        name: "Draft scope and frequency matrix",
        text: "List daily, weekly, and periodic tasks by area. Specify owner vs vendor responsibilities for supplies and furniture moving.",
      },
      {
        name: "Set insurance and compliance minimums",
        text: "Include liability limits, workers comp, additional insured, and any industry-specific requirements.",
      },
      {
        name: "Publish RFP and hold a site walk",
        text: "Share the same Q&A answers with all bidders. Require attendance or allow a documented substitute walk.",
      },
      {
        name: "Score bids with a weighted matrix",
        text: "Compare scope compliance and references, not price alone. Shortlist two to three vendors for final interviews.",
      },
      {
        name: "Award and document transition dates",
        text: "Issue a letter of intent with start date, key contacts, and a 30-day transition plan if switching vendors.",
      },
    ],
    faqs: [
      {
        question: "How long should vendors have to respond to a cleaning RFP?",
        answer:
          "Two to three weeks from publication to submission is typical for a single site. Allow an extra week for multi-location portfolios or if holidays fall in the window.",
      },
      {
        question: "Should price be the top scoring factor?",
        answer:
          "Price should be weighted heavily but not alone. Scope gaps and weak QA processes often cost more than a slightly higher monthly fee through rework, complaints, and turnover.",
      },
      {
        question: "Is a site walk required?",
        answer:
          "Yes, for accurate pricing. Square-footage-only bids miss restroom counts, floor mix, access constraints, and periodic work that drives real cost.",
      },
      {
        question: "What contract length is standard?",
        answer:
          "One to three years is common, often with an annual price review clause. Shorter terms give flexibility; longer terms can stabilize pricing if scope is well defined.",
      },
    ],
    related: [
      { label: "Janitorial Scope of Work Template", href: "/resources/janitorial-scope-of-work-template" },
      { label: "Commercial Cleaning Proposal Checklist", href: "/resources/commercial-cleaning-proposal-checklist" },
      { label: "Request a Free Quote", href: "/contact" },
    ],
  },
  {
    slug: "janitorial-scope-of-work-template",
    title: "Janitorial Scope of Work Template for Commercial Facilities",
    metaTitle: "Janitorial Scope of Work Template | Imperial Cleaning",
    description:
      "Copy-paste janitorial scope of work sections for offices, restrooms, break rooms, and periodic tasks. Define frequencies, standards, and owner responsibilities clearly.",
    category: "Commercial Cleaning",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "A janitorial scope of work lists every task, the frequency for each area, the quality standard expected, and who supplies materials and equipment. Without that detail, two vendors will price different programs and you will compare unequal bids. Use the sections below as a starting template and adjust frequencies to your traffic and facility size.",
    sections: [
      {
        heading: "How should you structure the scope document?",
        body: [
          "Organize by area type: building common areas, private offices, open workspaces, conference rooms, restrooms, break rooms, entries, and any specialty zones (labs, warehouses, retail floors).",
          "For each area, list tasks grouped as daily, weekly, monthly, quarterly, or annual. Assign a frequency code (D, W, M, Q, A) in a matrix so inspectors can audit compliance quickly.",
          "Define measurable standards: \"restrooms stocked and odor-free,\" \"hard floors free of visible debris and sticky residue,\" \"carpet free of visible litter and major spots.\" Vague phrases like \"clean as needed\" create disputes.",
        ],
      },
      {
        heading: "Daily scope items (copy-paste list)",
        body: [
          "Trash: Empty all waste and recycling bins; wipe exterior if splashed; replace liners; remove trash to designated collection point.",
          "Restrooms: Clean and disinfect toilets, urinals, sinks, and counters; polish mirrors; wipe partitions and handles; mop floors with disinfectant; restock toilet paper, towels, and soap.",
          "Common areas: Vacuum carpets and walk-off mats; mop hard floors in entries and elevators; wipe high-touch points; straighten chairs and literature tables lightly.",
          "Break rooms: Wipe tables and counters; clean sink; load/unload dishwasher if provided; remove trash; report low supplies.",
        ],
      },
      {
        heading: "Weekly and periodic scope items",
        body: [
          "Weekly: Dust desk surfaces, window sills, and ledges in offices; detail clean conference tables and phones; spot-clean interior glass; wipe kitchen appliance fronts; flush floor drains in mechanical rooms if in scope.",
          "Monthly: High dusting (reachable without ladder over 6 feet may be excluded); vacuum upholstered furniture in common areas; machine-scrub hard floors in heavy traffic zones; clean baseboards in main corridors.",
          "Quarterly or annual: Carpet extraction; full strip and wax on VCT; interior window cleaning; deep clean of kitchen appliances; pressure wash exterior entries if included.",
          "Match periodic work to floor type: VCT in schools and clinics often needs quarterly strip and wax in main aisles; carpeted offices may need extraction twice per year in high traffic paths.",
        ],
      },
      {
        heading: "Staffing, supplies, and inspection criteria",
        body: [
          "State expected service window (e.g., nightly after 6 p.m., five nights per week) and maximum crew size. Note whether a lead janitor or day porter is required for daytime touch-ups.",
          "Specify who provides consumables (liners, paper, soap), equipment (vacuums, auto-scrubbers), and PPE. If the client supplies paper goods, the vendor should still verify stock during each visit.",
          "Inspection criteria: Use a simple scorecard (1 to 5) per area with a minimum passing score (often 4). Failed items require re-clean within 24 hours. Common failure points: missed restrooms, overflowing trash, visible floor debris at entries, and streaky glass.",
        ],
      },
    ],
    steps: [
      {
        name: "Inventory areas and floor types",
        text: "Walk the building and list every zone with square footage, floor material, and fixture counts.",
      },
      {
        name: "Assign task frequencies",
        text: "Set daily, weekly, and periodic tasks based on traffic, industry needs, and budget.",
      },
      {
        name: "Define standards and supply responsibilities",
        text: "Write pass/fail criteria and who buys liners, paper, soap, and specialty chemicals.",
      },
      {
        name: "Build the frequency matrix",
        text: "Create a grid of areas vs tasks with D/W/M/Q/A codes for vendors and inspectors.",
      },
      {
        name: "Review with stakeholders",
        text: "Confirm scope with facility, HR, and safety teams before sending to vendors.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between scope of work and a cleaning spec?",
        answer:
          "The scope lists tasks and frequencies. The spec adds quality standards, products allowed, equipment requirements, and inspection methods. Many RFPs combine both in one document.",
      },
      {
        question: "How detailed should restroom tasks be?",
        answer:
          "List each fixture type, disinfectant requirement, restock items, and floor method. Restrooms are the most inspected area and the most common source of complaints.",
      },
      {
        question: "Should furniture moving be in the janitorial scope?",
        answer:
          "Usually no for nightly service. Periodic carpet cleaning and floor care should state whether light moving (chairs) is included and when heavy moving requires a separate quote.",
      },
      {
        question: "How often should the scope be updated?",
        answer:
          "Review annually or when occupancy, layout, or hours change. Add new areas after renovations before vendors rebid.",
      },
    ],
    related: [
      { label: "Office Cleaning Frequency Guide", href: "/resources/office-cleaning-frequency-guide" },
      { label: "Commercial Cleaning RFP Template", href: "/resources/commercial-cleaning-rfp-template" },
      { label: "Janitorial Services", href: "/janitorial-services" },
    ],
  },
  {
    slug: "switch-commercial-cleaning-companies",
    title: "How to Switch Commercial Cleaning Companies Without Disruption",
    metaTitle: "Switch Commercial Cleaning Companies | Imperial Cleaning",
    description:
      "Missed cleans, crew turnover, and billing surprises are signs it is time to switch. Plan a transition week, keys, inspections, and overlap so your facility stays clean.",
    category: "Buying Guide",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Switch commercial cleaning vendors by running a structured transition: document current scope gaps, set a parallel start date, transfer keys and alarm codes securely, complete a joint walkthrough, and inspect daily during the first two weeks. Done well, occupants never notice a \"dirty week.\" Imperial Cleaning supports smooth changeovers across Idaho and Utah with licensed, insured crews and quotes within 24 hours.",
    sections: [
      {
        heading: "When is it time to switch providers?",
        body: [
          "Missed cleans and inconsistent restrooms are the most visible failures. If you are doing walk-throughs with a deficiency list every week, the program is underperforming.",
          "High crew turnover means new people who do not know the building, often paired with weak supervision. Frequent no-shows without backup coverage are a red flag.",
          "Poor communication (no response to emails, surprise schedule changes) and billing surprises (extra charges not in the contract, vague invoices) erode trust even when cleaning is acceptable.",
          "Weak inspections: if the vendor marks tasks complete but your team finds dust, full trash, or dull floors, their QA process is broken. You should not be the only inspection layer.",
        ],
      },
      {
        heading: "How do you plan the transition timeline?",
        body: [
          "Start vendor search 60 to 90 days before contract end if possible. Allow time for site walks, references, and legal review.",
          "Set a hard start date for the new vendor and a last service date for the outgoing vendor. Avoid a gap weekend; overlap one clean if both parties agree and security allows.",
          "Issue written notice per your contract (typically 30 to 60 days). Request final keys, codes, and any client-owned equipment the outgoing vendor holds.",
          "Schedule a transition walk with the new vendor during daylight hours. Photograph current conditions and note deferred maintenance (heavy floor buildup, stained carpet) so expectations are clear.",
        ],
      },
      {
        heading: "What should you transfer on day one?",
        body: [
          "Keys, fobs, alarm codes, and after-hours contact tree. Update security and reception with new crew names and photos if required.",
          "Written scope, frequency matrix, supply closet inventory, and MSDS for any chemicals stored on site. Clarify who orders paper goods going forward.",
          "Open deficiency list from the old vendor: either the new vendor quotes a one-time reset clean or you schedule a construction-style detail before routine service starts.",
          "Point of contact on your side for lockouts, spills, and supply emergencies. Response time expectations should match the contract.",
        ],
      },
      {
        heading: "How do you avoid a dirty week during changeover?",
        body: [
          "Book a detailed initial clean or \"reset\" if the outgoing vendor tapered service. Entries, restrooms, and break rooms should be addressed before the first regular night.",
          "Inspect nightly for the first ten business days. Use the same scorecard you will use monthly. Early corrections train habits faster than complaints a month later.",
          "Hold a weekly check-in for the first month: scope questions, access issues, and supply counts. Adjust frequencies if occupancy changed since the RFP.",
          "Do not change scope mid-transition. Freeze add-ons until the baseline program is stable unless safety requires immediate action.",
        ],
      },
    ],
    steps: [
      {
        name: "Document failures and current scope",
        text: "Collect inspection logs, photos, and invoices. Note what the contract required vs what was delivered.",
      },
      {
        name: "Rebid or select a new vendor",
        text: "Run a condensed RFP or interview process with mandatory site walk and reference checks.",
      },
      {
        name: "Set dates and notify the incumbent",
        text: "Follow contract notice rules. Schedule last clean and key return.",
      },
      {
        name: "Conduct a transition walkthrough",
        text: "Walk the building with the new vendor; flag floor types, sensitive areas, and deferred deep cleaning.",
      },
      {
        name: "Run overlap or reset clean",
        text: "Ensure restrooms, trash, and entries are addressed before the first regular service night.",
      },
      {
        name: "Inspect daily for two weeks",
        text: "Score each area, require rework on failures, and confirm communication channels work.",
      },
    ],
    faqs: [
      {
        question: "Can we switch vendors before the contract ends?",
        answer:
          "Only if your agreement allows early termination or mutual release. Otherwise plan for the notice period to avoid fees and disputes over keys and equipment.",
      },
      {
        question: "Should both vendors clean during the same week?",
        answer:
          "Usually no, except a one-time overlap for a reset clean if the outgoing vendor left the site below standard. Security and liability must approve dual access.",
      },
      {
        question: "Who owns keys during the switch?",
        answer:
          "Your facility team should control master keys. Vendors should return all copies on their last day; issue new sets to the incoming vendor with a signed log.",
      },
      {
        question: "How long until the new program stabilizes?",
        answer:
          "Most buildings settle in two to four weeks if scope is clear and inspections are consistent. Complex multi-floor sites may need a full billing cycle.",
      },
    ],
    related: [
      { label: "How to Compare Commercial Cleaning Companies", href: "/resources/how-to-compare-commercial-cleaning-companies" },
      { label: "Commercial Cleaning vs. Janitorial", href: "/resources/commercial-cleaning-vs-janitorial" },
      { label: "Commercial Cleaning Services", href: "/commercial-cleaning" },
    ],
  },
  {
    slug: "office-cleaning-frequency-guide",
    title: "Office Cleaning Frequency Guide by Size and Traffic",
    metaTitle: "Office Cleaning Frequency Guide | Imperial Cleaning",
    description:
      "Match office cleaning frequency to square footage, headcount, and restroom traffic. Daily, weekly, and periodic tasks for small offices, workplaces, and campuses.",
    category: "Commercial Cleaning",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Office cleaning frequency should follow facility size, daily occupancy, and restroom count more than a default \"nightly\" label. Small offices under 5,000 sq ft with low traffic may need three nights per week; larger workplaces with shared restrooms and kitchens usually need five to seven nights. Add periodic floor and carpet work on a calendar, not when floors look bad.",
    sections: [
      {
        heading: "Small offices (under 5,000 sq ft, under 25 people)",
        body: [
          "Typical schedule: three to five nights per week, or daily if clients visit regularly or one shared restroom serves the whole suite.",
          "Daily focus when scheduled: trash, restroom disinfecting, kitchen wipe-down, vacuum open areas and entries, mop hard floors at entries.",
          "Weekly add-ons: dust desks and sills in private offices, detail conference room, spot glass at entry.",
          "Periodic: carpet extraction one to two times per year; hard-floor scrub or buff if VCT or LVT in entries; high dusting quarterly.",
        ],
      },
      {
        heading: "Mid-size offices (5,000 to 25,000 sq ft, 25 to 150 people)",
        body: [
          "Typical schedule: five nights per week; consider day porter for restrooms and spills if occupancy is high during business hours.",
          "Daily: all trash and recycling; every restroom fully serviced; vacuum all carpet zones; mop hard floors in corridors, kitchen, and restrooms; wipe high-touch surfaces in lobbies and elevators.",
          "Weekly: dust workstations and conference furniture; clean kitchen appliances; detail lobby glass; inspect supply closets.",
          "Periodic: carpet extraction in traffic lanes twice per year; quarterly machine scrub on hard floors in main corridors; strip and wax VCT annually or semi-annually depending on wear.",
        ],
      },
      {
        heading: "Large campuses and multi-floor offices (25,000+ sq ft)",
        body: [
          "Typical schedule: nightly seven days or five nights plus weekend porter for trash in food service areas; day porter team for restrooms and conference turnover.",
          "Daily: zone-based trash; every restroom on every floor; elevator and lobby detail; vacuum and mop per floor plan; escalator landings if applicable.",
          "Weekly: full dusting program rotated by floor; kitchen deep wipe; meeting room reset standards documented.",
          "Periodic: rolling carpet extraction by wing; quarterly strip and wax in main aisles; annual full floor refinish in VCT areas; window cleaning schedule by facade exposure.",
        ],
      },
      {
        heading: "Restrooms, kitchens, and traffic drivers",
        body: [
          "Restroom count vs headcount is the strongest driver of nightly need. A common rule: one restroom visit clean per 25 to 40 daily users minimum; heavy use buildings need mid-day service.",
          "Kitchens with dishwashers, microwaves, and daily food prep need nightly service; kitchenettes with only a sink may be three times weekly in low-traffic sites.",
          "Weather and entry mats: Idaho and Utah winters increase salt and moisture at entries; daily mat vacuum and frequent hard-floor mop reduce slip risk and floor damage.",
          "After-hours vs day cleaning: nightly works when desks are empty; day porter supplements high traffic restrooms and conference rooms without moving laptops.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is nightly office cleaning always necessary?",
        answer:
          "No. Low-traffic professional offices can use a three-night schedule if restrooms and trash still meet health and appearance standards. Increase frequency when occupancy or client visits rise.",
      },
      {
        question: "How often should office carpets be extracted?",
        answer:
          "Most offices benefit from one to two extractions per year in open areas and quarterly spot treatment in break rooms. Heavy traffic paths may need more.",
      },
      {
        question: "Should conference rooms be cleaned daily?",
        answer:
          "Vacuum and wipe tables nightly if used daily; otherwise include in weekly detail. Day porter service helps between back-to-back meetings.",
      },
      {
        question: "What changes frequency after a renovation?",
        answer:
          "Post-construction dust may require daily high dusting for several weeks, then revert to baseline. Update the scope when headcount or layout changes.",
      },
    ],
    related: [
      { label: "Office Cleaning Services", href: "/office-cleaning" },
      { label: "Janitorial Scope of Work Template", href: "/resources/janitorial-scope-of-work-template" },
      { label: "Night Cleaning vs Day Cleaning", href: "/resources/night-cleaning-vs-day-cleaning" },
    ],
  },
  {
    slug: "how-to-compare-commercial-cleaning-companies",
    title: "How to Compare Commercial Cleaning Companies",
    metaTitle: "Compare Commercial Cleaning Companies | Imperial Cleaning",
    description:
      "Compare cleaning vendors on scope match, references, QA inspections, staffing model, and insurance, not monthly price alone. Use this checklist before you sign.",
    category: "Buying Guide",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Compare commercial cleaning companies by checking that each bid matches your written scope, calling references with specific questions, reviewing inspection and staffing plans, and verifying insurance. The lowest monthly price often hides skipped periodic work or weak supervision. Imperial Cleaning has served Idaho and Utah since 2015 as a licensed, insured, and bonded provider with quotes in 24 hours.",
    sections: [
      {
        heading: "Are they pricing the same scope?",
        body: [
          "Line up bids task by task against your frequency matrix. Flag missing periodic work (carpet extraction, strip and wax), unclear \"as needed\" language, and different night counts.",
          "Normalize price: calculate cost per night and cost per square foot for the same service week. Ask what is excluded (liners, paper, after-hours surcharges).",
          "Watch for startup discounts that expire in 90 days without a clear renewal price. Ask for year-two pricing assumptions in writing.",
        ],
      },
      {
        heading: "What should you ask references?",
        body: [
          "Ask about missed cleans in the last 90 days, response time when something was wrong, and whether the same lead cleaner stays on site.",
          "Billing accuracy: surprise charges, invoice detail, and how add-on work is approved.",
          "Inspection quality: does the vendor provide reports or only fix issues when the client complains?",
          "Call references with similar square footage and schedule (nightly vs weekly), not just the vendor's favorite account.",
        ],
      },
      {
        heading: "Staffing, supervision, and backup coverage",
        body: [
          "Confirm employees vs subcontractors and who trains new staff on your building. High turnover without a dedicated lead is a common failure point.",
          "Ask who inspects, how often, and what happens when a cleaner is sick. You need a written backup plan, not a verbal promise.",
          "For multi-shift sites, clarify whether one vendor owns all hours or if day porter is a separate line item.",
        ],
      },
      {
        heading: "Insurance, safety, and products",
        body: [
          "Match certificates to your RFP minimums: general liability, workers comp, auto if applicable. Additional insured should be available before start.",
          "Green products, disinfectant protocols, and SDS access matter for offices with allergy-sensitive staff and for medical-adjacent spaces.",
          "Safety: slip hazard procedures for wet floors, lockout/tagout awareness near mechanical rooms, and reporting for broken fixtures or leaks.",
        ],
      },
    ],
    steps: [
      {
        name: "Build a comparison spreadsheet",
        text: "Rows for each scope item and columns for each vendor with price, frequency, and notes.",
      },
      {
        name: "Normalize and flag gaps",
        text: "Calculate per-night cost and mark missing periodic tasks or vague language.",
      },
      {
        name: "Call three references per finalist",
        text: "Use the same script: missed cleans, turnover, billing, inspections.",
      },
      {
        name: "Interview operations lead",
        text: "Ask about supervision, backup coverage, and inspection tools.",
      },
      {
        name: "Verify insurance and contract terms",
        text: "Review termination, price increases, and change-order process before award.",
      },
    ],
    faqs: [
      {
        question: "How many bids should we collect?",
        answer:
          "Three qualified bids after site walks is standard for single-site awards. Multi-location portfolios may run a formal RFP with more respondents.",
      },
      {
        question: "Is per-square-foot pricing comparable across vendors?",
        answer:
          "Only if scope and nights per week are identical. Per-square-foot helps sanity-check totals but should not replace line-item review.",
      },
      {
        question: "Should we visit a vendor's other accounts?",
        answer:
          "If possible, walk a similar facility they service. Photos in proposals are useful but not a substitute for seeing nightly results.",
      },
      {
        question: "What if one bid is far lower than the others?",
        answer:
          "Audit for omitted tasks, unrealistic labor hours, or sub-minimum insurance. Extremely low bids often rise after contract start or service suffers.",
      },
    ],
    related: [
      { label: "Commercial Cleaning RFP Template", href: "/resources/commercial-cleaning-rfp-template" },
      { label: "Commercial Cleaning Cost", href: "/commercial-cleaning-cost" },
      { label: "Contact Imperial Cleaning", href: "/contact" },
    ],
  },
  {
    slug: "commercial-cleaning-proposal-checklist",
    title: "Commercial Cleaning Proposal Checklist for Facility Managers",
    metaTitle: "Commercial Cleaning Proposal Checklist | Imperial Cleaning",
    description:
      "Review every cleaning proposal for scope match, frequencies, periodic tasks, insurance, staffing, and inspection plans before you sign. Use this checklist line by line.",
    category: "Buying Guide",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Before you accept a commercial cleaning proposal, verify it includes a line-item scope, service schedule, periodic floor and carpet tasks, insurance certificates, named supervision, and a written QA process. Missing any of those items leads to disputes within the first billing cycle. Use the checklist below on every bid you review.",
    sections: [
      {
        heading: "Cover page and pricing clarity",
        body: [
          "Legal business name, address, and contact; proposal date and validity period (30 to 60 days is typical).",
          "Fixed monthly price for the defined scope, nights per week, and holidays covered. Hourly rate for approved extra work.",
          "Start date assumptions and any one-time startup or reset clean quoted separately.",
          "Payment terms and annual adjustment method (CPI cap, fixed percent, or re-bid trigger).",
        ],
      },
      {
        heading: "Scope and frequency verification",
        body: [
          "Task list matches your RFP or scope template: daily, weekly, and periodic sections present.",
          "Restroom count and floor types acknowledged; no generic \"office areas\" only language.",
          "Supplies: who provides liners, paper, soap, and specialty chemicals. Equipment provided by vendor should be listed (vacuums, mop systems, auto-scrubber if needed).",
          "Exclusions explicit: window cleaning above reach, exterior pressure wash, pest control, hazardous waste.",
        ],
      },
      {
        heading: "Quality, staffing, and safety",
        body: [
          "Named account manager and field supervisor with phone and email.",
          "Inspection frequency and format (APP, paper log, client portal). Deficiency rework SLA (often 24 hours).",
          "Staffing plan: number of cleaners per night, lead cleaner, backup coverage process.",
          "Training, background checks if required, and safety procedures for wet floors and chemical storage.",
        ],
      },
      {
        heading: "Insurance and contract attachments",
        body: [
          "COI with limits meeting your minimums; additional insured available before start.",
          "Workers compensation and auto if applicable; bond letter if required.",
          "Sample service agreement attached: termination notice, liability cap, indemnity, and change-order process.",
          "References list with similar facilities; call before award, not after.",
        ],
      },
    ],
    steps: [
      {
        name: "Check pricing and validity dates",
        text: "Confirm monthly total, nights per week, holidays, and proposal expiration.",
      },
      {
        name: "Line up scope against your template",
        text: "Mark missing tasks, vague frequencies, and supply gaps.",
      },
      {
        name: "Review QA and staffing sections",
        text: "Require named contacts, inspection cadence, and backup coverage in writing.",
      },
      {
        name: "Verify insurance samples",
        text: "Match limits to policy; confirm additional insured process.",
      },
      {
        name: "Call references and note scores",
        text: "Use the same questions for each vendor and record answers on the checklist.",
      },
      {
        name: "Sign only with complete attachments",
        text: "Do not start without executed agreement, scope exhibit, and COI path documented.",
      },
    ],
    faqs: [
      {
        question: "Should periodic floor care be in the base price?",
        answer:
          "It should be listed either in the monthly fee or as scheduled line items with frequencies. If absent, assume it is not included.",
      },
      {
        question: "What proposal validity period is fair?",
        answer:
          "Thirty to sixty days from site walk is standard. Labor and supply costs change; rebid if the proposal ages beyond that window.",
      },
      {
        question: "Is a verbal promise of daily inspections enough?",
        answer:
          "No. Require inspection frequency and reporting format in the written scope or service level attachment.",
      },
      {
        question: "Can we accept a proposal without a contract sample?",
        answer:
          "You can shortlist, but do not award until you review termination, price increase, and insurance clauses in the full agreement.",
      },
    ],
    related: [
      { label: "Commercial Cleaning RFP Template", href: "/resources/commercial-cleaning-rfp-template" },
      { label: "Switch Commercial Cleaning Companies", href: "/resources/switch-commercial-cleaning-companies" },
      { label: "Janitorial Services", href: "/janitorial-services" },
    ],
  },
  {
    slug: "night-cleaning-vs-day-cleaning",
    title: "Night Cleaning vs Day Cleaning: Which Schedule Fits?",
    metaTitle: "Night Cleaning vs Day Cleaning | Imperial Cleaning",
    description:
      "Night cleaning avoids desk disruption; day porters handle restrooms and spills while staff are present. Compare safety, access, and costs for your office schedule.",
    category: "Commercial Cleaning",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Night cleaning runs when the building is empty, so crews can vacuum, mop, and empty trash without interrupting work. Day cleaning and day porter service handle restrooms, spills, and conference resets while people are on site. Most offices use nightly janitorial for baseline work plus day porters when traffic and client visits demand visible upkeep during business hours.",
    sections: [
      {
        heading: "When does night cleaning work best?",
        body: [
          "Open offices with dense desks benefit from empty floors: vacuums, mop buckets, and trash carts do not weave through staff.",
          "Retail back-of-house, medical offices after patient hours, and warehouses after shifts end are natural night targets.",
          "Security and access must be clear: alarm codes, lone-worker policies, and lighting. After-hours work may carry a labor premium in some markets.",
          "Inspection happens the next morning: facility managers should walk entries and restrooms early to catch misses before tenants arrive.",
        ],
      },
      {
        heading: "When is day cleaning or day porter service better?",
        body: [
          "High-traffic restrooms and lobbies often need mid-day checks that nightly service alone cannot provide.",
          "Client-facing sites (dealerships, showrooms, professional services) benefit from visible floor care and quick spill response during open hours.",
          "Day porters focus on touch-ups, conference room flips, kitchen restock, and escorting vendors, not full floor strip and wax.",
          "Day work avoids alarm arming issues but must be coordinated with IT, confidential meetings, and safety signage for wet floors.",
        ],
      },
      {
        heading: "Safety, security, and staffing differences",
        body: [
          "Night crews work with fewer witnesses; background checks and key control matter. Document who can access server rooms and cash areas.",
          "Day staff interact with employees and visitors; customer service skills and uniform standards are part of the job.",
          "Mixed models need clear task splits so night crews do not skip work assuming day porters will catch it, and vice versa.",
        ],
      },
      {
        heading: "Cost and quality considerations",
        body: [
          "Night premiums may apply but can be offset by faster production when floors are empty. Day porter hours are usually priced separately from nightly janitorial.",
          "Quality failures show differently: night misses appear at opening; day gaps are visible immediately. Match inspection times to schedule.",
          "Floor care (strip, wax, scrub) is still mostly after hours due to dry and cure times and slip risk.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we use only day cleaning with no night crew?",
        answer:
          "Small low-traffic suites sometimes use early morning or midday cleans, but most mid-size and larger offices still need empty-floor time for thorough vacuuming and mopping.",
      },
      {
        question: "What is the difference between day cleaning and a day porter?",
        answer:
          "Day cleaning is a full clean during business hours. A day porter handles light continuous upkeep: restrooms, spills, trash touches, and meeting support.",
      },
      {
        question: "Does night cleaning affect energy bills?",
        answer:
          "Lights and HVAC may run longer for after-hours crews. Some buildings schedule cleaning zones to limit utility impact.",
      },
      {
        question: "Which schedule reduces slip-and-fall risk?",
        answer:
          "Both require wet-floor signage. Night mopping before dry time can be risky at early openings; day porters must rope off areas until dry.",
      },
    ],
    related: [
      { label: "Day Porter Services", href: "/day-porter-services" },
      { label: "Office Cleaning Frequency Guide", href: "/resources/office-cleaning-frequency-guide" },
      { label: "Office Cleaning Services", href: "/office-cleaning" },
    ],
  },
  {
    slug: "what-does-a-day-porter-do",
    title: "What Does a Day Porter Do? Duties and Scope",
    metaTitle: "What Does a Day Porter Do? | Imperial Cleaning",
    description:
      "A day porter keeps lobbies, restrooms, and common areas presentable during business hours: spills, trash touches, restocking, and meeting support. Typical duties and scope.",
    category: "Commercial Cleaning",
    readTime: "5 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "A day porter is an on-site cleaner who works during business hours to handle spills, restroom checks, trash touches, lobby presentation, and conference room resets while employees and visitors are present. They supplement nightly janitorial service; they do not replace deep floor care or full restroom programs unless specifically scoped.",
    sections: [
      {
        heading: "Core day porter duties during open hours",
        body: [
          "Monitor and refresh restrooms on a loop: wipe fixtures, pick up litter, restock paper and soap, report outages and clogs.",
          "Respond to spills and quick cleanups in lobbies, cafeterias, and corridors with proper signage and dry time.",
          "Empty overflowing trash and recycling in high-use areas before nightly crew arrives.",
          "Straighten lobby furniture, wipe glass doors and fingerprints at entries, and replace entrance mats if dislodged.",
        ],
      },
      {
        heading: "Meeting rooms, events, and tenant support",
        body: [
          "Reset conference rooms between meetings: wipe tables, align chairs, remove cups, vacuum if visible debris.",
          "Set up or break down light layouts if in scope (tables/chairs only when facilities approves).",
          "Escort or coordinate with vendors delivering supplies; report facilities issues (lights out, leaks, HVAC odors).",
          "Not in default scope: moving heavy furniture, IT setup, or outdoor maintenance unless contracted.",
        ],
      },
      {
        heading: "How day porters differ from nightly janitors",
        body: [
          "Night janitors perform full trash removal, complete restroom programs, floor mopping, and wide-area vacuuming when the building is empty.",
          "Day porters maintain appearance between those deep cleans. Without nightly service, porters cannot keep up in mid-size and larger buildings.",
          "Floor strip, wax, carpet extraction, and high dusting remain periodic tasks for specialized crews, usually after hours.",
        ],
      },
      {
        heading: "Staffing levels and inspection",
        body: [
          "One porter per 50,000 to 100,000 sq ft is a rough starting point for office campuses; dealerships and medical lobbies may need denser coverage.",
          "Porters need a defined route and check frequency (e.g., restrooms every 90 minutes in high traffic).",
          "Supervisors should spot-check logs or use a mobile inspection app. Common failures: missed restroom loops during lunch rush and slow spill response.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do day porters clean private offices?",
        answer:
          "Usually not daily unless scoped. They focus on common areas, restrooms, and conference rooms. Private office cleaning stays on the nightly janitorial program.",
      },
      {
        question: "Can one day porter replace nightly cleaning?",
        answer:
          "Only in very small, low-traffic suites. Most facilities need both roles for different tasks and hours.",
      },
      {
        question: "What uniforms and access do day porters need?",
        answer:
          "Branded uniforms or badges help reception identify them. Access should be limited to areas required for duties, with key logs maintained.",
      },
      {
        question: "How is day porter service priced?",
        answer:
          "Typically hourly or monthly block hours based on coverage window (e.g., 8 a.m. to 5 p.m.). Define tasks so hours are not spent on out-of-scope work.",
      },
    ],
    related: [
      { label: "Day Porter Services", href: "/day-porter-services" },
      { label: "Night Cleaning vs Day Cleaning", href: "/resources/night-cleaning-vs-day-cleaning" },
      { label: "Commercial Cleaning Services", href: "/commercial-cleaning" },
    ],
  },
  {
    slug: "commercial-floor-strip-and-wax-cost",
    title: "Commercial Floor Strip and Wax Cost: Planning Ranges",
    metaTitle: "Commercial Floor Strip and Wax Cost | Imperial Cleaning",
    description:
      "Commercial VCT strip and wax is often quoted per square foot. See directional cost bands and what changes price: buildup, coats, furniture, after-hours, and floor condition.",
    category: "Buying Guide",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Commercial strip and wax for VCT and similar resilient tile is commonly quoted per square foot, with planning ranges often falling between $0.25 and $0.70 per sq ft for standard office and retail aisles in Idaho and Utah. Heavy buildup, extra finish coats, after-hours work, and moving furniture push toward the upper band. These are estimates for budgeting; site walks produce accurate quotes.",
    sections: [
      {
        heading: "Typical per-square-foot planning bands",
        body: [
          "Light maintenance coat (scrub and recoat, no full strip): roughly $0.15 to $0.30 per sq ft when floors are in good shape and only top coats are refreshed.",
          "Standard strip and wax (one strip, multiple finish coats): roughly $0.25 to $0.50 per sq ft for open aisles with minimal furniture moving on VCT in average condition.",
          "Heavy restoration (multiple strip passes, gum and buildup removal, extra coats): roughly $0.45 to $0.70+ per sq ft for neglected floors or high-traffic healthcare and retail corridors.",
          "Always confirm whether price includes furniture moving, materials, disposal of strip slurry, and dry/cure time restrictions.",
        ],
      },
      {
        heading: "What changes the price on a strip and wax job?",
        body: [
          "Floor condition: layers of old finish, adhesive residue, and embedded dirt require more labor and chemistry.",
          "Square footage and layout: small fragmented rooms cost more per foot than open retail aisles due to setup time.",
          "Number of finish coats: high-gloss or high-traffic specs may call for three to five coats vs two.",
          "After-hours and security: work when the building is empty may carry premium labor; alarm access adds coordination time.",
          "Furniture and fixtures: moving chairs is often included lightly; desks, racks, and retail fixtures may be extra or owner responsibility.",
        ],
      },
      {
        heading: "Floor types and method notes",
        body: [
          "VCT (vinyl composition tile) is the most common strip-and-wax surface in schools, clinics, and back-office areas.",
          "LVT and luxury vinyl may not use traditional strip programs; manufacturers often specify scrub and recoat or specialized cleaners. Using VCT methods on LVT can damage material.",
          "Polished concrete and terrazzo use different refinishing processes not covered by classic strip and wax pricing.",
          "Frequency affects cost per year: annual strip in main aisles plus quarterly scrub-and-recoat in some buildings costs less long term than waiting until floors are black with buildup.",
        ],
      },
      {
        heading: "How to get comparable quotes",
        body: [
          "Specify square footage by zone, desired sheen, number of coats, and furniture expectations. Ask each vendor to note strip chemistry and dry time before reopening.",
          "Request before photos and a written schedule if phasing across wings. Compare warranty or callback period for scuff and powdering issues.",
          "For budgeting multi-site portfolios, use mid-range assumptions until each site is walked. Imperial Cleaning provides written quotes within 24 hours after assessment.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should VCT floors be stripped and waxed?",
        answer:
          "Many offices and schools strip main traffic lanes once or twice per year with interim scrub-and-recoat quarterly. Low-traffic back offices may need less.",
      },
      {
        question: "Why do strip and wax quotes vary so much?",
        answer:
          "Condition, coats, furniture moving, and after-hours access change labor hours. Per-square-foot bids should state what is included.",
      },
      {
        question: "Can employees walk on floors immediately after waxing?",
        answer:
          "No. Finish needs dry and cure time, often overnight for full hardness. Vendors should post barriers and reopen times in writing.",
      },
      {
        question: "Is strip and wax included in janitorial contracts?",
        answer:
          "Sometimes as periodic line items. If not listed with frequency, it is usually extra. Confirm in the scope before signing.",
      },
    ],
    related: [
      { label: "Commercial Floor Care", href: "/commercial-floor-care" },
      { label: "Commercial Cleaning Cost", href: "/commercial-cleaning-cost" },
      { label: "Contact for a Quote", href: "/contact" },
    ],
  },
  {
    slug: "medical-office-cleaning-checklist",
    title: "Medical Office Cleaning Checklist: Nightly and Periodic Tasks",
    metaTitle: "Medical Office Cleaning Checklist | Imperial Cleaning",
    description:
      "Practical medical office cleaning checklist for waiting rooms, exam rooms, restrooms, and staff areas. Nightly disinfecting tasks plus weekly and periodic deep cleans.",
    category: "Commercial Cleaning",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Medical office cleaning focuses on waiting and reception areas, exam rooms, restrooms, and staff break areas with nightly disinfecting of high-touch surfaces and trash removal, plus scheduled deep cleans for floors and upholstery. This checklist supports outpatient clinics and dental offices; hospitals and surgical suites require separate infection-control programs.",
    sections: [
      {
        heading: "Nightly tasks: waiting and reception",
        body: [
          "Empty trash and sharps containers only if your contract and licensing allow; otherwise report full sharps to clinical staff.",
          "Disinfect waiting chairs arms, reception counter, pens/sign-in tablets (if approved), door handles, and kiosk touch points.",
          "Vacuum carpets and mats; mop hard floors with hospital-grade disinfectant in entries and waiting areas.",
          "Straighten magazines and furniture; wipe glass at entry; restock patient-facing supplies only if clinic staff designates which items cleaners may touch.",
        ],
      },
      {
        heading: "Nightly tasks: exam and procedure rooms",
        body: [
          "Follow clinic protocol: many practices clean clinical surfaces in-house; janitorial scope may be floors, trash, and general disinfecting only when rooms are empty and cleared by staff.",
          "When in scope after clinical wipe-down: mop floors, empty trash, wipe exterior of equipment, light switches, and door handles with EPA-registered disinfectant.",
          "Never open red bag waste or handle contaminated instruments unless explicitly trained and contracted.",
          "Report blood or fluid spills to clinical lead immediately; do not assume standard janitorial response.",
        ],
      },
      {
        heading: "Restrooms, staff areas, and back office",
        body: [
          "Full restroom service: disinfect fixtures, partitions, handles, counters, mirrors; mop floors; restock paper and soap.",
          "Break room: wipe counters, table, appliance fronts, sink; remove trash; mop floor.",
          "Office and records areas: vacuum, empty trash, dust horizontal surfaces weekly if not nightly.",
          "Supply closets: note low stock of liners and paper; many clinics keep clinical supplies separate from janitorial stores.",
        ],
      },
      {
        heading: "Weekly and periodic medical office tasks",
        body: [
          "Weekly: high dust vents and ledges in waiting areas; detail mop edges; clean interior glass partitions; disinfect chair rails in waiting rows.",
          "Monthly: machine scrub hard floors in corridors; extract carpet in waiting areas if spills and stains accumulate.",
          "Quarterly: strip and wax VCT in halls if specified; upholstery vacuum for fabric waiting chairs.",
          "Inspection focus: restrooms, waiting touch points, entry floors, and odor control. Document deficiencies for infection control coordinator review.",
        ],
      },
    ],
    steps: [
      {
        name: "Confirm clinical vs janitorial boundaries",
        text: "Meet with practice manager to list what clinical staff cleans vs nightly crew.",
      },
      {
        name: "Set disinfectant and PPE standards",
        text: "Use clinic-approved EPA products; train on PPE, spills, and sharps policy.",
      },
      {
        name: "Execute nightly waiting and restroom program",
        text: "Follow touch-point list and floor care route every service night.",
      },
      {
        name: "Schedule weekly and periodic deep tasks",
        text: "Calendar scrub, extraction, and strip/wax by zone traffic.",
      },
      {
        name: "Inspect with a scored checklist",
        text: "Review results with office manager weekly during first month, then monthly.",
      },
    ],
    faqs: [
      {
        question: "Do cleaners disinfect exam tables?",
        answer:
          "Only if the practice adds that task to written scope and provides training. Many clinics handle table turnover in-house between patients.",
      },
      {
        question: "What products are used in medical offices?",
        answer:
          "EPA-registered hospital-grade disinfectants approved by the practice. Cleaners should follow SDS and contact time labels.",
      },
      {
        question: "How is HIPAA handled by cleaning crews?",
        answer:
          "Cleaners should not access patient records. Practices secure charts and screens; cleaners report visible PHI exposures to management.",
      },
      {
        question: "How often should waiting room carpet be extracted?",
        answer:
          "Quarterly for many clinics; more often in pediatric or high-spill practices. Spot clean biofluids per clinic spill protocol immediately.",
      },
    ],
    related: [
      { label: "Medical Office Cleaning", href: "/medical-office-cleaning" },
      { label: "Janitorial Scope of Work Template", href: "/resources/janitorial-scope-of-work-template" },
      { label: "Commercial Cleaning Services", href: "/commercial-cleaning" },
    ],
  },
  {
    slug: "car-dealership-nightly-cleaning-checklist",
    title: "Car Dealership Nightly Cleaning Checklist",
    metaTitle: "Dealership Nightly Cleaning Checklist | Imperial Cleaning",
    description:
      "Nightly and weekly cleaning checklist for dealership showrooms, customer lounges, service waiting areas, and restrooms. Keep floors glossy and client-ready.",
    category: "Commercial Cleaning",
    readTime: "6 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Car dealership cleaning must keep showrooms, customer lounges, and service waiting areas bright every morning: glossy floors, fingerprint-free glass, stocked restrooms, and trash-free desks. Nightly crews handle full floors and trash; day porters often supplement customer areas during open hours on busy lots.",
    sections: [
      {
        heading: "Showroom and sales floor (nightly)",
        body: [
          "Dry mop or microfiber dust control on display floors before wet mopping to avoid scratching from grit.",
          "Mop hard surfaces with manufacturer-approved cleaner for polished concrete, tile, or epoxy; avoid haze on high-gloss finishes.",
          "Wipe glass doors, partition glass, and interior windows; spot vehicle-facing glass only if in scope without touching inventory vehicles without dealer permission.",
          "Empty trash on sales desks and tidy customer seating; align chairs and literature.",
        ],
      },
      {
        heading: "Customer lounge and service waiting (nightly)",
        body: [
          "Vacuum upholstery and carpet; wipe tables, arms of chairs, and children's area toys if provided by dealer.",
          "Clean and stock restrooms aggressively: dealerships are judged heavily on restroom quality.",
          "Wipe coffee bar, vending area, and counters; remove cups and trash; mop floors.",
          "Disinfect high-touch points: TV remotes, kiosk screens if dealer allows, door handles.",
        ],
      },
      {
        heading: "Offices, restrooms, and lot-adjacent entries",
        body: [
          "Office areas: vacuum, empty trash, wipe desks exteriors if cleared; avoid moving sales paperwork.",
          "Restrooms full service nightly; check midday if day porter on site.",
          "Entries and mat wells: vacuum mats, mop hard floors, salt treatment in winter per dealer safety policy.",
          "Service drive and back offices may be separate scope; define whether shop floors and bays are included (often excluded or separate industrial program).",
        ],
      },
      {
        heading: "Weekly and periodic dealership tasks",
        body: [
          "Weekly: detail dust high ledges and signage; burnish or auto-scrub showroom if specified; clean interior glass fully.",
          "Monthly: machine scrub service waiting and corridors; clean fabric chairs if staining appears.",
          "Quarterly: strip and wax if VCT in back offices; pressure wash entry sidewalks if contracted.",
          "Failure points: streaky showroom floors, missed restrooms before opening, and dust on display vehicles from nearby construction (report, do not wipe paint without approval).",
        ],
      },
    ],
    steps: [
      {
        name: "Walk the dealership zones",
        text: "Separate showroom, lounge, offices, service customer areas, and excluded shop bays.",
      },
      {
        name: "Set nightly route and floor products",
        text: "Match chemistry to polished concrete vs tile; document vehicle and kiosk touch rules.",
      },
      {
        name: "Execute trash, restrooms, and floors",
        text: "Complete customer areas first so opening walk focuses on first impressions.",
      },
      {
        name: "Add weekly and periodic calendar",
        text: "Schedule scrub, burnish, and extraction without blocking sales events.",
      },
      {
        name: "Morning inspection with sales manager",
        text: "Score showroom, restrooms, and lounge daily for first 30 days.",
      },
    ],
    faqs: [
      {
        question: "Should cleaners wash showroom vehicles?",
        answer:
          "Only if explicitly scoped. Most dealers use lot staff for vehicle washing; cleaners focus on floors and glass.",
      },
      {
        question: "How do you prevent floor haze in showrooms?",
        answer:
          "Use correct dilution, rinse when required, and dust mop before wet mopping. Wrong chemistry on polished concrete causes haze.",
      },
      {
        question: "Do service bays need nightly cleaning?",
        answer:
          "Often a separate industrial scope with degreasers and safety rules. Customer-facing areas are the usual janitorial priority.",
      },
      {
        question: "Should a day porter supplement nightly service?",
        answer:
          "Many dealerships add day porters for restrooms and spills during Saturday traffic and long evenings.",
      },
    ],
    related: [
      { label: "Car Dealership Cleaning", href: "/car-dealership-cleaning" },
      { label: "Day Porter Services", href: "/day-porter-services" },
      { label: "Commercial Floor Care", href: "/commercial-floor-care" },
    ],
  },
  {
    slug: "school-janitorial-checklist",
    title: "School Janitorial Checklist: Daily, Weekly, and Periodic",
    metaTitle: "School Janitorial Checklist | Imperial Cleaning",
    description:
      "School janitorial checklist for classrooms, corridors, cafeterias, gyms, and restrooms. Daily health-focused tasks plus summer deep cleans and floor care schedules.",
    category: "Commercial Cleaning",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "School janitorial programs must cover classrooms, corridors, cafeterias, gyms, and restrooms every school night with trash removal, floor care, and disinfecting of high-touch surfaces, plus deeper work on breaks and summers. Restrooms and cafeterias drive daily standards; gyms and main corridors drive periodic floor programs.",
    sections: [
      {
        heading: "Daily checklist after students leave",
        body: [
          "Classrooms: empty trash and recycling; spot vacuum or sweep floors; wipe accessible desks and chairs if in scope; check for vandalism or leaks.",
          "Corridors and stairs: vacuum or sweep; mop hard floors; clean handrails and entry mats.",
          "Restrooms: full disinfecting cycle, restock paper and soap, mop with disinfectant, check for graffiti and report.",
          "Cafeteria/kitchen serving area: sweep and mop eating areas; wipe tables and benches; empty trash; kitchen hood and cooking equipment usually excluded unless contracted.",
        ],
      },
      {
        heading: "Weekly school cleaning tasks",
        body: [
          "Dust classroom ledges, vents, and tops of lockers in rotated wings.",
          "Detail clean main office and nurse area; disinfect health office surfaces per district protocol.",
          "Gym: sweep and dust mop courts; pick debris; inspect for wet spots. Full gym floor refinish is periodic, not nightly.",
          "Library and computer labs: vacuum, dust, wipe tables; do not unplug devices without IT rules.",
        ],
      },
      {
        heading: "Periodic and summer deep clean",
        body: [
          "Strip and wax VCT in corridors and classrooms on break schedules; gyms may need screen and recoat per floor manufacturer.",
          "Carpet extraction in classrooms and libraries during summer.",
          "Window cleaning interior; locker wipe-downs inside and out during summer.",
          "Bleacher and auditorium seating: sweep, wipe, and report damage during breaks.",
        ],
      },
      {
        heading: "Staffing and inspection for K-12 sites",
        body: [
          "Assign square footage per custodian per district standards; large campuses use zone leads.",
          "Daily supervisor walk: restrooms, entries, cafeteria, and nurse area are priority score points.",
          "Document supply use and broken fixtures for maintenance work orders. Common failures: missed restrooms before morning bell and salt tracking in winter entries.",
        ],
      },
    ],
    steps: [
      {
        name: "Zone the building by wing and floor type",
        text: "Map classrooms, caf, gym, and restrooms with VCT vs carpet vs gym wood.",
      },
      {
        name: "Publish daily task cards per custodian",
        text: "List trash, floors, restrooms, and touch points for each zone.",
      },
      {
        name: "Run nightly inspections",
        text: "Supervisor scores restrooms and entries before students arrive.",
      },
      {
        name: "Calendar weekly rotations",
        text: "Rotate dusting and detail tasks so all wings are covered each month.",
      },
      {
        name: "Plan summer deep clean window",
        text: "Schedule strip/wax, extraction, and window projects when halls are empty.",
      },
    ],
    faqs: [
      {
        question: "How often should school restrooms be cleaned?",
        answer:
          "Most districts require full service nightly and often midday checks in high-enrollment buildings. Athletic event nights may need extra service.",
      },
      {
        question: "Who cleans classroom desks?",
        answer:
          "Varies by district. Some include disinfecting desks nightly; others limit to trash and floors with teachers wiping desks.",
      },
      {
        question: "When should corridors be stripped and waxed?",
        answer:
          "Often once or twice per year on breaks. High-traffic main halls may get interim scrub and recoat mid-year.",
      },
      {
        question: "Are green products required in schools?",
        answer:
          "Many districts specify green-seal or low-VOC products, especially during occupied hours. Confirm SDS and district approved list.",
      },
    ],
    related: [
      { label: "School Cleaning Services", href: "/school-cleaning-services" },
      { label: "Janitorial Scope of Work Template", href: "/resources/janitorial-scope-of-work-template" },
      { label: "Commercial Floor Care", href: "/commercial-floor-care" },
    ],
  },
  {
    slug: "warehouse-cleaning-scope-of-work",
    title: "Warehouse Cleaning Scope of Work Template",
    metaTitle: "Warehouse Cleaning Scope of Work | Imperial Cleaning",
    description:
      "Define warehouse cleaning scope for offices, restrooms, aisles, loading docks, and periodic scrubbing. Safety rules, debris, and floor type drive tasks and frequency.",
    category: "Commercial Cleaning",
    readTime: "7 min read",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    intro:
      "Warehouse cleaning scope should split office and restroom janitorial from industrial floor care in aisles, docks, and production zones. Define debris removal, sweep/scrub methods, oil and forklift traffic areas, and periodic deep scrubbing separately from nightly trash and break room service. Safety rules for pedestrians, forklifts, and PPE belong in the scope document.",
    sections: [
      {
        heading: "Office, restroom, and break room (janitorial scope)",
        body: [
          "Daily: trash and recycling; restroom full service; break room wipe and mop; vacuum office carpet if present.",
          "Weekly: dust offices; clean interior glass at entries; inspect supply closets.",
          "Periodic: carpet extraction in offices; strip and wax if VCT in admin areas.",
          "These zones follow standard commercial janitorial standards and can be scoped separately from the warehouse floor.",
        ],
      },
      {
        heading: "Warehouse floor and aisle cleaning (copy-paste scope)",
        body: [
          "Daily or per-shift: sweep designated aisle paths with industrial sweeper or manual broom; empty floor debris bins; report spills and damaged racking to supervisor.",
          "Scheduled scrub: auto-scrubber on epoxy, sealed concrete, or polished concrete aisles per agreed frequency (often weekly to monthly by traffic).",
          "Loading docks: sweep and remove packaging debris; periodic pressure wash if included; salt and mud control at exterior doors in winter.",
          "Exclude unless specified: hazardous material cleanup, coolant or chemical spills, confined spaces, and elevated rack cleaning.",
        ],
      },
      {
        heading: "Safety, access, and coordination with operations",
        body: [
          "Cleaning windows around active forklifts require marked lanes, spotters, and scheduled downtime.",
          "PPE: steel-toe, hi-vis, eye protection when required by site; lockout areas during wet floor scrub until dry.",
          "Coordinate with warehouse manager for aisle closure maps; never block fire exits or eyewash stations.",
          "Debris types: wood pallets, plastic wrap, and cardboard may need baler area pickup vs general trash.",
        ],
      },
      {
        heading: "Staffing, equipment, and inspection criteria",
        body: [
          "List equipment vendor provides: ride-on sweeper, walk-behind scrubber, pressure washer, HEPA vac for office.",
          "Define acceptable floor standard: no visible litter in swept paths, no standing liquid, docks free of tripping hazards.",
          "Inspection: nightly office/restroom scorecard plus weekly aisle walk with operations lead; photo log for dock conditions after busy ship days.",
          "Imperial Cleaning serves industrial and warehouse sites across Idaho and Utah with licensed, insured crews. Call (208) 520-3202 for a scope review and quote within 24 hours.",
        ],
      },
    ],
    steps: [
      {
        name: "Split office and industrial zones",
        text: "Document square footage, floor type, and traffic pattern for each zone.",
      },
      {
        name: "Define sweep vs scrub frequencies",
        text: "Set daily paths and weekly/monthly scrub schedule with operations input.",
      },
      {
        name: "Write safety and PPE requirements",
        text: "Include forklift coordination, spill escalation, and wet floor protocols.",
      },
      {
        name: "List equipment and exclusions",
        text: "Specify scrubbers, pressure wash, and what is not janitorial (hazmat, heights).",
      },
      {
        name: "Agree inspection standards",
        text: "Set pass/fail criteria for docks, aisles, restrooms, and offices with photo documentation.",
      },
    ],
    faqs: [
      {
        question: "How often should warehouse aisles be scrubbed?",
        answer:
          "Depends on forklift traffic and dust. Light assembly warehouses may scrub monthly; heavy logistics aisles may need weekly scrub paths.",
      },
      {
        question: "Is pressure washing the dock included?",
        answer:
          "Only if written in scope with frequency and water disposal method. Many contracts treat it as periodic add-on work.",
      },
      {
        question: "Do cleaners remove pallet debris and shrink wrap?",
        answer:
          "Usually yes in aisle sweep scope if bins are provided. Large pile removal may be a maintenance or operations task.",
      },
      {
        question: "Can the same crew clean offices and warehouse floor?",
        answer:
          "Often split shifts: janitorial at night for offices/restrooms, industrial sweep/scrub when aisles are clear or on weekends.",
      },
    ],
    related: [
      { label: "Warehouse Cleaning", href: "/warehouse-cleaning" },
      { label: "Industrial Cleaning", href: "/industrial-cleaning" },
      { label: "Janitorial Scope of Work Template", href: "/resources/janitorial-scope-of-work-template" },
    ],
  },
];

export function getPlaybookGuideBySlug(slug: string): Guide | undefined {
  return playbookGuides.find((g) => g.slug === slug);
}

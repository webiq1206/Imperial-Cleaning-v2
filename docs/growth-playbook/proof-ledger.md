# Proof Ledger

Source of truth for every claim Imperial publishes on the website, GBP, ads, outbound, LinkedIn, or sales materials.

**Rule:** Never publish a new numeric claim, local-proof statement, client name, certification, or response-time promise without adding a row here first. If evidence is missing, use softer language or do not publish.

**Review cadence:** Owner reviews monthly. Web team checks this file before any copy change to money pages, city pages, or `llms.txt`.

---

## Active claims

| Claim | Where it appears | Evidence | Status |
|-------|------------------|----------|--------|
| Founded 2015 | About page, homepage FAQs, llms.txt, GBP description | Company history; GBP opening date | VERIFIED |
| HQ address: 2653 Clarence Pl, Idaho Falls, ID 83402 | Footer, contact, schema, llms.txt, GBP | Google Business Profile listing; `data/business-info.ts` | VERIFIED |
| Phone: (208) 520-3202 | Sitewide NAP, CTAs, schema | GBP listing; `data/business-info.ts` | VERIFIED |
| Email: service@imperialcleaninginc.com | Contact, schema, llms.txt | Active inbox; `data/business-info.ts` | VERIFIED |
| Hours: Mon-Fri 8AM-5PM, Sat 9AM-1PM MT, Sun closed | Footer, schema, contact, llms.txt | GBP hours verified 2026-06-10 | VERIFIED |
| 24 cities served (Idaho and Utah) | About, hubs, llms.txt, city architecture | `data/service-locations.ts` (24 cities with defined service flags) | VERIFIED |
| Fully insured and bonded (Idaho and Utah) | About, commercial/construction hubs, industry pages, compliance section | COI on file; owner can produce certificates | VERIFIED |
| General liability and workers' compensation coverage | About FAQs, construction/commercial pages | Insurance policies; COI available on request | VERIFIED |
| Background-checked staff | Home FAQs, school page, location content generators | Owner must confirm HR policy and documentation process | NEEDS OWNER CONFIRM |
| Written quote within 24 hours | Hubs, guides, contact, CTAs | Operational SOP; track actual turnaround in CRM | NEEDS OWNER CONFIRM |
| Google 5.0 rating | Hero CTA, contact sidebar, reviews hub, llms.txt | Public Google listing; `GOOGLE_REVIEW_COUNT` in `data/reviews.ts` | VERIFIED |
| Google review count (currently 42) | Hero CTA, reviews hub, llms.txt | Public Google listing count; update when GBP count changes | VERIFIED |
| City-page review quotes | City pages via `reviewsForCity` / `reviewsForService` | Verbatim Google text only; city tags only when the review names the city, a city-only venue, or southeast Idaho | VERIFIED |
| Named venues in reviews (Mountain America Center, Hero Arena, ICCU Shelley, Idaho Falls Clinic, Okland) | City pages when the review is shown | Copied from public Google reviews; do not add extra project photos or invented case studies | VERIFIED |
| 500+ projects completed | About, stats, testimonials section | Owner to confirm canonical project count | NEEDS OWNER CONFIRM |
| 25+ team members | About stats, company timeline | Owner to confirm headcount | NEEDS OWNER CONFIRM |
| Same-day response in primary markets (Idaho Falls, Pocatello) | Construction hub FAQs, home FAQs, city generators | Operations dispatch capability; log actual response times | NEEDS OWNER CONFIRM |
| 24/7 emergency cleaning available | Construction hub, features section, city generators | On-call crew availability; owner confirms staffing | NEEDS OWNER CONFIRM |
| Same-day response Logan/Ogden (Utah) | Utah service areas page | Proximity claim; confirm crew coverage | NEEDS OWNER CONFIRM |
| 24-48 hour deployment Boise, SLC, Twin Falls | Construction hub, Utah/extended market copy | Operations scheduling; confirm by market | NEEDS OWNER CONFIRM |
| OSHA compliance / construction site safety training | Construction hub FAQs, layout schema text | Safety program documentation | NEEDS OWNER CONFIRM |
| Bloodborne pathogen training (medical cleaning) | Medical office page, direct-answer block | Training records for medical crews | NEEDS OWNER CONFIRM |
| LEED-compliant cleaning | Not currently on site | Do not add without certification documentation | NEEDS OWNER CONFIRM |
| EPA-registered hospital-grade disinfectants (medical) | Medical office page | Product SDS and facility alignment | NEEDS OWNER CONFIRM |
| Drug screening for employees | Home FAQs | HR policy documentation | NEEDS OWNER CONFIRM |
| 100% satisfaction promise / 24-hour callback | About FAQ | Owner defines enforceable policy | NEEDS OWNER CONFIRM |
| "Preferred provider" / "preferred commercial cleaning provider" | Legacy city page generators (`lib/location-content-utils.ts`) | No independent third-party designation | DO NOT USE |
| Named clients (any company name as a client) | Removed from site per 2026 audit | Client permission and contract | DO NOT USE unless owner supplies |
| Fabricated testimonials or case studies | Removed from site | Real reviews in `data/reviews.ts` only | DO NOT USE |
| Aggregate star rating in JSON-LD without verified feed | Removed sitewide | Reintroduce only with real Review schema source | DO NOT USE |
| Per-city LocalBusiness with HQ address on every city URL | Removed; replaced with Service + areaServed | Technical SEO audit 2026-06 | DO NOT USE (old pattern) |
| Specific license numbers | Not on site | State/local license copies | DO NOT USE until owner adds numbers |
| "60+ reviews" (playbook GBP reference) | Playbook only; site uses live Google count | Reconcile with current GBP total before using | NEEDS OWNER CONFIRM |

---

## How to add a new claim

1. Add a row to this table before the copy goes live.
2. Set status to **NEEDS OWNER CONFIRM** until evidence is attached (COI, policy doc, screenshot, CRM metric, or permission letter).
3. Link the evidence location (Google Drive path, CRM report, photo folder, or contract).
4. When verified, change status to **VERIFIED** and note the verification date in the Evidence column.
5. If the claim cannot be supported, change status to **DO NOT USE** and remove the copy from all surfaces.

---

## Claims audit log

| Date | Claim | Action | By |
|------|-------|--------|-----|
| 2026-09-01 | Ledger created | Initial inventory from site + playbook | Web |
| | | | |

---

## Surfaces to check when a claim changes

- Website pages and `data/` modules
- `public/llms.txt` and `public/llms-full.txt`
- Google Business Profile (description, services, posts, Q&A)
- Google Ads and Microsoft Ads ad copy
- Outbound email and partner one-sheet
- LinkedIn company page and posts
- Proposal templates and slide decks

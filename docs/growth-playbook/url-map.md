# URL Map

Every money and resource URL with primary query, page type, CTA, proof needed, and owner. Secondary queries live in on-page copy and FAQs; this map tracks the single primary intent per URL.

**Owner key:** Marketing = owner/marketing lead; Owner = Francisco/operations; Web = site/code team.

---

## Core and conversion

| URL | Primary query | Page type | CTA | Proof needed | Owner |
|-----|---------------|-----------|-----|--------------|-------|
| `/` | Imperial Cleaning Inc Idaho Utah | Brand + overview | Request quote / call | Google rating, years in business, service split | Web |
| `/contact` | commercial cleaning quote Idaho Falls | Conversion | Submit qualification form | Phone, hours, 24-hour quote promise, review count | Web |
| `/about` | about Imperial Cleaning Inc | Trust | Contact | Founded 2015, 500+ projects, 25+ team (confirm in ledger) | Web + Owner |
| `/reviews` | Imperial Cleaning reviews | Trust | Leave a review / contact | Live Google, Porch, directory links only | Web + Owner |

---

## Service hubs (money pages)

| URL | Primary query | Page type | CTA | Proof needed | Owner |
|-----|---------------|-----------|-----|--------------|-------|
| `/commercial-cleaning` | commercial cleaning services | Service hub | Schedule walkthrough | Insured/bonded, quote turnaround, city links | Web |
| `/construction-cleaning` | post construction cleaning services | Service hub | Get project quote | 3-phase process, price range, OSHA (confirm) | Web |
| `/janitorial-services` | commercial janitorial services | Service hub | Schedule walkthrough | Recurring scope, inspection process, Tier 1 cities | Web |
| `/office-cleaning` | office cleaning services | Service hub | Schedule walkthrough | After-hours scheduling, frequency options | Web |
| `/commercial-floor-care` | commercial floor stripping and waxing | Service hub | Request floor assessment | Before/after floor photos | Web + Owner |
| `/day-porter-services` | day porter services | Service hub | Request day porter quote | Scope definition, facility types served | Web |
| `/industrial-cleaning` | industrial cleaning services | Service hub | Site assessment | Industrial safety, scope fit by operation | Web + Owner |
| `/warehouse-cleaning` | warehouse cleaning services | Service hub | Site assessment | Warehouse scope, shift coverage | Web + Owner |
| `/commercial-cleaning-cost` | commercial cleaning cost per square foot | Cost / decision | Get exact quote | Pricing ranges with disclaimers, frequency factors | Web + Owner |
| `/construction-cleaning/rough-clean` | rough construction cleaning | Phase BOFU | Get project quote | Phase scope, GC scheduling | Web |
| `/construction-cleaning/final-clean` | final construction cleaning | Phase BOFU | Get project quote | Turnover timing, inspection readiness | Web |
| `/construction-cleaning/touch-up-clean` | touch up construction cleaning | Phase BOFU | Get project quote | Punch-list workflow | Web |

---

## Industry pages (money pages)

| URL | Primary query | Page type | CTA | Proof needed | Owner |
|-----|---------------|-----------|-----|--------------|-------|
| `/medical-office-cleaning` | medical office cleaning Idaho | Industry BOFU | Request medical walkthrough | Bloodborne pathogen training (confirm), disinfectant protocol | Web + Owner |
| `/car-dealership-cleaning` | car dealership cleaning service | Industry BOFU | Get dealership quote | Showroom/night cleaning photos | Web + Owner |
| `/restaurant-cleaning-services` | restaurant commercial cleaning | Industry BOFU | Request assessment | Health inspection readiness language | Web |
| `/school-cleaning-services` | school janitorial service | Industry BOFU | Request facility plan | Background-checked staff (confirm) | Web + Owner |
| `/property-management-cleaning` | property management cleaning services | Industry BOFU | Portfolio walkthrough | Multi-site consistency story | Web + Owner |
| `/office-building-cleaning` | office building cleaning services | Industry BOFU | Schedule walkthrough | Large-facility scope | Web |
| `/manufacturing-facility-cleaning` | manufacturing facility cleaning | Industry BOFU | Site assessment | Industrial scope, shift coverage | Web + Owner |

---

## Geography hubs

| URL | Primary query | Page type | CTA | Proof needed | Owner |
|-----|---------------|-----------|-----|--------------|-------|
| `/service-areas` | Imperial Cleaning service areas | Hub | Contact | 24-city map, state split | Web |
| `/service-areas/idaho` | Idaho commercial cleaning | State hub | Contact | Eastern Idaho + Treasure Valley coverage | Web |
| `/service-areas/utah` | Utah commercial cleaning | State hub | Contact | Wasatch Front coverage, response times (confirm) | Web |
| `/idaho/commercial-cleaning/{city}` | commercial cleaning {city} | City BOFU | Request local quote | City-specific proof, reviews mentioning city | Web + Owner |
| `/idaho/construction-cleaning/{city}` | post construction cleaning {city} | City BOFU | Get project quote | Local GC/project proof when available | Web + Owner |
| `/utah/commercial-cleaning/{city}` | commercial cleaning {city} Utah | City BOFU | Request local quote | Utah project proof before strong claims | Web + Owner |
| `/utah/construction-cleaning/{city}` | construction cleanup {city} Utah | City BOFU | Get project quote | Utah construction proof | Web + Owner |

Tier 1 city slugs: `idaho-falls`, `pocatello`, `rexburg`, `ammon`, `blackfoot`. Full list in `data/service-locations.ts`.

---

## Resource cluster

| URL | Primary query | Page type | CTA | Proof needed | Owner |
|-----|---------------|-----------|-----|--------------|-------|
| `/resources` | commercial cleaning guides | Resource hub | Browse / contact | Links to all guides | Web |
| `/resources/what-is-post-construction-cleaning` | what is post construction cleaning | AEO / MOFU | Construction quote | Vendor-neutral explainer | Web |
| `/resources/construction-cleanup-process-checklist` | construction cleanup checklist | AEO / MOFU | Project quote | HowTo steps, checklist accuracy | Web |
| `/resources/post-construction-cleaning-cost` | post construction cleaning cost per square foot | Cost / AEO | Get exact quote | $/sq ft ranges, disclaimers | Web + Owner |
| `/resources/commercial-cleaning-vs-janitorial` | commercial cleaning vs janitorial | AEO / MOFU | Commercial quote | Clear definitions | Web |
| `/resources/commercial-cleaning-rfp-template` | commercial cleaning RFP template | Lead magnet | Download + walkthrough | Real template utility | Web + Owner |
| `/resources/janitorial-scope-of-work-template` | janitorial scope of work template | Lead magnet | Download + bid review | Real template utility | Web + Owner |
| `/resources/switch-commercial-cleaning-companies` | switch commercial cleaning companies | Decision | Schedule walkthrough | Vendor-switch pain points (no fake clients) | Web |

Planned resources marked in [completion-status.md](./completion-status.md) until live.

---

## Utility (non-money)

| URL | Primary query | Page type | CTA | Proof needed | Owner |
|-----|---------------|-----------|-----|--------------|-------|
| `/sitemap` | Imperial Cleaning sitemap | Utility | Navigate | Accurate link list | Web |
| `/privacy-policy` | privacy policy | Legal | None | Current policy | Web |
| `/terms-of-service` | terms of service | Legal | None | Current terms | Web |

---

## CTA standards by page type

| Page type | Primary CTA | Secondary |
|-----------|---------------|-----------|
| Commercial / janitorial / office hub | Schedule walkthrough | Call |
| Construction hub and phase pages | Get project quote | Call |
| City commercial | Request local quote | Call |
| City construction | Get project quote | Call |
| Industry | Request industry walkthrough | Download checklist (when available) |
| Cost guide | Get exact quote | Call |
| RFP / scope template | Download template | Request bid review |
| Resource (educational) | Contact for quote | Link to money page |

---

## Internal link minimums

Each money page should link to:

1. `/contact`
2. Relevant service hub (commercial or construction)
3. At least two Tier 1 city pages OR one city + one industry page
4. One related resource guide where intent overlaps

---

## Change log

| Date | Change |
|------|--------|
| 2026-09-01 | Initial map from playbook Section 06 + current registry |

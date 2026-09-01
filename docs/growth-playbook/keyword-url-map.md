# Keyword-to-URL Map

Canonical URL assignments from playbook Sections 06 and Appendix A. One primary URL per distinct buyer intent. Do not create competing pages for the same intent.

**City URL pattern:** `/{state}/{service}/{city}`

- `{state}` = `idaho` or `utah` (lowercase slug)
- `{service}` = `commercial-cleaning` or `construction-cleaning`
- `{city}` = city slug (e.g. `idaho-falls`, `salt-lake-city`)

**Important:** Do not create thin city variants for janitorial or office cleaning intents. Those queries should resolve to the service hub (`/janitorial-services`, `/office-cleaning`) plus existing city **commercial-cleaning** pages for local BOFU. Adding near-duplicate janitorial/office city pages would split authority and create doorway risk.

**Status key:** LIVE = indexed route exists today; SHIPPING = in current site deployment; PLANNED = playbook backlog; N/A = intentionally no dedicated page.

---

## NOW priority clusters

| Priority | Cluster | Intent | Canonical URL | Status |
|----------|---------|--------|---------------|--------|
| NOW | commercial cleaning services [city] | BOFU local | `/idaho/commercial-cleaning/{city}` or `/utah/commercial-cleaning/{city}` | LIVE |
| NOW | commercial cleaning company [city] | BOFU local | Same city commercial URL as above | LIVE |
| NOW | janitorial services [city] | BOFU local | `/janitorial-services` + link from `/idaho/commercial-cleaning/{city}` | SHIPPING |
| NOW | office cleaning [city] | BOFU local | `/office-cleaning` + link from city commercial page | SHIPPING |
| NOW | post construction cleaning [city] | BOFU local GC | `/idaho/construction-cleaning/{city}` or `/utah/construction-cleaning/{city}` | LIVE |
| NOW | construction cleanup [city] | BOFU local GC | Same city construction URL as above | LIVE |
| NOW | commercial cleaning services | BOFU regional | `/commercial-cleaning` | LIVE |
| NOW | commercial janitorial services | BOFU regional | `/commercial-cleaning` and `/janitorial-services` | SHIPPING |
| NOW | post construction cleaning services | BOFU regional | `/construction-cleaning` | LIVE |
| NOW | commercial cleaning cost | Decision / price | `/commercial-cleaning-cost` | SHIPPING |
| NOW | post construction cleaning cost | Decision / price | `/resources/post-construction-cleaning-cost` | LIVE |
| NOW | medical office cleaning | Industry BOFU | `/medical-office-cleaning` | LIVE |
| NOW | car dealership cleaning | Industry BOFU | `/car-dealership-cleaning` | LIVE |
| NOW | restaurant commercial cleaning | Industry BOFU | `/restaurant-cleaning-services` | LIVE |
| NOW | school janitorial service | Industry BOFU | `/school-cleaning-services` | LIVE |
| NOW | commercial cleaning near me | Local BOFU | GBP + nearest Tier 1 city commercial page | OWNER (GBP) |
| NOW | janitorial services near me | Local BOFU | GBP + `/janitorial-services` | SHIPPING |

---

## NEXT priority clusters

| Priority | Cluster | Intent | Canonical URL | Status |
|----------|---------|--------|---------------|--------|
| NEXT | janitorial services (non-city head) | BOFU | `/janitorial-services` | SHIPPING |
| NEXT | office cleaning services | BOFU | `/office-cleaning` | SHIPPING |
| NEXT | industrial cleaning services | Industry BOFU | `/industrial-cleaning` | SHIPPING |
| NEXT | warehouse cleaning services | Industry BOFU | `/warehouse-cleaning` | SHIPPING |
| NEXT | day porter services | BOFU facility mgr | `/day-porter-services` | SHIPPING |
| NEXT | commercial floor cleaning / strip and wax | BOFU add-on | `/commercial-floor-care` | SHIPPING |
| NEXT | property management cleaning | Industry BOFU | `/property-management-cleaning` | SHIPPING |
| NEXT | office building cleaning services | Industry BOFU | `/office-building-cleaning` | SHIPPING |
| NEXT | manufacturing facility cleaning | Industry BOFU | `/manufacturing-facility-cleaning` | SHIPPING |
| NEXT | rough construction cleaning | GC phase | `/construction-cleaning/rough-clean` | SHIPPING |
| NEXT | final construction cleaning | GC turnover | `/construction-cleaning/final-clean` | SHIPPING |
| NEXT | touch up construction cleaning | GC punch-list | `/construction-cleaning/touch-up-clean` | SHIPPING |
| NEXT | commercial cleaning RFP template | Procurement | `/resources/commercial-cleaning-rfp-template` | PLANNED |
| NEXT | janitorial scope of work template | Procurement | `/resources/janitorial-scope-of-work-template` | PLANNED |
| NEXT | switch commercial cleaning companies | Decision | `/resources/switch-commercial-cleaning-companies` | PLANNED |
| NEXT | commercial cleaning vs janitorial | MOFU / AEO | `/resources/commercial-cleaning-vs-janitorial` | LIVE |
| NEXT | construction cleanup checklist | GC research | `/resources/construction-cleanup-process-checklist` | LIVE |
| NEXT | what is post-construction cleaning | MOFU / AEO | `/resources/what-is-post-construction-cleaning` | LIVE |

---

## LATER priority clusters

| Priority | Cluster | Intent | Canonical URL | Status |
|----------|---------|--------|---------------|--------|
| LATER | best commercial cleaning company [city] | Comparison | Tier 1 city page + `/reviews` until dedicated comparison page | PLANNED |
| LATER | commercial cleaning reddit | Research | Reddit-summary resource only if real discussion exists | PLANNED |
| LATER | janitorial services reviews [city] | Due diligence | `/reviews` + city commercial page proof blocks | PARTIAL |
| LATER | Imperial vs [competitor] | Comparison | No thin competitor pages until independent proof density exists | N/A |
| LATER | how to compare commercial cleaning companies Idaho Falls | Buyer-centered comparison | `/resources/how-to-compare-commercial-cleaning-companies-idaho-falls` | PLANNED |
| LATER | in-house vs outsourced cleaning | Decision | `/resources/in-house-vs-outsourced-janitorial` | PLANNED |
| LATER | nightly janitorial service | BOFU | `/janitorial-services` (section anchor) | SHIPPING |
| LATER | multi-location commercial cleaning | Enterprise | `/commercial-cleaning` + `/property-management-cleaning` | SHIPPING |

---

## Tier 1 city commercial URLs (highest local BOFU)

| City | Commercial cleaning URL | Construction cleaning URL |
|------|-------------------------|---------------------------|
| Idaho Falls | `/idaho/commercial-cleaning/idaho-falls` | `/idaho/construction-cleaning/idaho-falls` |
| Pocatello | `/idaho/commercial-cleaning/pocatello` | `/idaho/construction-cleaning/pocatello` |
| Rexburg | `/idaho/commercial-cleaning/rexburg` | `/idaho/construction-cleaning/rexburg` |
| Ammon | `/idaho/commercial-cleaning/ammon` | `/idaho/construction-cleaning/ammon` |
| Blackfoot | `/idaho/commercial-cleaning/blackfoot` | `/idaho/construction-cleaning/blackfoot` |

---

## Tier 2 growth market examples

| City | Commercial cleaning URL | Notes |
|------|-------------------------|-------|
| Boise | `/idaho/commercial-cleaning/boise` | Add Treasure Valley proof before aggressive claims |
| Salt Lake City | `/utah/commercial-cleaning/salt-lake-city` | Utah project proof required |
| Logan | `/utah/commercial-cleaning/logan` | Cache Valley proof and partnerships |

Full city list: `/service-areas/idaho`, `/service-areas/utah`, and `data/service-locations.ts`.

---

## Internal linking rules

1. Every city page links up to the correct service hub and down to `/contact`.
2. Janitorial and office head terms never get duplicate city URLs; they link from city commercial pages to `/janitorial-services` and `/office-cleaning`.
3. Cost queries point to `/commercial-cleaning-cost` or `/resources/post-construction-cleaning-cost`, not both as equals. Pick one primary per intent cluster.
4. Industry pages link to `/commercial-cleaning` and relevant city commercial pages for Tier 1 markets.
5. New pages must be added to `lib/page-registry.ts` and the internal-link manifest.

---

## Change log

| Date | Change | By |
|------|--------|-----|
| 2026-09-01 | Initial map from playbook Section 06 + Appendix A | Web |

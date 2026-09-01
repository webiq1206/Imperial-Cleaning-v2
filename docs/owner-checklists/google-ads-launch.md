# Google Ads Launch Brief

Campaign structure from playbook Section 18. **This is a planning document only.** Do not launch ads until [measurement-setup.md](./measurement-setup.md) is complete, conversion tracking is verified, and the owner signs off on budget and service area.

Related: [url-map.md](../growth-playbook/url-map.md), [keyword-url-map.md](../growth-playbook/keyword-url-map.md), [proof-ledger.md](../growth-playbook/proof-ledger.md)

---

## Preconditions (all required before spend)

- [ ] GSC, GA4, and Bing baselines saved
- [ ] GA4 key events firing on form submit and phone click
- [ ] CRM stages active; ads leads tagged with UTM + campaign
- [ ] Call tracking number for paid campaigns (recommended)
- [ ] Landing pages live for each campaign's primary intent
- [ ] Owner approves daily/monthly budget cap
- [ ] Staffed response during ad schedule (Mon-Fri 8AM-5PM MT minimum)

---

## Account structure

```
Account: Imperial Cleaning Inc
├── Campaign: Brand Defense
├── Campaign: Commercial BOFU (Search)
├── Campaign: Janitorial BOFU (Search)
├── Campaign: Office Cleaning (Search)
├── Campaign: Construction BOFU (Search)
├── Campaign: Medical (Search)
├── Campaign: City - Idaho Falls (Search)
├── Campaign: City - Pocatello (Search)
├── Campaign: Remarketing (Display or Performance Max - later)
└── (Phase 2) Industrial / Warehouse - only if scope confirmed
```

**Phase 1 launch markets for city campaigns:** Idaho Falls and Pocatello only. Do not launch Boise, SLC, or Logan city campaigns until local proof and economics justify them.

---

## Campaign details

### 1. Brand Defense

| Setting | Value |
|---------|-------|
| Keywords (exact/phrase) | Imperial Cleaning Inc, Imperial Cleaning Idaho Falls, Imperial Cleaning |
| Landing page | `/` or `/contact` |
| Geo | Idaho + Utah (or US with location intent) |
| Why | Protect branded SERP; capture mis-clicks for unrelated "Imperial Cleaning" national brands |

### 2. Commercial BOFU

| Setting | Value |
|---------|-------|
| Keywords | commercial cleaning services, commercial cleaning company, commercial cleaners |
| Match | Exact and phrase first; broad only after conversion data |
| Landing page | `/commercial-cleaning` |
| Geo | Serviceable radius: Eastern Idaho primary; exclude areas you cannot staff |
| Ad copy proof | Insured/bonded, Idaho Falls HQ, quote within 24 hours (if confirmed in ledger) |

### 3. Janitorial BOFU

| Setting | Value |
|---------|-------|
| Keywords | janitorial services, commercial janitorial, office janitorial |
| Landing page | `/janitorial-services` |
| Conversion goal | Walkthrough scheduled, not form fill alone |

### 4. Office Cleaning

| Setting | Value |
|---------|-------|
| Keywords | office cleaning services, office cleaning company |
| Landing page | `/office-cleaning` |
| Negatives | residential, house, home, maid (see shared list) |

### 5. Construction BOFU

| Setting | Value |
|---------|-------|
| Keywords | post construction cleaning, construction cleanup, final construction cleaning |
| Landing page | `/construction-cleaning` |
| Notes | High urgency; add call extension; consider GC-specific ad copy |

### 6. Medical

| Setting | Value |
|---------|-------|
| Keywords | medical office cleaning, dental office cleaning |
| Landing page | `/medical-office-cleaning` |
| Notes | Use compliance/protocol language only if confirmed in proof ledger |

### 7. City - Idaho Falls

| Setting | Value |
|---------|-------|
| Keywords | commercial cleaning Idaho Falls, janitorial services Idaho Falls, post construction cleaning Idaho Falls |
| Landing page | `/idaho/commercial-cleaning/idaho-falls` or construction city URL for construction terms |
| Rule | Do not send city keywords to generic hub |

### 8. City - Pocatello

| Setting | Value |
|---------|-------|
| Keywords | commercial cleaning Pocatello, janitorial services Pocatello, construction cleanup Pocatello |
| Landing page | `/idaho/commercial-cleaning/pocatello` or matching construction URL |

### 9. Remarketing (Phase 2)

| Setting | Value |
|---------|-------|
| Audiences | Pricing page, contact, city pages, high-intent guides |
| Windows | 7 / 30 / 90 days |
| Landing page | Stage-matched (return to page they viewed) |
| Start | Only after 500+ monthly site visitors or ads data supports it |

---

## Shared negative keyword list

Add at account or campaign level. Expand as search term reports show junk.

```
residential
house cleaning
home cleaning
maid
maids
domestic
apartment cleaning
move out cleaning
move-in cleaning
carpet cleaner rental
cleaning jobs
janitor jobs
careers
hiring
employment
salary
free
DIY
how to clean
cleaning supplies
cleaning products
steam cleaner rental
office cleaning jobs
Imperial Cleaning Products
Imperial Cleaning Equipment
Royal Imperial Cleaning
Imperial Dry Cleaners
```

Review Search Terms weekly for the first 4 weeks. Add negatives for any residential, job seeker, or wrong-company intent.

---

## Landing page map

| Campaign | Primary URL | Backup (if page down) |
|----------|-------------|------------------------|
| Brand | `/contact` | `/` |
| Commercial BOFU | `/commercial-cleaning` | `/contact` |
| Janitorial | `/janitorial-services` | `/commercial-cleaning` |
| Office | `/office-cleaning` | `/commercial-cleaning` |
| Construction | `/construction-cleaning` | `/contact` |
| Medical | `/medical-office-cleaning` | `/contact` |
| City IF commercial | `/idaho/commercial-cleaning/idaho-falls` | `/commercial-cleaning` |
| City IF construction | `/idaho/construction-cleaning/idaho-falls` | `/construction-cleaning` |
| City Pocatello commercial | `/idaho/commercial-cleaning/pocatello` | `/commercial-cleaning` |
| City Pocatello construction | `/idaho/construction-cleaning/pocatello` | `/construction-cleaning` |
| Switch / competitor intent | `/resources/switch-commercial-cleaning-companies` (when live) | `/commercial-cleaning` |

Every landing page must have: clear H1 matching ad intent, phone number, short form above fold, proof block (rating, insured), one primary CTA.

---

## Budget and bidding (starting recommendations)

Owner sets final numbers. Suggested starting point for Phase 1 test:

| Campaign | Suggested daily cap | Bid strategy |
|----------|---------------------|--------------|
| Brand | $10-15 | Maximize clicks or manual CPC low |
| Commercial BOFU | $30-50 | Max conversions after 15+ conversions; start manual CPC |
| Janitorial | $20-35 | Same |
| Office | $15-25 | Same |
| Construction | $25-40 | Same |
| Medical | $10-20 | Same |
| City IF | $15-25 | Same |
| City Pocatello | $10-20 | Same |

Pause any campaign with zero qualified leads after 2 weeks and 300+ clicks.

---

## Tracking requirements

| Element | Implementation |
|---------|----------------|
| UTMs on every ad final URL | `utm_source=google&utm_medium=cpc&utm_campaign={campaign}` |
| GA4 import | Link Google Ads to GA4 |
| Offline conversions | Import qualified lead / won deal from CRM when possible |
| Call tracking | Dynamic number on paid landing pages recommended |
| Location report | Review geographic report weekly; exclude ZIPs outside service radius |

---

## Ad schedule

- Run ads during staffed response hours: Mon-Fri 8AM-5PM Mountain Time initially.
- Construction campaigns may extend if on-call can answer evenings; do not promise 24/7 in ads unless operations confirms.

---

## What not to do at launch

- Do not launch Performance Max until Search campaigns produce 15+ qualified conversions.
- Do not bid on competitor brand names with misleading ad copy.
- Do not send all city keywords to `/commercial-cleaning`.
- Do not use review counts or ratings in ads unless they match live Google totals.
- Do not launch Boise/SLC city campaigns in Phase 1.

---

## Launch checklist

- [ ] Measurement preconditions complete
- [ ] Campaigns built in draft
- [ ] Negatives applied
- [ ] Landing pages tested on mobile
- [ ] Conversion test from each campaign URL
- [ ] Owner budget approval
- [ ] Go live (owner action)
- [ ] Week 1 search term review scheduled

---

## Phase 2 expansion (after 30 days of clean data)

- Add industrial / warehouse campaigns if operations confirm scope
- Add Boise or SLC city campaigns only with local proof and acceptable CPQL
- Test Microsoft Ads mirror of top two Search campaigns
- Consider remarketing once audience size supports it

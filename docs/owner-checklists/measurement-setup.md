# Measurement Setup (First 7 Days)

Step-by-step checklist for the owner. Complete before scaling paid ads or judging SEO changes. Do not invent login credentials; use the accounts you already own or create new ones with your business email.

Related: [scorecard.md](../growth-playbook/scorecard.md), [completion-status.md](../growth-playbook/completion-status.md)

---

## Day 1: Search Console and sitemap

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Sign in with the Google account that should own the property long term.
3. Confirm the property `https://imperialcleaninginc.com` is verified. If not, add it and verify via DNS (recommended) or HTML tag.
4. Open **Sitemaps**. Confirm `https://imperialcleaninginc.com/sitemap.xml` is submitted and shows "Success".
5. Open **Pages** (Indexing). Note how many pages are indexed vs "Discovered - currently not indexed". Use [indexing-queue.md](./indexing-queue.md) to request priority URLs (about 10 per day).
6. Export or screenshot current performance: last 16 months if available, or maximum history. Save as `baseline-gsc-YYYY-MM-DD.csv`.

### Sitemap and robots (verify, do not guess)

1. Visit `https://imperialcleaninginc.com/sitemap.xml` in a browser. Confirm it loads XML with money pages, city pages, and resources.
2. Visit `https://imperialcleaninginc.com/robots.txt`. Confirm it allows major crawlers and points to the sitemap URL.
3. Do not add a static `public/robots.txt` file. The site uses dynamic `app/robots.ts`.

---

## Day 2: GA4 and conversions

### Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/).
2. Confirm the GA4 property for `imperialcleaninginc.com` exists and receives data (Realtime report).
3. Link GA4 to Search Console: Admin > Product links > Search Console links.

### Conversion events (qualified, not vanity)

Mark these as **key events** in GA4 when they fire reliably:

| Event | Trigger | Why it matters |
|-------|---------|----------------|
| `generate_lead` or form submit | Contact form success | Primary web conversion |
| `phone_click` | Click-to-call on site | High-intent local action |
| `callback_request` | Quick callback form path | Urgent lead |

**Do not** count page views or scroll depth as primary conversions.

4. Test each event yourself: submit a test form (use a subject line like TEST), click call links, confirm events in GA4 Realtime.
5. Export baseline: Reports > Acquisition > Traffic acquisition, last 16 months. Save as `baseline-ga4-YYYY-MM-DD.csv`.

---

## Day 3: Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Sign in with a Microsoft account tied to the business.
3. Add site `https://imperialcleaninginc.com` if not present. Verify via DNS or GSC import if available.
4. Submit sitemap: `https://imperialcleaninginc.com/sitemap.xml`.
5. Enable IndexNow if offered (optional freshness signal).
6. Export baseline search performance if history exists.

---

## Day 4: 16-month baseline export

Save one folder: `Imperial-baseline-YYYY-MM-DD/` with:

| Source | What to export | Filename |
|--------|----------------|----------|
| GSC | Queries + pages, 16 months | `gsc-queries.csv`, `gsc-pages.csv` |
| GA4 | Sessions, conversions, landing pages | `ga4-traffic.csv`, `ga4-conversions.csv` |
| GBP Insights | Calls, direction requests, website clicks | `gbp-insights-screenshot.png` or CSV if available |
| CRM | Leads, proposals, wins by month | `crm-pipeline.csv` |
| Google Ads | Only if account exists | `ads-history.csv` |
| Phone | Call log or tracking report if exists | `calls-baseline.csv` |

**Why:** You cannot judge playbook impact without a pre-change baseline.

---

## Day 5: UTM rules

Use consistent UTMs so CRM and GA4 agree on source.

### Format

```
https://imperialcleaninginc.com/contact?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_content=CONTENT
```

### Standard values

| Channel | utm_source | utm_medium | utm_campaign example |
|---------|------------|------------|----------------------|
| GBP post | google | gbp | gbp-post-2026-09 |
| Google Ads brand | google | cpc | brand-defense |
| Google Ads commercial | google | cpc | commercial-bofu-if |
| LinkedIn organic | linkedin | social | weekly-post |
| Outbound email | outbound | email | gc-sequence-1 |
| Partner referral | partner | referral | gc-name |

### Rules

1. Never change utm_source spelling mid-campaign.
2. Pass UTMs through to CRM hidden fields on the contact form when possible (web team).
3. Document new campaigns in a simple spreadsheet before launch.

---

## Day 6: CRM stage names

Use the same stage names in CRM, scorecard, and weekly meetings.

### Recommended pipeline stages

| Stage | Definition |
|-------|------------|
| New lead | Form, call, or email received; not yet qualified |
| Qualified | Service fit, location fit, decision maker identified |
| Walkthrough scheduled | Site visit or scope call on calendar |
| Proposal sent | Written quote or bid delivered |
| Negotiation | Scope, price, or timing discussion |
| Won | Contract signed or PO received |
| Lost | Declined, no response after close-loop, or unqualified |
| Nurture | Not ready now; follow up later |

### Required fields on every opportunity

- Source (organic, GBP, ads, outbound, referral, partner)
- Segment (GC, property manager, medical, dealership, school, other)
- Service type (construction, janitorial, office, industry-specific)
- Market (city)
- Estimated recurring MRR OR project value

---

## Day 7: Review and handoff

1. Confirm all baseline files are saved in one shared location the owner and marketing lead can access.
2. Schedule weekly 30-minute scorecard review (Fridays recommended).
3. Mark measurement items in [completion-status.md](../growth-playbook/completion-status.md).
4. Only after Days 1-7 are complete: consider Google Ads launch brief ([google-ads-launch.md](./google-ads-launch.md)).

---

## Done checklist

- [ ] GSC verified, sitemap submitted, baseline exported
- [ ] GA4 receiving data, key events marked and tested
- [ ] Bing Webmaster verified, sitemap submitted
- [ ] 16-month baseline folder saved
- [ ] UTM rules documented
- [ ] CRM stages named and in use
- [ ] Weekly scorecard meeting on calendar

---

## What web has already shipped (verify, do not redo)

- Dynamic sitemap at `/sitemap.xml`
- Dynamic robots at `/robots.txt` with AI crawler allow rules
- `llms.txt` and `llms-full.txt` for machine-readable entity summary
- Contact form with qualification fields (facility type, scope, location)

Owner still must log into GSC, GA4, Bing, GBP, CRM, and ads platforms. Those cannot be completed from code.

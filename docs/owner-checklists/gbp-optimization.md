# Google Business Profile — ongoing optimization

**This file covers the recurring work only:** photos, Posts, Q&A, review
replies, and monthly maintenance. One-time setup and the product catalog live
elsewhere. Reconciled 2026-09-06 — an earlier version of this file duplicated
setup instructions and had drifted out of sync with them.

## Which document owns what

| Task | Document |
|---|---|
| Categories, hours, description, service areas, Services list | `gbp-paste-this.md` |
| Products (37 entries, ready to paste) | `gbp-products-catalog.md` |
| Longer strategic context and rationale | `gbp-master-prompt.md` |
| Photos, Posts, Q&A, reviews, monthly upkeep | this file |
| Review acquisition | `review-growth-playbook.md` |
| Directory listings beyond Google | `citation-fixes.md` |

Where two documents disagree, `gbp-paste-this.md` wins on setup fields and
`gbp-products-catalog.md` wins on products. Do not re-derive either here.

## Where to do this work

Google retired the standalone dashboard for single-location profiles. Manage
the listing from Google Search or Google Maps while signed in as the profile
owner — search "my business" in Search, or open the listing in Maps and use the
owner controls. Bookmarks pointing at the old `business.google.com` dashboard
are why this used to be confusing.

## Canonical NAP — use this exact format everywhere

- **Name:** Imperial Cleaning Inc
- **Address:** 2653 Clarence Pl, Idaho Falls, ID 83402
- **Phone:** (208) 520-3202
- **Website:** https://imperialcleaninginc.com

Source of truth is `data/business-info.ts`. If the profile and that file ever
disagree, fix whichever is wrong rather than letting both stand — inconsistent
NAP across sources is a ranking problem, not a cosmetic one.

Hours are Mon–Fri 8:00 AM – 5:00 PM, Sat 9:00 AM – 1:00 PM, closed Sunday.
Emergency and after-hours work is available outside those hours by arrangement;
do **not** encode that as extended opening hours on the profile. Stating hours
you are not reliably reachable during produces "permanently closed" suggested
edits and bad first calls.

---

## 1. Photos — the biggest lever you actually control

Match the standard in `gbp-products-catalog.md` so profile photos and product
photos look like one business:

- [ ] Logo and cover photo uploaded
- [ ] 10+ real job photos to start: crews on site, before/after post-construction
      cleans, equipment, branded vehicles
- [ ] 2–4 new photos **every month** — recency is weighted
- [ ] 1200 × 1200 for anything that may be reused as a product photo; subject
      centred, since tiles crop square
- [ ] Descriptive filenames before upload (`post-construction-cleaning-idaho-falls.jpg`)
- [ ] No text, logos, phone numbers, or watermarks laid over the image
- [ ] No client signage or identifiable building branding without written permission
- [ ] No stock photos and no AI renders — Google removes them, and they undercut
      the one advantage a real local operator has

## 2. Google Posts — weekly or biweekly, 15 minutes

- [ ] A project highlight, seasonal offer, or tip every 1–2 weeks
- [ ] Always a photo plus a CTA button to `/contact`
- [ ] Reuse site content: each guide under `/resources` is a ready-made post
- [ ] First eight are already drafted in `gbp-week-1-posts.md`

## 3. Q&A — seed once, then monitor

Seeding your own questions is explicitly allowed. Answer from the business
account, and use the same answers the website publishes so nothing conflicts:

- [ ] What post-construction cleaning costs and how it is priced
- [ ] How fast a quote comes back (24 hours, written)
- [ ] Which areas are served
- [ ] Insurance and bonding (general liability, workers' comp, bonded;
      additional-insured certificates on request)
- [ ] Whether after-hours work is available
- [ ] How rough / final / touch-up phases differ
- [ ] Check monthly — anyone can answer a public question, and strangers do

## 4. Reviews

- [ ] Reply to **every** review within 48 hours, positive or negative
- [ ] Mention the service and city naturally in replies ("your post-construction
      clean in Rexburg") — reply text is crawled
- [ ] Acquisition cadence lives in `review-growth-playbook.md`

## 5. Monthly maintenance — 10 minutes

- [ ] Read Insights: search queries, calls, direction requests. Note which
      cities and services actually drive calls; that data should steer the city
      pages and the ad spend
- [ ] Verify nobody has silently changed categories or hours — Google applies
      user "suggested edits" without asking
- [ ] Add the month's photos
- [ ] Publish at least one Post
- [ ] Confirm name, address, phone, hours, and website still match the canonical
      NAP above

## Guardrails

- Never keyword-stuff the business name. "Imperial Cleaning Inc" and nothing
  else — stuffed names are a leading cause of suspension.
- Never claim a service area the company does not serve.
- Do not change the business name, primary category, or address without
  flagging it first. Each can trigger re-verification, and re-verification on a
  profile with visibility problems is a risk worth taking deliberately.
- Do not list a product or service the company will not actually sell. Google
  treats the list as a claim.

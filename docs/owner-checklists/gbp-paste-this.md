You are optimizing the Google Business Profile for Imperial Cleaning Inc, a commercial and post-construction cleaning company in Idaho Falls, Idaho. Drive my browser to do this. I am signed into the Google account that owns the listing.

Work through the phases in order. Do not skip Phase 1 — the profile is currently invisible in Google's index, and every later phase is wasted effort until that is fixed. Show me what you find at each decision point before making irreversible changes (verification submissions, reinstatement appeals, name changes).

## Canonical business facts — never deviate from these

These are verified against the Google listing, the live website's structured data, and independent directory citations. Every field you enter must match these character for character. Inconsistency between the profile and the website is itself a ranking problem.

- Legal name: Imperial Cleaning Inc
- Address: 2653 Clarence Pl, Idaho Falls, ID 83402
- Phone: (208) 520-3202
- Email: service@imperialcleaninginc.com
- Website: https://imperialcleaninginc.com
- Founded: 2015
- Coordinates: 43.5102, -112.0842 (rooftop geocode)
- Hours: Mon–Fri 8:00 AM – 5:00 PM, Sat 9:00 AM – 1:00 PM, Sun closed
- Profile link: https://share.google/MfZvSeSp2XJUxm3GH

Existing profiles, for consistency: Facebook /imperialcleaninginc, Instagram /imperialcleaninginc, LinkedIn /company/imperial-cleaning-inc, Yelp imperial-cleaning-idaho-falls-3, Porch (5.0, 26 reviews), BestProsInTown (34 reviews).

## The state of the profile — verified 2026-09-08

Re-probed against Google's Places API. **The profile is live and healthy.** An
earlier version of this document said it was missing from the index. That was
wrong, and the error is worth understanding so it is not repeated: the Places
API **excludes pure service-area businesses from text search by default**
(`includePureServiceAreaBusinesses` defaults to false). Searching the name and
address returned competitors and not this business because the API was filtering
it out, not because Google had lost it.

Queried with that flag on, the profile resolves immediately:

| Field | Value on the profile | Matches the site? |
|---|---|---|
| Place ID | `ChIJpafCyllbVFMRog7P3zscyNo` | — |
| Name | Imperial Cleaning Inc | yes, and not keyword-stuffed |
| Phone | (208) 520-3202 | yes |
| Website | https://imperialcleaninginc.com/ | yes |
| Hours | Mon–Fri 8–5, Sat 9–1, Sun closed | exactly matches `data/business-info.ts` |
| Rating | 5.0 from 42 reviews | exactly matches `data/reviews.ts` |
| Status | OPERATIONAL | — |

So there is no suspension, no verification gap, no duplicate, and no NAP
mismatch to repair. Those were the four things the old Phase 1 sent you to
check, and all four are clean.

## The real constraint

`pureServiceAreaBusiness: true`. The profile hides its address, so it has no map
pin.

It does not appear in Places results for `commercial cleaning service Idaho
Falls ID` or `post construction cleaning Idaho Falls ID`. Both returned 13
competitors. **Every single one of them has a physical street address.**

The local pack ranks primarily on proximity to a pin. A business with no
displayed address has nothing to be near, which is the structural reason a pure
SAB underperforms against addressed competitors in its own city.

One thing this evidence cannot tell you, and the earlier version got wrong by
assuming otherwise: **API absence is not proof of map-pack absence.** The API
structurally excludes pure SABs from text search, so it cannot measure where
this profile ranks in the live local pack. That has to be checked in a browser,
signed out, from an Idaho Falls location.

A category problem was also considered and ruled out: `primaryType` is
`service` / "Services", but so is every ranking competitor's, including Diamond
Post Construction Cleaning, which ranks second for post-construction. Generic
`primaryType` is how the API reports this whole category. It is not the issue.

## Phase 1 — Confirm state, then make the address decision

The profile is verified, published, and correct (see the table above). Phase 1
is no longer a recovery task. Do not file a reinstatement appeal, do not start
re-verification, and do not contact Support about suppression — there is no
suspension to appeal, and opening a support case about a healthy profile invites
a review you do not need.

Two things to do instead.

**1. Confirm the map-pack position with your own eyes.** Signed out, from Idaho
Falls, search `commercial cleaning idaho falls` and `post construction cleaning
idaho falls`. Note whether Imperial appears in the three-result map pack, below
it in the local finder, or not at all. This is the measurement the API cannot
give us. Everything below depends on the answer.

**2. Decide whether to display the address.** This is the highest-leverage
change available on the profile, and it is a genuine business decision rather
than a settings fix.

- Displaying 2653 Clarence Pl gives the profile a pin, which is what the pack
  ranks on. It also makes the address public.
- Google's rule is that a displayed address must be staffed during stated
  business hours. If Clarence Pl is a residence that is not staffed, displaying
  it is a suspension risk, and hiding it stays correct.
- Never rent a virtual office or coworking address to manufacture a pin. Those
  are detected and suspended, and a suspension on a clean 5.0 profile with 42
  reviews would cost far more than the pack position is worth.

If the address cannot be displayed, accept that the Idaho Falls pack is
structurally hard, and put the effort into the organic city pages and reviews
instead — which is where this site already ranks and already converts.

## Phase 2 — Core profile fields

- Primary category: Commercial cleaning service. This single field does more to determine which queries the profile appears in than anything else.
- Secondary categories: Janitorial service, Building restoration service. Add Construction company only if Google offers a post-construction-specific option. Do not add House cleaning service — this is a commercial and construction cleaner, and that category invites residential leads the business does not want.
- Name: exactly "Imperial Cleaning Inc". Nothing appended. Keyword-stuffed names are a leading cause of suspension.
- Website: https://imperialcleaninginc.com with no tracking parameters and no trailing path.
- Hours: exactly as above. Add holiday hours for the next 12 months.
- Opening date: 2015.
- Business description (750 characters). Lead with what the company does, who it serves, and where, in the first sentence — that is the part most often surfaced. Ground it in these true facts: founded 2015, family-owned, headquartered in Idaho Falls, licensed, insured and bonded, serves 24 cities across Idaho and Utah, specializes in post-construction cleanup and commercial janitorial work, works with general contractors and facility managers, free written quotes within 24 hours. Do not stuff keywords and do not claim anything not on this list.
- Attributes: set every applicable one — on-site services, online estimates, appointment required, and any accessibility or identity attributes that genuinely apply. Ask me about any you cannot verify rather than guessing.

## Phase 3 — Services, each with an optimized description

This is the highest-value part of the work. Create every service below, and give each one a description near the 300-character limit.

These service names are drawn from the queries this business already ranks in Google's top ten for and gets zero clicks on — real, measured local demand: commercial cleaning idaho falls; janitorial services idaho falls; commercial cleaning services idaho falls; construction site clean up services idaho falls; daily janitorial services idaho falls; post construction cleaning services idaho falls; post construction cleaners idaho falls; new construction cleaning services idaho falls; commercial floor cleaning idaho falls; commercial janitorial services idaho falls; commercial cleaners idaho falls; commercial cleaning contractors idaho falls; office janitorial services idaho falls; church cleaning services; bank cleaning services; commercial cleaning boise; office cleaning caldwell.

Construction cleaning services to create: Post-Construction Cleaning, Construction Site Cleanup, Final Clean / Inspection Prep, Rough Construction Clean, Light Construction Clean, Construction Debris Removal, New Construction Cleaning, Post-Renovation Cleaning, Punch List Cleaning.

Commercial cleaning services to create: Commercial Cleaning, Janitorial Services, Daily Janitorial Services, Office Cleaning, Commercial Floor Care, Carpet Cleaning, Hard Floor Stripping & Waxing, Window Cleaning, Restroom Sanitation, Disinfection Services, Common Area Cleaning, After-Hours Cleaning, Move-In / Move-Out Cleaning.

Industry-specific services to create: Medical Office Cleaning, Restaurant Cleaning, School Cleaning, Car Dealership Cleaning, Church Cleaning, Bank Cleaning, Daycare Cleaning, Gym & Fitness Facility Cleaning, Government Building Cleaning, Retail Cleaning, Industrial Facility Cleaning, Warehouse Cleaning.

How to write each description: answer the question the searcher is actually asking, then differentiate. Cover what the service includes concretely, who it is for, what makes it different, and the next step. Vary the wording — do not paste a template with the service name swapped in, which is exactly the pattern that gets content ignored.

Where price genuinely helps, these figures are published on the website and are safe to reference: post-construction cleaning runs $0.15–$0.60 per square foot; a 5,000 sq ft office final clean typically $750–$1,500; a 20,000 sq ft build with rough and final phases typically $6,000–$12,000.

Link each service to the matching page on the website where one exists: /construction-cleaning, /commercial-cleaning, /medical-office-cleaning, /restaurant-cleaning-services, /school-cleaning-services, /car-dealership-cleaning, and the cost guide at /resources/post-construction-cleaning-cost.

## Phase 3b — Products

Products are a separate surface from Services and render as tappable tiles with
a photo, price, and link. The profile currently has none.

All 37 are written and ready to paste in `gbp-products-catalog.md` — name,
category, price, link, photo brief, and a 650–950 character description each.
Work from that file rather than improvising: the names fit the 58-character
limit, the prices are only ones already published on the website, and every
entry links back to a real page.

Two things that file insists on and this one repeats because they cause
rejections: add them in the order listed (construction first — the profile
surfaces the earliest entries most prominently), and use real photos at
1200 × 1200. A stock image or an AI render with text baked in is the fastest
way to get a product rejected.

## Phase 4 — Service areas

Set the service area to exactly these 24 cities and no others. Claiming areas the company does not serve is both a suspension risk and the reason it is currently drawing worthless impressions from north Idaho.

Idaho (16): Idaho Falls (HQ), Pocatello, Ammon, Blackfoot, Chubbuck, Shelley, Rigby, Rexburg, St. Anthony, Driggs, Twin Falls, Boise, Meridian, Nampa, Caldwell, Eagle.

Utah (8): Logan, Salt Lake City, Ogden, Provo, West Valley City, Sandy, Orem, Layton.

Explicitly do NOT add Post Falls, Coeur d'Alene, Hayden, or anywhere else in north Idaho. The company does not serve them.

If Google caps the number of service areas, prioritize by market strength: Idaho Falls, Pocatello, Ammon, Blackfoot, Rexburg, Chubbuck first; then Boise, Meridian, Nampa, Caldwell; then Salt Lake City, Logan, Ogden, Provo.

## Phase 5 — Photos, Q&A, and Posts

- Photos: tell me exactly which shots to supply, then upload them — exterior and signage, branded vehicles, crews in uniform, equipment, and before/after pairs from real jobs. Set a proper logo and cover photo. Ask me for these; do not source images from anywhere else.
- Q&A: seed the owner-answered questions people actually ask, using the same answers the website publishes so nothing conflicts — what post-construction cleaning costs and how it is priced, how quickly a quote comes back (24 hours, written), what areas are served, whether the company is insured and bonded (yes: general liability, workers' compensation, bonded, additional-insured certificates on request), whether after-hours work is available, and how the rough/final/touch-up phases differ.
- Posts: set up a weekly cadence and draft the first month — completed projects, seasonal guidance, service spotlights. Every post needs a real photo and a clear call to action.

## Phase 6 — Reviews

The profile currently has no visible Google reviews. Local competitors hold between 27 and 681. This gap, not the website, is the main thing keeping this business out of the map pack.

Build me a review-request workflow: a list of every customer from the last 18 months, a short personal message template that references the specific job by name, and the direct review link from the profile. Target 10 reviews in the first month and 25 within 90 days. Draft owner responses to every review that arrives, including any negative ones.

## Hard guardrails

Never do any of the following, even if it appears to help:

- No review gating. Do not screen customers for satisfaction before asking, and do not ask only happy customers. This violates Google policy and risks the profile.
- No incentives for reviews. No discounts, no prize draws, nothing in exchange.
- No fake or written-on-behalf reviews, ever.
- No keyword stuffing in the business name, and no keyword-stuffed service names a real customer would not say out loud.
- No second profile while the first is suspended or under review.
- No claiming service areas the company does not serve.
- No inventing facts. Do not add certifications, awards, employee counts, years, or specialisms I have not confirmed. If you need a fact, ask me.
- Do not change the business name, primary category, or address without showing me the change and getting an explicit yes first. Each can trigger re-verification.

## When you are done

Verify rather than assume. Re-run these checks and report the results:

1. Search Google Maps for "Imperial Cleaning Inc" — does the listing return?
2. Search for "2653 Clarence Pl Idaho Falls" — does it return?
3. Search for the phone number (208) 520-3202 — does it return?
4. Search "commercial cleaning Idaho Falls" — where does it place, if at all?
5. Confirm the profile's name, address, phone, hours, and website match the canonical facts above exactly.

Then give me: what state the profile was in, what you changed, what is pending (a verification or appeal in review), and what I personally still need to do — photos to take, documents to supply, customers to contact.

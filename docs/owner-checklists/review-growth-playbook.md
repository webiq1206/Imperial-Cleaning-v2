# Review Growth Playbook

The fabricated testimonials and case studies have been removed from the website and replaced with a verified-reviews system. The site now links to your real third-party profiles (Google, Porch, BestProsInTown) and is ready to display real reviews the moment you add them. This playbook is how you generate the real thing.

## Why this matters

- Review count + recency + reply rate are top-3 GBP ranking factors for "cleaning service near me" searches.
- AI assistants (ChatGPT, Gemini, Perplexity) cite businesses with strong third-party review footprints when answering "best commercial cleaning in Idaho Falls" queries.
- The website's review section (`data/reviews.ts`) renders real reviews with proper attribution once you add them - no code changes needed beyond pasting the review data.

## The ask system (make it automatic)

The only review strategy that works is asking every happy customer at the moment of satisfaction:

1. **End of every project / monthly for recurring accounts:** after the final walkthrough or a positive check-in, the crew lead or owner sends the review link the same day.
2. **Use the direct review link:** in GBP, go to "Ask for reviews" and copy the short link (`g.page/r/...`). Save it as a phone shortcut / text template.
3. **Template text message:**
   > Thanks for trusting Imperial Cleaning with [project/building name]! If you were happy with our work, a quick Google review helps our local family business more than you know: [link]
4. **Who to ask:** the person who saw the result - site superintendent, office manager, facility manager. B2B contacts leave detailed reviews that mention the service and city, which is exactly what ranks.
5. **Timing:** within 24 hours of project completion. Response rates collapse after a week.

## Cadence target

- Year 1 goal: 2-4 new Google reviews per month, every month. Steady beats bursts - 30 reviews appearing in one week looks purchased.
- Prioritize Google first. Once a customer has reviewed on Google, a second ask for Porch or Yelp is fine months later.

## Replying (non-negotiable)

- Reply to every review within 48 hours from the business account.
- Mention service + city naturally: "Thanks for having us handle the final clean on your Ammon office build-out."
- Negative reviews: respond calmly, take it offline ("Call me directly at (208) 520-3202"), then ask the platform to reconsider only if the review violates policy. Never argue publicly.

## Getting reviews onto the website

When a good Google review comes in:

1. Open `data/reviews.ts` in the website code.
2. Add an entry to `verifiedReviews` with the reviewer's first name + last initial, rating, date, review text, source platform, and the source URL.
3. Only use reviews that are publicly visible on the third-party platform - every review on the site must be independently verifiable. That is the trust contract that replaced the fabricated testimonials.

## What NOT to do

- Never buy reviews or use review-generation services that post fake reviews - this is the fastest way to a GBP suspension and an FTC violation (fines are per fake review).
- Never review-gate (only asking happy customers via a filter survey is against Google policy if unhappy customers are blocked from the link).
- Never incentivize reviews with discounts - also against Google policy.
- Don't ask employees or family to review.

## 90-day kickoff plan

- Week 1: set up the GBP short link + text template. Send the ask to your 5-10 happiest current/recent clients personally.
- Weeks 2-12: ask after every completed project, no exceptions. Track asks vs. reviews in a simple spreadsheet.
- Day 90: you should have 10-20 real Google reviews. Add the best 3-5 to `data/reviews.ts` so the website's review section shows real, sourced quotes.

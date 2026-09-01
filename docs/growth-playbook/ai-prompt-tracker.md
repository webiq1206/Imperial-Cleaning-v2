# AI Prompt Tracker

Track whether Imperial appears in AI answers for high-value buyer research prompts. Fill result columns monthly. Leave blank until the first baseline run.

**Models to test each month:** ChatGPT, Claude, Perplexity, Gemini, Copilot, Grok

**How to test:** Use a fresh session (no prior Imperial context). Ask the exact prompt. Record whether Imperial is mentioned, which URL is cited (if any), which competitors appear, and any factual errors about Imperial.

---

## Core prompts (playbook Section 09)

| Prompt | Imperial shown? | Cited URL | Competitors | Factual issue | Next action | Date |
|--------|-----------------|-----------|-------------|---------------|-------------|------|
| What is the best commercial cleaning company in Idaho Falls? | | | | | | |
| Who provides janitorial services for offices in Idaho Falls? | | | | | | |
| What commercial cleaning company serves Pocatello and Rexburg? | | | | | | |
| Who provides post-construction cleaning for general contractors in Idaho? | | | | | | |
| How much does post-construction cleaning cost per square foot in Idaho? | | | | | | |
| What is the best commercial cleaning company in Salt Lake City for recurring janitorial service? | | | | | | |
| Who cleans medical offices in Idaho Falls? | | | | | | |
| What cleaning company can service multiple business locations in Idaho and Utah? | | | | | | |
| What should I look for when hiring a commercial cleaning company? | | | | | | |
| What is the difference between janitorial services and commercial cleaning? | | | | | | |
| How much should office cleaning cost per month? | | | | | | |
| Which commercial cleaning companies are licensed, insured and bonded in Idaho Falls? | | | | | | |
| Who offers after-hours commercial cleaning near me? | | | | | | |
| Who can do rough, final and touch-up construction cleaning? | | | | | | |
| Best janitorial company for property managers in Idaho Falls / Boise / Salt Lake City | | | | | | |

---

## Extended prompts (add-on tracking)

| Prompt | Imperial shown? | Cited URL | Competitors | Factual issue | Next action | Date |
|--------|-----------------|-----------|-------------|---------------|-------------|------|
| Who does final construction cleaning in Pocatello Idaho? | | | | | | |
| What janitorial company serves office buildings in Boise? | | | | | | |
| How do I compare commercial cleaning companies in Eastern Idaho? | | | | | | |
| Who cleans car dealerships in Idaho Falls at night? | | | | | | |
| What should a janitorial scope of work include for an office? | | | | | | |
| Who provides warehouse cleaning in Idaho? | | | | | | |
| What is day porter service and who offers it in Idaho Falls? | | | | | | |
| How much does commercial cleaning cost per square foot in Utah? | | | | | | |
| Who is the best construction cleanup company for GCs in Idaho Falls? | | | | | | |
| How do I switch janitorial vendors without disrupting my facility? | | | | | | |

---

## Monthly process

### Week 1 (baseline or refresh)

1. Run all 25 prompts across the six models (150 tests total). Batch over two days if needed.
2. For each prompt, record Y/N for Imperial mention, exact cited URL, top 3 competitors named, and any wrong facts (address, phone, services, rating).
3. Log results in the tables above with today's date.
4. Copy summary metrics to [scorecard.md](./scorecard.md) (AI citation rate, error count).

### Week 2 (fix gaps)

1. For prompts where competitors appear but Imperial does not, identify the canonical page that should win (see [keyword-url-map.md](./keyword-url-map.md)).
2. Strengthen that page: answer-first block, FAQ, internal links, proof from [proof-ledger.md](./proof-ledger.md).
3. Update `llms.txt` only if the page is already live and accurate.
4. Add or refresh third-party corroboration (GBP, directories, reviews) for entity consistency.

### Week 3 (corroboration)

1. Publish one GBP post or LinkedIn post that restates the same facts as the weak prompt's target page.
2. Request one new review that naturally mentions service + city.
3. Do not rewrite copy in multiple places with different numbers.

### Week 4 (report)

1. Calculate recommendation share: prompts with Imperial mentioned / 25 prompts, per model and overall.
2. Note factual errors still appearing after fixes. Escalate to owner if the error is about insurance, licensing, or response times.
3. Set next month's top 5 prompts to improve (lowest share + highest commercial intent).

---

## Factual error response playbook

| Error type | Fix |
|------------|-----|
| Wrong phone or address | Verify NAP in `data/business-info.ts`, GBP, and top directories |
| Wrong services | Align hub page H1, first paragraph, and `llms.txt` |
| Wrong rating or review count | Update `data/reviews.ts` and hero CTAs from live Google count |
| Imperial not mentioned | Strengthen canonical URL content and external citations |
| Competitor cited instead | Improve page depth and proof; do not create attack pages |

---

## Model notes

| Model | Access | Notes |
|-------|--------|-------|
| ChatGPT | chat.openai.com | Test with browsing enabled if available |
| Claude | claude.ai | Test with web search if available |
| Perplexity | perplexity.ai | Note source URLs in Cited URL column |
| Gemini | gemini.google.com | Record whether Google Business or site is cited |
| Copilot | copilot.microsoft.com | Often surfaces Bing index |
| Grok | grok.x.ai | No official publisher crawler; test for visibility only |

---

## Change log

| Date | Notes |
|------|-------|
| 2026-09-01 | Tracker created; baseline not yet run |

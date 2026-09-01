# Request Indexing queue

Sixty-five pages are sitting in Search Console as **Discovered — currently not
indexed**, every one with a last-crawl date of `1969-12-31` — Unix epoch zero,
meaning Google has never fetched them. That is a crawl-budget decision about the
domain, not a fault in the pages: canonicals, sitemap coverage, internal linking,
content depth, and response times were all audited and came back clean.

Request Indexing is the one lever that bypasses crawl budget for a specific URL,
and it works. It is also a button in the Search Console UI with no API behind it
(the URL Inspection API is read-only), so it cannot be automated — it has to be
clicked.

## How to work this list

1. Open [Search Console](https://search.google.com/search-console) with the
   `imperialcleaninginc.com` property selected.
2. Paste a URL into the inspection bar at the top of the page.
3. Wait for the result, then click **Request Indexing**.
4. Tick it off below and move to the next one.

Google's daily quota is roughly ten URLs. If you hit "Quota exceeded", stop and
resume tomorrow — the remaining requests that day will not register.

Order matters: this list runs highest commercial value first, then the Idaho
Falls HQ market, then the rest of Eastern Idaho, then Treasure Valley, then
Utah. Utility pages are last on purpose — they are worth indexing but never at
the expense of a page that earns work.

Requesting is not a guarantee. It puts the URL in a priority queue; indexing
still typically lands within days rather than instantly, and a page can be
crawled and still not indexed. Re-request anything still missing after two weeks.

### Day 1 — Money pages and service/industry pages

- [ ] `https://imperialcleaninginc.com/construction-cleaning`
- [ ] `https://imperialcleaninginc.com/about`
- [ ] `https://imperialcleaninginc.com/contact`
- [ ] `https://imperialcleaninginc.com/car-dealership-cleaning`
- [ ] `https://imperialcleaninginc.com/medical-office-cleaning`
- [ ] `https://imperialcleaninginc.com/restaurant-cleaning-services`
- [ ] `https://imperialcleaninginc.com/school-cleaning-services`
- [ ] `https://imperialcleaninginc.com/resources/commercial-cleaning-vs-janitorial`
- [ ] `https://imperialcleaninginc.com/resources/construction-cleanup-process-checklist`
- [ ] `https://imperialcleaninginc.com/resources/post-construction-cleaning-cost`

### Day 2 — Guides, service-area hubs, and the Idaho Falls HQ market

- [ ] `https://imperialcleaninginc.com/resources/what-is-post-construction-cleaning`
- [ ] `https://imperialcleaninginc.com/service-areas`
- [ ] `https://imperialcleaninginc.com/service-areas/idaho`
- [ ] `https://imperialcleaninginc.com/service-areas/utah`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/idaho-falls`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/idaho-falls`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/ammon`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/blackfoot`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/chubbuck`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/driggs`

### Day 3 — Eastern Idaho region

- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/pocatello`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/rexburg`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/rigby`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/shelley`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/st-anthony`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/ammon`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/blackfoot`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/chubbuck`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/driggs`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/pocatello`

### Day 4 — Eastern Idaho region (cont.) and Treasure Valley

- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/rexburg`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/rigby`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/shelley`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/st-anthony`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/boise`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/caldwell`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/eagle`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/meridian`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/nampa`
- [ ] `https://imperialcleaninginc.com/idaho/commercial-cleaning/twin-falls`

### Day 5 — Treasure Valley and Magic Valley

- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/boise`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/caldwell`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/eagle`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/meridian`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/nampa`
- [ ] `https://imperialcleaninginc.com/idaho/construction-cleaning/twin-falls`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/layton`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/logan`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/ogden`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/orem`

### Day 6 — Utah — Wasatch Front

- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/provo`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/salt-lake-city`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/sandy`
- [ ] `https://imperialcleaninginc.com/utah/commercial-cleaning/west-valley-city`
- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/layton`
- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/logan`
- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/orem`
- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/provo`
- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/salt-lake-city`
- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/sandy`

### Day 7 — Utah (cont.) and low-priority utility pages

- [ ] `https://imperialcleaninginc.com/utah/construction-cleaning/west-valley-city`
- [ ] `https://imperialcleaninginc.com/privacy-policy`
- [ ] `https://imperialcleaninginc.com/resources`
- [ ] `https://imperialcleaninginc.com/sitemap`
- [ ] `https://imperialcleaninginc.com/terms-of-service`

## When this list is finished

Re-export the **Discovered — currently not indexed** report from Search Console
and compare. Anything still listed either was not crawled yet or was crawled and
declined; both cases point back at domain authority, which is earned through the
Business Profile and real inbound links rather than through this queue.

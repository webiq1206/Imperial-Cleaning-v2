# SEO Audit Inventory

57 public pages discovered. Internal admin and API routes are out of scope.

## Static pages (9)

| URL | Source | Audit file |
|---|---|---|
| `/` | `app/page.tsx` | `audits/home.md` |
| `/about` | `app/about/page.tsx` | `audits/about.md` |
| `/contact` | `app/contact/page.tsx` | `audits/contact.md` |
| `/commercial-cleaning` | `app/commercial-cleaning/page.tsx` | `audits/commercial-cleaning.md` |
| `/construction-cleaning` | `app/construction-cleaning/page.tsx` | `audits/construction-cleaning.md` |
| `/service-areas/idaho` | `app/service-areas/idaho/page.tsx` | `audits/service-areas-idaho.md` |
| `/service-areas/utah` | `app/service-areas/utah/page.tsx` | `audits/service-areas-utah.md` |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | `audits/privacy-policy.md` |
| `/terms-of-service` | `app/terms-of-service/page.tsx` | `audits/terms-of-service.md` |

## Dynamic location pages (48)

All driven by `app/[state]/[service]/[city]/page.tsx`. Audited collectively in `audits/_city-template.md` because they share one generator. Per-city deviations are noted there.

### Idaho cities (24 city pages = 12 cities x 2 services)

| City | Construction URL | Commercial URL |
|---|---|---|
| Idaho Falls | `/idaho/construction-cleaning/idaho-falls` | `/idaho/commercial-cleaning/idaho-falls` |
| Pocatello | `/idaho/construction-cleaning/pocatello` | `/idaho/commercial-cleaning/pocatello` |
| Blackfoot | `/idaho/construction-cleaning/blackfoot` | `/idaho/commercial-cleaning/blackfoot` |
| Rexburg | `/idaho/construction-cleaning/rexburg` | `/idaho/commercial-cleaning/rexburg` |
| Twin Falls | `/idaho/construction-cleaning/twin-falls` | `/idaho/commercial-cleaning/twin-falls` |
| Boise | `/idaho/construction-cleaning/boise` | `/idaho/commercial-cleaning/boise` |
| Meridian | `/idaho/construction-cleaning/meridian` | `/idaho/commercial-cleaning/meridian` |
| Nampa | `/idaho/construction-cleaning/nampa` | `/idaho/commercial-cleaning/nampa` |
| Caldwell | `/idaho/construction-cleaning/caldwell` | `/idaho/commercial-cleaning/caldwell` |
| Eagle | `/idaho/construction-cleaning/eagle` | `/idaho/commercial-cleaning/eagle` |
| Ammon | `/idaho/construction-cleaning/ammon` | `/idaho/commercial-cleaning/ammon` |
| Chubbuck | `/idaho/construction-cleaning/chubbuck` | `/idaho/commercial-cleaning/chubbuck` |
| Shelley | `/idaho/construction-cleaning/shelley` | `/idaho/commercial-cleaning/shelley` |
| Rigby | `/idaho/construction-cleaning/rigby` | `/idaho/commercial-cleaning/rigby` |
| St. Anthony | `/idaho/construction-cleaning/st-anthony` | `/idaho/commercial-cleaning/st-anthony` |
| Driggs | `/idaho/construction-cleaning/driggs` | `/idaho/commercial-cleaning/driggs` |
| Southeastern Idaho | `/idaho/construction-cleaning/southeastern-idaho` | `/idaho/commercial-cleaning/southeastern-idaho` |
| Magic Valley | `/idaho/construction-cleaning/magic-valley` | `/idaho/commercial-cleaning/magic-valley` |
| Treasure Valley | `/idaho/construction-cleaning/treasure-valley` | `/idaho/commercial-cleaning/treasure-valley` |
| Eastern Idaho Extended | `/idaho/construction-cleaning/eastern-idaho-extended` | `/idaho/commercial-cleaning/eastern-idaho-extended` |

### Utah cities (24 city pages = remainder)

| City | Construction URL | Commercial URL |
|---|---|---|
| Logan | `/utah/construction-cleaning/logan` | `/utah/commercial-cleaning/logan` |
| Salt Lake City | `/utah/construction-cleaning/salt-lake-city` | `/utah/commercial-cleaning/salt-lake-city` |
| Ogden | `/utah/construction-cleaning/ogden` | `/utah/commercial-cleaning/ogden` |
| Provo | `/utah/construction-cleaning/provo` | `/utah/commercial-cleaning/provo` |
| West Valley City | `/utah/construction-cleaning/west-valley-city` | `/utah/commercial-cleaning/west-valley-city` |
| Sandy | `/utah/construction-cleaning/sandy` | `/utah/commercial-cleaning/sandy` |
| Orem | `/utah/construction-cleaning/orem` | `/utah/commercial-cleaning/orem` |
| Layton | `/utah/construction-cleaning/layton` | `/utah/commercial-cleaning/layton` |
| Northern Utah / Cache Valley | `/utah/construction-cleaning/northern-utah-cache-valley` | `/utah/commercial-cleaning/northern-utah-cache-valley` |
| Wasatch Front | `/utah/construction-cleaning/wasatch-front` | `/utah/commercial-cleaning/wasatch-front` |

(Headquarters entry in `data/service-locations.ts` is metadata only and does not render a public page.)

## Sitewide assets reviewed
- `app/layout.tsx` (head defaults, Organization JSON-LD)
- `app/sitemap.ts` (57 URLs total)
- `app/robots.ts` and `public/robots.txt`
- `public/llms.txt`, `public/llms-full.txt`
- `public/og-image.png` (3984 x 3405 actual, declared 1200 x 630)
- `public/header-logo.svg` and `public/hero-logo.png`
- `public/site.webmanifest`, `public/favicon*`, `public/apple-touch-icon.png`
- `components/structured-data.tsx`
- `components/shared/related-content.tsx` (internal linking)
- `components/seo-head.tsx` (legacy, not imported anywhere - dead code)

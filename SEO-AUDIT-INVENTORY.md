# SEO Audit Inventory

57 public pages discovered (9 static + 48 dynamic location pages). Internal admin and API routes are out of scope.

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

All driven by `app/[state]/[service]/[city]/page.tsx` iterating `allServiceLocations` from `data/service-locations.ts`. `allServiceLocations` resolves to 24 locations at runtime (16 Idaho + 8 Utah) x 2 services = 48 pages. Audited collectively in `audits/_city-template.md` because they share one generator.

### Idaho locations (16 locations x 2 services = 32 pages)
Idaho Falls, Pocatello, Blackfoot, Rexburg, Twin Falls, Boise, Meridian, Nampa, Caldwell, Eagle, Ammon, Chubbuck, Shelley, Rigby, St. Anthony, Driggs.

Each generates `/idaho/construction-cleaning/{slug}` and `/idaho/commercial-cleaning/{slug}`.

### Utah locations (8 locations x 2 services = 16 pages)
Logan, Salt Lake City, Ogden, Provo, West Valley City, Sandy, Orem, Layton.

Each generates `/utah/construction-cleaning/{slug}` and `/utah/commercial-cleaning/{slug}`.

(The regional entries `Southeastern Idaho`, `Magic Valley`, `Treasure Valley`, `Northern Utah / Cache Valley`, `Wasatch Front`, `Eastern Idaho Extended`, and the `Imperial Cleaning Inc. Headquarters` entry exist in `data/service-locations.ts` but are not part of `allServiceLocations` at runtime, so they do not render public pages.)

## Sitewide assets reviewed
- `app/layout.tsx` (head defaults, Organization JSON-LD)
- `app/sitemap.ts` (57 URLs total)
- `app/robots.ts` and `public/robots.txt`
- `public/llms.txt`, `public/llms-full.txt`
- `public/og-image.png` (regenerated at 1200 x 630)
- `public/header-logo.svg` and `public/hero-logo.png`
- `public/site.webmanifest`, `public/favicon*`, `public/apple-touch-icon.png`
- `components/structured-data.tsx`
- `components/shared/related-content.tsx` (internal linking)

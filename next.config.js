/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  
  poweredByHeader: false,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-tabs'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imperialcleaninginc.com',
      },
    ],
  },
  
  async redirects() {
    return [
      // Legacy construction-cleaning city redirects — state-aware
      // Idaho cities
      { source: '/construction-cleaning/idaho-falls',        destination: '/idaho/construction-cleaning/idaho-falls',        permanent: true },
      { source: '/construction-cleaning/pocatello',          destination: '/idaho/construction-cleaning/pocatello',          permanent: true },
      { source: '/construction-cleaning/blackfoot',          destination: '/idaho/construction-cleaning/blackfoot',          permanent: true },
      { source: '/construction-cleaning/rexburg',            destination: '/idaho/construction-cleaning/rexburg',            permanent: true },
      { source: '/construction-cleaning/twin-falls',         destination: '/idaho/construction-cleaning/twin-falls',         permanent: true },
      { source: '/construction-cleaning/boise',              destination: '/idaho/construction-cleaning/boise',              permanent: true },
      { source: '/construction-cleaning/meridian',           destination: '/idaho/construction-cleaning/meridian',           permanent: true },
      { source: '/construction-cleaning/nampa',              destination: '/idaho/construction-cleaning/nampa',              permanent: true },
      { source: '/construction-cleaning/caldwell',           destination: '/idaho/construction-cleaning/caldwell',           permanent: true },
      { source: '/construction-cleaning/eagle',              destination: '/idaho/construction-cleaning/eagle',              permanent: true },
      { source: '/construction-cleaning/ammon',              destination: '/idaho/construction-cleaning/ammon',              permanent: true },
      { source: '/construction-cleaning/chubbuck',           destination: '/idaho/construction-cleaning/chubbuck',           permanent: true },
      { source: '/construction-cleaning/shelley',            destination: '/idaho/construction-cleaning/shelley',            permanent: true },
      { source: '/construction-cleaning/rigby',              destination: '/idaho/construction-cleaning/rigby',              permanent: true },
      { source: '/construction-cleaning/st-anthony',         destination: '/idaho/construction-cleaning/st-anthony',         permanent: true },
      { source: '/construction-cleaning/driggs',             destination: '/idaho/construction-cleaning/driggs',             permanent: true },
      // Utah cities
      { source: '/construction-cleaning/logan',              destination: '/utah/construction-cleaning/logan',               permanent: true },
      { source: '/construction-cleaning/salt-lake-city',     destination: '/utah/construction-cleaning/salt-lake-city',      permanent: true },
      { source: '/construction-cleaning/ogden',              destination: '/utah/construction-cleaning/ogden',               permanent: true },
      { source: '/construction-cleaning/provo',              destination: '/utah/construction-cleaning/provo',               permanent: true },
      { source: '/construction-cleaning/west-valley-city',   destination: '/utah/construction-cleaning/west-valley-city',    permanent: true },
      { source: '/construction-cleaning/sandy',              destination: '/utah/construction-cleaning/sandy',               permanent: true },
      { source: '/construction-cleaning/orem',               destination: '/utah/construction-cleaning/orem',                permanent: true },
      { source: '/construction-cleaning/layton',             destination: '/utah/construction-cleaning/layton',              permanent: true },
      // Unknown legacy slugs fall back to the service hub
      { source: '/construction-cleaning/:location',          destination: '/construction-cleaning',                          permanent: true },

      // Legacy commercial-cleaning city redirects — state-aware
      // Idaho cities
      { source: '/commercial-cleaning/idaho-falls',          destination: '/idaho/commercial-cleaning/idaho-falls',          permanent: true },
      { source: '/commercial-cleaning/pocatello',            destination: '/idaho/commercial-cleaning/pocatello',            permanent: true },
      { source: '/commercial-cleaning/blackfoot',            destination: '/idaho/commercial-cleaning/blackfoot',            permanent: true },
      { source: '/commercial-cleaning/rexburg',              destination: '/idaho/commercial-cleaning/rexburg',              permanent: true },
      { source: '/commercial-cleaning/twin-falls',           destination: '/idaho/commercial-cleaning/twin-falls',           permanent: true },
      { source: '/commercial-cleaning/boise',                destination: '/idaho/commercial-cleaning/boise',                permanent: true },
      { source: '/commercial-cleaning/meridian',             destination: '/idaho/commercial-cleaning/meridian',             permanent: true },
      { source: '/commercial-cleaning/nampa',                destination: '/idaho/commercial-cleaning/nampa',                permanent: true },
      { source: '/commercial-cleaning/caldwell',             destination: '/idaho/commercial-cleaning/caldwell',             permanent: true },
      { source: '/commercial-cleaning/eagle',                destination: '/idaho/commercial-cleaning/eagle',                permanent: true },
      { source: '/commercial-cleaning/ammon',                destination: '/idaho/commercial-cleaning/ammon',                permanent: true },
      { source: '/commercial-cleaning/chubbuck',             destination: '/idaho/commercial-cleaning/chubbuck',             permanent: true },
      { source: '/commercial-cleaning/shelley',              destination: '/idaho/commercial-cleaning/shelley',              permanent: true },
      { source: '/commercial-cleaning/rigby',                destination: '/idaho/commercial-cleaning/rigby',                permanent: true },
      { source: '/commercial-cleaning/st-anthony',           destination: '/idaho/commercial-cleaning/st-anthony',           permanent: true },
      { source: '/commercial-cleaning/driggs',               destination: '/idaho/commercial-cleaning/driggs',               permanent: true },
      // Utah cities
      { source: '/commercial-cleaning/logan',                destination: '/utah/commercial-cleaning/logan',                 permanent: true },
      { source: '/commercial-cleaning/salt-lake-city',       destination: '/utah/commercial-cleaning/salt-lake-city',        permanent: true },
      { source: '/commercial-cleaning/ogden',                destination: '/utah/commercial-cleaning/ogden',                 permanent: true },
      { source: '/commercial-cleaning/provo',                destination: '/utah/commercial-cleaning/provo',                 permanent: true },
      { source: '/commercial-cleaning/west-valley-city',     destination: '/utah/commercial-cleaning/west-valley-city',      permanent: true },
      { source: '/commercial-cleaning/sandy',                destination: '/utah/commercial-cleaning/sandy',                 permanent: true },
      { source: '/commercial-cleaning/orem',                 destination: '/utah/commercial-cleaning/orem',                  permanent: true },
      { source: '/commercial-cleaning/layton',               destination: '/utah/commercial-cleaning/layton',                permanent: true },
      // Unknown legacy slugs fall back to the service hub
      { source: '/commercial-cleaning/:location',            destination: '/commercial-cleaning',                            permanent: true },
      // WWW to non-WWW redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.imperialcleaninginc.com',
          },
        ],
        destination: 'https://imperialcleaninginc.com/:path*',
        permanent: true,
      },

      // Old WordPress industry/service pages.
      // medical-office-cleaning, restaurant-cleaning-services,
      // school-cleaning-services, and car-dealership-cleaning were REBUILT as
      // live pages at their original URLs (no redirect needed - direct
      // restoration of legacy link equity). The remaining low-volume legacy
      // URLs still 301 to /commercial-cleaning.
      { source: '/church-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/church-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/bank-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/bank-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/electrostatic-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/electrostatic-cleaning-services/', destination: '/commercial-cleaning', permanent: true },

      // Old structural pages
      { source: '/industries', destination: '/commercial-cleaning', permanent: true },
      { source: '/industries/', destination: '/commercial-cleaning', permanent: true },
      { source: '/apply', destination: '/contact', permanent: true },
      { source: '/apply/', destination: '/contact', permanent: true },

      // Legacy WordPress URLs that were still earning impressions but had no
      // redirect, so every one of them returned a 404. Measured over the last
      // 16 months of Search Console data, these accounted for ~13,700
      // impressions - including /post-construction-cleaning/ at 3,849, which is
      // the exact service the business sells. Each is mapped to its closest
      // live equivalent rather than blanket-redirected to the homepage, so the
      // redirect stays relevant and keeps the link equity.
      { source: '/post-construction-cleaning', destination: '/construction-cleaning', permanent: true },
      { source: '/post-construction-cleaning/', destination: '/construction-cleaning', permanent: true },
      { source: '/daycare-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/daycare-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/gym-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/gym-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/government-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/government-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/idaho-falls-office-cleaning-services', destination: '/idaho/commercial-cleaning/idaho-falls', permanent: true },
      { source: '/idaho-falls-office-cleaning-services/', destination: '/idaho/commercial-cleaning/idaho-falls', permanent: true },
      { source: '/schedule-a-consultation', destination: '/contact', permanent: true },
      { source: '/schedule-a-consultation/', destination: '/contact', permanent: true },

      // Legacy WordPress blog. The posts are gone; the resource centre is the
      // closest live equivalent. The wildcard covers the paginated archive and
      // its cache-busting query strings (/blog/page/6/?ignorenitro=...).
      { source: '/blog', destination: '/resources', permanent: true },
      { source: '/blog/:path*', destination: '/resources', permanent: true },
      { source: '/category/:path*', destination: '/resources', permanent: true },
      { source: '/top-10-benefits-of-using-professional-commercial-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/top-10-benefits-of-using-professional-commercial-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/what-is-electrostatic-disinfection-and-how-does-it-work', destination: '/commercial-cleaning', permanent: true },
      { source: '/what-is-electrostatic-disinfection-and-how-does-it-work/', destination: '/commercial-cleaning', permanent: true },
      { source: '/getting-your-business-ready-for-reopening-during-covid19', destination: '/commercial-cleaning', permanent: true },
      { source: '/getting-your-business-ready-for-reopening-during-covid19/', destination: '/commercial-cleaning', permanent: true },
      { source: '/bacteria-infested-surfaces-missed-by-other-cleaning-companies', destination: '/commercial-cleaning', permanent: true },
      { source: '/bacteria-infested-surfaces-missed-by-other-cleaning-companies/', destination: '/commercial-cleaning', permanent: true },

      // Broken pages from an earlier Next.js deploy
      { source: '/retail-cleaning-services', destination: '/commercial-cleaning', permanent: true },
      { source: '/retail-cleaning-services/', destination: '/commercial-cleaning', permanent: true },
      { source: '/business-office-cleaning', destination: '/commercial-cleaning', permanent: true },
      { source: '/business-office-cleaning/', destination: '/commercial-cleaning', permanent: true },
    ];
  },
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

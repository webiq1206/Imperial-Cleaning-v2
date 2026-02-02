/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization configuration
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
  
  // Redirect legacy URLs to new format
  async redirects() {
    return [
      // Legacy construction cleaning redirects
      {
        source: '/construction-cleaning/:location',
        destination: '/idaho/construction-cleaning/:location',
        permanent: true,
      },
      // Legacy commercial cleaning redirects
      {
        source: '/commercial-cleaning/:location',
        destination: '/idaho/commercial-cleaning/:location',
        permanent: true,
      },
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
    ];
  },
};

module.exports = nextConfig;

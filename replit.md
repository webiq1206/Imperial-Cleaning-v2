# Imperial Cleaning Inc. Website

## Overview
Imperial Cleaning Inc. is a full-stack web application designed for commercial cleaning services across Idaho and Utah. Its primary purpose is to maximize organic search visibility, generate leads, and provide a robust platform for business growth. The site targets commercial contractors and businesses, offering construction and commercial cleaning services, multi-step contact forms, service area pages, and comprehensive analytics to convert organic traffic into qualified leads.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript and Vite.
- **Routing**: Wouter for client-side routing.
- **Styling**: Tailwind CSS with shadcn/ui (Radix UI primitives).
- **State Management**: TanStack Query for server state; React hooks for local state.
- **Form Handling**: React Hook Form with Zod validation.
- **UI/UX Decisions**: Fixed background logo, parallax effects, unified icon colors per city theme, light font-weight (300) typography. Mega menu combines services and locations with a tabbed interface.
- **Features**: Intelligent search lightbox modal with autocomplete; `/state/service/city/` URL structure; location-specific content generation; structured data and city-specific meta tags; multi-step contact forms.

### Backend
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript with ES modules.
- **API Design**: RESTful API with structured error handling.
- **Middleware**: Express middleware for JSON parsing, CORS, and logging.
- **Storage Interface**: Abstracted layer, designed for PostgreSQL, currently in-memory.

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL.
- **Database**: PostgreSQL (configured, in-memory currently).
- **Schema Management**: Drizzle Kit for migrations.
- **Connection**: Neon Database serverless PostgreSQL adapter ready.

### SEO and Analytics
- **SEO Optimization**: Comprehensive meta tags, structured data (LocalBusiness, Service, BreadcrumbList JSON-LD), semantic HTML, canonical links, Open Graph, Twitter Cards, www-to-non-www redirects, heading hierarchy, unique meta tags and image alt tags per page. Enhanced `llms.txt` for AI assistant indexing (43KB, 555 lines) with market-specific success stories, industry expertise, procurement info, testimonials, and service details. Optimized `robots.txt` for priority AI crawlers (15 user-agents). Dynamic sitemap (`sitemap.ts`) with priority rankings based on market importance.
- **Analytics**: Google Analytics 4 with custom event tracking.
- **Performance**: Optimized images (WebP, preload, explicit dimensions, async decoding), minified assets, lazy loading, critical asset preloading, Gzip/Brotli compression, eliminated render-blocking external fonts, system font stacks.

### Contact and Lead Management
- **Lead Capture**: Contact submissions stored with analytics tracking.
- **Communication Channels**: Click-to-call, SMS, email integration.
- **Form Validation**: Client and server-side validation.

## External Dependencies

### Frontend
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query.
- **UI Framework**: Radix UI, Tailwind CSS, class-variance-authority.
- **Routing**: Wouter.
- **Validation**: Zod.
- **Icons**: FontAwesome, Lucide React.

### Backend
- **Express Framework**: Express.js.
- **Database**: Drizzle ORM (PostgreSQL dialect), Neon serverless adapter.
- **Validation**: Zod.

### Build and Development Tools
- **Build Tool**: Vite.
- **TypeScript**: Full TypeScript configuration.
- **Replit Integration**: Cartographer, dev banner plugins.
- **PostCSS**: Autoprefixer.

### External Services
- **Analytics**: Google Analytics 4.
- **Email Service**: Resend API.
- **Database Hosting**: Neon Database.
- **Search Console**: Google Search Console.
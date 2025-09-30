# Imperial Cleaning Inc. Website

## Overview

Imperial Cleaning Inc. is a professional cleaning services website targeting commercial contractors and businesses across Idaho and Utah. The application is built as a modern full-stack web application optimized for SEO and lead generation, featuring construction cleaning and commercial cleaning services. The site includes multi-step contact forms, service area pages, and comprehensive analytics tracking to convert organic search traffic into qualified leads.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (September 30, 2025)

### Hero Section Redesign
- Created reusable InternalHeroSection component matching homepage design with fixed background logo, parallax effects, and sophisticated styling
- Updated all internal pages (Construction Cleaning, Commercial Cleaning, Idaho/Utah Service Areas) to use consistent hero design
- Maintained mobile optimization with -mt-12 spacing and proper background logo display (visible on mobile, hidden on desktop)

### Content Cleanup
- Removed all instances of "In ALL Locations", "ALL Service Areas", and similar unprofessional phrasing from headings and descriptions
- Replaced with regionally scoped, professional language while preserving SEO value and geographic keywords (Idaho, Utah)
- Updates applied to Construction Cleaning, Commercial Cleaning, and Case Studies sections

### Service Area Pages Transformation
- Redesigned Idaho and Utah service area pages from generic city lists to industry-specific playbook format
- Added market overview sections with regional strengths and response time commitments
- Created detailed city playbooks featuring: dominant industries (INL, Chobani, Qualtrics, Hill AFB), operational challenges, tailored solutions, compliance requirements, and proof points
- Implemented service readiness comparison tables showing response times, crew availability, and specializations
- Added operational assurance sections covering licensing, OSHA compliance, 24/7 emergency response, and quality processes
- Maintained all SEO elements (H2 headings with city names, structured data, geographic keywords) while providing actionable content for decision-making

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **UI Components**: Radix UI primitives with custom theming through CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling and request logging
- **Middleware**: Express middleware for JSON parsing, CORS handling, and request/response logging
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Database**: PostgreSQL (configured but not yet connected - currently using in-memory storage)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL adapter ready for deployment

### Authentication and Authorization
- **Current State**: No authentication system implemented (contact forms are public)
- **Session Management**: Basic session handling configured but not actively used
- **Security**: Input validation through Zod schemas and sanitized form submissions

### SEO and Analytics Integration
- **SEO Optimization**: Comprehensive meta tags, structured data (JSON-LD), and semantic HTML
- **Analytics**: Google Analytics 4 integration with custom event tracking
- **Performance**: Optimized images, minified assets, and lazy loading
- **Schema Markup**: LocalBusiness, Service, and FAQ structured data for better search visibility

### Contact and Lead Management
- **Multi-step Forms**: Progressive contact forms with validation and progress tracking
- **Lead Capture**: Contact submissions stored with detailed analytics tracking
- **Communication Channels**: Click-to-call, SMS, and email integration
- **Form Validation**: Client and server-side validation with comprehensive error handling

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, React Query
- **UI Framework**: Radix UI components, Tailwind CSS, class-variance-authority
- **Routing**: Wouter for lightweight client-side routing
- **Validation**: Zod for runtime type checking and form validation
- **Icons**: FontAwesome and Lucide React icons

### Backend Dependencies
- **Express Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL dialect and Neon serverless adapter
- **Validation**: Zod for API request validation
- **Development**: tsx for TypeScript execution and hot reloading

### Build and Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **TypeScript**: Full TypeScript configuration with strict mode
- **Replit Integration**: Cartographer and dev banner plugins for Replit development environment
- **PostCSS**: Autoprefixer and Tailwind CSS processing

### External Services
- **Analytics**: Google Analytics 4 for user behavior tracking and conversion measurement
- **Email Service**: SendGrid integration configured for transactional emails
- **Database Hosting**: Neon Database for serverless PostgreSQL hosting
- **Session Storage**: PostgreSQL session store for scalable session management

### SEO and Performance
- **Search Console**: Google Search Console integration for search performance monitoring
- **Schema Markup**: JSON-LD structured data for enhanced search results
- **Performance Optimization**: Image compression, asset minification, and mobile-first responsive design
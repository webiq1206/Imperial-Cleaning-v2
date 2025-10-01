import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { allServiceLocations } from "@shared/service-locations";
import { locationToSlug, buildServiceLocationUrl } from "@/lib/routing-utils";
import logoImage from "@assets/imperial-cleaning-logo.jpg";

export default function SitemapPage() {
 const sitemapSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://imperialcleaninginc.com/sitemap#webpage",
  "name": "Imperial Cleaning Inc Site Map",
  "description": "Complete site navigation for Imperial Cleaning Inc - professional cleaning services across Idaho and Utah.",
  "publisher": {
   "@type": "Organization",
   "name": "Imperial Cleaning Inc",
   "url": "https://imperialcleaninginc.com"
  },
  "mainEntity": {
   "@type": "SiteNavigationElement",
   "name": "Site Navigation"
  }
 };

 const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
   {
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://imperialcleaninginc.com/"
   },
   {
    "@type": "ListItem",
    "position": 2,
    "name": "Site Map",
    "item": "https://imperialcleaninginc.com/sitemap"
   }
  ]
 };

 // Organize locations by state for display
 const idahoLocations = allServiceLocations.filter(loc => loc.state === "Idaho").sort((a, b) => a.name.localeCompare(b.name));
 const utahLocations = allServiceLocations.filter(loc => loc.state === "Utah").sort((a, b) => a.name.localeCompare(b.name));

 return (
  <>
   <SEOHead
    title="Site Map | Imperial Cleaning Inc - Complete Site Navigation"
    description="Navigate all pages of Imperial Cleaning Inc website. Find construction cleaning, commercial cleaning services, service areas across Idaho and Utah, company information and more."
    keywords="sitemap, site map, Imperial Cleaning navigation, Idaho cleaning services, Utah cleaning services, construction cleaning, commercial cleaning, website navigation"
    canonicalUrl="https://imperialcleaninginc.com/sitemap"
    author="Imperial Cleaning Inc"
    openGraph={{
     title: "Site Map | Imperial Cleaning Inc - Complete Website Navigation",
     description: "Navigate all pages of Imperial Cleaning Inc website. Professional cleaning services across Idaho and Utah with comprehensive site navigation.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Site Navigation Professional Cleaning Services",
     type: "website",
     url: "https://imperialcleaninginc.com/sitemap"
    }}
    twitter={{
     card: "summary_large_image",
     title: "Site Map | Imperial Cleaning Inc - Complete Website Navigation",
     description: "Navigate all pages of Imperial Cleaning Inc website. Professional cleaning services across Idaho and Utah with comprehensive site navigation.",
     image: logoImage,
     imageAlt: "Imperial Cleaning Inc - Site Navigation Professional Cleaning Services"
    }}
    structuredData={[sitemapSchema, breadcrumbSchema]}
   />

   {/* Hero Section */}
   <section className="py-24 px-6 hero-sophisticated-bg noise-overlay grain-texture section-transition-bottom">
    <div className="max-w-6xl mx-auto text-center">
     <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
      Site Map
     </h1>
     <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
      Complete navigation of all Imperial Cleaning Inc services, locations, and company information across Idaho and Utah.
     </p>
    </div>
   </section>

   {/* Site Navigation */}
   <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
     <div className="grid lg:grid-cols-3 gap-12">
      
      {/* Main Pages */}
      <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
       <h2 className="text-2xl mb-6 text-foreground flex items-center">
        <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
        Main Pages
       </h2>
       <ul className="space-y-3">
        <li>
         <Link 
          href="/" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
          data-testid="sitemap-link-home"
         >
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-primary transition-colors"></div>
          Homepage
         </Link>
        </li>
        <li>
         <Link 
          href="/about" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
          data-testid="sitemap-link-about"
         >
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-primary transition-colors"></div>
          About Us
         </Link>
        </li>
        <li>
         <Link 
          href="/contact" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
          data-testid="sitemap-link-contact"
         >
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-primary transition-colors"></div>
          Contact & Quote
         </Link>
        </li>
       </ul>
      </div>

      {/* Services */}
      <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
       <h2 className="text-2xl mb-6 text-foreground flex items-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
        Our Services
       </h2>
       <div className="space-y-6">
        <div>
         <h3 className="text-lg mb-3 text-foreground">Construction Cleaning</h3>
         <ul className="space-y-2">
          <li>
           <Link 
            href="/construction-cleaning" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group text-sm"
            data-testid="sitemap-link-construction"
           >
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
            Construction Cleaning Overview
           </Link>
          </li>
          <li className="ml-6 text-xs text-muted-foreground">
           • Post-construction cleanup
          </li>
          <li className="ml-6 text-xs text-muted-foreground">
           • Final construction cleaning
          </li>
          <li className="ml-6 text-xs text-muted-foreground">
           • Debris removal & detailing
          </li>
         </ul>
        </div>
        
        <div>
         <h3 className="text-lg mb-3 text-foreground">Commercial Cleaning</h3>
         <ul className="space-y-2">
          <li>
           <Link 
            href="/commercial-cleaning" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group text-sm"
            data-testid="sitemap-link-commercial"
           >
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></div>
            Commercial Cleaning Overview
           </Link>
          </li>
          <li className="ml-6 text-xs text-muted-foreground">
           • Office & facility maintenance
          </li>
          <li className="ml-6 text-xs text-muted-foreground">
           • Industrial cleaning
          </li>
          <li className="ml-6 text-xs text-muted-foreground">
           • Specialized cleaning services
          </li>
         </ul>
        </div>
       </div>
      </div>

      {/* Service Areas */}
      <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
       <h2 className="text-2xl mb-6 text-foreground flex items-center">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
        Service Areas
       </h2>
       <div className="space-y-6">
        <div>
         <h3 className="text-lg mb-3 text-foreground">Idaho Locations</h3>
         <Link 
          href="/service-areas/idaho" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group text-sm mb-3"
          data-testid="sitemap-link-idaho-overview"
         >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></div>
          Idaho Service Areas Overview
         </Link>
         <ul className="space-y-1 ml-4">
          {idahoLocations.slice(0, 6).map((location) => (
           <li key={location.name} className="text-xs text-muted-foreground">
            • {location.name}
           </li>
          ))}
          {idahoLocations.length > 6 && (
           <li className="text-xs text-muted-foreground">
            • And {idahoLocations.length - 6} more locations
           </li>
          )}
         </ul>
        </div>
        
        <div>
         <h3 className="text-lg mb-3 text-foreground">Utah Locations</h3>
         <Link 
          href="/service-areas/utah" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group text-sm mb-3"
          data-testid="sitemap-link-utah-overview"
         >
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></div>
          Utah Service Areas Overview
         </Link>
         <ul className="space-y-1 ml-4">
          {utahLocations.slice(0, 6).map((location) => (
           <li key={location.name} className="text-xs text-muted-foreground">
            • {location.name}
           </li>
          ))}
          {utahLocations.length > 6 && (
           <li className="text-xs text-muted-foreground">
            • And {utahLocations.length - 6} more locations
           </li>
          )}
         </ul>
        </div>
       </div>
      </div>

     </div>

     {/* Service + Location Pages - All City/Service Combinations */}
     <div className="mt-12 glass-card-elevated sophisticated-glow p-8 rounded-lg">
      <h2 className="text-2xl mb-8 text-foreground flex items-center">
       <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
       City-Specific Service Pages
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
       Complete directory of all location-specific service pages using our SEO-optimized /state/service/city/ URL structure
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
       {/* Construction Cleaning Locations */}
       <div>
        <h3 className="text-lg mb-4 text-foreground">Construction Cleaning by Location</h3>
        <p className="text-sm text-muted-foreground mb-4">
         Specialized construction cleanup services across Idaho and Utah:
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
         <div>
          <h4 className="text-foreground mb-3 text-sm">Idaho ({idahoLocations.filter(loc => loc.services.constructionCleanup).length} locations)</h4>
          <ul className="space-y-1.5">
           {idahoLocations.filter(loc => loc.services.constructionCleanup).map((location) => (
            <li key={`construction-${location.name}`}>
             <Link 
              href={buildServiceLocationUrl(location.state, 'construction-cleaning', location.name)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`sitemap-construction-${locationToSlug(location.name)}`}
             >
              {location.name}
             </Link>
            </li>
           ))}
          </ul>
         </div>
         <div>
          <h4 className="text-foreground mb-3 text-sm">Utah ({utahLocations.filter(loc => loc.services.constructionCleanup).length} locations)</h4>
          <ul className="space-y-1.5">
           {utahLocations.filter(loc => loc.services.constructionCleanup).map((location) => (
            <li key={`construction-${location.name}`}>
             <Link 
              href={buildServiceLocationUrl(location.state, 'construction-cleaning', location.name)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`sitemap-construction-${locationToSlug(location.name)}`}
             >
              {location.name}
             </Link>
            </li>
           ))}
          </ul>
         </div>
        </div>
       </div>

       {/* Commercial Cleaning Locations */}
       <div>
        <h3 className="text-lg mb-4 text-foreground">Commercial Cleaning by Location</h3>
        <p className="text-sm text-muted-foreground mb-4">
         Professional commercial cleaning services across Idaho and Utah:
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
         <div>
          <h4 className="text-foreground mb-3 text-sm">Idaho ({idahoLocations.filter(loc => loc.services.commercialCleaning).length} locations)</h4>
          <ul className="space-y-1.5">
           {idahoLocations.filter(loc => loc.services.commercialCleaning).map((location) => (
            <li key={`commercial-${location.name}`}>
             <Link 
              href={buildServiceLocationUrl(location.state, 'commercial-cleaning', location.name)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`sitemap-commercial-${locationToSlug(location.name)}`}
             >
              {location.name}
             </Link>
            </li>
           ))}
          </ul>
         </div>
         <div>
          <h4 className="text-foreground mb-3 text-sm">Utah ({utahLocations.filter(loc => loc.services.commercialCleaning).length} locations)</h4>
          <ul className="space-y-1.5">
           {utahLocations.filter(loc => loc.services.commercialCleaning).map((location) => (
            <li key={`commercial-${location.name}`}>
             <Link 
              href={buildServiceLocationUrl(location.state, 'commercial-cleaning', location.name)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`sitemap-commercial-${locationToSlug(location.name)}`}
             >
              {location.name}
             </Link>
            </li>
           ))}
          </ul>
         </div>
        </div>
       </div>
      </div>
     </div>

     {/* Legal and Company Information */}
     <div className="mt-12 grid md:grid-cols-2 gap-8">
      
      {/* Company Information */}
      <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
       <h2 className="text-2xl mb-6 text-foreground flex items-center">
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
        Company Information
       </h2>
       <ul className="space-y-3">
        <li>
         <div className="text-muted-foreground flex items-center group">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
          Business Overview & History
         </div>
        </li>
        <li>
         <div className="text-muted-foreground flex items-center group">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
          Licensing & Insurance Information
         </div>
        </li>
        <li>
         <div className="text-muted-foreground flex items-center group">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
          Customer Testimonials & Reviews
         </div>
        </li>
        <li>
         <div className="text-muted-foreground flex items-center group">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
          Case Studies & Project Examples
         </div>
        </li>
        <li>
         <div className="text-muted-foreground flex items-center group">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
          Frequently Asked Questions
         </div>
        </li>
       </ul>
      </div>

      {/* Legal Pages */}
      <div className="glass-card-elevated sophisticated-glow p-8 rounded-lg">
       <h2 className="text-2xl mb-6 text-foreground flex items-center">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
        Legal & Policy Pages
       </h2>
       <ul className="space-y-3">
        <li>
         <Link 
          href="/privacy-policy" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
          data-testid="sitemap-link-privacy"
         >
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
          Privacy Policy
         </Link>
        </li>
        <li>
         <Link 
          href="/terms-of-service" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
          data-testid="sitemap-link-terms"
         >
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
          Terms of Service
         </Link>
        </li>
        <li>
         <Link 
          href="/sitemap" 
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center group"
          data-testid="sitemap-link-sitemap"
         >
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-red-500 transition-colors"></div>
          Site Map (This Page)
         </Link>
        </li>
       </ul>
       
       <div className="mt-6 pt-6 border-t border-border/20">
        <h3 className="text-lg mb-3 text-foreground">Contact Methods</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
         <li className="flex items-center">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
          Phone: <a href="tel:+12085203202" className="text-primary hover:text-primary/80 ml-1">(208) 520-3202</a>
         </li>
         <li className="flex items-center">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
          Email: <a href="mailto:service@imperialcleaninginc.com" className="text-primary hover:text-primary/80 ml-1">service@imperialcleaninginc.com</a>
         </li>
         <li className="flex items-center">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
          Location: Idaho Falls, ID
         </li>
        </ul>
       </div>
      </div>

     </div>

     {/* CTA Section */}
     <div className="mt-16 text-center">
      <div className="glass-card-elevated sophisticated-glow p-12 rounded-lg">
       <h3 className="text-3xl mb-6 text-foreground">
        Need Professional Cleaning Services?
       </h3>
       <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Whether you need construction cleanup or commercial cleaning across Idaho and Utah, 
        we're here to deliver exceptional results with reliable, professional service.
       </p>
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact">
         <Button 
          variant="pill-primary"
          size="pill-lg"
          data-testid="sitemap-cta-contact"
         >
          Get Free Quote Today
         </Button>
        </Link>
        <a href="tel:+12085203202">
         <Button 
          variant="pill-ghost"
          size="pill-lg"
          data-testid="sitemap-cta-phone"
         >
          Call (208) 520-3202
         </Button>
        </a>
       </div>
       <p className="text-sm text-muted-foreground mt-4">
        Licensed, bonded, and insured across Idaho and Utah
       </p>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
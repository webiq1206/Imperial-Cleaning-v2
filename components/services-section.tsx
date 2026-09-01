"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";
import { Button } from "@/components/ui/button";
import { HardHat, Building } from "lucide-react";

export default function ServicesSection() {
 const [showContactForm, setShowContactForm] = useState(false);

 const handleLearnMore = (service: string) => {
  trackEvent('learn_more', 'services', service);
 };

 return (
  <>
   <section id="services" className="py-24 px-6 services-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
    <div className="max-w-7xl mx-auto">
     <div className="text-center mb-20">
      <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight text-foreground">
       Construction & Commercial Cleaning Services Across Idaho and Utah
      </h2>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
       Proudly headquartered in Idaho Falls, providing construction cleanup and commercial cleaning services throughout Idaho and Utah. Comprehensive cleaning solutions delivered with consistent quality in all markets we serve.
      </p>
     </div>

     <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* Construction Cleaning */}
      <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle animate-fade-in-left stagger-delay-1 p-6 rounded-lg group">
       <div className="flex items-center mb-6">
        <div className="resend-icon mr-4 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
         <HardHat className="icon-gradient w-5 h-5" />
        </div>
        <h3 className="text-2xl lg:text-3xl hover-lift-gentle">Construction Cleanup Services</h3>
       </div>
       
       {/* Elegant inset divider after header */}
       <div className="glass-divider-top mb-6"></div>
       
       <p className="text-muted-foreground mb-6 leading-relaxed">
        Our <Link href="/construction-cleaning" className="text-primary hover:underline">construction cleaning services</Link> serve Idaho and Utah markets from debris removal to final detailing, delivering major construction projects with consistent quality across every location. We provide expert <Link href="/service-areas/utah" className="text-primary hover:underline">construction cleaning in Utah</Link> and throughout the region.
       </p>
       
       {/* Inset divider before features */}
       <div className="glass-divider-top mb-6"></div>
       
       <div className="space-y-3 mb-8">
        <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-debris">
         <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 transition-all duration-300"></div>
         <span className="group-hover/item:text-foreground transition-colors duration-300">Post-construction debris removal</span>
        </div>
        <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-windows">
         <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 transition-all duration-300"></div>
         <span className="group-hover/item:text-foreground transition-colors duration-300">Window and surface cleaning</span>
        </div>
        <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-floors">
         <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 transition-all duration-300"></div>
         <span className="group-hover/item:text-foreground transition-colors duration-300">Floor care and protection</span>
        </div>
        <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-inspection">
         <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 transition-all duration-300"></div>
         <span className="group-hover/item:text-foreground transition-colors duration-300">Final inspection ready cleanup</span>
        </div>
       </div>
       
       {/* Inset divider before button */}
       <div className="glass-divider-top mb-6"></div>
       
       <div className="flex gap-3 flex-wrap">
        <Link href="/construction-cleaning">
         <Button 
          variant="pill-secondary"
          size="pill-md"
          className=" hover-lift-gentle button-ripple hover-shimmer"
          onClick={() => handleLearnMore('construction')}
          data-testid="button-learn-more-construction"
         >
          Our Services →
         </Button>
        </Link>
        <Link href="/service-areas/idaho">
         <Button 
          variant="pill-ghost"
          size="pill-md"
          className="text-sm hover-lift-gentle"
          data-testid="button-service-areas-construction"
         >
          Service Areas
         </Button>
        </Link>
        <Button 
         variant="pill-primary"
         size="pill-md"
         className="hover-lift-gentle button-ripple"
         onClick={() => setShowContactForm(true)}
         data-testid="button-request-quote-construction"
        >
         Request Quote
        </Button>
       </div>
      </div>

      {/* Commercial Cleaning */}
      <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand parallax-gentle animate-fade-in-right stagger-delay-2 p-6 rounded-lg group">
       <div className="flex items-center mb-6">
        <div className="resend-icon mr-4 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
         <Building className="icon-gradient w-5 h-5" />
        </div>
        <h3 className="text-2xl lg:text-3xl hover-lift-gentle">Commercial Cleaning Services</h3>
       </div>
       
       {/* Elegant inset divider after header */}
       <div className="glass-divider-top mb-6"></div>
       
       <p className="text-muted-foreground mb-6 leading-relaxed">
        Our <Link href="/commercial-cleaning" className="text-primary hover:underline">commercial cleaning services</Link> serve offices, healthcare facilities, and government buildings with consistent quality. We provide <Link href="/service-areas/idaho" className="text-primary hover:underline">commercial cleaning throughout Idaho</Link> and <Link href="/service-areas/utah" className="text-primary hover:underline">Utah service areas</Link>.
       </p>
       
       {/* Inset divider before features */}
       <div className="glass-divider-top mb-6"></div>
       
       <div className="space-y-3 mb-8">
        <div className="flex items-center text-sm" data-testid="feature-commercial-schedules">
         <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
         <span>Daily and weekly cleaning schedules</span>
        </div>
        <div className="flex items-center text-sm" data-testid="feature-commercial-sanitization">
         <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
         <span>Office and workspace sanitization</span>
        </div>
        <div className="flex items-center text-sm" data-testid="feature-commercial-restrooms">
         <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
         <span>Restroom and break room maintenance</span>
        </div>
        <div className="flex items-center text-sm" data-testid="feature-commercial-carpet">
         <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
         <span>Carpet and floor care</span>
        </div>
       </div>
       
       {/* Inset divider before button */}
       <div className="glass-divider-top mb-6"></div>
       
       <div className="flex gap-3 flex-wrap">
        <Link href="/commercial-cleaning">
         <Button 
          variant="pill-secondary"
          size="pill-md"
          className=" hover-lift-gentle button-ripple hover-shimmer"
          onClick={() => handleLearnMore('commercial')}
          data-testid="button-learn-more-commercial"
         >
          Our Services →
         </Button>
        </Link>
        <Link href="/service-areas/idaho">
         <Button 
          variant="pill-ghost"
          size="pill-md"
          className="text-sm hover-lift-gentle"
          data-testid="button-service-areas-commercial"
         >
          Service Areas
         </Button>
        </Link>
        <Button 
         variant="pill-primary"
         size="pill-md"
         className="hover-lift-gentle button-ripple"
         onClick={() => setShowContactForm(true)}
         data-testid="button-request-quote-commercial"
        >
         Request Quote
        </Button>
       </div>
      </div>
     </div>

     <div className="text-center mb-10">
      <h3 className="text-3xl lg:text-4xl mb-4 tracking-tight text-foreground">
       Choose a service path
      </h3>
      <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
       Start with the job you need. Each path opens a dedicated page with scope, process, and a quote form. Construction phases and commercial specialties are listed separately so you can send the right request the first time.
      </p>
     </div>

     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {[
       { href: "/janitorial-services", title: "Janitorial services", blurb: "Recurring commercial janitorial for offices and facilities." },
       { href: "/office-cleaning", title: "Office cleaning", blurb: "Nightly and scheduled office cleaning with a written scope." },
       { href: "/commercial-floor-care", title: "Commercial floor care", blurb: "Strip, wax, burnish, and hard-surface floor programs." },
       { href: "/day-porter-services", title: "Day porter services", blurb: "Daytime coverage for restrooms, lobbies, and high-traffic areas." },
       { href: "/industrial-cleaning", title: "Industrial cleaning", blurb: "Production floors, shops, and industrial facilities." },
       { href: "/warehouse-cleaning", title: "Warehouse cleaning", blurb: "Aisles, docks, and warehouse floors kept inspection-ready." },
       { href: "/construction-cleaning/rough-clean", title: "Rough clean", blurb: "Debris and dust removal while trades are still on site." },
       { href: "/construction-cleaning/final-clean", title: "Final clean", blurb: "Punch-list and owner-walk construction final clean." },
       { href: "/construction-cleaning/touch-up-clean", title: "Touch-up clean", blurb: "Post-punch touch-up before turnover or grand opening." },
       { href: "/commercial-cleaning-cost", title: "Commercial cleaning cost", blurb: "What drives price, what to compare, and how to request a quote." },
       { href: "/property-management-cleaning", title: "Property management", blurb: "Common areas and tenant-ready cleaning for managers." },
       { href: "/medical-office-cleaning", title: "Medical office cleaning", blurb: "Clinic and medical office cleaning with documented process." },
      ].map((path) => (
       <Link
        key={path.href}
        href={path.href}
        className="glass-card-elevated p-5 rounded-lg hover-lift-gentle group block"
        onClick={() => handleLearnMore(path.title)}
       >
        <h4 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
         {path.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{path.blurb}</p>
       </Link>
      ))}
     </div>
    </div>
   </section>

   {showContactForm && (
    <ContactFormModal 
     isOpen={showContactForm} 
     onClose={() => setShowContactForm(false)} 
    />
   )}
  </>
 );
}

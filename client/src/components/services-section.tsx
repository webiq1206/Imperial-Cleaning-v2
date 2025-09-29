import { useState } from "react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";
import { Button } from "@/components/ui/button";

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
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
              Professional Cleaning Solutions
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Specialized cleaning solutions for construction sites and commercial facilities across Idaho and Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Construction Cleaning */}
            <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand glow-pulse-subtle parallax-subtle animate-fade-in-left stagger-delay-1 p-6 rounded-lg group">
              <div className="flex items-center mb-6">
                <div className="resend-icon mr-4 hover-lift-gentle glow-pulse-breathing group-hover:scale-105 transition-all duration-500">
                  <i className="fas fa-hard-hat icon-gradient"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium hover-lift-gentle">Construction Cleaning</h3>
              </div>
              
              {/* Elegant inset divider after header */}
              <div className="glass-divider-top mb-6"></div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Post-construction cleanup services for contractors across Idaho and Utah. From debris removal to final detailing, we prepare your projects for handover.
              </p>
              
              {/* Inset divider before features */}
              <div className="glass-divider-top mb-6"></div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-debris">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 glow-pulse-subtle transition-all duration-300"></div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">Post-construction debris removal</span>
                </div>
                <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-windows">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 glow-pulse-subtle transition-all duration-300"></div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">Window and surface cleaning</span>
                </div>
                <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-floors">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 glow-pulse-subtle transition-all duration-300"></div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">Floor care and protection</span>
                </div>
                <div className="flex items-center text-sm hover-lift-gentle group/item" data-testid="feature-construction-inspection">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/item:scale-125 glow-pulse-subtle transition-all duration-300"></div>
                  <span className="group-hover/item:text-foreground transition-colors duration-300">Final inspection ready cleanup</span>
                </div>
              </div>
              
              {/* Inset divider before button */}
              <div className="glass-divider-top mb-6"></div>
              
              <Link href="/construction-cleaning">
                <Button 
                  variant="pill-secondary"
                  size="pill-md"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer glow-pulse-subtle group-hover:glow-pulse-breathing"
                  onClick={() => handleLearnMore('construction')}
                  data-testid="button-learn-more-construction"
                >
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Commercial Cleaning */}
            <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand glow-pulse-subtle parallax-gentle animate-fade-in-right stagger-delay-2 p-6 rounded-lg group">
              <div className="flex items-center mb-6">
                <div className="resend-icon mr-4 hover-lift-gentle glow-pulse-breathing group-hover:scale-105 transition-all duration-500">
                  <i className="fas fa-building icon-gradient"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium hover-lift-gentle">Commercial Cleaning</h3>
              </div>
              
              {/* Elegant inset divider after header */}
              <div className="glass-divider-top mb-6"></div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ongoing commercial cleaning services for businesses throughout Idaho and Utah. Reliable, professional maintenance to keep your facility spotless.
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
              
              <Link href="/commercial-cleaning">
                <Button 
                  variant="pill-secondary"
                  size="pill-md"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer glow-pulse-subtle group-hover:glow-pulse-breathing"
                  onClick={() => handleLearnMore('commercial')}
                  data-testid="button-learn-more-commercial"
                >
                  Learn More →
                </Button>
              </Link>
            </div>
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

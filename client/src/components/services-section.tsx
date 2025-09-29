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
              Idaho & Utah Commercial Cleaning
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Professional commercial cleaning services across Idaho and Utah. Specialized construction cleanup and ongoing maintenance for businesses throughout the Intermountain West.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Construction Cleaning */}
            <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand parallax-subtle animate-fade-in-left stagger-delay-1 p-6 rounded-lg group">
              <div className="flex items-center mb-6">
                <div className="resend-icon mr-4 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
                  <i className="fas fa-hard-hat icon-gradient"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium hover-lift-gentle">Construction Cleanup Services</h3>
              </div>
              
              {/* Elegant inset divider after header */}
              <div className="glass-divider-top mb-6"></div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional construction cleanup services for Idaho and Utah contractors. From debris removal to final detailing, we serve major projects including office complexes, residential developments, and commercial buildings throughout both states.
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
              
              <div className="flex gap-3">
                <Link href="/construction-cleaning">
                  <Button 
                    variant="pill-secondary"
                    size="pill-md"
                    className="font-medium hover-lift-gentle button-ripple hover-shimmer"
                    onClick={() => handleLearnMore('construction')}
                    data-testid="button-learn-more-construction"
                  >
                    View Projects →
                  </Button>
                </Link>
                <Link href="#faq">
                  <Button 
                    variant="outline"
                    size="pill-md"
                    className="text-sm font-medium hover-lift-gentle"
                    data-testid="button-construction-faq"
                  >
                    Construction FAQ
                  </Button>
                </Link>
              </div>
            </div>

            {/* Commercial Cleaning */}
            <div className="glass-card-premium sophisticated-glow hover-lift-moderate hover-glow-expand parallax-gentle animate-fade-in-right stagger-delay-2 p-6 rounded-lg group">
              <div className="flex items-center mb-6">
                <div className="resend-icon mr-4 hover-lift-gentle group-hover:scale-105 transition-all duration-500">
                  <i className="fas fa-building icon-gradient"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium hover-lift-gentle">Commercial Cleaning Services</h3>
              </div>
              
              {/* Elegant inset divider after header */}
              <div className="glass-divider-top mb-6"></div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive office and industrial cleaning services for Idaho and Utah businesses. Our janitorial services include Fortune 500 companies, healthcare facilities, and government buildings throughout both states.
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
              
              <div className="flex gap-3">
                <Link href="/commercial-cleaning">
                  <Button 
                    variant="pill-secondary"
                    size="pill-md"
                    className="font-medium hover-lift-gentle button-ripple hover-shimmer"
                    onClick={() => handleLearnMore('commercial')}
                    data-testid="button-learn-more-commercial"
                  >
                    Our Services →
                  </Button>
                </Link>
                <Link href="/service-areas/idaho">
                  <Button 
                    variant="outline"
                    size="pill-md"
                    className="text-sm font-medium hover-lift-gentle"
                    data-testid="button-service-areas-idaho"
                  >
                    Service Areas
                  </Button>
                </Link>
              </div>
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

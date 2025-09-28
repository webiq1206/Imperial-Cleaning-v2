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
      <section id="services" className="py-16 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight text-foreground">
              Professional Cleaning
              <span className="gradient-text-cyan-purple block">Solutions</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Specialized cleaning solutions for construction sites and commercial facilities across Idaho and Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Construction Cleaning */}
            <div className="resend-card hover-lift">
              <div className="flex items-center mb-6">
                <div className="resend-icon mr-4">
                  <i className="fas fa-hard-hat"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium">Construction Cleaning</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Post-construction cleanup services for contractors across Idaho and Utah. From debris removal to final detailing, we prepare your projects for handover.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm" data-testid="feature-construction-debris">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Post-construction debris removal</span>
                </div>
                <div className="flex items-center text-sm" data-testid="feature-construction-windows">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Window and surface cleaning</span>
                </div>
                <div className="flex items-center text-sm" data-testid="feature-construction-floors">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Floor care and protection</span>
                </div>
                <div className="flex items-center text-sm" data-testid="feature-construction-inspection">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Final inspection ready cleanup</span>
                </div>
              </div>
              <Link href="/construction-cleaning">
                <Button 
                  variant="pill"
                  size="pill-md"
                  className="font-medium"
                  onClick={() => handleLearnMore('construction')}
                  data-testid="button-learn-more-construction"
                >
                  Learn More →
                </Button>
              </Link>
            </div>

            {/* Commercial Cleaning */}
            <div className="resend-card hover-lift">
              <div className="flex items-center mb-6">
                <div className="resend-icon mr-4">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium">Commercial Cleaning</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ongoing commercial cleaning services for businesses throughout Idaho and Utah. Reliable, professional maintenance to keep your facility spotless.
              </p>
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
              <Link href="/commercial-cleaning">
                <Button 
                  variant="pill"
                  size="pill-md"
                  className="font-medium"
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

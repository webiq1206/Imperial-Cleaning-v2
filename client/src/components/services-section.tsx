import { useState } from "react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";

export default function ServicesSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleLearnMore = (service: string) => {
    trackEvent('learn_more', 'services', service);
  };

  return (
    <>
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Cleaning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized cleaning solutions for construction sites and commercial facilities across Idaho and Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Construction Cleaning */}
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group">
              <div className="icon-gradient text-5xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Construction Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Post-construction cleanup services for contractors across Idaho and Utah. From debris removal to final detailing, we prepare your projects for handover.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li data-testid="feature-construction-debris">
                  <i className="fas fa-check text-primary mr-2"></i>Post-construction debris removal
                </li>
                <li data-testid="feature-construction-windows">
                  <i className="fas fa-check text-primary mr-2"></i>Window and surface cleaning
                </li>
                <li data-testid="feature-construction-floors">
                  <i className="fas fa-check text-primary mr-2"></i>Floor care and protection
                </li>
                <li data-testid="feature-construction-inspection">
                  <i className="fas fa-check text-primary mr-2"></i>Final inspection ready cleanup
                </li>
              </ul>
              <Link href="/construction-cleaning">
                <button 
                  className="w-full neon-border py-3 rounded-lg font-medium"
                  onClick={() => handleLearnMore('construction')}
                  data-testid="button-learn-more-construction"
                >
                  Learn More
                </button>
              </Link>
            </div>

            {/* Commercial Cleaning */}
            <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group">
              <div className="icon-gradient text-5xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-building"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Commercial Cleaning</h3>
              <p className="text-muted-foreground mb-6">
                Ongoing commercial cleaning services for businesses throughout Idaho and Utah. Reliable, professional maintenance to keep your facility spotless.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li data-testid="feature-commercial-schedules">
                  <i className="fas fa-check text-primary mr-2"></i>Daily and weekly cleaning schedules
                </li>
                <li data-testid="feature-commercial-sanitization">
                  <i className="fas fa-check text-primary mr-2"></i>Office and workspace sanitization
                </li>
                <li data-testid="feature-commercial-restrooms">
                  <i className="fas fa-check text-primary mr-2"></i>Restroom and break room maintenance
                </li>
                <li data-testid="feature-commercial-carpet">
                  <i className="fas fa-check text-primary mr-2"></i>Carpet and floor care
                </li>
              </ul>
              <Link href="/commercial-cleaning">
                <button 
                  className="w-full neon-border py-3 rounded-lg font-medium"
                  onClick={() => handleLearnMore('commercial')}
                  data-testid="button-learn-more-commercial"
                >
                  Learn More
                </button>
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

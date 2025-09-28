import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'hero', 'main_cta');
    setShowContactForm(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Minimal background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold mb-16 leading-tight tracking-tight text-foreground">
            Cleaning for<br />
            businesses
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-normal">
            Trusted commercial and construction cleaning across Idaho & Utah. From post-construction cleanup to ongoing maintenance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="pill-primary"
              size="pill-lg"
              className="text-base font-semibold hover-lift" 
              onClick={handleRequestQuote}
              data-testid="button-hero-request-quote"
            >
              Get Started →
            </Button>
            <Button 
              variant="pill"
              size="pill-lg"
              className="text-base font-medium hover-lift"
              data-testid="button-hero-learn-more"
            >
              Learn More
            </Button>
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

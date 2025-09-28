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
      <section className="relative py-24 md:py-32 lg:py-40">
        {/* Resend-style minimal hero layout */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Professional cleaning<br />
              for your business
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The reliable way to maintain spotless commercial spaces. Professional cleaning services across Idaho and Utah.
            </p>

            {/* CTA buttons */}
            <div className="flex items-center justify-center gap-4">
              <Button 
                onClick={handleRequestQuote}
                size="lg"
                data-testid="button-hero-get-started"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                data-testid="button-hero-documentation"
              >
                Learn More
              </Button>
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

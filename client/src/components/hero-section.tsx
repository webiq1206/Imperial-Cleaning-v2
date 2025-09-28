import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";

export default function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'hero', 'main_cta');
    setShowContactForm(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Hero Logo Background */}
        <div className="hero-logo">
          <img 
            src="/hero-logo.png" 
            alt="" 
            className="w-full h-full object-contain opacity-[0.03] filter brightness-0 invert"
          />
        </div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-2"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
            Professional
            <span className="gradient-text block">Cleaning Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Trusted commercial and construction cleaning across Idaho & Utah. From post-construction cleanup to ongoing maintenance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="neon-border px-8 py-4 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all" 
              onClick={handleRequestQuote}
              data-testid="button-hero-request-quote"
            >
              Get Started →
            </button>
            <button 
              className="px-8 py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:border-border/80"
              data-testid="button-hero-learn-more"
            >
              Learn More
            </button>
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

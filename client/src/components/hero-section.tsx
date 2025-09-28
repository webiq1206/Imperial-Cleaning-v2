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
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Hero Logo Background */}
        <div className="hero-logo">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Lion-like logo design based on the provided logo */}
            <path d="M100 20L85 35L70 50L70 80L85 95L100 110L115 95L130 80L130 50L115 35L100 20Z" fill="white" opacity="0.1"/>
            <path d="M60 60L80 80L100 100L120 80L140 60L120 40L100 40L80 40L60 60Z" fill="white" opacity="0.1"/>
            <circle cx="85" cy="70" r="5" fill="white" opacity="0.2"/>
            <circle cx="115" cy="70" r="5" fill="white" opacity="0.2"/>
            <path d="M100 85L110 95L100 105L90 95L100 85Z" fill="white" opacity="0.1"/>
            <path d="M70 120L85 140L100 150L115 140L130 120L130 160L100 180L70 160L70 120Z" fill="white" opacity="0.1"/>
            
            {/* Crown/mane elements */}
            <path d="M70 40C75 30, 85 25, 100 25C115 25, 125 30, 130 40" stroke="white" strokeWidth="2" fill="none" opacity="0.15"/>
            <path d="M65 45C70 35, 80 30, 100 30C120 30, 130 35, 135 45" stroke="white" strokeWidth="1" fill="none" opacity="0.1"/>
            
            {/* Side mane elements */}
            <path d="M60 70C50 65, 45 70, 50 80C55 75, 60 75, 60 70Z" fill="white" opacity="0.1"/>
            <path d="M140 70C150 65, 155 70, 150 80C145 75, 140 75, 140 70Z" fill="white" opacity="0.1"/>
          </svg>
        </div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40 z-2"></div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trusted Commercial & Construction Cleaning
            <span className="gradient-text block">Across Idaho & Utah</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional cleaning solutions built for your business. From post-construction cleanup to ongoing commercial maintenance.
          </p>
          <button 
            className="neon-border px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform" 
            onClick={handleRequestQuote}
            data-testid="button-hero-request-quote"
          >
            Request a Quote
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
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

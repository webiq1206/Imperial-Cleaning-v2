import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/Imperial-Cleaning-Inc.-Commercial-Cleaning-in-Idaho-Falls-ID-Website-Icon-white (1)_1759082752680.png";

export default function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'hero', 'main_cta');
    setShowContactForm(true);
  };

  return (
    <>
      <section className="relative min-h-screen bg-black overflow-hidden animate-fade-in-up">
        {/* Resend-style hero layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center h-screen relative">
            {/* Left side - Content */}
            <div className="flex-1 max-w-2xl z-20">
              {/* Resend-style announcement pill */}
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 bg-black/40 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-950/60 transition-all duration-300 group">
                  <span className="text-sm text-gray-400 font-medium tracking-tight">
                    Announcing Professional Cleaning Services
                  </span>
                  <svg className="ml-2 w-3.5 h-3.5 text-gray-500 group-hover:text-gray-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Main heading - Resend-style hierarchy */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tight mb-8">
                Cleaning for<br />businesses
              </h1>

              {/* Subtitle - Resend-style spacing and hierarchy */}
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-[1.6] font-normal tracking-tight">
                The best way to reach spotless instead of scattered messes. Deliver professional and commercial cleaning at scale.
              </p>

              {/* Enhanced Resend-style pill CTA buttons with sophisticated effects */}
              <div className="flex items-center gap-4">
                <Button 
                  onClick={handleRequestQuote}
                  variant="pill-primary"
                  size="pill-lg"
                  className="pill-button-resend-primary"
                  data-testid="button-hero-get-started"
                >
                  Get Started
                </Button>
                <Button 
                  variant="pill-secondary"
                  size="pill-lg"
                  className="pill-button-resend-secondary"
                  data-testid="button-hero-documentation"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right side - Enhanced 3D logo with Resend-style sophistication */}
            <div className="flex-1 flex items-center justify-center relative z-10">
              <div className="relative">
                {/* Enhanced logo with 3D effect */}
                <div className="logo-3d-container relative group">
                  {/* Main logo */}
                  <img 
                    src={logoPath}
                    alt="Imperial Cleaning"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-contain opacity-25 group-hover:opacity-30 transition-all duration-500"
                  />
                  
                  {/* Enhanced overlay layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Enhanced glow with cyan-purple gradient */}
                  <div className="absolute inset-0 blur-2xl group-hover:blur-xl transition-all duration-500" style={{ background: 'radial-gradient(ellipse at center, hsl(195, 100%, 50%, 0.08), hsl(271, 81%, 56%, 0.04), transparent)' }}></div>
                  
                  {/* Interactive highlight effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resend-style background treatments */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950 opacity-50"></div>
          
          {/* Geometric elements with enhanced sophistication */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-10">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800 rotate-12 animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-gray-700 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 right-1/6 w-16 h-16 border border-gray-600 -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Subtle radial glow effect */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>
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

import { useState } from "react";
import { Link } from "wouter";
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
      <section className="relative min-h-[85vh] md:min-h-screen hero-sophisticated-bg noise-overlay grain-texture vignette-radial overflow-hidden animate-fade-in-up">
        {/* Enhanced background logo - visible on both mobile and desktop with dark overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative">
            <img 
              src={logoPath}
              alt=""
              className="w-72 h-72 md:w-96 md:h-96 object-contain opacity-[0.18] pointer-events-none"
            />
            {/* Dark overlay for better content readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/50"></div>
          </div>
        </div>

        {/* Enhanced parallax background elements */}
        <div className="absolute inset-0 parallax-subtle opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rounded-full blur-xl "></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/8 to-cyan-500/4 rounded-full blur-lg"></div>
        </div>
        
        <div className="absolute inset-0 parallax-gentle opacity-10">
          <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-cyan-400/6 to-purple-600/3 rounded-full blur-2xl "></div>
          <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-br from-purple-400/5 to-cyan-600/2 rounded-full blur-xl"></div>
        </div>

        {/* Resend-style hero layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center h-[85vh] md:h-screen relative">
            {/* Left side - Content */}
            <div className="flex-1 max-w-2xl z-20">
              {/* Enhanced Resend-style announcement pill with motion polish */}
              <div className="mb-6 md:mb-8 animate-fade-in-left stagger-delay-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800/60 glass-effect hover:border-gray-700/80 hover:bg-gray-950/60 transition-all duration-300 group sophisticated-glow  hover-lift-gentle hover-shimmer">
                  <span className="text-sm text-secondary-color font-medium tracking-tight">
                    Professional Cleaning Services • Licensed & Insured • Trusted Partner
                  </span>
                  <svg className="ml-2 w-3.5 h-3.5 text-subtle-color group-hover:text-secondary-color transition-all duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Main heading with enhanced animations */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] tracking-tight mb-6 md:mb-8 animate-fade-in-up stagger-delay-2">
                <span className="inline-block hover-lift-gentle">Professional</span><br /><span className="inline-block hover-lift-gentle stagger-delay-2">cleaning</span> <span className="inline-block hover-lift-gentle stagger-delay-2">for</span>
                <span className="inline-block hover-lift-gentle stagger-delay-3 gradient-text-cyan-purple">businesses</span>
              </h1>

              {/* Enhanced subtitle */}
              <p className="text-lg md:text-xl text-secondary-color mb-8 md:mb-10 max-w-xl leading-[1.6] font-normal tracking-tight animate-fade-in-up stagger-delay-3">
                Locally owned and operated commercial cleaning company providing premier construction cleanup and janitorial services for businesses that demand excellence across multiple markets.
              </p>

              {/* Enhanced CTA buttons with local market focus */}
              <div className="flex items-center gap-4 animate-fade-in-up stagger-delay-4">
                <Button 
                  onClick={handleRequestQuote}
                  variant="pill-primary"
                  size="pill-lg"
                  className="pill-button-resend-primary hover-lift-moderate button-ripple"
                  data-testid="button-hero-get-started"
                >
                  Get Free Quote
                </Button>
                <Link href="/service-areas/idaho">
                  <Button 
                    variant="pill-secondary"
                    size="pill-lg"
                    className="pill-button-resend-secondary hover-lift-gentle hover-shimmer"
                    data-testid="button-hero-documentation"
                  >
                    View Service Areas
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Enhanced 3D logo with sophisticated parallax (hidden on mobile) */}
            <div className="flex-1 items-center justify-center relative z-10 animate-fade-in-right stagger-delay-3 hidden md:flex">
              <div className="relative parallax-depth">
                {/* Enhanced logo with 3D effect and motion polish */}
                <div className="logo-3d-container relative">
                  {/* Main logo */}
                  <img 
                    src={logoPath}
                    alt="Imperial Cleaning"
                    className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[32rem] xl:h-[32rem] object-contain opacity-25"
                  />
                  
                  {/* Enhanced overlay layers with motion */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50 parallax-subtle"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Enhanced glow with subtle animation */}
                  <div className="absolute inset-0 blur-2xl" style={{ background: 'radial-gradient(ellipse at center, hsl(195, 100%, 50%, 0.08), hsl(271, 81%, 56%, 0.04), transparent)' }}></div>
                  
                  {/* Additional orbital elements */}
                  <div className="absolute -inset-4">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"></div>
                    <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm"></div>
                    <div className="absolute top-1/3 right-0 w-1 h-1 bg-cyan-300/50 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Resend-style sophisticated background treatments */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Layered sophisticated gradients */}
          <div className="absolute inset-0 sophisticated-bg-primary opacity-60"></div>
          
          {/* Geometric elements with enhanced sophistication */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-8">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800/30 rotate-12 sophisticated-glow"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-gray-700/30 rotate-45 sophisticated-glow"></div>
            <div className="absolute bottom-1/3 right-1/6 w-16 h-16 border border-gray-600/30 -rotate-12 sophisticated-glow"></div>
          </div>
          
          {/* Enhanced radial glow effects */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-radial from-purple-500/6 via-transparent to-transparent rounded-full blur-2xl"></div>
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

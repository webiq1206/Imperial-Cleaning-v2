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
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Resend-style hero layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center h-screen relative">
            {/* Left side - Content */}
            <div className="flex-1 max-w-2xl z-20">
              {/* Announcement badge */}
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                  <span className="text-sm text-gray-300 font-medium">
                    Announcing Professional Cleaning Services
                  </span>
                  <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Main heading - matches Resend exactly */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight mb-6">
                Cleaning for<br />businesses
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                The best way to reach spotless instead of scattered messes. Deliver professional and commercial cleaning at scale.
              </p>

              {/* Buttons - exactly like Resend */}
              <div className="flex items-center gap-4">
                <Button 
                  onClick={handleRequestQuote}
                  className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  data-testid="button-hero-get-started"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  data-testid="button-hero-documentation"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right side - Logo with 3D effect (replacing cube) */}
            <div className="flex-1 flex items-center justify-center relative z-10">
              <div className="relative">
                {/* Subtle logo with overlay */}
                <div className="logo-3d-container relative">
                  {/* Main logo */}
                  <img 
                    src={logoPath}
                    alt="Imperial Cleaning"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-contain opacity-20"
                  />
                  
                  {/* Multiple subtle overlay layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background geometric elements - subtle */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-10">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-gray-800 rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-gray-700 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/6 w-16 h-16 border border-gray-600 -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
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

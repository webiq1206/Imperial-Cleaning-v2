import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServiceAreasDropdownOpen, setIsServiceAreasDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const serviceAreasDropdownRef = useRef<HTMLDivElement>(null);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'contact', 'header_button');
    setShowContactForm(true);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    trackEvent('mobile_menu_toggle', 'navigation', isMenuOpen ? 'close' : 'open');
  };

  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsServiceAreasDropdownOpen(false); // Close other dropdown
    trackEvent('services_dropdown_toggle', 'navigation', isServicesDropdownOpen ? 'close' : 'open');
  };

  const handleServiceAreasDropdownToggle = () => {
    setIsServiceAreasDropdownOpen(!isServiceAreasDropdownOpen);
    setIsServicesDropdownOpen(false); // Close other dropdown
    trackEvent('service_areas_dropdown_toggle', 'navigation', isServiceAreasDropdownOpen ? 'close' : 'open');
  };

  const closeAllDropdowns = () => {
    setIsServicesDropdownOpen(false);
    setIsServiceAreasDropdownOpen(false);
  };

  const handleDropdownKeyDown = (event: React.KeyboardEvent, toggleFunction: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFunction();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeAllDropdowns();
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node) &&
        serviceAreasDropdownRef.current &&
        !serviceAreasDropdownRef.current.contains(event.target as Node)
      ) {
        closeAllDropdowns();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 glass-effect sophisticated-glow animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex items-center">
              <Link href="/" data-testid="link-home" className="flex items-center hover:opacity-80 transition-all duration-300 hover-lift-gentle ">
                <img 
                  src="/header-logo.png" 
                  alt="Imperial Cleaning Inc" 
                  className="h-5 w-auto brightness-0 invert opacity-40 hover:opacity-60 transition-all duration-300 mix-blend-overlay"
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle flex items-center focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1"
                  onClick={handleServicesDropdownToggle}
                  onKeyDown={(e) => handleDropdownKeyDown(e, handleServicesDropdownToggle)}
                  aria-haspopup="true"
                  aria-expanded={isServicesDropdownOpen}
                  data-testid="button-services-dropdown"
                >
                  Services
                  <svg className={`ml-1 h-3 w-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl transition-all duration-300 ease-out glass-card-elevated sophisticated-glow ${isServicesDropdownOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 translate-y-2'}`}>
                  <div className="py-2">
                    <Link 
                      href="/construction-cleaning" 
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 hover-lift-gentle hover-shimmer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg ${
                        location === '/construction-cleaning' 
                          ? 'text-foreground bg-secondary/30' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                      onClick={closeAllDropdowns}
                      data-testid="link-construction-cleaning"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">Construction Cleanup</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Post-construction debris removal</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/commercial-cleaning" 
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 hover-lift-gentle hover-shimmer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg ${
                        location === '/commercial-cleaning' 
                          ? 'text-foreground bg-secondary/30' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                      onClick={closeAllDropdowns}
                      data-testid="link-commercial-cleaning"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">Commercial Cleaning</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Daily office & facility maintenance</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div className="relative" ref={serviceAreasDropdownRef}>
                <button 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle flex items-center focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1"
                  onClick={handleServiceAreasDropdownToggle}
                  onKeyDown={(e) => handleDropdownKeyDown(e, handleServiceAreasDropdownToggle)}
                  aria-haspopup="true"
                  aria-expanded={isServiceAreasDropdownOpen}
                  data-testid="button-service-areas-dropdown"
                >
                  Service Areas
                  <svg className={`ml-1 h-3 w-3 transition-transform duration-200 ${isServiceAreasDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-72 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl transition-all duration-300 ease-out glass-card-elevated sophisticated-glow ${isServiceAreasDropdownOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 translate-y-2'}`}>
                  <div className="py-2">
                    <Link 
                      href="/service-areas/idaho" 
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 hover-lift-gentle hover-shimmer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                      onClick={closeAllDropdowns}
                      data-testid="link-service-areas-idaho"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">Idaho Locations</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Idaho Falls, Pocatello, Rexburg & more</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/service-areas/utah" 
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 hover-lift-gentle hover-shimmer focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                      onClick={closeAllDropdowns}
                      data-testid="link-service-areas-utah"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        <div>
                          <div className="font-medium">Utah Locations</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Salt Lake City, Logan, Ogden & more</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* About Link */}
              <Link 
                href="/#about" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle"
                data-testid="link-about"
              >
                About
              </Link>

              {/* Contact Link */}
              <Link 
                href="/#contact" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 nav-item-slide hover-lift-gentle"
                data-testid="link-contact"
              >
                Contact
              </Link>
            </nav>

            <Button 
              variant="pill-secondary"
              size="pill-md"
              onClick={handleRequestQuote}
              data-testid="button-request-quote-header"
              className="hidden md:inline-flex hover-lift-moderate button-ripple  hover-shimmer"
            >
              Request Quote
            </Button>

            {/* Enhanced Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle  button-magnetic" 
              onClick={handleMenuToggle}
              data-testid="button-mobile-menu"
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </button>
          </div>

          {/* Enhanced Mobile menu with sophisticated animations */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border/20 animate-fade-in-up">
              <div className="flex flex-col py-6 space-y-1">
                {/* Services Section */}
                <div className="px-2 py-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 animate-fade-in-left stagger-delay-1">Services</div>
                  <Link 
                    href="/construction-cleaning" 
                    className={`block px-3 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-2 ${
                      location === '/construction-cleaning' 
                        ? 'text-foreground bg-secondary/30' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="link-construction-cleaning-mobile"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">Construction Cleanup</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Post-construction debris removal</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/commercial-cleaning" 
                    className={`block px-3 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-3 ${
                      location === '/commercial-cleaning' 
                        ? 'text-foreground bg-secondary/30' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="link-commercial-cleaning-mobile"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">Commercial Cleaning</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Daily office & facility maintenance</div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Service Areas Section */}
                <div className="px-2 py-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 animate-fade-in-left stagger-delay-4">Service Areas</div>
                  <Link 
                    href="/service-areas/idaho" 
                    className="block px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-5"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="link-service-areas-idaho-mobile"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">Idaho Locations</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Idaho Falls, Pocatello, Rexburg & more</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/service-areas/utah" 
                    className="block px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-6"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="link-service-areas-utah-mobile"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">Utah Locations</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Salt Lake City, Logan, Ogden & more</div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="px-2 py-2 border-t border-border/20 mt-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 animate-fade-in-left stagger-delay-7">Quick Links</div>
                  <Link 
                    href="/#about" 
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-8"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="link-about-mobile"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/#contact" 
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-9"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="link-contact-mobile"
                  >
                    Contact
                  </Link>
                </div>

                {/* Call to Action */}
                <div className="pt-4 px-2 animate-fade-in-up stagger-delay-10">
                  <Button 
                    variant="pill-secondary"
                    size="pill-md"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleRequestQuote();
                    }}
                    data-testid="button-request-quote-mobile"
                    className="w-full hover-lift-moderate button-ripple hover-shimmer"
                  >
                    Request Quote
                  </Button>
                  <div className="text-center mt-3">
                    <a 
                      href="tel:+12085203202" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      data-testid="link-phone-mobile"
                    >
                      (208) 520-3202
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {showContactForm && (
        <ContactFormModal 
          isOpen={showContactForm} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isServiceAreasDropdownOpen, setIsServiceAreasDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const serviceAreasDropdownRef = useRef<HTMLDivElement>(null);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'contact', 'header_button');
    setShowContactForm(true);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    trackEvent('mobile_menu_toggle', 'navigation', isMobileMenuOpen ? 'close' : 'open');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

            {/* Enhanced Mobile menu with Sheet */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden p-2 hover:bg-secondary/50 rounded-lg hover-lift-gentle button-magnetic"
                  data-testid="button-mobile-menu"
                >
                  <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}>
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </div>
                  <span className="sr-only">Toggle mobile menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 glass-overlay">
                <SheetHeader className="text-left">
                  <SheetTitle className="text-primary-color text-lg font-semibold">
                    Navigation
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full py-6 space-y-1">
                  {/* Services Section */}
                  <div className="px-2 py-4">
                    <div className="text-xs font-semibold text-secondary-color uppercase tracking-wider mb-4">Services</div>
                    <Link 
                      href="/construction-cleaning" 
                      className={`block px-4 py-4 text-sm font-medium rounded-xl transition-all duration-300 hover-lift-gentle glass-button mb-2 ${
                        location === '/construction-cleaning' 
                          ? 'text-primary bg-primary/10 border-primary/20' 
                          : 'text-secondary-color hover:text-primary-color'
                      }`}
                      onClick={closeMobileMenu}
                      data-testid="link-construction-cleaning-mobile"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                        <div>
                          <div className="font-medium text-primary-color">Construction Cleanup</div>
                          <div className="text-xs text-secondary-color mt-1">Post-construction debris removal</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/commercial-cleaning" 
                      className={`block px-4 py-4 text-sm font-medium rounded-xl transition-all duration-300 hover-lift-gentle glass-button ${
                        location === '/commercial-cleaning' 
                          ? 'text-primary bg-primary/10 border-primary/20' 
                          : 'text-secondary-color hover:text-primary-color'
                      }`}
                      onClick={closeMobileMenu}
                      data-testid="link-commercial-cleaning-mobile"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                        <div>
                          <div className="font-medium text-primary-color">Commercial Cleaning</div>
                          <div className="text-xs text-secondary-color mt-1">Daily office & facility maintenance</div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Service Areas Section */}
                  <div className="px-2 py-4 border-t border-border/20">
                    <div className="text-xs font-semibold text-secondary-color uppercase tracking-wider mb-4">Service Areas</div>
                    <Link 
                      href="/service-areas/idaho" 
                      className="block px-4 py-4 text-sm font-medium text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button mb-2"
                      onClick={closeMobileMenu}
                      data-testid="link-service-areas-idaho-mobile"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                        <div>
                          <div className="font-medium text-primary-color">Idaho Locations</div>
                          <div className="text-xs text-secondary-color mt-1">Idaho Falls, Pocatello, Rexburg & more</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/service-areas/utah" 
                      className="block px-4 py-4 text-sm font-medium text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button"
                      onClick={closeMobileMenu}
                      data-testid="link-service-areas-utah-mobile"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-4"></div>
                        <div>
                          <div className="font-medium text-primary-color">Utah Locations</div>
                          <div className="text-xs text-secondary-color mt-1">Salt Lake City, Logan, Ogden & more</div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Quick Links */}
                  <div className="px-2 py-4 border-t border-border/20">
                    <div className="text-xs font-semibold text-secondary-color uppercase tracking-wider mb-4">Quick Links</div>
                    <Link 
                      href="/#about" 
                      className="block px-4 py-3 text-sm font-medium text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button mb-2"
                      onClick={closeMobileMenu}
                      data-testid="link-about-mobile"
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/#contact" 
                      className="block px-4 py-3 text-sm font-medium text-secondary-color hover:text-primary-color rounded-xl transition-all duration-300 hover-lift-gentle glass-button"
                      onClick={closeMobileMenu}
                      data-testid="link-contact-mobile"
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Call to Action - Fixed at bottom */}
                  <div className="mt-auto px-2 py-4 border-t border-border/20">
                    <Button 
                      variant="pill-primary"
                      size="pill-lg"
                      onClick={() => {
                        closeMobileMenu();
                        handleRequestQuote();
                      }}
                      data-testid="button-request-quote-mobile"
                      className="w-full mb-4 hover-lift-moderate button-ripple"
                    >
                      Request Quote
                    </Button>
                    <div className="text-center">
                      <a 
                        href="tel:+12085203202" 
                        className="text-sm text-secondary-color hover:text-primary-color transition-colors duration-200 font-medium"
                        data-testid="link-phone-mobile"
                      >
                        📞 (208) 520-3202
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

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

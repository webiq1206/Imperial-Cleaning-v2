import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'contact', 'header_button');
    setShowContactForm(true);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    trackEvent('mobile_menu_toggle', 'navigation', isMenuOpen ? 'close' : 'open');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 glass-effect sophisticated-glow animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <div className="flex items-center">
              <Link href="/" data-testid="link-home" className="flex items-center hover:opacity-80 transition-all duration-300 hover-lift-gentle glow-pulse-subtle">
                <img 
                  src="/header-logo.png" 
                  alt="Imperial Cleaning Inc" 
                  className="h-8 w-auto brightness-0 invert hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-10">
              <Link 
                href="/construction-cleaning" 
                className={`text-sm font-medium transition-all duration-300 nav-item-slide hover-lift-gentle ${
                  location === '/construction-cleaning' 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="link-construction-cleaning"
              >
                Construction Cleaning
              </Link>
              <Link 
                href="/commercial-cleaning" 
                className={`text-sm font-medium transition-all duration-300 nav-item-slide hover-lift-gentle ${
                  location === '/commercial-cleaning' 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="link-commercial-cleaning"
              >
                Commercial Cleaning
              </Link>
              <div className="relative group">
                <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer nav-item-slide hover-lift-gentle">
                  Service Areas
                </span>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out glass-card-elevated sophisticated-glow scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link 
                      href="/service-areas/idaho" 
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 hover-lift-gentle hover-shimmer"
                      data-testid="link-service-areas-idaho"
                    >
                      Idaho
                    </Link>
                    <Link 
                      href="/service-areas/utah" 
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 hover-lift-gentle hover-shimmer"
                      data-testid="link-service-areas-utah"
                    >
                      Utah
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            <button 
              className="pill-button hidden md:inline-flex hover-lift-moderate button-ripple glow-pulse-breathing hover-shimmer" 
              onClick={handleRequestQuote}
              data-testid="button-request-quote-header"
            >
              Request Quote
            </button>

            {/* Enhanced Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle glow-pulse-subtle button-magnetic" 
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
                <Link 
                  href="/construction-cleaning" 
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-1"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-construction-cleaning-mobile"
                >
                  Construction Cleaning
                </Link>
                <Link 
                  href="/commercial-cleaning" 
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-2"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-commercial-cleaning-mobile"
                >
                  Commercial Cleaning
                </Link>
                <Link 
                  href="/service-areas/idaho" 
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-3"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-service-areas-idaho-mobile"
                >
                  Idaho Service Areas
                </Link>
                <Link 
                  href="/service-areas/utah" 
                  className="px-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 hover-lift-gentle hover-shimmer animate-fade-in-left stagger-delay-4"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-service-areas-utah-mobile"
                >
                  Utah Service Areas
                </Link>
                <div className="pt-4 px-2 animate-fade-in-up stagger-delay-5">
                  <button 
                    className="pill-button w-full hover-lift-moderate button-ripple glow-pulse-breathing hover-shimmer"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleRequestQuote();
                    }}
                    data-testid="button-request-quote-mobile"
                  >
                    Request Quote
                  </button>
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

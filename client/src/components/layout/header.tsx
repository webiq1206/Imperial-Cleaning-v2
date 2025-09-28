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
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" data-testid="link-home">
                <svg 
                  width="240" 
                  height="40" 
                  viewBox="0 0 240 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8"
                >
                  <text 
                    x="0" 
                    y="28" 
                    fill="#FFFFFF" 
                    fontFamily="Inter, sans-serif" 
                    fontSize="18" 
                    fontWeight="700"
                  >
                    IMPERIAL CLEANING INC
                  </text>
                </svg>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/construction-cleaning" 
                className={`text-muted-foreground hover:text-foreground transition-colors ${location === '/construction-cleaning' ? 'text-foreground' : ''}`}
                data-testid="link-construction-cleaning"
              >
                Construction Cleaning
              </Link>
              <Link 
                href="/commercial-cleaning" 
                className={`text-muted-foreground hover:text-foreground transition-colors ${location === '/commercial-cleaning' ? 'text-foreground' : ''}`}
                data-testid="link-commercial-cleaning"
              >
                Commercial Cleaning
              </Link>
              <div className="relative group">
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Service Areas
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link 
                    href="/service-areas/idaho" 
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-t-lg"
                    data-testid="link-service-areas-idaho"
                  >
                    Idaho
                  </Link>
                  <Link 
                    href="/service-areas/utah" 
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-b-lg"
                    data-testid="link-service-areas-utah"
                  >
                    Utah
                  </Link>
                </div>
              </div>
            </nav>

            <button 
              className="neon-border px-6 py-2 rounded-lg font-medium hidden md:block" 
              onClick={handleRequestQuote}
              data-testid="button-request-quote-header"
            >
              Request Quote
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2" 
              onClick={handleMenuToggle}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/construction-cleaning" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-construction-cleaning-mobile"
                >
                  Construction Cleaning
                </Link>
                <Link 
                  href="/commercial-cleaning" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-commercial-cleaning-mobile"
                >
                  Commercial Cleaning
                </Link>
                <Link 
                  href="/service-areas/idaho" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-service-areas-idaho-mobile"
                >
                  Idaho Service Areas
                </Link>
                <Link 
                  href="/service-areas/utah" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid="link-service-areas-utah-mobile"
                >
                  Utah Service Areas
                </Link>
                <button 
                  className="neon-border px-6 py-2 rounded-lg font-medium text-left"
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

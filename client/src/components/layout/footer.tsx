import { Link } from "wouter";
import { allServiceLocations } from "@shared/service-locations";
import { locationToSlug } from "@/lib/routing-utils";

export default function Footer() {
  // Get top locations by service type for footer display
  const getTopLocationsByService = (serviceType: 'construction' | 'commercial', limit: number = 4) => {
    return allServiceLocations
      .filter(loc => {
        if (serviceType === 'construction') {
          return loc.services.constructionCleanup;
        } else {
          return loc.services.commercialCleaning;
        }
      })
      .filter(loc => loc.marketTier === 'primary' || loc.marketTier === 'secondary')
      .sort((a, b) => {
        // Sort by market tier (primary first) then by name
        const tierOrder = { primary: 0, secondary: 1, extended: 2 };
        const tierDiff = tierOrder[a.marketTier] - tierOrder[b.marketTier];
        return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
      })
      .slice(0, limit);
  };

  return (
    <footer className="border-t border-border/30 py-20 px-6 footer-sophisticated-bg noise-overlay grain-texture vignette-top">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          {/* Company Info & Logo */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <img 
                src="/header-logo.png" 
                alt="Imperial Cleaning Inc" 
                className="h-8 w-auto filter brightness-0 invert mb-6"
                data-testid="footer-logo"
              />
              <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-6">
                Idaho and Utah's most trusted cleaning company since 2010. Professional construction cleanup 
                and commercial cleaning services with a commitment to excellence.
              </p>
              
              {/* Key Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="tel:+12085203202" 
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-200 group"
                  data-testid="footer-main-phone"
                >
                  <div className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="font-medium">(208) 520-3202</span>
                </a>
                <a 
                  href="mailto:service@imperialcleaninginc.com" 
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                  data-testid="footer-main-email"
                >
                  <div className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>service@imperialcleaninginc.com</span>
                </a>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-5 h-5 mr-3 opacity-70">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Idaho Falls, ID | Serving ID & UT</span>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Licensed & Bonded</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-foreground mb-6">Our Services</h3>
            
            {/* Construction Cleaning */}
            <div className="mb-8">
              <Link 
                href="/construction-cleaning" 
                className="text-foreground text-base font-medium hover:text-primary transition-colors duration-200 group flex items-center mb-4"
                data-testid="link-footer-construction-cleaning"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-all duration-200"></span>
                Construction Cleaning
              </Link>
              <div className="ml-5 space-y-2 mb-4">
                {getTopLocationsByService('construction', 3).map((loc) => (
                  <Link 
                    key={loc.name}
                    href={`/construction-cleaning/${locationToSlug(loc.name)}`}
                    className="block text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                    data-testid={`link-footer-construction-${locationToSlug(loc.name)}`}
                  >
                    {loc.name}, {loc.state}
                  </Link>
                ))}
                <Link 
                  href="/construction-cleaning" 
                  className="block text-primary text-sm hover:text-primary/80 transition-colors duration-200 font-medium"
                  data-testid="link-footer-construction-all"
                >
                  View all locations →
                </Link>
              </div>
              <div className="ml-5 space-y-1">
                <div className="text-muted-foreground text-xs">• Post-construction cleanup</div>
                <div className="text-muted-foreground text-xs">• Final cleaning & detailing</div>
                <div className="text-muted-foreground text-xs">• Debris removal</div>
              </div>
            </div>

            {/* Commercial Cleaning */}
            <div className="mb-6">
              <Link 
                href="/commercial-cleaning" 
                className="text-foreground text-base font-medium hover:text-primary transition-colors duration-200 group flex items-center mb-4"
                data-testid="link-footer-commercial-cleaning"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-all duration-200"></span>
                Commercial Cleaning
              </Link>
              <div className="ml-5 space-y-2 mb-4">
                {getTopLocationsByService('commercial', 3).map((loc) => (
                  <Link 
                    key={loc.name}
                    href={`/commercial-cleaning/${locationToSlug(loc.name)}`}
                    className="block text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                    data-testid={`link-footer-commercial-${locationToSlug(loc.name)}`}
                  >
                    {loc.name}, {loc.state}
                  </Link>
                ))}
                <Link 
                  href="/commercial-cleaning" 
                  className="block text-primary text-sm hover:text-primary/80 transition-colors duration-200 font-medium"
                  data-testid="link-footer-commercial-all"
                >
                  View all locations →
                </Link>
              </div>
              <div className="ml-5 space-y-1">
                <div className="text-muted-foreground text-xs">• Office & facility maintenance</div>
                <div className="text-muted-foreground text-xs">• Industrial cleaning</div>
                <div className="text-muted-foreground text-xs">• Specialized services</div>
              </div>
            </div>
          </div>

          {/* Service Areas & Company Information */}
          <div className="lg:col-span-5">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Service Areas */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6">Service Areas</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Idaho</h4>
                  <Link 
                    href="/service-areas/idaho"
                    className="block text-primary text-sm hover:text-primary/80 transition-colors duration-200 font-medium mb-3"
                    data-testid="link-footer-idaho-overview"
                  >
                    View Idaho Service Areas →
                  </Link>
                  <ul className="space-y-1">
                    {[...allServiceLocations.filter(loc => loc.state === "Idaho")].slice(0, 4).map((location) => (
                      <li key={location.name}>
                        <span className="text-muted-foreground text-sm">{location.name}</span>
                      </li>
                    ))}
                    {allServiceLocations.filter(loc => loc.state === "Idaho").length > 4 && (
                      <li className="text-muted-foreground text-sm">+ {allServiceLocations.filter(loc => loc.state === "Idaho").length - 4} more cities</li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Utah</h4>
                  <Link 
                    href="/service-areas/utah"
                    className="block text-primary text-sm hover:text-primary/80 transition-colors duration-200 font-medium mb-3"
                    data-testid="link-footer-utah-overview"
                  >
                    View Utah Service Areas →
                  </Link>
                  <ul className="space-y-1">
                    {[...allServiceLocations.filter(loc => loc.state === "Utah")].slice(0, 4).map((location) => (
                      <li key={location.name}>
                        <span className="text-muted-foreground text-sm">{location.name}</span>
                      </li>
                    ))}
                    {allServiceLocations.filter(loc => loc.state === "Utah").length > 4 && (
                      <li className="text-muted-foreground text-sm">+ {allServiceLocations.filter(loc => loc.state === "Utah").length - 4} more cities</li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href="/about" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-contact"
                    >
                      Contact & Quote
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#compliance" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-insurance"
                    >
                      Insurance & Licensing
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#testimonials" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-reviews"
                    >
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#case-studies" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-case-studies"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#faq" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/sitemap" 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                      data-testid="link-footer-sitemap-nav"
                    >
                      Site Map
                    </Link>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h4 className="font-medium text-foreground mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Emergency Only</span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Quote CTA */}
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-foreground font-medium mb-2">Need a quote today?</p>
                  <a 
                    href="tel:+12085203202" 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                    data-testid="link-footer-quick-quote"
                  >
                    Call (208) 520-3202 →
                  </a>
                </div>
              </div>
              
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-12">
          {/* Trust Indicators Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-8 pb-8 border-b border-border/10">
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-green-500 rounded mr-3"></div>
              <span>Comprehensive Liability Insurance</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-blue-500 rounded mr-3"></div>
              <span>Bonded & Licensed</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-purple-500 rounded mr-3"></div>
              <span>Safety Compliant</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-3"></div>
              <span>Workers' Compensation</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-red-500 rounded mr-3"></div>
              <span>Background Checked Staff</span>
            </div>
          </div>
          
          {/* Legal & Contact Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-muted-foreground text-sm font-normal" data-testid="text-footer-copyright">
                &copy; {new Date().getFullYear()} Imperial Cleaning Inc. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs" data-testid="text-footer-license">
                Licensed Commercial Cleaning Contractor | Multi-State Licensed & Certified
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 lg:gap-8">
              <Link 
                href="/privacy-policy" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                data-testid="link-footer-terms"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                data-testid="link-footer-sitemap"
              >
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

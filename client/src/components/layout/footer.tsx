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
    <footer className="border-t border-border/30 py-24 px-6 footer-sophisticated-bg noise-overlay grain-texture vignette-top">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="/header-logo.png" 
              alt="Imperial Cleaning Inc" 
              className="h-7 w-auto filter brightness-0 invert mb-6"
              data-testid="footer-logo"
            />
            <p className="text-muted-foreground text-sm leading-6 max-w-xs font-normal mb-4">
              Professional cleaning services for construction and commercial clients across Idaho and Utah.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-2">
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Fully Insured & Bonded
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Licensed & Certified
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                24/7 Service Available
              </div>
            </div>
          </div>

          {/* Services with Locations */}
          <div className="md:col-span-2">
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Our Services</h4>
            
            {/* Construction Cleaning */}
            <div className="mb-6">
              <Link 
                href="/construction-cleaning" 
                className="text-foreground text-sm font-medium hover:text-primary transition-colors duration-200 group flex items-center mb-3"
                data-testid="link-footer-construction-cleaning"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-all duration-200"></span>
                Construction Cleaning
              </Link>
              <div className="pl-5 space-y-2">
                {getTopLocationsByService('construction', 4).map((loc) => (
                  <Link 
                    key={loc.name}
                    href={`/construction-cleaning/${locationToSlug(loc.name)}`}
                    className="block text-muted-foreground text-xs hover:text-foreground transition-colors duration-200"
                    data-testid={`link-footer-construction-${locationToSlug(loc.name)}`}
                  >
                    {loc.name}, {loc.state}
                  </Link>
                ))}
                <Link 
                  href="/construction-cleaning" 
                  className="block text-muted-foreground text-xs hover:text-primary transition-colors duration-200 font-medium"
                  data-testid="link-footer-construction-all"
                >
                  View all locations →
                </Link>
              </div>
            </div>

            {/* Commercial Cleaning */}
            <div className="mb-6">
              <Link 
                href="/commercial-cleaning" 
                className="text-foreground text-sm font-medium hover:text-primary transition-colors duration-200 group flex items-center mb-3"
                data-testid="link-footer-commercial-cleaning"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-all duration-200"></span>
                Commercial Cleaning
              </Link>
              <div className="pl-5 space-y-2">
                {getTopLocationsByService('commercial', 4).map((loc) => (
                  <Link 
                    key={loc.name}
                    href={`/commercial-cleaning/${locationToSlug(loc.name)}`}
                    className="block text-muted-foreground text-xs hover:text-foreground transition-colors duration-200"
                    data-testid={`link-footer-commercial-${locationToSlug(loc.name)}`}
                  >
                    {loc.name}, {loc.state}
                  </Link>
                ))}
                <Link 
                  href="/commercial-cleaning" 
                  className="block text-muted-foreground text-xs hover:text-primary transition-colors duration-200 font-medium"
                  data-testid="link-footer-commercial-all"
                >
                  View all locations →
                </Link>
              </div>
            </div>

            {/* Service Specialties */}
            <div className="border-t border-border/20 pt-4">
              <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Specialties</h5>
              <div className="space-y-2">
                <span className="block text-muted-foreground text-xs flex items-center">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  Post-Construction Cleanup
                </span>
                <span className="block text-muted-foreground text-xs flex items-center">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  Office & Facility Maintenance
                </span>
                <span className="block text-muted-foreground text-xs flex items-center">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  Industrial Cleaning
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Idaho Service Areas</h4>
            <ul className="space-y-2">
              {[...allServiceLocations.filter(loc => loc.state === "Idaho")].map((location) => (
                <li key={location.name}>
                  <Link 
                    href={`/service-areas/idaho`}
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-200 font-normal"
                    data-testid={`link-footer-${locationToSlug(location.name)}`}
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-medium text-foreground mt-6 mb-3 text-sm tracking-wide">Utah Service Areas</h4>
            <ul className="space-y-2">
              {[...allServiceLocations.filter(loc => loc.state === "Utah")].map((location) => (
                <li key={location.name}>
                  <Link 
                    href={`/service-areas/utah`}
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-200 font-normal"
                    data-testid={`link-footer-${locationToSlug(location.name)}`}
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/#about" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-about"
                >
                  About Us
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
                  data-testid="link-footer-testimonials"
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
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+12085203202" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal flex items-center group"
                  data-testid="link-footer-phone"
                >
                  <div className="w-4 h-4 mr-3 opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  (208) 520-3202
                </a>
              </li>
              <li>
                <a 
                  href="mailto:service@imperialcleaninginc.com" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal flex items-center group"
                  data-testid="link-footer-email"
                >
                  <div className="w-4 h-4 mr-3 opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  service@imperialcleaninginc.com
                </a>
              </li>
              <li>
                <div className="text-muted-foreground text-sm font-normal flex items-center" data-testid="text-footer-location">
                  <div className="w-4 h-4 mr-3 opacity-50">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Idaho Falls, ID
                </div>
              </li>
            </ul>
            
            <h4 className="font-medium text-foreground mt-6 mb-3 text-sm tracking-wide">Business Hours</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
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
            
            {/* Quick Quote CTA */}
            <div className="mt-6 p-4 bg-secondary/20 rounded-lg border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Need a quote?</p>
              <a 
                href="tel:+12085203202" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-footer-quick-quote"
              >
                Call (208) 520-3202 →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          {/* Trust Indicators Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-6 pb-6 border-b border-border/10">
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-green-500 rounded mr-3"></div>
              Comprehensive Liability Insurance
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-blue-500 rounded mr-3"></div>
              Bonded & Licensed
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-purple-500 rounded mr-3"></div>
              Safety Compliant
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-3"></div>
              Workers' Compensation
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <div className="w-3 h-3 bg-red-500 rounded mr-3"></div>
              Background Checked Staff
            </div>
          </div>
          
          {/* Legal & Contact Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-muted-foreground text-sm font-normal" data-testid="text-footer-copyright">
                &copy; 2024 Imperial Cleaning Inc. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs" data-testid="text-footer-license">
                Licensed Commercial Cleaning Contractor | Multi-State Licensed & Certified
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="#privacy" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                data-testid="link-footer-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#sitemap" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                data-testid="link-footer-sitemap"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

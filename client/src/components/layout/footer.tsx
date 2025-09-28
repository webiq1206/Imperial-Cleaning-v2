import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-16 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src="/header-logo.png" 
              alt="Imperial Cleaning Inc" 
              className="h-7 w-auto filter brightness-0 invert mb-6"
              data-testid="footer-logo"
            />
            <p className="text-muted-foreground text-sm leading-6 max-w-xs font-normal">
              Professional cleaning services for construction and commercial clients across Idaho and Utah.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/construction-cleaning" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-construction-cleaning"
                >
                  Construction Cleaning
                </Link>
              </li>
              <li>
                <Link 
                  href="/commercial-cleaning" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-commercial-cleaning"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground text-sm font-normal">Post-Construction Cleanup</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm font-normal">Office Maintenance</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Service Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/service-areas/idaho" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-idaho"
                >
                  Idaho Falls, ID
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-areas/idaho" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-pocatello"
                >
                  Pocatello, ID
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-areas/utah" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-salt-lake"
                >
                  Salt Lake City, UT
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-areas/utah" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-logan"
                >
                  Logan, UT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-6 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+12085203202" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-phone"
                >
                  (208) 520-3202
                </a>
              </li>
              <li>
                <a 
                  href="mailto:service@imperialcleaninginc.com" 
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
                  data-testid="link-footer-email"
                >
                  service@imperialcleaninginc.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm font-normal" data-testid="text-footer-location">
                  Idaho Falls, ID
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm font-normal" data-testid="text-footer-hours">
                  Mon-Fri: 7:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-muted-foreground text-sm font-normal" data-testid="text-footer-copyright">
            &copy; 2024 Imperial Cleaning Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200 font-normal"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

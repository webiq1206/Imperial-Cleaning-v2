import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <svg 
              width="240" 
              height="40" 
              viewBox="0 0 240 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 mb-4"
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
            <p className="text-muted-foreground text-sm">
              Professional cleaning services for construction and commercial clients across Idaho and Utah.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link 
                  href="/construction-cleaning" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-construction-cleaning"
                >
                  Construction Cleaning
                </Link>
              </li>
              <li>
                <Link 
                  href="/commercial-cleaning" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-commercial-cleaning"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li><span className="hover:text-foreground transition-colors">Post-Construction Cleanup</span></li>
              <li><span className="hover:text-foreground transition-colors">Office Maintenance</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link 
                  href="/service-areas/idaho" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-idaho"
                >
                  Idaho Falls, ID
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-areas/idaho" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-pocatello"
                >
                  Pocatello, ID
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-areas/utah" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-salt-lake"
                >
                  Salt Lake City, UT
                </Link>
              </li>
              <li>
                <Link 
                  href="/service-areas/utah" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-logan"
                >
                  Logan, UT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="tel:+12085203202" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  (208) 520-3202
                </a>
              </li>
              <li>
                <a 
                  href="mailto:service@imperialcleaninginc.com" 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  service@imperialcleaninginc.com
                </a>
              </li>
              <li data-testid="text-footer-location">Idaho Falls, ID</li>
              <li data-testid="text-footer-hours">Mon-Fri: 7:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">&copy; 2024 Imperial Cleaning Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
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

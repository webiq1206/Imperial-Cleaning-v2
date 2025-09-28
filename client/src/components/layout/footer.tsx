export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            &copy; 2024 Imperial Cleaning Inc.
          </p>
          <div className="flex gap-6 text-sm">
            <a 
              href="tel:+12085203202" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-phone"
            >
              (208) 520-3202
            </a>
            <a 
              href="mailto:service@imperialcleaninginc.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-email"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

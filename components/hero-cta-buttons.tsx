"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";

const ContactFormModal = dynamic(() => import("@/components/contact-form-modal"), { ssr: false });

export default function HeroCTAButtons() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'hero', 'main_cta');
    setShowContactForm(true);
  };

  return (
    <>
      <div className="flex items-center gap-4 animate-fade-in-up stagger-delay-4">
        <Button 
          onClick={handleRequestQuote}
          variant="pill-primary"
          size="pill-lg"
          className="pill-button-resend-primary hover-lift-moderate button-ripple"
          data-testid="button-hero-get-started"
        >
          Get Free Quote
        </Button>
        <Link href="/service-areas/idaho" prefetch={false}>
          <Button 
            variant="pill-secondary"
            size="pill-lg"
            className="pill-button-resend-secondary hover-lift-gentle hover-shimmer"
            data-testid="button-hero-documentation"
          >
            View Service Areas
          </Button>
        </Link>
      </div>
      {showContactForm && (
        <ContactFormModal 
          isOpen={showContactForm} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
}

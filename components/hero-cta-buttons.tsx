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

  const handleCallClick = () => {
    trackEvent('phone_call', 'hero', 'click_to_call');
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 animate-fade-in-up stagger-delay-4">
        <Button 
          onClick={handleRequestQuote}
          variant="pill-primary"
          size="pill-lg"
          className="pill-button-resend-primary hover-lift-moderate button-ripple"
          data-testid="button-hero-get-started"
        >
          Get Free Quote
        </Button>
        <a href="tel:+12085203202" onClick={handleCallClick} data-testid="button-hero-call">
          <Button 
            variant="pill-secondary"
            size="pill-lg"
            className="pill-button-resend-secondary hover-lift-gentle hover-shimmer"
          >
            Call (208) 520-3202
          </Button>
        </a>
        <Link href="/service-areas" prefetch={false}>
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

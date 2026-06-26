"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { GOOGLE_LISTING_URL } from "@/data/reviews";

const ContactFormModal = dynamic(() => import("@/components/contact-form-modal"), { ssr: false }); // modal: no visible content on initial load

/** Returns true if it is currently Mon-Fri 8AM-5PM Mountain Time */
function computeMtAvailability(): boolean {
  const mtString = new Date().toLocaleString("en-US", { timeZone: "America/Denver" });
  const mt = new Date(mtString);
  const day = mt.getDay(); // 0=Sun, 6=Sat
  const timeVal = mt.getHours() * 60 + mt.getMinutes();
  const isWeekday = day >= 1 && day <= 5;
  return isWeekday && timeVal >= 8 * 60 && timeVal < 17 * 60;
}

function useAvailability() {
  const [available, setAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    setAvailable(computeMtAvailability());
  }, []);
  return available;
}

export default function HeroCTAButtons() {
  const [showContactForm, setShowContactForm] = useState(false);
  const available = useAvailability();

  const handleRequestQuote = () => {
    trackEvent('quote_request', 'hero', 'main_cta');
    setShowContactForm(true);
  };

  const handleCallClick = () => {
    trackEvent('phone_call', 'hero', 'click_to_call');
  };

  return (
    <>
      {/* Google review badge + availability */}
      <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in-up stagger-delay-3">
        <a
          href={GOOGLE_LISTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-800/60 glass-effect hover:border-gray-700/80 transition-all duration-300 group"
          data-testid="badge-google-reviews"
          aria-label="5.0 stars on Google — read our reviews"
        >
          <span className="flex items-center gap-0.5">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
            ))}
          </span>
          <span className="text-xs text-secondary-color tracking-tight">
            <span className="text-foreground font-medium">5.0</span> · 60+ reviews on Google
          </span>
        </a>

        {/* Live availability indicator — only renders after hydration */}
        {available !== null && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground" data-testid="badge-availability">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${available ? "bg-green-400 animate-pulse" : "bg-amber-400"}`} />
            {available ? "Available now" : "We respond within 4 hours"}
          </span>
        )}
      </div>

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

import { useState, useEffect } from "react";
import { Quote, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import ContactFormModal from "@/components/contact-form-modal";

export default function StickyQuoteButton() {
 const [showContactForm, setShowContactForm] = useState(false);
 const [isVisible, setIsVisible] = useState(false);

 // Show button after 1.5 seconds or on scroll
 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 1500);
  
  const handleScroll = () => {
   if (window.scrollY > 200) {
    setIsVisible(true);
   }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => {
   clearTimeout(timer);
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 const handleQuoteClick = () => {
  trackEvent('quote_request', 'sticky_quote_button', 'main_cta');
  setShowContactForm(true);
 };

 if (!isVisible) return null;

 return (
  <>
   {/* Mobile Only Sticky Button - Bottom Center */}
   <button
    onClick={handleQuoteClick}
    data-testid="button-sticky-quote-mobile"
    aria-label="Request a Free Quote"
    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] flex md:hidden items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-scale sophisticated-glow group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
   >
    {/* Sparkle icon */}
    <Sparkles 
     className="w-4 h-4 text-black" 
     strokeWidth={2.5}
    />
    
    {/* Button text */}
    <span className="text-black font-semibold text-sm tracking-tight">
     Get Free Quote
    </span>
    
    {/* Quote icon */}
    <Quote 
     className="w-4 h-4 text-black" 
     strokeWidth={2.5}
    />
   </button>

   {/* Contact Form Modal */}
   {showContactForm && (
    <ContactFormModal 
     isOpen={showContactForm} 
     onClose={() => setShowContactForm(false)} 
    />
   )}
  </>
 );
}

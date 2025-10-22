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
   {/* Desktop Sticky Button - Bottom Right */}
   <button
    onClick={handleQuoteClick}
    data-testid="button-sticky-quote-desktop"
    aria-label="Request a Free Quote"
    className="fixed bottom-6 right-6 z-[999] hidden md:flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-fade-in-scale sophisticated-glow hover-lift-strong group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
   >
    {/* Animated sparkle icon */}
    <Sparkles 
     className="w-5 h-5 text-black group-hover:rotate-12 transition-transform duration-300" 
     strokeWidth={2.5}
    />
    
    {/* Button text */}
    <span className="text-black font-semibold tracking-tight">
     Request Quote
    </span>
    
    {/* Quote icon */}
    <Quote 
     className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" 
     strokeWidth={2.5}
    />
    
    {/* Pulse effect on hover */}
    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 group-hover:animate-ping opacity-75"></div>
   </button>

   {/* Mobile Sticky Button - Bottom Center */}
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

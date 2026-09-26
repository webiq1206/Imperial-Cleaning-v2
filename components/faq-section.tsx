"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import { trackEvent } from "@/lib/analytics";
import { homeFaqs, type HomeFaq } from "@/data/home-faqs";

// Re-exported for backward compatibility; canonical source is @/data/home-faqs.
export { homeFaqs };
export type { HomeFaq };

export default function FAQSection() {
 const [showContactForm, setShowContactForm] = useState(false);

 const handleContactClick = () => {
  trackEvent('contact_from_faq', 'engagement', 'faq_section');
  setShowContactForm(true);
 };

 const faqs = homeFaqs;

 return (
  <>
   <section id="faq" className="py-24 px-6 faq-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
    <div className="max-w-7xl mx-auto">
     {/* Section Header */}
     <div className="text-center mb-20">
      <div className="resend-icon mx-auto mb-8 hover-lift-gentle animate-fade-in-up">
       <HelpCircle className="h-8 w-8 icon-gradient" />
      </div>
      
      <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 tracking-tight leading-tight">
       <span className="gradient-text-cyan-purple">Frequently Asked Questions</span>
      </h2>
      
      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
       Get answers to common questions about our commercial cleaning and construction cleanup services across Idaho and Utah.
      </p>
     </div>

     {/* FAQ Accordion */}
     <div className="max-w-4xl mx-auto">
      <div className="glass-card-premium sophisticated-glow p-8 rounded-lg animate-fade-in-up stagger-delay-1">
       <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
         <AccordionItem 
          key={faq.id} 
          value={faq.id}
          className="glass-card-elevated rounded-lg border-0 overflow-hidden group hover-lift-gentle"
          data-testid={`faq-item-${faq.id}`}
         >
          <AccordionTrigger 
           className="px-6 py-6 text-left hover:no-underline group-hover:bg-muted/10 transition-all duration-300"
           data-testid={`faq-trigger-${faq.id}`}
          >
           <div className="flex items-start gap-4 text-left">
            <div className="resend-icon-sm mt-1 group-hover:scale-105 transition-all duration-300">
             <div className="w-2 h-2 bg-primary rounded-full icon-gradient"></div>
            </div>
            <span className="text-lg lg:text-xl text-foreground leading-tight pr-4">
             {faq.question}
            </span>
           </div>
          </AccordionTrigger>
          
          <AccordionContent 
           className="px-6 pb-6"
           data-testid={`faq-content-${faq.id}`}
          >
           <div className="glass-divider-top mb-4"></div>
           <div className="pl-6">
            <p className="text-muted-foreground leading-relaxed">
             {faq.answer}
            </p>
           </div>
          </AccordionContent>
         </AccordionItem>
        ))}
       </Accordion>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 animate-fade-in-up stagger-delay-2">
       <div className="glass-card-elevated sophisticated-glow hover-lift-moderate p-8 rounded-lg">
        <div className="glass-divider-top mb-6"></div>
        
        <h3 className="text-2xl lg:text-3xl mb-4 text-foreground">
         Still Have Questions?
        </h3>
        
        <div className="glass-divider-top mb-6"></div>
        
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
         Our experienced team is ready to discuss your specific cleaning needs in Idaho Falls,
         eastern Idaho, or anywhere across Idaho and Utah. Get a customized quote today.
        </p>
        
        <div className="glass-divider-top mb-6"></div>
        
        <Button
         onClick={handleContactClick}
         variant="pill-primary"
         size="pill-lg"
         className=" hover-lift-gentle button-ripple hover-shimmer"
         data-testid="button-contact-faq"
        >
         Get Your Free Quote →
        </Button>
       </div>
      </div>
     </div>
    </div>
   </section>

   {showContactForm && (
    <ContactFormModal 
     isOpen={showContactForm} 
     onClose={() => setShowContactForm(false)} 
    />
   )}
  </>
 );
}

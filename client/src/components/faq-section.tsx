import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/contact-form-modal";
import { trackEvent } from "@/lib/analytics";

export default function FAQSection() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    trackEvent('contact_from_faq', 'engagement', 'faq_section');
    setShowContactForm(true);
  };

  const faqs = [
    {
      id: "service-areas-boise",
      question: "What areas in Boise and the Treasure Valley do you serve?",
      answer: "Imperial Cleaning Inc. provides comprehensive commercial and construction cleaning services throughout the entire Treasure Valley region, including Boise, Meridian, Nampa, Caldwell, Eagle, Star, and Kuna. We also serve outlying areas like Mountain Home, Emmett, and Middleton. Our Boise commercial cleaning team can typically reach any location within 30 minutes, ensuring prompt response times for both scheduled maintenance and emergency cleanup services."
    },
    {
      id: "construction-cleanup-process",
      question: "What does your post-construction cleanup process include?",
      answer: "Our Treasure Valley construction cleanup services follow a comprehensive 3-phase process: Phase 1 includes rough cleaning with debris removal, dust elimination, and surface preparation. Phase 2 covers detailed cleaning of windows, fixtures, floors, and all surfaces. Phase 3 is our final inspection-ready cleaning with touch-ups, floor protection, and complete project walkthrough. This systematic approach ensures your construction project in Boise, Meridian, or anywhere in Idaho meets inspection standards and is ready for occupancy."
    },
    {
      id: "commercial-cleaning-scheduling",
      question: "How flexible are your commercial cleaning schedules in Idaho?",
      answer: "We offer extremely flexible commercial cleaning schedules throughout Idaho to accommodate your business needs. Our Meridian office cleaning and Boise commercial cleaning services include daily, weekly, bi-weekly, and monthly options. We work around your business hours - before opening, after closing, or during off-peak times. For 24/7 facilities, we provide overnight and weekend services. Emergency cleanup services are available across the Treasure Valley with same-day response when needed."
    },
    {
      id: "insurance-bonding-compliance",
      question: "Are you fully insured and bonded for commercial projects?",
      answer: "Yes, Imperial Cleaning Inc. maintains comprehensive insurance coverage including general liability, workers' compensation, and bonding for all commercial and construction cleaning projects in Idaho and Utah. We carry $2 million in liability coverage and are fully bonded, providing complete protection for your property and peace of mind. Our insurance certificates are readily available and we can add your business as an additional insured for larger projects."
    },
    {
      id: "pricing-quote-process",
      question: "How do you determine pricing for Nampa and Treasure Valley cleaning services?",
      answer: "Our pricing for Nampa post-construction services and Treasure Valley commercial cleaning is based on several factors: square footage, frequency of service, type of facility, specific cleaning requirements, and accessibility. We provide detailed, transparent quotes with no hidden fees. Most commercial cleaning estimates in the Boise area can be provided within 24 hours. For construction cleanup projects, we offer both per-square-foot pricing and flat-rate options depending on project scope."
    },
    {
      id: "response-time-emergencies",
      question: "What are your emergency response times in Boise and surrounding areas?",
      answer: "For emergency cleaning situations in Boise, Meridian, Nampa, and the greater Treasure Valley, Imperial Cleaning Inc. provides 24/7 emergency response. Our typical response time is 2-4 hours for urgent situations during business hours, and within 6 hours for after-hours emergencies. This includes water damage cleanup, biohazard situations, and urgent pre-inspection cleaning for construction projects. Our rapid response capability covers all of Ada County and Canyon County."
    },
    {
      id: "construction-timeline-coordination",
      question: "How do you coordinate with construction timelines and contractors?",
      answer: "We work closely with general contractors, project managers, and construction teams throughout Idaho to ensure seamless timeline coordination. Our Treasure Valley construction cleanup team integrates with your project schedule, providing cleaning services at critical milestones: rough clean after drywall, detailed clean after painting and flooring, and final clean before inspection. We maintain constant communication and can adjust our schedule to meet accelerated deadlines or address weather-related delays common in Idaho construction projects."
    },
    {
      id: "specialized-equipment-techniques",
      question: "What specialized equipment do you use for construction and commercial cleaning?",
      answer: "Imperial Cleaning Inc. utilizes professional-grade equipment specifically designed for construction and commercial cleaning in the Treasure Valley. This includes HEPA filtration systems for dust removal, commercial floor scrubbers, high-reach window cleaning equipment, and specialized post-construction vacuum systems. For Boise commercial cleaning, we use eco-friendly cleaning solutions and state-of-the-art carpet cleaning equipment. All equipment is regularly maintained and operated by trained professionals."
    },
    {
      id: "quality-assurance-guarantees",
      question: "What quality assurance measures and guarantees do you provide?",
      answer: "We guarantee 100% satisfaction on all cleaning services throughout Idaho and Utah. Every project includes a comprehensive quality checklist and final walkthrough with the client. For commercial cleaning accounts in Meridian, Boise, and Nampa, we conduct regular quality audits and provide detailed service reports. If any aspect of our work doesn't meet your standards, we return within 24 hours to address the issue at no additional cost. Our quality assurance process ensures consistent, professional results."
    },
    {
      id: "environmental-safety-practices",
      question: "What environmental and safety practices do you follow?",
      answer: "Imperial Cleaning Inc. prioritizes environmental responsibility and safety in all operations across the Treasure Valley. We use EPA-approved, eco-friendly cleaning products whenever possible and follow all OSHA safety guidelines. Our team is trained in proper chemical handling, blood-borne pathogen procedures, and construction site safety protocols. We maintain all required safety certifications and provide regular training updates. For commercial clients in Boise and surrounding areas, we offer green cleaning programs that meet LEED building standards."
    },
    {
      id: "staff-training-background",
      question: "How do you ensure your cleaning staff is properly trained and vetted?",
      answer: "All Imperial Cleaning Inc. employees undergo comprehensive background checks, drug screening, and professional training before serving clients in the Treasure Valley. Our training program covers proper cleaning techniques, safety protocols, customer service standards, and equipment operation. Staff receive ongoing education and certification updates. For commercial accounts requiring additional security clearance, we can accommodate higher-level background verification. Our team is fully bonded and insured, providing additional protection for your Boise or Meridian facility."
    },
    {
      id: "payment-terms-invoicing",
      question: "What are your payment terms and invoicing procedures?",
      answer: "We offer flexible payment terms for both commercial cleaning contracts and construction cleanup projects throughout Idaho. Standard terms include net 15 or net 30 for established commercial accounts, with discounts available for annual contracts. We accept various payment methods including ACH transfers, checks, and credit cards. Detailed invoices are provided with itemized services and can be customized to match your accounting requirements. For large construction projects in the Treasure Valley, we can arrange progress billing to align with project milestones."
    }
  ];

  return (
    <>
      <section id="faq" className="py-24 px-6 faq-sophisticated-bg noise-overlay grain-texture section-transition-top section-transition-bottom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="resend-icon mx-auto mb-8 hover-lift-gentle animate-fade-in-up">
              <HelpCircle className="h-8 w-8 icon-gradient" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 tracking-tight leading-tight">
              <span className="gradient-text-cyan-purple">Frequently Asked Questions</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              Get answers to common questions about our Boise commercial cleaning and Treasure Valley construction cleanup services.
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
                        <h3 className="text-lg lg:text-xl font-medium text-foreground leading-tight pr-4">
                          {faq.question}
                        </h3>
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
                
                <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground">
                  Still Have Questions?
                </h3>
                
                <div className="glass-divider-top mb-6"></div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Our experienced team is ready to discuss your specific cleaning needs in Boise, 
                  Meridian, Nampa, or anywhere in the Treasure Valley. Get a customized quote today.
                </p>
                
                <div className="glass-divider-top mb-6"></div>
                
                <Button
                  onClick={handleContactClick}
                  variant="pill-primary"
                  size="pill-lg"
                  className="font-medium hover-lift-gentle button-ripple hover-shimmer"
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
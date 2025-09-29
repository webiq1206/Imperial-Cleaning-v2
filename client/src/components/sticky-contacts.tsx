import { trackEvent } from "@/lib/analytics";
import { Phone, MessageCircle, Mail, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import ContactFormModal from "@/components/contact-form-modal";

export default function StickyContacts() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  // Show contacts after 2 seconds or on scroll
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactClick = (method: string) => {
    trackEvent('contact_click', 'sticky_contacts', method);
  };

  const handleQuoteClick = () => {
    trackEvent('quote_request', 'sticky_contacts', 'quick_quote');
    setShowContactForm(true);
  };

  const contacts = [
    {
      href: "tel:+12085203202",
      title: "Call Now - (208) 520-3202",
      shortTitle: "Call",
      method: "phone",
      icon: Phone,
      testId: "sticky-contact-phone",
      color: "green",
      description: "Speak with our team immediately"
    },
    {
      href: "sms:+12085203202",
      title: "Text Us - (208) 520-3202", 
      shortTitle: "Text",
      method: "sms",
      icon: MessageCircle,
      testId: "sticky-contact-text",
      color: "blue",
      description: "Quick text for fast response"
    },
    {
      href: "mailto:service@imperialcleaninginc.com",
      title: "Email Us - service@imperialcleaninginc.com",
      shortTitle: "Email",
      method: "email", 
      icon: Mail,
      testId: "sticky-contact-email",
      color: "purple",
      description: "Send detailed project information"
    },
    {
      href: "#quote",
      title: "Get Free Quote",
      shortTitle: "Quote",
      method: "quote",
      icon: Quote,
      testId: "sticky-contact-quote",
      color: "orange",
      description: "Request a custom quote",
      onClick: handleQuoteClick
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky Contacts */}
      <div className="fixed bottom-6 right-6 z-[1000] hidden md:flex flex-col gap-3 animate-fade-in-scale">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          const isHovered = hoveredContact === contact.method;
          
          return (
            <div key={contact.method} className="relative group">
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-card/95 backdrop-blur-md border border-border/50 rounded-lg px-3 py-2 shadow-xl z-[1001] animate-fade-in-left min-w-[200px]">
                  <div className="text-sm font-medium text-foreground">{contact.shortTitle}</div>
                  <div className="text-xs text-muted-foreground mt-1">{contact.description}</div>
                  {/* Arrow */}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-border/50 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                </div>
              )}
              
              <a
                href={contact.href}
                title={contact.title}
                onClick={contact.onClick ? (e) => { e.preventDefault(); contact.onClick(); } : () => handleContactClick(contact.method)}
                onMouseEnter={() => setHoveredContact(contact.method)}
                onMouseLeave={() => setHoveredContact(null)}
                onFocus={() => setHoveredContact(contact.method)}
                onBlur={() => setHoveredContact(null)}
                data-testid={contact.testId}
                aria-label={contact.title}
                role="button"
                tabIndex={0}
                className={`orbital-contact-btn group relative w-14 h-14 rounded-2xl gradient-bg backdrop-blur-xl border border-gray-800/50 shadow-2xl transition-all duration-500 hover:scale-110 sophisticated-glow hover-lift-strong hover-glow-expand button-magnetic focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${
                  contact.color === 'green' ? 'hover:shadow-green-500/20' :
                  contact.color === 'blue' ? 'hover:shadow-blue-500/20' :
                  contact.color === 'purple' ? 'hover:shadow-purple-500/20' :
                  contact.color === 'orange' ? 'hover:shadow-orange-500/20' :
                  'hover:shadow-cyan-500/20'
                }`}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Enhanced Orbital Rings with color variation */}
                <div className={`orbital-ring orbital-ring-1 absolute inset-0 rounded-2xl border animate-spin ${
                  contact.color === 'green' ? 'border-green-400/20' :
                  contact.color === 'blue' ? 'border-blue-400/20' :
                  contact.color === 'purple' ? 'border-purple-400/20' :
                  contact.color === 'orange' ? 'border-orange-400/20' :
                  'border-cyan-400/20'
                }`} style={{ animationDuration: '8s' }}></div>
                <div className="orbital-ring orbital-ring-2 absolute inset-0 rounded-2xl border border-gray-400/10 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                
                {/* Enhanced Central Glow with color variation */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 parallax-subtle hover-shimmer`} style={{ 
                  background: contact.color === 'green' ? 'linear-gradient(to bottom right, hsl(142, 76%, 36%, 0.08), hsl(142, 76%, 36%, 0.08))' :
                             contact.color === 'blue' ? 'linear-gradient(to bottom right, hsl(221, 83%, 53%, 0.08), hsl(221, 83%, 53%, 0.08))' :
                             contact.color === 'purple' ? 'linear-gradient(to bottom right, hsl(271, 81%, 56%, 0.08), hsl(271, 81%, 56%, 0.08))' :
                             contact.color === 'orange' ? 'linear-gradient(to bottom right, hsl(33, 100%, 52%, 0.08), hsl(33, 100%, 52%, 0.08))' :
                             'linear-gradient(to bottom right, hsl(195, 100%, 50%, 0.08), hsl(271, 81%, 56%, 0.08))'
                }}></div>
                
                {/* Center Icon with color variation */}
                <div className="relative z-10 w-full h-full flex items-center justify-center hover-lift-gentle">
                  <div className="relative">
                    {/* Enhanced Glowing Background with color variation */}
                    <div className={`absolute inset-0 rounded-full blur-sm scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 ${
                      contact.color === 'green' ? 'bg-green-400/20' :
                      contact.color === 'blue' ? 'bg-blue-400/20' :
                      contact.color === 'purple' ? 'bg-purple-400/20' :
                      contact.color === 'orange' ? 'bg-orange-400/20' :
                      'bg-cyan-400/20'
                    }`}></div>
                    
                    {/* Icon with color variation */}
                    <Icon 
                      className={`relative z-10 w-5 h-5 transition-all duration-700 group-hover:scale-110 hover-lift-gentle icon-gradient ${
                        contact.color === 'green' ? 'text-green-300 group-hover:text-green-200 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]' :
                        contact.color === 'blue' ? 'text-blue-300 group-hover:text-blue-200 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]' :
                        contact.color === 'purple' ? 'text-purple-300 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_12px_rgba(147,51,234,0.8)]' :
                        contact.color === 'orange' ? 'text-orange-300 group-hover:text-orange-200 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]' :
                        'text-cyan-300 group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]'
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                
                {/* Enhanced Hover Pulse Effect with color variation */}
                <div className={`absolute inset-0 rounded-2xl scale-0 group-hover:scale-110 group-hover:animate-ping opacity-75 button-ripple ${
                  contact.color === 'green' ? 'bg-green-400/8' :
                  contact.color === 'blue' ? 'bg-blue-400/8' :
                  contact.color === 'purple' ? 'bg-purple-400/8' :
                  contact.color === 'orange' ? 'bg-orange-400/8' :
                  'bg-cyan-400/8'
                }`}></div>
              </a>
            </div>
          );
        })}
      </div>
      
      {/* Mobile Sticky Contacts */}
      <div className="fixed bottom-4 left-4 right-4 z-[1000] md:hidden">
        <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-xl sophisticated-glow">
          <div className="flex justify-between items-center gap-3">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.method}
                  href={contact.href}
                  title={contact.title}
                  onClick={contact.onClick ? (e) => { e.preventDefault(); contact.onClick(); } : () => handleContactClick(contact.method)}
                  data-testid={`${contact.testId}-mobile`}
                  aria-label={contact.title}
                  className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 ${
                    contact.color === 'green' ? 'hover:bg-green-500/10' :
                    contact.color === 'blue' ? 'hover:bg-blue-500/10' :
                    contact.color === 'purple' ? 'hover:bg-purple-500/10' :
                    contact.color === 'orange' ? 'hover:bg-orange-500/10' :
                    'hover:bg-cyan-500/10'
                  }`}
                >
                  <Icon 
                    className={`w-6 h-6 ${
                      contact.color === 'green' ? 'text-green-400' :
                      contact.color === 'blue' ? 'text-blue-400' :
                      contact.color === 'purple' ? 'text-purple-400' :
                      contact.color === 'orange' ? 'text-orange-400' :
                      'text-cyan-400'
                    }`}
                    strokeWidth={2}
                  />
                  <span className="text-xs font-medium text-foreground">{contact.shortTitle}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
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

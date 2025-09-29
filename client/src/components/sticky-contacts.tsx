import { trackEvent } from "@/lib/analytics";
import { Phone, MessageCircle, Mail } from "lucide-react";

export default function StickyContacts() {
  const handleContactClick = (method: string) => {
    trackEvent('contact_click', 'sticky_contacts', method);
  };

  const contacts = [
    {
      href: "tel:+12085203202",
      title: "Call Now",
      method: "phone",
      icon: Phone,
      testId: "sticky-contact-phone"
    },
    {
      href: "sms:+12085203202",
      title: "Text Us", 
      method: "sms",
      icon: MessageCircle,
      testId: "sticky-contact-text"
    },
    {
      href: "mailto:service@imperialcleaninginc.com",
      title: "Email Us",
      method: "email", 
      icon: Mail,
      testId: "sticky-contact-email"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col gap-4 animate-fade-in-scale">
      {contacts.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <a
            key={contact.method}
            href={contact.href}
            title={contact.title}
            onClick={() => handleContactClick(contact.method)}
            data-testid={contact.testId}
            className="orbital-contact-btn group relative w-14 h-14 rounded-2xl gradient-bg backdrop-blur-xl border border-gray-800/50 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/20 sophisticated-glow hover-lift-strong hover-glow-expand button-magnetic"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Enhanced Orbital Rings with motion polish */}
            <div className="orbital-ring orbital-ring-1 absolute inset-0 rounded-2xl border border-cyan-400/20 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="orbital-ring orbital-ring-2 absolute inset-0 rounded-2xl border border-purple-400/15 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
            <div className="orbital-ring orbital-ring-3 absolute inset-0 rounded-2xl border border-cyan-300/10 animate-spin" style={{ animationDuration: '16s' }}></div>
            
            {/* Enhanced Central Glow with parallax */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 parallax-subtle hover-shimmer" style={{ background: 'linear-gradient(to bottom right, hsl(195, 100%, 50%, 0.08), hsl(271, 81%, 56%, 0.08))' }}></div>
            
            {/* Additional orbital elements for enhanced sophistication */}
            <div className="absolute -inset-2">
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400/40 rounded-full blur-sm"></div>
              <div className="absolute bottom-0 right-1/4 w-0.5 h-0.5 bg-purple-400/50 rounded-full blur-sm"></div>
              <div className="absolute top-1/3 right-0 w-0.5 h-0.5 bg-cyan-300/60 rounded-full blur-sm"></div>
            </div>
            
            {/* Center Icon with enhanced glow */}
            <div className="relative z-10 w-full h-full flex items-center justify-center hover-lift-gentle">
              <div className="relative">
                {/* Enhanced Glowing Background with breathing effect */}
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-sm scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Icon with sophisticated motion */}
                <Icon 
                  className="relative z-10 w-5 h-5 text-cyan-300 group-hover:text-cyan-200 transition-all duration-700 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] group-hover:scale-110 hover-lift-gentle icon-gradient" 
                  strokeWidth={2}
                />
              </div>
            </div>
            
            {/* Enhanced Hover Pulse Effect with ripple */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/8 scale-0 group-hover:scale-110 group-hover:animate-ping opacity-75 button-ripple"></div>
          </a>
        );
      })}
    </div>
  );
}

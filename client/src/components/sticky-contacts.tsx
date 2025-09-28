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
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col gap-4">
      {contacts.map((contact, index) => {
        const Icon = contact.icon;
        return (
          <a
            key={contact.method}
            href={contact.href}
            title={contact.title}
            onClick={() => handleContactClick(contact.method)}
            data-testid={contact.testId}
            className="orbital-contact-btn group relative w-14 h-14 rounded-2xl bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border border-gray-800/50 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/20"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Orbital Rings */}
            <div className="orbital-ring orbital-ring-1 absolute inset-0 rounded-2xl border border-cyan-400/20 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="orbital-ring orbital-ring-2 absolute inset-0 rounded-2xl border border-purple-400/15 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
            <div className="orbital-ring orbital-ring-3 absolute inset-0 rounded-2xl border border-cyan-300/10 animate-spin" style={{ animationDuration: '16s' }}></div>
            
            {/* Central Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Center Icon with Glow */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-sm scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <Icon 
                  className="relative z-10 w-5 h-5 text-cyan-300 group-hover:text-cyan-200 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" 
                  strokeWidth={2}
                />
              </div>
            </div>
            
            {/* Hover Pulse Effect */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 scale-0 group-hover:scale-100 group-hover:animate-ping opacity-75"></div>
          </a>
        );
      })}
    </div>
  );
}

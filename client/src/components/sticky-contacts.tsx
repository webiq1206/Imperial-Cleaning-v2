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
            className="group relative w-14 h-14 rounded-2xl bg-card border border-border shadow-lg transition-all duration-300 hover:border-primary/50"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Simple Center Icon */}
            <div className="w-full h-full flex items-center justify-center">
              <Icon 
                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" 
                strokeWidth={2}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

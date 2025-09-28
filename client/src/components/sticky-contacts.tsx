import { trackEvent } from "@/lib/analytics";

export default function StickyContacts() {
  const handleContactClick = (method: string) => {
    trackEvent('contact_click', 'sticky_contacts', method);
  };

  return (
    <div className="sticky-contacts">
      <a 
        href="tel:+12085203202" 
        className="contact-btn" 
        title="Call Now"
        onClick={() => handleContactClick('phone')}
        data-testid="sticky-contact-phone"
      >
        <i className="fas fa-phone"></i>
      </a>
      <a 
        href="sms:+12085203202" 
        className="contact-btn" 
        title="Text Us"
        onClick={() => handleContactClick('sms')}
        data-testid="sticky-contact-text"
      >
        <i className="fas fa-sms"></i>
      </a>
      <a 
        href="mailto:service@imperialcleaninginc.com" 
        className="contact-btn" 
        title="Email Us"
        onClick={() => handleContactClick('email')}
        data-testid="sticky-contact-email"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}

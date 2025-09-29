import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import FeaturesSection from "@/components/features-section";
import PartnersSection from "@/components/partners-section";
import ProcessTerminalSection from "@/components/process-terminal-section";
import ServiceAreasSection from "@/components/service-areas-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import StickyContacts from "@/components/sticky-contacts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyContacts />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <PartnersSection />
      <ProcessTerminalSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

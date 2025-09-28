import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import FeaturesSection from "@/components/features-section";
import ServiceAreasSection from "@/components/service-areas-section";
import StickyContacts from "@/components/sticky-contacts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StickyContacts />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ServiceAreasSection />
      <Footer />
    </div>
  );
}

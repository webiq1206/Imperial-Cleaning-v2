import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ProcessTerminalSection from "@/components/process-terminal-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProcessTerminalSection />
      <Footer />
    </div>
  );
}

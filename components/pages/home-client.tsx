"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/hero-section";

const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/features-section"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), { ssr: true });
const ProcessTerminalSection = dynamic(() => import("@/components/process-terminal-section"), { ssr: true });
const CaseStudiesSection = dynamic(() => import("@/components/case-studies-section"), { ssr: true });
const ComplianceCertificationsSection = dynamic(() => import("@/components/compliance-certifications-section"), { ssr: true });
const PartnersSection = dynamic(() => import("@/components/partners-section"), { ssr: true });
const ServiceAreasSection = dynamic(() => import("@/components/service-areas-section"), { ssr: true });
const ServicePillarsSection = dynamic(() => import("@/components/service-pillars-section"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: true });

export default function HomeClient() {
  return (
    <>
      <HeroSection imageAlt="Imperial Cleaning Inc - Idaho Falls Commercial & Construction Cleaning Services Serving Idaho and Utah" />
      <ServicesSection />
      <FeaturesSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <ProcessTerminalSection />
      <CaseStudiesSection />
      <ComplianceCertificationsSection />
      <PartnersSection />
      <ServiceAreasSection />
      <ServicePillarsSection />
      <FAQSection />
    </>
  );
}

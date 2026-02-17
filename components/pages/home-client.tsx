"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), { ssr: true });
const ProcessTerminalSection = dynamic(() => import("@/components/process-terminal-section"), { ssr: false });
const CaseStudiesSection = dynamic(() => import("@/components/case-studies-section"), { ssr: false });
const ComplianceCertificationsSection = dynamic(() => import("@/components/compliance-certifications-section"), { ssr: false });
const ServicePillarsSection = dynamic(() => import("@/components/service-pillars-section"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: false });

interface HomeClientProps {
  featuresSection: ReactNode;
  partnersSection: ReactNode;
  serviceAreasSection: ReactNode;
}

export default function HomeClient({ featuresSection, partnersSection, serviceAreasSection }: HomeClientProps) {
  return (
    <>
      <ServicesSection />
      {featuresSection}
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <ProcessTerminalSection />
      <CaseStudiesSection />
      <ComplianceCertificationsSection />
      {partnersSection}
      {serviceAreasSection}
      <ServicePillarsSection />
      <FAQSection />
    </>
  );
}

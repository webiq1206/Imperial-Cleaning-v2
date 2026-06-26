"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/services-section"), { ssr: true });
const ProcessTerminalSection = dynamic(() => import("@/components/process-terminal-section"), { ssr: true });
const ComplianceCertificationsSection = dynamic(() => import("@/components/compliance-certifications-section"), { ssr: true });
const ServicePillarsSection = dynamic(() => import("@/components/service-pillars-section"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: true });

interface HomeClientProps {
  featuresSection: ReactNode;
  partnersSection: ReactNode;
  serviceAreasSection: ReactNode;
  reviewsSection: ReactNode;
}

// The former TestimonialsSection and CaseStudiesSection were removed
// (2026-06-10): their content was illustrative, not from real clients.
// Real, verifiable reviews render via the server-side ReviewsSection slot.
export default function HomeClient({ featuresSection, partnersSection, serviceAreasSection, reviewsSection }: HomeClientProps) {
  return (
    <>
      <ServicesSection />
      {featuresSection}
      <div id="reviews-anchor">
        {reviewsSection}
      </div>
      <ProcessTerminalSection />
      <ComplianceCertificationsSection />
      {partnersSection}
      {serviceAreasSection}
      <ServicePillarsSection />
      <FAQSection />
    </>
  );
}

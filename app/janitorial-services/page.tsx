import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("janitorial-services")!;

export const metadata = buildIndustryMetadata(industry);

export default function JanitorialServicesPage() {
  return <IndustryCleaningPage industry={industry} />;
}

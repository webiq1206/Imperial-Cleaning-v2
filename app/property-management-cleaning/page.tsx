import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("property-management-cleaning")!;

export const metadata = buildIndustryMetadata(industry);

export default function PropertyManagementCleaningPage() {
  return <IndustryCleaningPage industry={industry} />;
}

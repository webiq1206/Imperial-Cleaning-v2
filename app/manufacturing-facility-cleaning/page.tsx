import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("manufacturing-facility-cleaning")!;

export const metadata = buildIndustryMetadata(industry);

export default function ManufacturingFacilityCleaningPage() {
  return <IndustryCleaningPage industry={industry} />;
}

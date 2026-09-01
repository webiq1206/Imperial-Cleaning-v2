import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("commercial-floor-care")!;

export const metadata = buildIndustryMetadata(industry);

export default function CommercialFloorCarePage() {
  return <IndustryCleaningPage industry={industry} />;
}

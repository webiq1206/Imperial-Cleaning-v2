import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("commercial-cleaning-cost")!;

export const metadata = buildIndustryMetadata(industry);

export default function CommercialCleaningCostPage() {
  return <IndustryCleaningPage industry={industry} />;
}

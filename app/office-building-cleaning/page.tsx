import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("office-building-cleaning")!;

export const metadata = buildIndustryMetadata(industry);

export default function OfficeBuildingCleaningPage() {
  return <IndustryCleaningPage industry={industry} />;
}

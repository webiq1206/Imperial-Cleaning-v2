import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("day-porter-services")!;

export const metadata = buildIndustryMetadata(industry);

export default function DayPorterServicesPage() {
  return <IndustryCleaningPage industry={industry} />;
}

import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("school-cleaning-services")!;

export const metadata = buildIndustryMetadata(industry);

export default function SchoolCleaningPage() {
  return <IndustryCleaningPage industry={industry} />;
}

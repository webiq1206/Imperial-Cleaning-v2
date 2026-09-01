import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("construction-cleaning/final-clean")!;

export const metadata = buildIndustryMetadata(industry);

export default function FinalCleanPage() {
  return <IndustryCleaningPage industry={industry} />;
}

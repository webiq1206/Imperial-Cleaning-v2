import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("construction-cleaning/rough-clean")!;

export const metadata = buildIndustryMetadata(industry);

export default function RoughCleanPage() {
  return <IndustryCleaningPage industry={industry} />;
}

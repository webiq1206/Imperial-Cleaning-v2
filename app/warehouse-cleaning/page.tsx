import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("warehouse-cleaning")!;

export const metadata = buildIndustryMetadata(industry);

export default function WarehouseCleaningPage() {
  return <IndustryCleaningPage industry={industry} />;
}

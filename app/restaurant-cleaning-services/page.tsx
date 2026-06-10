import IndustryCleaningPage from "@/components/pages/industry-cleaning-page";
import { getIndustryBySlug } from "@/data/industries";
import { buildIndustryMetadata } from "@/lib/industry-page-utils";

const industry = getIndustryBySlug("restaurant-cleaning-services")!;

export const metadata = buildIndustryMetadata(industry);

export default function RestaurantCleaningPage() {
  return <IndustryCleaningPage industry={industry} />;
}

/** Owner direction, clarified 2026-09-24: construction leads, commercial stays prominent.
 * Show both services in the hero and first service section, not a late add-on.
 * Keep the homepage's primary terms general. City intent belongs on existing city pages.
 */
export const CONSTRUCTION_QUOTE_HREF = "/contact?service=construction";
export const homeSearch = {
  title: "Construction Cleanup & Commercial Cleaning | Imperial Cleaning",
  description: "Construction cleanup and post-construction cleaning for commercial projects in Idaho and Utah, plus recurring commercial cleaning from Idaho Falls. Free quotes.",
  keywords: "construction cleanup, construction cleaning, post construction cleanup, post-construction cleaning services, commercial construction cleaning, final construction cleaning, rough construction cleaning, builder cleanup",
  headline: "Construction cleanup.",
  benefit: "Ready for handover.",
} as const;
export const constructionPhases = [
  { label: "Rough construction cleaning", href: "/construction-cleaning/rough-clean", stage: "01 / ROUGH CLEAN", description: "Clear agreed debris and initial dust from released work areas. Confirm access, disposal responsibilities, and what needs to wait for the final pass." },
  { label: "Final construction cleaning", href: "/construction-cleaning/final-clean", stage: "02 / FINAL CLEAN", description: "Detail accessible surfaces, fixtures, and floors once the area is ready. Set the scope around new finishes and the contractor’s handover schedule." },
  { label: "Post-construction touch-ups", href: "/construction-cleaning/touch-up-clean", stage: "03 / TOUCH-UP CLEAN", description: "Address new dust, fingerprints, and marks after late trade work or walkthroughs. Identify the affected areas instead of assuming a full repeat clean." },
] as const;
export const constructionResources = [
  { label: "Post-construction cleaning cost", href: "/resources/post-construction-cleaning-cost", detail: "The scope, access, and cleaning phases that affect your quote." },
  { label: "Construction cleanup checklist", href: "/resources/construction-cleanup-process-checklist", detail: "Plan the handover and use the interactive completion checklist." },
  { label: "What post-construction cleaning includes", href: "/resources/what-is-post-construction-cleaning", detail: "Understand the difference between rough, final, and touch-up work." },
] as const;
export const quoteServices = [
  { value: "construction", name: "Construction cleanup", detail: "Rough, final, or post-construction touch-up cleaning" },
  { value: "commercial", name: "Commercial cleaning", detail: "Recurring office and commercial facility cleaning" },
  { value: "both", name: "Both / help me decide", detail: "We will work through the scope together" },
] as const;
export type QuoteService = typeof quoteServices[number]["value"];
/** Accept service context only, never arbitrary query values or personal data. */
export function quoteServiceFromSearch(search: string): QuoteService | undefined {
  const values = new URLSearchParams(search).getAll("service");
  if (values.length !== 1) return undefined;
  return quoteServices.find(option => option.value === values[0])?.value;
}

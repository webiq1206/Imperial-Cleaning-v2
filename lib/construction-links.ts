import { constructionPhases, constructionResources } from "../data/service-priorities";

export interface EditorialLink { url: string; anchor: string; }
export function constructionPriorityLinks(pageUrl: string): EditorialLink[] {
  const hub = { url: "/construction-cleaning", anchor: "Construction cleanup services" };
  const phases = constructionPhases.map(phase => ({ url: phase.href, anchor: phase.label }));
  const resources = constructionResources.map(resource => ({ url: resource.href, anchor: resource.label }));
  const isCity = /^\/(idaho|utah)\/construction-cleaning\/[a-z0-9-]+$/.test(pageUrl);
  const isPhase = constructionPhases.some(phase => phase.href === pageUrl);
  const isResource = constructionResources.some(resource => resource.href === pageUrl);
  if (pageUrl !== "/" && pageUrl !== hub.url && !isCity && !isPhase && !isResource) return [];
  const links = isCity || isPhase || isResource ? [hub, ...resources, ...phases] : [hub, ...phases, ...resources];
  return links.filter(link => link.url !== pageUrl);
}
/** Keep caller-pinned destinations, then construction-specific next steps, then legacy recommendations.
 * These are rendered links, not a claim about PageRank or a minimum Google link count.
 */
export function selectRelatedLinks(
  pageUrl: string, base: readonly EditorialLink[], pinned: readonly EditorialLink[] = [],
  exclude: readonly string[] = [], limit = 5,
): EditorialLink[] {
  const capacity = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 5;
  const excluded = new Set(exclude);
  const seen = new Set<string>();
  const links: EditorialLink[] = [];
  for (const link of [...pinned, ...constructionPriorityLinks(pageUrl), ...base]) {
    if (links.length >= capacity) break;
    if (link.url === pageUrl || excluded.has(link.url) || seen.has(link.url)) continue;
    seen.add(link.url);
    links.push({ url: link.url, anchor: link.anchor });
  }
  return links;
}

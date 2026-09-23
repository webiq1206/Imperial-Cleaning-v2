export const PUBLIC_ORIGIN = 'https://imperialcleaninginc.com';
export type PublicationRule = { state?: 'published' | 'draft' | 'removed'; indexable?: boolean; canonical?: string; modified?: string };
export type PublicationRules = Record<string, PublicationRule>;
const INTERNAL = /^\/(?:admin(?:-|\/|$)|api(?:\/|$)|_next(?:\/|$)|tmp(?:\/|$)|__tests__(?:\/|$))/;
export function isPublicPath(path: string): boolean {
  return typeof path === 'string' && (path === '/' || /^\/[a-z0-9-]+(?:\/[a-z0-9-]+)*$/.test(path)) && !INTERNAL.test(path);
}
export function selectPublicPaths(paths: readonly string[], rules: PublicationRules = {}): string[] {
  const known = new Set(paths);
  const selected: string[] = [];
  for (const path of new Set(paths)) {
    if (!isPublicPath(path)) continue;
    const rule = rules[path] || {};
    if (rule.state && !['published','draft','removed'].includes(rule.state)) throw new Error(`Unknown publication state: ${path}`);
    if (rule.state === 'draft' || rule.state === 'removed' || rule.indexable === false) continue;
    if (rule.canonical && rule.canonical !== path) {
      if (!isPublicPath(rule.canonical) || !known.has(rule.canonical)) throw new Error(`Invalid canonical target: ${path}`);
      const target = rules[rule.canonical];
      if (target?.indexable === false || target?.state === 'draft' || target?.state === 'removed' || (target?.canonical && target.canonical !== rule.canonical)) throw new Error(`Canonical target is not a published final page: ${path}`);
      continue;
    }
    selected.push(path);
  }
  return selected.sort();
}
export function buildPublicSitemap(paths: readonly string[], rules: PublicationRules = {}, now = new Date()) {
  return selectPublicPaths(paths, rules).map(path => {
    const modified = rules[path]?.modified;
    if (modified) {
      const date = new Date(`${modified}T00:00:00.000Z`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(modified) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0,10) !== modified || date > now) throw new Error(`Invalid or future modification date: ${path}`);
    }
    return { url: path === '/' ? `${PUBLIC_ORIGIN}/` : `${PUBLIC_ORIGIN}${path}`, ...(modified ? {lastModified: modified} : {}) };
  });
}
export function publicationResponse(path: string, rules: PublicationRules = {}) {
  const rule = rules[path];
  if (!rule) return { status: 200, noindex: false };
  if (rule.state === 'draft') return { status: 404, noindex: true };
  if (rule.state === 'removed') return { status: 410, noindex: true };
  if (rule.canonical && rule.canonical !== path) {
    if (!isPublicPath(rule.canonical)) return { status: 404, noindex: true };
    return { status: 308, noindex: false, location: `${PUBLIC_ORIGIN}${rule.canonical}` };
  }
  return { status: 200, noindex: rule.indexable === false };
}
const names: Record<string,string> = {
  '/':'Imperial Cleaning Inc', '/about':'About Imperial Cleaning', '/contact':'Request a cleaning quote', '/reviews':'Reviews and source profiles',
  '/service-areas':'Service areas', '/service-areas/idaho':'Idaho service areas', '/service-areas/utah':'Utah service areas',
  '/resources':'Cleaning guides and resources', '/sitemap':'Site directory', '/privacy-policy':'Privacy policy', '/terms-of-service':'Terms of service',
};
const humanize = (value: string) => value.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
function label(path: string): string {
  if (names[path]) return names[path];
  const pieces = path.split('/').filter(Boolean);
  if (pieces.length === 3 && ['idaho','utah'].includes(pieces[0])) return `${humanize(pieces[1])} in ${humanize(pieces[2])}, ${humanize(pieces[0])}`;
  return humanize(pieces.at(-1) || 'Home');
}
export type PublicBusinessFacts = {
  name: string;
  phone: string;
  email: string;
  city: string;
  hours: string;
  fullAddress: string;
  googleListingUrl: string;
};
export function buildLLMS(paths: readonly string[], facts: PublicBusinessFacts, full = false): string {
  // Fail before writing either file rather than publishing incomplete business facts.
  for (const key of ['fullAddress', 'googleListingUrl'] as const) {
    if (typeof facts[key] !== 'string' || !facts[key].trim()) {
      throw new Error(`Missing required public business fact: ${key}.`);
    }
  }
  const groups: [string, string[]][] = [ ['Services',[]], ['Coverage',[]], ['Guides and tools',[]], ['Company and contact',[]] ];
  for (const path of paths.filter(isPublicPath)) {
    const city = /^\/(idaho|utah)\//.test(path);
    if (city && !full) continue;
    const group = city || path.startsWith('/service-areas') ? 1 : path.startsWith('/resources') ? 2 : names[path] ? 3 : 0;
    groups[group][1].push(`- [${label(path)}](${PUBLIC_ORIGIN}${path === '/' ? '/' : path})`);
  }
  groups[3][1].push(`- [Google Business Profile](${facts.googleListingUrl})`);
  return [`# ${facts.name}`, '', '> Commercial cleaning and post-construction cleanup for businesses, contractors and facility managers in Idaho and Utah.', '',
    `Based in ${facts.city}. Phone: ${facts.phone}. Email: ${facts.email}.`,
    `Business address: ${facts.fullAddress}.`, `Office hours, Mountain Time: ${facts.hours}.`,
    'Contact the team to confirm the project scope, location, access and schedule. Service-area pages describe coverage, not separate staffed offices.', '',
    ...groups.flatMap(([heading,links]) => links.length ? [`## ${heading}`, '', ...links, ''] : []),
    'Review ratings, availability, insurance documents and project pricing should be confirmed at their source. This guide does not promise inspection approval or any search-engine outcome.', ''
  ].join('\n');
}

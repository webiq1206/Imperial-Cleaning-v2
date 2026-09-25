import listings from '../data/search-listings.json';

export const SEARCH_ORIGIN = 'https://imperialcleaninginc.com';
export const SEARCH_BRAND = 'Imperial Cleaning Inc';
export interface SearchListing {
  title: string; description: string; imageLabel: string; kind: string; intent: string;
}
const entries: Record<string, SearchListing> = listings;
export const searchPaths = Object.keys(entries);
export const SITE_ICONS = {
  icon: [
    { url: '/imperial-cleaning-icon-96.png', sizes: '96x96', type: 'image/png' },
    { url: '/imperial-cleaning-icon-192.png', sizes: '192x192', type: 'image/png' },
  ],
  shortcut: '/favicon.ico',
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
};
export function searchListing(path: string): SearchListing {
  if (!Object.prototype.hasOwnProperty.call(entries, path)) throw new Error('No reviewed search listing for this public path.');
  return entries[path];
}
export function canonicalUrl(path: string): string {
  searchListing(path);
  return SEARCH_ORIGIN + path;
}
export function previewFilename(path: string): string {
  searchListing(path);
  return (path === '/' ? 'home' : path.slice(1).replace(/\//g, '-')) + '.png';
}
export function previewPath(filename: string): string | undefined {
  return searchPaths.find(path => previewFilename(path) === filename);
}
export function searchImage(path: string) {
  const listing = searchListing(path);
  return {
    url: `${SEARCH_ORIGIN}/search-previews/${previewFilename(path)}`,
    width: 1200, height: 630, type: 'image/png',
    alt: `${SEARCH_BRAND} title card: ${listing.imageLabel}.`,
  };
}
export function buildSearchMetadata(path: string, dates?: { published: string; modified: string }) {
  const listing = searchListing(path);
  const image = searchImage(path);
  const shared = { title: listing.title, description: listing.description, url: canonicalUrl(path), siteName: SEARCH_BRAND, locale: 'en_US', images: [image] };
  const openGraph = listing.kind === 'article'
    ? { ...shared, type: 'article' as const, ...(dates ? { publishedTime: dates.published, modifiedTime: dates.modified } : {}) }
    : { ...shared, type: 'website' as const };
  return {
    title: { absolute: listing.title }, description: listing.description,
    authors: [{ name: SEARCH_BRAND }], alternates: { canonical: canonicalUrl(path) },
    openGraph, twitter: { card: 'summary_large_image' as const, title: listing.title, description: listing.description, images: [{ url: image.url, alt: image.alt }] },
    icons: SITE_ICONS,
    // Inherit preview/noindex and snippet policy from the root; never force private pages indexable.
  };
}

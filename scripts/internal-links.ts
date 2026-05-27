/**
 * Build-time generator for internal link recommendations.
 *
 * Reads the page registry, scores every page pair using a deterministic
 * similarity algorithm with authority boosting toward money pages, then
 * writes the top N candidates per source to data/internal-links.json.
 *
 * Run via: npm run prebuild (or npm run links:generate)
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { getPageRegistry, type PageEntry } from "../lib/page-registry";

interface RelatedLink {
  url: string;
  anchor: string;
  score: number;
}

interface LinksManifest {
  totalPages: number;
  links: Record<string, RelatedLink[]>;
}

const STOPWORDS = new Set([
  "the", "and", "or", "of", "in", "for", "to", "a", "an", "at",
  "by", "with", "on", "is", "are", "imperial", "cleaning", "inc",
  "services", "service",
]);

function tokens(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 2 && !STOPWORDS.has(t))
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  Array.from(a).forEach((v) => {
    if (b.has(v)) intersection++;
  });
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function similarity(source: PageEntry, target: PageEntry): number {
  if (source.url === target.url) return -1;

  let score = 0;

  if (source.state && target.state && source.state === target.state) score += 0.5;
  if (source.service && target.service && source.service === target.service) score += 0.6;
  if (source.county && target.county && source.county === target.county) score += 0.4;

  if (
    source.type === "city-service" &&
    target.type === "city-service" &&
    source.city === target.city &&
    source.service !== target.service
  ) {
    score += 1.0;
  }

  if (source.industries.length && target.industries.length) {
    const sourceSet = new Set(source.industries.map((i) => i.toLowerCase()));
    const targetSet = new Set(target.industries.map((i) => i.toLowerCase()));
    let shared = 0;
    Array.from(sourceSet).forEach((v) => {
      if (targetSet.has(v)) shared++;
    });
    score += shared * 0.15;
  }

  score += jaccard(tokens(source.h1), tokens(target.h1)) * 0.3;

  if (source.type === "city-service" && target.type === "service-hub" && source.service === target.service) {
    score += 0.7;
  }
  if (source.type === "city-service" && target.type === "state-hub" && source.state === target.state) {
    score += 0.7;
  }
  if (source.type === "service-hub" && target.type === "city-service" && source.service === target.service) {
    score += 0.5;
  }
  if (source.type === "state-hub" && target.type === "city-service" && source.state === target.state) {
    score += 0.5;
  }

  if (target.type === "legal") score -= 0.5;
  if (source.type === "legal") score -= 0.5;

  score += target.authorityBoost;
  if (target.isMoneyPage) score += 0.3;

  return score;
}

function pickTop(source: PageEntry, all: PageEntry[], limit: number): RelatedLink[] {
  const scored = all
    .map((target) => ({ target, score: similarity(source, target) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.target.url.localeCompare(b.target.url);
    });

  const out: RelatedLink[] = [];
  const seenAnchors = new Set<string>();
  const moneyPagesIncluded = new Set<string>();

  for (const { target, score } of scored) {
    if (out.length >= limit) break;
    if (seenAnchors.has(target.anchor)) continue;
    if (target.isMoneyPage) {
      if (moneyPagesIncluded.has(target.url)) continue;
      moneyPagesIncluded.add(target.url);
    }
    out.push({ url: target.url, anchor: target.anchor, score: Math.round(score * 1000) / 1000 });
    seenAnchors.add(target.anchor);
  }

  return out;
}

const MIN_INCOMING = 5;
const MAX_LINKS_AFTER_REBALANCE = 10;

function rebalance(
  registry: PageEntry[],
  links: Record<string, RelatedLink[]>
): void {
  const incoming = new Map<string, number>();
  registry.forEach((p) => incoming.set(p.url, 0));
  Object.values(links).forEach((list) => {
    list.forEach((l) => incoming.set(l.url, (incoming.get(l.url) || 0) + 1));
  });

  const needBoost = registry
    .filter((p) => p.type !== "legal" && (incoming.get(p.url) || 0) < MIN_INCOMING)
    .sort((a, b) => (incoming.get(a.url) || 0) - (incoming.get(b.url) || 0));

  for (const target of needBoost) {
    while ((incoming.get(target.url) || 0) < MIN_INCOMING) {
      const candidates = registry
        .filter((source) => {
          if (source.url === target.url) return false;
          if (source.type === "legal") return false;
          if (links[source.url].length >= MAX_LINKS_AFTER_REBALANCE) return false;
          return !links[source.url].some((l) => l.url === target.url);
        })
        .sort((a, b) => {
          const lenDiff = links[a.url].length - links[b.url].length;
          if (lenDiff !== 0) return lenDiff;
          return -similarity(a, target) + similarity(b, target);
        });
      if (candidates.length === 0) break;
      const picked = candidates[0];
      const score = Math.max(0.001, similarity(picked, target));
      links[picked.url].push({
        url: target.url,
        anchor: target.anchor,
        score: Math.round(score * 1000) / 1000,
      });
      incoming.set(target.url, (incoming.get(target.url) || 0) + 1);
    }
  }
}

function main() {
  const registry = getPageRegistry();
  const links: Record<string, RelatedLink[]> = {};

  for (const page of registry) {
    const limit = page.type === "legal" ? 5 : 8;
    links[page.url] = pickTop(page, registry, limit);
  }

  rebalance(registry, links);

  const manifest: LinksManifest = {
    totalPages: registry.length,
    links,
  };

  const outPath = resolve(process.cwd(), "data/internal-links.json");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const counts = Object.values(links).map((l) => l.length);
  const avg = counts.reduce((a, b) => a + b, 0) / counts.length;
  console.log(
    `[internal-links] wrote ${registry.length} pages, avg ${avg.toFixed(1)} links/page -> ${outPath}`
  );
}

main();

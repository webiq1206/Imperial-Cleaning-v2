/**
 * Audit script for internal links.
 *
 * Reports:
 *  - orphan pages (zero incoming links)
 *  - weak-equity pages (fewer than 5 incoming links)
 *  - broken internal links (target not in registry)
 *
 * Exits non-zero if any broken links are found so the build can fail.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getPageRegistry } from "../lib/page-registry";

interface RelatedLink {
  url: string;
  anchor: string;
  score: number;
}
interface Manifest {
  totalPages: number;
  links: Record<string, RelatedLink[]>;
}

const MIN_INCOMING = 5;

function main() {
  const registry = getPageRegistry();
  const known = new Set(registry.map((p) => p.url));

  let manifest: Manifest;
  try {
    const raw = readFileSync(resolve(process.cwd(), "data/internal-links.json"), "utf8");
    manifest = JSON.parse(raw);
  } catch (err) {
    console.error("[audit] could not read data/internal-links.json. Run npm run links:generate first.");
    process.exit(1);
  }

  const incoming = new Map<string, number>();
  Array.from(known).forEach((url) => incoming.set(url, 0));

  const broken: Array<{ from: string; to: string }> = [];
  const missingSources: string[] = [];

  for (const [source, related] of Object.entries(manifest.links)) {
    if (!known.has(source)) {
      missingSources.push(source);
    }
    for (const link of related) {
      if (!known.has(link.url)) {
        broken.push({ from: source, to: link.url });
        continue;
      }
      incoming.set(link.url, (incoming.get(link.url) || 0) + 1);
    }
  }

  const orphans: string[] = [];
  const weak: Array<{ url: string; count: number }> = [];

  for (const page of registry) {
    if (page.type === "legal") continue;
    const count = incoming.get(page.url) || 0;
    if (count === 0) orphans.push(page.url);
    else if (count < MIN_INCOMING) weak.push({ url: page.url, count });
  }

  console.log(`\n[audit] Internal Link Report`);
  console.log(`  Registry pages:     ${registry.length}`);
  console.log(`  Manifest entries:   ${Object.keys(manifest.links).length}\n`);

  console.log(`  Orphans (0 incoming, non-legal): ${orphans.length}`);
  for (const o of orphans) console.log(`    - ${o}`);

  console.log(`\n  Weak equity (<${MIN_INCOMING} incoming): ${weak.length}`);
  for (const w of weak) console.log(`    - ${w.url} (${w.count})`);

  console.log(`\n  Broken links: ${broken.length}`);
  for (const b of broken) console.log(`    - ${b.from} -> ${b.to}`);

  if (missingSources.length) {
    console.log(`\n  Manifest has ${missingSources.length} stale source(s):`);
    for (const s of missingSources) console.log(`    - ${s}`);
  }

  if (broken.length > 0) {
    console.error(`\n[audit] FAILED: ${broken.length} broken internal link(s).`);
    process.exit(1);
  }
  console.log(`\n[audit] OK`);
}

main();

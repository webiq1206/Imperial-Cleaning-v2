// Fails when unpublished review claims are shipped in client JavaScript.
// Next writes those bundles under .next/static. Vite writes them under dist/assets.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const roots = ['.next/static', 'dist/assets'];
const extensions = new Set(['.js', '.mjs', '.cjs', '.css', '.map', '.json', '.txt', '.html', '.rsc']);
const rules = [
  { label: 'hidden 102+ review total', pattern: /102\+|verified reviews across Google, Porch, and BestProsInTown/g },
  { label: 'client sum of the unpublished total', pattern: /42\+[A-Za-z0-9_$]+\.reduce\([\s\S]{0,120}?reviewCount/g },
  { label: 'AggregateRating schema', pattern: /AggregateRating/g },
  { label: 'reviewCount of 102', pattern: /reviewCount["']?\s*[:=]\s*["']?102\b/g },
  { label: 'unpublished Google review-count sentence', pattern: /42 reviews on Google|reviews on Google/g },
];

async function filesIn(dir, found = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error && error.code === 'ENOENT') return found;
    throw error;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await filesIn(path, found);
    else if (extensions.has(entry.name.slice(entry.name.lastIndexOf('.')))) found.push(path);
  }
  return found;
}

const present = [];
for (const root of roots) {
  const files = await filesIn(root);
  if (files.length) present.push({ root, files });
}
if (!present.length) {
  console.error('No client bundles found. Build first, then scan .next/static or dist/assets.');
  process.exit(1);
}

let matches = 0;
let scanned = 0;
for (const { root, files } of present) {
  for (const rule of rules) console.log(`search ${root} for /${rule.pattern.source}/  (${rule.label})`);
  for (const file of files) {
    scanned++;
    const text = await readFile(file, 'utf8');
    for (const rule of rules) {
      rule.pattern.lastIndex = 0;
      let match;
      while ((match = rule.pattern.exec(text))) {
        matches++;
        const line = text.slice(0, match.index).split('\n').length;
        const snippet = text.slice(Math.max(0, match.index - 60), match.index + match[0].length + 60).replace(/\s+/g, ' ');
        console.log(`${file}:${line}:${snippet}`);
        if (rule.pattern.lastIndex === match.index) rule.pattern.lastIndex++;
      }
    }
  }
}
if (matches) {
  console.error(`${matches} hidden review claim${matches === 1 ? '' : 's'} in client bundles.`);
  process.exit(1);
}
console.log(`Hidden claim scan of client bundles: no matches`);
console.log(`Scanned ${scanned} files under ${present.map((item) => item.root).join(', ')}`);

#!/usr/bin/env node
/**
 * IndexNow submission.
 *
 * IndexNow pushes URLs to Bing and Yandex instead of waiting to be crawled.
 * That matters here beyond Bing itself: ChatGPT Search and Copilot are
 * Bing-backed, and Perplexity leans on it, so Bing's index is the gate for
 * most AI answer engines. It is entirely separate from Google's.
 *
 * URL source, in order of preference:
 *   1. The sitemap this build just produced (.next/server/app/sitemap.xml.body).
 *      Used at deploy time so pages added in this very build are included -
 *      fetching the live sitemap would return the PREVIOUS deploy's URLs and
 *      silently miss every new page, which is the case that matters most.
 *   2. The live sitemap over HTTP, for manual runs outside a build.
 *
 * Submitting is opt-in (--submit or INDEXNOW_SUBMIT=1). A bare run is a dry run
 * that prints exactly what would be sent, so this is safe to invoke from CI or
 * to try by hand without touching the live index.
 *
 * Environment overrides: INDEXNOW_KEY, HOST, SITEMAP_URL, KEY_LOCATION.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";

const KEY = process.env.INDEXNOW_KEY || "b7876038e34e47cc945715063bc993fa";
const HOST = process.env.HOST || "imperialcleaninginc.com";
const SITEMAP_URL = process.env.SITEMAP_URL || `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = process.env.KEY_LOCATION || `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BUILT_SITEMAP = path.join(".next", "server", "app", "sitemap.xml.body");

// IndexNow caps a single submission at 10,000 URLs.
const MAX_URLS = 10000;

const submit = process.argv.includes("--submit") || process.env.INDEXNOW_SUBMIT === "1";

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((m) => m[1].trim());
}

async function fetchText(url, label) {
  const res = await fetch(url, { redirect: "follow" });
  const body = await res.text();
  if (!res.ok) throw new Error(`${label} returned ${res.status}: ${body.slice(0, 200)}`);
  return body;
}

/** Reads the built sitemap if this is running inside a build, else fetches live. */
async function collectUrls() {
  try {
    const xml = await readFile(BUILT_SITEMAP, "utf8");
    const urls = extractLocs(xml);
    if (urls.length > 0) {
      console.log(`   Source: ${BUILT_SITEMAP} (this build)`);
      return urls;
    }
  } catch {
    // No build output - fall through to the network.
  }

  console.log(`   Source: ${SITEMAP_URL} (live)`);
  const xml = await fetchText(SITEMAP_URL, "Sitemap");
  // A sitemap index points at child sitemaps rather than pages.
  if (/<sitemapindex/i.test(xml)) {
    const urls = [];
    for (const child of extractLocs(xml)) {
      urls.push(...extractLocs(await fetchText(child, `Child sitemap ${child}`)));
    }
    return urls;
  }
  return extractLocs(xml);
}

/**
 * Compare hostnames, not string prefixes. The previous version tested
 * startsWith("https://host/") - with the trailing slash - which is false for
 * the homepage loc "https://imperialcleaninginc.com", so the single most
 * important URL on the site was dropped from every submission.
 */
function onHost(url) {
  try {
    return new URL(url).hostname === HOST;
  } catch {
    return false;
  }
}

async function main() {
  console.log("=== IndexNow ===");
  console.log(`Host: ${HOST}`);
  console.log(`Mode: ${submit ? "SUBMIT" : "dry run (pass --submit to send)"}`);
  console.log("");

  console.log("1. Collecting URLs");
  const all = await collectUrls();
  const urlList = all.filter(onHost).slice(0, MAX_URLS);
  console.log(`   Found ${all.length}, on ${HOST}: ${urlList.length}`);
  if (all.length !== urlList.length) {
    console.log(`   Skipped ${all.length - urlList.length} off-host URL(s)`);
  }
  if (urlList.length === 0) {
    console.error("[FAIL] No URLs to submit.");
    return;
  }

  const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

  if (!submit) {
    console.log("\n2. Dry run - not sending. Payload:");
    console.log(`   keyLocation: ${KEY_LOCATION}`);
    console.log(`   first: ${urlList[0]}`);
    console.log(`   last:  ${urlList[urlList.length - 1]}`);
    console.log(`\n[OK] ${urlList.length} URLs would be submitted.`);
    return;
  }

  // The key must be readable at keyLocation or the API rejects the whole
  // submission. Checked first so a 403 is explained rather than mysterious.
  console.log("\n2. Verifying key file");
  try {
    const res = await fetch(KEY_LOCATION, { redirect: "follow" });
    const body = (await res.text()).trim();
    if (!res.ok) {
      console.warn(`   [WARN] ${KEY_LOCATION} returned ${res.status} - submission will likely be rejected.`);
    } else if (body !== KEY) {
      console.warn(`   [WARN] Key file contents do not match the key being sent.`);
    } else {
      console.log("   OK");
    }
  } catch (e) {
    console.warn(`   [WARN] Could not read key file: ${e.message}`);
  }

  console.log("\n3. Submitting");
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const body = await res.text().catch(() => "");
  console.log(`   HTTP ${res.status}${body ? ` - ${body.slice(0, 200)}` : ""}`);

  // 200 accepted, 202 accepted pending key validation.
  if (res.status === 200 || res.status === 202) {
    console.log(`\n[OK] Submitted ${urlList.length} URLs.`);
  } else {
    console.error(`\n[FAIL] IndexNow rejected the submission (HTTP ${res.status}).`);
  }
}

// Never fail the caller. This runs inside the deploy build, and a search-engine
// ping is not a reason to block a release - but the log above always says
// plainly what happened, rather than exiting 0 in silence.
main().catch((err) => {
  console.error(`\n[ERROR] ${err.message}`);
});

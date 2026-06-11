#!/usr/bin/env node
/**
 * IndexNow submission script
 * Reads the site sitemap, extracts all URLs, filters to the host,
 * and submits them to the official IndexNow API.
 *
 * Environment (or hardcoded below):
 *   INDEXNOW_KEY    - IndexNow verification key
 *   HOST            - Site hostname (e.g. imperialcleaninginc.com)
 *   SITEMAP_URL     - Full URL to the sitemap.xml
 *   KEY_LOCATION    - Full URL where the key file is hosted
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "b7876038e34e47cc945715063bc993fa";
const HOST = process.env.HOST || "imperialcleaninginc.com";
const SITEMAP_URL = process.env.SITEMAP_URL || "https://imperialcleaninginc.com/sitemap.xml";
const KEY_LOCATION = process.env.KEY_LOCATION || "https://imperialcleaninginc.com/b7876038e34e47cc945715063bc993fa.txt";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchText(url, label) {
  const res = await fetch(url, { redirect: "follow" });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(`${label} returned ${res.status}: ${body.slice(0, 200)}`);
  }
  return body;
}

function parseXml(text) {
  const declRemoved = text.replace(/^\s*<\?xml[^?]*\?>\s*/, "");
  return declRemoved.trim();
}

function isSitemapIndex(text) {
  const t = text.trim().toLowerCase();
  return t.startsWith("<sitemapindex") || t.includes("<sitemapindex");
}

function extractLocTags(text) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/gi;
  let m;
  while ((m = re.exec(text)) !== null) {
    locs.push(m[1].trim());
  }
  return locs;
}

async function collectAllUrls(sitemapUrl) {
  const xmlText = parseXml(await fetchText(sitemapUrl, `Sitemap ${sitemapUrl}`));
  let urls = [];

  if (isSitemapIndex(xmlText)) {
    const childSitemaps = extractLocTags(xmlText);
    for (const childUrl of childSitemaps) {
      const childXml = parseXml(await fetchText(childUrl, `Child sitemap ${childUrl}`));
      const childUrls = extractLocTags(childXml);
      urls.push(...childUrls);
    }
  } else {
    urls = extractLocTags(xmlText);
  }

  return urls;
}

async function checkEndpoint(url, label) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    const ok = res.ok;
    console.log(`  ${label}: ${res.status} ${ok ? "OK" : "FAIL"}`);
    return ok;
  } catch (e) {
    console.log(`  ${label}: ERROR - ${e.message}`);
    return false;
  }
}

async function main() {
  console.log("=== IndexNow Submission ===");
  console.log(`Host: ${HOST}`);
  console.log(`Key:  ${INDEXNOW_KEY}`);
  console.log("");

  // 1. Verify prerequisites
  console.log("1. Verifying endpoints...");
  const sitemapOk = await checkEndpoint(SITEMAP_URL, "Sitemap");
  const robotsOk = await checkEndpoint("https://imperialcleaninginc.com/robots.txt", "Robots");
  const keyOk = await checkEndpoint(KEY_LOCATION, "Key file");

  if (!sitemapOk || !robotsOk) {
    console.error("\n[SKIP] Core prerequisites failed (sitemap or robots). Exiting.");
    process.exit(0); // 0 so startup workflow continues
  }

  if (!keyOk) {
    console.warn("\n[WARN] Key file is not accessible. The IndexNow API may reject this submission.");
    console.warn("       Deploy the key file to production before expecting submissions to succeed.");
  }
  console.log("");

  // 2. Collect URLs
  console.log("2. Fetching sitemap URLs...");
  const allUrls = await collectAllUrls(SITEMAP_URL);
  console.log(`   Total URLs found: ${allUrls.length}`);

  // 3. Filter to host
  const hostPrefix = `https://${HOST}/`;
  const filtered = allUrls.filter((u) => u.startsWith(hostPrefix));
  console.log(`   URLs for ${HOST}: ${filtered.length}`);
  console.log("");

  // 4. Submit
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: filtered,
  };

  console.log("3. Submitting to IndexNow...");
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const status = res.status;
  const responseBody = await res.text().catch(() => "");
  console.log(`\n   IndexNow response: ${status}`);
  if (responseBody) {
    console.log(`   Response body: ${responseBody}`);
  }
  console.log(`   Total URLs submitted: ${filtered.length}`);

  if (status === 200 || status === 202) {
    console.log("\n[OK] IndexNow submission succeeded.");
    process.exit(0);
  } else {
    console.error("\n[FAIL] IndexNow submission failed.");
    process.exit(0); // 0 so startup workflow continues; the error is logged
  }
}

main().catch((err) => {
  console.error("\n[ERROR] IndexNow script failed:", err.message);
  process.exit(0); // 0 so startup workflow is not blocked
});

import { MetadataRoute } from "next";

// Single source of truth for robots directives. The previous static
// public/robots.txt was removed so this dynamic route is the only robots
// output (Next.js serves a static public/robots.txt in preference to this
// file, so keeping both would have silently ignored these rules).
const SENSITIVE_PATHS = ["/api/", "/admin/", "/.well-known/", "/tmp/", "/__tests__/"];

// Every major AI crawler is named and allowed explicitly. Leaving them to the
// wildcard block is ambiguous, and a cautious crawler that cannot confirm it is
// welcome may skip the site entirely - which is how a site becomes invisible to
// answer engines without any visible error.
const ALLOWED_AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "Claude-User",
  "Bingbot",
  "anthropic-ai",
  "Anthropic-AI",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Amazonbot",
  "Bytespider",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
];

const SOCIAL_AGENTS = ["facebookexternalhit", "Twitterbot", "LinkedInBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: SENSITIVE_PATHS,
      },
      // AI assistants / LLM crawlers - allowed to index, sensitive paths blocked.
      {
        userAgent: ALLOWED_AI_AGENTS,
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Social preview bots - allow full access for accurate link unfurls.
      {
        userAgent: SOCIAL_AGENTS,
        allow: "/",
      },
      // SemrushBot adds server load without user benefit and is blocked.
      // AhrefsBot is deliberately NOT listed: the owner uses Ahrefs, and
      // blocking its crawler here meant Ahrefs could not audit this site or
      // show its own backlink data. It now falls under the wildcard allow.
      {
        userAgent: ["SemrushBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://imperialcleaninginc.com/sitemap.xml",
    host: "https://imperialcleaninginc.com",
  };
}

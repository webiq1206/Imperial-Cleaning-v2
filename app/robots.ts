import { MetadataRoute } from "next";

// Single source of truth for robots directives. The previous static
// public/robots.txt was removed so this dynamic route is the only robots
// output (Next.js serves a static public/robots.txt in preference to this
// file, so keeping both would have silently ignored these rules).
const SENSITIVE_PATHS = ["/api/", "/admin/", "/.well-known/", "/tmp/", "/__tests__/"];

const ALLOWED_AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "Anthropic-AI",
  "Google-Extended",
  "PerplexityBot",
  "Applebot-Extended",
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
      // Aggressive SEO scrapers that add server load without user benefit.
      {
        userAgent: ["SemrushBot", "AhrefsBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://imperialcleaninginc.com/sitemap.xml",
    host: "https://imperialcleaninginc.com",
  };
}

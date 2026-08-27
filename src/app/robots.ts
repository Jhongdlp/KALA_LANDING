import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * /screenshot/* renders bare phone mockups for capturing marketing images —
 * real pages with no nav, no copy and no unique value. Left crawlable they
 * would be indexed as thin duplicates and dilute the home page, so they are
 * blocked here and marked noindex in the route itself (robots.txt only stops
 * crawling; the meta tag is what removes an already-indexed URL).
 *
 * Answer engines get their own allow rules rather than inheriting the wildcard.
 * "Free SSH client for Android" is increasingly answered by an assistant rather
 * than a results page, and being quotable there is worth more than the crawl
 * budget it costs — see /llms.txt, which is written for the same audience.
 */
const CRAWL_BLOCKS = ["/screenshot/", "/api/"];

/** Assistant and answer-engine crawlers, allowed on the same terms as search. */
const ANSWER_ENGINES = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: CRAWL_BLOCKS },
      ...ANSWER_ENGINES.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: CRAWL_BLOCKS,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

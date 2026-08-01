import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * /screenshot/* renders bare phone mockups for capturing marketing images —
 * real pages with no nav, no copy and no unique value. Left crawlable they
 * would be indexed as thin duplicates and dilute the home page, so they are
 * blocked here and marked noindex in the route itself (robots.txt only stops
 * crawling; the meta tag is what removes an already-indexed URL).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/screenshot/", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

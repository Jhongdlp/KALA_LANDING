import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * A single-page site, so the sitemap is one entry — its job here is less about
 * discovery than about giving Search Console a verified URL to report on and a
 * lastModified signal for recrawls.
 *
 * Keep /screenshot/* out: those are capture-only mockup routes (see robots.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

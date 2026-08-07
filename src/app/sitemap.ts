import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * The landing page plus the feature index — its job here is less about
 * discovery than about giving Search Console verified URLs to report on and a
 * lastModified signal for recrawls.
 *
 * Keep /screenshot/* out: those are capture-only mockup routes (see robots.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      // The deep-content page: it carries the long-tail queries ("android sftp
      // explorer", "ssh port forwarding phone"), so it is worth its own entry.
      url: `${SITE_URL}/features`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

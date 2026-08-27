import type { MetadataRoute } from "next";
import { LANDINGS } from "@/lib/landings";
import { SITE_URL } from "@/lib/site";

/**
 * Every indexable URL on the site. Its job is less about discovery — the pages
 * are all reachable from the header, footer and the related-links row — than
 * about giving Search Console a verified inventory to report coverage against,
 * which matters most right after a domain change.
 *
 * Priorities are relative within this file only; Google treats them as a hint
 * about internal importance, not a ranking input. Keep /screenshot/* out: those
 * are capture-only mockup routes (see robots.ts).
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
      priority: 0.9,
    },
    {
      // Conversion endpoint, and the target for "kammel download" and
      // "install kammel apk".
      url: `${SITE_URL}/download`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // The query-intent landings. Derived rather than listed so adding an entry
    // to LANDINGS is all it takes to get the page into the sitemap.
    ...LANDINGS.map((landing) => ({
      url: `${SITE_URL}/${landing.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

import type { NextConfig } from "next";

/**
 * Sent on every route. None of these are ranking factors on their own, but
 * Lighthouse's "Best Practices" audit checks for them and a couple close real
 * holes: without X-Content-Type-Options a sniffed response can be executed as
 * script, and without a Referrer-Policy the full URL leaks to every outbound
 * link (the page links to GitHub from the header, footer and every CTA).
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // The site is served over HTTPS only and the apex/www redirect happens at the
  // edge, so preloading is safe. Two years is the minimum the preload list takes.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Nothing on the site uses these, and denying them is what stops an embedded
  // third-party frame from asking for them in the site's name.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Removes the x-powered-by: Next.js header — free version disclosure otherwise.
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      {
        // The phone mockups and the icon are content-addressed by name and never
        // change without a filename change, so they can be cached hard. Next
        // already does this for /_next/static; /public is not covered by it.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

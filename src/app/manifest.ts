import type { MetadataRoute } from "next";
import { BRAND, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

/** The four phone mockups, all captured at the same 720×1560 device frame. */
const SCREENSHOTS = [
  ["/images/phone-consola.png", "Multi-tab SSH terminal running on Android"],
  ["/images/phone-editor.png", "Syntax-highlighting code editor over SFTP"],
  ["/images/phone-gemini.png", "An AI coding agent driven over an SSH session"],
  ["/images/phone-menu.png", "Saved server list and session switcher"],
] as const;

/**
 * Web app manifest. Not a ranking factor, but Lighthouse's installability
 * audit checks for it, Android uses name/icons/theme_color when someone adds
 * the landing page to their home screen, and the screenshots array is what
 * turns a bare install prompt into a richer one.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    // Pins the app identity to the origin root so the domain move doesn't
    // orphan installs made from the old host.
    id: "/",
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    lang: "en",
    dir: "ltr",
    display: "standalone",
    // The site opens light for everyone regardless of the OS setting (see the
    // viewport export in layout.tsx), so both of these are the light value —
    // the dark background otherwise flashes behind the install splash.
    background_color: BRAND.bgLight,
    theme_color: BRAND.bgLight,
    categories: ["developer", "productivity", "utilities"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    screenshots: SCREENSHOTS.map(([src, label]) => ({
      src,
      sizes: "720x1560",
      type: "image/png",
      form_factor: "narrow",
      label,
    })),
  };
}

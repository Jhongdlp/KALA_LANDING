/**
 * Single source of truth for everything SEO reads: metadata, JSON-LD, sitemap,
 * robots and the OG image all import from here, so the copy can never drift
 * between the <head>, the structured data and the share card.
 */

/**
 * Absolute origin, no trailing slash. Every canonical URL, sitemap entry and
 * OG image URL is built from it — social crawlers reject relative image paths,
 * so this MUST be the real production origin or link previews render blank.
 *
 * The www host is the canonical one; the apex and the old *.vercel.app origin
 * redirect to it at the Vercel domain level. The fallback below is the
 * production value on purpose: if NEXT_PUBLIC_SITE_URL is ever missing from the
 * environment, the build still emits correct canonicals instead of silently
 * pointing every URL at a preview origin.
 *
 * Override it only for a preview deployment that must self-canonicalise.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kammel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Kammel";

/**
 * <title> of the home page and og:title everywhere.
 *
 * 59 characters — under the ~60 Google renders before truncating. "Free" is
 * kept because it is the modifier with the highest click-through in this
 * category (every competing landing page carries it) and because the app
 * genuinely is.
 */
export const SITE_TITLE =
  "Kammel — Free SSH client, terminal & code editor for Android";

/**
 * Kept under ~155 characters so Google renders it whole instead of truncating,
 * and front-loaded with the terms people actually search for.
 */
export const SITE_DESCRIPTION =
  "Free open-source SSH client for Android and Linux. Terminal, SFTP file explorer and code editor in one mobile-first app. Run AI coding agents over SSH.";

/** Brand tagline, used as the long name in the web app manifest. */
export const SITE_TAGLINE = "Infrastructure. Anywhere.";

/**
 * Not a ranking factor for Google, but still read by Bing and by the social
 * cards of several link aggregators.
 */
export const SITE_KEYWORDS = [
  "SSH client Android",
  "free SSH client",
  "mobile SSH client",
  "Android terminal emulator",
  "SFTP client Android",
  "code editor Android",
  "open source SSH client",
  "Linux SSH client",
  "JuiceSSH alternative",
  "Termius alternative",
  "PuTTY alternative Android",
  "SSH terminal app",
  "Claude Code over SSH",
  "AI coding agent SSH",
  "Kammel",
];

/**
 * Search Console ownership. Verifying by meta tag rather than DNS keeps the
 * proof with the deployment, so a domain move can't silently unverify the
 * property. Unset locally — the tag is simply omitted.
 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const AUTHOR_NAME = "Jhongdlp";
export const AUTHOR_URL = "https://github.com/Jhongdlp";

/** Page backgrounds per theme, mirrored into themeColor and the manifest. */
export const BRAND = {
  bgDark: "#0A0908",
  bgLight: "#E9E3D3",
} as const;

/** Absolute URL helper — `abs("/")` and `abs("")` both yield the origin. */
export function abs(path: string): string {
  return path ? new URL(path, `${SITE_URL}/`).toString() : SITE_URL;
}

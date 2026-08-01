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
 * Set NEXT_PUBLIC_SITE_URL in Vercel when a custom domain replaces the
 * *.vercel.app one; the fallback keeps local builds and previews working.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kammel-ssh.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Kammel";

/** Used as the <title> of the home page and as og:title. */
export const SITE_TITLE = "Kammel — SSH client, terminal and code editor for Android";

/**
 * Kept under ~155 characters so Google renders it whole instead of truncating,
 * and front-loaded with the terms people actually search for.
 */
export const SITE_DESCRIPTION =
  "Free open-source SSH client for Android and Linux. Terminal, SFTP file explorer and code editor in one mobile-first app. Run AI coding agents over SSH.";

/** Shorter variant for the share card, where long lines wrap badly. */
export const SITE_TAGLINE = "Infrastructure. Anywhere.";

export const OG_DESCRIPTION =
  "Open-source SSH client, terminal, SFTP explorer and code editor — one app for Android and Linux.";

/**
 * Not a ranking factor for Google, but still read by Bing and by the social
 * cards of several link aggregators.
 */
export const SITE_KEYWORDS = [
  "SSH client Android",
  "mobile SSH client",
  "Android terminal emulator",
  "SFTP client Android",
  "code editor Android",
  "open source SSH client",
  "Linux SSH client",
  "Flutter SSH app",
  "SSH terminal app",
  "Claude Code over SSH",
  "AI coding agent SSH",
  "Kammel",
];

export const AUTHOR_NAME = "Jhongdlp";
export const AUTHOR_URL = "https://github.com/Jhongdlp";

/** Brand palette echoed by the OG image and the browser theme colour. */
export const BRAND = {
  bgDark: "#0A0908",
  bgLight: "#E9E3D3",
  ink: "#ECE7DA",
  accent: "#8BA678",
} as const;

/** Absolute URL helper — `abs("/")` and `abs("")` both yield the origin. */
export function abs(path: string): string {
  return path ? new URL(path, `${SITE_URL}/`).toString() : SITE_URL;
}

import type { Metadata, Viewport } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import KammelThemeProvider from "@/components/kammel/KammelThemeProvider";
import { THEME_BG, THEME_KEY, themeCss } from "@/components/kammel/theme";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  BRAND,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  // Required for the relative canonical/OG paths below to resolve to absolute
  // URLs: Next errors on relative metadata without it, and social crawlers
  // silently drop images they can't fetch absolutely.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Child routes get "<page> — Kammel" without repeating the brand by hand.
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  category: "technology",
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  // Strips the path from the referrer on cross-origin navigations.
  referrer: "origin-when-cross-origin",
  // The copy is full of host:port and version strings; without this iOS Safari
  // turns them into phone-number links.
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    // og:image comes from app/opengraph-image.png — the file convention emits
    // the URL, dimensions and the alt from opengraph-image.alt.txt, so there
    // is nothing to sync here.
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // Image resolved from app/twitter-image.png.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Allow a full-size thumbnail and an untruncated snippet in results.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  // The site opens light for everyone regardless of the OS setting, so this is
  // a single colour rather than a prefers-color-scheme pair: keying it off the
  // OS would tint the mobile browser chrome dark around a light page.
  themeColor: BRAND.bgLight,
  colorScheme: "light dark",
};

/**
 * Applies the remembered theme before the first paint.
 *
 * It has to be a blocking inline script in <head>: anything that waits for
 * React would paint the server-rendered light theme first and snap to dark a
 * frame later. Reading localStorage can throw (Safari private mode, storage
 * disabled), and a throw here would stop the parser, so the whole thing is
 * wrapped — a failure just leaves the light default in place.
 *
 * It also rewrites the theme-color meta, which is static in the document and
 * would otherwise tint the mobile browser chrome light around a dark page.
 */
const THEME_BOOTSTRAP = `try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY,
)});if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?${JSON.stringify(
  THEME_BG.dark,
)}:${JSON.stringify(THEME_BG.light)});}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // The whole site copy is English; declaring "es" made Chrome offer to
      // translate the page and muddied language targeting in search.
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Both palettes ship as real CSS so the theme is settled in the
            stylesheet, not in a hydrated inline style. */}
        <style dangerouslySetInnerHTML={{ __html: themeCss() }} />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body className="min-h-full flex flex-col">
        <KammelThemeProvider>{children}</KammelThemeProvider>
      </body>
    </html>
  );
}

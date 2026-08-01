import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND, OG_DESCRIPTION, SITE_TAGLINE } from "@/lib/site";

/**
 * The card social platforms show when the site is shared. Next's file
 * convention emits og:image / twitter:image with the URL, width, height and
 * alt text below, so nothing has to be repeated in the metadata object.
 *
 * The route is statically prerendered, so this runs once at build time.
 */

export const alt = `Kammel — ${SITE_TAGLINE} — open-source SSH client, terminal and code editor for Android and Linux`;

/** 1200x630 is the 1.91:1 ratio X, LinkedIn, Slack, Discord and WhatsApp crop to. */
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

/** Brand fonts are vendored under app/_og so the build never needs the network. */
const FONT_DIR = join(process.cwd(), "src", "app", "_og");

const asset = (file: string) => readFile(join(FONT_DIR, file));

export default async function Image() {
  const [anton, archivo, archivoBold, mono, mark] = await Promise.all([
    asset("Anton-Regular.ttf"),
    asset("Archivo-Regular.ttf"),
    asset("Archivo-Bold.ttf"),
    asset("JetBrainsMono-Medium.ttf"),
    readFile(join(process.cwd(), "public", "images", "icon", "kammel-mark.png")),
  ]);

  // Satori can't fetch remote images, so the mark is inlined.
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 68px",
          background: BRAND.bgDark,
          color: BRAND.ink,
          fontFamily: "Archivo",
          position: "relative",
        }}
      >
        {/* Accent wash warming the bottom-right corner. Full-bleed and linear
            on purpose: Satori renders no blur and clips radial gradients to a
            hard-edged disc, so any inset shape leaves a visible seam. */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(115deg, rgba(139,166,120,0) 45%, rgba(139,166,120,0.10) 78%, rgba(139,166,120,0.20) 100%)",
          }}
        />

        {/* Brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={markSrc} width={62} height={42} alt="" />
            <div
              style={{
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: "0.24em",
              }}
            >
              KAMMEL
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: 18,
              letterSpacing: "0.18em",
              color: BRAND.accent,
              border: `1px solid ${BRAND.accent}`,
              borderRadius: 8,
              padding: "9px 18px",
            }}
          >
            OPEN SOURCE
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Anton",
            fontSize: 118,
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Infrastructure.</div>
          <div style={{ display: "flex" }}>
            Anywhere
            <span style={{ color: BRAND.accent }}>.</span>
          </div>
        </div>

        {/* Description + platform strip */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 830,
              fontSize: 27,
              lineHeight: 1.45,
              color: "rgba(236,231,218,0.66)",
            }}
          >
            {OG_DESCRIPTION}
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              fontFamily: "JetBrains Mono",
              fontSize: 19,
              letterSpacing: "0.16em",
              color: "rgba(236,231,218,0.42)",
            }}
          >
            <span>ANDROID</span>
            <span>·</span>
            <span>LINUX</span>
            <span>·</span>
            <span>FREE FOREVER</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: anton, style: "normal", weight: 400 },
        { name: "Archivo", data: archivo, style: "normal", weight: 400 },
        { name: "Archivo", data: archivoBold, style: "normal", weight: 700 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 500 },
      ],
    },
  );
}

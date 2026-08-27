import type { Metadata } from "next";
import KammelDownload from "@/components/kammel/KammelDownload";
import { ACCENT, ANTON, ARCHIVO, MONO } from "@/components/kammel/theme";
import { downloadJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Download Kammel for Android and Linux",
  description:
    "Download the Kammel APK for Android 8.0+ or the Linux x86_64 build. Free and open source, published on GitHub Releases — no account, no store listing needed.",
  alternates: { canonical: "/download" },
  openGraph: {
    type: "article",
    title: "Download Kammel for Android and Linux",
    description:
      "Free, open-source SSH client, terminal and code editor. APK for Android 8.0+ and a Linux x86_64 desktop build.",
    url: "/download",
  },
};

/**
 * Install steps. They are real instructions, not filler: sideloading an APK is
 * the step where people actually get stuck, and the same list feeds the HowTo
 * structured data — so editing one edits both.
 */
const STEPS: { name: string; text: string }[] = [
  {
    name: "Download the APK",
    text: "Open the latest release on GitHub and download the app-release.apk asset. The download button above always points at the newest one.",
  },
  {
    name: "Allow the install",
    text: "Android asks for permission the first time a browser or file manager installs a package. Grant \"Install unknown apps\" to whichever app you downloaded with; you can revoke it afterwards.",
  },
  {
    name: "Open the file",
    text: "Tap the downloaded APK in your notifications or file manager and confirm the install. Kammel needs Android 8.0 or later.",
  },
  {
    name: "Add your first server",
    text: "Enter host, port and user, then either paste a private key or have Kammel generate an ed25519 pair and copy the public half into the server's authorized_keys.",
  },
];

export default function DownloadPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(downloadJsonLd(STEPS)).replace(/</g, "\\u003c"),
        }}
      />

      <section
        style={{
          padding:
            "clamp(46px,9vh,110px) clamp(20px,4vw,64px) clamp(20px,3vh,36px)",
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: ".32em",
            textTransform: "uppercase",
            color: "var(--k-statstext)",
            marginBottom: 18,
          }}
        >
          Android 8.0+ · Linux x86_64
        </div>
        <h1
          style={{
            fontFamily: ANTON,
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(46px,9vw,140px)",
            lineHeight: 0.88,
            letterSpacing: "-.015em",
            color: "var(--k-headline)",
            maxWidth: "13ch",
          }}
        >
          Download
          <br />
          Kammel<span style={{ color: ACCENT }}>.</span>
        </h1>
        <p
          style={{
            marginTop: "clamp(24px,3.6vh,42px)",
            maxWidth: 600,
            fontSize: "clamp(15px,1.25vw,17.5px)",
            lineHeight: 1.62,
            color: "var(--k-paratext)",
          }}
        >
          Free and open source under MIT and GPL. Every release is published on
          GitHub — no account to create, nothing to unlock, and the app checks
          the same feed for updates once it is installed.
        </p>
      </section>

      {/* The home page's download block, reused rather than reimplemented: it
          already reads the real version and APK size from the GitHub API. */}
      <KammelDownload />

      <section
        style={{
          borderTop: "1px solid var(--k-secborder)",
          padding:
            "clamp(44px,7vh,80px) clamp(20px,4vw,64px) clamp(52px,8vh,96px)",
        }}
      >
        <h2
          style={{
            fontFamily: ANTON,
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(28px,3.8vw,50px)",
            lineHeight: 0.94,
            color: "var(--k-headline)",
            marginBottom: 34,
          }}
        >
          Installing on Android
        </h2>
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "clamp(10px,1.2vw,14px)",
          }}
        >
          {STEPS.map((step, i) => (
            <li
              key={step.name}
              // Target of the HowToStep url in the structured data — the
              // anchors have to resolve to something real on the page.
              id={`step-${i + 1}`}
              className="k-bentocard"
              style={{
                background: "var(--k-bentobg)",
                border: "1px solid var(--k-bentoborder)",
                borderRadius: 14,
                padding: "17px 18px 19px",
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 9.5,
                  letterSpacing: ".24em",
                  color: "var(--k-bentofaint)",
                  marginBottom: 10,
                }}
              >
                STEP {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: ARCHIVO,
                  fontWeight: 800,
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "var(--k-ink)",
                  marginBottom: 9,
                }}
              >
                {step.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13.5,
                  lineHeight: 1.58,
                  color: "var(--k-bentomuted)",
                }}
              >
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

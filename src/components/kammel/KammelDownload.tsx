import { CSSProperties, ReactNode } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import {
  getLatestRelease,
  LATEST_APK_URL,
  RELEASES_URL,
  REPO_URL,
} from "@/lib/github";

const iconBoxStyle: CSSProperties = {
  width: 54,
  height: 54,
  flexShrink: 0,
  borderRadius: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgba(139,166,120,.28)",
  background: "rgba(139,166,120,.06)",
};

const primaryBtnStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  padding: "14px 18px",
  borderRadius: 3,
};

const altStyle: CSSProperties = {
  flex: 1,
  textAlign: "center",
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  borderRadius: 6,
  padding: "8px 6px",
};

type Platform = {
  icon: ReactNode;
  name: string;
  sub: string;
  meta: string;
  primaryLabel: string;
  primaryHref: string;
  ghost?: boolean;
  alts?: { label: string; href: string }[];
};

export default async function KammelDownload() {
  const release = await getLatestRelease();
  const apkUrl = release?.apkUrl ?? LATEST_APK_URL;
  const releasesUrl = release?.releasesUrl ?? RELEASES_URL;
  const androidMeta = release
    ? ["APK", release.apkSize, release.version].filter(Boolean).join(" · ")
    : "APK · Android 8+";

  const platforms: Platform[] = [
    {
      icon: <AndroidIcon />,
      name: "Android",
      sub: "Phones & tablets",
      meta: androidMeta,
      primaryLabel: "Download .apk",
      primaryHref: apkUrl,
    },
    {
      icon: <BranchIcon />,
      name: "From source",
      sub: "Flutter SDK",
      meta: `git · Flutter 3.x · ${release?.version ?? "GPL"}`,
      primaryLabel: "View on GitHub",
      primaryHref: REPO_URL,
      ghost: true,
      alts: [
        { label: "Clone", href: REPO_URL },
        { label: "Releases", href: releasesUrl },
      ],
    },
  ];

  return (
    <section
      id="download"
      className="reveal"
      style={{
        transitionDelay: ".15s",
        position: "relative",
        padding:
          "clamp(56px,9vh,104px) clamp(20px,4vw,64px) clamp(80px,12vh,130px)",
        borderTop: "1px solid var(--k-secborder)",
      }}
    >
      {/* header — two columns, mirrors the Bento rhythm */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: "clamp(30px,4.5vh,52px)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "var(--k-statstext)",
              marginBottom: 16,
            }}
          >
            Get started
          </div>
          <h2
            style={{
              fontFamily: ANTON,
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(38px,6vw,80px)",
              lineHeight: 0.9,
              letterSpacing: "-.005em",
              color: "var(--k-headline)",
            }}
          >
            Deploy from
            <br />
            your pocket<span style={{ color: ACCENT }}>.</span>
          </h2>
        </div>
        <p
          style={{
            maxWidth: 340,
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--k-paratext)",
          }}
        >
          Free and open source. Grab the Android build, the Linux desktop app,
          or clone the repo and compile it yourself — no account, no telemetry.
        </p>
      </div>

      {/* platform cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,420px))",
          justifyContent: "start",
          gap: "clamp(12px,1.4vw,18px)",
        }}
      >
        {platforms.map((p) => (
          <PlatformCard key={p.name} platform={p} />
        ))}
      </div>

      {/* trust row — echoes the hero stats line */}
      <div
        style={{
          marginTop: "clamp(34px,5vh,60px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(18px,3vw,40px)",
          fontFamily: MONO,
          fontSize: 10.5,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "var(--k-statstext)",
        }}
      >
        <span>MIT &amp; GPL</span>
        <span>No account</span>
        <span>No telemetry</span>
        <span>Android 8+</span>
        <span>Linux x86_64</span>
      </div>
    </section>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  const { icon, name, sub, meta, primaryLabel, primaryHref, ghost, alts } =
    platform;
  return (
    <div
      className="k-platform"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--k-bentobg)",
        borderRadius: 18,
        padding: "clamp(22px,2.4vw,28px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 22,
        }}
      >
        <div style={iconBoxStyle}>{icon}</div>
        <div>
          <div
            style={{
              fontFamily: ARCHIVO,
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: ".01em",
              color: "var(--k-ink)",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 9.5,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--k-bentofaint)",
              marginTop: 4,
            }}
          >
            {sub}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: ".04em",
            color: "var(--k-bentomuted)",
          }}
        >
          {meta}
        </div>
        <a
          className={ghost ? "k-ctasec" : "k-getbtn"}
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          style={
            ghost
              ? {
                  ...primaryBtnStyle,
                  color: "var(--k-sectext)",
                  background: "transparent",
                  border: "1px solid var(--k-secborder)",
                }
              : {
                  ...primaryBtnStyle,
                  color: "var(--k-btntext)",
                  background: "var(--k-btnbg)",
                }
          }
        >
          {primaryLabel} <span style={{ fontSize: 13 }}>↓</span>
        </a>
        {alts && alts.length > 0 && (
          <div style={{ display: "flex", gap: 8 }}>
            {alts.map((a) => (
              <a
                key={a.label}
                className="k-althref"
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                style={altStyle}
              >
                {a.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- platform marks (theme-aware via --k-ink, restrained accent hits) ---- */

function AndroidIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
      <path
        d="M8.5 5 6.8 2.8M19.5 5 21.2 2.8"
        stroke="var(--k-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M6 12a8 8 0 0 1 16 0Z" fill="var(--k-ink)" />
      <circle cx="10.5" cy="9" r="1" fill="var(--k-bg)" />
      <circle cx="17.5" cy="9" r="1" fill="var(--k-bg)" />
      <rect x="6" y="13" width="16" height="9.5" rx="2.5" fill="var(--k-ink)" />
      <rect x="2.6" y="13.6" width="2.2" height="6.4" rx="1.1" fill="var(--k-ink)" />
      <rect x="23.2" y="13.6" width="2.2" height="6.4" rx="1.1" fill="var(--k-ink)" />
      <rect x="9.4" y="22" width="2.2" height="4" rx="1.1" fill="var(--k-ink)" />
      <rect x="16.4" y="22" width="2.2" height="4" rx="1.1" fill="var(--k-ink)" />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--k-ink)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="7" r="2" />
      <path d="M6 7v10" />
      <path d="M18 9c0 4.6-3.6 5.6-6.6 6.6" stroke={ACCENT} />
    </svg>
  );
}

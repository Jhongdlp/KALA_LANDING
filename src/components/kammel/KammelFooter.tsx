import Link from "next/link";
import { CSSProperties } from "react";
import { ANTON, ARCHIVO, MONO } from "./theme";
import KammelLogo from "./KammelLogo";
import { RELEASES_URL, REPO_URL } from "@/lib/github";

/**
 * Every destination here is a page that actually exists — checked against the
 * repository, not assumed. Notably absent: Discussions (the feature is turned
 * off on the repo, so the URL 404s) and a Roadmap (no milestones or project
 * board to point at). The GitHub Releases feed *is* the changelog, so it is
 * listed once under that name instead of twice.
 */
const LINK_HREFS: Record<string, string> = {
  // Product — deep links into the feature index.
  Features: "/features",
  Terminal: "/features#terminal",
  "Files & editor": "/features#files",
  "Source control": "/features#git",
  "Server console": "/features#server",
  Tunnels: "/features#tunnels",
  // Platform landings. The footer is what keeps these reachable from every
  // page, so none of them sits more than one click from anywhere on the site.
  "SSH client for Android": "/ssh-client-android",
  "Android terminal": "/android-terminal",
  "SSH client for Linux": "/linux-ssh-client",
  "Coding agents over SSH": "/claude-code-android",
  // Comparisons.
  "vs Termius": "/termius-alternative",
  "vs JuiceSSH": "/juicessh-alternative",
  "vs PuTTY": "/putty-alternative-android",
  // Resources.
  Docs: `${REPO_URL}#readme`,
  Changelog: RELEASES_URL,
  Download: "/download",
  // Community.
  GitHub: REPO_URL,
  Issues: `${REPO_URL}/issues`,
  Contributing: `${REPO_URL}/blob/main/CONTRIBUTING.md`,
};

// Only links with a real destination survive — dead "#" entries are dropped, and
// any column left with no working links is not rendered.
const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Product",
    links: [
      "Features",
      "Terminal",
      "Files & editor",
      "Source control",
      "Server console",
      "Tunnels",
    ],
  },
  {
    heading: "Platforms",
    links: [
      "SSH client for Android",
      "Android terminal",
      "SSH client for Linux",
      "Coding agents over SSH",
    ],
  },
  {
    heading: "Compare",
    links: ["vs Termius", "vs JuiceSSH", "vs PuTTY"],
  },
  {
    heading: "Resources",
    links: ["Docs", "Changelog", "Download"],
  },
  {
    heading: "Community",
    links: ["GitHub", "Issues", "Contributing"],
  },
].map((col) => ({ ...col, links: col.links.filter((l) => LINK_HREFS[l]) }))
  .filter((col) => col.links.length > 0);

// Legal / policy links. "Privacy" points at the security section of the feature
// index rather than the README: that is where the actual answer lives (no
// account, no telemetry, secrets in the device keystore).
const BOTTOM_LINKS: { label: string; href: string }[] = [
  { label: "License", href: `${REPO_URL}/blob/main/LICENSE` },
  { label: "Privacy", href: "/features#security" },
  { label: "Security", href: `${REPO_URL}/security` },
];

const headingStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  color: "var(--k-bentofaint)",
  marginBottom: 16,
};

const linkStyle: CSSProperties = {
  display: "block",
  fontFamily: ARCHIVO,
  fontSize: 13.5,
  padding: "6px 0",
};

const socialBtnStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 2,
};

const bottomLinkStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: ".14em",
  textTransform: "uppercase",
};

export default function KammelFooter() {
  return (
    <footer
      className="reveal"
      style={{
        transitionDelay: ".15s",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--k-secborder)",
        padding: "clamp(60px,9vh,110px) clamp(20px,4vw,64px) 0",
      }}
    >
      {/* top — brand + link columns */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(40px,5vw,90px)",
          justifyContent: "space-between",
        }}
      >
        {/* brand */}
        <div style={{ flex: "1 1 260px", maxWidth: 340 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <KammelLogo size={32} />
            <span
              style={{
                fontWeight: 800,
                letterSpacing: ".22em",
                fontSize: 16,
                paddingLeft: ".22em",
              }}
            >
              KAMMEL
            </span>
          </div>
          <p
            style={{
              marginTop: 20,
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--k-paratext)",
            }}
          >
            An open-source, mobile-first workspace for developers. SSH, terminal,
            file explorer and code editor in one Flutter app.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <a
              className="k-social"
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={socialBtnStyle}
            >
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* link columns */}
        <div
          style={{
            flex: "2 1 460px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
            gap: "clamp(24px,3vw,48px)",
          }}
        >
          {COLUMNS.map((col) => (
            <nav key={col.heading}>
              <div style={headingStyle}>{col.heading}</div>
              {col.links.map((link) => {
                const href = LINK_HREFS[link];
                // Internal routes navigate in place (and get prefetched);
                // only the GitHub destinations open a new tab.
                return href.startsWith("/") ? (
                  <Link
                    key={link}
                    className="k-footlink"
                    href={href}
                    style={linkStyle}
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    key={link}
                    className="k-footlink"
                    href={href}
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                );
              })}
            </nav>
          ))}
        </div>
      </div>

      {/* oversized wordmark — the site's signature display type, as a closer */}
      <div
        aria-hidden="true"
        style={{
          marginTop: "clamp(48px,7vh,84px)",
          lineHeight: 0.74,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: ANTON,
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(40px,9.6vw,138px)",
            letterSpacing: "-.02em",
            color: "var(--k-ink)",
            opacity: 0.06,
            userSelect: "none",
          }}
        >
          KAMMEL
        </span>
      </div>

      {/* bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--k-secborder)",
          marginTop: "clamp(20px,3vh,40px)",
          padding: "24px 0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "var(--k-statstext)",
        }}
      >
        <span>© 2026 Kammel — MIT License</span>
        <div style={{ display: "flex", gap: "clamp(16px,2.4vw,28px)" }}>
          {BOTTOM_LINKS.map(({ label, href }) =>
            href.startsWith("/") ? (
              <Link
                key={label}
                className="k-footlink"
                href={href}
                style={bottomLinkStyle}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                className="k-footlink"
                href={href}
                style={bottomLinkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ),
          )}
        </div>
        <span>Built with Flutter</span>
      </div>
    </footer>
  );
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}


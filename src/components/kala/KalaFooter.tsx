import { CSSProperties } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import { RELEASES_URL, REPO_URL } from "@/lib/github";

const LINK_HREFS: Record<string, string> = {
  GitHub: REPO_URL,
  Issues: `${REPO_URL}/issues`,
  Discussions: `${REPO_URL}/discussions`,
  Contribute: REPO_URL,
  Releases: RELEASES_URL,
};

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Product",
    links: ["Workspace", "Terminal", "File explorer", "Code editor", "Docker"],
  },
  {
    heading: "Resources",
    links: ["Docs", "Changelog", "Roadmap", "Releases"],
  },
  {
    heading: "Community",
    links: ["GitHub", "Issues", "Discussions", "Contribute"],
  },
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

export default function KalaFooter() {
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
            <div
              style={{
                width: 22,
                height: 22,
                border: "1.5px solid var(--k-ink)",
                transform: "rotate(45deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 6, height: 6, background: ACCENT }} />
            </div>
            <span
              style={{
                fontWeight: 800,
                letterSpacing: ".34em",
                fontSize: 15,
                paddingLeft: ".34em",
              }}
            >
              KALA
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
            <a className="k-social" href="#" aria-label="X" style={socialBtnStyle}>
              <XIcon />
            </a>
            <a className="k-social" href="#" aria-label="Discord" style={socialBtnStyle}>
              <DiscordIcon />
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
                const href = LINK_HREFS[link] ?? "#";
                const external = href !== "#";
                return (
                  <a
                    key={link}
                    className="k-footlink"
                    href={href}
                    style={linkStyle}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
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
            fontSize: "clamp(96px,24vw,340px)",
            letterSpacing: "-.02em",
            color: "var(--k-ink)",
            opacity: 0.06,
            userSelect: "none",
          }}
        >
          KALA
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
        <span>© 2026 KALA — MIT License</span>
        <div style={{ display: "flex", gap: "clamp(16px,2.4vw,28px)" }}>
          <a className="k-footlink" href="#" style={bottomLinkStyle}>
            License
          </a>
          <a className="k-footlink" href="#" style={bottomLinkStyle}>
            Privacy
          </a>
          <a className="k-footlink" href="#" style={bottomLinkStyle}>
            Security
          </a>
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

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
      <path d="M12.6 1.5h2.3l-5 5.7 5.9 7.8h-4.6l-3.6-4.7-4.1 4.7H1.1l5.4-6.1L.8 1.5h4.7l3.3 4.3 3.8-4.3Zm-.8 12.9h1.3L4.6 2.9H3.2l8.6 11.5Z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M13.5 3.2A11 11 0 0 0 10.8 2.4l-.2.3c1 .3 1.5.6 2.1 1A9 9 0 0 0 8 3.5c-1.7 0-3.3.3-4.7 1.2.6-.4 1.1-.7 2.1-1l-.2-.3A11 11 0 0 0 2.5 3.2 12 12 0 0 0 .5 11.3a11 11 0 0 0 3.3 1.7l.7-1.1c-.4-.1-.8-.3-1.1-.5l.3-.2a7.9 7.9 0 0 0 6.8 0l.3.2c-.4.2-.7.4-1.1.5l.7 1.1a11 11 0 0 0 3.3-1.7 12 12 0 0 0-2-8.1ZM5.7 9.8c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.2.6 1.1 1.3c0 .7-.5 1.3-1.1 1.3Zm4.6 0c-.6 0-1.1-.6-1.1-1.3s.5-1.3 1.1-1.3 1.2.6 1.1 1.3c0 .7-.5 1.3-1.1 1.3Z" />
    </svg>
  );
}

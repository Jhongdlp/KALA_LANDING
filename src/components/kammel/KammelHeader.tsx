"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MONO } from "./theme";
import { useKammelTheme } from "./KammelThemeProvider";
import KammelLogo from "./KammelLogo";
import { REPO_URL } from "@/lib/github";

// GitHub's gold star colour — reads as a real "star" rather than the brand green.
const STAR_GOLD = "#E3B341";

function formatStars(n: number): string {
  if (n >= 10000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export default function KammelHeader({ stars }: { stars?: number | null }) {
  const { theme, toggleTheme } = useKammelTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLight = theme === "light";
  const closeMenu = () => setMenuOpen(false);

  // Liquid-glass kicks in once the page scrolls off the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // `display: contents` so this wrapper generates no box — the sticky header
    // then anchors to `.kammel` (full page height) instead of this short wrapper,
    // which is what kept it from staying pinned while scrolling.
    <div data-menu={menuOpen ? "open" : "closed"} style={{ display: "contents" }}>
      <header
        className={`reveal k-header${scrolled ? " k-header-glass" : ""}`}
        style={{
          transitionDelay: ".3s",
          position: "sticky",
          top: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px clamp(20px,4vw,64px)",
        }}
      >
        <Link
          className="k-logo"
          href="/"
          aria-label="Kammel — home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            color: "var(--k-ink)",
          }}
        >
          <KammelLogo size={30} />
          <span
            style={{
              fontWeight: 800,
              letterSpacing: ".22em",
              fontSize: 15,
              paddingLeft: ".22em",
            }}
          >
            KAMMEL
          </span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* The only nav entry, so it stays text rather than a third button —
              but at full ink weight and on the same 38px rhythm as the controls
              beside it, with the hover treatment they already use. Muted grey
              here read as disabled next to a filled Download. */}
          <Link className="k-nav k-navbtn" href="/features">
            <span aria-hidden="true" className="k-navdot" />
            Features
          </Link>
          <a
            className="k-star"
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Kammel on GitHub"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              height: 38,
              padding: "0 14px",
              background: "transparent",
              border: "1px solid var(--k-toggle-border)",
              borderRadius: 8,
              fontFamily: MONO,
              fontSize: 11.5,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--k-ink)",
              whiteSpace: "nowrap",
            }}
          >
            <GithubIcon />
            <span>Star</span>
            {stars != null && (
              <>
                <span className="k-star-divider" />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "var(--k-navtext)",
                    letterSpacing: ".08em",
                  }}
                >
                  <StarIcon />
                  {formatStars(stars)}
                </span>
              </>
            )}
          </a>
          <Link
            className="k-download"
            // Absolute, not "#download": the anchor only exists on the home
            // page, so from /features this has to navigate there first.
            href="/#download"
            style={{
              fontFamily: MONO,
              fontSize: 11.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--k-btntext)",
              background: "var(--k-btnbg)",
              padding: "11px 20px",
              borderRadius: 8,
              transition:
                "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
            }}
          >
            Download
          </Link>
          <span className="k-vdivider" />
          <button
            className="k-themebtn"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            title="Toggle colour theme"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              background: "transparent",
              border: "1px solid var(--k-toggle-border)",
              borderRadius: 8,
              color: "var(--k-ink)",
              cursor: "pointer",
            }}
          >
            {isLight ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 9.5A6 6 0 0 1 6.5 2.5 6 6 0 1 0 13.5 9.5Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.3" />
                <path
                  d="M8 1.5v1.6M8 12.9v1.6M14.5 8h-1.6M3.1 8H1.5M12.5 3.5l-1.1 1.1M4.6 11.4l-1.1 1.1M12.5 12.5l-1.1-1.1M4.6 4.6 3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
          {/* Inside the controls group, not a third child of the header: with
              `space-between` and everything else hidden on mobile, a separate
              group left the theme button stranded mid-header instead of paired
              with the hamburger. Hidden above 860px, so desktop is unchanged. */}
          <button
            className="k-hamburger k-ham"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              gap: 5.5,
              width: 44,
              height: 44,
              padding: "0 10px",
              background: "transparent",
              border: "1px solid var(--k-hamborder)",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            <span
              className="k-ham1"
              style={{ display: "block", height: 1.5, width: "100%", background: "var(--k-ink)" }}
            />
            <span
              className="k-ham2"
              style={{ display: "block", height: 1.5, width: "100%", background: "var(--k-ink)" }}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className="k-menu"
        style={{
          position: "fixed",
          top: 78,
          left: 14,
          right: 14,
          zIndex: 50,
          background: "var(--k-menubg)",
          border: "1px solid var(--k-menuborder)",
          borderRadius: 14,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxShadow: "0 34px 70px -22px var(--k-menushadow)",
        }}
      >
        <Link
          className="k-menulink"
          href="/features"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--k-menulinktext)",
            padding: "15px 12px",
            borderRadius: 8,
          }}
        >
          <GridIcon />
          <span>Features</span>
        </Link>
        <a
          className="k-menulink"
          href={REPO_URL}
          onClick={closeMenu}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--k-menulinktext)",
            padding: "15px 12px",
            borderRadius: 8,
          }}
        >
          <GithubIcon />
          <span>Star on GitHub</span>
          <StarIcon />
        </a>
        <Link
          href="/#download"
          onClick={closeMenu}
          style={{
            marginTop: 8,
            textAlign: "center",
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--k-btntext)",
            background: "var(--k-btnbg)",
            padding: "15px 12px",
            borderRadius: 8,
          }}
        >
          Download
        </Link>
      </div>
    </div>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="5.4" height="5.4" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9.1" y="1.5" width="5.4" height="5.4" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <rect x="1.5" y="9.1" width="5.4" height="5.4" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9.1" y="9.1" width="5.4" height="5.4" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={STAR_GOLD} aria-hidden="true">
      <path d="M12 2.2l2.9 6.28 6.9.67-5.19 4.57 1.53 6.79L12 18.56 5.86 21.3l1.53-6.79L2.2 9.15l6.9-.67L12 2.2Z" />
    </svg>
  );
}

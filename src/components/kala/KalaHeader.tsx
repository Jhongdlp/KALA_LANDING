"use client";

import { useState } from "react";
import { ACCENT, MONO } from "./theme";
import { useKalaTheme } from "./KalaThemeProvider";

const NAV_LINKS = ["Workspace", "Terminal", "Docs", "Github"];

export default function KalaHeader() {
  const { theme, toggleTheme } = useKalaTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = theme === "light";
  const closeMenu = () => setMenuOpen(false);

  return (
    <div data-menu={menuOpen ? "open" : "closed"}>
      <header
        className="reveal"
        style={{
          transitionDelay: ".3s",
          position: "relative",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "26px clamp(24px,4vw,64px)",
        }}
      >
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
        <nav
          className="k-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(22px,3vw,44px)",
            fontFamily: MONO,
            fontSize: 11.5,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--k-navtext)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link} className="navlink" href="#" style={{ color: "inherit" }}>
              {link}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            className="k-themebtn"
            onClick={toggleTheme}
            aria-label="Cambiar modo"
            title="Cambiar modo"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              background: "transparent",
              border: "1px solid var(--k-toggle-border)",
              borderRadius: 2,
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
          <a
            className="k-download"
            href="#"
            style={{
              fontFamily: MONO,
              fontSize: 11.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "var(--k-btntext)",
              background: "var(--k-btnbg)",
              padding: "11px 20px",
              borderRadius: 2,
              transition:
                "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
            }}
          >
            Download
          </a>
        </div>
        <button
          className="k-hamburger k-ham"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menú"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            gap: 5.5,
            width: 44,
            height: 44,
            padding: "0 10px",
            background: "transparent",
            border: "1px solid var(--k-hamborder)",
            borderRadius: 4,
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
      </header>

      {/* MOBILE MENU */}
      <div
        className="k-menu"
        style={{
          position: "fixed",
          top: 80,
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
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            className="k-menulink"
            href="#"
            onClick={closeMenu}
            style={{
              fontFamily: MONO,
              fontSize: 12,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--k-menulinktext)",
              padding: "15px 12px",
              borderRadius: 8,
            }}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
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
            borderRadius: 4,
          }}
        >
          Download
        </a>
      </div>
    </div>
  );
}

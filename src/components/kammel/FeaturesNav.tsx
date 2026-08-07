"use client";

import { useEffect, useRef, useState } from "react";
import { ACCENT, MONO } from "./theme";
import { FEATURE_GROUPS } from "@/lib/features";

/**
 * Sticky section switcher for the feature index.
 *
 * It sits directly under the site header (which is itself sticky), so the two
 * stack instead of overlapping. The active chip is driven by an
 * IntersectionObserver rather than by scroll maths: a `rootMargin` that keeps
 * only a band near the top of the viewport "visible" means the highlighted
 * section is always the one being read, and the last section still activates
 * even though it can't reach the middle of the screen.
 */
export default function FeaturesNav() {
  const [active, setActive] = useState<string>(FEATURE_GROUPS[0].id);
  const railRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = FEATURE_GROUPS.map((g) =>
      document.getElementById(g.id),
    ).filter((el): el is HTMLElement => el != null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Several sections can be inside the band at once (short ones); take
        // the topmost still-intersecting entry so the chip never flickers.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep the active chip in view on narrow screens, where the rail scrolls.
  // scrollLeft is set by hand instead of scrollIntoView, which would also drag
  // the page vertically.
  useEffect(() => {
    const rail = railRef.current;
    const chip = chipRefs.current[active];
    if (!rail || !chip) return;
    const target =
      chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <nav
      className="kf-nav"
      aria-label="Feature sections"
      // `top` lives in CSS: the header is taller on mobile (hamburger), so the
      // offset this bar parks at has to change with the breakpoint.
      style={{
        position: "sticky",
        zIndex: 30,
        borderTop: "1px solid var(--k-secborder)",
        borderBottom: "1px solid var(--k-secborder)",
        background: "var(--k-headerglass)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        backdropFilter: "blur(18px) saturate(180%)",
      }}
    >
      <div
        ref={railRef}
        className="kf-rail"
        style={{
          display: "flex",
          gap: 8,
          padding: "11px clamp(20px,4vw,64px)",
          overflowX: "auto",
        }}
      >
        {FEATURE_GROUPS.map((g, i) => {
          const on = active === g.id;
          return (
            <a
              key={g.id}
              href={`#${g.id}`}
              ref={(el) => {
                chipRefs.current[g.id] = el;
              }}
              aria-current={on ? "true" : undefined}
              className="kf-chip"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                flexShrink: 0,
                padding: "7px 13px",
                borderRadius: 20,
                border: `1px solid ${on ? ACCENT : "var(--k-secborder)"}`,
                background: on ? "rgba(139,166,120,.12)" : "transparent",
                fontFamily: MONO,
                fontSize: 10.5,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: on ? "var(--k-ink)" : "var(--k-bentomuted)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: on ? ACCENT : "var(--k-bentofaint)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {g.nav}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

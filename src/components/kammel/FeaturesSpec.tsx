import Link from "next/link";
import { CSSProperties } from "react";
import { ACCENT, ANTON, MONO } from "./theme";
import { SPEC_ROWS } from "@/lib/features";
import { REPO_URL } from "@/lib/github";

const rowStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 20,
  padding: "15px 2px",
  borderBottom: "1px solid var(--k-secborder)",
  fontFamily: MONO,
  fontSize: 11.5,
  letterSpacing: ".08em",
};

const ctaStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  fontFamily: MONO,
  fontSize: 12,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  padding: "14px 24px",
  borderRadius: 3,
};

/**
 * Closing block: the facts a reader checks before installing anything, then the
 * two ways to get the app. Rows come from SPEC_ROWS so the page has a single
 * source for its claims.
 */
export default function FeaturesSpec() {
  return (
    <section
      className="reveal"
      style={{
        position: "relative",
        borderTop: "1px solid var(--k-secborder)",
        padding:
          "clamp(52px,8vh,96px) clamp(20px,4vw,64px) clamp(70px,10vh,120px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "clamp(30px,5vw,80px)",
        }}
      >
        <div style={{ flex: "1 1 300px", maxWidth: 420 }}>
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
            The short version
          </div>
          <h2
            style={{
              fontFamily: ANTON,
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(34px,5.2vw,68px)",
              lineHeight: 0.9,
              letterSpacing: "-.005em",
              color: "var(--k-headline)",
            }}
          >
            Specs, not
            <br />
            promises<span style={{ color: ACCENT }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 22,
              maxWidth: 340,
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--k-paratext)",
            }}
          >
            Everything above runs on the build you can download right now — and
            on the source you can read line by line.
          </p>
          <div
            className="k-cta"
            style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}
          >
            <Link
              className="k-ctamain"
              href="/#download"
              style={{
                ...ctaStyle,
                color: "var(--k-btntext)",
                background: "var(--k-btnbg)",
              }}
            >
              Download <span style={{ fontSize: 13 }}>↓</span>
            </Link>
            <a
              className="k-ctasec"
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...ctaStyle,
                color: "var(--k-sectext)",
                background: "transparent",
                border: "1px solid var(--k-secborder)",
              }}
            >
              Read the source
            </a>
          </div>
        </div>

        <dl
          style={{
            flex: "2 1 460px",
            margin: 0,
            borderTop: "1px solid var(--k-secborder)",
          }}
        >
          {SPEC_ROWS.map(({ label, value }) => (
            <div key={label} style={rowStyle}>
              <dt
                style={{
                  color: "var(--k-bentofaint)",
                  textTransform: "uppercase",
                  letterSpacing: ".2em",
                  fontSize: 10,
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </dt>
              <dd
                style={{
                  margin: 0,
                  textAlign: "right",
                  color: "var(--k-sectext)",
                }}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

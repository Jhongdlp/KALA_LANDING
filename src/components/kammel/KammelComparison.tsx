import Link from "next/link";
import { CSSProperties } from "react";
import { ACCENT, ANTON, MONO } from "./theme";
import ComparisonTable from "./ComparisonTable";
import { HOME_COMPARISON } from "@/lib/comparison";
import { SPEC_ROWS } from "@/lib/features";

/**
 * The factual block on the home page: a spec sheet, then Kammel against the two
 * clients people actually arrive from.
 *
 * It exists because the home page is the URL an assistant cites by default, and
 * until now every comparative fact on this site lived on a landing page an
 * assistant may never fetch. The copy here is deliberately flat — no adjectives,
 * no superlatives, one verifiable statement per cell — because that is the
 * register that gets quoted verbatim instead of paraphrased away.
 *
 * A server component with no state: the whole point is that the text sits in
 * the served HTML for a crawler that runs no JavaScript.
 */

const specRow: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 20,
  padding: "13px 2px",
  borderBottom: "1px solid var(--k-secborder)",
  fontFamily: MONO,
  fontSize: 11.5,
  letterSpacing: ".08em",
};

/** The three landings that carry the long form of these rows. */
const DEEPER = [
  { href: "/termius-alternative", label: "Termius alternative" },
  { href: "/juicessh-alternative", label: "JuiceSSH alternative" },
  { href: "/putty-alternative-android", label: "PuTTY alternative" },
];

export default function KammelComparison() {
  return (
    <section
      className="reveal"
      style={{
        transitionDelay: ".15s",
        position: "relative",
        borderTop: "1px solid var(--k-secborder)",
        padding:
          "clamp(56px,9vh,104px) clamp(20px,4vw,64px) clamp(60px,10vh,116px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "clamp(30px,5vw,80px)",
          marginBottom: "clamp(38px,6vh,64px)",
        }}
      >
        {/* header column — same shape as the FAQ and In-practice sections */}
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
            Comparison
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
            The facts
            <br />
            side by side<span style={{ color: ACCENT }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 24,
              maxWidth: 340,
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--k-paratext)",
            }}
          >
            Termius and JuiceSSH are where most people arrive from. Below is what
            differs, including the rows Kammel loses.
          </p>
        </div>

        {/* spec sheet — SPEC_ROWS is the same array /features renders, so the
            home page cannot state a specification the feature page contradicts */}
        <div style={{ flex: "1 1 420px", maxWidth: 620 }}>
          <h3
            style={{
              fontFamily: MONO,
              fontSize: 10.5,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "var(--k-bentofaint)",
              marginBottom: 8,
            }}
          >
            Specifications
          </h3>
          <dl style={{ margin: 0, borderTop: "1px solid var(--k-secborder)" }}>
            {SPEC_ROWS.map((row) => (
              <div key={row.label} style={specRow}>
                <dt
                  style={{
                    textTransform: "uppercase",
                    color: "var(--k-bentofaint)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.label}
                </dt>
                <dd
                  style={{
                    margin: 0,
                    textAlign: "right",
                    color: "var(--k-sectext)",
                  }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <h3
        style={{
          fontFamily: MONO,
          fontSize: 10.5,
          letterSpacing: ".24em",
          textTransform: "uppercase",
          color: "var(--k-bentofaint)",
          marginBottom: 18,
        }}
      >
        Kammel vs {HOME_COMPARISON.columns.slice(1).join(" vs ")}
      </h3>
      <ComparisonTable
        caption="Kammel compared with Termius and JuiceSSH"
        columns={HOME_COMPARISON.columns}
        rows={HOME_COMPARISON.rows}
        note={HOME_COMPARISON.note}
      />

      <div
        style={{
          marginTop: 28,
          fontFamily: MONO,
          fontSize: 10.5,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "var(--k-bentofaint)",
        }}
      >
        {DEEPER.map((link, i) => (
          <span key={link.href}>
            {i > 0 && <span style={{ padding: "0 8px" }}>·</span>}
            <Link className="k-caselink" href={link.href}>
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </section>
  );
}

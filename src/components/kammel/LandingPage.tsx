import Link from "next/link";
import { CSSProperties } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import { LATEST_APK_URL, REPO_URL } from "@/lib/github";
import { getLanding, type Comparison, type Landing, type LandingSection } from "@/lib/landings";

/**
 * Renderer shared by every query-intent landing in LANDINGS.
 *
 * One component rather than a page each: the pages differ in copy, not in
 * layout, and a shared renderer is what keeps the heading hierarchy identical
 * across all of them — exactly one H1, H2 per section, H3 per point. A
 * hand-built page per slug drifts from that within two edits.
 */

const kickerStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 11,
  letterSpacing: ".32em",
  textTransform: "uppercase",
  color: "var(--k-statstext)",
};

const sectionPad =
  "clamp(44px,7vh,80px) clamp(20px,4vw,64px) clamp(52px,8vh,96px)";

export default function LandingPage({ landing }: { landing: Landing }) {
  return (
    <>
      <Hero landing={landing} />
      {landing.sections.map((section, i) => (
        <Section key={section.heading} section={section} index={i + 1} />
      ))}
      {landing.comparison && <ComparisonTable comparison={landing.comparison} />}
      <Faqs landing={landing} />
      <Cta />
      <Related landing={landing} />
    </>
  );
}

function Hero({ landing }: { landing: Landing }) {
  return (
    <section
      style={{
        padding: "clamp(46px,9vh,110px) clamp(20px,4vw,64px) clamp(30px,5vh,56px)",
      }}
    >
      {/* Visible breadcrumb. The BreadcrumbList JSON-LD on the page describes
          this trail; Google discounts a crumb that exists only in the markup. */}
      <nav
        aria-label="Breadcrumb"
        style={{ ...kickerStyle, fontSize: 10.5, marginBottom: 20 }}
      >
        <Link href="/" style={{ color: "var(--k-statstext)" }}>
          Home
        </Link>
        <span style={{ margin: "0 10px", opacity: 0.5 }}>/</span>
        <span style={{ color: "var(--k-sectext)" }}>{landing.title}</span>
      </nav>
      <div style={{ ...kickerStyle, marginBottom: 18 }}>{landing.kicker}</div>
      <h1
        style={{
          fontFamily: ANTON,
          fontWeight: 400,
          textTransform: "uppercase",
          fontSize: "clamp(42px,8vw,124px)",
          lineHeight: 0.9,
          letterSpacing: "-.015em",
          color: "var(--k-headline)",
          maxWidth: "15ch",
        }}
      >
        {landing.h1[0]}
        <br />
        {landing.h1[1]}
        <span style={{ color: ACCENT }}>.</span>
      </h1>
      <p
        style={{
          marginTop: "clamp(24px,3.6vh,42px)",
          maxWidth: 620,
          fontSize: "clamp(15px,1.25vw,17.5px)",
          lineHeight: 1.62,
          color: "var(--k-paratext)",
        }}
      >
        {landing.intro}
      </p>
    </section>
  );
}

function Section({
  section,
  index,
}: {
  section: LandingSection;
  index: number;
}) {
  return (
    <section
      style={{
        borderTop: "1px solid var(--k-secborder)",
        padding: sectionPad,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "clamp(28px,4vw,72px)",
        }}
      >
        <div className="kf-head" style={{ flex: "1 1 300px", maxWidth: 420 }}>
          <span
            aria-hidden="true"
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(28px,3.2vw,42px)",
              lineHeight: 1,
              letterSpacing: "-.02em",
              color: "var(--k-ink)",
              opacity: 0.14,
            }}
          >
            {String(index).padStart(2, "0")}
          </span>
          <h2
            style={{
              marginTop: 10,
              fontFamily: ANTON,
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(28px,3.8vw,50px)",
              lineHeight: 0.94,
              letterSpacing: "-.005em",
              color: "var(--k-headline)",
            }}
          >
            {section.heading}
          </h2>
        </div>
        <div style={{ flex: "2 1 460px", maxWidth: 760 }}>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14.5px,1.1vw,16.5px)",
              lineHeight: 1.68,
              color: "var(--k-paratext)",
            }}
          >
            {section.body}
          </p>
          {section.points && (
            <div
              style={{
                marginTop: 26,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "clamp(10px,1.2vw,14px)",
              }}
            >
              {section.points.map((p) => (
                <div
                  key={p.title}
                  className="k-bentocard"
                  style={{
                    background: "var(--k-bentobg)",
                    border: "1px solid var(--k-bentoborder)",
                    borderRadius: 14,
                    padding: "17px 18px 19px",
                  }}
                >
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
                    {p.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13.5,
                      lineHeight: 1.58,
                      color: "var(--k-bentomuted)",
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * A real <table> with a scroll container, not a grid of divs: the comparison is
 * tabular data, screen readers announce the row and column headers, and the
 * overflow wrapper is what stops a seven-row table forcing the whole page to
 * scroll sideways on a phone.
 */
function ComparisonTable({ comparison }: { comparison: Comparison }) {
  const cell: CSSProperties = {
    padding: "14px 16px",
    borderTop: "1px solid var(--k-bentoborder)",
    fontSize: 14,
    lineHeight: 1.5,
    color: "var(--k-paratext)",
    verticalAlign: "top",
  };
  const head: CSSProperties = {
    padding: "0 16px 12px",
    textAlign: "left",
    fontFamily: MONO,
    fontSize: 10.5,
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "var(--k-bentofaint)",
    whiteSpace: "nowrap",
  };

  return (
    <section style={{ borderTop: "1px solid var(--k-secborder)", padding: sectionPad }}>
      <h2
        style={{
          fontFamily: ANTON,
          fontWeight: 400,
          textTransform: "uppercase",
          fontSize: "clamp(28px,3.8vw,50px)",
          lineHeight: 0.94,
          color: "var(--k-headline)",
          marginBottom: 30,
        }}
      >
        Kammel vs {comparison.rival}
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: 620,
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th scope="col" style={head} />
              <th scope="col" style={{ ...head, color: ACCENT }}>
                Kammel
              </th>
              <th scope="col" style={head}>
                {comparison.rival}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.criterion}>
                <th
                  scope="row"
                  style={{
                    ...cell,
                    fontFamily: ARCHIVO,
                    fontWeight: 700,
                    color: "var(--k-ink)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.criterion}
                </th>
                <td style={{ ...cell, color: "var(--k-sectext)" }}>{row.kammel}</td>
                <td style={cell}>{row.rival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        style={{
          marginTop: 20,
          maxWidth: 720,
          fontSize: 12.5,
          lineHeight: 1.6,
          color: "var(--k-bentofaint)",
        }}
      >
        {comparison.note}
      </p>
    </section>
  );
}

/**
 * Rendered as plain markup rather than an accordion: the FAQPage structured
 * data on these pages must match text a crawler can see, and the answers are
 * short enough that hiding them buys nothing.
 */
function Faqs({ landing }: { landing: Landing }) {
  return (
    <section style={{ borderTop: "1px solid var(--k-secborder)", padding: sectionPad }}>
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
        Questions
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(20px,2.6vw,38px)",
          maxWidth: 1100,
        }}
      >
        {landing.faqs.map((faq) => (
          <div key={faq.q}>
            <h3
              style={{
                fontFamily: ARCHIVO,
                fontWeight: 800,
                fontSize: 16.5,
                lineHeight: 1.3,
                color: "var(--k-ink)",
                marginBottom: 10,
              }}
            >
              {faq.q}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.62,
                color: "var(--k-paratext)",
              }}
            >
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  const btn: CSSProperties = {
    fontFamily: MONO,
    fontSize: 12,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    padding: "15px 28px",
    borderRadius: 2,
  };
  return (
    <section style={{ borderTop: "1px solid var(--k-secborder)", padding: sectionPad }}>
      <h2
        style={{
          fontFamily: ANTON,
          fontWeight: 400,
          textTransform: "uppercase",
          fontSize: "clamp(30px,4.4vw,58px)",
          lineHeight: 0.92,
          color: "var(--k-headline)",
          maxWidth: "14ch",
        }}
      >
        Free, open source
        <span style={{ color: ACCENT }}>.</span>
      </h2>
      <div style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 14 }}>
        <a
          href={LATEST_APK_URL}
          style={{
            ...btn,
            background: "var(--k-btnbg)",
            color: "var(--k-btntext)",
          }}
        >
          Download the APK
        </a>
        <a
          href={REPO_URL}
          rel="noopener"
          style={{
            ...btn,
            border: "1px solid var(--k-secborder)",
            color: "var(--k-sectext)",
          }}
        >
          View the source
        </a>
      </div>
    </section>
  );
}

/**
 * Internal links between sibling landings. This is the part that makes the set
 * work as a cluster rather than as seven orphan pages: every landing is reached
 * from at least two others, so crawl depth from the home page stays at two.
 */
function Related({ landing }: { landing: Landing }) {
  const siblings = landing.related
    .map(getLanding)
    .filter((l): l is Landing => Boolean(l));
  if (siblings.length === 0) return null;

  return (
    <section style={{ borderTop: "1px solid var(--k-secborder)", padding: sectionPad }}>
      <h2
        style={{
          fontFamily: ANTON,
          fontWeight: 400,
          textTransform: "uppercase",
          fontSize: "clamp(24px,3vw,38px)",
          lineHeight: 0.94,
          color: "var(--k-headline)",
          marginBottom: 26,
        }}
      >
        Keep reading
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "clamp(10px,1.2vw,14px)",
        }}
      >
        {siblings.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="k-bentocard"
            style={{
              display: "block",
              background: "var(--k-bentobg)",
              border: "1px solid var(--k-bentoborder)",
              borderRadius: 14,
              padding: "18px 19px 20px",
            }}
          >
            <h3
              style={{
                fontFamily: ARCHIVO,
                fontWeight: 800,
                fontSize: 16,
                lineHeight: 1.3,
                color: "var(--k-ink)",
                marginBottom: 9,
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 13.5,
                lineHeight: 1.55,
                color: "var(--k-bentomuted)",
              }}
            >
              {s.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

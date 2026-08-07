import Link from "next/link";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import { USE_CASES, type UseCase } from "@/lib/features";

/**
 * Sits between the phone stair and the bento: the stair says what the app is,
 * the bento says how it works, and this says when you'd be glad you had it.
 *
 * Editorial on purpose — hairlines, a sticky heading and type doing the work,
 * with no cards, pills or counters. The bento immediately below is already a
 * grid of boxes; repeating that shape here would flatten both, and the section
 * would read as filler rather than as the argument for the sections around it.
 */
export default function KammelInPractice() {
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
          gap: "clamp(30px,5vw,86px)",
        }}
      >
        {/* heading — pinned while the moments scroll past it */}
        <div className="k-casehead" style={{ flex: "1 1 300px", maxWidth: 400 }}>
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
            In practice
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
            {/* Two short lines on purpose: at display size a longer phrase
                breaks into a ragged third line inside this column. */}
            No desk
            <br />
            in sight<span style={{ color: ACCENT }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 24,
              maxWidth: 330,
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--k-paratext)",
            }}
          >
            Four moments this was built around. Each one used to mean finding a
            desk first.
          </p>
        </div>

        {/* the moments */}
        <div
          style={{
            flex: "1 1 520px",
            maxWidth: 720,
            borderTop: "1px solid var(--k-secborder)",
          }}
        >
          {USE_CASES.map((useCase) => (
            <Moment key={useCase.title} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Moment({ useCase }: { useCase: UseCase }) {
  return (
    <article
      className="k-case"
      style={{
        position: "relative",
        padding: "clamp(24px,3.4vh,36px) 0 clamp(26px,3.6vh,38px)",
        borderBottom: "1px solid var(--k-secborder)",
      }}
    >
      {/* the scene — an accent tick and a mono line, the same kicker language
          used across the site */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 13,
        }}
      >
        <span
          aria-hidden="true"
          className="k-casetick"
          style={{ width: 14, height: 1, background: ACCENT }}
        />
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: ".26em",
            textTransform: "uppercase",
            color: "var(--k-sectext)",
          }}
        >
          {useCase.when}
        </span>
      </div>

      <h3
        style={{
          fontFamily: ARCHIVO,
          fontWeight: 800,
          fontSize: "clamp(19px,2vw,25px)",
          lineHeight: 1.22,
          letterSpacing: "-.005em",
          color: "var(--k-ink)",
          marginBottom: 12,
          maxWidth: 600,
        }}
      >
        {useCase.title}
      </h3>

      <p
        style={{
          margin: 0,
          maxWidth: 620,
          fontSize: 15,
          lineHeight: 1.65,
          color: "var(--k-paratext)",
        }}
      >
        {useCase.body}
      </p>

      {/* credit line: the features doing the work, set like a photo caption */}
      <div
        style={{
          marginTop: 18,
          fontFamily: MONO,
          fontSize: 10.5,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "var(--k-bentofaint)",
        }}
      >
        {useCase.uses.map((use, i) => (
          <span key={use.label}>
            {i > 0 && <span style={{ padding: "0 8px" }}>·</span>}
            <Link className="k-caselink" href={use.href}>
              {use.label}
            </Link>
          </span>
        ))}
      </div>
    </article>
  );
}

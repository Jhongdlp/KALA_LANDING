import { CSSProperties } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import { FEATURE_GROUPS, type Feature, type FeatureGroup } from "@/lib/features";

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  background: "var(--k-bentobg)",
  border: "1px solid var(--k-bentoborder)",
  borderRadius: 14,
  padding: "17px 18px 19px",
};

const kickerStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 9.5,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  color: "var(--k-bentofaint)",
  marginBottom: 10,
};

/**
 * The index itself: one section per group, each a sticky heading column beside
 * a card grid. The heading stays pinned while its own cards scroll past, so the
 * reader never loses which area a card belongs to — on narrow screens the
 * stickiness is dropped in CSS (.kf-head) because the two columns stack.
 */
export default function FeaturesSections() {
  return (
    <>
      {FEATURE_GROUPS.map((group, i) => (
        <GroupSection key={group.id} group={group} index={i + 1} />
      ))}
    </>
  );
}

function GroupSection({
  group,
  index,
}: {
  group: FeatureGroup;
  index: number;
}) {
  return (
    <section
      id={group.id}
      className="kf-section"
      style={{
        position: "relative",
        borderTop: "1px solid var(--k-secborder)",
        padding:
          "clamp(44px,7vh,80px) clamp(20px,4vw,64px) clamp(52px,8vh,96px)",
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
        {/* heading column */}
        <div
          className="kf-head"
          style={{ flex: "1 1 290px", maxWidth: 380, position: "sticky" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 14,
              marginBottom: 14,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily: ANTON,
                fontWeight: 400,
                fontSize: "clamp(30px,3.4vw,46px)",
                lineHeight: 1,
                letterSpacing: "-.02em",
                color: "var(--k-ink)",
                opacity: 0.14,
              }}
            >
              {String(index).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 10.5,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "var(--k-statstext)",
              }}
            >
              {group.kicker}
            </span>
          </div>
          <h2
            style={{
              fontFamily: ANTON,
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(32px,4.4vw,58px)",
              lineHeight: 0.92,
              letterSpacing: "-.005em",
              color: "var(--k-headline)",
            }}
          >
            {group.title[0]}
            <br />
            {group.title[1]}
            <span style={{ color: ACCENT }}>.</span>
          </h2>
          <p
            style={{
              marginTop: 20,
              maxWidth: 340,
              fontSize: 14.5,
              lineHeight: 1.62,
              color: "var(--k-paratext)",
            }}
          >
            {group.intro}
          </p>
        </div>

        {/* card grid */}
        <div
          className="kf-grid"
          style={{
            flex: "2 1 520px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(228px,1fr))",
            gap: "clamp(10px,1.2vw,14px)",
          }}
        >
          {group.features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="k-bentocard" style={cardStyle}>
      <div style={kickerStyle}>{feature.kicker}</div>
      <h3
        style={{
          fontFamily: ARCHIVO,
          fontWeight: 800,
          fontSize: 16.5,
          lineHeight: 1.25,
          letterSpacing: ".01em",
          color: "var(--k-ink)",
          marginBottom: 9,
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: 13.5,
          lineHeight: 1.58,
          color: "var(--k-bentomuted)",
        }}
      >
        {feature.body}
      </p>
    </div>
  );
}

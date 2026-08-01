import { CSSProperties } from "react";
import { ACCENT, ANTON, MONO } from "./theme";
import KammelPhoneCard, { type PhoneCardVariant } from "./KammelPhoneCard";

const STAIR: { variant: PhoneCardVariant; drop: string }[] = [
  { variant: "editor", drop: "34px" },
  { variant: "consola", drop: "0px" },
  { variant: "gemini", drop: "0px" },
  { variant: "menu", drop: "34px" },
];

export default function KammelStair() {
  return (
    <section
      className="reveal k-stair-sec"
      style={{
        transitionDelay: ".2s",
        position: "relative",
        paddingTop: "clamp(72px,13vh,150px)",
        paddingBottom: 0,
        paddingLeft: "clamp(16px,2.5vw,32px)",
        paddingRight: "clamp(16px,2.5vw,32px)",
        borderTop: "1px solid var(--k-secborder)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(40px,7vh,84px)",
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: ".32em",
            textTransform: "uppercase",
            color: "var(--k-statstext)",
            marginBottom: 18,
          }}
        >
          Mobile-first
        </div>
        <h2
          style={{
            fontFamily: ANTON,
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(44px,9vw,150px)",
            lineHeight: 0.88,
            letterSpacing: "-.01em",
            color: "var(--k-headline)",
          }}
        >
          One app.
          <br />
          Every flow<span style={{ color: ACCENT }}>.</span>
        </h2>
      </div>
      {/* clipped stage: phones fan out and are cut by the component's bottom edge,
          as if stepping out of frame — tops always stay intact */}
      <div
        className="k-stair"
        style={{
          position: "relative",
          boxSizing: "border-box",
          height: "clamp(424px,56vh,554px)",
          paddingTop: 14,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "clamp(10px,1.2vw,20px)",
          overflow: "hidden",
        }}
      >
        {STAIR.map((p, i) => (
          <div
            key={p.variant}
            className="k-stair-card"
            style={
              {
                flexShrink: 0,
                width: "clamp(220px,22vw,330px)",
                zIndex: i + 1,
                "--drop": p.drop,
              } as CSSProperties
            }
          >
            <KammelPhoneCard variant={p.variant} />
          </div>
        ))}
      </div>
    </section>
  );
}

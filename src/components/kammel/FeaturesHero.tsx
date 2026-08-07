import { ACCENT, ANTON, MONO } from "./theme";
import { FEATURE_COUNT, FEATURE_GROUPS } from "@/lib/features";

const statLabel = {
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: ".24em",
  textTransform: "uppercase" as const,
  color: "var(--k-statstext)",
  marginTop: 8,
};

const statValue = {
  fontFamily: ANTON,
  fontWeight: 400 as const,
  fontSize: "clamp(30px,3.4vw,44px)",
  lineHeight: 1,
  letterSpacing: "-.01em",
  color: "var(--k-ink)",
};

/**
 * Page opener. Deliberately shorter than the home hero — this page is an index,
 * so the job is to state what it is and get the reader into the nav quickly.
 */
export default function FeaturesHero() {
  return (
    <section
      className="reveal"
      style={{
        position: "relative",
        padding:
          "clamp(40px,7vh,84px) clamp(20px,4vw,64px) clamp(38px,6vh,66px)",
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
        Feature index
      </div>
      <h1
        className="k-headline"
        style={{
          fontFamily: ANTON,
          fontWeight: 400,
          textTransform: "uppercase",
          fontSize: "clamp(46px,9vw,140px)",
          lineHeight: 0.88,
          letterSpacing: "-.015em",
          color: "var(--k-headline)",
          maxWidth: "14ch",
        }}
      >
        Every tool.
        <br />
        One app<span style={{ color: ACCENT }}>.</span>
      </h1>

      <div
        style={{
          marginTop: "clamp(26px,4vh,44px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "clamp(24px,4vw,56px)",
        }}
      >
        <p
          style={{
            flex: "1 1 340px",
            maxWidth: 560,
            fontSize: "clamp(15px,1.3vw,17px)",
            lineHeight: 1.62,
            color: "var(--k-paratext)",
          }}
        >
          Kammel packs an SSH client, a real terminal, an SFTP explorer, a code
          editor, a git panel, a Docker console and port forwarding into one
          app you can drive with your thumbs. Here is all of it, in detail.
        </p>
        <div
          className="k-stats"
          style={{ display: "flex", gap: "clamp(28px,4vw,60px)" }}
        >
          <div>
            <div style={statValue}>{FEATURE_GROUPS.length}</div>
            <div style={statLabel}>Areas</div>
          </div>
          <div>
            <div style={statValue}>{FEATURE_COUNT}</div>
            <div style={statLabel}>Features</div>
          </div>
          <div>
            <div style={statValue}>
              0<span style={{ color: ACCENT }}>.</span>
            </div>
            <div style={statLabel}>Accounts</div>
          </div>
        </div>
      </div>
    </section>
  );
}

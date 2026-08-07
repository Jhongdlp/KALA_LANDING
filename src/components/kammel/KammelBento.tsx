import Link from "next/link";
import { CSSProperties } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import { FEATURE_COUNT } from "@/lib/features";

/* The stages act as dark "device screens" in BOTH themes (matching the hero and
   phone card). Everything inside a stage therefore uses these constant
   light-on-dark tokens rather than theme vars, which would invert and disappear
   on the dark screen in light mode. */
const SCREEN_BG = "#0C0B09";
const SCREEN_LINE = "rgba(236,231,218,.1)";
const SCREEN_TEXT = "#ECE7DA";

const cardStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  background: "var(--k-bentobg)",
  border: "1px solid var(--k-bentoborder)",
  borderRadius: 18,
  overflow: "hidden",
};

const stageStyle: CSSProperties = {
  flex: 1,
  position: "relative",
  margin: "16px 16px 0",
  border: "1px solid var(--k-bentoscreenframe)",
  borderRadius: 12,
  overflow: "hidden",
  background: SCREEN_BG,
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,.05), inset 0 0 0 1px rgba(0,0,0,.35)",
};

const kickerStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: ".24em",
  textTransform: "uppercase",
  color: "var(--k-bentofaint)",
  marginBottom: 9,
};

function CardText({
  kicker,
  title,
  body,
  large,
  maxWidth,
}: {
  kicker: string;
  title: string;
  body: string;
  large?: boolean;
  maxWidth?: number;
}) {
  return (
    <div style={{ padding: large ? "18px 20px 20px" : "16px 18px 18px" }}>
      <div style={kickerStyle}>{kicker}</div>
      <div
        style={{
          fontFamily: ARCHIVO,
          fontWeight: 800,
          fontSize: large ? 20 : 18,
          letterSpacing: ".01em",
          color: "var(--k-ink)",
          marginBottom: 7,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: large ? 14 : 13.5,
          lineHeight: 1.55,
          color: "var(--k-bentomuted)",
          maxWidth,
        }}
      >
        {body}
      </div>
    </div>
  );
}

export default function KammelBento() {
  return (
    <section
      className="reveal"
      style={{
        transitionDelay: ".15s",
        position: "relative",
        padding:
          "clamp(56px,9vh,104px) clamp(20px,4vw,64px) clamp(80px,12vh,130px)",
        borderTop: "1px solid var(--k-secborder)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: "clamp(30px,4.5vh,52px)",
        }}
      >
        <div>
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
            Under the hood
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
            Your whole workflow,
            <br />
            in one pocket<span style={{ color: ACCENT }}>.</span>
          </h2>
        </div>
        <div style={{ maxWidth: 340 }}>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--k-paratext)",
            }}
          >
            Terminal, remote editor and native viewers working together over SSH
            and SFTP — without ever leaving the app.
          </p>
          {/* The six cards below are the highlights; the index has the rest. */}
          <Link
            className="navlink"
            href="/features"
            style={{
              display: "inline-block",
              marginTop: 18,
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--k-ink)",
            }}
          >
            All {FEATURE_COUNT} features →
          </Link>
        </div>
      </div>

      <div
        className="k-bento"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "clamp(12px,1.4vw,18px)",
          gridAutoRows: "minmax(260px,auto)",
        }}
      >
        <DockerCard />
        <SshTabsCard />
        <SftpCard />
        <ClipboardCard />
        <SecurityCard />
        <ViewersCard />
      </div>
    </section>
  );
}

/* CARD 1 · DOCKER CONTROL CENTER (2/3) */
function DockerCard() {
  const gaugeLabel: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: MONO,
    fontSize: 9,
    color: "rgba(236,231,218,.55)",
    marginBottom: 5,
  };
  const gaugeTrack: CSSProperties = {
    height: 5,
    borderRadius: 3,
    background: "rgba(236,231,218,.1)",
    overflow: "hidden",
  };
  const sheen: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "30%",
    background:
      "linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)",
    animation: "kb-sheen 2.6s ease-in-out infinite",
  };
  const containerRow: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 11px",
    borderRadius: 8,
    border: `1px solid ${SCREEN_LINE}`,
    background: "rgba(236,231,218,.03)",
    fontFamily: MONO,
    fontSize: 10.5,
    color: "#ECE7DA",
  };
  const knobOn = (
    <span
      style={{
        width: 26,
        height: 14,
        borderRadius: 8,
        background: ACCENT,
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          right: 2,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#0A0908",
        }}
      />
    </span>
  );
  return (
    <div className="k-bentocard" style={{ ...cardStyle, gridColumn: "span 4" }}>
      <div
        style={{
          ...stageStyle,
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 13px",
            borderBottom: `1px solid ${SCREEN_LINE}`,
            fontFamily: MONO,
            fontSize: 10,
            color: "rgba(236,231,218,.62)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: ACCENT,
              animation: "kb-live 1.8s ease-in-out infinite",
            }}
          />{" "}
          ai-server · docker
        </div>
        <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: 14, padding: "14px 15px" }}>
          {/* gauges */}
          <div style={{ flex: 1, minWidth: 150, display: "flex", flexDirection: "column", gap: 12 }}>
            <div>
              <div style={gaugeLabel}>
                <span>CPU</span>
                <span style={{ color: "#ECE7DA" }}>42%</span>
              </div>
              <div style={gaugeTrack}>
                <div
                  style={{
                    position: "relative",
                    width: "42%",
                    height: "100%",
                    borderRadius: 3,
                    background: ACCENT,
                    overflow: "hidden",
                  }}
                >
                  <div style={sheen} />
                </div>
              </div>
            </div>
            <div>
              <div style={gaugeLabel}>
                <span>RAM</span>
                <span style={{ color: "#ECE7DA" }}>68%</span>
              </div>
              <div style={gaugeTrack}>
                <div
                  style={{
                    position: "relative",
                    width: "68%",
                    height: "100%",
                    borderRadius: 3,
                    background: "#E3B341",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ ...sheen, animationDelay: ".5s" }} />
                </div>
              </div>
            </div>
            <div>
              <div style={gaugeLabel}>
                <span>DISK</span>
                <span style={{ color: "#ECE7DA" }}>31%</span>
              </div>
              <div style={gaugeTrack}>
                <div
                  style={{
                    position: "relative",
                    width: "31%",
                    height: "100%",
                    borderRadius: 3,
                    background: "#8FB07A",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ ...sheen, animationDelay: "1s" }} />
                </div>
              </div>
            </div>
          </div>
          {/* containers */}
          <div style={{ flex: 1, minWidth: 170, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={containerRow}>
              <span>nginx</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 8, color: ACCENT, letterSpacing: ".1em" }}>ON</span>
                {knobOn}
              </span>
            </div>
            <div style={containerRow}>
              <span>postgres</span>
              <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ position: "relative", width: 28, height: 14 }}>
                  <span
                    style={{
                      position: "absolute",
                      right: 34,
                      top: 1,
                      fontSize: 8,
                      letterSpacing: ".1em",
                      color: "rgba(236,231,218,.4)",
                      animation: "kb-pgoff 5s ease-in-out infinite",
                    }}
                  >
                    OFF
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      right: 34,
                      top: 1,
                      fontSize: 8,
                      letterSpacing: ".1em",
                      color: ACCENT,
                      animation: "kb-pgon 5s ease-in-out infinite",
                    }}
                  >
                    ON
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 8,
                      background: "rgba(236,231,218,.14)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 8,
                      background: ACCENT,
                      animation: "kb-pgon 5s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      left: 2,
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#0A0908",
                      zIndex: 2,
                      animation: "kb-pgknob 5s cubic-bezier(.5,0,.2,1) infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 22,
                      height: 22,
                      margin: "-11px 0 0 -11px",
                      borderRadius: "50%",
                      background: ACCENT,
                      zIndex: 1,
                      animation: "kb-tap 5s ease-in-out infinite",
                    }}
                  />
                </span>
              </span>
            </div>
            <div style={containerRow}>
              <span>redis</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 8, color: ACCENT, letterSpacing: ".1em" }}>ON</span>
                {knobOn}
              </span>
            </div>
          </div>
        </div>
      </div>
      <CardText
        large
        maxWidth={480}
        kicker="Docker · Resources"
        title="Docker control center"
        body="Full control over your containers. Monitor resources, watch Docker Compose logs and manage your services with a tap — no complex commands to type."
      />
    </div>
  );
}

/* CARD 2 · MULTI-SESSION SSH TABS (1/3) */
function SshTabsCard() {
  const tabStyle: CSSProperties = {
    position: "relative",
    padding: "10px 11px",
    fontSize: 9.5,
  };
  const tabLine: CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -1,
    height: 2,
    background: ACCENT,
  };
  const hbar = (bg: string, delay?: string): CSSProperties => ({
    width: 4,
    height: "100%",
    background: bg,
    transformOrigin: "bottom",
    animation: "kb-hbar 1.4s ease-in-out infinite",
    animationDelay: delay,
  });
  return (
    <div className="k-bentocard" style={{ ...cardStyle, gridColumn: "span 2" }}>
      <div
        style={{
          ...stageStyle,
          minHeight: 126,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            borderBottom: `1px solid ${SCREEN_LINE}`,
            fontFamily: MONO,
          }}
        >
          <div style={{ ...tabStyle, animation: "kb-tt1 9s ease-in-out infinite" }}>
            vps-server
            <div style={{ ...tabLine, animation: "kb-t1 9s ease-in-out infinite" }} />
          </div>
          <div style={{ ...tabStyle, animation: "kb-tt2 9s ease-in-out infinite" }}>
            agent-logs
            <div style={{ ...tabLine, opacity: 0, animation: "kb-t2 9s ease-in-out infinite" }} />
          </div>
          <div style={{ ...tabStyle, animation: "kb-tt3 9s ease-in-out infinite" }}>
            db-production
            <div style={{ ...tabLine, opacity: 0, animation: "kb-t3 9s ease-in-out infinite" }} />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            minHeight: 96,
            fontFamily: MONO,
            fontSize: 10,
            lineHeight: 1.8,
          }}
        >
          {/* vps-server */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "13px 14px",
              animation: "kb-sp1 9s ease-in-out infinite",
            }}
          >
            <div>
              <span style={{ color: ACCENT }}>›</span>{" "}
              <span style={{ color: "#ECE7DA" }}>ssh vps-server</span>
            </div>
            <div style={{ color: "rgba(236,231,218,.4)" }}>· uptime 14d · load 0.42</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 20, marginTop: 6 }}>
              <span style={hbar(ACCENT)} />
              <span style={hbar(ACCENT, ".15s")} />
              <span style={hbar(ACCENT, ".3s")} />
              <span style={hbar("rgba(236,231,218,.35)", ".45s")} />
              <span style={hbar("rgba(236,231,218,.35)", ".6s")} />
              <span style={hbar("rgba(236,231,218,.35)", ".75s")} />
              <span style={hbar("rgba(236,231,218,.35)", ".9s")} />
            </div>
          </div>
          {/* logs-agente */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "13px 14px",
              opacity: 0,
              animation: "kb-sp2 9s ease-in-out infinite",
            }}
          >
            <div>
              <span style={{ color: "rgba(236,231,218,.35)" }}>⎿</span>{" "}
              <span style={{ color: "rgba(236,231,218,.6)" }}>tail -f agent.log</span>
            </div>
            <div style={{ color: "rgba(236,231,218,.6)" }}>
              POST /run <span style={{ color: "#8FB07A" }}>200</span> · 142ms
            </div>
            <div style={{ display: "flex", alignItems: "center", color: "rgba(236,231,218,.6)" }}>
              GET /status <span style={{ color: "#8FB07A" }}>&nbsp;200</span>
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 12,
                  background: "#ECE7DA",
                  marginLeft: 4,
                  animation: "kblink 1.05s step-end infinite",
                }}
              />
            </div>
          </div>
          {/* db-production */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "13px 14px",
              opacity: 0,
              animation: "kb-sp3 9s ease-in-out infinite",
            }}
          >
            <div>
              <span style={{ color: ACCENT }}>$</span>{" "}
              <span style={{ color: "#ECE7DA" }}>psql prod</span>
            </div>
            <div style={{ color: "rgba(236,231,218,.6)" }}>SELECT * FROM jobs;</div>
            <div style={{ display: "flex", alignItems: "center", color: "rgba(236,231,218,.6)" }}>
              <span style={{ color: "#8FB07A" }}>8 rows</span>&nbsp;· 12ms
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 12,
                  background: "#ECE7DA",
                  marginLeft: 4,
                  animation: "kblink 1.05s step-end infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <CardText
        kicker="SSH · Multi-session"
        title="SSH tabs"
        body="Open several SSH connections at once, rename them, close them and jump between them with a tap — just like tabs in your browser."
      />
    </div>
  );
}

/* CARD 3 · SFTP EXPLORER + EDITOR (1.5/3) */
function SftpCard() {
  return (
    <div className="k-bentocard" style={{ ...cardStyle, gridColumn: "span 3" }}>
      <div style={{ ...stageStyle, minHeight: 150, display: "flex" }}>
        {/* tree */}
        <div
          style={{
            width: "38%",
            borderRight: `1px solid ${SCREEN_LINE}`,
            padding: "12px 10px",
            fontFamily: MONO,
            fontSize: 9.5,
            lineHeight: 2,
            color: "rgba(236,231,218,.55)",
          }}
        >
          <div>▾ /etc</div>
          <div style={{ position: "relative", paddingLeft: 12, borderRadius: 4, color: "#ECE7DA" }}>
            nginx.conf
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 4,
                background: "rgba(139,166,120,.14)",
                zIndex: -1,
                opacity: 0,
                animation: "kb-fb 8s ease-in-out infinite",
              }}
            />
          </div>
          <div style={{ position: "relative", paddingLeft: 12, borderRadius: 4, color: "#ECE7DA" }}>
            app.yml
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 4,
                background: "rgba(139,166,120,.14)",
                zIndex: -1,
                animation: "kb-fa 8s ease-in-out infinite",
              }}
            />
          </div>
          <div style={{ paddingLeft: 12 }}>hosts</div>
          <div>▸ /var</div>
        </div>
        {/* editor */}
        <div
          style={{
            flex: 1,
            position: "relative",
            fontFamily: MONO,
            fontSize: 10,
            lineHeight: 1.9,
          }}
        >
          {/* app.yml */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "12px 13px",
              animation: "kb-fa 8s ease-in-out infinite",
            }}
          >
            <div>
              <span style={{ color: "#7C93C4" }}>server</span>
              <span style={{ color: "rgba(236,231,218,.7)" }}>:</span>
            </div>
            <div>
              &nbsp;&nbsp;<span style={{ color: "#7C93C4" }}>port</span>
              <span style={{ color: "rgba(236,231,218,.7)" }}>:</span>{" "}
              <span style={{ color: "#E3B341" }}>8080</span>
            </div>
            <div>
              &nbsp;&nbsp;<span style={{ color: "#7C93C4" }}>host</span>
              <span style={{ color: "rgba(236,231,218,.7)" }}>:</span>{" "}
              <span style={{ color: "#8FB07A" }}>&apos;0.0.0.0&apos;</span>
            </div>
            <div
              style={{
                borderRadius: 3,
                margin: "0 -3px",
                padding: "0 3px",
                animation: "kb-editflash 8s ease-in-out infinite",
              }}
            >
              &nbsp;&nbsp;<span style={{ color: "#7C93C4" }}>tls</span>
              <span style={{ color: "rgba(236,231,218,.7)" }}>:</span>{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ color: "#C68C7E", animation: "kb-editold 8s ease-in-out infinite" }}>
                  false
                </span>
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#C68C7E",
                    animation: "kb-editnew 8s ease-in-out infinite",
                  }}
                >
                  true
                </span>
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                right: 11,
                bottom: 10,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 8,
                letterSpacing: ".06em",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#9CC085",
                  animation: "kb-savespin 8s ease-in-out infinite",
                }}
              >
                <span
                  style={{
                    width: 9,
                    height: 9,
                    border: "1.5px solid #9CC085",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "kb-spin .9s linear infinite",
                  }}
                />
                Saving · SFTP
              </span>
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  color: "#9CC085",
                  animation: "kb-savedone 8s ease-in-out infinite",
                }}
              >
                <span>✓</span>Saved
              </span>
            </div>
          </div>
          {/* nginx.conf */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: "12px 13px",
              opacity: 0,
              animation: "kb-fb 8s ease-in-out infinite",
            }}
          >
            <div>
              <span style={{ color: "#7C93C4" }}>server</span>{" "}
              <span style={{ color: "rgba(236,231,218,.7)" }}>{"{"}</span>
            </div>
            <div>
              &nbsp;&nbsp;<span style={{ color: "#7C93C4" }}>listen</span>{" "}
              <span style={{ color: "#E3B341" }}>80</span>;
            </div>
            <div>
              &nbsp;&nbsp;<span style={{ color: "#7C93C4" }}>root</span>{" "}
              <span style={{ color: "#8FB07A" }}>/var/www</span>;
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "rgba(236,231,218,.7)" }}>{"}"}</span>
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 12,
                  background: "#ECE7DA",
                  marginLeft: 4,
                  animation: "kblink 1.05s step-end infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <CardText
        kicker="re_editor · SFTP"
        title="SFTP explorer & editor"
        body="Browse your server's file system, open source files and edit them with syntax highlighting and real-time autosave."
      />
    </div>
  );
}

/* CARD 4 · CLIPBOARD → AI AGENTS (1.5/3) */
function ClipboardCard() {
  return (
    <div className="k-bentocard" style={{ ...cardStyle, gridColumn: "span 3" }}>
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          zIndex: 2,
          fontFamily: MONO,
          fontSize: 8,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: ACCENT,
          border: `1px solid ${ACCENT}`,
          borderRadius: 20,
          padding: "4px 10px",
        }}
      >
        For AI agents
      </div>
      <div
        style={{
          ...stageStyle,
          minHeight: 150,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 13px",
            borderBottom: `1px solid ${SCREEN_LINE}`,
            fontFamily: MONO,
            fontSize: 10,
            color: "rgba(236,231,218,.6)",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT }} />{" "}
          agent-logs
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            padding: "13px 14px",
            fontFamily: MONO,
            fontSize: 10,
            lineHeight: 1.8,
          }}
        >
          {/* clipboard source */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "rgba(236,231,218,.42)",
              marginBottom: 4,
            }}
          >
            <svg width="11" height="12" viewBox="0 0 14 15" fill="none">
              <rect x="2" y="2.5" width="10" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.2" />
              <rect x="5" y="1" width="4" height="2.6" rx="1" fill="currentColor" />
            </svg>
            clipboard
          </div>
          {/* travelling pasted image + cursor */}
          <div style={{ position: "absolute", left: 14, top: 30, width: 52, height: 38 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 6,
                overflow: "hidden",
                boxShadow: "0 10px 22px -6px rgba(0,0,0,.65)",
                animation: "kb-clip 7s cubic-bezier(.5,0,.2,1) infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg,${ACCENT},#0A0908)`,
                }}
              />
              <svg
                style={{ position: "absolute", left: 6, bottom: 5 }}
                width="17"
                height="13"
                viewBox="0 0 22 18"
                fill="none"
              >
                <circle cx="6.5" cy="6" r="2.4" fill="rgba(255,255,255,.85)" />
                <path
                  d="M2 16l5.5-6 3.5 3.5L15 8l5 8"
                  stroke="rgba(255,255,255,.85)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <svg
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                animation: "kb-cursor 7s cubic-bezier(.5,0,.2,1) infinite",
              }}
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
            >
              <path
                d="M2 2l10 8-4.5.8L10 16l-2.2 1L5 12l-3 2.5V2Z"
                fill="#ECE7DA"
                stroke="#0A0908"
                strokeWidth="1"
              />
            </svg>
          </div>
          {/* SFTP upload */}
          <div
            style={{
              position: "absolute",
              left: 14,
              right: 14,
              top: 78,
              animation: "kb-upwrap 7s ease-in-out infinite",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 8,
                color: "#9CC085",
                marginBottom: 4,
              }}
            >
              <span>↑ uploading via SFTP</span>
              <span>scr_01.png</span>
            </div>
            <div
              style={{
                height: 4,
                borderRadius: 3,
                background: "rgba(236,231,218,.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 3,
                  background: ACCENT,
                  animation: "kb-progress 7s cubic-bezier(.4,0,.2,1) infinite",
                }}
              />
            </div>
          </div>
          {/* injected path in prompt */}
          <div
            style={{
              position: "absolute",
              left: 14,
              right: 14,
              bottom: 12,
              display: "flex",
              alignItems: "center",
              animation: "kb-promptline 7s ease-in-out infinite",
            }}
          >
            <span style={{ color: ACCENT }}>›</span>&nbsp;
            <span style={{ color: "#ECE7DA" }}>analyze</span>&nbsp;
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                color: "#C68C7E",
                animation: "kb-typepath 7s steps(14) infinite",
              }}
            >
              /tmp/scr_01.png
            </span>
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 12,
                background: "#ECE7DA",
                marginLeft: 3,
                animation: "kblink 1.05s step-end infinite",
              }}
            />
          </div>
        </div>
      </div>
      <CardText
        kicker="Clipboard → Prompt"
        title="Visual copilot"
        body="Paste screenshots from your clipboard; Kammel uploads them over SFTP and drops the file path into the prompt so your agent can read it."
      />
    </div>
  );
}

/* CARD 5 · HARDWARE-GRADE SECURITY (2/3) */
function SecurityCard() {
  const flowDot = (delay?: string): CSSProperties => ({
    position: "absolute",
    top: -1.5,
    left: 0,
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: ACCENT,
    boxShadow: `0 0 6px ${ACCENT}`,
    animation: "kb-flowX 6s linear infinite",
    animationDelay: delay,
  });
  return (
    <div className="k-bentocard" style={{ ...cardStyle, gridColumn: "span 4" }}>
      <div
        style={{
          ...stageStyle,
          minHeight: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(12px,2.4vw,30px)",
          padding: 20,
        }}
      >
        {/* biometric scanner */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div
            style={{
              position: "relative",
              width: 60,
              height: 60,
              borderRadius: 14,
              border: "1px solid rgba(139,166,120,.35)",
              background: "rgba(139,166,120,.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 26 26" fill="none">
              <path
                d="M6 13a7 7 0 0 1 14 0M8.5 14a4.5 4.5 0 0 1 9 0v3M11 15v4M14.5 15v5M6 16v2"
                stroke={ACCENT}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                left: 8,
                right: 8,
                height: 2,
                borderRadius: 2,
                background: ACCENT,
                boxShadow: `0 0 8px ${ACCENT}`,
                animation: "kb-scanline 2s ease-in-out infinite",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 8,
              letterSpacing: ".14em",
              color: "rgba(236,231,218,.5)",
            }}
          >
            BIOMETRICS
          </div>
        </div>
        {/* energy connector */}
        <div style={{ position: "relative", width: 58, height: 2, background: "rgba(139,166,120,.18)" }}>
          <div style={flowDot()} />
          <div style={flowDot("1s")} />
          <div style={flowDot("2s")} />
        </div>
        {/* shield + lock */}
        <div
          style={{
            position: "relative",
            width: 112,
            height: 132,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -12,
              background: `radial-gradient(circle, ${ACCENT}, transparent 66%)`,
              filter: "blur(18px)",
              animation: "kb-secure 6s ease-in-out infinite",
            }}
          />
          <svg
            width="112"
            height="132"
            viewBox="0 0 118 138"
            fill="none"
            style={{
              position: "absolute",
              inset: 0,
              animation: "kb-ringrot 14s linear infinite",
              transformOrigin: "center",
            }}
          >
            <circle
              cx="59"
              cy="66"
              r="56"
              stroke="rgba(139,166,120,.22)"
              strokeWidth="1"
              strokeDasharray="5 9"
            />
          </svg>
          <svg width="112" height="132" viewBox="0 0 118 138" fill="none" style={{ position: "relative" }}>
            <path
              d="M59 6 106 24V64c0 34-22 55-47 68C34 119 12 98 12 64V24L59 6Z"
              fill="rgba(139,166,120,.06)"
              stroke={ACCENT}
              strokeWidth="1.5"
            />
            <path
              d="M59 20 93 33V64c0 26-16 42-34 52-18-10-34-26-34-52V33L59 20Z"
              fill="none"
              stroke="rgba(139,166,120,.28)"
              strokeWidth="1"
            />
          </svg>
          {/* lock */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 44 44"
            fill="none"
            style={{ position: "absolute", animation: "kb-secure 6s ease-in-out infinite" }}
          >
            <path
              d="M13 20v-5a9 9 0 0 1 18 0v5"
              stroke={ACCENT}
              strokeWidth="3"
              fill="none"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center bottom",
                animation: "kb-shackle 6s cubic-bezier(.5,0,.2,1) infinite",
              }}
            />
            <rect x="11" y="20" width="22" height="17" rx="3.5" fill={ACCENT} />
            <circle cx="22" cy="27" r="2.6" fill="#0A0908" />
            <rect x="20.8" y="28.5" width="2.4" height="5" rx="1.2" fill="#0A0908" />
          </svg>
          {/* validado badge */}
          <div
            style={{
              position: "absolute",
              bottom: -6,
              left: "50%",
              transform: "translateX(-50%)",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 9px",
              borderRadius: 20,
              background: "rgba(143,176,122,.16)",
              border: "1px solid rgba(143,176,122,.45)",
              fontFamily: MONO,
              fontSize: 8,
              letterSpacing: ".12em",
              color: "#9CC085",
              whiteSpace: "nowrap",
              animation: "kb-badge 6s ease-in-out infinite",
            }}
          >
            ✓ VERIFIED
          </div>
        </div>
      </div>
      <CardText
        large
        maxWidth={460}
        kicker="Android Keystore · libsecret"
        title="Hardware-grade security"
        body="Your keys and secrets, always safe. Passwords and SSH keys are stored encrypted in Android's secure hardware keystore, never in plain text."
      />
    </div>
  );
}

/* CARD 6 · BUILT-IN VIEWERS (1/3) */
function ViewersCard() {
  const chipStyle: CSSProperties = {
    position: "relative",
    overflow: "hidden",
    fontFamily: MONO,
    fontSize: 8,
    letterSpacing: ".1em",
    fontWeight: 700,
    borderRadius: 5,
    padding: "3px 7px",
  };
  const previewStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: 8,
    border: `1px solid ${SCREEN_LINE}`,
    background: "rgba(236,231,218,.02)",
    padding: "11px 12px",
  };
  const lineBar = (width: string, mb: number): CSSProperties => ({
    height: 3,
    width,
    borderRadius: 2,
    background: "rgba(236,231,218,.16)",
    marginBottom: mb,
  });
  const cell = (bg: string): CSSProperties => ({
    height: 11,
    borderRadius: 2,
    background: bg,
  });
  return (
    <div className="k-bentocard" style={{ ...cardStyle, gridColumn: "span 2" }}>
      <div
        style={{
          ...stageStyle,
          minHeight: 126,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* format chips (active cycles) */}
        <div style={{ display: "flex", gap: 7, padding: "12px 13px 0" }}>
          <span style={{ ...chipStyle, border: "1px solid rgba(217,119,87,.4)" }}>
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(217,119,87,.22)",
                animation: "kb-t1 9s ease-in-out infinite",
              }}
            />
            <span style={{ position: "relative", color: "#D97757" }}>PDF</span>
          </span>
          <span style={{ ...chipStyle, border: "1px solid rgba(236,231,218,.24)" }}>
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(236,231,218,.16)",
                opacity: 0,
                animation: "kb-t2 9s ease-in-out infinite",
              }}
            />
            <span style={{ position: "relative", color: SCREEN_TEXT }}>MD</span>
          </span>
          <span style={{ ...chipStyle, border: "1px solid rgba(143,176,122,.4)" }}>
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(143,176,122,.2)",
                opacity: 0,
                animation: "kb-t3 9s ease-in-out infinite",
              }}
            />
            <span style={{ position: "relative", color: "#8FB07A" }}>XLS</span>
          </span>
        </div>
        {/* crossfading previews */}
        <div style={{ flex: 1, position: "relative", margin: "11px 13px 13px" }}>
          {/* PDF */}
          <div style={{ ...previewStyle, animation: "kb-sp1 9s ease-in-out infinite" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D97757" }} />
              <span style={{ fontFamily: MONO, fontSize: 8, color: "rgba(236,231,218,.6)" }}>
                report.pdf
              </span>
            </div>
            <div style={lineBar("100%", 5)} />
            <div style={lineBar("78%", 7)} />
            <div
              style={{
                height: 16,
                width: "100%",
                borderRadius: 3,
                background: "rgba(217,119,87,.14)",
                border: "1px solid rgba(217,119,87,.3)",
              }}
            />
          </div>
          {/* Markdown */}
          <div
            style={{
              ...previewStyle,
              fontFamily: ARCHIVO,
              opacity: 0,
              animation: "kb-sp2 9s ease-in-out infinite",
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 12, color: "#ECE7DA", marginBottom: 6 }}>
              # Readme
            </div>
            <div style={lineBar("100%", 5)} />
            <div style={lineBar("82%", 8)} />
            <div
              style={{
                borderRadius: 5,
                background: "rgba(139,166,120,.1)",
                border: "1px solid rgba(139,166,120,.24)",
                padding: "6px 8px",
                fontFamily: MONO,
                fontSize: 8,
                color: "#9CC085",
              }}
            >
              $ npm run build
            </div>
          </div>
          {/* Spreadsheet */}
          <div
            style={{
              ...previewStyle,
              padding: "10px 11px",
              opacity: 0,
              animation: "kb-sp3 9s ease-in-out infinite",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>
              <div style={cell("rgba(143,176,122,.3)")} />
              <div style={cell("rgba(143,176,122,.3)")} />
              <div style={cell("rgba(143,176,122,.3)")} />
              <div style={cell("rgba(143,176,122,.3)")} />
              <div style={cell("rgba(236,231,218,.1)")} />
              <div style={cell("rgba(236,231,218,.1)")} />
              <div style={cell("rgba(139,166,120,.18)")} />
              <div style={cell("rgba(236,231,218,.1)")} />
              <div style={cell("rgba(236,231,218,.1)")} />
              <div style={cell("rgba(139,166,120,.18)")} />
              <div style={cell("rgba(236,231,218,.1)")} />
              <div style={cell("rgba(236,231,218,.1)")} />
            </div>
          </div>
        </div>
      </div>
      <CardText
        kicker="Native preview"
        title="Built-in viewers"
        body="Read PDF reports, project Markdown or Office documents without ever leaving your workflow."
      />
    </div>
  );
}

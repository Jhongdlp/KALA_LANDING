"use client";

import { CSSProperties, useEffect, useState } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";
import { REPO_URL } from "@/lib/github";

const LINE1 = "INFRASTRUCTURE";
const LINE2 = "ANYWHERE";

const headlineStyle: CSSProperties = {
  fontFamily: ANTON,
  fontWeight: 400,
  textTransform: "uppercase",
  fontSize: "clamp(48px,14.6vw,340px)",
  lineHeight: 0.86,
  letterSpacing: "-.01em",
  color: "var(--k-headline)",
  willChange: "transform",
  pointerEvents: "none",
};

function HeadlineLines() {
  return (
    <>
      <span className="lmask">
        <span style={{ transitionDelay: ".62s" }}>{LINE1}</span>
      </span>
      <span className="lmask">
        <span style={{ transitionDelay: ".74s" }}>
          {LINE2}
          <span style={{ color: ACCENT }}>.</span>
        </span>
      </span>
    </>
  );
}

const keyStyle: CSSProperties = {
  textAlign: "center",
  padding: "8px 0",
  border: "1px solid rgba(236,231,218,.14)",
  borderRadius: 5,
  fontFamily: MONO,
  fontSize: 8,
  letterSpacing: ".06em",
  color: "rgba(236,231,218,.72)",
};

const arrowKeyStyle: CSSProperties = {
  textAlign: "center",
  padding: "7px 0",
  border: "1px solid rgba(236,231,218,.14)",
  borderRadius: 5,
  fontSize: 9,
};

const tabItemStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
  paddingBottom: 10,
};

const tabLabelStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 8,
  letterSpacing: ".13em",
};

export default function KammelHero() {
  const [tab, setTab] = useState<"conexiones" | "consola">("consola");

  // Tab cycle: consola → conexiones (3.2s) → consola (9s), loop every 12s
  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    const startSequence = () => {
      timers.push(setTimeout(() => setTab("conexiones"), 3200));
      timers.push(setTimeout(() => setTab("consola"), 9000));
      timers.push(
        setTimeout(() => {
          timers = [];
          startSequence();
        }, 12000)
      );
    };
    startSequence();
    return () => timers.forEach(clearTimeout);
  }, []);

  // Scroll parallax on the phone (desktop only)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const mobile = window.innerWidth <= 860;
        const p = document.getElementById("kammel-phone");
        if (p) p.style.transform = mobile ? "" : `translateY(${-y * 0.07}px)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="k-hero"
      style={{
        position: "relative",
        padding: "clamp(30px,6vh,70px) clamp(16px,2.4vw,44px) 90px",
        minHeight: "calc(100vh - 90px)",
      }}
    >
      <div style={{ position: "relative", maxWidth: "none" }}>
        <h1
          id="kammel-headline"
          className="k-headline"
          style={{ ...headlineStyle, position: "relative", zIndex: 10 }}
        >
          <HeadlineLines />
        </h1>
        {/* WEAVE: duplicate top line rendered IN FRONT of the phone so the type drapes over its shoulders */}
        <h1
          aria-hidden="true"
          id="kammel-headline-weave"
          style={{
            ...headlineStyle,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 30,
            clipPath: "inset(0 0 50% 0)",
          }}
        >
          <HeadlineLines />
        </h1>

        {/* content row: text left · product rises into headline right */}
        <div
          className="k-row"
          style={{ position: "relative", marginTop: "clamp(22px,3.4vh,42px)" }}
        >
          <div
            className="k-textcol"
            style={{ position: "relative", zIndex: 20, maxWidth: 460 }}
          >
            <p
              className="reveal"
              style={{
                transitionDelay: ".95s",
                marginTop: "clamp(24px,3.4vh,40px)",
                maxWidth: 440,
                fontSize: "clamp(15px,1.15vw,17px)",
                lineHeight: 1.62,
                color: "var(--k-paratext)",
                fontWeight: 400,
              }}
            >
              An open-source, mobile-first workspace for developers. SSH client,
              terminal, file explorer and code editor — one Flutter app for
              Android and Linux.
            </p>

            <div
              className="reveal k-cta"
              style={{
                transitionDelay: "1.05s",
                marginTop: "clamp(28px,3.6vh,42px)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <a
                className="k-ctamain"
                href="#download"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: MONO,
                  fontSize: 12,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--k-btntext)",
                  background: "var(--k-btnbg)",
                  padding: "15px 26px",
                  borderRadius: 3,
                  transition:
                    "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
                }}
              >
                Get KAMMEL SSH <span style={{ fontSize: 13 }}>→</span>
              </a>
              <a
                className="k-ctasec"
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: MONO,
                  fontSize: 12,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--k-sectext)",
                  border: "1px solid var(--k-secborder)",
                  padding: "15px 26px",
                  borderRadius: 3,
                  transition: "border-color .35s ease, color .35s ease",
                }}
              >
                View source
              </a>
            </div>

            <div
              className="reveal k-stats"
              style={{
                transitionDelay: "1.15s",
                marginTop: "clamp(40px,6vh,64px)",
                display: "flex",
                gap: 40,
                fontFamily: MONO,
                fontSize: 10.5,
                letterSpacing: ".24em",
                textTransform: "uppercase",
                color: "var(--k-statstext)",
              }}
            >
              <span>Open source</span>
              <span>Android / Linux</span>
              <span>Flutter</span>
            </div>
          </div>

          {/* RIGHT: product rises into the headline's open right side */}
          <div
            className="reveal k-phonewrap"
            style={{
              transitionDelay: "1.2s",
              position: "absolute",
              top: "clamp(-300px,-19vw,-140px)",
              right: "clamp(40px,8vw,170px)",
              display: "flex",
              justifyContent: "flex-end",
              zIndex: 31,
            }}
          >
            <div
              id="kammel-phone"
              className="k-phone"
              style={{
                position: "relative",
                width: "clamp(258px,24vw,316px)",
                willChange: "transform",
              }}
            >
              {/* ambient screen glow bleeding onto the surrounding type */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "-16% -20% -10%",
                  zIndex: -1,
                  background: `radial-gradient(58% 46% at 50% 40%, ${ACCENT}, transparent 70%)`,
                  opacity: 0.24,
                  filter: "blur(26px)",
                  pointerEvents: "none",
                }}
              />
              {/* side buttons on the aluminium rail */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: -2.5,
                  top: "23%",
                  width: 3,
                  height: 26,
                  borderRadius: "3px 0 0 3px",
                  background: "linear-gradient(180deg,#4a463d,#141210)",
                  boxShadow: "-1px 0 2px rgba(0,0,0,.55)",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: -2.5,
                  top: "31%",
                  width: 3,
                  height: 46,
                  borderRadius: "3px 0 0 3px",
                  background: "linear-gradient(180deg,#4a463d,#141210)",
                  boxShadow: "-1px 0 2px rgba(0,0,0,.55)",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: -2.5,
                  top: "27%",
                  width: 3,
                  height: 58,
                  borderRadius: "0 3px 3px 0",
                  background: "linear-gradient(180deg,#4a463d,#141210)",
                  boxShadow: "1px 0 2px rgba(0,0,0,.55)",
                }}
              />
              {/* aluminium rail frame */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 48,
                  padding: 2.5,
                  background:
                    "linear-gradient(145deg,#4a453b 0%,#17140f 22%,#0a0908 50%,#1d1a15 74%,#4f4a3f 100%)",
                  boxShadow:
                    "0 64px 120px -42px rgba(0,0,0,.92), 0 4px 10px rgba(0,0,0,.55)",
                }}
              >
                {/* black bezel */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: 45,
                    padding: 9,
                    background: "#050403",
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,255,255,.04), inset 0 1px 1px rgba(255,255,255,.06)",
                  }}
                >
                  <div
                    data-tab={tab}
                    style={{
                      position: "relative",
                      borderRadius: 36,
                      overflow: "hidden",
                      background: "#0B0A08",
                      aspectRatio: "720/1560",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow:
                        "inset 0 0 22px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255,.05)",
                    }}
                  >
                    {/* punch-hole camera */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: 11,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "#000",
                        zIndex: 8,
                        boxShadow:
                          "0 0 0 1px rgba(0,0,0,.6), inset 0 0 0 1px rgba(255,255,255,.05)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 1.6,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle at 34% 28%, #22343d, #050b0d 70%)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 2,
                          left: 2.4,
                          width: 2,
                          height: 2,
                          borderRadius: "50%",
                          background: "rgba(160,200,220,.6)",
                        }}
                      />
                    </div>
                    {/* glass glare */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 7,
                        pointerEvents: "none",
                        background:
                          "linear-gradient(128deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 74%, rgba(255,255,255,.035) 100%)",
                      }}
                    />
                    {/* status bar */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 20px 8px",
                        fontFamily: MONO,
                        fontSize: 11,
                        color: "#ECE7DA",
                      }}
                    >
                      <span>11:19</span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          color: "rgba(236,231,218,.85)",
                        }}
                      >
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                          <path
                            d="M2 3 6.5 7 11 3M6.5 7v3M6.5 1v2"
                            stroke="currentColor"
                            strokeWidth="1.1"
                          />
                        </svg>
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                          <rect x="1" y="6" width="2" height="4" fill="currentColor" />
                          <rect x="4.5" y="4" width="2" height="6" fill="currentColor" />
                          <rect x="8" y="2" width="2" height="8" fill="currentColor" />
                          <rect
                            x="11.5"
                            y="0"
                            width="2"
                            height="10"
                            fill="currentColor"
                            opacity=".35"
                          />
                        </svg>
                        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                          <div
                            style={{
                              width: 19,
                              height: 10,
                              border: "1px solid rgba(236,231,218,.7)",
                              borderRadius: 2,
                              padding: 1.5,
                            }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                background: "#ECE7DA",
                                borderRadius: 1,
                              }}
                            />
                          </div>
                          <span style={{ fontSize: 9 }}>100</span>
                        </div>
                      </div>
                    </div>
                    {/* tab bar */}
                    <div
                      style={{
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: "repeat(5,1fr)",
                        padding: "6px 8px 0",
                        borderBottom: "1px solid rgba(236,231,218,.07)",
                      }}
                    >
                      <div className="titem t-conex" style={tabItemStyle}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
                          <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
                          <circle cx="5" cy="5" r="1" fill="currentColor" />
                          <circle cx="5" cy="13" r="1" fill="currentColor" />
                        </svg>
                        <span style={tabLabelStyle}>CONEXIONES</span>
                      </div>
                      <div className="titem t-consola" style={tabItemStyle}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="2" y="3" width="14" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
                          <path
                            d="M5.5 7 8 9l-2.5 2M9.5 11h3"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span style={tabLabelStyle}>CONSOLA</span>
                      </div>
                      <div style={{ ...tabItemStyle, color: "rgba(236,231,218,.32)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path
                            d="M2 5.5C2 4.7 2.7 4 3.5 4H7l2 2h5.5c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-11C2.7 15 2 14.3 2 13.5v-8Z"
                            stroke="currentColor"
                            strokeWidth="1.3"
                          />
                        </svg>
                        <span style={tabLabelStyle}>ARCHIVOS</span>
                      </div>
                      <div style={{ ...tabItemStyle, color: "rgba(236,231,218,.32)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path
                            d="M6.5 5 3 9l3.5 4M11.5 5 15 9l-3.5 4"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span style={tabLabelStyle}>EDITOR</span>
                      </div>
                      <div style={{ ...tabItemStyle, color: "rgba(236,231,218,.32)" }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path
                            d="M3 5h12M3 9h12M3 13h12"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span style={tabLabelStyle}>MENÚ</span>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 8,
                          right: 8,
                          bottom: 0,
                          pointerEvents: "none",
                        }}
                      >
                        <div className="tabu" style={{ width: "20%" }}>
                          <div
                            style={{
                              width: "64%",
                              height: 2,
                              margin: "0 auto",
                              background: "#ECE7DA",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* body */}
                    <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                      <ConexionesScreen />
                      <ConsolaScreen />
                    </div>
                    {/* home indicator */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 9,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 96,
                        height: 4,
                        borderRadius: 3,
                        background: "rgba(236,231,218,.35)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <TerminalChip />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConexionesScreen() {
  return (
    <div className="scr scr-conex" style={{ padding: "22px 15px 18px" }}>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 9,
          letterSpacing: ".42em",
          color: "rgba(236,231,218,.42)",
          marginBottom: 5,
        }}
      >
        KAMMEL SSH
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontFamily: ANTON,
            fontWeight: 400,
            fontSize: 33,
            lineHeight: 0.9,
            letterSpacing: ".005em",
            color: "#F2EEE2",
          }}
        >
          WORKSPACE
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "transparent",
            color: "#ECE7DA",
            border: "1px solid rgba(236,231,218,.28)",
            fontFamily: MONO,
            fontSize: 9,
            letterSpacing: ".14em",
            padding: "8px 11px",
            borderRadius: 5,
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 12, lineHeight: 1 }}>+</span> NUEVA
        </div>
      </div>
      <div
        style={{
          background: "rgba(236,231,218,.04)",
          border: "1px solid rgba(236,231,218,.07)",
          borderRadius: 8,
          padding: "11px 13px",
          fontFamily: MONO,
          fontSize: 8.5,
          letterSpacing: ".16em",
          color: "rgba(236,231,218,.42)",
          marginBottom: 11,
        }}
      >
        SERVIDORES REMOTOS · SSH
      </div>
      <div
        style={{
          background: "#E9E4D6",
          borderRadius: 9,
          padding: "13px 13px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            flexShrink: 0,
            borderRadius: "50%",
            background: "#0A0908",
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: ARCHIVO,
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: ".02em",
              color: "#0A0908",
            }}
          >
            SERVER IA
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 9,
              color: "rgba(10,9,8,.62)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            jguadalupeandrade@198.51.100.7:22
          </div>
        </div>
        <div
          style={{
            fontFamily: MONO,
            color: "rgba(10,9,8,.6)",
            letterSpacing: ".05em",
            fontSize: 14,
          }}
        >
          ···
        </div>
      </div>
    </div>
  );
}

function ConsolaScreen() {
  return (
    <div
      className="scr scr-consola"
      style={{ padding: 0, display: "flex", flexDirection: "column" }}
    >
      {/* toolbar SERVER IA */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          borderBottom: "1px solid rgba(236,231,218,.09)",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 12px",
            borderRight: "1px solid rgba(236,231,218,.09)",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
            <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
            <circle cx="5" cy="5" r="1" fill="#ECE7DA" />
            <circle cx="5" cy="13" r="1" fill="#ECE7DA" />
          </svg>
          <span
            style={{
              fontFamily: ARCHIVO,
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: ".02em",
              color: "#F2EEE2",
            }}
          >
            SERVER&nbsp;IA
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: "rgba(236,231,218,.7)",
              border: "1px solid rgba(236,231,218,.18)",
              borderRadius: 3,
              padding: "1px 6px",
            }}
          >
            1
          </span>
          <span style={{ color: "rgba(236,231,218,.45)", fontSize: 9 }}>▾</span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 14,
            padding: "0 13px",
            color: "rgba(236,231,218,.55)",
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: 11 }}>A−</span>
          <span style={{ fontFamily: MONO, fontSize: 13 }}>A+</span>
          <svg width="16" height="12" viewBox="0 0 20 15" fill="none">
            <rect x="1" y="1" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M4 5h1M7 5h1M10 5h1M13 5h1M4 8h1M13 8h1M7 11h6"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 2H2v4M10 2h4v4M6 14H2v-4M10 14h4v-4"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {/* scrollable session */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "12px 12px 0",
          fontFamily: MONO,
        }}
      >
        {/* welcome box */}
        <div
          style={{
            position: "relative",
            border: "1px solid #B57F71",
            borderRadius: 3,
            padding: "11px 10px 9px",
            marginBottom: 11,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -6,
              left: 12,
              background: "#0B0A08",
              padding: "0 6px",
              fontSize: 7.5,
              color: "#C68C7E",
            }}
          >
            Claude Code <span style={{ color: "rgba(198,140,126,.7)" }}>v2.1.207</span>
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                color: "#C68C7E",
                fontSize: 7,
                lineHeight: 1.5,
              }}
            >
              <div style={{ marginBottom: 6 }}>Welcome back kammel!</div>
              <div style={{ display: "flex", justifyContent: "center", margin: "5px 0 9px" }}>
                <div style={{ transformOrigin: "50% 100%", animation: "cc-rock 7s ease-in-out infinite" }}>
                  <div style={{ animation: "cc-hop 4.2s ease-in-out infinite" }}>
                    <div
                      style={{
                        transformOrigin: "50% 100%",
                        animation: "cc-squash 4.2s ease-in-out infinite",
                      }}
                    >
                      <svg
                        viewBox="0 0 52 40"
                        width="50"
                        height="39"
                        style={{
                          display: "block",
                          filter: "drop-shadow(0 2px 3px rgba(0,0,0,.45))",
                        }}
                      >
                        <rect x="3" y="14" width="6" height="9" fill="#C15F3C" />
                        <rect x="43" y="14" width="6" height="9" fill="#C15F3C" />
                        <rect x="8" y="3" width="36" height="27" rx="2.5" fill="#C15F3C" />
                        <rect x="11" y="5.5" width="30" height="6" rx="2" fill="#CE6E4B" opacity=".5" />
                        <g
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "center",
                            animation: "cc-legs 4.2s ease-in-out infinite",
                          }}
                        >
                          <rect x="8" y="29" width="8" height="7" fill="#C15F3C" />
                          <rect x="22" y="29" width="8" height="7" fill="#C15F3C" />
                          <rect x="36" y="29" width="8" height="7" fill="#C15F3C" />
                        </g>
                        <g
                          style={{
                            transformBox: "fill-box",
                            transformOrigin: "center",
                            animation: "cc-wink 6s ease-in-out infinite",
                          }}
                        >
                          <path
                            d="M17 12 L23 18 L17 24"
                            fill="none"
                            stroke="#241009"
                            strokeWidth="3.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M35 12 L29 18 L35 24"
                            fill="none"
                            stroke="#241009"
                            strokeWidth="3.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "rgba(198,140,126,.85)" }}>Haiku 4.5 · Claude Pro ·</div>
              <div style={{ color: "rgba(198,140,126,.6)", wordBreak: "break-all" }}>
                kammel@gmail.com&apos;s Organization
              </div>
              <div style={{ color: "rgba(198,140,126,.6)" }}>/home/kammel</div>
            </div>
            <div style={{ width: 1, background: "#B57F71", flexShrink: 0 }} />
            <div style={{ flex: 1, color: "#C68C7E", fontSize: 7, lineHeight: 1.5 }}>
              <div style={{ color: "#D19A8C" }}>Tips for getting started</div>
              <div style={{ color: "rgba(216,210,196,.72)" }}>Run /init to create a …</div>
              <div style={{ color: "rgba(216,210,196,.72)" }}>Note: You have launche…</div>
              <div style={{ borderTop: "1px solid rgba(181,127,113,.5)", margin: "5px 0" }} />
              <div style={{ color: "#D19A8C" }}>What&apos;s new</div>
              <div style={{ color: "rgba(216,210,196,.72)" }}>Auto mode is now avail…</div>
              <div style={{ color: "rgba(216,210,196,.72)" }}>Fixed the terminal fre…</div>
              <div style={{ color: "rgba(216,210,196,.72)" }}>Fixed remote managed s…</div>
              <div style={{ color: "rgba(198,140,126,.85)", fontStyle: "italic" }}>
                /release-notes for more
              </div>
            </div>
          </div>
        </div>
        {/* extended notice */}
        <div
          style={{
            position: "relative",
            paddingLeft: 9,
            fontSize: 7,
            lineHeight: 1.6,
            color: "rgba(216,210,196,.78)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 2,
              bottom: 2,
              width: 1,
              background: "#B57F71",
            }}
          />
          <div style={{ color: "#C68C7E", marginBottom: 3 }}>Extended through July 19</div>
          <div>
            We&apos;re extending Claude Fable 5 access on all paid plans, as well as
            keeping Claude Code&apos;s weekly rate limits 50% higher, through July 19.
          </div>
          <div style={{ height: 5 }} />
          <div>
            As before, you can use up to half of your weekly usage limit on Fable 5.
            After that, you can keep using Fable 5 with usage credits, or switch to
            another model to keep working within your remaining limits.
          </div>
          <div style={{ height: 5 }} />
          <div>
            More details here:{" "}
            <span style={{ color: "#C68C7E" }}>
              https://support.claude.com/en/articles/15424964-claude-fable-5-promotional-access
            </span>
          </div>
          <div style={{ color: "rgba(216,210,196,.5)" }}>+1 more · /status</div>
        </div>
      </div>
      {/* input */}
      <div style={{ flexShrink: 0, padding: "0 12px" }}>
        <div
          style={{
            borderTop: "1px solid rgba(236,231,218,.14)",
            padding: "9px 2px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontFamily: MONO,
            fontSize: 8.5,
          }}
        >
          <span style={{ color: "#C68C7E" }}>›</span>
          <span
            style={{
              display: "inline-block",
              width: 5,
              height: 11,
              background: "#ECE7DA",
              animation: "kblink 1.05s step-end infinite",
            }}
          />
          <span style={{ color: "rgba(216,210,196,.45)" }}>ry &quot;fix typecheck errors&quot;</span>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(236,231,218,.14)",
            padding: "7px 2px 9px",
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontFamily: MONO,
            fontSize: 7,
          }}
        >
          <span style={{ display: "inline-flex", gap: 1 }}>
            <span style={{ width: 4, height: 4, background: "#C68C7E" }} />
            <span style={{ width: 4, height: 4, background: "#C68C7E" }} />
          </span>
          <span style={{ color: "#C68C7E" }}>bypass permissions on</span>
          <span style={{ color: "rgba(216,210,196,.42)" }}>
            (shift+tab to cycle) · ← for agents
          </span>
        </div>
      </div>
      {/* keyboard bar */}
      <div
        style={{
          flexShrink: 0,
          padding: "8px 8px 14px",
          borderTop: "1px solid rgba(236,231,218,.08)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 5 }}>
          <div style={keyStyle}>CTRL</div>
          <div style={keyStyle}>SHIFT</div>
          <div style={keyStyle}>ESC</div>
          <div style={keyStyle}>TAB</div>
          <div style={keyStyle}>ALT</div>
          <div
            style={{
              textAlign: "center",
              padding: "8px 0",
              borderRadius: 5,
              fontFamily: MONO,
              fontSize: 8,
              letterSpacing: ".06em",
              color: "#0A0908",
              background: "#E9E4D6",
              fontWeight: 700,
            }}
          >
            ^C
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,1fr)",
            gap: 5,
            color: "rgba(236,231,218,.7)",
          }}
        >
          <div style={arrowKeyStyle}>↑</div>
          <div style={arrowKeyStyle}>↓</div>
          <div style={arrowKeyStyle}>←</div>
          <div style={arrowKeyStyle}>→</div>
          <div style={{ ...arrowKeyStyle, color: "#C68C7E" }}>⚡</div>
          <div style={arrowKeyStyle}>⌥</div>
          <div style={arrowKeyStyle}>📎</div>
          <div style={arrowKeyStyle}>🔗</div>
        </div>
      </div>
    </div>
  );
}

function TerminalChip() {
  return (
    <div
      className="reveal k-chip"
      style={{
        transitionDelay: "1.55s",
        position: "absolute",
        left: -56,
        bottom: 74,
        width: 224,
        borderRadius: 16,
        animation: "cc-drift 7s ease-in-out infinite",
        willChange: "transform",
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 16,
          padding: "14px 15px",
          background: "linear-gradient(150deg, var(--k-chipbg1), var(--k-chipbg2))",
          backdropFilter: "blur(26px) saturate(180%) brightness(1.06)",
          WebkitBackdropFilter: "blur(26px) saturate(180%) brightness(1.06)",
          border: "1px solid rgba(240,238,226,.14)",
          boxShadow:
            "0 26px 54px -22px var(--k-chipshadow), inset 0 1px 0 rgba(255,255,255,.16), inset 0 0 0 1px rgba(255,255,255,.05), inset 1px 0 0 rgba(255,255,255,.06), inset -1px -1px 0 rgba(0,0,0,.14), inset 0 -18px 30px -22px rgba(0,0,0,.4)",
        }}
      >
        {/* accent liquid glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -24,
            left: -14,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${ACCENT}, transparent 68%)`,
            filter: "blur(18px)",
            opacity: 0.5,
            pointerEvents: "none",
            animation: "cc-glow 6.5s ease-in-out infinite",
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9 }}>
            <div style={{ position: "relative", width: 6, height: 6, flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: ACCENT,
                  animation: "kpulse 2.6s cubic-bezier(.16,1,.3,1) infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: ACCENT,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 8.5,
                letterSpacing: ".18em",
                color: "rgba(245,242,232,.7)",
              }}
            >
              CONNECTED · 198.51.100.7
            </span>
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              lineHeight: 1.7,
              color: "rgba(245,242,232,.82)",
            }}
          >
            <div>
              <span style={{ color: ACCENT }}>$</span> ssh server-ia
            </div>
            <div style={{ color: "rgba(245,242,232,.5)" }}>~/ai · running infer.py</div>
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <span style={{ color: ACCENT }}>›</span> tail -f logs
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 13,
                  background: "#F5F2E8",
                  marginLeft: 3,
                  animation: "kblink 1.05s step-end infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

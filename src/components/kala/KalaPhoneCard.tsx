import { CSSProperties } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";

export type PhoneCardVariant =
  | "workspace"
  | "consola"
  | "antigravity"
  | "gemini"
  | "docker"
  | "sftp"
  | "editor"
  | "menu";

const tabItemStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3.5,
  paddingBottom: 7,
};

const tabLabelStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 5.5,
  letterSpacing: ".07em",
};

const screenBase: CSSProperties = {
  position: "absolute",
  inset: 0,
  flexDirection: "column",
};

const cliToolbar: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: 12,
  borderBottom: "1px solid rgba(236,231,218,.09)",
};

const cliBadge: CSSProperties = {
  fontSize: 10,
  color: "rgba(236,231,218,.7)",
  border: "1px solid rgba(236,231,218,.18)",
  borderRadius: 3,
  padding: "1px 6px",
};

const cliTitle: CSSProperties = {
  fontFamily: ARCHIVO,
  fontWeight: 800,
  fontSize: 12,
  color: "#F2EEE2",
};

const cliInput: CSSProperties = {
  borderTop: "1px solid rgba(236,231,218,.14)",
  padding: "9px 2px",
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: 8.5,
};

const cursorStyle: CSSProperties = {
  display: "inline-block",
  width: 5,
  height: 11,
  background: "#ECE7DA",
  animation: "kpc-blink 1.05s step-end infinite",
};

export default function KalaPhoneCard({ variant, hideFrame = false }: { variant: PhoneCardVariant; hideFrame?: boolean }) {
  let activeTab = 0;
  if (variant === "workspace") activeTab = 0;
  else if (["consola", "antigravity", "gemini", "docker"].includes(variant)) activeTab = 1;
  else if (variant === "sftp") activeTab = 2;
  else if (variant === "editor") activeTab = 3;
  else if (variant === "menu") activeTab = 4;

  const getTabColor = (index: number) => {
    if (index === activeTab) {
      return (variant === "editor" || variant === "menu") ? "#F97A86" : "#ECE7DA";
    }
    return "rgba(236, 231, 218, 0.3)";
  };

  const underlineColor = (variant === "editor" || variant === "menu") ? "#F97A86" : "#ECE7DA";

  const uiLayer = (
    <div
      className="kpc-screen"
      style={{
        position: "relative",
        borderRadius: hideFrame ? 0 : 33,
        overflow: "hidden",
        background: "#0B0A08",
        display: "flex",
        flexDirection: "column",
        aspectRatio: "720/1560",
        boxShadow: hideFrame ? "none" : "inset 0 0 22px rgba(0,0,0,.7)",
        border: hideFrame ? "none" : "1.2px solid rgba(255, 255, 255, 0.045)",
        width: hideFrame ? "100%" : undefined,
        height: hideFrame ? "100%" : undefined,
      }}
    >
      {/* dynamic island / pill notch */}
      {!hideFrame && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 7,
            left: "50%",
            transform: "translateX(-50%)",
            width: 48,
            height: 12,
            borderRadius: 10,
            background: "#000000",
            zIndex: 100,
            boxShadow: "0 1px 2px rgba(0,0,0,.6), inset 0 -0.5px 1px rgba(255,255,255,.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 6px",
          }}
        >
          {/* camera lens reflection */}
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #2a3d45, #0a1012 80%)",
              boxShadow: "inset 0 0.5px 0.5px rgba(255,255,255,.2)",
            }}
          />
          {/* proximity sensor reflection */}
          <div
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #182226, #050809 80%)",
              opacity: 0.6,
            }}
          />
        </div>
      )}
      {!hideFrame && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 7,
            pointerEvents: "none",
            background:
              "linear-gradient(128deg, rgba(255,255,255,.07) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 74%, rgba(255,255,255,.035) 100%)",
          }}
        />
      )}
      {/* screen UI layer */}
      <div
        className="kpc-dom-content"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "74.0741%",
          height: "74.0741%",
          transform: "scale(1.35)",
          transformOrigin: "top left",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px 4px",
            fontFamily: MONO,
            fontSize: 7.5,
            color: "#ECE7DA",
          }}
        >
          <span>11:19</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              color: "rgba(236,231,218,.85)",
            }}
          >
            <svg width="9.5" height="8" viewBox="0 0 13 11" fill="none">
              <path d="M2 3 6.5 7 11 3M6.5 7v3M6.5 1v2" stroke="currentColor" strokeWidth="1.1" />
            </svg>
            <svg width="11" height="8" viewBox="0 0 15 11" fill="none">
              <rect x="1" y="6" width="2" height="4" fill="currentColor" />
              <rect x="4.5" y="4" width="2" height="6" fill="currentColor" />
              <rect x="8" y="2" width="2" height="8" fill="currentColor" />
              <rect x="11.5" y="0" width="2" height="10" fill="currentColor" opacity=".35" />
            </svg>
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              <div
                style={{
                  width: 13,
                  height: 7,
                  border: "1px solid rgba(236,231,218,.7)",
                  borderRadius: 1.5,
                  padding: 0.8,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#ECE7DA",
                    borderRadius: 0.6,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* tab bar */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            padding: "4px 0 0",
            borderBottom: "1px solid rgba(236,231,218,.07)",
          }}
        >
          <div className="kpc-tab kpc-t0" style={{ ...tabItemStyle, color: getTabColor(0) }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
              <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="5" cy="5" r="1" fill="currentColor" />
              <circle cx="5" cy="13" r="1" fill="currentColor" />
            </svg>
            <span style={tabLabelStyle}>CONEXIONES</span>
          </div>
          <div className="kpc-tab kpc-t1" style={{ ...tabItemStyle, color: getTabColor(1) }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
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
          <div className="kpc-tab kpc-t2" style={{ ...tabItemStyle, color: getTabColor(2) }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 5.5C2 4.7 2.7 4 3.5 4H7l2 2h5.5c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-11C2.7 15 2 14.3 2 13.5v-8Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
            <span style={tabLabelStyle}>ARCHIVOS</span>
          </div>
          <div className="kpc-tab kpc-t3" style={{ ...tabItemStyle, color: getTabColor(3) }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path
                d="M5.5 5.5 2.5 8.5l3 3M12.5 5.5l3 3-3 3M10 3.5l-2 10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={tabLabelStyle}>EDITOR</span>
          </div>
          <div className="kpc-tab" style={{ ...tabItemStyle, color: getTabColor(4) }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span style={tabLabelStyle}>MENÚ</span>
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          >
            <div className="kpc-underline" style={{ width: "20%", transform: `translateX(${activeTab * 100}%)`, transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
              <div style={{ width: "100%", height: 1.5, background: underlineColor }} />
            </div>
          </div>
        </div>

        {/* BODY */}
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
          <WorkspaceScreen visible={variant === "workspace"} />
          <ConsolaScreen visible={variant === "consola"} />
          <AntigravityScreen visible={variant === "antigravity"} />
          <GeminiScreen visible={variant === "gemini"} />
          <DockerScreen visible={variant === "docker"} />
          <SftpScreen visible={variant === "sftp"} />
          <EditorScreen visible={variant === "editor"} />
          <MenuScreen visible={variant === "menu"} />
        </div>
      </div>

      {/* Static image layer for mobile (hides active DOM) */}
      <div
        className="kpc-img-content"
        style={{
          position: "absolute",
          inset: 0,
          display: "none",
          zIndex: 5,
        }}
      >
        <img
          src={`/images/phone-${variant}.png`}
          alt={`${variant} mockup`}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      {/* home indicator */}
      {!hideFrame && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 9,
            left: "50%",
            transform: "translateX(-50%)",
            width: "26%",
            height: 4,
            borderRadius: 3,
            background: "rgba(236,231,218,.35)",
            zIndex: 90,
          }}
        />
      )}
    </div>
  );

  if (hideFrame) {
    return uiLayer;
  }

  return (
    <div
      data-v={variant}
      style={{ position: "relative", width: "100%", fontFamily: ARCHIVO }}
    >
      {/* side buttons */}
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
        }}
      />
      {/* aluminium rail — same full phone frame as the hero */}
      <div
        className="kpc-rail"
        style={{
          position: "relative",
          borderRadius: 44,
          padding: 2.5,
          background:
            "linear-gradient(145deg,#4a453b 0%,#17140f 22%,#0a0908 50%,#1d1a15 74%,#4f4a3f 100%)",
          boxShadow: "0 44px 90px -40px rgba(0,0,0,.9)",
        }}
      >
        <div
          className="kpc-bezel"
          style={{
            position: "relative",
            borderRadius: 41,
            padding: 9,
            background: "#050403",
          }}
        >
          {uiLayer}
        </div>
      </div>
    </div>
  );
}

function WorkspaceScreen({ visible }: { visible?: boolean }) {
  return (
    <div className="kpc-scr kpc-workspace" style={{ ...screenBase, padding: "20px 15px 0", display: visible ? "flex" : "none" }}>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 9,
          letterSpacing: ".42em",
          color: "rgba(236,231,218,.42)",
          marginBottom: 5,
        }}
      >
        KALA
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
          marginBottom: 18,
        }}
      >
        <div
          style={{
            fontFamily: ANTON,
            fontSize: 30,
            lineHeight: 0.9,
            color: "#F2EEE2",
          }}
        >
          WORKSPACE
        </div>
        <div
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#ECE7DA",
            border: "1px solid rgba(236,231,218,.28)",
            fontFamily: MONO,
            fontSize: 9,
            letterSpacing: ".14em",
            padding: "8px 11px",
            borderRadius: 5,
          }}
        >
          <span style={{ fontSize: 12 }}>+</span> NUEVA
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
          padding: 13,
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 9,
        }}
      >
        <div style={{ width: 14, height: 14, flexShrink: 0, borderRadius: "50%", background: "#0A0908" }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: "#0A0908" }}>SERVER IA</div>
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
            jguadalupe@198.51.100.7:22
          </div>
        </div>
        <div style={{ fontFamily: MONO, color: "rgba(10,9,8,.6)", fontSize: 14 }}>···</div>
      </div>
      <div
        style={{
          border: "1px solid rgba(236,231,218,.1)",
          borderRadius: 9,
          padding: 13,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ width: 14, height: 14, flexShrink: 0, borderRadius: "50%", background: ACCENT }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 15, color: "#ECE7DA" }}>VPS EDGE</div>
          <div style={{ fontFamily: MONO, fontSize: 9, color: "rgba(236,231,218,.5)" }}>
            root@10.0.4.12:22
          </div>
        </div>
        <div style={{ fontFamily: MONO, color: "rgba(236,231,218,.4)", fontSize: 14 }}>···</div>
      </div>
    </div>
  );
}

function ConsolaScreen({ visible }: { visible?: boolean }) {
  return (
    <div className="kpc-scr kpc-consola" style={{ ...screenBase, padding: 0, fontFamily: MONO, display: visible ? "flex" : "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "#0a0908",
          borderBottom: "1px solid rgba(236,231,218,.07)",
          fontFamily: MONO,
          color: "#ECE7DA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7.5 }}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
            <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
            <circle cx="5" cy="5" r="1" fill="#ECE7DA" />
            <circle cx="5" cy="13" r="1" fill="#ECE7DA" />
          </svg>
          <span style={{ fontWeight: 800, fontSize: 9.5, letterSpacing: ".04em" }}>SERVER IA</span>
          <div
            style={{
              border: "1px solid rgba(236,231,218,.15)",
              padding: "1px 5px",
              borderRadius: 2,
              color: "rgba(236,231,218,.5)",
              fontSize: 7.5,
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            1
          </div>
          <svg width="6.5" height="4" viewBox="0 0 7 4" fill="none" style={{ opacity: 0.5 }}>
            <path d="M1 1l2.5 2L6 1" stroke="#ECE7DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{ display: "flex", alignItems: "center", height: 16 }}>
          <div style={{ width: 1, height: 12, background: "rgba(236,231,218,.09)", marginRight: 12 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <svg width="11" height="9" viewBox="0 0 16 12" fill="none" stroke="rgba(236,231,218,.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <rect x="1" y="2" width="14" height="8" rx="1" />
              <path d="M4 5h1M7 5h1M10 5h1M13 5h1M3 8h10" />
            </svg>
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="rgba(236,231,218,.4)" strokeWidth="1.2" style={{ cursor: "pointer" }}>
              <path d="M8.5 1.5H10.5V3.5M3.5 10.5H1.5V8.5M10.5 1.5L7.5 4.5M1.5 10.5L4.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 12, overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            border: "1px solid #B57F71",
            borderRadius: 3,
            padding: "12px 10px 10px",
            marginBottom: 11,
            textAlign: "center",
            color: "#C68C7E",
            fontSize: 7,
            lineHeight: 1.6,
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
            Claude Code <span style={{ color: "rgba(198,140,126,.7)" }}>v2.1</span>
          </span>
          <div style={{ marginBottom: 6 }}>Welcome back kala!</div>
          <div style={{ display: "flex", justifyContent: "center", margin: "4px 0 8px" }}>
            <svg
              viewBox="0 0 52 40"
              width="46"
              height="35"
              style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,.45))" }}
            >
              <rect x="3" y="14" width="6" height="9" fill="#C15F3C" />
              <rect x="43" y="14" width="6" height="9" fill="#C15F3C" />
              <rect x="8" y="3" width="36" height="27" rx="2.5" fill="#C15F3C" />
              <rect x="11" y="5.5" width="30" height="6" rx="2" fill="#CE6E4B" opacity=".5" />
              <rect x="8" y="29" width="8" height="7" fill="#C15F3C" />
              <rect x="22" y="29" width="8" height="7" fill="#C15F3C" />
              <rect x="36" y="29" width="8" height="7" fill="#C15F3C" />
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
            </svg>
          </div>
          <div style={{ color: "rgba(198,140,126,.85)" }}>Haiku 4.5 · Claude Pro</div>
          <div style={{ color: "rgba(198,140,126,.6)" }}>/home/jguadalupe</div>
        </div>
        <div style={{ fontSize: 7.5, lineHeight: 1.9, color: "rgba(216,210,196,.8)" }}>
          <div>
            <span style={{ color: "#D97757" }}>›</span> analiza el error de build
          </div>
          <div style={{ color: "rgba(216,210,196,.5)" }}>⎿ leyendo package.json…</div>
          <div style={{ color: "#8FB07A" }}>✓ typecheck ok · 0 errores</div>
        </div>
      </div>
      <div style={{ padding: "0 12px 14px" }}>
        <div style={cliInput}>
          <span style={{ color: "#C68C7E" }}>›</span>
          <span style={cursorStyle} />
          <span style={{ color: "rgba(216,210,196,.45)" }}>fix typecheck errors</span>
        </div>
      </div>
    </div>
  );
}

function AntigravityScreen({ visible }: { visible?: boolean }) {
  return (
    <div className="kpc-scr kpc-antigravity" style={{ ...screenBase, padding: 0, fontFamily: MONO, display: visible ? "flex" : "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "#0a0908",
          borderBottom: "1px solid rgba(236,231,218,.07)",
          fontFamily: MONO,
          color: "#ECE7DA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7.5 }}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <path d="M9 2 3 15h12L9 2Z" stroke="#8FA8D8" strokeWidth="1.3" strokeLinejoin="round" />
          </svg>
          <span style={{ fontWeight: 800, fontSize: 9.5, letterSpacing: ".04em" }}>VPS EDGE</span>
          <div
            style={{
              border: "1px solid rgba(236,231,218,.15)",
              padding: "1px 5px",
              borderRadius: 2,
              color: "rgba(236,231,218,.5)",
              fontSize: 7.5,
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            1
          </div>
          <svg width="6.5" height="4" viewBox="0 0 7 4" fill="none" style={{ opacity: 0.5 }}>
            <path d="M1 1l2.5 2L6 1" stroke="#ECE7DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{ display: "flex", alignItems: "center", height: 16 }}>
          <div style={{ width: 1, height: 12, background: "rgba(236,231,218,.09)", marginRight: 12 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <svg width="11" height="9" viewBox="0 0 16 12" fill="none" stroke="rgba(236,231,218,.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <rect x="1" y="2" width="14" height="8" rx="1" />
              <path d="M4 5h1M7 5h1M10 5h1M13 5h1M3 8h10" />
            </svg>
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="rgba(236,231,218,.4)" strokeWidth="1.2" style={{ cursor: "pointer" }}>
              <path d="M8.5 1.5H10.5V3.5M3.5 10.5H1.5V8.5M10.5 1.5L7.5 4.5M1.5 10.5L4.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 12, overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            border: "1px solid #7C93C4",
            borderRadius: 3,
            padding: "14px 10px 11px",
            marginBottom: 11,
            textAlign: "center",
            color: "#93A9D6",
            fontSize: 7,
            lineHeight: 1.6,
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
              color: "#93A9D6",
            }}
          >
            Antigravity <span style={{ color: "rgba(147,169,214,.7)" }}>v0.4</span>
          </span>
          <div style={{ display: "flex", justifyContent: "center", margin: "4px 0 8px" }}>
            <svg
              viewBox="0 0 48 48"
              width="38"
              height="38"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,.5))" }}
            >
              <circle cx="24" cy="24" r="19" fill="none" stroke="#7C93C4" strokeWidth="2.4" />
              <path d="M24 8 L24 40 M8 24 L40 24" stroke="#7C93C4" strokeWidth="1.2" opacity=".4" />
              <circle cx="24" cy="24" r="5" fill="#8FA8D8" />
              <path
                d="M24 3 A21 21 0 0 1 45 24"
                fill="none"
                stroke="#B7C6E6"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div style={{ color: "rgba(147,169,214,.9)" }}>Gemini 3 Pro · Agent Manager</div>
          <div style={{ color: "rgba(147,169,214,.6)" }}>root@10.0.4.12</div>
        </div>
        <div style={{ fontSize: 7.5, lineHeight: 1.9, color: "rgba(216,210,196,.8)" }}>
          <div>
            <span style={{ color: "#8FA8D8" }}>▸</span> desplegar rama main
          </div>
          <div style={{ color: "rgba(216,210,196,.5)" }}>⎿ construyendo artefactos…</div>
          <div style={{ color: "#8FB07A" }}>✓ deploy live · 3 nodos</div>
        </div>
      </div>
      <div style={{ padding: "0 12px 14px" }}>
        <div style={cliInput}>
          <span style={{ color: "#8FA8D8" }}>▸</span>
          <span style={cursorStyle} />
          <span style={{ color: "rgba(216,210,196,.45)" }}>verificar health checks</span>
        </div>
      </div>
    </div>
  );
}

function GeminiScreen({ visible }: { visible?: boolean }) {
  return (
    <div className="kpc-scr kpc-gemini" style={{ ...screenBase, padding: 0, fontFamily: MONO, display: visible ? "flex" : "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "#0a0908",
          borderBottom: "1px solid rgba(236,231,218,.07)",
          fontFamily: MONO,
          color: "#ECE7DA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7.5 }}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
            <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
            <circle cx="5" cy="5" r="1" fill="#ECE7DA" />
            <circle cx="5" cy="13" r="1" fill="#ECE7DA" />
          </svg>
          <span style={{ fontWeight: 800, fontSize: 9.5, letterSpacing: ".04em" }}>DB PROD</span>
          <div
            style={{
              border: "1px solid rgba(236,231,218,.15)",
              padding: "1px 5px",
              borderRadius: 2,
              color: "rgba(236,231,218,.5)",
              fontSize: 7.5,
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            1
          </div>
          <svg width="6.5" height="4" viewBox="0 0 7 4" fill="none" style={{ opacity: 0.5 }}>
            <path d="M1 1l2.5 2L6 1" stroke="#ECE7DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div style={{ display: "flex", alignItems: "center", height: 16 }}>
          <div style={{ width: 1, height: 12, background: "rgba(236,231,218,.09)", marginRight: 12 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <svg width="11" height="9" viewBox="0 0 16 12" fill="none" stroke="rgba(236,231,218,.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: "pointer" }}>
              <rect x="1" y="2" width="14" height="8" rx="1" />
              <path d="M4 5h1M7 5h1M10 5h1M13 5h1M3 8h10" />
            </svg>
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="rgba(236,231,218,.4)" strokeWidth="1.2" style={{ cursor: "pointer" }}>
              <path d="M8.5 1.5H10.5V3.5M3.5 10.5H1.5V8.5M10.5 1.5L7.5 4.5M1.5 10.5L4.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 12, overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            border: "1px solid #C9A15E",
            borderRadius: 3,
            padding: "14px 10px 11px",
            marginBottom: 11,
            textAlign: "center",
            color: "#D3B274",
            fontSize: 7,
            lineHeight: 1.6,
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
              color: "#D3B274",
            }}
          >
            Gemini CLI <span style={{ color: "rgba(211,178,116,.7)" }}>v1.2</span>
          </span>
          <div style={{ display: "flex", justifyContent: "center", margin: "4px 0 8px" }}>
            <svg
              viewBox="0 0 12 10"
              width="40"
              height="34"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,.5))" }}
            >
              <rect x="5" y="0" width="1.04" height="1.04" fill="#D37102" />
              <rect x="6" y="0" width="1.04" height="1.04" fill="#C24B4A" />
              <rect x="4" y="1" width="1.04" height="1.04" fill="#AA894A" />
              <rect x="5" y="1" width="1.04" height="1.04" fill="#FF8701" />
              <rect x="6" y="1" width="1.04" height="1.04" fill="#FB7C5D" />
              <rect x="7" y="1" width="1.04" height="1.04" fill="#C34B4B" />
              <rect x="3" y="2" width="1.04" height="1.04" fill="#98BB54" />
              <rect x="4" y="2" width="1.04" height="1.04" fill="#B3AF5E" />
              <rect x="5" y="2" width="1.04" height="1.04" fill="#DB8754" />
              <rect x="6" y="2" width="1.04" height="1.04" fill="#FF845F" />
              <rect x="7" y="2" width="1.04" height="1.04" fill="#FD5E5F" />
              <rect x="8" y="2" width="1.04" height="1.04" fill="#C44B4B" />
              <rect x="3" y="3" width="1.04" height="1.04" fill="#88D15D" />
              <rect x="4" y="3" width="1.04" height="1.04" fill="#8DB05F" />
              <rect x="5" y="3" width="1.04" height="1.04" fill="#D8875E" />
              <rect x="6" y="3" width="1.04" height="1.04" fill="#FB845E" />
              <rect x="7" y="3" width="1.04" height="1.04" fill="#DC5F5E" />
              <rect x="8" y="3" width="1.04" height="1.04" fill="#BF5352" />
              <rect x="2" y="4" width="1.04" height="1.04" fill="#749552" />
              <rect x="3" y="4" width="1.04" height="1.04" fill="#61B05E" />
              <rect x="4" y="4" width="1.04" height="1.04" fill="#61AE83" />
              <rect x="5" y="4" width="1.04" height="1.04" fill="#6488AD" />
              <rect x="6" y="4" width="1.04" height="1.04" fill="#8C85AF" />
              <rect x="7" y="4" width="1.04" height="1.04" fill="#8A5FD0" />
              <rect x="8" y="4" width="1.04" height="1.04" fill="#8E5FA5" />
              <rect x="9" y="4" width="1.04" height="1.04" fill="#945172" />
              <rect x="2" y="5" width="1.04" height="1.04" fill="#79BD55" />
              <rect x="3" y="5" width="1.04" height="1.04" fill="#60B082" />
              <rect x="4" y="5" width="1.04" height="1.04" fill="#5D89C9" />
              <rect x="7" y="5" width="1.04" height="1.04" fill="#6282D8" />
              <rect x="8" y="5" width="1.04" height="1.04" fill="#675FCE" />
              <rect x="9" y="5" width="1.04" height="1.04" fill="#7A5497" />
              <rect x="2" y="6" width="1.04" height="1.04" fill="#58C074" />
              <rect x="3" y="6" width="1.04" height="1.04" fill="#60B1AA" />
              <rect x="8" y="6" width="1.04" height="1.04" fill="#6084D7" />
              <rect x="9" y="6" width="1.04" height="1.04" fill="#5773BA" />
              <rect x="1" y="7" width="1.04" height="1.04" fill="#56C179" />
              <rect x="2" y="7" width="1.04" height="1.04" fill="#5FB3CC" />
              <rect x="3" y="7" width="1.04" height="1.04" fill="#61B1D9" />
              <rect x="8" y="7" width="1.04" height="1.04" fill="#6089FD" />
              <rect x="9" y="7" width="1.04" height="1.04" fill="#5F87F9" />
              <rect x="10" y="7" width="1.04" height="1.04" fill="#4D6DAB" />
              <rect x="1" y="8" width="1.04" height="1.04" fill="#57C3A1" />
              <rect x="2" y="8" width="1.04" height="1.04" fill="#5DAFEB" />
              <rect x="9" y="8" width="1.04" height="1.04" fill="#5C84F6" />
              <rect x="10" y="8" width="1.04" height="1.04" fill="#4F70CE" />
              <rect x="0" y="9" width="1.04" height="1.04" fill="#5092D0" />
              <rect x="1" y="9" width="1.04" height="1.04" fill="#5EADFB" />
              <rect x="10" y="9" width="1.04" height="1.04" fill="#5E86FB" />
              <rect x="11" y="9" width="1.04" height="1.04" fill="#4E6ECC" />
            </svg>
          </div>
          <div style={{ color: "rgba(211,178,116,.9)" }}>Gemini 2.5 Flash · gratis</div>
          <div style={{ color: "rgba(211,178,116,.6)" }}>postgres@db-prod</div>
        </div>
        <div style={{ fontSize: 7.5, lineHeight: 1.9, color: "rgba(216,210,196,.8)" }}>
          <div>
            <span style={{ color: "#D3B274" }}>✦</span> resume las tablas grandes
          </div>
          <div style={{ color: "rgba(216,210,196,.5)" }}>⎿ escaneando esquema…</div>
          <div style={{ color: "#8FB07A" }}>✓ 14 tablas · 2.1 GB</div>
        </div>
      </div>
      <div style={{ padding: "0 12px 14px" }}>
        <div style={cliInput}>
          <span style={{ color: "#D3B274" }}>✦</span>
          <span style={cursorStyle} />
          <span style={{ color: "rgba(216,210,196,.45)" }}>optimizar índice users</span>
        </div>
      </div>
    </div>
  );
}

function DockerScreen({ visible }: { visible?: boolean }) {
  const gaugeLabel: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 9,
    color: "rgba(236,231,218,.55)",
    marginBottom: 5,
  };
  const gaugeTrack: CSSProperties = {
    height: 5,
    borderRadius: 3,
    background: "rgba(236,231,218,.1)",
    marginBottom: 10,
  };
  const containerRow: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "9px 11px",
    borderRadius: 8,
    border: "1px solid rgba(236,231,218,.09)",
    background: "rgba(236,231,218,.03)",
    fontSize: 10.5,
    color: "#ECE7DA",
  };
  return (
    <div
      className="kpc-scr kpc-docker"
      style={{ ...screenBase, padding: "14px 14px 0", fontFamily: MONO, display: visible ? "flex" : "none" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 10,
          color: "rgba(236,231,218,.62)",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: ACCENT,
            animation: "kpc-live 1.8s ease-in-out infinite",
          }}
        />{" "}
        server-ia · docker
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={gaugeLabel}>
          <span>CPU</span>
          <span style={{ color: "#ECE7DA" }}>42%</span>
        </div>
        <div style={gaugeTrack}>
          <div style={{ width: "42%", height: "100%", borderRadius: 3, background: ACCENT }} />
        </div>
        <div style={gaugeLabel}>
          <span>RAM</span>
          <span style={{ color: "#ECE7DA" }}>68%</span>
        </div>
        <div style={gaugeTrack}>
          <div style={{ width: "68%", height: "100%", borderRadius: 3, background: "#E3B341" }} />
        </div>
        <div style={gaugeLabel}>
          <span>DISCO</span>
          <span style={{ color: "#ECE7DA" }}>31%</span>
        </div>
        <div style={{ ...gaugeTrack, marginBottom: 0 }}>
          <div style={{ width: "31%", height: "100%", borderRadius: 3, background: "#8FB07A" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={containerRow}>
          <span>nginx</span>
          <span style={{ width: 26, height: 14, borderRadius: 8, background: ACCENT, position: "relative" }}>
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
        </div>
        <div style={containerRow}>
          <span>postgres</span>
          <span
            style={{
              width: 26,
              height: 14,
              borderRadius: 8,
              background: "rgba(236,231,218,.14)",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 2,
                left: 2,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#0A0908",
              }}
            />
          </span>
        </div>
        <div style={containerRow}>
          <span>redis</span>
          <span style={{ width: 26, height: 14, borderRadius: 8, background: ACCENT, position: "relative" }}>
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
        </div>
      </div>
    </div>
  );
}

function SftpScreen({ visible }: { visible?: boolean }) {
  return (
    <div className="kpc-scr kpc-sftp" style={{ position: "absolute", inset: 0, fontFamily: MONO, display: visible ? "flex" : "none" }}>
      <div
        style={{
          width: "38%",
          borderRight: "1px solid rgba(236,231,218,.09)",
          padding: "14px 10px",
          fontSize: 9.5,
          lineHeight: 2.1,
          color: "rgba(236,231,218,.55)",
        }}
      >
        <div>▾ /etc</div>
        <div
          style={{
            paddingLeft: 12,
            color: "#ECE7DA",
            background: "rgba(139,166,120,.14)",
            borderRadius: 4,
          }}
        >
          app.yml
        </div>
        <div style={{ paddingLeft: 12 }}>nginx.conf</div>
        <div style={{ paddingLeft: 12 }}>hosts</div>
        <div>▸ /var</div>
        <div>▸ /home</div>
      </div>
      <div style={{ flex: 1, padding: "14px 13px", fontSize: 10, lineHeight: 2 }}>
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
        <div>
          &nbsp;&nbsp;<span style={{ color: "#7C93C4" }}>tls</span>
          <span style={{ color: "rgba(236,231,218,.7)" }}>:</span>{" "}
          <span style={{ color: "#C68C7E" }}>true</span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            color: "#9CC085",
            fontSize: 8,
            marginTop: 10,
          }}
        >
          <span>✓</span> Guardado · SFTP
        </div>
      </div>
    </div>
  );
}

function EditorScreen({ visible }: { visible?: boolean }) {
  return (
    <div
      className="kpc-scr kpc-editor"
      style={{
        ...screenBase,
        padding: 0,
        fontFamily: MONO,
        background: "#050403",
        display: visible ? "flex" : "none",
      }}
    >
      {/* File subheader */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          borderBottom: "1px solid rgba(236,231,218,.07)",
          background: "#0a0908",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Close button X */}
          <div
            style={{
              color: "rgba(236,231,218,.45)",
              fontSize: 13,
              marginRight: 2,
              cursor: "pointer",
            }}
          >
            ✕
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#ECE7DA" }}>App.css</span>
            <span style={{ fontSize: 6.5, color: "rgba(236,231,218,.45)", letterSpacing: ".05em" }}>
              REMOTO · SFTP
            </span>
          </div>
        </div>

        {/* Right buttons: -, +, GUARDAR */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(236,231,218,.14)",
              borderRadius: 3,
              width: 18,
              height: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ECE7DA",
              fontSize: 10,
              cursor: "pointer",
            }}
          >
            —
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(236,231,218,.14)",
              borderRadius: 3,
              width: 18,
              height: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ECE7DA",
              fontSize: 10,
              cursor: "pointer",
            }}
          >
            +
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(236,231,218,.14)",
              borderRadius: 3,
              padding: "0 8px",
              height: 18,
              display: "flex",
              alignItems: "center",
              gap: 4,
              color: "#ECE7DA",
              fontSize: 7.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            GUARDAR
          </button>
        </div>
      </div>

      {/* Code editor content area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          fontSize: 7.5,
          lineHeight: 1.35,
          overflow: "hidden",
          background: "#050403",
          color: "#ECE7DA",
        }}
      >
        {/* Line numbers column */}
        <div
          style={{
            width: 20,
            textAlign: "right",
            paddingRight: 6,
            paddingTop: 8,
            borderRight: "1px solid rgba(236,231,218,.07)",
            color: "#D95252",
            userSelect: "none",
            overflow: "hidden",
          }}
        >
          {Array.from({ length: 37 }, (_, i) => i + 1).map((n) => (
            <div key={n} style={{ height: 11 }}>
              {n}
            </div>
          ))}
        </div>

        {/* Code text column */}
        <div
          style={{
            flex: 1,
            paddingLeft: 8,
            paddingTop: 8,
            overflow: "hidden",
            whiteSpace: "pre",
            color: "#ECE7DA",
          }}
        >
          {/* Custom syntax highlighting for App.css */}
          <div style={{ height: 11 }}>
            <span style={{ color: "#F97A86" }}>.counter</span> {'{'}
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>font-size</span>: 16px;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>padding</span>: 5px 10px;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>border-radius</span>: 5px;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>color</span>: <span style={{ color: "#E6B673" }}>var</span>(--accent);
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>background</span>: <span style={{ color: "#E6B673" }}>var</span>(--accent-bg);
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>border</span>: 2px solid transparent;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>transition</span>: border-color 0.3s;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>margin-bottom</span>: 24px;
          </div>
          <div style={{ height: 11 }} />
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#F97A86" }}>&:hover</span> {'{'}
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E6B673" }}>border-color</span>: <span style={{ color: "#E6B673" }}>var</span>(--accent-border);
          </div>
          <div style={{ height: 11 }}>&nbsp;&nbsp;{'}'}</div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#F97A86" }}>&:focus-visible</span> {'{'}
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E6B673" }}>outline</span>: 2px solid <span style={{ color: "#E6B673" }}>var</span>(--accent);
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E6B673" }}>outline-offset</span>: 2px;
          </div>
          <div style={{ height: 11 }}>&nbsp;&nbsp;{'}'}</div>
          <div style={{ height: 11 }}>{'}'}</div>
          <div style={{ height: 11 }} />
          <div style={{ height: 11 }}>
            <span style={{ color: "#F97A86" }}>.hero</span> {'{'}
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>position</span>: relative;
          </div>
          <div style={{ height: 11 }} />
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#F97A86" }}>.base</span>,
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#F97A86" }}>.framework</span>,
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#F97A86" }}>.vite</span> {'{'}
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E6B673" }}>inset-inline</span>: 0;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#E6B673" }}>margin</span>: 0 auto;
          </div>
          <div style={{ height: 11 }}>&nbsp;&nbsp;{'}'}</div>
          <div style={{ height: 11 }}>{'}'}</div>
          <div style={{ height: 11 }} />
          <div style={{ height: 11 }}>
            <span style={{ color: "#F97A86" }}>.base</span> {'{'}
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>width</span>: 170px;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>position</span>: relative;
          </div>
          <div style={{ height: 11 }}>
            &nbsp;&nbsp;<span style={{ color: "#E6B673" }}>z-index</span>: 0;
          </div>
          <div style={{ height: 11 }}>{'}'}</div>
          <div style={{ height: 11 }} />
          <div style={{ height: 11 }}>
            <span style={{ color: "#F97A86" }}>.framework</span>,
          </div>
          <div style={{ height: 11 }}>
            <span style={{ color: "#F97A86" }}>.vite</span> {'{'}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuScreen({ visible }: { visible?: boolean }) {
  const tabLabelStyle: CSSProperties = {
    fontFamily: MONO,
    fontSize: 5,
    letterSpacing: ".02em",
  };

  return (
    <div
      className="kpc-scr kpc-menu"
      style={{
        ...screenBase,
        padding: 0,
        fontFamily: MONO,
        background: "#050403",
        display: visible ? "flex" : "none",
      }}
    >
      {/* Subheader */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 12px 6px",
          borderBottom: "1px solid rgba(236,231,218,.07)",
          background: "#0a0908",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Hamburger menu icon */}
          <svg width="11" height="11" viewBox="0 0 18 18" fill="none" stroke="#ECE7DA" strokeWidth="1.6" strokeLinecap="round">
            <line x1="3" y1="5" x2="15" y2="5" />
            <line x1="3" y1="9" x2="15" y2="9" />
            <line x1="3" y1="13" x2="15" y2="13" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: "#ECE7DA", display: "flex", alignItems: "center", gap: 3 }}>
              MONITOR 
              <svg width="6.5" height="4" viewBox="0 0 7 4" fill="none">
                <path d="M1 1l2.5 2L6 1" stroke="#ECE7DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span style={{ fontSize: 6.5, color: "#F97A86", fontWeight: 700, display: "flex", alignItems: "center", gap: 3.5 }}>
              {/* Server rack icon */}
              <svg width="6.5" height="6.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="3" width="20" height="7" rx="1.5" />
                <rect x="2" y="14" width="20" height="7" rx="1.5" />
                <circle cx="6" cy="6.5" r="1.2" fill="currentColor" />
                <circle cx="6" cy="17.5" r="1.2" fill="currentColor" />
              </svg>
              SERVER IA
            </span>
          </div>
        </div>
        {/* Reload icon */}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ECE7DA" strokeWidth="2.2" strokeLinecap="round" style={{ cursor: "pointer", opacity: 0.8 }}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
        </svg>
      </div>

      {/* View internal navigation tabs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          background: "#080706",
          borderBottom: "1px solid rgba(236,231,218,.07)",
          fontSize: 6,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div style={{ padding: "6px 0", background: "#ECE7DA", color: "#0A0908", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span style={tabLabelStyle}>MONITOR</span>
        </div>
        <div style={{ padding: "6px 0", color: "rgba(236,231,218,.45)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3.5, borderLeft: "1px solid rgba(236,231,218,.07)" }}>
          <svg width="11" height="9" viewBox="0 0 24 20" fill="#2496ED">
            <path d="M13.8 2.3h2.6v2.6h-2.6zm-3.4 3.4h2.6v2.6h-2.6zm3.4 0h2.6v2.6h-2.6zm3.4 0h2.6v2.6h-2.6zm-10.2 3.4h2.6v2.6H7zm3.4 0h2.6v2.6h-2.6zm3.4 0h2.6v2.6h-2.6zm3.4 0h2.6v2.6h-2.6zm3.4 0h2.6v2.6h-2.6zm-17 3.4c.6 0 1 .4 1 1v1.7c0 2.2 1.8 4 4 4h7.9c3.1 0 5.6-2.5 5.6-5.6V13c.8-.4 1-.8 1-1.3-.8.2-1.3 0-1.6-.3-.3.8-.9 1.3-1.8 1.3H1.9c-.3.4-.3.8 0 1.2z" />
          </svg>
          <span style={tabLabelStyle}>CONTENEDORES</span>
        </div>
        <div style={{ padding: "6px 0", color: "rgba(236,231,218,.45)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, borderLeft: "1px solid rgba(236,231,218,.07)" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polyline points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span style={tabLabelStyle}>IMÁGENES</span>
        </div>
        <div style={{ padding: "6px 0", color: "rgba(236,231,218,.45)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, borderLeft: "1px solid rgba(236,231,218,.07)" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
          <span style={tabLabelStyle}>VOLÚMENES</span>
        </div>
      </div>

      {/* Main dashboard content */}
      <div style={{ padding: 10, flex: 1, overflow: "hidden" }}>
        {/* Host card */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#0A0908",
            border: "1px solid rgba(236,231,218,.07)",
            borderRadius: 6,
            padding: "8px 10px",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97A86" strokeWidth="2.5">
              <rect x="2" y="3" width="20" height="7" rx="1.5" />
              <rect x="2" y="14" width="20" height="7" rx="1.5" />
              <circle cx="6" cy="6.5" r="1.2" fill="currentColor" />
              <circle cx="6" cy="17.5" r="1.2" fill="currentColor" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 9.5, fontWeight: 800, color: "#ECE7DA" }}>ARMSTRONG</span>
              <span style={{ fontSize: 6.5, color: "rgba(236,231,218,.5)" }}>Ubuntu 24.04.4 LTS</span>
            </div>
          </div>
          {/* Glowing green indicator */}
          <div style={{ position: "relative", width: 6, height: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#8FB07A" }} />
            <div style={{ position: "absolute", inset: -2, borderRadius: "50%", border: "1px solid #8FB07A", opacity: 0.5 }} />
          </div>
        </div>

        {/* 3 Gauges row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 7, marginBottom: 12 }}>
          {/* CPU Card */}
          <GaugeCard title="CARGA CPU" value="1.40" subtitle="PROMEDIO" percent={15} />
          {/* RAM Card */}
          <GaugeCard title="MEMORIA RAM" value="21%" subtitle="26409M / 128779M" percent={21} />
          {/* DISK Card */}
          <GaugeCard title="DISCO" value="90%" subtitle="193G / 224G" percent={90} />
        </div>

        {/* System Services section */}
        <div>
          <div style={{ fontSize: 6.5, color: "rgba(236,231,218,.45)", letterSpacing: ".08em", fontWeight: 700, marginBottom: 6 }}>
            SERVICIOS DEL SISTEMA
          </div>
          <div style={{ background: "#0A0908", border: "1px solid rgba(236,231,218,.07)", borderRadius: 6, padding: "0 10px" }}>
            <ServiceRow name="NGINX" desc="Nginx Web Server" isActive={true} />
            <ServiceRow name="DOCKER" desc="Docker Engine" isActive={true} />
            <ServiceRow name="POSTGRESQL" desc="PostgreSQL Database" isActive={false} />
            <ServiceRow name="MYSQL" desc="MySQL / MariaDB" isActive={false} />
            <ServiceRow name="SSH" desc="SSH Server" isActive={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GaugeCard({ title, value, subtitle, percent }: { title: string; value: string; subtitle: string; percent: number }) {
  const circ = 100.53;
  const strokeLength = (percent / 100) * circ;

  return (
    <div
      style={{
        background: "#0A0908",
        border: "1px solid rgba(236,231,218,.07)",
        borderRadius: 6,
        padding: "8px 4px 6px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 6.5, color: "rgba(236,231,218,.4)", letterSpacing: ".02em", fontWeight: 700, marginBottom: 5 }}>
        {title}
      </span>
      {/* Gauge SVG */}
      <div style={{ position: "relative", width: 44, height: 44, marginBottom: 4 }}>
        <svg width="44" height="44" viewBox="0 0 44 44">
          {/* background track */}
          <circle cx="22" cy="22" r="16" fill="none" stroke="rgba(236,231,218,.06)" strokeWidth="3" />
          {/* foreground arc */}
          <circle
            cx="22"
            cy="22"
            r="16"
            fill="none"
            stroke="#F97A86"
            strokeWidth="3.2"
            strokeDasharray={`${circ}`}
            strokeDashoffset={circ - strokeLength}
            strokeLinecap="round"
            transform="rotate(-90 22 22)"
          />
          {/* outer ticks */}
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="rgba(249,122,134,.16)"
            strokeWidth="1.2"
            strokeDasharray="1.2 3"
          />
        </svg>
        {/* inner text overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 800, color: "#ECE7DA", lineHeight: 1 }}>
            {value}
          </span>
          <span style={{ fontSize: 4.5, color: "rgba(236,231,218,.4)", fontWeight: 700, marginTop: 1, letterSpacing: ".02em" }}>
            {subtitle.split(" ")[0]}
          </span>
        </div>
      </div>
      {/* detailed subtitle */}
      <span style={{ fontSize: 4.5, color: "rgba(236,231,218,.35)", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100%", padding: "0 2px" }}>
        {subtitle}
      </span>
    </div>
  );
}

function ServiceRow({ name, desc, isActive }: { name: string; desc: string; isActive: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "7px 0",
        borderBottom: "1px solid rgba(236,231,218,.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        {/* status mark */}
        {isActive ? (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8FB07A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(236,231,218,.35)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 8.5, fontWeight: 800, color: "#ECE7DA" }}>{name}</span>
          <span style={{ fontSize: 6, color: "rgba(236,231,218,.42)" }}>{desc}</span>
        </div>
      </div>
      {/* action buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <button
          style={{
            background: "transparent",
            border: `1px solid ${isActive ? "#F97A86" : "rgba(236,231,218,.14)"}`,
            borderRadius: 2.5,
            color: isActive ? "#F97A86" : "#ECE7DA",
            fontSize: 5.5,
            fontWeight: 700,
            padding: "3.5px 7px",
            cursor: "pointer",
          }}
        >
          {isActive ? "DETENER" : "INICIAR"}
        </button>
        <button
          style={{
            background: "transparent",
            border: "1px solid rgba(236,231,218,.14)",
            borderRadius: 2.5,
            color: "#ECE7DA",
            fontSize: 5.5,
            fontWeight: 700,
            padding: "3.5px 7px",
            cursor: "pointer",
          }}
        >
          REINICIAR
        </button>
      </div>
    </div>
  );
}

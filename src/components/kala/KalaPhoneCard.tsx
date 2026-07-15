import { CSSProperties } from "react";
import { ACCENT, ANTON, ARCHIVO, MONO } from "./theme";

export type PhoneCardVariant =
  | "workspace"
  | "consola"
  | "antigravity"
  | "gemini"
  | "docker"
  | "sftp";

const tabItemStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
  paddingBottom: 10,
};

const tabLabelStyle: CSSProperties = {
  fontFamily: MONO,
  fontSize: 5,
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

export default function KalaPhoneCard({ variant }: { variant: PhoneCardVariant }) {
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
          style={{
            position: "relative",
            borderRadius: 41,
            padding: 9,
            background: "#050403",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 33,
              overflow: "hidden",
              background: "#0B0A08",
              display: "flex",
              flexDirection: "column",
              aspectRatio: "720/1560",
              boxShadow: "inset 0 0 22px rgba(0,0,0,.7)",
            }}
          >
            {/* camera */}
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
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 1.6,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 34% 28%, #22343d, #050b0d 70%)",
                }}
              />
            </div>
            {/* glare */}
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
            {/* screen UI layer — scaled up 35% relative to the frame so the
                app icons/type read clearly at this bigger phone size */}
            <div
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
                    <path d="M2 3 6.5 7 11 3M6.5 7v3M6.5 1v2" stroke="currentColor" strokeWidth="1.1" />
                  </svg>
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                    <rect x="1" y="6" width="2" height="4" fill="currentColor" />
                    <rect x="4.5" y="4" width="2" height="6" fill="currentColor" />
                    <rect x="8" y="2" width="2" height="8" fill="currentColor" />
                    <rect x="11.5" y="0" width="2" height="10" fill="currentColor" opacity=".35" />
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
                <div className="kpc-tab kpc-t0" style={tabItemStyle}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
                    <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="5" cy="5" r="1" fill="currentColor" />
                    <circle cx="5" cy="13" r="1" fill="currentColor" />
                  </svg>
                  <span style={tabLabelStyle}>CONEXIONES</span>
                </div>
                <div className="kpc-tab kpc-t1" style={tabItemStyle}>
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
                <div className="kpc-tab kpc-t2" style={tabItemStyle}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M2 5.5C2 4.7 2.7 4 3.5 4H7l2 2h5.5c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-11C2.7 15 2 14.3 2 13.5v-8Z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                  <span style={tabLabelStyle}>ARCHIVOS</span>
                </div>
                <div className="kpc-tab" style={tabItemStyle}>
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
                <div className="kpc-tab" style={tabItemStyle}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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
                  <div className="kpc-underline" style={{ width: "20%" }}>
                    <div style={{ width: "64%", height: 2, margin: "0 auto", background: "#ECE7DA" }} />
                  </div>
                </div>
              </div>

              {/* BODY */}
              <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                <WorkspaceScreen />
                <ConsolaScreen />
                <AntigravityScreen />
                <GeminiScreen />
                <DockerScreen />
                <SftpScreen />
              </div>
            </div>
            {/* home indicator */}
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
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkspaceScreen() {
  return (
    <div className="kpc-scr kpc-workspace" style={{ ...screenBase, padding: "20px 15px 0" }}>
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
            jguadalupe@63.141.255.7:22
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

function ConsolaScreen() {
  return (
    <div className="kpc-scr kpc-consola" style={{ ...screenBase, padding: 0, fontFamily: MONO }}>
      <div style={cliToolbar}>
        <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
          <rect x="2" y="10.5" width="14" height="5" rx="1.4" stroke="#ECE7DA" strokeWidth="1.3" />
        </svg>
        <span style={cliTitle}>SERVER IA</span>
        <span style={cliBadge}>1</span>
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
          <div style={{ marginBottom: 6 }}>Welcome back catalyst!</div>
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

function AntigravityScreen() {
  return (
    <div className="kpc-scr kpc-antigravity" style={{ ...screenBase, padding: 0, fontFamily: MONO }}>
      <div style={cliToolbar}>
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
          <path d="M9 2 3 15h12L9 2Z" stroke="#8FA8D8" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
        <span style={cliTitle}>VPS EDGE</span>
        <span style={cliBadge}>1</span>
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

function GeminiScreen() {
  return (
    <div className="kpc-scr kpc-gemini" style={{ ...screenBase, padding: 0, fontFamily: MONO }}>
      <div style={cliToolbar}>
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 1.5 C9 5.5 12.5 9 16.5 9 C12.5 9 9 12.5 9 16.5 C9 12.5 5.5 9 1.5 9 C5.5 9 9 5.5 9 1.5Z"
            fill="#C9A15E"
          />
        </svg>
        <span style={cliTitle}>DB PROD</span>
        <span style={cliBadge}>1</span>
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

function DockerScreen() {
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
      style={{ ...screenBase, padding: "14px 14px 0", fontFamily: MONO }}
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

function SftpScreen() {
  return (
    <div className="kpc-scr kpc-sftp" style={{ position: "absolute", inset: 0, fontFamily: MONO }}>
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

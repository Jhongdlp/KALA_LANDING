export const ACCENT = "#8BA678";

export const ANTON = "var(--font-anton), sans-serif";
export const ARCHIVO = "var(--font-archivo), sans-serif";
export const MONO = "var(--font-jetbrains), monospace";

export type ThemeName = "dark" | "light";

const LIGHT = {
  bg: "#E9E3D3",
  ink: "#2A241B",
  inkHover: "#000000",
  navtext: "rgba(42,36,27,.6)",
  hamborder: "rgba(42,36,27,.28)",
  menubg: "#F1ECDF",
  menuborder: "rgba(42,36,27,.14)",
  menushadow: "rgba(42,36,27,.28)",
  menulinktext: "rgba(42,36,27,.82)",
  menulinkhover: "rgba(42,36,27,.05)",
  btnbg: "#2A241B",
  btntext: "#E9E3D3",
  btnshadow: "rgba(42,36,27,.22)",
  headline: "#211C15",
  paratext: "rgba(42,36,27,.66)",
  ctashadow: "rgba(42,36,27,.24)",
  sectext: "rgba(42,36,27,.82)",
  secborder: "rgba(42,36,27,.24)",
  sechoverborder: "rgba(42,36,27,.6)",
  sechovertext: "#2A241B",
  statstext: "rgba(42,36,27,.45)",
  selbg: "#2A241B",
  seltext: "#E9E3D3",
  chipbg1: "rgba(20,18,14,.82)",
  chipbg2: "rgba(20,18,14,.7)",
  chipshadow: "rgba(42,36,27,.35)",
  togglebtnborder: "rgba(42,36,27,.24)",
  togglehoverborder: "rgba(42,36,27,.5)",
  togglehoverbg: "rgba(42,36,27,.05)",
  agentcardbg: "rgba(255,255,255,.7)",
  bentobg: "rgba(42,36,27,.035)",
  bentoborder: "rgba(42,36,27,.12)",
  bentoborderhi: "rgba(42,36,27,.28)",
  bentomuted: "rgba(42,36,27,.55)",
  bentofaint: "rgba(42,36,27,.4)",
  bentoinset: "rgba(255,255,255,.55)",
  bentoscreenframe: "rgba(42,36,27,.42)",
  headerglass: "rgba(233,227,211,.72)",
  headerborder: "rgba(42,36,27,.10)",
  headershadow: "rgba(42,36,27,.12)",
  headerhairline: "rgba(255,255,255,.55)",
  // Terminal error text. Picked per theme for contrast, not for hue: the one
  // red that looks right on the dark background falls to 2.8:1 on the light
  // one. These are 5.3:1 and 6.7:1 respectively.
  error: "#9E3B24",
};

const DARK: typeof LIGHT = {
  bg: "#0A0908",
  ink: "#ECE7DA",
  inkHover: "#ffffff",
  navtext: "rgba(236,231,218,.62)",
  hamborder: "rgba(236,231,218,.22)",
  menubg: "#100F0C",
  menuborder: "rgba(236,231,218,.12)",
  menushadow: "rgba(0,0,0,.85)",
  menulinktext: "rgba(236,231,218,.82)",
  menulinkhover: "rgba(236,231,218,.05)",
  btnbg: "#ECE7DA",
  btntext: "#0A0908",
  btnshadow: "rgba(236,231,218,.14)",
  headline: "#F2EEE2",
  paratext: "rgba(236,231,218,.6)",
  ctashadow: "rgba(236,231,218,.16)",
  sectext: "rgba(236,231,218,.8)",
  secborder: "rgba(236,231,218,.2)",
  sechoverborder: "rgba(236,231,218,.6)",
  sechovertext: "#ECE7DA",
  statstext: "rgba(236,231,218,.4)",
  selbg: "#ECE7DA",
  seltext: "#0A0908",
  chipbg1: "rgba(236,231,218,.09)",
  chipbg2: "rgba(236,231,218,.05)",
  chipshadow: "rgba(0,0,0,.66)",
  togglebtnborder: "rgba(236,231,218,.24)",
  togglehoverborder: "rgba(236,231,218,.5)",
  togglehoverbg: "rgba(236,231,218,.06)",
  agentcardbg: "rgba(236,231,218,.9)",
  bentobg: "rgba(236,231,218,.028)",
  bentoborder: "rgba(236,231,218,.09)",
  bentoborderhi: "rgba(236,231,218,.22)",
  bentomuted: "rgba(236,231,218,.55)",
  bentofaint: "rgba(236,231,218,.34)",
  bentoinset: "rgba(11,10,8,.55)",
  bentoscreenframe: "rgba(236,231,218,.08)",
  headerglass: "rgba(12,11,9,.58)",
  headerborder: "rgba(236,231,218,.08)",
  headershadow: "rgba(0,0,0,.45)",
  headerhairline: "rgba(236,231,218,.10)",
  error: "#DE7A5C",
};

/** localStorage key holding the visitor's last toggle. */
export const THEME_KEY = "kammel-theme";

/** Page background per theme — the one value the pre-paint script needs. */
export const THEME_BG: Record<ThemeName, string> = {
  light: LIGHT.bg,
  dark: DARK.bg,
};

/**
 * Both themes as static CSS, emitted once into the document head.
 *
 * The variables used to be inline on the app root, which meant they could only
 * change after React hydrated — a remembered dark theme would paint the light
 * one first and snap. As rules on :root they are in the stylesheet before the
 * first paint, and switching theme is a single attribute flip on <html> that a
 * blocking script can do ahead of any rendering.
 */
export function themeCss(): string {
  const decls = (theme: ThemeName) =>
    Object.entries(themeVars(theme))
      .map(([k, v]) => `${k}:${v}`)
      .join(";");
  // Light is the default, so it sits on bare :root and dark overrides it.
  return `:root{${decls("light")}}:root[data-theme="dark"]{${decls("dark")}}`;
}

export function themeVars(theme: ThemeName): Record<string, string> {
  const T = theme === "light" ? LIGHT : DARK;
  return {
    "--k-bg": T.bg,
    "--k-ink": T.ink,
    "--k-ink-hover": T.inkHover,
    "--k-navtext": T.navtext,
    "--k-hamborder": T.hamborder,
    "--k-menubg": T.menubg,
    "--k-menuborder": T.menuborder,
    "--k-menushadow": T.menushadow,
    "--k-menulinktext": T.menulinktext,
    "--k-menulinkhover": T.menulinkhover,
    "--k-btnbg": T.btnbg,
    "--k-btntext": T.btntext,
    "--k-btnshadow": T.btnshadow,
    "--k-headline": T.headline,
    "--k-paratext": T.paratext,
    "--k-ctashadow": T.ctashadow,
    "--k-sectext": T.sectext,
    "--k-secborder": T.secborder,
    "--k-sechoverborder": T.sechoverborder,
    "--k-sechovertext": T.sechovertext,
    "--k-statstext": T.statstext,
    "--k-selbg": T.selbg,
    "--k-seltext": T.seltext,
    "--k-chipbg1": T.chipbg1,
    "--k-chipbg2": T.chipbg2,
    "--k-chipshadow": T.chipshadow,
    "--k-toggle-border": T.togglebtnborder,
    "--k-toggle-hover-border": T.togglehoverborder,
    "--k-toggle-hover-bg": T.togglehoverbg,
    "--k-agentcardbg": T.agentcardbg,
    "--k-bentobg": T.bentobg,
    "--k-bentoborder": T.bentoborder,
    "--k-bentoborderhi": T.bentoborderhi,
    "--k-bentomuted": T.bentomuted,
    "--k-bentofaint": T.bentofaint,
    "--k-bentoinset": T.bentoinset,
    "--k-bentoscreenframe": T.bentoscreenframe,
    "--k-headerglass": T.headerglass,
    "--k-headerborder": T.headerborder,
    "--k-headershadow": T.headershadow,
    "--k-headerhairline": T.headerhairline,
    "--k-error": T.error,
  };
}

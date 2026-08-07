"use client";

import {
  CSSProperties,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { themeVars, type ThemeName } from "./theme";

type ThemeContextValue = {
  theme: ThemeName;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useKammelTheme() {
  return useContext(ThemeContext);
}

export default function KammelThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Light is what the site opens on; the header toggle switches to dark. The
  // OS preference is deliberately not read: the choice is the brand's, and a
  // server-rendered default that flipped per visitor would mismatch the
  // painted html/body background below it on the first frame.
  const [theme, setTheme] = useState<ThemeName>("light");
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  const rootStyle: CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    // `clip` (not `hidden`) so this root doesn't become a scroll container —
    // otherwise it breaks `position: sticky` on the header.
    overflowX: "clip",
    background: "var(--k-bg)",
    color: "var(--k-ink)",
    transition: "background .4s ease, color .4s ease",
    ...themeVars(theme),
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      }}
    >
      <div className={inView ? "kammel is-in" : "kammel"} style={rootStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

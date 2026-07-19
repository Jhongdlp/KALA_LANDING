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

export function useKalaTheme() {
  return useContext(ThemeContext);
}

export default function KalaThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeName>("dark");
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
      <div className={inView ? "kala is-in" : "kala"} style={rootStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

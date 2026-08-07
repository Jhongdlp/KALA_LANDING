"use client";

import {
  CSSProperties,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { THEME_BG, THEME_KEY, type ThemeName } from "./theme";

type ThemeContextValue = {
  theme: ThemeName;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function useKammelTheme() {
  return useContext(ThemeContext);
}

/** Best-effort write: storage can be unavailable or full, and a lost
 *  preference is not worth breaking the toggle over. */
function remember(theme: ThemeName) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* private mode, quota, storage disabled */
  }
}

function paint(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_BG[theme]);
}

/**
 * The applied theme is read straight off <html>, which the pre-paint script
 * may already have set from localStorage — the attribute is the single source
 * of truth and React only subscribes to it.
 *
 * useSyncExternalStore is what makes that safe across hydration: it renders
 * the server snapshot ("light", matching the markup Next sent) and swaps to
 * the client one right after, with no mismatch and no state to keep in step.
 */
let listeners: (() => void)[] = [];

function subscribe(onChange: () => void) {
  listeners.push(onChange);
  return () => {
    listeners = listeners.filter((l) => l !== onChange);
  };
}

function getSnapshot(): ThemeName {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): ThemeName {
  return "light";
}

export default function KammelThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(t);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: ThemeName = getSnapshot() === "dark" ? "light" : "dark";
    paint(next);
    remember(next);
    listeners.forEach((notify) => notify());
  }, []);

  // The palette itself now lives on :root (see themeCss), so this only carries
  // the layout the app root has always had.
  const rootStyle: CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    // `clip` (not `hidden`) so this root doesn't become a scroll container —
    // otherwise it breaks `position: sticky` on the header.
    overflowX: "clip",
    background: "var(--k-bg)",
    color: "var(--k-ink)",
    transition: "background .4s ease, color .4s ease",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={inView ? "kammel is-in" : "kammel"} style={rootStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

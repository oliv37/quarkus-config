"use client";

import ThemeContext, { Theme } from "@/contexts/themeContext";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    __THEME__: {
      setTheme: (theme: Theme) => void;
      getTheme: () => Theme;
    };
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme | undefined>();

  useEffect(() => {
    setTheme(window.__THEME__.getTheme());
  }, []);

  const themeContextValue = useMemo<[Theme | undefined, () => void]>(() => {
    function switchTheme() {
      const newTheme: Theme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      window.__THEME__.setTheme(newTheme);
    }

    return [theme, switchTheme];
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

"use client";

import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";
import NavigationTransitionProvider from "./NavigationTransitionProvider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <NavigationTransitionProvider>
        <QueryProvider>{children}</QueryProvider>
      </NavigationTransitionProvider>
    </ThemeProvider>
  );
}

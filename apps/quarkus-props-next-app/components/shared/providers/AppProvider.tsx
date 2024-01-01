"use client";

import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}

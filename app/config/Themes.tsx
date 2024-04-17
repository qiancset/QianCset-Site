"use client";

import { ThemeProvider } from "next-themes";

export default function Themes({ children }) {
  return (
    <ThemeProvider
      storageKey='theme'
      disableTransitionOnChange
      enableColorScheme={true}
    >
      {children}
    </ThemeProvider>
  );
}

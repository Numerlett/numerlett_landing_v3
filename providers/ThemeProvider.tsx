"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: Readonly<{
  children: React.ReactNode;
  defaultTheme?: "light" | "dark";
}>) {
  return (
    <NextThemeProvider
      attribute="class"
      storageKey="theme"
      defaultTheme={defaultTheme}
      themes={["light", "dark"]}
    >
      {children}
    </NextThemeProvider>
  );
}

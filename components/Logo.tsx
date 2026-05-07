"use client";

import { logoFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Logo({
  theme,
  className = "",
}: {
  theme?: "light" | "dark";
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const resolved = theme ?? (resolvedTheme === "dark" ? "dark" : "light");

  return (
    <span className={cn("text-4xl", logoFont.className, className)}>
      <span className={resolved === "light" ? "text-primary" : "text-white"}>
        NUMER
      </span>
      <span className={resolved === "light" ? "text-black" : "text-primary"}>
        LETT
      </span>
    </span>
  );
}

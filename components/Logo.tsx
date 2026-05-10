import { logoFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Logo({
  theme,
  className = "",
}: {
  theme?: "light" | "dark";
  className?: string;
}) {
  const numerClass =
    theme === "dark" ? "text-white"
    : theme === "light" ? "text-primary"
    : "text-primary dark:text-white";

  const lettClass =
    theme === "dark" ? "text-primary"
    : theme === "light" ? "text-foreground"
    : "text-foreground dark:text-primary";

  return (
    <span className={cn("text-4xl", logoFont.className, className)}>
      <span className={numerClass}>NUMER</span>
      <span className={lettClass}>LETT</span>
    </span>
  );
}

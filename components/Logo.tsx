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
    theme === "dark"
      ? "text-white"
      : theme === "light"
        ? "text-primary"
        : "text-primary dark:text-white";

  const lettClass =
    theme === "dark"
      ? "text-primary"
      : theme === "light"
        ? "text-foreground"
        : "text-foreground dark:text-primary";

  const tagLineClass =
    theme === "dark"
      ? "text-white"
      : theme === "light"
        ? "text-black"
        : "text-black dark:text-white";

  return (
    <span className={cn("relative text-4xl", logoFont.className, className)}>
      <span className={numerClass}>NUMER</span>
      <span className={lettClass}>LETT</span>
      <span
        className={`${tagLineClass} absolute top-4/5 right-0 text-[0.5rem] tracking-widest`}
      >
        THE NEXT STEP
      </span>
    </span>
  );
}

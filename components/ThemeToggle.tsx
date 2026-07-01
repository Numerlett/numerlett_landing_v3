"use client";

import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const iconVariants: Variants = {
  initial: (reduced: boolean) => ({
    opacity: 0,
    scale: 0.5,
    rotate: reduced ? 0 : -90,
  }),
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
  exit: (reduced: boolean) => ({
    opacity: 0,
    scale: 0.5,
    rotate: reduced ? 0 : 90,
    transition: { duration: 0.15, ease: "easeIn" },
  }),
};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduced = useReducedMotion();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ scale: reduced ? 1 : 1.08 }}
      whileTap={{ scale: reduced ? 1 : 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          isDark ? (
            <motion.span
              key="moon"
              custom={reduced}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute"
            >
              <Moon className="size-4" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              custom={reduced}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute"
            >
              <Sun className="size-4" aria-hidden="true" />
            </motion.span>
          )
        )}
      </AnimatePresence>
    </motion.button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { applyTheme, getStoredTheme, type Theme } from "@/lib/theme";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getStoredTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted
          ? theme === "dark"
            ? "Passer en mode clair"
            : "Passer en mode sombre"
          : "Changer le thème"
      }
      className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-line text-foreground/70 transition-colors hover:border-teal hover:text-teal ${className ?? ""}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && theme === "dark" ? (
          <motion.svg
            key="moon"
            initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Technologie", href: "#technology" },
  { label: "Collection", href: "#collection" },
  { label: "Chiffres", href: "#specs" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo className="text-lg sm:text-xl" />
          </a>

          <ul className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] text-white/70">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 transition-colors hover:text-white group"
                >
                  {link.label.toUpperCase()}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center border border-teal/40 px-5 py-2.5 text-xs tracking-[0.2em] text-teal clip-chamfer-sm transition-colors hover:bg-teal hover:text-black"
          >
            PRÉ-COMMANDER
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-px w-6 bg-white"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#050505] md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="font-display text-2xl tracking-[0.15em] text-white/80 transition-colors hover:text-white"
                >
                  {link.label.toUpperCase()}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + LINKS.length * 0.07, duration: 0.5 }}
                className="mt-6 inline-flex items-center border border-teal/40 px-8 py-3 text-xs tracking-[0.2em] text-teal clip-chamfer-sm"
              >
                PRÉ-COMMANDER
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

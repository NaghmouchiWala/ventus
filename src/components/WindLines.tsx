"use client";

import { motion } from "framer-motion";

const LINES = [
  { top: "18%", width: "40%", delay: 0, duration: 3.2 },
  { top: "32%", width: "65%", delay: 0.6, duration: 3.8 },
  { top: "48%", width: "30%", delay: 1.1, duration: 3 },
  { top: "64%", width: "55%", delay: 0.3, duration: 4.2 },
  { top: "78%", width: "45%", delay: 1.6, duration: 3.5 },
];

export function WindLines({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {LINES.map((line, i) => (
        <motion.div
          key={i}
          className="absolute left-0 h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
          style={{ top: line.top, width: line.width }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "160vw", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1.2,
          }}
        />
      ))}
    </div>
  );
}

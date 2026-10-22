"use client";

import { motion } from "framer-motion";

export function PlantAccent({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 260"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1a7f74" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {[
        { d: "M100 260 C100 190 70 150 30 120 C70 130 100 160 105 210 Z", delay: 0 },
        { d: "M100 260 C100 180 130 135 180 100 C135 115 105 155 100 215 Z", delay: 0.4 },
        { d: "M100 260 C95 200 60 175 15 170 C55 172 90 195 98 230 Z", delay: 0.8 },
        { d: "M100 260 C105 195 145 160 195 155 C150 165 115 195 103 235 Z", delay: 1.2 },
      ].map((leaf, i) => (
        <motion.path
          key={i}
          d={leaf.d}
          fill="url(#leafGradient)"
          initial={{ opacity: 0, rotate: -4, transformOrigin: "100px 260px" }}
          animate={{
            opacity: 1,
            rotate: [0, 2.5, 0, -2.5, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: leaf.delay },
            rotate: {
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: leaf.delay,
            },
          }}
        />
      ))}
    </motion.svg>
  );
}

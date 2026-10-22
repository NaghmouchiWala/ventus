"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function FanBlade({
  className,
  duration = 6,
  reverse = false,
}: {
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className={cn("w-full h-full", className)}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="bladeFade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i} transform={`rotate(${(360 / 5) * i} 200 200)`}>
          <path
            d="M200,200 C200,140 220,70 200,30 C160,55 130,110 150,180 C165,205 185,205 200,200 Z"
            fill="url(#bladeFade)"
          />
        </g>
      ))}
      <circle cx="200" cy="200" r="22" fill="#050505" stroke="#ffffff" strokeWidth="2" />
      <circle cx="200" cy="200" r="6" fill="#ffffff" />
    </motion.svg>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col border border-white/10 bg-surface transition-colors duration-500 hover:border-teal/40"
    >
      <div className="absolute right-4 top-4 z-10 text-[10px] tracking-[0.2em] text-white/30">
        {product.dimension}
      </div>

      <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(45,212,191,0.12),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
        >
          <Image
            src={product.image.src}
            alt={`${product.model} — ${product.name}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-contain p-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] tracking-[0.3em] text-teal">
          {product.category.toUpperCase()}
        </p>
        <h3 className="mt-2 font-display text-xl tracking-wide">{product.model}</h3>
        <p className="mt-1 text-sm text-white/50 font-light">{product.name}</p>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">{product.tagline}</p>

        <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          {product.highlights.slice(0, 4).map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs text-white/55 leading-snug"
            >
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2">
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="h-4 w-4 rounded-full border border-white/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs tracking-[0.2em] text-white/60 transition-colors hover:text-teal"
        >
          CARACTÉRISTIQUES
          <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-base leading-none">
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <dl className="mt-4 grid grid-cols-1 gap-y-2 text-xs">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between border-b border-white/5 py-1.5"
                  >
                    <dt className="text-white/40">{spec.label}</dt>
                    <dd className="font-mono text-white/80">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

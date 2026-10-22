"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import { PRODUCTS, type Product } from "@/lib/products";

const CATEGORIES: Array<Product["category"] | "Tous"> = [
  "Tous",
  "Sol",
  "Table",
  "Mural",
  "Plafonnier",
  "Sans pales",
];

export function Products() {
  const [active, setActive] = useState<Product["category"] | "Tous">("Tous");

  const filtered = useMemo(
    () => (active === "Tous" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="collection" className="relative border-b border-line py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-teal mb-4">LA COLLECTION</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide leading-tight">
            Six machines.
            <br />
            Une seule idée de l&rsquo;air.
          </h2>
          <p className="mt-6 max-w-xl text-foreground/50 font-light">
            Du ventilateur de bureau au plafonnier design, chaque modèle VENTUS
            partage la même ingénierie silencieuse — pensée pour chaque pièce
            de votre quotidien.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`relative border px-5 py-2.5 text-xs tracking-[0.15em] transition-colors duration-300 ${
                  active === cat
                    ? "border-transparent text-invert"
                    : "border-line-strong text-foreground/60 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 bg-teal clip-chamfer-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{cat.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

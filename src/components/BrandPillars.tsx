"use client";

import { Reveal } from "./Reveal";
import { PillarIcon } from "./PillarIcon";
import { BRAND_PILLARS } from "@/lib/products";

export function BrandPillars() {
  return (
    <section className="relative border-b border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
          {BRAND_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.08}>
              <div className="group flex flex-col items-center text-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-teal/40 text-teal transition-all duration-500 group-hover:border-teal group-hover:shadow-[0_0_24px_-4px_rgba(45,212,191,0.5)]">
                  <PillarIcon name={pillar.label} className="h-7 w-7" />
                </div>
                <p className="text-[11px] sm:text-xs tracking-[0.15em] text-white/60">
                  {pillar.label.toUpperCase()}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

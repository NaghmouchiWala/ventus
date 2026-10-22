"use client";

import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const STATS = [
  { value: 32, suffix: " dB", label: "Niveau sonore minimum" },
  { value: 6000, suffix: "", label: "m³/h de débit d'air maximum" },
  { value: 9, suffix: "", label: "vitesses sur le modèle B1" },
  { value: 6, suffix: "", label: "modèles pour chaque pièce" },
];

export function Specs() {
  return (
    <section id="specs" className="relative border-b border-line py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-teal mb-4">
            EN CHIFFRES
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide">
            Mesuré en silence,
            <br />
            prouvé en mouvement.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-l border-teal/40 pl-6">
                <p className="font-display text-4xl sm:text-5xl font-semibold tracking-wide">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-xs sm:text-sm text-foreground/50 font-light leading-snug">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

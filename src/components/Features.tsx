"use client";

import { Reveal } from "./Reveal";
import { PillarIcon } from "./PillarIcon";

const FEATURES = [
  {
    index: "01",
    title: "Fraîcheur Puissante",
    description:
      "Des pales équilibrées et un débit d'air jusqu'à 6 000 m³/h pour rafraîchir chaque pièce en quelques secondes, sans effort.",
  },
  {
    index: "02",
    title: "Confort Silencieux",
    description:
      "Moteurs optimisés pour un niveau sonore aussi bas que 32 dB — un murmure, même à pleine vitesse, pour vos nuits et vos journées de travail.",
  },
  {
    index: "03",
    title: "Design Moderne",
    description:
      "Une ligne épurée, un corps monochrome et des touches teal — chaque modèle VENTUS est pensé pour sublimer votre intérieur, pas seulement le rafraîchir.",
  },
  {
    index: "04",
    title: "Télécommande",
    description:
      "Vitesses, oscillation, minuterie et mode nuit — tout se pilote à distance, sur l'ensemble de la gamme, du bureau au plafond.",
  },
];

export function Features() {
  return (
    <section
      id="technology"
      className="relative border-b border-white/10 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.4em] text-teal mb-4">
            LA TECHNOLOGIE
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide leading-tight">
            Quatre piliers.
            <br />
            Un seul souffle d&rsquo;air.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.index} delay={i * 0.12}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-white/30 tracking-widest">
                    {feature.index}
                  </span>
                  <PillarIcon
                    name={feature.title}
                    className="h-6 w-6 text-white/30 transition-colors duration-500 group-hover:text-teal"
                  />
                </div>
                <h3 className="mt-6 font-display text-lg tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50 font-light">
                  {feature.description}
                </p>
                <div className="mt-8 h-px w-0 bg-teal transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

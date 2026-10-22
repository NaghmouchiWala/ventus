"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { WindLines } from "./WindLines";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative border-b border-white/10 py-28 sm:py-40 overflow-hidden"
    >
      <WindLines className="absolute inset-0 overflow-hidden opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(45,212,191,0.08),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.4em] text-teal mb-4">
            REJOIGNEZ LE COURANT
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-balance">
            Soyez les premiers à sentir l&rsquo;air changer.
          </h2>
          <p className="mt-6 text-white/50 font-light">
            Réservez votre VENTUS et recevez un tarif de lancement, ainsi que
            les actualités de chaque nouveau modèle.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 text-sm tracking-[0.2em] text-teal"
            >
              VOUS ÊTES SUR LA LISTE — BIENVENUE CHEZ VENTUS.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 bg-transparent border border-white/25 px-5 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-teal"
              />
              <button
                type="submit"
                className="bg-teal text-black px-8 py-3.5 text-xs tracking-[0.25em] clip-chamfer transition-transform hover:scale-[1.03]"
              >
                RÉSERVER
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

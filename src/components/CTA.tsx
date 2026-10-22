"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { WindLines } from "./WindLines";

type Status = "idle" | "loading" | "success" | "error";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/preorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative border-b border-line py-28 sm:py-40 overflow-hidden"
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
          <p className="mt-6 text-foreground/50 font-light">
            Réservez votre VENTUS et recevez un tarif de lancement, ainsi que
            les actualités de chaque nouveau modèle.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {status === "success" ? (
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
                disabled={status === "loading"}
                className="flex-1 bg-transparent border border-line-strong px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-teal disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-teal text-invert px-8 py-3.5 text-xs tracking-[0.25em] clip-chamfer transition-transform hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "loading" ? "ENVOI..." : "RÉSERVER"}
              </button>
            </form>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-xs tracking-[0.15em] text-red-400"
            >
              UNE ERREUR EST SURVENUE — VEUILLEZ RÉESSAYER.
            </motion.p>
          )}
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-xs text-foreground/40">
            Une question plutôt qu&rsquo;une précommande ?{" "}
            <a href="/contact" className="text-teal underline underline-offset-4 hover:text-foreground transition-colors">
              Contactez-nous
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

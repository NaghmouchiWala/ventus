"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";

type Status = "idle" | "loading" | "success" | "error";

const SUBJECTS = [
  { value: "general", label: "Question générale" },
  { value: "sales", label: "Demande commerciale / revendeur" },
  { value: "support", label: "Support après-vente" },
  { value: "press", label: "Presse / partenariat" },
];

const inputClass =
  "w-full bg-transparent border border-line-strong px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-teal disabled:opacity-50";

function SelectChevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-foreground/40"
    >
      <path
        d="M3 6l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      subject: String(data.get("subject") || ""),
      product: String(data.get("product") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "request failed");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Veuillez réessayer ou nous écrire directement.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-teal/40 px-6 py-10 text-center clip-chamfer"
      >
        <p className="font-display text-xl tracking-wide text-teal">MESSAGE ENVOYÉ</p>
        <p className="mt-3 text-sm text-foreground/60">
          Merci de nous avoir contactés — notre équipe vous répondra sous 24 à 48 h.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[11px] tracking-[0.2em] text-foreground/50">
            NOM COMPLET *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            disabled={status === "loading"}
            placeholder="Jean Dupont"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[11px] tracking-[0.2em] text-foreground/50">
            EMAIL *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={status === "loading"}
            placeholder="vous@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-[11px] tracking-[0.2em] text-foreground/50">
            TÉLÉPHONE (OPTIONNEL)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            disabled={status === "loading"}
            placeholder="+33 6 00 00 00 00"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="product" className="mb-2 block text-[11px] tracking-[0.2em] text-foreground/50">
            MODÈLE CONCERNÉ (OPTIONNEL)
          </label>
          <div className="relative">
            <select
              id="product"
              name="product"
              disabled={status === "loading"}
              defaultValue=""
              className={`${inputClass} appearance-none pr-10`}
            >
              <option value="">Aucun en particulier</option>
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.model}>
                  {p.model} — {p.name}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-[11px] tracking-[0.2em] text-foreground/50">
          SUJET *
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            required
            disabled={status === "loading"}
            defaultValue=""
            className={`${inputClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Choisissez un sujet
            </option>
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          <SelectChevron />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[11px] tracking-[0.2em] text-foreground/50">
          MESSAGE *
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={4000}
          rows={6}
          disabled={status === "loading"}
          placeholder="Décrivez votre demande…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.1em] text-red-400"
        >
          {errorMsg}
        </motion.p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center bg-teal text-invert px-8 py-3.5 text-xs tracking-[0.25em] clip-chamfer transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "loading" ? "ENVOI..." : "ENVOYER LE MESSAGE"}
      </button>
    </form>
  );
}

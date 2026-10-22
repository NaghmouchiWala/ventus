import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { WindLines } from "@/components/WindLines";

export const metadata: Metadata = {
  title: "Contact — VENTUS",
  description:
    "Contactez l'équipe VENTUS pour toute question, demande commerciale ou support après-vente.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="noise relative overflow-hidden border-b border-line pt-40 pb-20 sm:pt-48 sm:pb-28">
          <WindLines className="absolute inset-0 overflow-hidden opacity-50" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,var(--overlay),transparent_70%)]"
          />
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="text-xs tracking-[0.4em] text-teal mb-4">NOUS CONTACTER</p>
              <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-wide text-balance">
                Parlons de votre projet.
              </h1>
              <p className="mt-6 text-foreground/60 font-light max-w-xl mx-auto">
                Une question sur un modèle, une demande de revendeur ou besoin
                d&rsquo;assistance — notre équipe vous répond sous 24 à 48 h.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
              <Reveal className="lg:col-span-2">
                <div className="lg:sticky lg:top-28">
                  <h2 className="font-display text-xl tracking-wide">
                    COORDONNÉES
                  </h2>
                  <div className="mt-6 space-y-6">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] text-foreground/40">EMAIL</p>
                      <a
                        href="mailto:ventus@galylio.com"
                        className="mt-1 inline-block text-sm text-foreground hover:text-teal transition-colors"
                      >
                        ventus@galylio.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.2em] text-foreground/40">
                        TEMPS DE RÉPONSE
                      </p>
                      <p className="mt-1 text-sm text-foreground/70">24 – 48 heures ouvrées</p>
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.2em] text-foreground/40">CONCEPTION</p>
                      <p className="mt-1 text-sm text-foreground/70">Designed in France</p>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-line pt-8">
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      Pour une réservation rapide sans message détaillé,
                      utilisez le formulaire de précommande sur la page
                      d&rsquo;accueil.
                    </p>
                    <a
                      href="/#contact"
                      className="mt-4 inline-flex items-center border border-teal/40 px-5 py-2.5 text-xs tracking-[0.2em] text-teal clip-chamfer-sm transition-colors hover:bg-teal hover:text-invert"
                    >
                      PRÉ-COMMANDER UN MODÈLE
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-3">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

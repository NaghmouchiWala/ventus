import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <Logo className="text-xl" withTagline />

          <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs tracking-[0.2em] text-foreground/40">
            <a href="#technology" className="hover:text-teal transition-colors">
              TECHNOLOGIE
            </a>
            <a href="#collection" className="hover:text-teal transition-colors">
              COLLECTION
            </a>
            <a href="#specs" className="hover:text-teal transition-colors">
              CHIFFRES
            </a>
            <a href="#contact" className="hover:text-teal transition-colors">
              CONTACT
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] tracking-[0.15em] text-foreground/30">
          <p>© {new Date().getFullYear()} VENTUS. TOUS DROITS RÉSERVÉS.</p>
          <p>L&rsquo;AIR D&rsquo;UN MEILLEUR QUOTIDIEN.</p>
        </div>
      </div>
    </footer>
  );
}

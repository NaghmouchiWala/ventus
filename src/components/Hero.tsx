"use client";

import { motion } from "framer-motion";
import { FanBlade } from "./FanBlade";
import { WindLines } from "./WindLines";

const WORD = "VENTUS";

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.07,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="noise relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-line"
    >
      {/* concentric airflow rings */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: [0, 0.14, 0.14, 0], scale: [0.85, 1.6] }}
            transition={{
              duration: 7,
              delay: i * 1.75,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute aspect-square w-[70vmin] rounded-full border border-teal/40"
          />
        ))}
      </div>

      <WindLines className="absolute inset-0 overflow-hidden" />

      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,var(--overlay),transparent_70%)]"
      />

      {/* giant fan blade behind text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.16, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[560px] h-[560px] sm:w-[720px] sm:h-[720px] pointer-events-none"
      >
        <FanBlade duration={9} />
      </motion.div>

      {/* teal ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_60%,rgba(45,212,191,0.07),transparent_70%)]"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 text-xs sm:text-sm tracking-[0.5em] text-teal"
        >
          L&rsquo;AIR D&rsquo;UN MEILLEUR QUOTIDIEN
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative mb-10 inline-flex items-center gap-2.5 border border-line px-4 py-1.5 clip-chamfer-sm"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1.2, duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 border border-teal/40 clip-chamfer-sm"
          />
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ delay: 1.2, duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-2.5 w-4 overflow-hidden rounded-[1px]"
          >
            <span className="h-full w-1/3 bg-[#0055A4]" />
            <span className="h-full w-1/3 bg-[#f5f5f5]" />
            <span className="h-full w-1/3 bg-[#EF4135]" />
          </motion.span>
          <span className="relative text-[10px] tracking-[0.25em] text-foreground/60">
            DESIGNED IN FRANCE
          </span>
        </motion.div>

        <h1 className="font-display font-semibold leading-none text-[13.5vw] sm:text-[11vw] md:text-[9rem] lg:text-[10.5rem] tracking-[0.02em] sm:tracking-[0.05em] flex overflow-hidden">
          {WORD.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-8 max-w-xl text-balance text-base sm:text-lg text-foreground/60 font-light"
        >
          Ventilateurs sur pied, de table, muraux, plafonniers et sans pales —
          une même exigence de silence, de puissance et de design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#collection"
            className="inline-flex items-center justify-center bg-teal text-invert px-8 py-3.5 text-xs tracking-[0.25em] clip-chamfer transition-transform hover:scale-[1.03]"
          >
            DÉCOUVRIR LA COLLECTION
          </a>
          <a
            href="#technology"
            className="inline-flex items-center justify-center border border-line-strong px-8 py-3.5 text-xs tracking-[0.25em] text-foreground/80 clip-chamfer transition-colors hover:border-foreground hover:text-foreground"
          >
            LA TECHNOLOGIE
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 text-foreground/40"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-foreground/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

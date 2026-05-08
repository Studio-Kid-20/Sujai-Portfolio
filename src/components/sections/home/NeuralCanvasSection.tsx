import { motion } from "framer-motion";

import { SectionHeading } from "@/components/common/SectionHeading";
import { HOME_SYSTEM_PILLARS, HOME_SYSTEM_SIGNALS } from "@/data/pages/home";

const accentClasses = {
  primary: "from-primary/40 to-primary/5 text-primary",
  secondary: "from-secondary/40 to-secondary/5 text-secondary",
  tertiary: "from-tertiary/40 to-tertiary/5 text-tertiary",
} as const;

export function NeuralCanvasSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-20 h-80 bg-[radial-gradient(circle_at_center,rgba(182,160,255,0.16),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-8">
        <SectionHeading
          eyebrow="Creative System"
          title="The Neural Fabric."
          description="A cleaner look at how ideas move through my process: from rough concept, through interface decisions, into motion, code, and polished delivery."
          align="center"
          showLine
          titleClassName="md:text-6xl"
          descriptionClassName="max-w-3xl"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {HOME_SYSTEM_PILLARS.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: 0.1 + index * 0.08 }}
                className="glass-card rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-2xl font-bold title-gradient">{pillar.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-on-surface-variant">{pillar.description}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-label text-[10px] uppercase tracking-[0.24em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 font-label text-[10px] uppercase tracking-[0.24em] text-on-surface-variant">
                  {pillar.metric}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[640px] overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_30px_120px_rgba(8,8,30,0.45)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,236,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,108,149,0.08),transparent_30%)]" />
            <div className="absolute inset-6 rounded-[30px] border border-white/6" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(129, 236, 255, 0.25)" />
                  <stop offset="50%" stopColor="rgba(182, 160, 255, 0.8)" />
                  <stop offset="100%" stopColor="rgba(255, 108, 149, 0.25)" />
                </linearGradient>
              </defs>

              {HOME_SYSTEM_SIGNALS.map((signal, index) => (
                <motion.line
                  key={signal.id}
                  x1="50"
                  y1="50"
                  x2={signal.x}
                  y2={signal.y}
                  stroke="url(#signalGradient)"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  strokeDasharray="1.8 1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.08 }}
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5 bg-primary/5 blur-2xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 will-change-transform"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 will-change-transform"
            />

            <div className="absolute left-1/2 top-1/2 z-20 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[34px] border border-white/12 bg-[#080812]/90 text-center shadow-[0_0_50px_rgba(182,160,255,0.18)]">
              <span className="font-label text-[10px] uppercase tracking-[0.35em] text-primary">Core System</span>
              <p className="mt-3 font-headline text-4xl font-black title-gradient">SUJAI</p>
              <p className="mt-3 max-w-[10rem] text-xs leading-5 text-on-surface-variant">
                Turning imagination into responsive, high-contrast interfaces.
              </p>
              <div className="mt-5 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(182,160,255,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-tertiary shadow-[0_0_12px_rgba(129,236,255,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_12px_rgba(255,108,149,0.8)]" />
              </div>
            </div>

            {HOME_SYSTEM_SIGNALS.map((signal, index) => (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.18 + index * 0.08 }}
                className="absolute z-20 w-[9.5rem] -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${signal.x}%`, top: `${signal.y}%` }}
              >
                <div className="rounded-[22px] border border-white/10 bg-[#101024]/80 p-3 shadow-lg backdrop-blur-md">
                  <div
                    className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 font-label text-[10px] uppercase tracking-[0.24em] ${accentClasses[signal.accent]}`}
                  >
                    {signal.label}
                  </div>
                  <p className="mt-3 text-sm font-medium text-white">{signal.caption}</p>
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
              <p className="font-label text-[10px] uppercase tracking-[0.28em] text-on-surface-variant">Active loop</p>
              <p className="mt-1 text-sm text-white">Sketch to structure to ship</p>
            </div>

            <div className="absolute right-6 top-6 z-20 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
              <p className="font-label text-[10px] uppercase tracking-[0.28em] text-on-surface-variant">Build mode</p>
              <p className="mt-1 text-sm text-white">Calm systems, bold visuals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

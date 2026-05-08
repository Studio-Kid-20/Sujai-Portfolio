import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HeroHeadline } from "@/components/sections/home/hero/HeroHeadline";
import { HeroVisualCard } from "@/components/sections/home/hero/HeroVisualCard";
import { Chip } from "@/components/ui/Chip";
import MagneticButton from "@/components/ui/MagneticButton";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import {
  HOME_HERO_BADGE,
  HOME_HERO_CTA,
  HOME_HERO_INTRO,
  HOME_SKILL_PILLS,
} from "@/data/pages/home";

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 110,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pb-32 pt-32 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-label text-xs uppercase tracking-widest text-primary backdrop-blur-md">
              {HOME_HERO_BADGE}
            </span>

            <HeroHeadline containerVariants={headlineVariants} wordVariants={wordVariants} />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl"
            >
              {HOME_HERO_INTRO}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticButton>
              <Link
                to="/projects"
                className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-primary px-10 py-5 font-bold text-on-primary transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{HOME_HERO_CTA}</span>
                <MaterialIcon
                  name="arrow_forward"
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/0 via-white/20 to-secondary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </MagneticButton>

            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-2xl border border-outline-variant/30 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Start a Conversation
              <div className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-3 pt-12"
          >
            {HOME_SKILL_PILLS.map((pill, index) => (
              <motion.div
                key={pill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Chip>{pill}</Chip>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <HeroVisualCard />
      </div>
    </section>
  );
}

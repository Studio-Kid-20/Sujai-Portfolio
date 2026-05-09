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

const staticHeadlineVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const staticWordVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pb-32 pt-32 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-label text-xs uppercase tracking-widest text-primary">
              {HOME_HERO_BADGE}
            </span>

            {/* Static Headline — No entrance animation */}
            <HeroHeadline containerVariants={staticHeadlineVariants} wordVariants={staticWordVariants} />

            <p className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
              {HOME_HERO_INTRO}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
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
              className="group flex items-center gap-2 rounded-2xl border border-outline-variant/30 bg-white/5 px-10 py-5 font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              Start a Conversation
              <div className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-20">
            {HOME_SKILL_PILLS.map((pill) => (
              <Chip key={pill}>{pill}</Chip>
            ))}
          </div>
        </div>

        <HeroVisualCard />
      </div>
    </section>
  );
}

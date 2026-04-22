import { Link } from "react-router-dom";

import {
  EXPERIENCE_HIGHLIGHT,
  HOME_HERO_BADGE,
  HOME_HERO_CTA,
  HOME_HERO_HEADING,
  HOME_HERO_INTRO,
  HOME_SKILL_PILLS,
} from "@/content/site";
import { Chip } from "@/components/ui/Chip";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const heroImg = "/assets/hero-visual.jpg";

export function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-6rem)] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[20%] h-[30%] w-[30%] rounded-full bg-tertiary/10 blur-[100px]" />
      </div>
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center px-8 pb-20 pt-12 md:pt-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <span className="inline-block rounded-full border border-white/5 bg-surface-variant/50 px-4 py-1.5 font-label text-xs uppercase tracking-widest text-tertiary light:border-slate-200 light:bg-white/80 light:text-violet-800">
                {HOME_HERO_BADGE}
              </span>
              <h1 className="font-headline text-5xl font-extrabold leading-[1.02] tracking-tighter text-white md:text-7xl light:text-slate-900">
                <span className="block">{HOME_HERO_HEADING.split(". ")[0]}.</span>
                <span className="block bg-gradient-to-r from-primary via-secondary-dim to-secondary bg-clip-text text-transparent">
                  {HOME_HERO_HEADING.split(". ")[1]}
                </span>
              </h1>
              <p className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl light:text-slate-600">
                {HOME_HERO_INTRO}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="group relative rounded-xl bg-gradient-to-r from-primary to-primary-dim px-8 py-4 font-bold text-on-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(182,160,255,0.4)] active:scale-95"
              >
                {HOME_HERO_CTA}
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-outline-variant/30 bg-surface-variant/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-surface-variant/40 light:border-slate-300 light:bg-white/60 light:text-slate-900 light:hover:bg-white"
              >
                Start a Conversation
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-12">
              {HOME_SKILL_PILLS.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative flex aspect-square w-full animate-float-slow items-center justify-center will-change-transform motion-reduce:animate-none">
              <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-primary/30 to-secondary/30 opacity-50 blur-2xl" />
              <div className="glass-panel relative z-20 flex aspect-[4/5] w-4/5 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl light:border-slate-200 light:bg-white/70">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-tr from-surface-container-high to-surface-variant">
                  <img
                    src={heroImg}
                    alt="Abstract visual artwork with layered glass-like ribbons"
                    className="h-full w-full object-cover opacity-80 mix-blend-overlay"
                    loading="eager"
                  />
                </div>
                <div className="space-y-3 text-sm text-on-surface-variant light:text-slate-600">
                  <p className="rounded-2xl bg-white/5 px-4 py-3 light:bg-slate-100">
                    First major deployment: {EXPERIENCE_HIGHLIGHT.milestone}
                  </p>
                  <p className="rounded-2xl bg-white/5 px-4 py-3 light:bg-slate-100">
                    Browser-built layouts with a visual artist's mindset.
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-surface-container bg-primary-container" />
                    <div className="h-8 w-8 rounded-full border-2 border-surface-container bg-secondary-container" />
                    <div className="h-8 w-8 rounded-full border-2 border-surface-container bg-tertiary-container" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 light:bg-slate-200">
                    <MaterialIcon name="bolt" className="text-sm text-white light:text-slate-900" />
                  </div>
                </div>
              </div>
              <div className="glass-panel absolute right-[-10px] top-[-20px] z-30 flex items-center gap-3 rounded-2xl border border-white/20 bg-secondary/20 p-4 shadow-xl light:border-slate-200 light:bg-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                  <MaterialIcon name="brush" className="text-white" />
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">
                    Design Focus
                  </p>
                  <p className="font-headline text-sm font-bold text-white light:text-slate-900">Imagery Artist</p>
                </div>
              </div>
              <div className="glass-panel absolute bottom-[-30px] left-[-20px] z-30 flex items-center gap-3 rounded-2xl border border-white/20 bg-tertiary/20 p-4 shadow-xl light:border-slate-200 light:bg-white/90">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary">
                  <MaterialIcon name="code" className="text-on-tertiary" />
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Dev Focus</p>
                  <p className="font-headline text-sm font-bold text-white light:text-slate-900">HTML, CSS, JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

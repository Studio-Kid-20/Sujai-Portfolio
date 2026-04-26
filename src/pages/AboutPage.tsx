import { Link } from "react-router-dom";
import { ABOUT_HIGHLIGHTS, ABOUT_STORY, EXPERIENCE_HIGHLIGHT } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const workspaceImg = "/assets/about-studio.jpg";

export function AboutPage() {
  return (
    <main className="space-y-24 pb-24 pt-12">
      <section className="mx-auto max-w-7xl px-8" aria-labelledby="about-heading">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full space-y-8 lg:w-1/2">
            <Reveal direction="right">
              <div className="space-y-4">
                <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                  The Story Behind The Build
                </span>
                <h1
                  id="about-heading"
                  className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl text-white"
                >
                  From sketchbook lines to browser layers.
                </h1>
              </div>
            </Reveal>
            
            <Reveal direction="right" delay={0.4}>
              <p className="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
                {ABOUT_STORY}
              </p>
            </Reveal>

            <div className="grid gap-4">
              {ABOUT_HIGHLIGHTS.map((highlight, i) => (
                <Reveal key={highlight} direction="right" delay={0.5 + i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-on-surface-variant backdrop-blur-md">
                    {highlight}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="right" delay={0.8}>
              <div className="rounded-3xl border border-secondary/20 bg-secondary/5 p-8 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <MaterialIcon name="auto_awesome" className="text-4xl text-secondary" />
                </div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Milestone</p>
                <h2 className="mt-3 font-headline text-2xl font-bold text-white">
                  {EXPERIENCE_HIGHLIGHT.milestone}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {EXPERIENCE_HIGHLIGHT.description}
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={1}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-primary px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                >
                  Let's Build
                </Link>
                <Link
                  to="/projects"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  Explore Projects
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative w-full lg:w-1/2">
            <Reveal direction="left" delay={0.6}>
              <TiltCard>
                <div className="glass-card relative z-10 rotate-3 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <img
                    src={workspaceImg}
                    alt="Creative studio workspace"
                    className="aspect-square w-full rounded-2xl object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/20 to-transparent" />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}



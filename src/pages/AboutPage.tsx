import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ABOUT_PAGE_COPY } from "@/data/pages/about";

const workspaceImg = "/assets/about-studio.jpg";

export function AboutPage() {
  return (
    <main className="space-y-24 pb-24 pt-12">
      <section className="mx-auto max-w-7xl px-8" aria-labelledby="about-heading">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="w-full space-y-8 lg:w-1/2">
            <Reveal>
              <SectionHeading
                as="h1"
                titleId="about-heading"
                eyebrow={ABOUT_PAGE_COPY.eyebrow}
                title={ABOUT_PAGE_COPY.title}
                titleClassName="md:text-5xl font-syne"
              />
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
                {ABOUT_PAGE_COPY.story}
              </p>
            </Reveal>

            <div className="grid gap-4">
              {ABOUT_PAGE_COPY.highlights.map((highlight, i) => (
                <Reveal key={highlight} delay={0.5 + i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-base text-on-surface-variant backdrop-blur-md font-jersey20">
                    {highlight}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.8}>
              <div className="rounded-3xl border border-secondary/20 bg-secondary/5 p-8 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <MaterialIcon name="auto_awesome" className="text-4xl text-secondary" />
                </div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary">Milestone</p>
                <h2 className="title-gradient mt-3 text-3xl font-bold">
                  {ABOUT_PAGE_COPY.milestone.title}
                </h2>
                <p className="mt-3 font-jersey20 text-base leading-relaxed text-on-surface-variant">
                  {ABOUT_PAGE_COPY.milestone.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-primary px-8 py-4 font-bold text-on-primary shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 font-inter"
                >
                  Let's Build
                </Link>
                <Link
                  to="/projects"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 font-inter"
                >
                  Explore Projects
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative w-full lg:w-1/2">
            <Reveal delay={0.6}>
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

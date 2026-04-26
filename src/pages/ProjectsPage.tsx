import { PAGE_TAGLINE_BY_PATH } from "@/content/site";
import { devProjects } from "@/content/projects";
import { ProjectDevCard } from "@/components/sections/ProjectDevCard";
import { VisualExplorationsBento } from "@/components/sections/VisualExplorationsBento";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <section className="mb-24" aria-labelledby="projects-hero-heading">
        <Reveal>
          <span className="mb-4 block font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Build Archive
          </span>
          <h1
            id="projects-hero-heading"
            className="mb-6 bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text font-headline text-5xl font-extrabold tracking-tighter text-transparent md:text-8xl"
          >
            Builds & Milestones.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            {PAGE_TAGLINE_BY_PATH["/projects"]}
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-tertiary rounded-full mt-10" />
        </Reveal>
      </section>

      <section className="mb-32" aria-labelledby="dev-works-heading">
        <Reveal>
          <div className="mb-16">
            <h2 id="dev-works-heading" className="font-headline text-3xl font-bold text-white md:text-5xl">
              Selected Work
            </h2>
            <div className="mt-4 h-1 w-12 bg-primary" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {devProjects.map((p, i) => (
            <Reveal key={p.id} delay={0.2 + i * 0.1}>
              <ProjectDevCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="mb-16">
          <h2 className="font-headline text-3xl font-bold text-white md:text-5xl">
            Visual Explorations
          </h2>
          <div className="mt-4 h-1 w-12 bg-secondary" />
        </div>
        <VisualExplorationsBento />
      </Reveal>
    </main>
  );
}


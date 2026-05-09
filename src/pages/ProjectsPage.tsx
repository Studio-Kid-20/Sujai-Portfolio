import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { VisualExplorationsGrid } from "@/components/sections/projects/VisualExplorationsGrid";
import { Reveal } from "@/components/ui/Reveal";
import { devProjects } from "@/data/portfolio";
import { PROJECTS_PAGE_COPY } from "@/data/pages/projects";

export function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-12">
      <section className="mb-24" aria-labelledby="projects-hero-heading">
        <Reveal>
          <SectionHeading
            as="h1"
            titleId="projects-hero-heading"
            eyebrow={PROJECTS_PAGE_COPY.eyebrow}
            title={PROJECTS_PAGE_COPY.title}
            description={PROJECTS_PAGE_COPY.intro}
            showLine
            titleClassName="md:text-6xl font-syne"
            descriptionClassName="text-xl"
          />
        </Reveal>
      </section>

      <section className="mb-32" aria-labelledby="dev-works-heading">
        <Reveal>
          <div className="mb-16">
            <h2 id="dev-works-heading" className="title-gradient font-jersey25 text-4xl font-bold md:text-6xl">
              Selected Work
            </h2>
            <div className="mt-4 h-1 w-12 bg-primary" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {devProjects.map((p, i) => (
            <Reveal key={p.id} delay={0.2 + i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="mb-16">
          <h2 id="visual-heading" className="title-gradient font-jersey25 text-4xl font-bold md:text-6xl">
            Visual Explorations
          </h2>
          <div className="mt-4 h-1 w-12 bg-secondary" />
        </div>
        <VisualExplorationsGrid />
      </Reveal>
    </main>
  );
}

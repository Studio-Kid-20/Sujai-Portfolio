import { SectionHeading } from "@/components/common/SectionHeading";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { NeuralCanvasSection } from "@/components/sections/home/NeuralCanvasSection";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { VisualExplorationsGrid } from "@/components/sections/projects/VisualExplorationsGrid";
import { SkillsArsenal } from "@/components/sections/skills/SkillsArsenal";
import { Reveal } from "@/components/ui/Reveal";
import { devProjects } from "@/data/portfolio";
import { HOME_SECTION_COPY } from "@/data/pages/home";

export function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-6rem)]">
      <HeroSection />

      <section className="mx-auto max-w-7xl space-y-32 px-8 py-24">
        <Reveal>
          <SectionHeading
            titleId="skills-heading"
            title={HOME_SECTION_COPY.skills.title}
            description={HOME_SECTION_COPY.skills.description}
            titleClassName="text-3xl md:text-4xl"
          />
          <SkillsArsenal />
        </Reveal>

        <div className="space-y-16">
          <Reveal>
            <SectionHeading
            title={HOME_SECTION_COPY.projects.title}
            description={HOME_SECTION_COPY.projects.description}
            titleClassName="text-3xl md:text-4xl"
          />
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {devProjects.slice(0, 2).map((project, index) => (
              <Reveal key={project.title} delay={0.2 + index * 0.1}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <NeuralCanvasSection />

        <Reveal>
          <SectionHeading
            titleId="visual-heading"
            title={HOME_SECTION_COPY.explorations.title}
            description={HOME_SECTION_COPY.explorations.description}
            titleClassName="text-3xl md:text-4xl"
          />
          <VisualExplorationsGrid />
        </Reveal>
      </section>
    </main>
  );
}

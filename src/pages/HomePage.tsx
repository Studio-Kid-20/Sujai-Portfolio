import { SectionHeading } from "@/components/common/SectionHeading";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { SkillsArsenal } from "@/components/sections/skills/SkillsArsenal";
import { NeuralCanvasSection } from "@/components/sections/home/NeuralCanvasSection";
import { VisualExplorationsGrid } from "@/components/sections/projects/VisualExplorationsGrid";
import { devProjects } from "@/data/portfolio";
import { HOME_SECTION_COPY } from "@/data/pages/home";

export function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-6rem)]">
      <HeroSection />

      <div className="mx-auto max-w-7xl space-y-28 px-8 py-20">
        {/* Skills Section */}
        <section aria-labelledby="skills-heading">
          <SectionHeading
            titleId="skills-heading"
            title={HOME_SECTION_COPY.skills.title}
            description={HOME_SECTION_COPY.skills.description}
            titleClassName="text-3xl md:text-4xl"
            descriptionClassName="font-jersey20"
          />
          <div className="mt-10">
            <SkillsArsenal />
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-16" aria-labelledby="projects-heading">
          <SectionHeading
            titleId="projects-heading"
            title={HOME_SECTION_COPY.projects.title}
            description={HOME_SECTION_COPY.projects.description}
            titleClassName="text-3xl md:text-4xl"
            descriptionClassName="font-jersey20"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {devProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* System Section */}
        <NeuralCanvasSection />

        {/* Visual Explorations */}
        <section aria-labelledby="visual-heading">
          <SectionHeading
            titleId="visual-heading"
            title={HOME_SECTION_COPY.explorations.title}
            description={HOME_SECTION_COPY.explorations.description}
            titleClassName="text-3xl md:text-4xl"
            descriptionClassName="font-jersey20"
          />
          <div className="mt-10">
            <VisualExplorationsGrid />
          </div>
        </section>
      </div>
    </main>
  );
}

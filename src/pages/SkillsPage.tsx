import { SkillsArsenal } from "@/components/sections/SkillsArsenal";
import { Reveal } from "@/components/ui/Reveal";

export function SkillsPage() {
  return (
    <main className="pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-8 mb-20">
        <Reveal>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-headline text-5xl font-extrabold text-white md:text-7xl">
              Skills Arsenal
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              A curated collection of tools and technologies I use to bring ideas to life.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-tertiary rounded-full mt-6" />
          </div>
        </Reveal>
      </div>
      
      <SkillsArsenal />
    </main>
  );
}


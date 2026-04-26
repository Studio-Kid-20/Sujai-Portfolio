import type { Project } from "@/content/types";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

type ProjectDevCardProps = {
  project: Project;
};

export function ProjectDevCard({ project }: ProjectDevCardProps) {
  const hasLive = Boolean(project.liveUrl);
  const hasRepo = Boolean(project.repoUrl);

  return (
    <TiltCard className="h-full">
      <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(182,160,255,0.2)]">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          
          <div className="absolute right-4 top-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md">
                <MaterialIcon name="visibility" className="text-primary" />
             </div>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/5 bg-white/5 px-4 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant transition-colors group-hover:border-primary/30 group-hover:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="mb-3 font-headline text-2xl font-bold text-white transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          
          <p className="mb-8 text-sm leading-relaxed text-on-surface-variant line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-auto flex items-center justify-between gap-4">
            {hasLive && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-on-primary transition-all"
              >
                <MaterialIcon name="rocket_launch" className="text-sm" />
                {project.liveLabel ?? "View Project"}
              </motion.a>
            )}
            
            {hasRepo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
                aria-label="Source code"
              >
                <MaterialIcon name="code" />
              </motion.a>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}


import type { Project } from "@/types";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { motion } from "framer-motion";

type ProjectDevCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectDevCardProps) {
  const hasLive = Boolean(project.liveUrl);
  const hasRepo = Boolean(project.repoUrl);

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(182,160,255,0.2)]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c21] via-transparent to-transparent opacity-80" />
        
        <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md">
              <MaterialIcon name="visibility" className="text-primary" />
           </div>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/5 bg-white/5 px-3 py-1 font-bold uppercase tracking-wider text-on-surface-variant transition-colors group-hover:text-primary font-jersey15 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="mb-2 min-h-[4rem] text-3xl font-bold text-white transition-colors group-hover:text-primary line-clamp-2">
          {project.title}
        </h3>
        
        <p className="mb-6 font-jersey20 text-base leading-relaxed text-on-surface-variant line-clamp-2">
          {project.description}
        </p>
        
        <div className="mt-auto flex items-center gap-3">
          {hasLive && (
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-jersey15 text-base font-bold text-on-primary transition-all hover:bg-primary/90"
            >
              <MaterialIcon name="rocket_launch" className="text-base" />
              {project.liveLabel ?? "View"}
            </motion.a>
          )}
          
          {hasRepo && (
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
              aria-label="Source code"
            >
              <MaterialIcon name="code" />
            </motion.a>
          )}
        </div>
      </div>
    </article>
  );
}

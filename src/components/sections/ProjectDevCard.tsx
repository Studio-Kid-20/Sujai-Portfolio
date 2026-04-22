import type { Project } from "@/content/types";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

type ProjectDevCardProps = {
  project: Project;
};

export function ProjectDevCard({ project }: ProjectDevCardProps) {
  const hasLive = Boolean(project.liveUrl);
  const hasRepo = Boolean(project.repoUrl);

  return (
    <article className="glass-card group overflow-hidden rounded-2xl transition-all duration-500 glow-hover hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/80 to-transparent" />
      </div>
      <div className="flex min-h-[21rem] flex-col p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-bright px-3 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-tertiary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 font-headline text-xl font-bold text-white light:text-slate-900">{project.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-on-surface-variant light:text-slate-600">
          {project.description}
        </p>
        {hasLive || hasRepo ? (
          <div className="mt-auto flex gap-4 pt-6">
            {hasLive ? (
              <a
                href={project.liveUrl}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dim px-4 py-3 text-sm font-bold text-on-primary transition-opacity hover:opacity-90"
              >
                <MaterialIcon name="open_in_new" className="text-sm" />
                {project.liveLabel ?? "Live Demo"}
              </a>
            ) : null}
            {hasRepo ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 light:bg-slate-200 light:text-slate-900 light:hover:bg-slate-300"
                aria-label={`${project.title} source code`}
              >
                <MaterialIcon name="code" className="text-white light:text-slate-900" />
                {project.repoLabel ?? "GitHub Profile"}
              </a>
            ) : null}
          </div>
        ) : (
          <p className="mt-auto pt-6 text-sm font-medium text-tertiary">Case study details available on request.</p>
        )}
      </div>
    </article>
  );
}

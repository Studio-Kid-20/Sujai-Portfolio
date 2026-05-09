import { SectionHeading } from "@/components/common/SectionHeading";
import { designTiles } from "@/data/portfolio";
import { DESIGNS_PAGE_COPY } from "@/data/pages/designs";

export function DesignsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-12">
      <section className="mb-12" aria-labelledby="designs-heading">
        <SectionHeading
          as="h1"
          titleId="designs-heading"
          eyebrow={DESIGNS_PAGE_COPY.eyebrow}
          title={DESIGNS_PAGE_COPY.title}
          description={DESIGNS_PAGE_COPY.intro}
          titleClassName="md:text-5xl font-syne"
          descriptionClassName="font-body"
        />
      </section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {designTiles.map((tile) => (
          <article
            key={tile.id}
            className="glass-card overflow-hidden rounded-2xl border border-white/5 light:border-slate-200"
          >
            {tile.imageSrc ? (
              <div className="relative h-48 overflow-hidden">
                <img src={tile.imageSrc} alt={tile.imageAlt ?? tile.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent light:from-[#f4f2fb]/90" />
              </div>
            ) : null}
            <div className="p-6">
              <p className="mb-1 font-label text-[10px] font-bold uppercase tracking-widest text-secondary">
                {tile.label || "Exploration"}
              </p>
              <h2 className="title-gradient font-jersey25 text-2xl font-bold">{tile.title}</h2>
              {tile.subtitle ? (
                <p className="mt-2 font-jersey20 text-base text-on-surface-variant light:text-slate-600">{tile.subtitle}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

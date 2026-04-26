import { designTiles } from "@/content/projects";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

export function VisualExplorationsBento() {
  const fintech = designTiles.find((t) => t.id === "concept-frames")!;
  const blueprints = designTiles.find((t) => t.id === "marketplace-flows")!;
  const brand = designTiles.find((t) => t.id === "poster-energy")!;
  const motionTile = designTiles.find((t) => t.id === "motion-drafts")!;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="mb-32" aria-labelledby="visual-heading">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 md:min-h-[600px] md:grid-cols-4 md:grid-rows-2"
      >
        <motion.div variants={item} className="md:col-span-2 md:row-span-2">
          <TiltCard className="h-full">
            <div className="glass-card group relative h-full min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-primary/50">
              {fintech.imageSrc && (
                <img
                  src={fintech.imageSrc}
                  alt={fintech.imageAlt ?? ""}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  {fintech.label}
                </span>
                <h3 className="mb-4 font-headline text-3xl font-bold text-white md:text-5xl">
                  {fintech.title}
                </h3>
                <p className="mb-6 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {fintech.subtitle}
                </p>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-sm font-bold text-secondary"
                >
                  Explore interface study <MaterialIcon name="arrow_forward" />
                </motion.div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div variants={item} className="md:col-span-2 md:row-span-1">
          <TiltCard className="h-full">
            <div className="glass-card group relative h-full min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-tertiary/50">
              {blueprints.imageSrc && (
                <img
                  src={blueprints.imageSrc}
                  alt={blueprints.imageAlt ?? ""}
                  className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <span className="mb-2 block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">
                  {blueprints.label}
                </span>
                <h3 className="font-headline text-2xl font-bold text-white md:text-3xl">{blueprints.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-on-surface-variant">
                  {blueprints.subtitle}
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div variants={item} className="md:col-span-1 md:row-span-1">
          <div className="glass-card group relative h-full min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-primary/50">
            {brand.imageSrc && (
              <img
                src={brand.imageSrc}
                alt={brand.imageAlt ?? ""}
                className="h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div>
                <h3 className="font-headline text-xl font-bold text-white">{brand.title}</h3>
                <p className="mt-2 font-label text-[10px] uppercase tracking-wider text-on-surface-variant">{brand.subtitle}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="md:col-span-1 md:row-span-1">
          <div className="glass-card group relative h-full min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-secondary/50">
            {motionTile.imageSrc && (
              <img
                src={motionTile.imageSrc}
                alt={motionTile.imageAlt ?? ""}
                className="h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                <MaterialIcon name="motion_mode" className="text-2xl text-white" />
              </div>
              <h3 className="font-headline text-xl font-bold text-white">{motionTile.title}</h3>
              <p className="mt-2 font-label text-[10px] uppercase tracking-wider text-on-surface-variant">{motionTile.subtitle}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


import type { SkillCategory } from "@/content/types";
import { skillCategories } from "@/content/projects";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { motion } from "framer-motion";

const accentBar: Record<SkillCategory["accent"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
};

const accentBorder: Record<SkillCategory["accent"], string> = {
  primary: "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(182,160,255,0.2)]",
  secondary: "hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(255,108,149,0.2)]",
  tertiary: "hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(129,236,255,0.2)]",
};

const accentBadge: Record<SkillCategory["accent"], string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  tertiary: "bg-tertiary/10 text-tertiary",
};

export function SkillsArsenal() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="mx-auto max-w-7xl" aria-labelledby="skills-heading">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-12 md:grid-cols-3"
      >
        {skillCategories.map((cat) => (
          <motion.div key={cat.id} variants={item} className="space-y-8">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 ${
                  cat.accent === "primary" ? "text-primary" : cat.accent === "secondary" ? "text-secondary" : "text-tertiary"
                }`}>
                <MaterialIcon name={cat.icon} className="text-2xl" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-white">{cat.title}</h3>
            </div>

            {cat.bars && (
              <div className="space-y-4">
                {cat.bars.map((bar) => (
                  <div
                    key={bar.name}
                    className={`glass-card rounded-2xl border border-white/5 p-6 transition-all duration-500 ${accentBorder[cat.accent]} group`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-body font-bold text-on-surface-variant group-hover:text-white transition-colors">
                        {bar.name}
                      </span>
                      <span className={`rounded-lg px-2.5 py-1 font-label text-[10px] font-bold tracking-wider ${accentBadge[cat.accent]}`}>
                        {bar.percent}%
                      </span>
                    </div>
                    <ProgressBar percent={bar.percent} colorClass={accentBar[cat.accent]} />
                  </div>
                ))}
              </div>
            )}

            {cat.tools && (
              <div className="grid grid-cols-2 gap-4">
                {cat.tools.map((tool) => (
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    key={tool.name}
                    className="glass-card flex flex-col items-center justify-center rounded-2xl border border-white/5 p-6 text-center transition-all hover:bg-white/10 group"
                  >
                    <MaterialIcon
                      name={tool.icon}
                      className="mb-4 text-3xl text-on-surface-variant transition-colors group-hover:text-tertiary"
                    />
                    <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


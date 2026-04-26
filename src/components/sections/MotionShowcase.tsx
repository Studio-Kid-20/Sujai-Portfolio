import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export const MotionShowcase = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 grayscale-[0.2]"
        >
          <source src="/assets/video/motion-background.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <Reveal direction="up">
          <span className="mb-4 inline-block font-label text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Aesthetic Motion
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <h2 className="font-headline text-6xl font-extrabold leading-none tracking-tighter text-white md:text-[10rem]">
            VISUAL<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              STORYTELLING
            </span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.4}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-on-surface-variant">
            Moving beyond pixels. Creating immersive digital environments where motion defines the narrative and every interaction feels alive.
          </p>
        </Reveal>
      </div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

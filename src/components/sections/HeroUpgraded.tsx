import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  HOME_HERO_BADGE, 
  HOME_HERO_HEADING, 
  HOME_HERO_INTRO, 
  HOME_HERO_CTA,
  HOME_SKILL_PILLS
} from "@/content/site";
import { Chip } from "@/components/ui/Chip";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import MagneticButton from "@/components/ui/MagneticButton";

const heroImg = "/assets/hero-visual.jpg";

export const HeroUpgraded = () => {
  const words = HOME_HERO_HEADING.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 pb-20 pt-32 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-label text-xs uppercase tracking-widest text-primary backdrop-blur-md">
              {HOME_HERO_BADGE}
            </span>
            
            <motion.h1
              className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-white md:text-8xl"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  className="mr-3 inline-block"
                >
                  {word === "Imagery" || word === "Artist" ? (
                    <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl"
            >
              {HOME_HERO_INTRO}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticButton>
              <Link
                to="/projects"
                className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-primary px-10 py-5 font-bold text-on-primary transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">{HOME_HERO_CTA}</span>
                <MaterialIcon name="arrow_forward" className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/0 via-white/20 to-secondary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </MagneticButton>

            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-2xl border border-outline-variant/30 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Start a Conversation
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-3 pt-12"
          >
            {HOME_SKILL_PILLS.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <Chip>{t}</Chip>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative"
          >
            {/* Visual Layers */}
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
            <div className="absolute -inset-4 rounded-full bg-secondary/10 blur-[80px] delay-700 animate-pulse" />
            
            <div className="relative z-10 aspect-[4/5] w-full rotate-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl transition-transform hover:rotate-0 duration-700">
               <div className="h-full w-full overflow-hidden rounded-2xl">
                 <img
                    src={heroImg}
                    alt="Hero Visual"
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
                 />
               </div>
               
               {/* Floating Badges */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-8 top-10 z-20 flex items-center gap-3 rounded-2xl border border-white/20 bg-secondary/80 p-4 shadow-xl backdrop-blur-md"
               >
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                   <MaterialIcon name="auto_awesome" className="text-white" />
                 </div>
                 <div>
                   <p className="font-label text-[10px] uppercase tracking-wider text-white/70">Creative</p>
                   <p className="font-headline text-sm font-bold text-white">Visual Storytelling</p>
                 </div>
               </motion.div>

               <motion.div
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -left-12 bottom-12 z-20 flex items-center gap-3 rounded-2xl border border-white/20 bg-primary/80 p-4 shadow-xl backdrop-blur-md"
               >
                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                   <MaterialIcon name="code_blocks" className="text-white" />
                 </div>
                 <div>
                   <p className="font-label text-[10px] uppercase tracking-wider text-white/70">Technical</p>
                   <p className="font-headline text-sm font-bold text-white">Modern Architecture</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

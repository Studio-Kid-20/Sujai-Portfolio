import { motion } from "framer-motion";

import { HOME_HERO_LINES } from "@/data/pages/home";

type HeroHeadlineProps = {
  containerVariants: {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition?: {
        staggerChildren: number;
        delayChildren: number;
      };
    };
  };
  wordVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition?: {
        type: string;
        damping: number;
        stiffness: number;
      };
    };
  };
};

export function HeroHeadline({ containerVariants, wordVariants }: HeroHeadlineProps) {
  return (
    <motion.h1
      className="font-jersey25 text-6xl font-extrabold leading-[1.2] tracking-[-0.02em] md:text-8xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {HOME_HERO_LINES.map((line) => (
        <span key={line} className="mb-4 block last:mb-0">
          <span className="title-gradient inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.15em]">
            {line.split(" ").map((word) => (
              <motion.span variants={wordVariants} key={`${line}-${word}`} className="inline-block">
                {word}
              </motion.span>
            ))}
          </span>
        </span>
      ))}
    </motion.h1>
  );
}

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
      className="font-headline text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] md:text-7xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {HOME_HERO_LINES.map((line) => (
        <span key={line} className="mb-2 block last:mb-0">
          <span className="title-gradient inline-flex flex-wrap gap-x-[0.22em] gap-y-[0.08em]">
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

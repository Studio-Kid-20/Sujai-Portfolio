import { motion } from "framer-motion";

export const DotGrid = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transform-gpu opacity-40">
      <div className="flex h-full w-full flex-wrap justify-center gap-16 p-20">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 1 }}
            whileHover={{ 
              scale: 1.5, 
              backgroundColor: "#b6a0ff",
              opacity: 0.8,
            }}
            className="h-1 w-1 rounded-full bg-white/20 pointer-events-auto cursor-crosshair transition-colors duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export const FloatingDecor = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transform-gpu">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          style={{
            left: `${(i * 30) + 10}%`,
            top: `${(i * 25) + 15}%`,
          }}
          className="absolute"
        >
          {/* Glowing Orb - Highly Optimized blur and size */}
          <div className="h-[15rem] w-[15rem] rounded-full bg-gradient-to-br from-primary/20 via-tertiary/10 to-transparent blur-[60px]" />
          
          {/* Floating Geometric Element - Subtle */}
          <div className="ml-24 mt-12 h-8 w-8 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-md" />
        </motion.div>
      ))}
    </div>
  );
};

import { motion } from "framer-motion";

export const DotGrid = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[50] overflow-hidden">
      <div className="flex h-full w-full flex-wrap justify-center gap-16 p-20">
        {Array.from({ length: 200 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.15, scale: 1 }}
            whileHover={{ 
              scale: 4, 
              backgroundColor: "#b6a0ff",
              boxShadow: "0 0 40px #b6a0ff, 0 0 80px #ff6c95, 0 0 120px rgba(182,160,255,0.4)",
              opacity: 1,
              zIndex: 100
            }}
            className="h-2 w-2 rounded-full bg-white/40 pointer-events-auto cursor-crosshair transition-colors duration-200"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        ))}
      </div>
    </div>
  );
};

export const FloatingDecor = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -150, 0],
            x: [0, 80, 0],
            rotate: [0, 180, 0],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 10 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          style={{
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
          }}
          className="absolute"
        >
          {/* Glowing Orb */}
          <div className="h-[25rem] w-[25rem] rounded-full bg-gradient-to-br from-primary/40 via-tertiary/30 to-transparent blur-[150px]" />
          
          {/* Floating Geometric Element */}
          <div className="ml-40 mt-20 h-16 w-16 rounded-[2.5rem] border border-white/40 bg-white/10 shadow-[0_0_60px_rgba(182,160,255,0.5)] backdrop-blur-2xl" />
        </motion.div>
      ))}
    </div>
  );
};





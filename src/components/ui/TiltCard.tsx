import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`relative h-full w-full ${className}`}
    >
      <div className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

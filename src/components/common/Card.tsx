// common/Card.tsx
import React from "react";
import type { CardProps } from "./types";
import { motion } from "framer-motion";

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl bg-neutral-900/40 border border-white/10 p-4 backdrop-blur-md shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

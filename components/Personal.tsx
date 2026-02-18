"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Personal: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4"
    >
      <Link href="/" className="group">
        <div className="flex items-center gap-2">
          <span className="text-lg font-black tracking-tighter text-white group-hover:text-cyan-400 transition-all duration-300">
            MERT GENÇ
          </span>
          <span className="text-white/20 font-light">|</span>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">
            Software Developer
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default Personal;
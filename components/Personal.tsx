"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Personal: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center"
    >
      <Link href="/" className="group flex flex-col items-start leading-none">
        {/* text-white yaptık */}
        <span className="text-xs font-black tracking-[0.3em] text-white group-hover:text-cyan-400 transition-all duration-300">
          MERT GENÇ
        </span>
        <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em] mt-1.5 group-hover:text-white/60 transition-colors">
          Software Developer
        </span>
      </Link>
    </motion.div>
  );
};

export default Personal;
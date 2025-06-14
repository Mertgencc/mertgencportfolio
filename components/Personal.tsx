"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// TypeScript interface for props (if needed in the future)
interface PersonalProps {
  // Add props if needed, e.g., logoUrl: string
}

const Personal: React.FC<PersonalProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
    >
      <Link href="/" aria-label="Ana sayfaya dön">
        <motion.div
          whileHover={{ scale: 1.05, color: "#22d3ee" }} // Cyan-400
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-300 hover:text-cyan-400 transition-colors"
        >
          {/* Optional Logo (uncomment if you have a logo image) */}
          {/* <Image src="/logo.png" width={32} height={32} alt="Mert Genç Logo" className="rounded-full" /> */}
          <span>Mert Genç</span>
        </motion.div>
      </Link>
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base sm:text-lg font-medium text-gray-400"
        aria-label="Full Stack Developer"
      >
        Full Stack Developer
      </motion.h2>
    </motion.div>
  );
};

export default Personal;
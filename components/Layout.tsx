"use client";

import React, { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Personal from "@/components/Personal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { scrollY } = useScroll();
  const [documentHeight, setDocumentHeight] = useState(0);

  // documentHeight'ı istemci tarafında al
  useEffect(() => {
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="min-h-screen bg-black" role="main" aria-label="Sayfa düzeni">
      <header className="flex justify-between items-center px-4 py-2">
        <Personal />
        <nav className="space-x-2">
          <NavLinks />
        </nav>
      </header>

      <motion.div
        className="relative w-full"
        style={{
          y: useTransform(scrollY, [0, 1000], [0, documentHeight / 2], {
            clamp: true,
          }),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
      </motion.div>

      <div className="p-4">
        <Hero />
        <main>{children}</main>
      </div>
    </div>
  );
}
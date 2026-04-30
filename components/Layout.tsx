"use client";

import React, { useEffect, useState, useRef } from "react";
import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Personal from "@/components/Personal";
import Hero from "@/components/Hero";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Terminal States
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Sistem aktif. Ben Mert'in dijital asistanıyım.",
    "Aşağıdaki butonlara tıklayabilir veya merak ettiğin şeyi yazabilirsin.",
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const executeCommand = (cmdText: string) => {
    const cmd = cmdText.toLowerCase().trim();
    let response = "";

    if (cmd.includes("kim") || cmd === "about") response = "> Mert; Next.js, React Native ve Yapay Zeka projeleri geliştiren bir Full-Stack geliştiricidir.";
    else if (cmd.includes("proje") || cmd === "projects") response = "> Şu an yayında olan FashionAI ve diğer portfolyo işlerini 'Projeler' kısmında görebilirsin.";
    else if (cmd.includes("iletişim") || cmd === "contact") response = "> Mert'e sosyal medya hesaplarından veya mertgenc.top üzerinden ulaşabilirsin.";
    else if (cmd === "clear") {
      setTerminalHistory([]);
      return;
    } 
    else if (cmd === "") return;
    else response = `> '${cmd}' için bir sonuç bulamadım ama 'proje' veya 'kim' yazmayı deneyebilirsin!`;

    setTerminalHistory((prev) => [...prev, `Siz: ${cmdText}`, response]);
    setTerminalInput("");
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30 transition-colors duration-500 overflow-x-hidden font-sans">
      
      {/* --- LOADER --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="system-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[2000] bg-[#030303] flex items-center justify-center overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-mono text-white/80 tracking-[0.6em] uppercase">MERT GENÇ</span>
              </motion.div>
              <div className="w-40 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-cyan-500/40" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVIGATION --- */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.div 
          className={`w-full flex items-center justify-between px-6 md:px-10 py-4 pointer-events-auto transition-all duration-500 border-b ${
            isScrolled ? "bg-black/90 backdrop-blur-3xl border-white/10" : "bg-[#030303] border-transparent"
          }`}
          animate={{ height: isScrolled ? "70px" : "90px" }}
        >
          <Personal />
          <nav className="block"><NavLinks /></nav>
          <div className="hidden sm:block">
            <a href="/Mert Genç.pdf" download className="flex items-center gap-2 px-3 py-2.5 bg-white/[0.03] border border-white/10 group transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.05]">
              <div className="w-1 h-1 bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-[0.2em] flex items-center gap-2">CV <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg></span>
            </a>
          </div>
        </motion.div>
      </header>

      {/* --- CONTENT --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative pt-24 md:pt-32"
      >
        <motion.div style={{ opacity: useTransform(scrollY, [0, 150], [1, 0]) }}>
          <Header />
        </motion.div>
        <div className="px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
          <Hero />
          <main className="mt-8">{children}</main>
        </div>
      </motion.div>

      {/* --- INTERACTIVE ASISTANT (TERMINAL) --- */}
      <div className="fixed bottom-6 right-6 z-[500] flex flex-col items-end gap-3">
        {/* Helper Tooltip */}
        {!isTerminalOpen && (
           <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-cyan-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-l-full rounded-t-full shadow-lg mb-1 uppercase tracking-tighter"
           >
             Bir sorun mu var?
           </motion.div>
        )}

        <AnimatePresence>
          {isTerminalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-[320px] sm:w-[380px] h-[450px] bg-[#0a0a0a]/95 border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-2xl rounded-2xl"
            >
              {/* Header */}
              <div className="bg-white/5 px-5 py-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[11px] font-mono text-white/70 uppercase tracking-widest">Sorularınızı Sorabilirsiniz</span>
                </div>
                <button onClick={() => setIsTerminalOpen(false)} className="text-white/40 hover:text-white transition-colors text-xs">Kapat</button>
              </div>
              
              {/* History */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 font-mono text-[12px] space-y-4">
                {terminalHistory.map((line, i) => (
                  <div key={i} className={line.startsWith(">") ? "text-cyan-400 leading-relaxed" : line.startsWith("Siz:") ? "text-white/40 italic" : "text-white/90"}>
                    {line}
                  </div>
                ))}
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Mert Kim?", "Projeler", "İletişim"].map((btn) => (
                    <button
                      key={btn}
                      onClick={() => executeCommand(btn)}
                      className="text-[10px] border border-white/10 px-2 py-1 rounded-md hover:bg-cyan-500 hover:text-black transition-all hover:border-cyan-500"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleTerminalSubmit} className="p-4 bg-white/5 border-t border-white/5 flex gap-3">
                <span className="text-cyan-500">❯</span>
                <input
                  autoFocus
                  placeholder="Buraya yazın..."
                  className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/20"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className={`p-4 rounded-full border transition-all duration-500 relative ${
            isTerminalOpen 
              ? "bg-cyan-500 border-white shadow-[0_0_25px_rgba(6,182,212,0.6)] rotate-90" 
              : "bg-black border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          }`}
        >
          {/* Sabit Parlak Hat Efekti (Mobilde de görünmesi için hover'dan çıkardım) */}
          <div className={`absolute inset-0 rounded-full border ${isTerminalOpen ? "border-white/20" : "border-white/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"}`} />

          <svg className={`w-6 h-6 relative z-10 ${isTerminalOpen ? "text-black" : "text-cyan-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isTerminalOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            )}
          </svg>
        </button>
      </div>
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/[0.03] blur-[150px] -z-10 pointer-events-none" />
    </div>
  );
}
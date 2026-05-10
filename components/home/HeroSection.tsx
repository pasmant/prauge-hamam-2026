"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-aqua via-cyan to-blue-600">
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full animate-blob" />
        <div className="absolute top-1/3 -left-16 w-56 h-56 bg-yellow-400/10 rounded-full animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-10 right-1/4 w-64 h-64 bg-coral/10 rounded-full animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-cyan-300/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            <span className="block">הטיול המשפחתי</span>
            <span className="block text-yellow-300">לפראג 2026</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/90 font-medium mt-4"
        >
          9–13 ביוני 2026 🇨🇿
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white"
        >
          <span className="text-2xl">✈️</span>
          <span className="font-semibold">Aquapalace Hotel Prague</span>
          <span className="text-2xl">🏊</span>
        </motion.div>
      </div>
    </section>
  );
}

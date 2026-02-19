"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-cyan-500/20"
        >
          {/* Replace with <Image src="/headshot.jpg" alt="Conrad Preston" fill className="rounded-full object-cover" /> when headshot is available */}
          CP
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4"
        >
          Available for freelance
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Senior Software Engineer
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            AI & Data Pipeline Specialist
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I build AI-powered tools and high-throughput data systems that scale.
          From RAG pipelines to 100K+ events/minute infrastructure — engineered for production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

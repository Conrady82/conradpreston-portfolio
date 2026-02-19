"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "100K+", label: "Events/minute processed" },
  { value: "5+", label: "Years SWE experience" },
  { value: "$100–150", label: "Per hour" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Engineering at scale, <br />
            <span className="text-slate-400">with AI at the core.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I&apos;m a Senior Software Engineer at <span className="text-slate-200">Capital One</span>, where
              I design and ship AI-powered tools and high-throughput data infrastructure that operates
              at serious scale.
            </p>
            <p>
              My work spans the full stack — from React and TypeScript frontends to Python backends,
              cloud infrastructure on AWS, Kubernetes orchestration, and end-to-end observability
              with OpenTelemetry. I&apos;ve built systems that ingest and process over{" "}
              <span className="text-cyan-400 font-medium">100,000 events per minute</span> reliably.
            </p>
            <p>
              On the AI side, I&apos;ve shipped production RAG systems (LangChain, vector databases),
              LLM-powered search tools, and translation pipelines — all designed to solve real
              business problems, not demos.
            </p>
            <p>
              Freelancing lets me bring this same rigor to your project. Whether you need an
              AI prototype, a data backbone, or a polished full-stack product — I build things
              that hold up in production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
              >
                <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Agent Assist",
    tagline: "AI-powered documentation search",
    description:
      "Built at Capital One to eliminate the pain of hunting through thousands of internal docs. Engineers type a question in natural language and get instant, semantically relevant answers — no more ctrl+F across 50 wikis.",
    tech: ["Python", "LLMs", "Vector Embeddings", "React", "FastAPI"],
    highlight: "Reduced doc search time from minutes to seconds for 500+ engineers",
    color: "from-cyan-500/10 to-cyan-500/5",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    tag: "AI / NLP",
  },
  {
    name: "Bilengua",
    tagline: "RAG-powered LLM translation",
    description:
      "A Retrieval-Augmented Generation translation system built for domain-specific accuracy. Standard LLMs lose context with specialized vocabulary — Bilengua grounds translations in curated company knowledge, ensuring precision where it matters.",
    tech: ["Python", "LangChain", "AWS", "React", "TypeScript", "Vector DB"],
    highlight: "Domain-aware translations with RAG context injection",
    color: "from-indigo-500/10 to-indigo-500/5",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    tag: "RAG / LLM",
  },
  {
    name: "High-Throughput Data Pipeline",
    tagline: "100K+ events/minute at scale",
    description:
      "Designed and scaled a fault-tolerant data ingestion pipeline processing over 100,000 events per minute. Built with zero-downtime deploys, full observability via OpenTelemetry, and Kubernetes-native autoscaling.",
    tech: ["Python", "Kafka / Kinesis", "AWS", "Kubernetes", "Docker", "OpenTelemetry"],
    highlight: "100K+ events/min, zero data loss SLA, sub-second latency p99",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    tag: "Data Engineering",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-slate-800/20" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects that ship.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${project.color} border ${project.border} transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">{project.tagline}</p>
                  <p className="text-slate-400 leading-relaxed mb-4">{project.description}</p>
                  <p className="text-slate-300 text-sm italic border-l-2 border-cyan-500/40 pl-3">
                    {project.highlight}
                  </p>
                </div>
                <div className="md:w-48 shrink-0">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-slate-700/60 text-slate-300 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

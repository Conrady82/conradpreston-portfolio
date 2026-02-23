"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const workProjects = [
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
    github: null,
  },
  {
    name: "Bilengua",
    tagline: "RAG-powered LLM translation",
    description:
      "A Retrieval-Augmented Generation translation system built for domain-specific accuracy. Standard LLMs lose context with specialized vocabulary — Bilengua grounds translations in curated company knowledge, ensuring precision where it matters.",
    tech: ["Python", "LangChain", "AWS", "React", "TypeScript", "Vector DB"],
    highlight: "20% accuracy improvement, 15% hallucination reduction",
    color: "from-indigo-500/10 to-indigo-500/5",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    tag: "RAG / LLM",
    github: null,
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
    github: null,
  },
];

const openSourceProjects = [
  {
    name: "RAG Starter Kit",
    tagline: "Production-ready RAG in 3 minutes",
    description:
      "A fully operational Retrieval-Augmented Generation template you can clone and run today. FastAPI backend with ChromaDB vector storage, streaming LLM responses via OpenAI or Claude, Docker-first deployment.",
    tech: ["Python", "FastAPI", "ChromaDB", "OpenAI", "Anthropic Claude", "Docker"],
    highlight: "Clone and run in under 3 minutes — no boilerplate required",
    color: "from-violet-500/10 to-violet-500/5",
    border: "border-violet-500/20 hover:border-violet-500/50",
    tag: "Open Source",
    github: "https://github.com/Conrady82/rag-starter-kit",
  },
  {
    name: "Next.js AI SaaS Starter",
    tagline: "Ship an AI SaaS in a weekend",
    description:
      "Full-stack AI SaaS boilerplate with everything wired: Next.js 14 App Router, Tailwind, Clerk auth, Supabase database, Stripe billing, and Claude API integration. Production-deployed on Vercel.",
    tech: ["Next.js 14", "TypeScript", "Tailwind", "Clerk", "Supabase", "Stripe", "Claude API"],
    highlight: "Auth + billing + AI integration out of the box",
    color: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/20 hover:border-orange-500/50",
    tag: "Open Source",
    github: "https://github.com/Conrady82/nextjs-ai-saas-starter",
  },
  {
    name: "LLM Guardrails",
    tagline: "Safety middleware for LLM-powered apps",
    description:
      "Production-ready LLM safety layer: detects prompt injection, PII leakage, jailbreak attempts, and policy violations. FastAPI middleware that wraps any OpenAI or Anthropic integration with configurable rule sets.",
    tech: ["Python", "FastAPI", "Pydantic", "OpenAI", "Anthropic Claude", "Docker"],
    highlight: "Pattern-based detection — no LLM calls required, zero latency overhead",
    color: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-500/20 hover:border-rose-500/50",
    tag: "Open Source",
    github: "https://github.com/Conrady82/llm-guardrails",
  },
  {
    name: "Data Pipeline Kit",
    tagline: "Event streaming at Capital One scale",
    description:
      "Async-first Python event pipeline framework built for high-throughput workloads. Kafka-compatible producer/consumer, PostgreSQL sink with batch writes, Prometheus metrics, and full Docker Compose stack.",
    tech: ["Python", "asyncio", "Kafka", "PostgreSQL", "Prometheus", "Docker"],
    highlight: "Designed for 100K+ events/min — the same architecture behind my Capital One pipeline",
    color: "from-teal-500/10 to-teal-500/5",
    border: "border-teal-500/20 hover:border-teal-500/50",
    tag: "Open Source",
    github: "https://github.com/Conrady82/data-pipeline-kit",
  },
];

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlight: string;
  color: string;
  border: string;
  tag: string;
  github: string | null;
};

function ProjectCard({ project, i, inView }: { project: Project; i: number; inView: boolean }) {
  return (
    <motion.div
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
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
  );
}

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

        {/* Production Work */}
        <div className="mb-12">
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-6">Production Work</p>
          <div className="grid md:grid-cols-1 gap-6">
            {workProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} i={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-6">Open Source</p>
          <div className="grid md:grid-cols-2 gap-6">
            {openSourceProjects.map((project, i) => (
              <ProjectCard key={project.name} project={project} i={i + workProjects.length} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

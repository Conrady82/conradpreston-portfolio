"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
  },
  {
    category: "AI & Data",
    skills: ["LLMs", "RAG", "Vector Databases", "LangChain", "Data Pipelines", "Kafka / Kinesis"],
  },
  {
    category: "Observability",
    skills: ["OpenTelemetry", "Prometheus", "Grafana", "Datadog"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 + 0.1 }}
              className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/20 transition-colors"
            >
              <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-slate-300 bg-slate-700/50 px-2.5 py-1 rounded-md hover:bg-slate-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

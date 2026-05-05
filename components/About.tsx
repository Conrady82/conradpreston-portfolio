"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const stats = [
  { value: "500+", label: "Engineers using AI tools I built" },
  { value: "100K+", label: "Events/minute pipelines shipped" },
  { value: "Hours → Min", label: "Vuln remediation, agentic + HITL" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const fadeY = (delay = 0) =>
    reduced
      ? { initial: false, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: 30 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay } };
  const fadeX = (sign: 1 | -1, delay = 0) =>
    reduced
      ? { initial: false, animate: { opacity: 1, x: 0 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, x: 30 * sign }, animate: inView ? { opacity: 1, x: 0 } : {}, transition: { duration: 0.6, delay } };

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeY()}>
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Engineering at scale, <br />
            <span className="text-slate-400">with AI at the core.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            {...fadeX(-1, 0.1)}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I&apos;m a Senior Software Engineer at <span className="text-slate-200">Capital One</span>, where
              I build AI tools and lead the workflows + standards that govern how the engineering organization
              adopts AI day-to-day.
            </p>
            <p>
              My most recent production work is a{" "}
              <span className="text-cyan-400 font-medium">vulnerability remediation agent</span> that
              compresses remediation cycles from hours or days down to minutes — pulling vuln data,
              deduplicating through noise, applying organization-approved patches across all affected
              repos, with a full audit trail and human-in-the-loop verification at each gate.
            </p>
            <p>
              Before that, I built <span className="text-slate-200">Agent Assist</span> (LLM-powered
              search across thousands of internal docs, used by 500+ engineers daily) on a Glean backend
              I provisioned with custom connectors I authored and Elasticsearch indexes I designed.
              And the data infrastructure underneath — Google Workspace ingestion at 100K+ events/min,
              org-wide OpenTelemetry observability from near-zero to 95% coverage.
            </p>
            <p>
              I&apos;m open to senior / staff IC roles building AI tools at globally remote, async-first
              companies. I also take select freelance — recently shipped a middle-funnel sales agent
              for an SMB end-to-end (scope to production deploy, 9 weeks).
            </p>
          </motion.div>

          <motion.div
            {...fadeX(1, 0.2)}
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

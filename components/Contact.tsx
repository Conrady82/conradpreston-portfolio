"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Using Formspree — replace FORMSPREE_ID with your actual Formspree form ID
      // Sign up at formspree.io and create a form pointing to conrad@conradpreston.dev
      const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // TODO: Replace with real ID
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-800/20" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-slate-400">
            Have a project in mind? Reach out and I&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="mailto:conrad@conradpreston.dev"
            className="inline-block mt-3 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
          >
            conrad@conradpreston.dev
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-slate-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message Sent ✓"}
            {status === "error" && "Try Again"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Email me directly at{" "}
              <a href="mailto:conrad@conradpreston.dev" className="underline">
                conrad@conradpreston.dev
              </a>
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Prolific Builder",
    body: "Built dozens of projects across every layer of the stack — from pixel to protocol.",
  },
  {
    icon: Layers,
    title: "Full-Stack Depth",
    body: "Comfortable everywhere: frontend UX, backend APIs, databases, DevOps, and scripting.",
  },
  {
    icon: Zap,
    title: "Shipped, Not Theoretical",
    body: "Everything here is deployed and in use — real users, real traffic, real results.",
  },
  {
    icon: Users,
    title: "Client Work",
    body: "Delivered projects for real clients — businesses, communities, and individuals who needed things built.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm tracking-widest uppercase mb-3" style={{ color: "var(--cyan)" }}>
              // about me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text)" }}>
              I build things —{" "}
              <span style={{ color: "var(--cyan)" }}>and I&apos;ve never stopped.</span>
            </h2>
            <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
              <p className="text-lg leading-relaxed">
                I&apos;m Lex Thomas, founder of Lexcellence Group LLC. I built my first PC at 10,
                was generating $5K/month selling game mods at 14, and haven&apos;t stopped shipping
                since. I carry a 4.0 GPA alongside a portfolio of real, live products.
              </p>
              <p className="leading-relaxed">
                I&apos;ve built across every domain — SaaS platforms, Discord bots, Stripe-integrated
                payment backends, autonomous AI agents, client sites, and more. If it runs code,
                I&apos;ve shipped something on it. Nothing theoretical — all production, all live.
              </p>
              <p className="leading-relaxed">
                Currently doing developer work for Clavicular while running Lexcellence Group LLC
                and taking on client projects across web, backend, and automation.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t flex gap-12" style={{ borderColor: "var(--border)" }}>
              {[
                { stat: "6+", label: "Live Products" },
                { stat: "$5K/mo", label: "At Age 14" },
                { stat: "4.0", label: "GPA" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-glow-cyan" style={{ color: "var(--cyan)" }}>
                    {stat}
                  </p>
                  <p className="font-mono text-xs tracking-wide mt-1" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-lg card-border"
                style={{ background: "var(--bg-card)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,212,255,0.08)", border: "1px solid var(--cyan-dim)" }}
                >
                  <Icon size={18} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

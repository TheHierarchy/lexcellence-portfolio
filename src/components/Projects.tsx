"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories, type Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest uppercase mb-3" style={{ color: "var(--cyan)" }}>
            // what i&apos;ve built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Projects
          </h2>
          <p className="text-lg max-w-2xl mb-4" style={{ color: "var(--text-muted)" }}>
            A selection of what I&apos;ve shipped — spanning web platforms, automation bots,
            backend infrastructure, game mods, and standalone software.
          </p>
          <p
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border-bright)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--text-muted)" }}
            />
            Many projects are hidden at client request or under NDA — this is a fraction of the full body of work.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-mono text-sm px-4 py-1.5 rounded border transition-all duration-200"
              style={{
                borderColor: active === cat ? "var(--cyan)" : "var(--border-bright)",
                color: active === cat ? "var(--cyan)" : "var(--text-muted)",
                background: active === cat ? "rgba(0,212,255,0.08)" : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center py-16 font-mono" style={{ color: "var(--text-muted)" }}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

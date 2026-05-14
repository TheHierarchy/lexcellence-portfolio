"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star, Lock } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

const categoryColors: Record<string, string> = {
  "Web Apps": "var(--cyan)",
  "Mobile Apps": "#a78bfa",
  "Discord Bots": "var(--purple)",
  "Backend / APIs": "var(--green)",
  Software: "#f59e0b",
  Mods: "#f97316",
};

export default function ProjectCard({ project, index }: Props) {
  const accent = categoryColors[project.category] ?? "var(--cyan)";

  if (project.hidden) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="relative rounded-lg p-6 flex flex-col gap-3 card-border"
        style={{ background: "var(--bg-card)", opacity: 0.7 }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--border)", border: "1px solid var(--border-bright)" }}
          >
            <Lock size={14} style={{ color: "var(--text-muted)" }} />
          </div>
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{
              color: accent,
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
            }}
          >
            {project.category}
          </span>
        </div>
        <h3 className="text-base font-semibold" style={{ color: "var(--text-muted)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-lg overflow-hidden flex flex-col card-border group"
      style={{ background: "var(--bg-card)" }}
    >
      {/* Screenshot */}
      {project.screenshot && (
        <div className="relative w-full h-44 overflow-hidden" style={{ background: "var(--border)" }}>
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 60%, var(--bg-card) 100%)",
            }}
          />
          {project.featured && (
            <span
              className="absolute top-3 left-3 flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(0,0,0,0.7)",
                color: "var(--cyan)",
                border: "1px solid var(--cyan-dim)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Star size={10} fill="currentColor" />
              Featured
            </span>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Category + featured (no screenshot case) */}
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{
              color: accent,
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
            }}
          >
            {project.category}
          </span>
          {!project.screenshot && project.featured && (
            <span
              className="flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(0,212,255,0.08)",
                color: "var(--cyan)",
                border: "1px solid var(--cyan-dim)",
              }}
            >
              <Star size={10} fill="currentColor" />
              Featured
            </span>
          )}
        </div>

        <div>
          <h3
            className="text-base font-semibold mb-1.5 transition-colors duration-200 group-hover:text-white"
            style={{ color: "var(--text)" }}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {(project.tech ?? []).map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{
                color: "var(--text-dim)",
                background: "var(--border)",
                border: "1px solid var(--border-bright)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div
            className="flex items-center gap-3 pt-3 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                }
              >
                <GitFork size={13} />
                Source
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                }
              >
                <ExternalLink size={13} />
                Visit Site
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    color: "var(--cyan)",
    skills: ["TypeScript", "JavaScript", "Python", "Lua", "C++", "SQL", "Bash"],
  },
  {
    label: "Frontend",
    color: "var(--purple)",
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    label: "Backend",
    color: "var(--green)",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "GraphQL"],
  },
  {
    label: "Databases",
    color: "#f59e0b",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma"],
  },
  {
    label: "DevOps & Cloud",
    color: "#f97316",
    skills: ["Docker", "AWS", "Vercel", "CI/CD", "Linux", "Nginx"],
  },
  {
    label: "Bots & Automation",
    color: "#ec4899",
    skills: ["Discord.js", "discord.py", "Puppeteer", "Webhooks", "Cron Jobs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest uppercase mb-3" style={{ color: "var(--cyan)" }}>
            // tech stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Skills
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-muted)" }}>
            Tools and technologies I use to build real products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg p-6 card-border"
              style={{ background: "var(--bg-card)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.color }}
                />
                <h3 className="font-mono text-sm font-bold tracking-widest uppercase" style={{ color: group.color }}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1 rounded-full transition-all duration-200"
                    style={{
                      color: "var(--text-dim)",
                      background: "var(--border)",
                      border: "1px solid var(--border-bright)",
                    }}
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

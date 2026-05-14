"use client";

import { motion } from "framer-motion";
import { Mail, Globe, GitFork, ArrowUpRight } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "lexthomas614@gmail.com",
    href: "mailto:lexthomas614@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "lexcellencegroupllc.com",
    href: "https://lexcellencegroupllc.com",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/TheHierarchy",
    href: "https://github.com/TheHierarchy",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@lexcellence0",
    href: "https://instagram.com/lexcellence0",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm tracking-widest uppercase mb-3" style={{ color: "var(--cyan)" }}>
            // let&apos;s talk
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Ready to build something{" "}
            <span className="text-glow-cyan" style={{ color: "var(--cyan)" }}>
              great?
            </span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Got a project, a collab, or just want to talk shop — I&apos;m reachable.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:lexthomas614@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-mono font-semibold text-lg mb-16 transition-all duration-200 glow-cyan"
            style={{ background: "var(--cyan)", color: "var(--bg)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <Mail size={20} />
            Send Me an Email
          </a>

          {/* Link cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg card-border group transition-all duration-200"
                style={{ background: "var(--bg-card)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,212,255,0.08)", border: "1px solid var(--cyan-dim)" }}
                >
                  <Icon size={18} style={{ color: "var(--cyan)" }} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs tracking-wide mb-0.5" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium truncate" style={{ color: "var(--text)" }}>
                    {value}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--cyan)" }}
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

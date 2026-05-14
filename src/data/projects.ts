export type Category =
  | "All"
  | "Web Apps"
  | "Mobile Apps"
  | "Discord Bots"
  | "Backend / APIs"
  | "Software"
  | "Mods";

export interface Project {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tech?: string[];
  link?: string;
  github?: string;
  screenshot?: string;
  featured?: boolean;
  hidden?: boolean;
}

function ss(url: string) {
  return `https://image.thum.io/get/width/1200/crop/800/${url}`;
}

export const projects: Project[] = [
  // ── Featured ─────────────────────────────────────────────────────────
  {
    title: "GradeMyClose",
    description:
      "My flagship product — an AI-powered sales coaching platform that grades and analyzes sales calls, giving reps instant feedback to close more deals. Actively scaling MRR.",
    category: "Web Apps",
    tech: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL", "Stripe"],
    link: "https://www.grademyclose.com",
    screenshot: ss("https://www.grademyclose.com"),
    featured: true,
  },
  {
    title: "MyAIFuse",
    description:
      "AI-powered platform connecting users with intelligent tools and automation workflows. Full-stack SaaS with real users in production.",
    category: "Web Apps",
    tech: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL"],
    link: "https://myaifuse.com",
    screenshot: ss("https://myaifuse.com"),
    featured: true,
  },
  {
    title: "Seaya App",
    description:
      "Full-featured consumer web application with a polished UI, user accounts, and real-time functionality.",
    category: "Web Apps",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://seaya.app",
    screenshot: ss("https://seaya.app"),
    featured: true,
  },
  {
    title: "LARP Studios",
    description:
      "E-commerce storefront for LARP Studios — product pages, size guide modals, and a clean shopping experience.",
    category: "Web Apps",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.larpstudios.com",
    screenshot: ss("https://www.larpstudios.com"),
  },
  {
    title: "Discord Bot Dashboard",
    description:
      "Web dashboard for managing Discord bots — command config, server stats, and real-time controls from a browser UI.",
    category: "Discord Bots",
    tech: ["React", "Node.js", "Discord API"],
    link: "https://discordbotdashboard-sable.vercel.app",
    screenshot: ss("https://discordbotdashboard-sable.vercel.app"),
  },
  // ── Client sites ─────────────────────────────────────────────────────
  {
    title: "LiftStandard",
    description:
      "Fitness platform and companion site for a native iOS app I built — workout tracking, programming tools, and athlete data. App built but not yet published to the App Store.",
    category: "Mobile Apps",
    tech: ["Swift", "SwiftUI", "React", "Node.js", "PostgreSQL"],
    link: "https://liftstandard.com",
    screenshot: ss("https://liftstandard.com"),
  },
  {
    title: "Sober Now",
    description:
      "Recovery support app for sobriety tracking and community — built with purpose for users fighting addiction.",
    category: "Web Apps",
    tech: ["Next.js", "React", "PostgreSQL"],
    link: "https://sober-now.org",
    screenshot: ss("https://sober-now.org"),
  },
  {
    title: "Sterling Janitor",
    description:
      "Professional site for a janitorial services company — custom design, booking flows, and local SEO optimized.",
    category: "Web Apps",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://sterlingjanitor.com",
    screenshot: ss("https://sterlingjanitor.com"),
  },
  {
    title: "LCT Detailing",
    description:
      "Auto detailing business website with service listings, booking integration, and mobile-first design.",
    category: "Web Apps",
    tech: ["React", "Tailwind CSS"],
    link: "https://www.lctdetailing.com",
    screenshot: ss("https://www.lctdetailing.com"),
  },
  // ── Backend / infra ───────────────────────────────────────────────────
  {
    title: "Stripe Payment Backends",
    description:
      "Custom Stripe-integrated payment backends with webhooks, subscription billing, and checkout sessions deployed across multiple projects.",
    category: "Backend / APIs",
    tech: ["Node.js", "Stripe", "Express", "Webhooks"],
    featured: true,
  },
  {
    title: "Autonomous AI Agents",
    description:
      "Multi-step autonomous agents for task automation — web scraping, data pipelines, scheduled workflows, and AI-driven decision loops.",
    category: "Backend / APIs",
    tech: ["Python", "OpenAI API", "LangChain", "Cron"],
    featured: true,
  },
  // ── Discord bots ──────────────────────────────────────────────────────
  {
    title: "Discord Bots (Multiple Servers)",
    description:
      "Feature-rich bots across multiple communities — moderation, economy systems, leveling, custom commands, and web dashboard UIs.",
    category: "Discord Bots",
    tech: ["Discord.js", "Node.js", "MongoDB", "Express"],
    featured: true,
  },
  // ── Mods ──────────────────────────────────────────────────────────────
  {
    title: "ARK Mobile Game Mods",
    description:
      "Built and sold gameplay modifications for ARK: Survival Evolved Mobile at age 14 — generating $5K/month. First proof that building what people want is a business.",
    category: "Mods",
    tech: ["Lua", "C++", "Game Scripting"],
    featured: true,
  },
  // ── Hidden client work ────────────────────────────────────────────────
  {
    title: "Clavicular (NDA)",
    description:
      "Ongoing developer work for Clavicular. Full scope withheld at client request.",
    category: "Software",
    hidden: true,
  },
  {
    title: "+ Many More",
    description:
      "Additional client projects not listed here out of respect for client NDAs and privacy agreements.",
    category: "Web Apps",
    hidden: true,
  },
];

export const categories: Category[] = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "Discord Bots",
  "Backend / APIs",
  "Software",
  "Mods",
];

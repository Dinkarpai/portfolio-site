"use client";

import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const projects = [
  {
    title: "Nginx AI Guard",
    subtitle: "AI-Assisted Threat Detection & Response System",
    description:
      "A Python-based security tool that monitors Nginx access logs in real time, identifies suspicious traffic patterns, and supports automated response using rule-based and AI-assisted threat scoring.",
    highlights: [
      "Real-time log monitoring",
      "AI-assisted threat scoring",
      "Automated IP blocking",
      "Whitelist and dry-run safeguards",
    ],
    tech: ["Python", "Nginx", "AI", "Security", "Automation"],
    github: "https://github.com/Dinkarpai/nginx-ai-guard",
  },
  {
    title: "News Sentiment Analysis",
    subtitle: "Machine Learning Sentiment Classification",
    description:
      "A machine learning project using NLP and logistic regression to classify sentiment from news content and support decision-making workflows through structured text analysis.",
    highlights: [
      "Text preprocessing",
      "Logistic regression model",
      "Sentiment classification",
      "Data analysis workflow",
    ],
    tech: ["Python", "NLP", "Logistic Regression", "Data Analysis"],
    github:
      "https://github.com/Dinkarpai/news-sentiment-analysis-logictic-regmodel",
  },
];

const experience = [
  {
    company: "Orange Business Services",
    role: "Technical Consultant",
    period: "January 2019 – November 2022",
    points: [
      "Provided Level 2 enterprise support across cloud, voice, network, and collaboration environments.",
      "Managed incidents, problems, and changes using ServiceNow while supporting SLA compliance.",
      "Performed root cause analysis across Cisco CUCM, Microsoft Teams, and collaboration platforms.",
      "Monitored infrastructure using SolarWinds and coordinated with global engineering teams.",
    ],
  },
  {
    company: "Semper8 International",
    role: "AI Analysis Intern",
    period: "September 2024 – December 2024",
    points: [
      "Conducted sentiment analysis and data analytics to support business intelligence initiatives.",
      "Used Python and SQL to clean, transform, and analyze structured and unstructured datasets.",
      "Created dashboards, visualizations, and reports for technical and business stakeholders.",
    ],
  },
];

const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "VMware", "Linux"],
  },
  {
    category: "Enterprise IT Operations",
    items: ["ServiceNow", "ITIL", "Jira", "Incident Management", "RCA"],
  },
  {
    category: "Microsoft Technologies",
    items: ["Microsoft 365", "Entra ID", "Teams", "Exchange"],
  },
  {
    category: "Monitoring & Observability",
    items: ["SolarWinds", "Kibana", "New Relic"],
  },
  {
    category: "Programming",
    items: ["Python", "SQL"],
  },
];

const statusItems = [
  "Enterprise IT Operations",
  "Cloud Infrastructure",
  "Incident Management",
  "Monitoring & Automation",
  "AI-Assisted Systems",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.34),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(167,139,250,0.24),transparent_28%),radial-gradient(circle_at_52%_88%,rgba(52,211,153,0.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/35 via-[#020617]/82 to-[#020617]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="group">
            <p className="text-lg font-bold tracking-tight text-white">
              Dinkar Pai
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
              Cloud • AI • IT Systems
            </p>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {[
              "About",
              "Experience",
              "Projects",
              "Resume",
              "Skills",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-24 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-32">
        <div>
          <div className="mb-6 flex flex-wrap gap-3">
            {[
              "4+ Years Enterprise Experience",
              "Azure Certified",
              "Toronto, Canada",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Cloud. AI.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
              Production Systems.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Building and supporting enterprise-grade systems that are reliable,
            secure, scalable, and built for real-world operations.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
            </a>

            <a
              href="/DPNewMainRESUME2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-violet-300/25 bg-violet-300/10 px-6 py-3 font-semibold text-violet-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-violet-300/20"
            >
              <FaFilePdf size={18} />
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-300/10 via-violet-300/10 to-emerald-300/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                System Status
              </p>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">
                  Profile
                </p>
                <p className="mt-3 text-2xl font-bold text-white">
                  Cloud, AI & IT Systems Professional
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Enterprise support background with cloud computing,
                  monitoring, automation, and AI project experience.
                </p>
              </div>

              <div className="grid gap-3">
                {statusItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-sm text-slate-300">{item}</span>
                    <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      ACTIVE
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["4+", "Years Experience"],
                  ["AZ-900", "Azure Certified"],
                  ["2", "Featured Projects"],
                  ["GBC", "Cloud + AI"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:grid-cols-[0.4fr_1fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Enterprise support with a cloud and AI edge.
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-300 md:text-justify">
            IT Operations professional with 4+ years of enterprise experience,
            combining cloud infrastructure knowledge with postgraduate training
            in Cloud Computing and Artificial Intelligence to build reliable,
            production-ready systems.
          </p>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Experience
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Enterprise and AI-focused work
          </h2>
        </div>

        <div className="relative grid gap-6">
          <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-emerald-300 via-cyan-300 to-violet-300 md:block" />

          {experience.map((job) => (
            <article
              key={job.company}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 md:ml-12"
            >
              <div className="absolute -left-[3.25rem] top-8 hidden h-4 w-4 rounded-full border border-white/20 bg-emerald-300 shadow-lg shadow-emerald-950/40 md:block" />

              <div className="grid gap-6 md:grid-cols-[0.35fr_1fr]">
                <div>
                  <p className="text-sm text-slate-400">{job.period}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {job.company}
                  </h3>
                  <p className="mt-2 text-cyan-300">{job.role}</p>
                </div>

                <ul className="space-y-3 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="leading-7">
                      <span className="mr-2 text-emerald-300">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-300">
            Projects
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Selected technical work
          </h2>
        </div>

        <div className="grid gap-6">
          <article className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-violet-300/10 p-8 shadow-2xl shadow-violet-950/20 backdrop-blur-xl md:p-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-300/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_0.45fr]">
              <div className="flex h-full min-h-[420px] flex-col justify-between">
                <div>
                  <span className="w-fit rounded-full border border-violet-300/30 bg-violet-300/10 px-4 py-2 text-sm font-semibold text-violet-200">
                    Featured Project
                  </span>

                  <h3 className="mt-6 text-3xl font-bold text-white md:text-5xl">
                    {projects[0].title}
                  </h3>

                  <p className="mt-3 text-lg text-cyan-200">
                    {projects[0].subtitle}
                  </p>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-justify">
                    {projects[0].description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {projects[0].tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-2xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  <FaGithub size={18} />
                  View GitHub Project
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-emerald-300">
                  Capabilities
                </p>

                <div className="space-y-3">
                  {projects[0].highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_0.45fr]">
              <div className="flex h-full min-h-[420px] flex-col justify-between">
                <div>
                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-300">
                    Machine Learning Project
                  </span>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {projects[1].title}
                  </h3>

                  <p className="mt-3 text-cyan-200">{projects[1].subtitle}</p>

                  <p className="mt-5 max-w-3xl leading-7 text-slate-300 md:text-justify">
                    {projects[1].description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {projects[1].tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={projects[1].github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-2xl border border-violet-300/30 bg-violet-300/10 px-5 py-3 font-semibold text-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-300/20"
                >
                  <FaGithub size={18} />
                  View Project
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-emerald-300">
                  Workflow
                </p>

                <div className="space-y-3">
                  {projects[1].highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.05] via-cyan-300/[0.07] to-violet-300/[0.08] p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Resume
              </p>
              <h2 className="mt-3 text-4xl font-bold text-white">
                Experience, projects, and technical background.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300 md:text-justify">
                Microsoft Certified: Azure Fundamentals. View or download my
                resume for cloud support, IT operations, AI projects, and
                production-focused systems experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/DPNewMainRESUME2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FaFilePdf size={18} />
                View Resume
              </a>

              <a
                href="/DPNewMainRESUME2026.pdf"
                download
                className="inline-flex items-center gap-3 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                <FaFilePdf size={18} />
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Technical toolkit
          </h2>
        </div>

        <div className="space-y-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-emerald-300/30 md:grid-cols-[0.32fr_1fr] md:items-center"
            >
              <h3 className="font-semibold text-white">{group.category}</h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white">
              Let’s connect.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="mailto:pai24rohit@gmail.com"
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10"
            >
              <MdEmail size={30} className="text-cyan-300" />
              <p className="mt-4 text-lg font-semibold text-white">Email</p>
              <p className="mt-1 text-sm text-slate-400">Send me a message</p>
            </a>

            <a
              href="https://www.linkedin.com/in/dinkarnpai/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/10"
            >
              <FaLinkedin size={30} className="text-violet-300" />
              <p className="mt-4 text-lg font-semibold text-white">LinkedIn</p>
              <p className="mt-1 text-sm text-slate-400">View my profile</p>
            </a>

            <a
              href="https://github.com/Dinkarpai"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-300/10"
            >
              <FaGithub size={30} className="text-emerald-300" />
              <p className="mt-4 text-lg font-semibold text-white">GitHub</p>
              <p className="mt-1 text-sm text-slate-400">
                View my repositories
              </p>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dinkar Pai</p>
          <p>Designed & built by Dinkar Pai.</p>
        </div>
      </footer>
    </main>
  );
}
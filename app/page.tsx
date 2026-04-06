"use client";

import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const projects = [
  {
    title: "AI Incident Analyzer",
    subtitle: "AI-powered system for incident intelligence",
    description:
      "Developed an AI-driven solution to analyze system incidents, extract insights, and support faster root cause analysis in production environments.",
    tech: ["Python", "AI/ML", "Monitoring", "Incident Analysis"],
    github: "https://github.com/Dinkarpai/AI-incident-analyser",
  },
  {
    title: "News Sentiment Analysis",
    subtitle: "Machine learning model for sentiment classification",
    description:
      "Built a sentiment analysis model using logistic regression to classify news data and generate actionable insights for decision-making workflows.",
    tech: ["Python", "NLP", "Logistic Regression", "Data Analysis"],
    github:
      "https://github.com/Dinkarpai/news-sentiment-analysis-logictic-regmodel",
  },
];

const skills = {
  Cloud: ["Azure", "AWS", "Docker", "Kubernetes"],
  "AI / ML": ["PyTorch", "TensorFlow", "NLP", "Computer Vision"],
  "IT / Ops": ["ServiceNow", "Splunk", "Grafana", "Incident Management"],
  Programming: ["Python", "JavaScript", "SQL", "PowerShell"],
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_85%_5%,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.12),transparent_26%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(15,23,42,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-slate-100/40 to-slate-200/30" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold text-slate-950">Dinkar Pai</p>
            <p className="text-sm text-slate-600">Cloud & AI Engineer</p>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-cyan-700">
              About
            </a>
            <a href="#projects" className="transition hover:text-cyan-700">
              Projects
            </a>
            <a href="#resume" className="transition hover:text-cyan-700">
              Resume
            </a>
            <a href="#skills" className="transition hover:text-cyan-700">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
            <div className="absolute top-28 right-8 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

            <p className="relative mb-4 inline-block rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm text-cyan-700">
              Open to Cloud, AI, and IT Systems roles
            </p>

            <h1 className="relative max-w-4xl text-4xl font-bold leading-tight text-slate-950 md:text-7xl">
              Hi, I’m Dinkar Pai 👋
              <br />
              I build scalable AI & cloud systems.
            </h1>

            <p className="relative mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Cloud & AI engineer focused on building real-world systems using
              machine learning, APIs, deployment pipelines, and production support.
            </p>

            <div className="relative mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-slate-950 px-6 py-3 font-medium text-white shadow-lg shadow-slate-300 transition hover:scale-[1.02]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-50"
              >
                Contact Me
              </a>

              <a
                href="/DPResumeMain2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-3 font-medium text-cyan-700 transition hover:bg-cyan-100"
              >
                <FaFilePdf size={18} />
                View Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl shadow-slate-200 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-700">
              Quick Snapshot
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-950">2</p>
                <p className="mt-1 text-sm text-slate-600">Featured Projects</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-950">Cloud + AI</p>
                <p className="mt-1 text-sm text-slate-600">Core Focus</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-950">ML</p>
                <p className="mt-1 text-sm text-slate-600">Practical Systems</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-3xl font-bold text-slate-950">Toronto</p>
                <p className="mt-1 text-sm text-slate-600">Based in Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-xl shadow-slate-200 backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-slate-950">About Me</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            I am a Cloud & AI Engineer with a strong interest in building
            intelligent systems that are scalable, deployment-ready, and
            production-focused. I combine machine learning, cloud platforms, and
            IT operations to solve real-world problems.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-950">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          A selection of projects focused on AI, machine learning, and practical systems thinking.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/70 bg-white/70 p-7 shadow-xl shadow-slate-200 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-cyan-200/40 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                    Featured Project
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-cyan-700">{project.subtitle}</p>
                </div>
              </div>

              <p className="mt-5 leading-7 text-slate-700">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2 font-medium text-cyan-700 transition hover:bg-cyan-100"
                >
                  <FaGithub size={18} />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-950">Resume 📄</h2>

        <div className="mt-8 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-xl shadow-slate-200 backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">My Resume</h3>
              <p className="mt-3 max-w-2xl text-slate-700">
                View or download my resume to learn more about my experience in
                cloud, AI, IT systems, and production support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/DPResumeMain2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-50"
              >
                <FaFilePdf size={18} />
                View Resume
              </a>

              <a
                href="/Dinkar_Pai_Resume_2026.pdf"
                download
                className="inline-flex items-center gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-3 font-medium text-cyan-700 transition hover:bg-cyan-100"
              >
                <FaFilePdf size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-950">Skills ⚡</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-200 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200"
            >
              <h3 className="text-lg font-semibold text-slate-950">{category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-950">Let’s Connect 🚀</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="mailto:pai24rohit@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-200 backdrop-blur-xl transition hover:scale-[1.02] hover:bg-white"
          >
            <MdEmail size={28} className="text-cyan-700" />
            <div>
              <p className="text-lg font-semibold text-slate-950">Email</p>
              <p className="text-sm text-slate-600">Send me a message</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dinkarnpai/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-200 backdrop-blur-xl transition hover:scale-[1.02] hover:bg-blue-50"
          >
            <FaLinkedin size={28} className="text-blue-600" />
            <div>
              <p className="text-lg font-semibold text-slate-950">LinkedIn</p>
              <p className="text-sm text-slate-600">View my profile</p>
            </div>
          </a>

          <a
            href="https://github.com/Dinkarpai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-slate-200 backdrop-blur-xl transition hover:scale-[1.02] hover:bg-slate-50"
          >
            <FaGithub size={28} className="text-slate-900" />
            <div>
              <p className="text-lg font-semibold text-slate-950">GitHub</p>
              <p className="text-sm text-slate-600">View my repositories</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="mt-20 border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dinkar Pai</p>
          <p>Built with Next.js, Tailwind CSS, and Vercel</p>
        </div>
      </footer>
    </main>
  );
}
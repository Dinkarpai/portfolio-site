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
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_30%)]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold">Dinkar Pai</p>
            <p className="text-sm text-slate-400">Cloud & AI Engineer</p>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#resume" className="transition hover:text-white">
              Resume
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
          Open to Cloud, AI, and IT Operations roles
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
          Hi, I’m Dinkar Pai 👋
          <br />
          I build scalable AI & cloud systems.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Cloud & AI engineer focused on building real-world systems using
          machine learning, APIs, deployment pipelines, and production support.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            <FaFilePdf />
            View Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-semibold">About Me</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I am a Cloud & AI Engineer with a strong interest in building
            intelligent systems that are scalable, deployment-ready, and
            production-focused. I combine machine learning, cloud platforms, and
            IT operations to solve real-world problems.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="text-3xl font-semibold">Featured Projects</h2>
  <p className="mt-3 max-w-2xl text-slate-300">
    A selection of projects focused on AI, machine learning, and practical systems thinking.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
    {projects.map((project) => (
      <div
        key={project.title}
        className="group rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Featured Project
            </span>

            <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-sm text-cyan-300">{project.subtitle}</p>
          </div>
        </div>

        <p className="mt-5 leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300"
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
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            <FaGithub size={18} />
            View Project
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* RESUME */}
       <section id="resume" className="mx-auto max-w-6xl px-6 py-16">
         <h2 className="text-3xl font-semibold">Resume 📄</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

       {/* LEFT SIDE */}
        <div>
         <h3 className="text-2xl font-semibold">My Resume</h3>
         <p className="mt-3 max-w-2xl text-slate-300">
           View or download my resume to learn more about my experience in
           cloud, AI, IT systems, and production support.
         </p>
       </div>

      {/* RIGHT SIDE BUTTONS */}
       <div className="flex flex-wrap gap-4">

        {/* VIEW */}
         <a
          href="/DPResumeMain2026.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
         >
          <FaFilePdf size={18} />
          View Resume
         </a>

        {/* DOWNLOAD */}
        <a
          href="/DPResumeMain2026.pdf"
          download
          className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400/20"
        >
          <FaFilePdf size={18} />
          Download Resume
        </a>

      </div>

    </div>
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Skills ⚡</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{category}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Let’s Connect 🚀</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="mailto:pai24rohit@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.02] hover:bg-white/10"
          >
            <MdEmail size={28} className="text-cyan-300" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-sm text-slate-400">Send me a message</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/dinkarnpai/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.02] hover:bg-blue-500/20"
          >
            <FaLinkedin size={28} className="text-blue-500" />
            <div>
              <p className="text-lg font-semibold">LinkedIn</p>
              <p className="text-sm text-slate-400">View my profile</p>
            </div>
          </a>

          <a
            href="https://github.com/Dinkarpai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:scale-[1.02] hover:bg-gray-500/20"
          >
            <FaGithub size={28} className="text-white" />
            <div>
              <p className="text-lg font-semibold">GitHub</p>
              <p className="text-sm text-slate-400">View my repositories</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
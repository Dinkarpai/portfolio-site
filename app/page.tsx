import { Mail, Linkedin, Github } from "lucide-react";

const projects = [
  {
    title: "Real-Time Anomaly Detection",
    description:
      "Built an anomaly detection pipeline using LSTM/Autoencoders with FastAPI and Docker for real-time monitoring and deployment.",
    tech: ["Python", "FastAPI", "Docker", "TensorFlow"],
    github: "https://github.com/Dinkarpai",
  },
  {
    title: "Financial Sentiment Analysis",
    description:
      "Fine-tuned BERT models for sentiment classification with real-world inference pipelines and reporting workflows.",
    tech: ["Python", "Transformers", "Hugging Face", "NLP"],
    github: "https://github.com/Dinkarpai",
  },
  {
    title: "Sign Language Recognition",
    description:
      "Developed a computer vision pipeline using pose estimation and sequence models to translate sign language into text.",
    tech: ["PyTorch", "OpenCV", "Pose Estimation"],
    github: "https://github.com/Dinkarpai",
  },
];

const skills = {
  Cloud: ["Azure", "AWS", "Docker", "Kubernetes"],
  "AI / ML": ["PyTorch", "TensorFlow", "NLP", "Computer Vision"],
  "IT / Ops": ["ServiceNow", "Splunk", "Grafana"],
  Programming: ["Python", "JavaScript", "SQL"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold">Dinkar Pai</p>
            <p className="text-sm text-slate-400">Cloud & AI Engineer</p>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
          Open to Cloud, AI, and IT Systems roles
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, I’m Dinkar Pai 👋
          <br />
          I build scalable AI & cloud systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Cloud & AI engineer focused on building real-world systems using machine learning,
          APIs, deployment pipelines, and production support.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 hover:scale-[1.02] transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          I am a Cloud & AI Engineer with a strong interest in building intelligent systems that are scalable,
          deployment-ready, and production-focused. I combine machine learning, cloud platforms, and IT operations
          to solve real-world problems.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Featured Projects 🚀</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-cyan-300 hover:text-cyan-200"
              >
                🔗 View Project →
              </a>
            </div>
          ))}
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
        <h2 className="text-3xl font-semibold">Contact 📩</h2>

        <div className="mt-6 flex flex-col gap-4">

          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/dinkarnpai/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-blue-500/20 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Dinkarpai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-gray-500/20 transition"
          >
            <Github size={18} />
            GitHub
          </a>

        </div>
      </section>

    </main>
  );
}
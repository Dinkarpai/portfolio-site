export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
          Open to Cloud, AI, and IT Systems roles
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Hi, I’m Dinkar Pai 👋
          <br />
          I build scalable AI & cloud systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Cloud & AI engineer with experience in building real-world systems using
          machine learning, APIs, and deployment pipelines. Focused on reliability,
          scalability, and production-ready solutions.
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
            className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Featured Projects 🚀</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">Real-Time Anomaly Detection</h3>
            <p className="mt-3 text-slate-300">
              Built an anomaly detection system using LSTM/Autoencoders with FastAPI
              and Docker. Designed for real-time monitoring and deployment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">Financial Sentiment Analysis</h3>
            <p className="mt-3 text-slate-300">
              Fine-tuned BERT models for sentiment classification with real-world
              inference pipelines and reporting dashboards.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold">Sign Language Recognition</h3>
            <p className="mt-3 text-slate-300">
              Developed a vision-based pipeline using pose estimation and sequence
              models to translate sign language into text.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Skills ⚡</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">

          <div>
            <h3 className="text-lg font-semibold">Cloud</h3>
            <p className="mt-2 text-slate-300">Azure, AWS, Docker, Kubernetes</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">AI / ML</h3>
            <p className="mt-2 text-slate-300">PyTorch, TensorFlow, NLP, CV</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">IT / Ops</h3>
            <p className="mt-2 text-slate-300">Splunk, Grafana, ServiceNow</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Programming</h3>
            <p className="mt-2 text-slate-300">Python, JavaScript, SQL</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="text-3xl font-semibold">Contact 📩</h2>

  <div className="mt-6 flex flex-col gap-4">

    <a
      href="mailto:pai24rohit@gmail.com"
      className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
    >
      📧 Email Me
    </a>

    <a
      href="https://www.linkedin.com/in/dinkarnpai/"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-blue-500/20 transition"
    >
      🔗 View LinkedIn Profile
    </a>

    <a
      href="https://github.com/Dinkarpai"
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-gray-500/20 transition"
    >
      💻 View GitHub
    </a>

  </div>
</section>

    </main>
  );
}
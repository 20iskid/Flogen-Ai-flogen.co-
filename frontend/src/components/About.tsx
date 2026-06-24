export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-flogen-400">
              About us
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology partners for ambitious teams
            </h2>
            <p className="mb-4 text-slate-400 leading-relaxed">
              Flogen is a technology company focused on building high-quality
              software and intelligent systems. We combine thoughtful design with
              robust engineering to deliver products that scale.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether you need a polished web presence, a custom backend, or
              AI-driven automation, we work alongside your team from idea to
              launch.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10+", label: "Projects delivered" },
              { value: "100%", label: "Client focus" },
              { value: "24/7", label: "Support available" },
              { value: "AI", label: "Native expertise" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

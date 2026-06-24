export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flogen-500/20 blur-[120px]" />
        <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-flogen-400">
          Welcome to Flogen
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Build smarter.
          <br />
          <span className="text-gradient">Ship faster.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
          We design and engineer modern digital products — from company websites
          to AI-powered platforms — so your business can focus on what matters
          most.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-flogen-500 px-8 py-3 font-medium text-white transition-colors hover:bg-flogen-400"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-8 py-3 font-medium text-slate-300 transition-colors hover:border-white/40 hover:text-white"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}

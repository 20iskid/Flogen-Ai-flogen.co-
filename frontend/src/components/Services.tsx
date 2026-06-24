const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built with modern frameworks like Next.js and React.",
    icon: "🌐",
  },
  {
    title: "Backend & APIs",
    description:
      "Scalable server architecture, RESTful APIs, and database design tailored to your needs.",
    icon: "⚙️",
  },
  {
    title: "AI Integration",
    description:
      "Embed intelligent features — chatbots, automation, and data pipelines — into your products.",
    icon: "🤖",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Dockerized deployments, CI/CD pipelines, and cloud infrastructure you can rely on.",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-flogen-400">
            What we do
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services built for growth
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-flogen-500/40 hover:bg-white/[0.07]"
            >
              <span className="mb-4 block text-3xl">{service.icon}</span>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

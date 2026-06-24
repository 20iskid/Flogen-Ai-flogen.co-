export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {year} Flogen. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#about" className="transition-colors hover:text-slate-300">
            About
          </a>
          <a href="#services" className="transition-colors hover:text-slate-300">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-slate-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

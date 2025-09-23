import React from "react";

const Footer: React.FC = () => (
  <footer className="mt-20 pb-14 font-nice">
    <div className="container mx-auto px-6">
      {/* <div className="glass pop-glow flex flex-col gap-6 rounded-[32px] border border-white/60 px-6 py-8 shadow-lg md:flex-row md:items-center md:justify-between">
        <p className="script-accent text-2xl text-[var(--ink-1)]">
          Let’s craft the next luminous chapter together.
        </p>
        <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]">
          <a className="transition hover:text-[var(--ink-1)]" href="#projects">Projects</a>
          <a className="transition hover:text-[var(--ink-1)]" href="#artworks">Artworks</a>
          <a className="transition hover:text-[var(--ink-1)]" href="#articles">Articles</a>
          <a className="transition hover:text-[var(--ink-1)]" href="#contact">Contact</a>
        </nav>
      </div> */}

      <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs uppercase tracking-[0.32em] text-[var(--ink-3)] sm:flex-row">
        <span>© {new Date().getFullYear()} Vishakha Pathak. All rights reserved.</span>
        <span>Made with ❤️ in Pittsburgh</span>
      </div>
    </div>
  </footer>
);

export default Footer;

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Projects", target: "projects" },
  { label: "Articles", target: "articles" },
  { label: "Experience", target: "experience" },
  { label: "Artworks", target: "artworks" },
];

const portfolioLink = { label: "Data Viz Portfolio", href: "/tswd-portfolio" };

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        isScrolled ? "translate-y-2" : "translate-y-0"
      }`}
      aria-label="Primary"
    >
      <div className="container px-6 pt-4">
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            isScrolled ? "glass-toolbar shadow-lg" : "glass-toolbar opacity-95"
          }`}
        >
          <button
            className="brand-mark flex items-baseline gap-2 focus-ring"
            onClick={() => scrollTo("main")}
          >
            <span className="script-accent text-2xl leading-none">
              Vishakha
            </span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="nav-link text-xs font-medium uppercase tracking-[0.42em] focus-ring"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              className="btn-accent-hover glass border border-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
            >
              Contact
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

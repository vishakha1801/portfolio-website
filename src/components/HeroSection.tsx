import React, { useEffect, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import cartoon from "@/assets/cartoon.png";
import portraitReal from "@/assets/portrait.png";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${x}%`);
      root.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollTo("projects");
    }
  };

  return (
    <section
      className="mouse-glow relative flex min-h-screen items-center overflow-hidden pt-28 pb-24 font-nice"
      aria-label="Hero"
    >
      <div className="orb -left-20 top-24" aria-hidden />
      <div className="orb -right-24 bottom-0" aria-hidden />

      <main id="main" className="relative z-10 w-full">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]">
            {/* text column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="section-kicker">
                  AI Product Builder • Software Engineer • Artist
                </div>

                <h1 className="script-accent text-5xl leading-tight text-[var(--ink-1)] sm:text-6xl md:text-[4.2rem]">
                  Hi, I’m Vishakha. I design and ship AI-powered products that feel human and work at scale.
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-2)] md:text-xl">
                  I blend user research, systems thinking, and hands-on engineering to turn ambiguous problems
                  into reliable, privacy-aware products.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  onClick={() => scrollTo("projects")}
                  size="lg"
                  className="glass btn-accent-hover border border-white/60 px-8 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
                >
                  View Projects
                </Button>

                <Button
                  onClick={() => scrollTo("articles")}
                  variant="outline"
                  size="lg"
                  className="glass btn-accent-hover border border-white/60 px-8 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
                >
                  Explore Essays
                </Button>
              </div>
            </div>

            {/* portrait column */}
            <div className="relative flex justify-center">
              <div className="glass-strong pop-glow relative rounded-full p-3">
                <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.55),_rgba(236,72,153,0.32)_35%,_rgba(14,165,233,0.12)_55%,_transparent)] blur-3xl" />
                <div className="relative flex h-[22rem] w-[22rem] items-center justify-center overflow-hidden rounded-full bg-white/40 shadow-lg md:h-[26rem] md:w-[26rem]">
                  <div className="flip-3d size-full">
                    <img
                      src={portraitReal}
                      alt="Portrait of Vishakha"
                      className="flip-back size-full rounded-full object-cover"
                    />
                    <img
                      src={cartoon}
                      alt="Illustrated portrait of Vishakha"
                      className="flip-front size-full rounded-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* scroll button */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => scrollTo("projects")}
        onKeyDown={handleKey}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 select-none md:bottom-8"
        aria-label="Scroll to projects"
      >
        <div className="glass flex h-12 w-28 items-center justify-center gap-2 rounded-full border border-white/60">
          <span className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">scroll</span>
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

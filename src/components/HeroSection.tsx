import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
// Use a PNG with transparency so the avatar takes the exact shape.
import cartoon from "@/assets/cartoon.png";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;
      heroRef.current.style.setProperty("--mouse-x", `${x}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    addEventListener("mousemove", onMove);
    return () => removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={heroRef}
      className="relative bokeh flex min-h-screen items-center justify-center overflow-hidden font-nice"
      aria-label="Hero"
      style={{
        backgroundImage:
          "radial-gradient(1000px 1000px at var(--mouse-x,50%) var(--mouse-y,50%), rgba(236,72,153,0.06), transparent 60%)",
      }}
    >
      <main id="main" className="relative z-10 container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[auto,1fr] lg:gap-16">
          {/* === Avatar (silhouette, not a square) === */}
          <div className="justify-self-center">
            <img
              src={cartoon}
              alt="Vishakha portrait"
              className="size-80 md:size-96 object-contain transition duration-300 will-change-transform hover:scale-[1.01]
                         drop-shadow-[0_0_0_rgba(236,72,153,0)]
                         hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.28)]"
            />
          </div>

          {/* === Text === */}
          <div>
            <div className="mb-6">
              <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" />
            </div>

            <h1 className="mb-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--ink-1)] md:text-7xl">
              Hi! I am Vishakha
            </h1>

            <p className="mb-8 max-w-prose text-lg leading-relaxed text-[var(--ink-2)] md:text-xl">
              I build polished, human-centered products—where meticulous
              engineering meets thoughtful, art-driven design.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Button 1 — white text + purple glass on hover */}
              <Button
                onClick={() => scrollTo("projects")}
                size="lg"
                className="glass btn-accent-hover border border-white/60 text-[var(--ink-1)]"
              >
                View My Work
              </Button>

              <Button
                onClick={() => scrollTo("artworks")}
                variant="outline"
                size="lg"
                className="glass btn-accent-hover border border-white/60 text-[var(--ink-1)]"
              >
                Explore Art
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden
      >
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/60">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-[var(--pop-pink)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

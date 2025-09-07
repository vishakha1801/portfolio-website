import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
// 👉 Use a transparent‑background version of this image for best results
// (you can replace with your refined PNG):
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

  const to = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={heroRef}
      className="relative bokeh flex min-h-screen items-center justify-center overflow-hidden font-nice"
      aria-label="Hero"
    >
      <main id="main" className="relative z-10 container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[auto,1fr] lg:gap-16">
          {/* === Avatar (takes the exact shape of the image) === */}
          <div className="justify-self-center">
            {/* Use the PNG's alpha to silhouette the avatar; pink glow follows the shape via drop-shadow */}
            <div className="group relative size-80 md:size-96">
              <img
                src={cartoon}
                alt="Vishakha portrait"
                className="size-full object-contain transition-[filter,transform] duration-300 will-change-transform hover:scale-[1.01] [filter:drop-shadow(0_0_0_rgba(236,72,153,0))] hover:[filter:drop-shadow(0_0_12px_rgba(236,72,153,0.32))]"
              />
            </div>

            {/**
             * Fallback (if your source image is NOT transparent):
             * Replace the <img> above with the <div> below to mask the box to the image shape
             * and still get a silhouette + glow. Keep ONE of these blocks.
             */}
            {false && (
              <div
                className="group relative size-80 md:size-96 transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  WebkitMaskImage: `url(${cartoon})`,
                  maskImage: `url(${cartoon})`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  backgroundImage: `url(${cartoon})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "drop-shadow(0 0 0 rgba(236,72,153,0))",
                }}
              />
            )}
          </div>

          {/* Text */}
          <div>
            <div className="mb-6">
              <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" />
            </div>
            <h1 className="mb-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-[var(--ink-1)] md:text-7xl">
              Hi! I am Vishakha
            </h1>
            <p className="mb-8 max-w-prose text-lg leading-relaxed text-[var(--ink-2)] md:text-xl">
              I build polished, human‑centered products—where meticulous engineering meets thoughtful, art‑driven design.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => to("projects")} size="lg" className="glass pop-glow border border-white/60 text-[var(--ink-1)]">
                View My Work
              </Button>
              <Button onClick={() => to("projects")} variant="outline" size="lg" className="glass pop-glow border border-white/60 text-[var(--ink-1)]">
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden>
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/60">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-[var(--pop-pink)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

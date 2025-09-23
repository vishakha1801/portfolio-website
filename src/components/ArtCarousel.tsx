import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export type ArtItem = { id: number; title: string; image: string; alt?: string };


const ArtCarousel: React.FC<{ items: ArtItem[] }> = ({ items }) => {
  const [index, setIndex] = useState(1);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const at = (offset: number) => items[(index + offset + items.length) % items.length];

  return (
    <div className="relative mx-auto flex max-w-5xl items-center justify-center gap-6 py-8">
      <button
        aria-label="Previous"
        onClick={prev}
        className="btn-accent-hover glass focus-ring absolute -left-6 top-1/2 -translate-y-1/2 rounded-full p-3"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <figure className="hidden w-40 shrink-0 opacity-50 transition-all duration-300 md:block">
        <img
          src={at(-1).image}
          alt={at(-1).alt || at(-1).title}
          className="h-52 w-full rounded-[24px] object-cover"
        />
        <figcaption className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.28em] text-[var(--ink-3)]">
          {at(-1).title}
        </figcaption>
      </figure>

      <figure className="glass-strong pop-glow relative w-full max-w-sm rounded-[36px] p-4 shadow-2xl md:max-w-md">
        <img
          src={at(0).image}
          alt={at(0).alt || at(0).title}
          className="h-80 w-full rounded-[28px] object-cover"
        />
        <figcaption className="mt-5 text-center text-sm uppercase tracking-[0.28em] text-[var(--ink-1)]">
          {at(0).title}
        </figcaption>
      </figure>

      <figure className="hidden w-40 shrink-0 opacity-50 transition-all duration-300 md:block">
        <img
          src={at(1).image}
          alt={at(1).alt || at(1).title}
          className="h-52 w-full rounded-[24px] object-cover"
        />
        <figcaption className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.28em] text-[var(--ink-3)]">
          {at(1).title}
        </figcaption>
      </figure>

      <button
        aria-label="Next"
        onClick={next}
        className="btn-accent-hover glass focus-ring absolute -right-6 top-1/2 -translate-y-1/2 rounded-full p-3"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ArtCarousel;

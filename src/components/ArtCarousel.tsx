import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export type ArtItem = { id: number; title: string; image: string; alt?: string };


const ArtCarousel: React.FC<{ items: ArtItem[] }>= ({ items }) => {
const [index, setIndex] = useState(1);
const prev = () => setIndex(i => (i - 1 + items.length) % items.length);
const next = () => setIndex(i => (i + 1) % items.length);
const at = (off: number) => items[(index + off + items.length) % items.length];


return (
<div className="relative mx-auto flex max-w-5xl items-center justify-center gap-5 py-6">
<button
  aria-label="Previous"
  onClick={prev}
  className="glass btn-accent-hover focus-ring absolute -left-3 top-1/2 -translate-y-1/2 rounded-full p-2"
><ChevronLeft className="h-5 w-5" />
</button>
<figure className="vintage-frame w-44 opacity-55 transition-all duration-300 hover:opacity-80">
<img src={at(-1).image} alt={at(-1).alt || at(-1).title} className="h-44 w-full rounded object-cover" />
<figcaption className="mt-2 text-center text-xs text-[var(--ink-2)]">{at(-1).title}</figcaption>
</figure>
<figure className="vintage-frame w-80 scale-[1.06] shadow-xl transition-transform duration-300">
<img src={at(0).image} alt={at(0).alt || at(0).title} className="h-80 w-full rounded object-cover" />
<figcaption className="mt-2 text-center text-sm font-medium text-[var(--ink-1)]">{at(0).title}</figcaption>
</figure>
<figure className="vintage-frame w-44 opacity-55 transition-all duration-300 hover:opacity-80">
<img src={at(1).image} alt={at(1).alt || at(1).title} className="h-44 w-full rounded object-cover" />
<figcaption className="mt-2 text-center text-xs text-[var(--ink-2)]">{at(1).title}</figcaption>
</figure>
<button
  aria-label="Next"
  onClick={next}
  className="glass btn-accent-hover focus-ring absolute -right-3 top-1/2 -translate-y-1/2 rounded-full p-2"
><ChevronRight className="h-5 w-5" />
</button>
</div>
);
};
export default ArtCarousel;


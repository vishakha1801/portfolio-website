import React from "react";
import { Button } from "@/components/ui/button";
import ArtCarousel, { ArtItem } from "@/components/ArtCarousel";
import painting1 from "@/assets/painting-1.jpeg";
import painting2 from "@/assets/painting-2.jpeg";
import painting3 from "@/assets/painting-3.jpeg";
import painting4 from "@/assets/painting-4.jpeg";
import painting5 from "@/assets/painting-5.jpeg";
import painting6 from "@/assets/painting-6.jpeg";
import painting7 from "@/assets/painting-7.jpeg";

const ArtSection: React.FC = () => {
  const items: ArtItem[] = [
    { id: 1, title: "Self Love", image: painting1 },
    { id: 2, title: "Llama in Bloom", image: painting2 },
    { id: 3, title: "Bombay", image: painting3 },
    { id: 4, title: "Rue from Euphoria", image: painting4 },
    { id: 5, title: "Spectrum of Sorrow", image: painting5 },
    { id: 6, title: "A Study in Elegance (Inktober)", image: painting6 },
    { id: 7, title: "Blush in Bloom", image: painting7 },
  ];

  return (
    <section id="artworks" className="mouse-glow relative py-32 font-nice">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-kicker">Artworks</div>
          <h2 className="script-accent mt-6 text-4xl leading-snug text-[var(--ink-1)] md:text-5xl">
            Selected Paintings
          </h2>
        </div>

        <div className="mt-16 rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-xl backdrop-blur-xl">
          <ArtCarousel items={items} />
        </div>

      </div>
    </section>
  );
};

export default ArtSection;

import React from "react";
import { Button } from "@/components/ui/button";
import ArtCarousel, { ArtItem } from "@/components/ArtCarousel";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";


const ArtSection: React.FC = () => {
const items: ArtItem[] = [
{ id: 1, title: "Flowing Emotions", image: painting1 },
{ id: 2, title: "Geometric Harmony", image: painting2 },
{ id: 3, title: "Ethereal Dreams", image: painting3 },
{ id: 4, title: "Code Poetry", image: painting1 },
{ id: 5, title: "Urban Abstracts", image: painting2 },
{ id: 6, title: "Nature's Algorithms", image: painting3 },
];
return (
<section id="artworks" className="pt-44 pb-24 font-nice">{/* pushed further down */}
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" />
<h2 className="text-4xl font-semibold text-[var(--ink-1)]">Artworks</h2>
<p className="text-lg text-[var(--ink-2)] max-w-2xl mx-auto">Center‑stage carousel with vintage framing and soft side pieces.</p>
</div>
<div className="glass pop-glow rounded-xl p-6"><ArtCarousel items={items} /></div>
<div className="text-center mt-12"><Button variant="outline" size="lg" className="glass pop-glow border border-white/60 text-[var(--ink-1)]">View Full Gallery</Button></div>
</div>
</section>
);
};
export default ArtSection;
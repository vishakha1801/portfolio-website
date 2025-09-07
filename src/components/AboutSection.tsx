import React from "react";
import { Card, CardContent } from "@/components/ui/card";


const AboutSection: React.FC = () => (
<section id="about" className="py-24 font-nice">
<div className="container mx-auto px-6">
<div className="mx-auto max-w-4xl text-center mb-14">
<div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" />
<h2 className="text-4xl font-semibold text-[var(--ink-1)]">Where Code Meets Canvas</h2>
<p className="mt-2 text-lg text-[var(--ink-2)]">A profile of the creative mind behind the digital experiences</p>
</div>
<div className="grid items-stretch gap-8 md:grid-cols-2">
<Card className="glass pop-glow"><CardContent className="p-6"><h3 className="mb-3 text-2xl font-semibold text-[var(--pop-pink)]">👨‍💻 The Developer</h3><p className="leading-relaxed text-[var(--ink-2)]">React, TypeScript, and product development—elegant, resilient systems that feel effortless.</p></CardContent></Card>
<Card className="glass pop-glow"><CardContent className="p-6"><h3 className="mb-3 text-2xl font-semibold text-[var(--pop-purple)]">🎨 The Artist</h3><p className="leading-relaxed text-[var(--ink-2)]">Color, texture, and narrative shape my visual taste and creative problem solving.</p></CardContent></Card>
<div className="glass pop-glow p-8 md:col-span-2"><h3 className="mb-3 text-2xl font-semibold text-[var(--ink-1)]">The Intersection</h3><p className="mb-6 leading-relaxed text-[var(--ink-2)]">The best products sit at the intersection of technical rigor and creative vision.</p><div className="grid grid-cols-2 gap-6 text-sm"><div><h4 className="mb-2 font-semibold text-[var(--pop-pink)]">Tech Stack</h4><ul className="space-y-1 text-[var(--ink-2)]"><li>React & TypeScript</li><li>Node.js & Python</li><li>Design Systems</li><li>Product Strategy</li></ul></div><div><h4 className="mb-2 font-semibold text-[var(--pop-purple)]">Art Mediums</h4><ul className="space-y-1 text-[var(--ink-2)]"><li>Digital Painting</li><li>Abstract Art</li><li>Mixed Media</li><li>Creative Writing</li></ul></div></div></div>
</div>
</div>
</section>
);
export default AboutSection;
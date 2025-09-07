import React from "react";


const chips = ["React","TypeScript","Node.js","Python","Design Systems","Product Strategy","Figma","PostgreSQL","RAG/LLMs","Langfuse","Ollama"];


const SkillsSection: React.FC = () => (
<section id="skills" className="py-20 font-nice">
<div className="container mx-auto px-6">
<div className="text-center mb-10"><div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" /><h2 className="text-3xl font-semibold text-[var(--ink-1)]">Skills & Tools</h2></div>
<div className="glass rounded-xl p-6">
<ul className="flex flex-wrap gap-3 justify-center">
{chips.map(c => (<li key={c} className="glass pop-glow rounded-full px-4 py-2 text-sm text-[var(--ink-1)] border border-white/60">{c}</li>))}
</ul>
</div>
</div>
</section>
);
export default SkillsSection;
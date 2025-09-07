import React from "react";


const ExperienceSection: React.FC = () => (
<section id="experience" className="py-24 font-nice">
<div className="container mx-auto px-6">
<div className="text-center mb-12"><div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" /><h2 className="text-4xl font-semibold text-[var(--ink-1)]">Experience</h2></div>
<ol className="relative mx-auto max-w-3xl border-l border-white/60 pl-6">
<li className="mb-10"><div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-[var(--pop-pink)]"/><h3 className="text-xl font-semibold text-[var(--ink-1)]">AI Product Manager Intern — Coforge (Sabre)</h3><p className="text-sm text-[var(--ink-2)]">May 2025 – Aug 2025</p><p className="mt-2 text-[var(--ink-2)]">Architected LLM-based code modernization platform, built RAG pipelines, designed observability dashboards.</p></li>
<li className="mb-10"><div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-[var(--pop-purple)]"/><h3 className="text-xl font-semibold text-[var(--ink-1)]">Product Analyst — Optum</h3><p className="text-sm text-[var(--ink-2)]">Jul 2022 – Apr 2024</p><p className="mt-2 text-[var(--ink-2)]">Led latency‑cutting redesign, created automation framework, improved server load.</p></li>
</ol>
</div>
</section>
);
export default ExperienceSection;
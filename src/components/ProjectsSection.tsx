import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";


const ProjectsSection: React.FC = () => {
const projects = [
{ title: "AI-Powered Design System", description: "Design tokens, generators, and docs.", tags: ["React","TypeScript","AI","Design Systems"], demoUrl: "#", githubUrl: "#", featured: true },
{ title: "Interactive Data Visualization", description: "Story-first charts and motion.", tags: ["React","D3.js","Data Viz","UX"], demoUrl: "#", githubUrl: "#", featured: true },
{ title: "Creative Portfolio Platform", description: "Creator galleries with commerce.", tags: ["Full Stack","Next.js","PostgreSQL","Stripe"], demoUrl: "#", githubUrl: "#", featured: false },
{ title: "Mindfulness Mobile App", description: "Art‑aided meditation toolkit.", tags: ["React Native","Wellness","Mobile","UX/UI"], demoUrl: "#", githubUrl: "#", featured: false },
];
return (
<section id="projects" className="py-24 font-nice">
<div className="container mx-auto px-6">
<div className="text-center mb-16"><div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" /><h2 className="text-4xl font-semibold text-[var(--ink-1)]">Featured Projects</h2><p className="text-lg text-[var(--ink-2)] max-w-2xl mx-auto">Technical innovation with creative design thinking.</p></div>
<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
{projects.map((p, i) => (
<Card key={i} className="glass pop-glow transition-all duration-300">
<CardHeader>
<div className="flex items-start justify-between">
<div>
<CardTitle className="text-xl mb-2 flex items-center gap-2">{p.title} {p.featured && (<span className="text-xs rounded bg-rose-50/80 px-2 py-0.5 text-[var(--pop-pink)]">Featured</span>)}</CardTitle>
<CardDescription className="text-[var(--ink-2)]">{p.description}</CardDescription>
</div>
</div>
</CardHeader>
<CardContent>
<div className="mb-6 flex flex-wrap gap-2">{p.tags.map(t => (<Badge key={t} variant="outline" className="text-xs border-white/60 text-[var(--ink-1)]">{t}</Badge>))}</div>
<div className="flex gap-3">
<Button variant="outline" size="sm" className="glass pop-glow border border-white/60 text-[var(--ink-1)]"><ExternalLink className="mr-2 h-4 w-4"/>Live Demo</Button>
<Button variant="ghost" size="sm" className="text-[var(--ink-2)] hover:text-[var(--ink-1)]"><Github className="mr-2 h-4 w-4"/>Code</Button>
</div>
</CardContent>
</Card>
))}
</div>
<div className="text-center mt-12"><Button variant="outline" size="lg" className="glass pop-glow border border-white/60 text-[var(--ink-1)]">View All Projects</Button></div>
</div>
</section>
);
};
export default ProjectsSection;
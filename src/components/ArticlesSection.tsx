import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import SubstackEmbed from "@/components/SubstackEmbed";


const ArticlesSection: React.FC = () => {
const articles = [
{ title: "The Art of Creative Coding: Finding Beauty in Logic", excerpt: "Programming as artistic practice.", publishDate: "2 days ago", readTime: "8 min read", tags: ["Creative Coding","Art","Dev"], featured: true, url: "#" },
{ title: "Design Systems as Living Art", excerpt: "Evolution and expression in systems.", publishDate: "1 week ago", readTime: "6 min read", tags: ["Design Systems","UX"], featured: true, url: "#" },
{ title: "Building Products with Soul", excerpt: "Function × emotion.", publishDate: "2 weeks ago", readTime: "10 min read", tags: ["Product","Philosophy"], featured: false, url: "#" },
{ title: "AI and Creative Expression", excerpt: "Where AI augments the human.", publishDate: "3 weeks ago", readTime: "12 min read", tags: ["AI","Creativity"], featured: false, url: "#" },
];
return (
<section id="articles" className="py-24 font-nice">
<div className="container mx-auto px-6">
<div className="text-center mb-16"><div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" /><h2 className="text-4xl font-semibold text-[var(--ink-1)]">Thoughts & Insights</h2><p className="text-lg text-[var(--ink-2)] max-w-2xl mx-auto">Writing at the intersection of technology and creativity.</p></div>
<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
{articles.map((a, i) => (
<Card key={i} className="glass pop-glow group cursor-pointer transition-all duration-300">
<CardHeader>
<div className="mb-3 flex items-start justify-between">
<div className="flex items-center gap-2 text-sm text-[var(--ink-2)]"><Calendar className="h-4 w-4" /><span>{a.publishDate}</span><span>•</span><Clock className="h-4 w-4" /><span>{a.readTime}</span></div>
{a.featured && (<span className="rounded bg-rose-50/80 px-2 py-0.5 text-xs text-[var(--pop-pink)]">Featured</span>)}
</div>
<CardTitle className="text-xl font-semibold transition-colors group-hover:text-[var(--pop-pink)]">{a.title}</CardTitle>
<CardDescription className="text-[var(--ink-2)]">{a.excerpt}</CardDescription>
</CardHeader>
<CardContent>
<div className="flex items-center justify-between">
<div className="flex flex-wrap gap-2">{a.tags.map(t => (<Badge key={t} variant="outline" className="text-xs border-white/60 text-[var(--ink-1)]">{t}</Badge>))}</div>
<Button
  asChild
  variant="ghost"
  size="sm"
  className="glass btn-accent-hover border border-white/60 text-[var(--ink-1)]"
>
<a href={a.url}>
Read More<ExternalLink className="ml-2 h-4 w-4" />
</a></Button>
</div>
</CardContent>
</Card>
))}
</div>
<div className="mt-12 max-w-2xl mx-auto text-center">
<h3 className="mb-3 text-2xl font-semibold text-[var(--ink-1)]">Subscribe to My Newsletter</h3>
<p className="mb-6 text-[var(--ink-2)]">Weekly insights on creative dev and product thinking.</p>
<SubstackEmbed publication="your-substack" />
</div>
</div>
</section>
);
};
export default ArticlesSection;


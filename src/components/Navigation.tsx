import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";


const Navigation: React.FC = () => {
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
const onScroll = () => setIsScrolled(window.scrollY > 8);
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);
const to = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });


return (
<nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass-toolbar" : "glass-toolbar/0"} font-nice`}>
<div className="container mx-auto px-6 py-3">
<div className="flex items-center justify-between">
<div className="text-lg font-semibold text-[var(--ink-1)]">Vishakha</div>
<div className="hidden items-center gap-6 md:flex">
<button onClick={() => to('about')} className="text-sm text-[var(--ink-2)] hover:text-[var(--ink-1)] focus-ring">About</button>
<button onClick={() => to('projects')} className="text-sm text-[var(--ink-2)] hover:text-[var(--ink-1)] focus-ring">Projects</button>
<button onClick={() => to('artworks')} className="text-sm text-[var(--ink-2)] hover:text-[var(--ink-1)] focus-ring">Artworks</button>
<button onClick={() => to('articles')} className="text-sm text-[var(--ink-2)] hover:text-[var(--ink-1)] focus-ring">Articles</button>
<Button onClick={() => to('contact')} variant="outline" className="glass pop-glow border border-white/50 text-[var(--ink-1)]">Contact</Button>
</div>
</div>
</div>
</nav>
);
};
export default Navigation;
import React from "react";
const Footer: React.FC = () => (
<footer className="glass hairline mt-24 py-10 font-nice">
<div className="container mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
<p className="text-sm text-[var(--ink-2)]">© {new Date().getFullYear()} Vishakha Pathak. All rights reserved.</p>
<nav className="flex items-center gap-4 text-sm">
<a className="hover:underline" href="#projects">Projects</a>
<a className="hover:underline" href="#artworks">Artworks</a>
<a className="hover:underline" href="#articles">Articles</a>
<a className="hover:underline" href="#contact">Contact</a>
</nav>
</div>
</footer>
);
export default Footer;


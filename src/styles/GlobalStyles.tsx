import React from "react";


const GlobalStyles: React.FC = () => (
<style>{`
:root {
/* Apple-style glass tokens */
--glass-light: rgba(255,255,255,0.55);
--glass-dark: rgba(17,25,40,0.55);
--glass-border: rgba(255,255,255,0.35);
--glass-shadow: 0 20px 40px rgba(0,0,0,0.16);
--hairline: rgba(255,255,255,0.6);
--ink-1: #0b1220; /* text */
--ink-2: #475569; /* secondary */
--pop-pink: #ec4899; /* rose-500 */
--pop-purple: #a855f7; /* purple-500 */
--ring: 0 0 0 3px rgba(236,72,153,0.35), 0 0 0 6px rgba(168,85,247,0.25);
}


/* Glasmorphism utilities — closest to Apple's frosted translucency */
.glass {
background: var(--glass-light);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid var(--glass-border);
box-shadow: var(--glass-shadow);
}
.glass-dark { background: var(--glass-dark); }


/* Toolbar-style translucency (like macOS titlebar) */
.glass-toolbar {
background: linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.35));
backdrop-filter: blur(22px) saturate(180%);
-webkit-backdrop-filter: blur(22px) saturate(180%);
border-bottom: 1px solid rgba(255,255,255,0.45);
box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}


/* Hairline separators */
.hairline { box-shadow: inset 0 1px 0 var(--hairline), inset 0 -1px 0 rgba(0,0,0,0.06); }


/* Hover highlight */
.pop-glow { transition: box-shadow 220ms ease, transform 220ms ease, background-color 220ms; }
.pop-glow:hover { box-shadow: 0 0 46px rgba(236,72,153,0.45), 0 0 46px rgba(168,85,247,0.35); transform: translateY(-1px); }
.focus-ring:focus-visible { outline: none; box-shadow: var(--ring); }


/* Bokeh background (soft colored blobs) */
.bokeh:before, .bokeh:after {
content: ""; position: absolute; inset: -10%; z-index: 0; filter: blur(80px);
background: radial-gradient(600px 600px at 20% 20%, rgba(236,72,153,0.18), transparent 60%),
radial-gradient(600px 600px at 80% 30%, rgba(168,85,247,0.18), transparent 60%),
radial-gradient(600px 600px at 50% 80%, rgba(244,114,182,0.16), transparent 60%);
pointer-events: none;
}
.bokeh:after { filter: blur(120px); opacity: .7; }


/* Nicer font */
.font-nice { font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans"; }


/* Motion safety */
@media (prefers-reduced-motion: reduce) {
* { animation: none !important; transition: none !important; }
}
`}</style>
);


export default GlobalStyles;
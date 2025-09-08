// src/styles/GlobalStyles.tsx
import React from "react";

const GlobalStyles: React.FC = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  /* Glass */
  --glass-light: rgba(255,255,255,0.55);
  --glass-dark: rgba(17,25,40,0.55);
  --glass-border: rgba(255,255,255,0.35);
  --glass-shadow: 0 20px 40px rgba(0,0,0,0.16);
  --hairline: rgba(255,255,255,0.6);

  /* Text */
  --ink-1:rgb(18, 24, 39);
  --ink-2: #475569;

  /* Accent palette (stay in the pink family to match the site) */
  --accent-1: #ec4899;  /* rose-500 (primary) */
  --accent-2: #f472b6;  /* pink-400 (secondary) */

  /* Glassy tints for hover fills */
  --accent-1-glass: rgba(236,72,153,0.26);
  --accent-2-glass: rgba(244,114,182,0.20);

  /* Focus ring tuned to pinks */
  --ring: 0 0 0 2px rgba(236,72,153,0.26), 0 0 0 5px rgba(244,114,182,0.18);

  /* Back-compat (anything that referenced these will now match the pink set) */
  --pop-pink: var(--accent-1);
  --pop-purple: var(--accent-2);
}

/* Glass utilities */
.glass {
  background: var(--glass-light);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
.glass-dark { background: var(--glass-dark); }

/* Soft toolbar */
.glass-toolbar {
  background: linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.35));
  backdrop-filter: blur(22px) saturate(180%);
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.45);
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}

/* Hairlines */
.hairline { box-shadow: inset 0 1px 0 var(--hairline), inset 0 -1px 0 rgba(0,0,0,0.06); }

/* Hover highlight */
.pop-glow { transition: box-shadow 200ms ease, transform 200ms ease, background-color 200ms; }
.pop-glow:hover { box-shadow: 0 0 16px rgba(236,72,153,0.26), 0 0 12px rgba(244,114,182,0.18); transform: translateY(-1px); }
.focus-ring:focus-visible { outline: none; box-shadow: var(--ring); }

/* NEW: one class to give all buttons the same hover (white text + glassy pink fill) */
.btn-accent-hover {
  transition: color 200ms ease, background 200ms ease, border-color 200ms ease, transform 200ms ease;
}
.btn-accent-hover:hover {
  color: #ffffff !important;
  background: linear-gradient(to right, var(--accent-1-glass), var(--accent-2-glass)) !important;
  border-color: rgba(255,255,255,0.75) !important;
  transform: translateY(-1px);
}

/* Silhouette-following glow for transparent PNG/SVG */
.silhouette-glow { transition: filter 220ms ease, transform 220ms ease; filter: drop-shadow(0 0 0 rgba(236,72,153,0)); }
.silhouette-glow:hover { filter: drop-shadow(0 0 12px rgba(236,72,153,0.28)); transform: translateY(-1px); }

/* Softer bokeh */
.bokeh:before, .bokeh:after {
  content: ""; position: absolute; inset: -10%; z-index: 0; filter: blur(80px);
  background:
    radial-gradient(600px 600px at 20% 20%, rgba(236,72,153,0.14), transparent 60%),
    radial-gradient(600px 600px at 80% 30%, rgba(244,114,182,0.14), transparent 60%),
    radial-gradient(600px 600px at 50% 80%, rgba(244,114,182,0.12), transparent 60%);
  pointer-events: none;
}
.bokeh:after { filter: blur(120px); opacity: .7; }

/* Font */
.font-nice {
  font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system,
               Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
}

/* Motion safety */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
`}</style>
);

export default GlobalStyles;

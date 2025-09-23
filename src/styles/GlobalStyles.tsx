// src/styles/GlobalStyles.tsx
import React from "react";

const GlobalStyles: React.FC = () => (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap');

:root {
  /* Typography */
  --font-display: "Caveat", "Segoe Script", "Bradley Hand", cursive;
  --font-body: "Calibri", "Manrope", "Inter", "Helvetica Neue", Arial, sans-serif;

  /* Pointer glow defaults */
  --mouse-x: 50%;
  --mouse-y: 45%;

  /* Core palette */
  --ink-1: #1f1a2b;
  --ink-2: #5c5873;
  --ink-3: #928fa8;
  --accent-1: #f254a8;
  --accent-2: #9b5cf6;
  --accent-3: #c084fc;

  /* Glass surfaces */
  --glass-surface: rgba(255, 255, 255, 0.68);
  --glass-strong: rgba(253, 245, 255, 0.82);
  --glass-border: rgba(255, 255, 255, 0.52);
  --glass-shadow: 0 26px 48px rgba(47, 16, 76, 0.18);

  /* Lines & rings */
  --hairline: rgba(255, 255, 255, 0.7);
  --line-soft: rgba(31, 26, 43, 0.08);
  --ring: 0 0 0 3px rgba(242, 84, 168, 0.2), 0 0 0 6px rgba(155, 92, 246, 0.18);

  /* Radii */
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;

  /* Legacy aliases */
  --pop-pink: var(--accent-1);
  --pop-purple: var(--accent-2);
  --accent-1-glass: rgba(242, 84, 168, 0.18);
  --accent-2-glass: rgba(155, 92, 246, 0.16);
}

body {
  font-family: var(--font-body);
  background: radial-gradient(900px 900px at var(--mouse-x, 50%) var(--mouse-y, 45%), rgba(242, 84, 168, 0.096), transparent 70%),
              radial-gradient(circle at 20% -10%, rgba(242, 84, 168, 0.18), transparent 45%),
              radial-gradient(circle at 80% 0%, rgba(155, 92, 246, 0.16), transparent 46%),
              #f7f6fb;
  color: var(--ink-2);
  min-height: 100vh;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background: radial-gradient(45% 60% at 30% 30%, rgba(242, 84, 168, 0.12), transparent 70%),
              radial-gradient(55% 65% at 70% 25%, rgba(155, 92, 246, 0.12), transparent 70%);
  filter: blur(60px);
  transform: translateZ(0);
  z-index: -1;
}

h1, h2, h3, h4, h5, h6, .heading-script {
  font-family: var(--font-display);
  color: var(--ink-1);
  font-weight: 500;
}

p, span, li, label, a, button {
  color: var(--ink-2);
}

.font-nice {
  font-family: var(--font-body);
}

.script-accent {
  font-family: var(--font-display);
  letter-spacing: 0.02em;
}

.mouse-glow {
  background-image: radial-gradient(900px 900px at var(--mouse-x, 50%) var(--mouse-y, 45%), rgba(242, 84, 168, 0.084), transparent 70%);
  background-repeat: no-repeat;
}

.glass {
  background: var(--glass-surface);
  backdrop-filter: blur(28px) saturate(170%);
  -webkit-backdrop-filter: blur(28px) saturate(170%);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  box-shadow: var(--glass-shadow);
}

.glass-strong {
  background: var(--glass-strong);
  backdrop-filter: blur(32px) saturate(180%);
  -webkit-backdrop-filter: blur(32px) saturate(180%);
}

.glass-toolbar {
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.82), rgba(253, 245, 255, 0.52));
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 12px 32px rgba(45, 13, 75, 0.16);
}

.hairline {
  box-shadow: inset 0 1px 0 var(--hairline), inset 0 -1px 0 rgba(31, 26, 43, 0.08);
}

.focus-ring:focus-visible {
  outline: none;
  box-shadow: var(--ring);
}

.btn-accent-hover {
  transition: all 220ms ease;
  position: relative;
  overflow: hidden;
}

.btn-accent-hover::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(242, 84, 168, 0.14), rgba(155, 92, 246, 0.16));
  opacity: 0;
  transition: opacity 220ms ease;
  z-index: -1;
}

.btn-accent-hover:hover::before {
  opacity: 1;
}

.btn-accent-hover:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.68) !important;
  color: var(--ink-1);
}

.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.12rem 0.8rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.66);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.section-kicker::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
}

.surface-grid {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
  position: relative;
  overflow: hidden;
}

.surface-grid::before {
  content: '';
  position: absolute;
  inset: -100% 0 0 0;
  background-image: linear-gradient(to right, rgba(31,26,43,0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(31,26,43,0.04) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.35;
}

.orb {
  position: absolute;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle at 30% 30%, rgba(242, 84, 168, 0.32), rgba(155, 92, 246, 0.08) 68%, transparent 100%);
  filter: blur(10px);
  opacity: 0.85;
}

.pop-glow {
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.pop-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 38px rgba(32, 13, 56, 0.18);
}

.silhouette-glow {
  transition: filter 220ms ease, transform 220ms ease;
  filter: drop-shadow(0 0 0 rgba(242, 84, 168, 0));
}

.silhouette-glow:hover {
  transform: translateY(-2px) scale(1.01);
  filter: drop-shadow(0 8px 24px rgba(155, 92, 246, 0.22));
}

/* Hero hover flip utility retained */
.flip-3d { position: relative; perspective: 1200px; }
.flip-front,
.flip-back {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 500ms ease-out;
  display: block;
  border-radius: 50%;
}
.flip-front { transform: rotateY(0deg); }
.flip-back  { transform: rotateY(180deg); position: absolute; inset: 0; }
.flip-3d:hover .flip-front,
.flip-3d:focus-within .flip-front { transform: rotateY(-180deg); }
.flip-3d:hover .flip-back,
.flip-3d:focus-within .flip-back  { transform: rotateY(0deg); }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  .flip-front, .flip-back { transform: none !important; }
}
`}</style>
);

export default GlobalStyles;

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { createPortal } from "react-dom";

const THEME_KEY = "portfolio-theme";
const themeColors = {
  light: "#f7f6fb",
  dark: "#0b1027",
};

type Theme = "light" | "dark";

type CircleState = {
  top: number;
  left: number;
  size: number;
  color: string;
  expanding: boolean;
};

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);
  const [circle, setCircle] = useState<CircleState | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handle = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", handle);
    return () => media.removeEventListener("change", handle);
  }, []);

  const portalTarget = useMemo(() => (typeof document !== "undefined" ? document.body : null), []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const diameter = Math.hypot(window.innerWidth, window.innerHeight) * 2;

      setCircle({
        top: centerY - diameter / 2,
        left: centerX - diameter / 2,
        size: diameter,
        color: themeColors[nextTheme],
        expanding: false,
      });

      requestAnimationFrame(() => {
        setCircle((prev) => (prev ? { ...prev, expanding: true } : prev));
      });

      setTimeout(() => {
        setTheme(nextTheme);
        setCircle(null);
      }, 450);
    } else {
      setTheme(nextTheme);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={toggleTheme}
        aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
        className="theme-toggle relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/50 text-[var(--ink-1)] shadow-md transition hover:-translate-y-[2px] hover:text-[var(--accent-1)] focus-ring"
      >
        {theme === "light" ? <Moon className="h-5 w-5" aria-hidden /> : <Sun className="h-5 w-5" aria-hidden />}
      </button>

      {portalTarget && circle &&
        createPortal(
          <span
            className={`theme-circle ${circle.expanding ? "theme-circle--expand" : ""}`}
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              backgroundColor: circle.color,
            }}
          />,
          portalTarget
        )}
    </>
  );
};

export default ThemeToggle;

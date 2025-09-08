// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// GitHub Pages: set base to "/<repo>/" for project sites.
// If publishing to user site (vishakha1801.github.io), set isProjectSite = false.
const repoName = "portfolio-website";        // <-- change if your repo name differs
const isProjectSite = true;                  // true = served at /<repo>/ ; false = root domain

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const base = isProd && isProjectSite ? `/${repoName}/` : "/";

  return {
    base,                                      // 🔑 required for GitHub Pages project sites
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
    },
  };
});

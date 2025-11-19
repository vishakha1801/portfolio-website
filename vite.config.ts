// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const base = "/"; 

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      proxy: {
        "/substack": {
          target: "https://vishakhapathak.substack.com",
          changeOrigin: true,
          rewrite: (p: string) => p.replace(/^\/substack/, ""),
        },
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          tswdPortfolio: path.resolve(__dirname, "tswd-portfolio.html"),
          bobRoss: path.resolve(__dirname, "bob-ross/index.html"),
          legoFinalProject: path.resolve(__dirname, "lego-final-project/index.html"),
        },
      },
    },
  };
});

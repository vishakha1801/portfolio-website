// vite.config.ts
import { defineConfig } from "file:///Users/vishakhapathak/Desktop/misc/Desktop%20-%20Vishakha%E2%80%99s%20MacBook%20Air%20-%201/portfolio-website/node_modules/vite/dist/node/index.js";
import react from "file:///Users/vishakhapathak/Desktop/misc/Desktop%20-%20Vishakha%E2%80%99s%20MacBook%20Air%20-%201/portfolio-website/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///Users/vishakhapathak/Desktop/misc/Desktop%20-%20Vishakha%E2%80%99s%20MacBook%20Air%20-%201/portfolio-website/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/Users/vishakhapathak/Desktop/misc/Desktop - Vishakha\u2019s MacBook Air - 1/portfolio-website";
var vite_config_default = defineConfig(({ mode }) => {
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
          rewrite: (p) => p.replace(/^\/substack/, "")
        }
      }
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: path.resolve(__vite_injected_original_dirname, "index.html"),
          tswdPortfolio: path.resolve(__vite_injected_original_dirname, "tswd-portfolio.html")
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmlzaGFraGFwYXRoYWsvRGVza3RvcC9taXNjL0Rlc2t0b3AgLSBWaXNoYWtoYVx1MjAxOXMgTWFjQm9vayBBaXIgLSAxL3BvcnRmb2xpby13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmlzaGFraGFwYXRoYWsvRGVza3RvcC9taXNjL0Rlc2t0b3AgLSBWaXNoYWtoYVx1MjAxOXMgTWFjQm9vayBBaXIgLSAxL3BvcnRmb2xpby13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92aXNoYWtoYXBhdGhhay9EZXNrdG9wL21pc2MvRGVza3RvcCUyMC0lMjBWaXNoYWtoYSVFMiU4MCU5OXMlMjBNYWNCb29rJTIwQWlyJTIwLSUyMDEvcG9ydGZvbGlvLXdlYnNpdGUvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgaXNQcm9kID0gbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCI7XG4gIGNvbnN0IGJhc2UgPSBcIi9cIjsgXG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlLFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogXCI6OlwiLFxuICAgICAgcG9ydDogODA4MCxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiL3N1YnN0YWNrXCI6IHtcbiAgICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly92aXNoYWtoYXBhdGhhay5zdWJzdGFjay5jb21cIixcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHA6IHN0cmluZykgPT4gcC5yZXBsYWNlKC9eXFwvc3Vic3RhY2svLCBcIlwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXS5maWx0ZXIoQm9vbGVhbiksXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgbWFpbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC5odG1sXCIpLFxuICAgICAgICAgIHRzd2RQb3J0Zm9saW86IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwidHN3ZC1wb3J0Zm9saW8uaHRtbFwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFKaEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxTQUFTLFNBQVM7QUFDeEIsUUFBTSxPQUFPO0FBRWIsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLGFBQWE7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQyxNQUFjLEVBQUUsUUFBUSxlQUFlLEVBQUU7QUFBQSxRQUNyRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQUEsSUFDOUUsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0wsTUFBTSxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFVBQzFDLGVBQWUsS0FBSyxRQUFRLGtDQUFXLHFCQUFxQjtBQUFBLFFBQzlEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

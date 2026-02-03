import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

// Only include Manus runtime plugin in development mode
// For production static builds, we exclude it to generate clean HTML
const isDev = process.env.NODE_ENV !== 'production';

// Base plugins for all environments
const basePlugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  visualizer({
    filename: 'dist/stats.html',
    open: false,
    gzipSize: true,
    brotliSize: true,
  }),
];

// Conditionally add Manus runtime plugin only in development
const plugins = isDev
  ? [...basePlugins, (async () => {
      try {
        const { vitePluginManusRuntime } = await import("vite-plugin-manus-runtime");
        return vitePluginManusRuntime();
      } catch {
        return null;
      }
    })()]
  : basePlugins;

export default defineConfig({
  base: '/',
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

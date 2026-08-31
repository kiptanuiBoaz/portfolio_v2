// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { readFileSync } from "node:fs";

// GitHub Pages build: `GITHUB_PAGES=true BASE_PATH=/<repo>/ npm run build`
// Produces a fully static site (no server runtime) in `.output/public`.
const isGitHubPages = process.env["GITHUB_PAGES"] === "true";
const basePath = process.env["BASE_PATH"] || "/";

// Read slugs from the data file without importing it (it pulls in image assets).
const projectSlugs = Array.from(
  readFileSync("./src/data/portfolio.ts", "utf8").matchAll(/slug: "([^"]+)"/g),
).map((m) => m[1]);

const staticRoutes = ["/", ...projectSlugs.map((slug) => `/projects/${slug}`)];

export default defineConfig({
  vite: isGitHubPages ? { base: basePath } : {},
  nitro: isGitHubPages ? { preset: "static" } : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGitHubPages
      ? {
          prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
          pages: staticRoutes.map((path) => ({ path, prerender: { enabled: true } })),
        }
      : {}),
  },
});

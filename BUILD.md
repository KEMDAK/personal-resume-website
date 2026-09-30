# Build Guide

The site is a static single-page app. There is no backend — `pnpm build`
produces plain static files in `dist/public/`, which GitHub Pages serves
via `.github/workflows/static.yml`.

## Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

## Commands

```bash
pnpm install     # install dependencies
pnpm dev         # local dev server (http://localhost:3000)
pnpm build       # production build -> dist/public/
pnpm preview     # preview the production build locally
pnpm check       # TypeScript check
```

## Build output

`pnpm build` runs `vite build` with `NODE_ENV=production` and writes to
`dist/public/`:

- `index.html`, `assets/` (hashed JS/CSS), `images/`
- `CNAME`, `sitemap.xml`, `robots.txt`, favicons
- `resume_dark.pdf` / `resume_light.pdf` (pushed by the latex-resume CI)

Only `dist/public/` is uploaded to Pages (`emptyOutDir` wipes it first).

## Environment variables

The contact form needs its Web3Forms access key at build time as
`VITE_WEB3FORMS_KEY` — from `.env` locally (see `.env.example`), from the
`VITE_WEB3FORMS_KEY` repo secret in CI.

## Troubleshooting

- **Port 3000 in use**: `pnpm dev -- --port 3001`
- **Stale output**: `pnpm build` empties `dist/public` before rebuilding

# Build Guide

This document provides detailed instructions for building the Kareem Mokhtar Interactive Resume website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Development Build](#development-build)
4. [Production Build](#production-build)
5. [Static Build for Deployment](#static-build-for-deployment)
6. [Build Output](#build-output)
7. [Build Optimization](#build-optimization)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

### System Requirements

- **Node.js** — Version 18.0.0 or higher
- **npm** — Version 9.0.0 or higher (included with Node.js)
- **pnpm** — Version 8.0.0 or higher (recommended, optional)
- **Git** — For version control
- **Disk Space** — At least 500 MB free space

### Verify Installation

```bash
# Check Node.js version
node --version
# Expected output: v18.0.0 or higher

# Check npm version
npm --version
# Expected output: 9.0.0 or higher

# Check pnpm version (if installed)
pnpm --version
# Expected output: 8.0.0 or higher
```

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/KEMDAK/personal-resume-website.git
cd personal-resume-website
```

### Step 2: Install Dependencies

Using **pnpm** (recommended):
```bash
pnpm install
```

Using **npm**:
```bash
npm install
```

The installation will:
- Download all required packages from npm registry
- Install React, Vite, Tailwind CSS, and other dependencies
- Create `node_modules/` directory (~500 MB)
- Generate `pnpm-lock.yaml` or `package-lock.json` for reproducible builds

### Step 3: Verify Installation

```bash
# Check if build tools are available
pnpm run build --help
# or
npm run build --help
```

## Development Build

### Start Development Server

```bash
pnpm dev
# or
npm run dev
```

**Output:**
```
  VITE v7.x.x  ready in 234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://169.254.0.21:3000/
```

### Features

- **Hot Module Replacement (HMR)** — Changes reflect instantly without full page reload
- **Source Maps** — Easier debugging with original source code in browser DevTools
- **Fast Refresh** — Preserves component state during edits
- **Error Overlay** — Shows build errors directly in browser

### Development Server Options

```bash
# Specify custom port
pnpm dev -- --port 3001

# Expose to network
pnpm dev -- --host

# Disable HMR
pnpm dev -- --no-hmr
```

## Production Build

### Full Build Command (with Server)

```bash
pnpm build
# or
npm run build
```

This command builds both the client-side assets and the server-side code. It:
1. Sets `NODE_ENV=production` to exclude development-only plugins
2. Runs `vite build` to compile the React application
3. Runs `esbuild` to compile the Express server

### Build Process

The build command performs the following steps:

1. **TypeScript Compilation** — Compiles `.ts` and `.tsx` files to JavaScript
2. **Module Bundling** — Combines all modules into optimized bundles
3. **CSS Processing** — Processes Tailwind CSS and removes unused styles
4. **Asset Optimization** — Compresses and optimizes images and fonts
5. **Code Minification** — Reduces file sizes by removing whitespace and comments
6. **Hash Generation** — Adds content hashes to filenames for cache busting

## Static Build for Deployment

### Static-Only Build Command

For deploying to static hosting platforms (GitHub Pages, Netlify, Vercel, etc.), use:

```bash
pnpm build:static
# or
npm run build:static
```

This command:
1. Sets `NODE_ENV=production` to exclude the Manus runtime plugin
2. Generates clean, self-contained static files in `dist/public/`
3. Does NOT build the server component (not needed for static hosting)

### Output Location

Static files are generated in `dist/public/`:

```
dist/public/
├── index.html                          # Main HTML file (~1 KB)
├── assets/
│   ├── index-[hash].js                 # Main JavaScript bundle (~350 KB)
│   └── index-[hash].css                # Main CSS bundle (~122 KB)
└── images/
    └── [any static images]
```

### Testing the Static Build

```bash
# Build the static site
pnpm build:static

# Preview the build locally
pnpm preview
```

Then open http://localhost:4173 in your browser.

### Direct File Access

The static build uses relative paths (`./assets/...`) so it can be opened directly from the filesystem or served from any directory:

```bash
# Open directly in browser (may have CORS limitations)
open dist/public/index.html

# Or serve with any static file server
npx serve dist/public
python3 -m http.server 8000 --directory dist/public
```

## Build Output

### File Structure

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~1 KB | Main HTML template |
| `assets/index-*.js` | ~350 KB (~108 KB gzipped) | Application JavaScript |
| `assets/index-*.css` | ~122 KB (~19 KB gzipped) | Tailwind CSS styles |

### Total Size

- **Uncompressed** — ~473 KB
- **Gzipped** — ~127 KB (typical web server compression)
- **Brotli** — ~100 KB (better compression)

### Asset Hashing

All assets include content hashes in filenames:
```
index-BlPXHoEe.js  // Hash changes only when content changes
index-8MJsgmuZ.css // Old files can remain cached indefinitely
```

This enables **aggressive caching** — browsers cache assets until content changes.

## Build Optimization

### Environment Variables

The build automatically includes environment variables from `.env` files:

```bash
# .env (committed to repository)
VITE_APP_TITLE=Kareem Mokhtar | Interactive Resume

# .env.local (not committed, local overrides)
VITE_API_URL=http://localhost:3000
```

Access in code:
```typescript
const title = import.meta.env.VITE_APP_TITLE;
```

### Manus Runtime Plugin

The project includes `vite-plugin-manus-runtime` for development in Manus environments. This plugin is **automatically excluded** from production builds to ensure clean, portable static files.

The `vite.config.ts` conditionally loads this plugin:
```typescript
// Only include Manus runtime plugin in development mode
const isDev = process.env.NODE_ENV !== 'production';
```

### Optimization Techniques

The build automatically applies:

1. **Tree Shaking** — Removes unused code
2. **Code Splitting** — Separates vendor code
3. **CSS Purging** — Removes unused Tailwind classes
4. **Minification** — Reduces file sizes

## Troubleshooting

### Build Produces Bloated HTML (300+ KB)

**Problem:** The `index.html` file is very large (300+ KB) instead of ~1 KB

**Cause:** The Manus runtime plugin is being included in the production build

**Solution:**
```bash
# Ensure NODE_ENV is set to production
NODE_ENV=production pnpm build:static

# Or use the build:static script which sets this automatically
pnpm build:static
```

### Build Fails with TypeScript Errors

**Problem:** Build fails with TypeScript compilation errors

**Solution:**
```bash
# Check for TypeScript errors
pnpm check

# Fix errors shown in output, then rebuild
pnpm build
```

### Out of Memory During Build

**Problem:** Build fails with "JavaScript heap out of memory"

**Solution:**
```bash
# Increase Node.js memory limit
NODE_OPTIONS=--max-old-space-size=4096 pnpm build
```

### Build Succeeds but Site Doesn't Work

**Problem:** Build completes but site shows blank page or errors

**Solution:**
```bash
# Verify dist/public/index.html exists and is small (~1 KB)
ls -la dist/public/index.html

# Check the HTML content
head -20 dist/public/index.html

# If HTML is bloated with scripts, rebuild with NODE_ENV=production
NODE_ENV=production pnpm build:static
```

### CSS Warning: "transformOrigin"

**Problem:** Build shows warnings about "transformOrigin" CSS property

**Solution:** This warning is harmless and can be ignored. It comes from animation keyframes in the CSS and does not affect functionality.

### Cache Issues

**Problem:** Old version still showing after rebuild

**Solution:**
```bash
# Clear browser cache
# 1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# 2. Or clear cache in DevTools

# Clear build cache
rm -rf dist node_modules/.vite
pnpm build
```

### Module Not Found Errors

**Problem:** Build fails with "Cannot find module"

**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Port Already in Use

**Problem:** Development server fails to start (port 3000 in use)

**Solution:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
pnpm dev -- --port 3001
```

## CI/CD Integration

### GitHub Actions

The repository includes `.github/workflows/static.yml` for automatic deployment to GitHub Pages:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - run: pnpm install
      - run: pnpm build:static
      - uses: actions/upload-pages-artifact@v3
        with:
          path: 'dist/public'
```

### Manual Deployment

```bash
# Build the static site
pnpm build:static

# The files in dist/public/ can be deployed to any static hosting:
# - GitHub Pages
# - Netlify
# - Vercel
# - AWS S3
# - Any web server
```

## Summary

| Task | Command |
|------|---------|
| Install dependencies | `pnpm install` |
| Start dev server | `pnpm dev` |
| Build for production (with server) | `pnpm build` |
| Build static site only | `pnpm build:static` |
| Preview build | `pnpm preview` |
| Type check | `pnpm check` |
| Format code | `pnpm format` |

---

**For more information, see [README.md](./README.md) and [DEPLOY.md](./DEPLOY.md)**

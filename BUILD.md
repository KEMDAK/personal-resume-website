# Build Guide

This document provides detailed instructions for building the Kareem Mokhtar Interactive Resume website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Development Build](#development-build)
4. [Production Build](#production-build)
5. [Build Output](#build-output)
6. [Build Optimization](#build-optimization)
7. [Troubleshooting](#troubleshooting)

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
git clone https://github.com/KEMDAK/kareem-resume.git
cd kareem-resume
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
  VITE v5.0.0  ready in 234 ms

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

### Build Command

```bash
pnpm build
# or
npm run build
```

### Build Process

The build command performs the following steps:

1. **TypeScript Compilation** — Compiles `.ts` and `.tsx` files to JavaScript
2. **Module Bundling** — Combines all modules into optimized bundles
3. **CSS Processing** — Processes Tailwind CSS and removes unused styles
4. **Asset Optimization** — Compresses and optimizes images and fonts
5. **Code Minification** — Reduces file sizes by removing whitespace and comments
6. **Hash Generation** — Adds content hashes to filenames for cache busting

### Build Output

```
dist/
├── index.html                          # Main HTML file
├── assets/
│   ├── index-a1b2c3d4.js              # Main JavaScript bundle
│   ├── index-e5f6g7h8.css             # Main CSS bundle
│   ├── vendor-i9j0k1l2.js             # Vendor dependencies
│   └── images/
│       └── [optimized images]
└── robots.txt                          # SEO robots file
```

### Build Time

Typical build times:
- **First build** — 30-60 seconds
- **Incremental build** — 10-20 seconds (with cache)

### Build Verification

After building, verify the output:

```bash
# Check build output size
du -sh dist/

# List all generated files
ls -lah dist/

# Verify HTML is valid
file dist/index.html
```

## Build Output

### File Structure

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~2-3 KB | Main HTML template |
| `assets/index-*.js` | ~150-200 KB (gzipped) | Application JavaScript |
| `assets/index-*.css` | ~30-50 KB (gzipped) | Tailwind CSS styles |
| `assets/vendor-*.js` | ~100-150 KB (gzipped) | Third-party libraries |
| `robots.txt` | ~0.5 KB | SEO robots file |

### Total Size

- **Uncompressed** — ~800 KB - 1.2 MB
- **Gzipped** — ~200-250 KB (typical web server compression)
- **Brotli** — ~150-180 KB (better compression)

### Asset Hashing

All assets include content hashes in filenames:
```
index-a1b2c3d4.js  // Hash changes only when content changes
index-e5f6g7h8.css // Old files can remain cached indefinitely
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

### Performance Metrics

After building, check performance:

```bash
# Analyze bundle size
pnpm build --report

# Check for unused CSS
pnpm build --analyze-css
```

### Optimization Techniques

The build automatically applies:

1. **Tree Shaking** — Removes unused code
   ```javascript
   // Unused exports are removed
   export const unused = () => {};
   ```

2. **Code Splitting** — Separates vendor code
   ```
   assets/vendor-*.js  // Third-party libraries
   assets/index-*.js   // Application code
   ```

3. **CSS Purging** — Removes unused Tailwind classes
   ```css
   /* Only used classes are included */
   .text-green-400 { /* included */ }
   .text-red-500 { /* removed if unused */ }
   ```

4. **Minification** — Reduces file sizes
   ```javascript
   // Before: const message = "Hello World";
   // After: const a="Hello World";
   ```

## Troubleshooting

### Build Fails with TypeScript Errors

**Problem:** Build fails with TypeScript compilation errors

**Solution:**
```bash
# Check for TypeScript errors
pnpm tsc --noEmit

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
# Verify dist/index.html exists
ls -la dist/index.html

# Check for JavaScript errors
# 1. Open dist/index.html in browser
# 2. Open DevTools (F12)
# 3. Check Console tab for errors

# Verify all assets loaded
# Check Network tab in DevTools
```

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

### Slow Build Performance

**Problem:** Build takes too long

**Solution:**
```bash
# Check what's slowing down the build
pnpm build --profile

# Analyze bundle size
pnpm build --report

# Update dependencies to latest versions
pnpm update
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

# Or with npm
rm -rf node_modules package-lock.json
npm install
npm run build
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

## Advanced Build Options

### Custom Build Configuration

Edit `vite.config.ts` to customize:

```typescript
export default defineConfig({
  build: {
    outDir: 'dist',           // Output directory
    minify: 'terser',         // Minification tool
    sourcemap: false,         // Source maps for production
    rollupOptions: {
      // Custom Rollup options
    }
  }
});
```

### Environment-Specific Builds

```bash
# Development build
pnpm build --mode development

# Production build (default)
pnpm build --mode production

# Custom environment
pnpm build --mode staging
```

### Analyzing Bundle

```bash
# Use rollup-plugin-visualizer
pnpm add -D rollup-plugin-visualizer

# Then check the generated visualization
```

## CI/CD Integration

### GitHub Actions

The repository includes `.github/workflows/static.yml` for automatic deployment:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: 'dist'
```

### Manual Deployment

```bash
# Build locally
pnpm build

# Push to repository
git add dist/
git commit -m "Build: Update production build"
git push origin main

# GitHub Actions will automatically deploy
```

## Summary

| Task | Command |
|------|---------|
| Install dependencies | `pnpm install` |
| Start dev server | `pnpm dev` |
| Build for production | `pnpm build` |
| Preview build | `pnpm preview` |
| Type check | `pnpm tsc --noEmit` |
| Deploy to GitHub Pages | Push to `main` branch |

---

**For more information, see [README.md](./README.md) and [DEPLOY.md](./DEPLOY.md)**

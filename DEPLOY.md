# Deployment Guide

This document provides step-by-step instructions for deploying the Kareem Mokhtar Interactive Resume to various hosting platforms.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Manus Hosting](#manus-hosting)
3. [GitHub Pages](#github-pages)
4. [Netlify](#netlify)
5. [Vercel](#vercel)
6. [Traditional Web Hosting](#traditional-web-hosting)
7. [Docker Deployment](#docker-deployment)
8. [Post-Deployment](#post-deployment)

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All changes committed to git
- [ ] Build succeeds without errors: `pnpm build`
- [ ] No console errors in development: `pnpm dev`
- [ ] All links and images work correctly
- [ ] Contact links are valid
- [ ] Project links point to correct URLs
- [ ] Mobile responsiveness verified
- [ ] Performance acceptable (< 3s load time)

### Pre-Deployment Commands

```bash
# Build production version
pnpm build

# Preview production build locally
pnpm preview

# Type check for errors
pnpm tsc --noEmit

# Run any linting (if configured)
pnpm lint
```

## Manus Hosting

Manus provides built-in hosting with automatic deployment, custom domains, and SSL/TLS.

### Deployment Steps

1. **Create a Checkpoint**
   - Click the checkpoint button in the Management UI
   - Add a descriptive message (e.g., "Deploy v1.0")
   - Wait for checkpoint to complete

2. **Publish to Production**
   - Click the "Publish" button in the Management UI header
   - Confirm deployment
   - Wait for deployment to complete (typically 30-60 seconds)

3. **Verify Deployment**
   - Visit your site at `https://{project-name}.manus.space`
   - Test all sections and links
   - Verify contact links work

### Custom Domain Setup

1. **Purchase or Connect Domain**
   - Go to Settings → Domains
   - Purchase new domain or connect existing domain
   - Follow DNS configuration instructions

2. **Configure DNS**
   - Add CNAME record pointing to Manus nameservers
   - Wait for DNS propagation (5-30 minutes)

3. **Enable SSL/TLS**
   - Automatically enabled by Manus
   - Certificate auto-renews

### Manus Advantages

- **Zero Configuration** — No build steps needed
- **Automatic SSL** — HTTPS included
- **Custom Domains** — Easy domain management
- **Analytics** — Built-in traffic analytics
- **Rollback** — Easy rollback to previous versions
- **Environment Variables** — Secure secret management

---

## GitHub Pages

Deploy directly from GitHub repository with automatic builds on push.

### Prerequisites

- GitHub account
- Repository pushed to GitHub
- GitHub Pages enabled in repository settings

### Deployment Steps

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)` or `/docs`

2. **Configure Workflow**
   - Repository already includes `.github/workflows/static.yml`
   - This workflow automatically builds and deploys on push

3. **Deploy**
   ```bash
   # Push to main branch
   git add .
   git commit -m "Deploy: Update production build"
   git push origin main
   ```

4. **Verify Deployment**
   - Go to repository Actions tab
   - Check workflow status (should show green checkmark)
   - Visit `https://{username}.github.io/{repository-name}`

### Custom Domain with GitHub Pages

1. **Add CNAME File**
   ```bash
   echo "kareem-mokhtar.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

2. **Configure DNS**
   - Add CNAME record: `kareem-mokhtar.com` → `{username}.github.io`
   - Wait for DNS propagation

3. **Enable HTTPS**
   - Go to Settings → Pages
   - Check "Enforce HTTPS"

### GitHub Pages Advantages

- **Free Hosting** — No cost
- **Automatic Builds** — Deploys on every push
- **Custom Domain** — Easy domain setup
- **HTTPS** — Automatic SSL certificates
- **Version Control** — Full git history

### GitHub Pages Limitations

- **No Backend** — Static sites only (this site is static, so no issue)
- **No Environment Variables** — Use build-time variables only
- **Build Time** — Limited to 10 minutes per build

---

## Netlify

Deploy with automatic builds, previews, and advanced features.

### Prerequisites

- Netlify account (free tier available)
- GitHub, GitLab, or Bitbucket repository

### Method 1: Connect Repository (Recommended)

1. **Connect Repository**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Choose Git provider (GitHub, GitLab, Bitbucket)
   - Select repository
   - Authorize Netlify

2. **Configure Build Settings**
   - Build command: `pnpm build` or `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Verify Deployment**
   - Netlify generates unique URL (e.g., `https://kareem-resume.netlify.app`)
   - Visit URL to verify site works

### Method 2: Manual Deployment

1. **Build Locally**
   ```bash
   pnpm build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   # First deployment (interactive)
   netlify deploy

   # Production deployment
   netlify deploy --prod --dir=dist
   ```

### Custom Domain

1. **Add Domain in Netlify**
   - Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration

2. **Configure DNS**
   - Add CNAME record pointing to Netlify
   - Or update nameservers

### Netlify Advantages

- **Free Tier** — Generous free plan
- **Automatic Builds** — Deploys on every push
- **Preview Deployments** — Test PRs before merging
- **Analytics** — Built-in analytics
- **Forms** — Netlify Forms for contact forms
- **Functions** — Serverless functions (if needed)

### Netlify Configuration

Create `netlify.toml` in root:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Vercel

Deploy with automatic builds, edge functions, and analytics.

### Prerequisites

- Vercel account (free tier available)
- GitHub, GitLab, or Bitbucket repository

### Deployment Steps

1. **Connect Repository**
   - Go to https://vercel.com
   - Click "New Project"
   - Import Git repository
   - Select repository

2. **Configure Project**
   - Framework: "Other" (or "Vite")
   - Build command: `pnpm build` or `npm run build`
   - Output directory: `dist`
   - Click "Deploy"

3. **Verify Deployment**
   - Vercel generates unique URL (e.g., `https://kareem-resume.vercel.app`)
   - Visit URL to verify

### Custom Domain

1. **Add Domain**
   - Project settings → Domains
   - Add custom domain
   - Configure DNS

2. **Configure DNS**
   - Add CNAME record or update nameservers
   - Vercel provides specific instructions

### Vercel Advantages

- **Free Tier** — Generous free plan
- **Automatic Builds** — Deploys on every push
- **Edge Network** — Global CDN
- **Analytics** — Web Analytics included
- **Environment Variables** — Secure secret management
- **Rollback** — Easy rollback to previous deployments

### Vercel Configuration

Create `vercel.json` in root:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "env": {
    "NODE_VERSION": "18"
  }
}
```

---

## Traditional Web Hosting

Deploy to cPanel, Bluehost, GoDaddy, or similar hosting.

### Prerequisites

- Web hosting account with FTP/SFTP access
- Domain name (optional, can use hosting provider's domain)

### Deployment Steps

1. **Build Locally**
   ```bash
   pnpm build
   ```

2. **Connect via FTP/SFTP**
   - Use FileZilla or similar FTP client
   - Connect with credentials from hosting provider
   - Navigate to `public_html/` or `www/` directory

3. **Upload Files**
   - Upload all files from `dist/` directory
   - Ensure `index.html` is in root directory
   - Upload all files in `assets/` subdirectory

4. **Configure Server**
   - Set up `.htaccess` for client-side routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. **Verify Deployment**
   - Visit your domain
   - Test all sections and links

### cPanel Specific Steps

1. **Access cPanel**
   - Log in to cPanel dashboard
   - Go to File Manager

2. **Upload Files**
   - Navigate to `public_html/`
   - Upload `dist/` contents
   - Ensure correct permissions (644 for files, 755 for directories)

3. **Configure .htaccess**
   - Create `.htaccess` file in `public_html/`
   - Add rewrite rules (see above)

### Traditional Hosting Advantages

- **Low Cost** — Often $2-5/month
- **Full Control** — SSH access, custom configuration
- **Reliability** — Established providers

### Traditional Hosting Limitations

- **Manual Deployment** — No automatic builds
- **No CDN** — Slower global performance
- **Limited Support** — May require technical knowledge

---

## Docker Deployment

Deploy using Docker containers for consistency across environments.

### Dockerfile

Create `Dockerfile` in root:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Build and Run

```bash
# Build Docker image
docker build -t kareem-resume .

# Run container
docker run -p 3000:3000 kareem-resume

# Visit http://localhost:3000
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Run with:
```bash
docker-compose up
```

### Deploy to Docker Hub

```bash
# Tag image
docker tag kareem-resume:latest username/kareem-resume:latest

# Push to Docker Hub
docker push username/kareem-resume:latest
```

---

## Post-Deployment

### Verification Checklist

After deployment, verify:

- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Navigation links work
- [ ] Contact links functional
- [ ] Project links point to correct URLs
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Console has no errors (F12)
- [ ] Performance acceptable

### Performance Testing

```bash
# Test with Google PageSpeed Insights
# Visit: https://pagespeed.web.dev/
# Enter your deployed URL

# Test with GTmetrix
# Visit: https://gtmetrix.com/
# Enter your deployed URL
```

### SEO Verification

- [ ] Meta tags present (title, description)
- [ ] Open Graph tags for social sharing
- [ ] robots.txt accessible
- [ ] Sitemap.xml present (if applicable)
- [ ] Mobile-friendly (Google Mobile-Friendly Test)

### Monitoring

Set up monitoring for:

1. **Uptime Monitoring**
   - UptimeRobot (free)
   - Pingdom
   - Healthchecks.io

2. **Error Tracking**
   - Sentry (free tier)
   - Rollbar
   - LogRocket

3. **Analytics**
   - Google Analytics
   - Netlify/Vercel Analytics
   - Plausible

### Update Deployment

To update after making changes:

**For Manus:**
1. Create new checkpoint
2. Click Publish

**For GitHub Pages:**
```bash
git add .
git commit -m "Update: [description]"
git push origin main
```

**For Netlify/Vercel:**
- Automatic on push to main branch

**For Traditional Hosting:**
1. Build locally: `pnpm build`
2. Upload `dist/` contents via FTP

---

## Troubleshooting

### Site Shows Blank Page

**Problem:** Deployed site is blank or shows 404

**Solution:**
1. Verify `index.html` exists in root
2. Check browser console for JavaScript errors
3. Verify all assets loaded (Network tab)
4. Check server logs for errors

### Links Don't Work

**Problem:** Navigation or project links broken after deployment

**Solution:**
1. Verify `.htaccess` configured correctly (traditional hosting)
2. Check build output includes all files
3. Verify relative vs absolute paths
4. Test in incognito mode (clear cache)

### Slow Performance

**Problem:** Site loads slowly after deployment

**Solution:**
1. Enable gzip compression on server
2. Use CDN for static assets
3. Optimize images
4. Check server resources

### Custom Domain Not Working

**Problem:** Custom domain shows error or doesn't resolve

**Solution:**
1. Verify DNS records configured correctly
2. Wait for DNS propagation (can take 24 hours)
3. Check domain registrar settings
4. Verify CNAME/A records point to correct server

### HTTPS Not Working

**Problem:** Site shows security warning or no HTTPS

**Solution:**
1. Enable HTTPS in hosting provider settings
2. Wait for SSL certificate to issue
3. Update site URL to use HTTPS
4. Force HTTPS redirect in `.htaccess`

---

## Summary

| Platform | Cost | Setup Time | Maintenance |
|----------|------|-----------|-------------|
| Manus | Included | 5 min | Minimal |
| GitHub Pages | Free | 10 min | Minimal |
| Netlify | Free/Paid | 10 min | Minimal |
| Vercel | Free/Paid | 10 min | Minimal |
| Traditional | $2-5/mo | 30 min | Moderate |
| Docker | Varies | 20 min | Moderate |

**Recommended:** Start with Manus or GitHub Pages for simplicity, then migrate to Netlify/Vercel if you need advanced features.

---

**For more information, see [README.md](./README.md) and [BUILD.md](./BUILD.md)**

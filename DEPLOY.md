# Deployment Guide

The site deploys to GitHub Pages via the `Deploy static content to Pages`
workflow (`.github/workflows/static.yml`). Push to `main` → `pnpm install` →
`pnpm build` → `dist/public` published to https://kareem-mokhtar.com.

## Pre-deployment checklist

- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm check` (type check) passes
- [ ] No console errors in development: `pnpm dev`
- [ ] All links and images work correctly
- [ ] Contact links are valid
- [ ] Mobile responsiveness verified

## Environment variables

The contact form needs its Web3Forms access key at build time:

| Variable | Source |
|---|---|
| `VITE_WEB3FORMS_KEY` | GitHub repo secret (used by `static.yml`); `.env` locally (see `.env.example`) |

## Custom domain

`client/public/CNAME` contains `kareem-mokhtar.com` and is copied into the
published output on every build. DNS points the domain at GitHub Pages;
HTTPS is enforced in the repo's Pages settings.

## Resume PDFs

`client/public/resume_dark.pdf` and `resume_light.pdf` are pushed by the
`latex-resume` repo's CI (`Build LaTeX Resume and Push to Website Repo`
workflow) — never copy them by hand.

## Post-deployment

- Check the Actions tab for a green run
- Visit https://kareem-mokhtar.com and verify the latest content
- Test the contact form end to end

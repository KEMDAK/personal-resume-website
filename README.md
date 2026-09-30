# Kareem Mokhtar | Interactive Resume

A modern, interactive resume website built with React 19, Tailwind CSS 4, and shadcn/ui. Features a cyberpunk-inspired terminal aesthetic with smooth animations, responsive design, and comprehensive project portfolio.

## Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Terminal Aesthetic** — Cyberpunk-inspired dark theme with green terminal styling
- **Smooth Animations** — Scroll-triggered fade-in animations for all sections
- **Project Portfolio** — 13 projects with full descriptions, technologies, and GitHub links
- **Professional Timeline** — Experience, education, volunteer, and teaching sections with animated timelines
- **Skills & Languages** — Comprehensive skills matrix and language proficiency levels
- **Certifications** — Professional certifications with issuer links
- **Contact Section** — Direct email and social media links

## Tech Stack

- **Frontend Framework** — React 19 with TypeScript
- **Styling** — Tailwind CSS 4 with custom design tokens
- **UI Components** — shadcn/ui component library
- **Routing** — Wouter (client-side routing)
- **Build Tool** — Vite
- **Package Manager** — pnpm
- **Icons** — lucide-react

## Project Structure

```
kareem-resume/
├── client/                          # Frontend application
│   ├── public/                      # Static assets
│   │   └── images/                  # Image assets
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── Navigation.tsx       # Header navigation
│   │   │   ├── HeroSection.tsx      # Hero/landing section
│   │   │   ├── AboutSection.tsx     # About me section
│   │   │   ├── TimelineSection.tsx  # Experience timeline
│   │   │   ├── ProjectsSection.tsx  # Projects grid
│   │   │   ├── SkillsSection.tsx    # Skills matrix
│   │   │   ├── LanguagesSection.tsx # Languages proficiency
│   │   │   ├── CertificationsSection.tsx # Certifications
│   │   │   ├── ContactSection.tsx   # Get in touch section
│   │   │   └── ui/                  # shadcn/ui components
│   │   ├── pages/
│   │   │   └── Home.tsx             # Main page component
│   │   ├── data/
│   │   │   ├── resume.ts            # Resume data - GENERATED from latex-resume/resume.yaml
│   │   │   └── projects.ts          # Projects data - GENERATED from latex-resume/resume.yaml
│   │   ├── utils/
│   │   │   └── scrollUtils.ts       # Scroll visibility utilities
│   │   ├── App.tsx                  # Root app component
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles and design tokens
│   ├── index.html                   # HTML template
├── vite.config.ts                   # Vite configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ (includes npm)
- pnpm 8+ (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kareem-resume
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

## Development

### Start Development Server

```bash
pnpm dev
# or
npm run dev
```

The development server will start at `http://localhost:3000` with hot module replacement (HMR) enabled.

### Build for Production

```bash
pnpm build
# or
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Bundles React and dependencies
- Optimizes CSS with Tailwind
- Generates static HTML, CSS, and JS files in the `dist/` directory
- Minifies all assets for production

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

This starts a local server to preview the production build before deployment.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via
`.github/workflows/static.yml`: `pnpm install` → `pnpm build` → `dist/public/`
published to https://kareem-mokhtar.com. The custom domain is set by
`client/public/CNAME`.

## Environment Variables

The contact form needs its Web3Forms access key at build time:

| Variable | Local | CI |
|---|---|---|
| `VITE_WEB3FORMS_KEY` | `.env` (see `.env.example`) | `VITE_WEB3FORMS_KEY` repo secret (wired in `static.yml`) |

## Build Output

After running `pnpm build`, `dist/public/` contains the published site:

```
dist/public/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Bundled JavaScript
│   ├── index-[hash].css    # Bundled CSS
│   └── [other-assets]      # Images and other static files
├── CNAME                   # Custom domain (kareem-mokhtar.com)
├── sitemap.xml             # SEO sitemap
├── robots.txt              # SEO robots file
├── favicon*.png / *.ico    # Favicons
└── resume_dark.pdf / resume_light.pdf  # Pushed by the latex-resume CI
```

All files are minified and optimized for production. The `[hash]` in filenames ensures cache busting for updated assets. `emptyOutDir` wipes `dist/public` before each build.

## Performance Optimization

The build process automatically:

- **Code Splitting** — Separates vendor code from application code
- **Tree Shaking** — Removes unused code
- **CSS Purging** — Removes unused Tailwind classes
- **Asset Optimization** — Compresses images and fonts
- **Minification** — Reduces file sizes by 60-70%

Typical build output sizes:
- JavaScript: ~150-200 KB (gzipped)
- CSS: ~30-50 KB (gzipped)
- Total: ~200-250 KB (gzipped)

## Customization

### Updating Resume Data

> Resume content is **generated** — do not edit `client/src/data/resume.ts`,
> `client/src/data/projects.ts`, or the meta descriptions in `client/index.html`
> by hand. Edit
> [`resume.yaml`](https://github.com/KEMDAK/latex-resume/blob/master/resume.yaml)
> in the [latex-resume](https://github.com/KEMDAK/latex-resume) repo instead:
> - Professional experience, education, skills and languages
> - Volunteer and teaching experience, certifications, publications
> - Project portfolio (13 projects)
> - Personal info and SEO/social meta descriptions
>
> Pushing to `latex-resume` regenerates `resume.ts`, `projects.ts` + `index.html`
> and copies them here automatically via CI (the PDF keeps a condensed one-page
> rendering; the website shows the full detail).

### Styling

Global styles and design tokens are defined in `client/src/index.css`:
- Color palette (CSS variables)
- Typography system
- Spacing scale
- Animation keyframes

Modify these to customize the entire site's appearance.

### Components

All components are in `client/src/components/`:
- Modify component JSX to change structure
- Update Tailwind classes to change styling
- Add new components as needed

## Troubleshooting

### Build Fails

1. **Clear cache and reinstall**
   ```bash
   rm -rf node_modules dist
   pnpm install
   pnpm build
   ```

2. **Check Node version**
   ```bash
   node --version  # Should be 18+
   ```

3. **Check for TypeScript errors**
   ```bash
   pnpm tsc --noEmit
   ```

### Development Server Not Starting

1. **Check port availability**
   ```bash
   lsof -i :3000  # Check if port 3000 is in use
   ```

2. **Restart development server**
   ```bash
   pnpm dev
   ```

### Styling Issues

1. **Rebuild Tailwind CSS**
   ```bash
   pnpm build
   ```

2. **Check CSS variables in `index.css`**
   ```bash
   grep "@layer base" client/src/index.css
   ```

## Scripts Reference

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Build for production (static only) |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## License

This project is personal and not licensed for external use.

## Contact

For inquiries, visit the contact section on the website or reach out via:
- **Email** — contact@kareem-mokhtar.com
- **GitHub** — https://github.com/KEMDAK
- **LinkedIn** — https://linkedin.com/in/kareem-mokhtar

---

**Last Updated** — September 2026

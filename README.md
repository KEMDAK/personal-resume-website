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
│   │   │   ├── resume.ts            # Resume data (experience, education, skills)
│   │   │   └── projects.ts          # Projects data with links
│   │   ├── utils/
│   │   │   └── scrollUtils.ts       # Scroll visibility utilities
│   │   ├── App.tsx                  # Root app component
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles and design tokens
│   ├── index.html                   # HTML template
│   └── vite.config.ts               # Vite configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
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

### Manus Hosting (Recommended)

The project is configured for deployment on Manus with built-in hosting support:

1. **Create a checkpoint** — Save your changes via the Management UI
2. **Click Publish** — Use the Publish button in the Management UI header
3. **Configure domain** — Set up custom domain or use the auto-generated `*.manus.space` domain
4. **Deploy** — Your site will be live immediately with automatic SSL/TLS

### Static Hosting (Netlify, Vercel, GitHub Pages, etc.)

Since this is a static site, it can be deployed to any static hosting provider:

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Deploy the `dist/` directory** to your hosting provider:

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### GitHub Pages
```bash
# Build
pnpm build

# Deploy dist/ folder to gh-pages branch
# Then enable GitHub Pages in repository settings
```

#### Traditional Web Hosting (cPanel, Bluehost, etc.)
1. Build the project: `pnpm build`
2. Upload the contents of the `dist/` folder to your web server's public directory (usually `public_html/`)
3. Ensure your server is configured to serve `index.html` for all routes (for client-side routing)

### Environment Variables

The project uses environment variables injected by Manus:

- `VITE_APP_ID` — Application identifier
- `VITE_APP_TITLE` — Application title
- `VITE_ANALYTICS_ENDPOINT` — Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` — Analytics website ID

These are automatically available in the build and do not require manual configuration.

## Build Output

After running `pnpm build`, the `dist/` directory contains:

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Bundled JavaScript
│   ├── index-[hash].css    # Bundled CSS
│   └── [other-assets]      # Images and other static files
└── robots.txt              # SEO robots file
```

All files are minified and optimized for production. The `[hash]` in filenames ensures cache busting for updated assets.

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

Edit `client/src/data/resume.ts` to update:
- Professional experience
- Education
- Skills and languages
- Volunteer and teaching experience

Edit `client/src/data/projects.ts` to update:
- Project descriptions
- Technologies used
- Project links (GitHub, demos, etc.)

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
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm type-check` | Run TypeScript type checking |

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

**Last Updated** — January 2026

# Development Guide

This document provides guidelines for local development, customization, and extending the Kareem Mokhtar Interactive Resume.

## Table of Contents

1. [Development Setup](#development-setup)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Customization Guide](#customization-guide)
5. [Component Development](#component-development)
6. [Styling Guide](#styling-guide)
7. [Adding Content](#adding-content)
8. [Performance Tips](#performance-tips)

## Development Setup

### Initial Setup

```bash
# Clone repository
git clone https://github.com/KEMDAK/kareem-resume.git
cd kareem-resume

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development Tools

Recommended tools for development:

- **Editor** — VS Code with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin
  - Prettier
  - ESLint

- **Browser** — Chrome/Firefox with DevTools
  - React Developer Tools extension
  - Redux DevTools (if using Redux)

- **Terminal** — iTerm2 (Mac) or Windows Terminal

### VS Code Setup

Install recommended extensions:

```bash
# From repository root
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension bradlc.vscode-tailwindcss
code --install-extension Vue.volar
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

## Project Structure

### Directory Overview

```
client/
├── public/                 # Static assets (copied as-is)
│   ├── images/            # Image files
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── LanguagesSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx
│   ├── pages/            # Page-level components
│   │   └── Home.tsx
│   ├── data/             # Static data
│   │   ├── resume.ts     # Experience, education, skills
│   │   └── projects.ts   # Projects with links
│   ├── utils/            # Utility functions
│   │   └── scrollUtils.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx           # Root app component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
└── vite.config.ts        # Vite configuration
```

### Key Files

| File | Purpose |
|------|---------|
| `client/src/data/resume.ts` | Experience, education, skills data |
| `client/src/data/projects.ts` | Projects with descriptions and links |
| `client/src/index.css` | Global styles and design tokens |
| `client/src/App.tsx` | Root component and routing |
| `client/index.html` | HTML template |

## Development Workflow

### Start Development

```bash
# Start dev server with HMR
pnpm dev

# Server runs at http://localhost:3000
```

### Make Changes

1. **Edit files** in `client/src/`
2. **Save file** (Ctrl+S)
3. **Browser updates automatically** (HMR)
4. **Check for errors** in browser console

### Test Changes

```bash
# Type check
pnpm tsc --noEmit

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Commit Changes

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: Add new section"

# Push to repository
git push origin main
```

## Customization Guide

### Update Resume Data

Edit `client/src/data/resume.ts`:

```typescript
// Professional experience
export const professionalExperience: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Meta",
    companyUrl: "https://meta.com",
    startDate: "Jun 2024",
    endDate: "Present",
    location: "London, UK",
    description: "Leading technical initiatives...",
    highlights: ["Achievement 1", "Achievement 2"],
  },
  // Add more items...
];

// Education
export const education: EducationItem[] = [
  {
    degree: "Master of Science",
    school: "Technical University Munich",
    schoolUrl: "https://www.tum.de",
    field: "Computer Science",
    startDate: "Sep 2018",
    endDate: "Feb 2022",
  },
  // Add more items...
];

// Skills
export const skills: SkillCategory[] = [
  {
    category: "Backend",
    items: ["Go", "Python", "Java", "C++"],
  },
  // Add more categories...
];
```

### Update Projects

Edit `client/src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    name: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    projectUrl: "https://github.com/user/project",
  },
  // Add more projects...
];
```

### Update Contact Information

Edit `client/src/components/ContactSection.tsx`:

```typescript
<ContactButton
  label="Email Me"
  href="mailto:your-email@example.com"
  icon={<Mail className="w-4 md:w-5 h-4 md:h-5" />}
/>
```

### Update Colors and Styling

Edit `client/src/index.css`:

```css
@layer base {
  :root {
    /* Change primary color */
    --primary: 120 100% 50%;      /* Green */
    --primary-foreground: 0 0% 0%; /* Black */
    
    /* Change accent color */
    --accent: 280 100% 50%;        /* Purple */
    --accent-foreground: 0 0% 100%; /* White */
  }
}
```

### Update Typography

Edit `client/index.html` to add custom fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
```

Then use in `index.css`:

```css
@layer base {
  body {
    font-family: 'Roboto Mono', monospace;
  }
}
```

## Component Development

### Creating a New Component

1. **Create component file** in `client/src/components/`:

```typescript
// client/src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  children
}) => {
  return (
    <div className="p-4 bg-background text-foreground">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
};
```

2. **Export from components index** (if using barrel export):

```typescript
// client/src/components/index.ts
export { MyComponent } from './MyComponent';
```

3. **Use in pages or other components**:

```typescript
import { MyComponent } from '@/components/MyComponent';

export default function Home() {
  return (
    <MyComponent title="Hello">
      <p>Content here</p>
    </MyComponent>
  );
}
```

### Component Best Practices

- **Use TypeScript** — Define prop interfaces
- **Use Tailwind** — For styling (avoid inline styles)
- **Use shadcn/ui** — For common UI components
- **Keep components small** — Single responsibility
- **Document props** — Add JSDoc comments
- **Handle loading/error states** — Graceful degradation

### Using shadcn/ui Components

```typescript
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const MyComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
};
```

## Styling Guide

### Tailwind CSS Classes

Use Tailwind utility classes for styling:

```typescript
// Layout
<div className="flex gap-4 items-center justify-between">
  {/* Content */}
</div>

// Typography
<h1 className="text-2xl font-bold text-green-300">Title</h1>
<p className="text-sm text-gray-400">Description</p>

// Spacing
<div className="p-4 m-2">Content</div>

// Colors
<div className="bg-background text-foreground border border-border">
  Content
</div>

// Responsive
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### Design Tokens

Use CSS variables defined in `index.css`:

```typescript
// Colors
className="text-green-400"      // Primary color
className="bg-green-400/10"     // With opacity
className="border-green-400/30" // Border with opacity

// Spacing
className="p-4"  // Padding
className="m-2"  // Margin
className="gap-4" // Gap between flex items

// Typography
className="font-mono"    // Monospace font
className="font-bold"    // Bold weight
className="text-lg"      // Large text
```

### Custom CSS

For complex styling, add to `index.css`:

```css
@layer components {
  .custom-card {
    @apply border border-green-400/30 rounded-lg p-4 bg-black/50;
  }
  
  .glow {
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  }
}
```

Then use in components:

```typescript
<div className="custom-card glow">Content</div>
```

## Adding Content

### Add New Section

1. **Create component** in `client/src/components/`:

```typescript
export const NewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-32 border-b border-green-400/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-green-300">
          &gt; NEW SECTION
        </h2>
        {/* Content */}
      </div>
    </section>
  );
};
```

2. **Add to Home page** in `client/src/pages/Home.tsx`:

```typescript
import { NewSection } from '@/components/NewSection';

export default function Home() {
  return (
    <div>
      {/* Other sections */}
      <NewSection />
    </div>
  );
}
```

3. **Add to navigation** if needed:

```typescript
// In Navigation.tsx
const sections = ['about', 'experience', 'education', 'projects', 'new-section'];
```

### Add New Project

Edit `client/src/data/projects.ts`:

```typescript
{
  name: "New Project",
  description: "Project description with full details...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  projectUrl: "https://github.com/user/project",
}
```

### Add New Experience

Edit `client/src/data/resume.ts`:

```typescript
{
  title: "Job Title",
  company: "Company Name",
  companyUrl: "https://company.com",
  startDate: "Jan 2024",
  endDate: "Present",
  location: "City, Country",
  description: "Job description...",
  highlights: ["Achievement 1", "Achievement 2"],
}
```

## Performance Tips

### Optimize Images

```typescript
// Use optimized images
<img 
  src="/images/optimized.webp" 
  alt="Description"
  loading="lazy"
/>

// Or use picture element for responsive images
<picture>
  <source srcSet="/images/large.webp" media="(min-width: 1024px)" />
  <source srcSet="/images/small.webp" media="(max-width: 1023px)" />
  <img src="/images/fallback.jpg" alt="Description" />
</picture>
```

### Code Splitting

Components are automatically code-split by Vite. For dynamic imports:

```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
};
```

### Memoization

Prevent unnecessary re-renders:

```typescript
import { memo, useMemo } from 'react';

// Memoize component
export const MyComponent = memo(({ data }) => {
  return <div>{data}</div>;
});

// Memoize expensive computations
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);
```

### Bundle Analysis

```bash
# Analyze bundle size
pnpm build --report

# Check for unused CSS
pnpm build --analyze-css
```

## Debugging

### Browser DevTools

1. **Open DevTools** — F12 or Cmd+Option+I
2. **Console tab** — Check for JavaScript errors
3. **Network tab** — Check for failed requests
4. **React DevTools** — Inspect component tree
5. **Performance tab** — Check load times

### TypeScript Checking

```bash
# Check for type errors
pnpm tsc --noEmit

# Watch for changes
pnpm tsc --noEmit --watch
```

### Development Tips

- Use `console.log()` for debugging
- Use React DevTools to inspect component props
- Use Network tab to check API calls
- Use Performance tab to find slow operations
- Use `debugger` statement to pause execution

## Version Control

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: Add new feature"

# Push to repository
git push origin feature/new-feature

# Create pull request on GitHub
# After review, merge to main
```

### Commit Message Format

Follow conventional commits:

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
perf: Improve performance
test: Add tests
chore: Update dependencies
```

---

**For more information, see [README.md](./README.md), [BUILD.md](./BUILD.md), and [DEPLOY.md](./DEPLOY.md)**

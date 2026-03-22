# Zenovra Website - System Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Routes](#routes)
5. [Components](#components)
6. [Pages](#pages)
7. [Styling & Theming](#styling--theming)
8. [API Endpoints](#api-endpoints)
9. [Environment Variables](#environment-variables)
10. [Build & Development](#build--development)
11. [Deployment Configuration](#deployment-configuration)

---

## Project Overview

Zenovra Website is a marketing/product website for **Zenovra Tech**, the enterprise software division of Zenovra Org. The site showcases three SaaS products: **Zenovra Hiring** (ATS), **Zenovra CRM**, and **Zenovra Analytics** (BI). It is a static single-page application with client-side routing -- there is no backend or API layer.

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | React | ^18.3.0 |
| **Language** | TypeScript | ^5.5.0 |
| **Build Tool** | Vite | ^5.3.0 |
| **Routing** | React Router DOM | ^6.24.0 |
| **Styling** | Tailwind CSS | ^3.4.0 |
| **CSS Processing** | PostCSS + Autoprefixer | ^8.4.0 / ^10.4.0 |
| **Animations** | Framer Motion | ^11.2.0 |
| **UI Primitives** | Radix UI (Accordion, Dialog, Dropdown Menu, Separator, Slot, Tabs, Tooltip) | Various ^1.x / ^2.x |
| **Icons** | Lucide React | ^0.400.0 |
| **Class Utilities** | clsx + tailwind-merge + class-variance-authority | ^2.1.0 / ^2.4.0 / ^0.7.0 |
| **Tailwind Plugin** | tailwindcss-animate | ^1.0.7 |
| **Deployment** | Vercel | -- |

---

## Project Structure

```
zenovra-website/
├── index.html                          # HTML entry point (dark mode enabled by default)
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript config (path alias: @/* -> ./src/*)
├── vite.config.ts                      # Vite config (React plugin, @ alias, port 3001)
├── tailwind.config.js                  # Tailwind config (dark mode, custom theme, animations)
├── postcss.config.js                   # PostCSS config (tailwindcss + autoprefixer)
├── vercel.json                         # Vercel deployment config (SPA rewrite)
├── .gitignore                          # Ignores node_modules, dist, .env, .env.local, logs
├── .vercel/
│   └── project.json                    # Vercel project/org IDs
├── dist/                               # Production build output
│   ├── index.html
│   └── assets/
│       ├── index-CskNY_nd.js
│       └── index-qKuSgdOn.css
└── src/
    ├── main.tsx                        # React entry point (BrowserRouter wrapping App)
    ├── app.tsx                         # Root component with Routes and layout shell
    ├── vite-env.d.ts                   # Vite client type reference
    ├── lib/
    │   └── utils.ts                    # cn() utility (clsx + twMerge)
    ├── styles/
    │   └── globals.css                 # Global styles, CSS variables, Tailwind layers, custom utilities
    ├── components/
    │   ├── ui/
    │   │   └── button.tsx              # Reusable Button component (CVA variants)
    │   ├── layout/
    │   │   ├── navbar.tsx              # Site-wide navigation bar
    │   │   └── footer.tsx              # Site-wide footer
    │   └── sections/
    │       └── animated-counter.tsx    # Scroll-triggered animated number counter
    └── pages/
        ├── home.tsx                    # Landing page
        ├── products.tsx                # Products overview page
        ├── product-detail.tsx          # Individual product detail page (dynamic route)
        ├── pricing.tsx                 # Pricing tiers, comparison, FAQs
        ├── about.tsx                   # Company info, team, values, timeline
        ├── contact.tsx                 # Contact form and office info
        ├── blog.tsx                    # Blog post listing (static data)
        └── changelog.tsx              # Product changelog / release history
```

---

## Routes

All routes are defined in `src/app.tsx` using React Router v6 `<Routes>` and `<Route>`.

| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Main landing page with hero, product cards, stats, testimonials, CTA |
| `/products` | `ProductsPage` | Overview of all three products with features and integrations |
| `/products/:slug` | `ProductDetailPage` | Dynamic product detail page. Valid slugs: `hiring`, `crm`, `analytics`. Invalid slugs redirect to `/products` |
| `/pricing` | `PricingPage` | Pricing tiers (Starter/Growth/Enterprise), monthly/annual toggle, feature comparison, bundle discounts, startup program, FAQs |
| `/about` | `AboutPage` | Company mission, Zenovra Org relationship, leadership team, values, timeline |
| `/contact` | `ContactPage` | Contact form (client-side only, no submission handler), sales/support info, office locations |
| `/blog` | `BlogPage` | Static blog post listing (6 hardcoded posts, no individual post pages) |
| `/changelog` | `ChangelogPage` | Product release history (v1.0 through v2.1) |

**Layout:** All routes share a common layout defined in `App`: `<Navbar />` at the top, the route content in `<main>`, and `<Footer />` at the bottom. The navbar is fixed-position; the footer is standard flow.

---

## Components

### Layout Components

#### `Navbar` (`src/components/layout/navbar.tsx`)
- Fixed-position header with scroll-triggered background blur
- Desktop: Products dropdown (hover-activated with AnimatePresence), nav links (Pricing, About, Blog), CTA buttons (Contact Sales, Get Started)
- Mobile: Hamburger menu with animated expand/collapse
- Products dropdown lists: Zenovra Hiring (`/products/hiring`), Zenovra CRM (`/products/crm`), Zenovra Analytics (`/products/analytics`)
- Auto-closes mobile menu and products dropdown on route change
- Uses Lucide icons: `Zap`, `ChevronDown`, `Menu`, `X`, `Users`, `BarChart3`, `Target`

#### `Footer` (`src/components/layout/footer.tsx`)
- Four link columns: Products, Company, Resources, Legal
- Resources and Legal links are placeholder (`#`)
- Newsletter email input (client-side only, no handler)
- Social links (Twitter, LinkedIn, GitHub) -- all placeholder (`#`)
- Branding section with Zenovra Org mention

### UI Components

#### `Button` (`src/components/ui/button.tsx`)
- Built with `class-variance-authority` (CVA) for variant-based styling
- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default` (h-9), `sm` (h-8), `lg` (h-10), `xl` (h-11), `icon` (h-9 w-9), `icon-sm` (h-8 w-8)
- Supports `asChild` prop via Radix `Slot` for polymorphic rendering (commonly used with `<Link>`)
- Uses `forwardRef` for ref forwarding

### Section Components

#### `AnimatedCounter` (`src/components/sections/animated-counter.tsx`)
- Scroll-triggered counting animation using `requestAnimationFrame`
- Props: `end` (target number), `duration` (default 2s), `label`, `prefix`, `suffix`
- Uses Framer Motion `useInView` with `once: true` for single trigger
- Easing: cubic ease-out
- Used on the Home page stats section

#### `Section` (inline helper, defined in multiple pages)
- A scroll-triggered fade-up animation wrapper used across `home.tsx`, `products.tsx`, `product-detail.tsx`, `pricing.tsx`, `about.tsx`, `contact.tsx`, and `changelog.tsx`
- Not extracted into a shared component; duplicated in each page file
- Uses Framer Motion `useInView` with `once: true` and `-80px` margin

#### `AccordionItem` (inline helper, defined in `product-detail.tsx` and `pricing.tsx`)
- Custom accordion/FAQ component (not using Radix Accordion)
- Toggle open/close with animated height transition via Framer Motion
- Duplicated in two page files

---

## Pages

### `HomePage` (`src/pages/home.tsx`)
- **Hero**: Animated entry with badge ("Part of Zenovra Org"), headline, description, two CTA buttons, three floating product preview cards
- **Trusted By**: Logo strip with six company names (text-only placeholders)
- **Products Overview**: Three product cards with features list and "Learn more" links
- **Stats**: Four `AnimatedCounter` components (10,000+ Active Users, 500+ Companies, 99.9% Uptime, 50M+ Data Points)
- **Testimonials**: Three testimonial cards with star ratings and avatar initials
- **CTA**: Bottom call-to-action banner

### `ProductsPage` (`src/pages/products.tsx`)
- **Hero**: Page title and description
- **Product Sections**: Three alternating-layout sections (one per product) with screenshot placeholder, icon, features grid (6 features each), and CTA buttons
- **Integrations**: Grid of 12 integration badges (Slack, GitHub, Google Workspace, etc.)
- **CTA**: Bottom call-to-action

### `ProductDetailPage` (`src/pages/product-detail.tsx`)
- **Dynamic routing** via `useParams` to read `:slug`
- **Data**: All product data is hardcoded in `allProducts` record keyed by slug (`hiring`, `crm`, `analytics`)
- **Invalid slug handling**: Redirects to `/products` via `<Navigate replace />`
- **Sections**: Hero with product icon/gradient, Features grid (8 features each), Screenshot gallery (3 placeholders), How It Works (3 steps), Pricing preview card, FAQ accordion, CTA
- Each product has its own color gradient: indigo-purple (Hiring), emerald-teal (CRM), orange-rose (Analytics)

### `PricingPage` (`src/pages/pricing.tsx`)
- **Monthly/Annual toggle**: useState-controlled with 20% annual discount
- **Three tiers**: Starter ($49/$39), Growth ($149/$119, marked "Most Popular"), Enterprise ($399/$319)
- **Bundle discounts**: 15% off any 2-product combo, 25% off all 3 (marked "Best Value")
- **Startup program**: 50% off for 12 months for qualifying startups
- **Feature comparison table**: 13-row comparison across all three tiers
- **FAQ section**: 8 questions with custom AccordionItem

### `AboutPage` (`src/pages/about.tsx`)
- **Mission statement**: Paragraph about fixing enterprise software
- **Zenovra Org section**: Explains parent company relationship with org chart visual
- **Leadership team**: 4 team members (Alex Mercer CEO, Nina Patel CTO, Jordan Kim VP Product, Elif Osman VP Engineering) with initials avatars
- **Company values**: 4 values (Customer Obsession, Craft & Quality, Trust & Security, Move Fast)
- **Timeline**: 4 milestones (Dec 2025 founding through Mar 2026 Series A)
- **Careers CTA**

### `ContactPage` (`src/pages/contact.tsx`)
- **Contact form**: Pre-filled with demo data (name, email, company, product interest dropdown, message textarea)
- **Form behavior**: `onSubmit` calls `e.preventDefault()` -- no actual submission logic
- **Info cards**: Talk to Sales (email: sales@zenovra.tech), Need Help (email: support@zenovra.tech, phone), Offices (San Francisco, New York, London)

### `BlogPage` (`src/pages/blog.tsx`)
- **Static listing**: 6 hardcoded blog posts with category badges (Product/Engineering/Company), titles, excerpts, authors, dates, read times
- **No individual post pages**: Cards are not linked to detail views
- **No pagination or filtering**

### `ChangelogPage` (`src/pages/changelog.tsx`)
- **Timeline layout**: Vertical line with dot markers
- **4 releases**: v1.0 (Dec 2025) through v2.1 (Mar 2026)
- **Each release**: Version badge, status badge (Latest/Major/New Product/Launch), date, title, list of changes with icons

---

## Styling & Theming

### CSS Variables (defined in `src/styles/globals.css`)
The app uses HSL-based CSS custom properties for theming, following the shadcn/ui convention:
- Light and dark mode color tokens for: background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring
- `--radius: 0.625rem` for border radius
- Dark mode is the default (class `dark` on `<html>`)

### Custom Tailwind Utilities
- `.gradient-text`: Multi-color gradient text (indigo -> purple -> blue)
- `.gradient-bg`: Subtle gradient background overlay
- `.gradient-border`: Gradient border using border-image
- `.glass`: Glassmorphism effect with backdrop blur
- `.hero-glow`: Radial gradient glow effect at top of sections
- `.grid-pattern`: Repeating grid line background pattern

### Custom Animations (Tailwind config)
- `fade-up`: Translate Y + opacity entrance
- `fade-in`: Opacity-only entrance
- `float`: Continuous vertical bob (6s infinite)
- `glow`: Continuous opacity pulse (3s infinite)

### Font
- Inter (loaded from Google Fonts CDN) with fallback to system-ui, sans-serif

---

## API Endpoints

**None.** This is a purely static frontend application. There is no backend, no API calls, no data fetching. All data (products, pricing tiers, blog posts, team members, changelog entries, testimonials, etc.) is hardcoded directly in the page component files.

The contact form on `/contact` has `e.preventDefault()` on submit and does not send data anywhere.

---

## Environment Variables

**None referenced in source code.** The `.gitignore` includes `.env` and `.env.local`, suggesting environment variables may be used in future development, but no source file currently reads from `import.meta.env` or `process.env` (beyond the standard Vite client type reference in `vite-env.d.ts`).

---

## Build & Development

### Scripts (from `package.json`)

| Script | Command | Description |
|---|---|---|
| `dev` | `vite` | Start development server on port 3001 |
| `build` | `tsc -b && vite build` | Type-check then build for production |
| `preview` | `vite preview` | Preview production build locally |

### Path Alias
- `@/*` maps to `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`)

### TypeScript Config
- Target: ES2020
- Module: ESNext with bundler resolution
- Strict mode enabled
- `noUnusedLocals` and `noUnusedParameters` disabled
- JSX: react-jsx

---

## Deployment Configuration

### Vercel (`vercel.json`)
- Framework: `vite`
- SPA rewrite: All routes (`/(.*)`) rewrite to `/index.html` for client-side routing support

### Vercel Project (`.vercel/project.json`)
- Project ID: `prj_gI5wCOBfF6rPrTmHOXlqcip4UxYo`
- Org ID: `team_FS72qADdQdgEAynh8pjXO4Tu`
- Project Name: `zenovra-website`

### Build Output
- Output directory: `dist/`
- Assets are content-hashed (e.g., `index-CskNY_nd.js`, `index-qKuSgdOn.css`)

---

## Notes & Observations

1. **No backend**: The entire application is a static SPA. The contact form, newsletter signup, and social links are all non-functional placeholders.
2. **Duplicated helper components**: The `Section` wrapper component is duplicated across 7 files. The `AccordionItem` component is duplicated in 2 files. Both could be extracted into shared components.
3. **No tests**: There are no test files or test-related dependencies.
4. **No linting config**: No ESLint, Prettier, or other code quality tooling is configured.
5. **Radix UI partially used**: Several Radix UI packages are installed (Accordion, Dialog, Dropdown Menu, Separator, Tabs, Tooltip) but only `@radix-ui/react-slot` is actively used (by the Button component). The rest are unused dependencies.
6. **Blog posts are not routable**: Blog cards on `/blog` do not link to individual post pages.
7. **Product screenshots are placeholders**: All product screenshots show placeholder boxes with icons.
8. **Dark mode only**: The `<html>` element has class `dark` hardcoded. There is no theme toggle.
9. **No SEO metadata per page**: Only the root `index.html` has meta tags. Individual pages do not set `<title>` or meta descriptions dynamically.
10. **Favicon**: Inline SVG data URI of a lightning bolt icon (Lucide `Zap` style) in indigo color.

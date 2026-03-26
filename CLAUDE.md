# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build to dist/
npm run preview   # Preview production build locally
```

## Architecture

**Astro 4 static site** with Tailwind CSS. All pages are pre-rendered at build time — no server runtime.

### Routing & Pages

- `src/pages/index.astro` — Homepage, composed of sequential section components from `src/components/`
- `src/pages/artykuly/` — Article listing (`index.astro`) and detail pages (`[...slug].astro`)
- `src/pages/case-studies/[...slug].astro` — Case study detail pages (no listing page — only individual detail routes)

### Content Collections

Markdown files with YAML frontmatter, defined in `src/content/config.ts`:

- `src/content/articles/` — Blog articles (fields: `title`, `description`, `publishDate`, `tags`, `draft`)
- `src/content/case-studies/` — Case studies (fields: `title`, `problem`, `industry`, `duration`, `tags`, `publishDate`, `draft`)

Set `draft: true` in frontmatter to exclude content from listings.

**Note:** Both content directories are currently empty. Components render fallback/placeholder content when no markdown files are present.

### Styling

- Custom design tokens defined in `tailwind.config.mjs` — use these semantic names rather than raw hex values:
  - **Backgrounds:** `bg-background`, `bg-surface`, `bg-card`, `bg-elevated`
  - **Accent:** `accent-DEFAULT`, `accent-light`, `accent-dark`
  - **Text (ink):** `ink-DEFAULT` (class: `text-ink`), `ink-muted`, `ink-subtle`
  - **Nav:** `nav-DEFAULT`, `nav-border`
  - **Borders:** `border-DEFAULT`, `border-light`
- Global CSS classes defined in `src/layouts/Layout.astro`: `.grid-bg`, `.section-label`, `.card`, `.prose-content`

### Layout

`src/layouts/Layout.astro` is the base HTML template. It accepts `title`, `titleEn`, `description`, `descriptionEn`, and `canonical` props and handles SEO meta tags (Open Graph, Twitter card) with bilingual support.

### Internationalization (i18n)

The site is fully bilingual — **Polish** (default) and **English**:

- All text elements use `data-lang="pl"` / `data-lang="en"` attributes for conditional display
- Language toggle buttons in `Nav.astro`
- Language detection priority: URL parameter (`?lang=pl` / `?lang=en`) → localStorage → default (Polish)
- Language preference persisted in `localStorage` under key `lang`
- Layout dynamically updates `<html lang>`, `<title>`, and meta description based on active language

When adding new UI text, always provide both `data-lang="pl"` and `data-lang="en"` variants.

### Theme System

Dark mode with three options: **light**, **dark**, **auto** (follows system preference):

- Class-based: toggles `.dark` on `<html>` element
- Theme preference persisted in `localStorage` under key `theme`
- CSS custom properties in `tailwind.config.mjs` define light/dark color variants (RGB format for opacity support)
- Theme toggle in `Nav.astro`

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys on push to `main`:

- Builds with Node 20
- Deploys via SFTP (FTP-Deploy-Action) to LH.pl hosting
- Destination: `/public_html/tomaszrybicki.pl/`
- Credentials stored in GitHub secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`

## Key Notes

- Default language is **Polish**, with full **English** translation available via language switcher
- Contact form is configured with Formspree (`https://formspree.io/f/meerkqjo`); direct contact via `tmkryb@gmail.com` and LinkedIn
- Site URL: `https://tomaszrybicki.pl` (configured in `astro.config.mjs`)
- Fonts: Inter (sans) and JetBrains Mono (mono), loaded from Google Fonts

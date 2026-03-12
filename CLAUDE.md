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
- `src/pages/case-studies/[...slug].astro` — Case study detail pages

### Content Collections

Markdown files with YAML frontmatter, defined in `src/content/config.ts`:

- `src/content/articles/` — Blog articles (fields: `title`, `description`, `publishDate`, `tags`, `draft`)
- `src/content/case-studies/` — Case studies (fields: `title`, `problem`, `industry`, `duration`, `tags`, `publishDate`, `draft`)

Set `draft: true` in frontmatter to exclude content from listings.

### Styling

- Custom design tokens defined in `tailwind.config.mjs` — use these semantic names rather than raw hex values:
  - **Backgrounds:** `bg-background`, `bg-surface`, `bg-card`, `bg-elevated`
  - **Accent (orange):** `accent-DEFAULT` (`#e8511e`), `accent-light`, `accent-dark`
  - **Text (ink):** `ink-dark`, `ink-muted`, `ink-subtle`
  - **Nav:** `nav-DEFAULT`, `nav-border`
- Global CSS classes defined in `src/layouts/Layout.astro`: `.grid-bg`, `.section-label`, `.card`, `.prose-content`

### Layout

`src/layouts/Layout.astro` is the base HTML template. It accepts `title`, `description`, and `canonicalURL` props and handles SEO meta tags (Open Graph, Twitter card).

## Key Notes

- All UI copy and content is in **Polish**
- Contact form requires an external endpoint (Formspree recommended) — not yet configured
- Site URL in `astro.config.mjs` is a placeholder (`https://twojadomena.pl`) and needs to be updated
- Fonts: Inter (sans) and JetBrains Mono (mono), loaded from Google Fonts

# consulting-site

Strona konsultingowa — zbudowana na **Astro 4** z **Tailwind CSS**.

## Wymagania

- [Node.js 18+](https://nodejs.org/)

## Uruchomienie

```bash
npm install
npm run dev
```

Strona dostępna pod: http://localhost:4321

## Struktura projektu

```
src/
├── components/         # Sekcje strony (Hero, Services, About, ...)
├── content/
│   ├── articles/       # Artykuły blogowe (.md)
│   └── case-studies/   # Case studies (.md)
├── layouts/
│   └── Layout.astro    # Base layout (SEO, fonty, global styles)
└── pages/
    ├── index.astro     # Strona główna
    ├── artykuly/       # Strona listy + indywidualne artykuły
    └── case-studies/   # Indywidualne case studies
```

## Co wymaga zmiany przed publikacją

### 1. Dane personalne
Zamień "Jan Kowalski" na swoje imię i nazwisko we wszystkich plikach. Najszybciej:
```bash
# w terminalu (lub Find & Replace w VSCode)
grep -r "Jan Kowalski" src/
grep -r "jankowalski" src/
```

### 2. Email kontaktowy
`src/components/Contact.astro` i `src/components/Footer.astro` — zamień `jan@kowalski.pl`.

### 3. LinkedIn
Zamień `linkedin.com/in/jankowalski` na swój profil.

### 4. Formularz kontaktowy
W `src/components/Contact.astro` zmień `action="https://formspree.io/f/YOUR_FORM_ID"` na swój endpoint.
Rekomendowane: [Formspree](https://formspree.io) (darmowy plan wystarczy).
Alternatywy: Netlify Forms, EmailJS, własny endpoint.

### 5. Zdjęcie
W `src/components/About.astro` zastąp placeholder prawdziwym zdjęciem.

### 6. Dostępność (sekcja Kontakt)
Zaktualizuj datę dostępności: `src/components/Contact.astro`.

### 7. Domena w astro.config.mjs
Zmień `site: 'https://twojadomena.pl'`.

## Dodawanie treści

### Nowy artykuł

Utwórz plik `src/content/articles/nazwa-artykulu.md`:

```markdown
---
title: 'Tytuł artykułu'
description: 'Krótki opis wyświetlany na liście artykułów.'
publishDate: 2025-01-15
tags: ['Architektura', 'Tech Debt']
draft: false
---

Treść artykułu w Markdown...
```

### Nowy case study

Utwórz plik `src/content/case-studies/nazwa-case.md`:

```markdown
---
title: 'Tytuł case study'
problem: 'Krótki opis problemu wyświetlany na liście.'
tags: ['Frontend', 'Architecture']
industry: 'SaaS'
duration: '3 miesiące'
publishDate: 2025-01-15
draft: false
---

## Kontekst

Treść case study w Markdown...
```

Ustaw `draft: true` żeby nie publikować — będzie widoczny lokalnie, ale nie w buildzie produkcyjnym.

## Build produkcyjny

```bash
npm run build       # generuje pliki do katalogu dist/
npm run preview     # podgląd buildu produkcyjnego
```

Wygenerowany `dist/` można wrzucić na:
- [Netlify](https://netlify.com) — przeciągnij folder lub połącz repo
- [Vercel](https://vercel.com) — `vercel deploy`
- GitHub Pages, Cloudflare Pages, dowolny serwer statyczny

## Personalizacja designu

Kolory i fonty: `tailwind.config.mjs`

Kluczowe zmienne kolorów:
- `bg.DEFAULT` — główne tło (`#070c18`)
- `accent.DEFAULT` — kolor akcentu (`#4f8ef7` — niebieski)
- `ink.DEFAULT` — kolor tekstu
- `ink.muted` — tekst drugorzędny

Global style i wzorzec siatki: `src/layouts/Layout.astro` (`<style is:global>`)

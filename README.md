# MozgRozmowy.pl

A bilingual Astro publishing project in Polish and English focused on therapy, overload, support systems, neurodivergent experience, and reflective writing.

The site combines two editorial formats:
- **conversations** — dialog-based pieces, often written as structured exchanges with the brain
- **reflections** — essays, notes, and reflective texts

## What this project includes

- bilingual content architecture (`pl` / `en`)
- Astro content collections for **conversations** and **reflections**
- MDX-based publishing workflow
- reusable dialog UI via `DialogLine.astro`
- curated topic map instead of an auto-generated tag cloud
- normalized tags with localized tag pages
- static article pages, list pages, topic pages, and tag pages

## Features

### Content model
Entries are stored as MDX files in:
- `src/content/conversations/{pl,en}`
- `src/content/reflections/{pl,en}`

Each entry includes frontmatter such as:
- `slug`
- `title`
- `description`
- `topics`
- `published`
- `featured` (optional)
- `publishedAt`
- `updatedAt` (optional)
- `lang`
- `translationKey`

### Localization
- Polish and English routes are separated
- translation pairs are connected via `translationKey`
- alternate language links are generated for article pages and tag pages

### Taxonomy and navigation
- controlled tag vocabulary in `src/data/tags.ts`
- linked tags on article pages
- localized tag routes:
  - `/tags/[tag]`
  - `/en/tags/[tag]`
- curated topic map in `src/data/topics.ts`

### Article presentation
- shared article layout for conversations and reflections
- dialog styling for MDX content via `DialogLine.astro`
- smaller, editorial-style heading scale for better reading comfort

## Project structure

```text
/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images and logo assets
│   ├── components/              # Reusable Astro components
│   │   ├── ConversationList.astro
│   │   ├── DialogLine.astro
│   │   ├── TopicMap.astro
│   │   └── pages/
│   ├── content/                 # MDX content
│   │   ├── conversations/
│   │   │   ├── en/
│   │   │   └── pl/
│   │   └── reflections/
│   │       ├── en/
│   │       └── pl/
│   ├── data/                    # Static data and vocabularies
│   │   ├── site.ts
│   │   ├── tags.ts
│   │   └── topics.ts
│   ├── i18n/                    # UI labels
│   ├── layouts/                 # Shared page layouts
│   ├── lib/                     # Content helpers
│   ├── pages/                   # Route files
│   │   ├── conversations.astro
│   │   ├── reflections.astro
│   │   ├── topic-map.astro
│   │   ├── tags/
│   │   └── en/
│   ├── styles/                  # Global styles
│   ├── content.config.ts        # Astro content collections
│   └── ...
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build the static site to `./dist/`   |
| `npm run preview` | Preview the production build         |
| `npm run astro`   | Run Astro CLI commands               |

## Tech

- Astro
- MDX
- TypeScript
- CSS

## Notes

This repository is intentionally content-heavy: a large part of the work is in content architecture, bilingual consistency, editorial structure, and readable presentation rather than in complex application logic.

Key implementation areas include:
- Astro content collections
- static route generation
- localized navigation
- tag normalization and tag-page generation
- reusable MDX components
- editorial UI cleanup and typography adjustments

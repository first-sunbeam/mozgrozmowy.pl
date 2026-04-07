# Fumbling Field

A bilingual Astro site in Polish and English for publishing conversations about therapy, overload, support systems, and lived experience.

## Project structure

```text
/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images and logo assets
│   ├── components/             # Reusable Astro components
│   │   ├── ConversationList.astro
│   │   ├── DialogLine.astro
│   │   └── TopicMap.astro
│   ├── content/                # MDX conversations
│   │   └── conversations/
│   │       ├── en/
│   │       └── pl/
│   ├── data/                   # Static data used by pages
│   │   └── topics.ts
│   ├── layouts/                # Shared page layouts
│   │   └── Layout.astro
│   ├── pages/                  # Route files
│   │   ├── about.astro
│   │   ├── conversations.astro
│   │   ├── topic-map.astro
│   │   ├── index.astro
│   │   └── en/
│   ├── styles/                 # Global page styles
│   ├── content.config.ts       # Astro content collections
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

## Content

Conversation entries live in `src/content/conversations/{pl,en}` as MDX files.
Each entry includes frontmatter for:

- `slug`
- `title`
- `description`
- `topics`
- `published`
- `featured` (optional)
- `order` (optional)
- `lang`

The MDX content can use the shared `DialogLine.astro` component.

## Tech

- Astro
- MDX
- TypeScript

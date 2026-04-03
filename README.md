# Fumbling Field

A bilingual (Polish/English) platform for exploring neurodivergent experiences, therapy, support systems, and lived experience through conversations and topic-based discussions.

## 🎯 About

This site contains thoughtful conversations about:

- **Therapy and Relationship** — What therapy should look like when demand itself triggers a block
- **Systems and Benefits** — How support systems describe the need for support
- **Overload and Regulation** — Understanding nervous system boundaries and capacity
- **Research and Interpretation** — Translating research findings into lived experience

## 🚀 Project Structure

```text
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── ConversationList.astro
│   │   ├── DialogLine.astro
│   │   └── TopicMap.astro
│   ├── content/          # MDX conversations (bilingual)
│   │   └── conversations/
│   │       ├── en/
│   │       └── pl/
│   ├── data/             # Topic and language data
│   │   ├── topics.ts
│   │   ├── en/
│   │   └── pl/
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes (bilingual)
│   │   ├── conversations.astro
│   │   ├── topic-map.astro
│   │   ├── about.astro
│   │   └── en/           # English language routes
│   └── styles/           # Global and component styles
└── package.json
```

## 🧞 Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:3000` |
| `npm run build`   | Build for production to `./dist/`    |
| `npm run preview` | Preview production build locally     |
| `npm run astro`   | Run Astro CLI commands               |

## 📝 Adding Conversations

Conversations are MDX files organized by language in `src/content/conversations/`. Each conversation includes:

- Dialogue between perspectives (using `DialogLine` component)
- Topic classifications
- Publication status and featured flag
- Language specification

## 🌐 Languages

The site supports both Polish (pl) and English (en) with separate content and routing.

## 📚 Technologies

- **Astro** — Static site generation
- **MDX** — Markdown with JSX components
- **TypeScript** — Type-safe configuration

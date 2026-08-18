// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mozgrozmowy.pl",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/reflections/neurodivergent-therapy-journey/": {
      status: 301,
      destination: "/conversations/neurodivergent-therapy-journey/",
    },
    "/en/reflections/neurodivergent-therapy-journey/": {
      status: 301,
      destination: "/en/conversations/neurodivergent-therapy-journey/",
    },
    "/conversations/aba-usiedz-wyjasnie-takze-po-polsku/": {
      status: 301,
      destination: "/reflections/aba-usiedz-wyjasnie-takze-po-polsku/",
    },
    "/en/conversations/aba-sit-down-ill-explain-also-in-polish/": {
      status: 301,
      destination: "/en/reflections/aba-sit-down-ill-explain-also-in-polish/",
    },
  },
});

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preload from "astro-preload";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import markdownConfig from './markdown.config';
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://rohitk06.site",
  markdown: {
    ...markdownConfig
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compress(), react(), mdx({
    ...markdownConfig,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })]
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   speedInsights: {
  //     enabled: true
  //   },
  //   imageService: true
  // })
});
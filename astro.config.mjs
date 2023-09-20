import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preload from "astro-preload";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    },
    imageService: true
  })
});
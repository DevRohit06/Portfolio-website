import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preload from "astro-preload";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()]
});
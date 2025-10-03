// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://fudgecak.scumsuck.com",
    devToolbar: {
    enabled: false,
  },
    integrations: [react()],
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});

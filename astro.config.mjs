// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});

import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  site: "https://kmvs.org.in",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});

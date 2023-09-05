import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://kmvs.org.in",
  integrations: [sitemap()],
  image: {
    domains: ["strapi.kmvs.org.in"],
  },
  scopedStyleStrategy: "where",
});

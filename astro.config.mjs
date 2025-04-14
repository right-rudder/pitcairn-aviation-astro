import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://pitcairnaviation.com/",
  integrations: [
    mdx(),
    sitemap({
      // Custom sitemap configuration
      filter: (page) =>
        !page.includes("/404") &&
        !page.includes("/500") &&
        !page.includes("/thank-you") &&
        !page.includes("/contact-confirmation"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://pitcairnaviation.com/specialservices",
        "https://pitcairnaviation.com/holiday-hours",
      ],
      serialize(item) {
        // Custom page priorities
        if (item.url === "https://pitcairnaviation.com/") {
          return {
            ...item,
            changefreq: "daily",
            priority: 1.0,
          };
        }
        if (
          item.url.includes("/services") ||
          item.url.includes("/plan-your-visit") ||
          item.url.includes("/hangar-rental")
        ) {
          return {
            ...item,
            changefreq: "weekly",
            priority: 0.9,
          };
        }
        if (item.url.includes("/blog/")) {
          return {
            ...item,
            changefreq: "monthly",
            priority: 0.8,
          };
        }
        return item;
      },
    }),
    tailwind(),
    react(),
    partytown(),
  ],
  output: "static",
  adapter: netlify(),
});

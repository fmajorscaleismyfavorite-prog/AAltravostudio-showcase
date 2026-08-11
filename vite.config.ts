import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/",
  },

  nitro: false,

  tanstackStart: {
    spa: {
      prerender: {
        outputPath: "/index.html",
        crawlLinks: false,
        retryCount: 2,
      },

      server: {
        entry: "server",
      },
    },
  },
});
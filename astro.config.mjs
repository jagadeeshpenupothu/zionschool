import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://example-school.edu",
  output: "static",

  devToolbar: {
    enabled: false
  },

  adapter: cloudflare()
});
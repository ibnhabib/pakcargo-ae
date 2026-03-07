import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    sanity({
      projectId: '9volnp47',
      dataset: 'production',
      useCdn: false,
    }),
    react(),
    tailwind({
      // We explicitly nest the config to bypass auto-detection issues
      configFile: 'tailwind.config.mjs',
    }),
  ],

  adapter: netlify(),
});
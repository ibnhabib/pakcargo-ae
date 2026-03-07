import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

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
});
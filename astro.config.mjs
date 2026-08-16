import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

/**
 * ASTRO CONFIGURATION: PakCargo.ae
 * ---------------------------------------------------------
 * site: Required for Sitemap generation and SEO.
 * integrations: React, Tailwind, Sanity, and Sitemap.
 * adapter: Netlify for server-side rendering/deployment.
 */

export default defineConfig({
  // 1. SITE URL: Required for @astrojs/sitemap to work
  site: 'https://pakcargo.ae',

  integrations: [
    // 2. SANITY: Connects to your project (configured via .env)
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '9volnp47',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      // Uncached, always-fresh reads by default. Set PUBLIC_SANITY_USE_CDN=true in .env
      // for faster/cheaper cached reads once eventual consistency (~60s) is acceptable.
      useCdn: process.env.PUBLIC_SANITY_USE_CDN === 'true',
      // Only needed for a private dataset or to raise API rate limits; unset by default.
      token: process.env.SANITY_API_READ_TOKEN || undefined,
    }),

    // 3. REACT: Required for any interactive UI components
    react(), 

    // 4. TAILWIND: Main styling engine with explicit config link
    tailwind({
      configFile: 'tailwind.config.mjs',
    }), 

    // 5. SITEMAP: Automatically builds your Google-friendly index
    sitemap()
  ],

  // 6. DEPLOYMENT ADAPTER: Configuration for Netlify hosting
  adapter: netlify(),
});
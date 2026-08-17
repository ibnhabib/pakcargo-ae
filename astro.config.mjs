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

  // 7. REDIRECTS: Preserve SEO ranking signal from the old root-level service URLs
  // (e.g. /sea-cargo-to-pakistan), which used to duplicate /services/[slug] before that
  // was removed. Add an entry here whenever a service slug changes or a new one launches.
  redirects: {
    '/sea-cargo-to-pakistan': '/services/sea-cargo-to-pakistan',
    '/document-courier-to-pakistan': '/services/document-courier-to-pakistan',
    '/household-goods-cargo': '/services/household-goods-cargo',
    '/air-cargo-to-pakistan': '/services/air-cargo-to-pakistan',

    // /origin/[city] and /destination/[city] were replaced by combined route pages
    // (e.g. /dubai-to-karachi-cargo). Redirect each old URL to its closest new match
    // to preserve ranking signal instead of losing it to a 404.
    '/origin/dubai': '/dubai-to-karachi-cargo',
    '/origin/abu-dhabi': '/abu-dhabi-to-karachi-cargo',
    '/origin/sharjah': '/sharjah-to-karachi-cargo',
    '/destination/karachi': '/dubai-to-karachi-cargo',
    '/destination/lahore': '/dubai-to-lahore-cargo',
    '/destination/islamabad': '/dubai-to-islamabad-cargo',
  },
});
import {defineCliConfig} from 'sanity/cli'

/**
 * SANITY CLI CONFIGURATION
 * Project: PakCargo.ae (9volnp47)
 * ---------------------------------------------------------
 * This file handles CLI tasks like deployments and updates.
 */

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '9volnp47',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  deployment: {
    appId: 'lmbfpb24flkxjssmf2jcbjj1', // Added missing comma here

    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity
     */
    autoUpdates: true,
  },
  typegen: {
    path: '../src/**/*.ts',
    schema: './schema.json',
    generates: '../src/sanity.types.ts',
  },
})

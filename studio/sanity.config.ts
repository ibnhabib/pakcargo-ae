import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'PakCargo Admin',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || '9volnp47',
  dataset: import.meta.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            // PINNED: About Us Page
            S.listItem().title('About Us Page').id('aboutPage').child(
              S.document().schemaType('page').documentId('about-us'), // Fixed ID for fetching
            ),
            // PINNED: Contact Page
            S.listItem().title('Contact Page').id('contactPage').child(
              S.document().schemaType('page').documentId('contact'), // Fixed ID for fetching
            ),
            S.divider(),
            // All other documents (Blog posts, etc.)
            ...S.documentTypeListItems().filter((item) => !['page'].includes(item.getId()!)),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

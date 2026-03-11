import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Our Services',
  type: 'document',
  groups: [
    {name: 'content', title: 'Main Content'},
    {name: 'seo', title: 'SEO & Search'},
    {name: 'local', title: 'Local Targeting'},
  ],
  fields: [
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      group: 'content',
      description: 'Lower numbers appear first (e.g., 1 appears before 2).',
      initialValue: 10,
    }),
    defineField({
      name: 'title',
      title: 'Service Display Name',
      type: 'string',
      group: 'content',
      description: 'The name shown on the website (e.g., Sea Cargo)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // --- SEO SECTION ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Optimized Title',
      type: 'string',
      group: 'seo',
      description:
        'The title seen in Google (e.g., Sea Cargo to Pakistan from Dubai | Door to Door)',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      description: 'Brief summary for search results (120-160 chars).',
      validation: (Rule) => Rule.min(120).max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Service Specific Keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'serviceType',
      title: 'Schema Service Category',
      type: 'string',
      group: 'seo',
      options: {
        list: [
          {title: 'Sea Freight', value: 'SeaFreight'},
          {title: 'Air Freight', value: 'AirFreight'},
          {title: 'Moving & Relocation', value: 'MovingCompany'},
          {title: 'General Cargo', value: 'DeliveryService'},
        ],
      },
    }),

    // --- MAIN CONTENT ---
    defineField({
      name: 'mainImage',
      title: 'Service Cover Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      group: 'content',
      description: 'Lucide names: ship, plane, truck, package, home',
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (AED)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'rateTable',
      title: 'Service Rate Table',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'rateRow',
          fields: [
            {name: 'item', title: 'Item Name', type: 'string'},
            {name: 'unit', title: 'Unit', type: 'string'},
            {name: 'price', title: 'Price (AED)', type: 'string'},
            {name: 'note', title: 'Special Note', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Homepage Summary',
      type: 'text',
      group: 'content',
      rows: 3,
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features (SEO Bullets)',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'details',
      title: 'Full Service Details',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}],
    }),

    // --- LOCAL TARGETING ---
    defineField({
      name: 'serviceableAreas',
      title: 'Local Neighborhoods (Near Me Optimization)',
      type: 'array',
      group: 'local',
      description: 'Areas where you provide this specific service.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
        list: [
          {title: 'Jebel Ali', value: 'Jebel Ali'},
          {title: 'Al Quoz', value: 'Al Quoz'},
          {title: 'Deira', value: 'Deira'},
          {title: 'Bur Dubai', value: 'Bur Dubai'},
          {title: 'Musaffah', value: 'Musaffah'},
          {title: 'Sharjah Industrial Area', value: 'Sharjah Industrial Area'},
        ],
      },
    }),
    defineField({
      name: 'faqs',
      title: 'Service-Specific FAQs',
      type: 'array',
      group: 'seo',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string'},
            {name: 'answer', type: 'text'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'order', media: 'mainImage'},
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: subtitle ? `Priority: ${subtitle}` : 'No priority set',
        media: media,
      }
    },
  },
})

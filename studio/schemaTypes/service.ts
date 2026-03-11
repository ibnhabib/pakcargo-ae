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
      name: 'seoTitle',
      title: 'SEO Optimized Title',
      type: 'string',
      group: 'seo',
      description: 'CRITICAL: Target high-volume keywords.',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters for Google.'),
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
    defineField({
      name: 'mainImage',
      title: 'Service Cover Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      group: 'content',
      description: 'Use lucide icon names: ship, plane, truck, package, home',
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
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (AED)',
      type: 'string',
      group: 'content',
    }),
    // ADDED: The Dynamic Rate Table Field
    defineField({
      name: 'rateTable',
      title: 'Service Rate Table',
      type: 'array',
      group: 'content',
      description: 'List specific items and their prices (e.g., TV, Refrigerator, or Per KG).',
      of: [
        {
          type: 'object',
          name: 'rateRow',
          fields: [
            {name: 'item', title: 'Item Name', type: 'string', description: 'e.g., LED TV 55"'},
            {name: 'unit', title: 'Unit', type: 'string', description: 'e.g., Per Piece, Per KG'},
            {name: 'price', title: 'Price (AED)', type: 'string', description: 'e.g., 250'},
            {
              name: 'note',
              title: 'Special Note',
              type: 'string',
              description: 'e.g., Customs included',
            },
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
      name: 'serviceableAreas',
      title: 'Local Neighborhoods (Near Me Optimization)',
      type: 'array',
      group: 'local',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      validation: (Rule) => Rule.min(120).max(160),
    }),
    defineField({
      name: 'details',
      title: 'Full Service Details',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'faqs',
      title: 'Service-Specific FAQs',
      type: 'array',
      group: 'seo',
      of: [{type: 'faqItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title,
        subtitle: subtitle ? `Priority: ${subtitle}` : 'No priority set',
        media: media,
      }
    },
  },
})

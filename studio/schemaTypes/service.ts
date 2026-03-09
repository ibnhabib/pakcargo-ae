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
      description:
        'CRITICAL: Target high-volume keywords (e.g., Sea Cargo to Pakistan from Dubai | Door to Door).',
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
          description: 'Describe for SEO (e.g., Loading Sea Cargo to Pakistan).',
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
      description: 'Helps Google AI categorize your business entity.',
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
      description: 'e.g., "1.50" or "500". Used for Price Schema.',
    }),
    defineField({
      name: 'description',
      title: 'Homepage Summary',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'The brief summary for homepage cards.',
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features (SEO Bullets)',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description: 'e.g., "Free home pickup", "Customs clearance included"',
    }),
    defineField({
      name: 'serviceableAreas',
      title: 'Local Neighborhoods (Near Me Optimization)',
      type: 'array',
      group: 'local',
      description: 'CRITICAL: Add specific areas (e.g., Deira, Al Quoz, Musaffah, JVC).',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      description: 'Search snippet (120-160 chars).',
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
      description: 'Add FAQs related specifically to this service for better ranking.',
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

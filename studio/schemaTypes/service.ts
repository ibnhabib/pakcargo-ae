export default {
  name: 'service',
  title: 'Our Services',
  type: 'document',
  groups: [
    {name: 'content', title: 'Main Content'},
    {name: 'seo', title: 'SEO & Search'},
    {name: 'local', title: 'Local Targeting'},
  ],
  fields: [
    {
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      group: 'content',
      description:
        'Lower numbers appear first (e.g., 1 appears before 2). Use this to rearrange your services manually.',
      initialValue: 10,
    },
    {
      name: 'title',
      title: 'Service Display Name',
      type: 'string',
      group: 'content',
      description: 'The name shown on the website (e.g., Sea Cargo)',
    },
    {
      name: 'seoTitle',
      title: 'SEO Optimized Title',
      type: 'string',
      group: 'seo',
      description:
        'CRITICAL: Use high-volume keywords here (e.g., Best Pak Cargo Service - Sea Freight to Pakistan)',
      validation: (Rule: any) => Rule.max(60).warning('Keep under 60 characters for Google.'),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'The URL for this service page. Click "Generate" after typing the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Service Cover Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      description: 'Upload a high-quality photo of the shipping method (1200x600px).',
    },
    {
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      group: 'content',
      description: 'Use: ship, plane, truck, package, home',
    },
    {
      name: 'serviceType',
      title: 'Schema Service Category',
      type: 'string',
      group: 'seo',
      description:
        'Helps Google categorize: MovingCompany, DeliveryService, or FreightTransportService',
      options: {
        list: [
          {title: 'Sea Freight', value: 'SeaFreight'},
          {title: 'Air Freight', value: 'AirFreight'},
          {title: 'Moving & Relocation', value: 'MovingCompany'},
          {title: 'General Cargo', value: 'DeliveryService'},
        ],
      },
    },
    {
      name: 'startingPrice',
      title: 'Starting Price (AED)',
      type: 'string',
      group: 'content',
      description: 'e.g., "1.50" or "500". Used for Price Schema.',
    },
    {
      name: 'description',
      title: 'Homepage Summary',
      type: 'text',
      group: 'content',
      description: 'The brief summary that appears on the homepage cards.',
    },
    {
      name: 'keyFeatures',
      title: 'Key Features (SEO Bullets)',
      type: 'array',
      group: 'content',
      of: [{type: 'string'}],
      description: 'List 3-4 features (e.g., "Door to door delivery", "Free home pickup")',
    },
    {
      name: 'serviceableAreas',
      title: 'Local Neighborhoods (Near Me Optimization)',
      type: 'array',
      group: 'local',
      description:
        'Type a locality and press Enter. e.g., "Deira, Dubai" or "Musaffah, Abu Dhabi".',
      of: [{type: 'string'}],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      description: 'The snippet that appears in Google search results.',
      validation: (Rule: any) => Rule.min(120).max(160),
    },
    {
      name: 'details',
      title: 'Full Service Details',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}],
      description: 'Long-form content for the dedicated service page.',
    },
    {
      name: 'faqs',
      title: 'GEO-Optimized FAQs',
      type: 'array',
      group: 'seo',
      of: [{type: 'faqItem'}],
    },
  ],
  // This part makes the Studio list look clean by showing the order number
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
      media: 'mainImage',
    },
    prepare({title, subtitle, media}: any) {
      return {
        title: title,
        subtitle: subtitle ? `Priority: ${subtitle}` : 'No priority set',
        media: media,
      }
    },
  },
}

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trustPoints',
  title: 'Performance & Trust',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Headline',
      type: 'string',
      initialValue: 'Reliable Cargo Solutions You Can Trust',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      description: 'Focus on reliability and safety rather than speed if delays are common.',
    }),
    defineField({
      name: 'points',
      title: 'Trust Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon (lucide name)',
              type: 'string',
              initialValue: 'shield-check',
            },
            {name: 'heading', title: 'Heading', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }),
    // --- OPERATIONAL PROOF (The "Audit-Ready" Stats) ---
    defineField({
      name: 'shipmentsCount',
      title: 'Total Shipments Handled',
      type: 'string',
      description: 'Example: 10,000+ Bags Delivered.',
      initialValue: '5,000+',
    }),
    defineField({
      name: 'experienceYears',
      title: 'Years in Operation',
      type: 'string',
      initialValue: '10+ Years',
    }),
    defineField({
      name: 'warehouseSize',
      title: 'Warehouse Capacity',
      type: 'string',
      description: 'Mentioning your Jebel Ali facility size builds massive trust.',
      initialValue: '15,000 sq. ft.',
    }),
    defineField({
      name: 'safeDeliveryRate',
      title: 'Cargo Safety Rate',
      type: 'string',
      description: 'Switch "Satisfaction" to "Safety" — it’s easier to prove.',
      initialValue: '99.9%',
    }),
  ],
})

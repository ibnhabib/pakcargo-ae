import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Network Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      description: 'e.g., DHL, FedEx, Pakistan Post, or a local UAE trucker.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Helpful for SEO (e.g., "Official DHL Partner in Dubai").',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Partner Role',
      type: 'string',
      options: {
        list: [
          {title: 'International Carrier (Airlines/Shipping Lines)', value: 'carrier'},
          {title: 'Customs Clearance Agent', value: 'customs'},
          {title: 'Pakistan Last-Mile Delivery', value: 'last-mile'},
          {title: 'UAE Warehouse/Logistics Hub', value: 'hub'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coveredRegions',
      title: 'Regions Covered by this Partner',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., "All Punjab", "Karachi Port", "Dubai Jebel Ali". Helps with Local SEO.',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Partner Website (For Entity Linking)',
      type: 'url',
      description:
        'Link to their official corporate site. This builds "Association Trust" with Google.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      const roles: Record<string, string> = {
        carrier: 'Shipping/Air Line',
        customs: 'Customs Expert',
        'last-mile': 'PK Delivery',
        hub: 'UAE Warehouse',
      }
      return {
        title: title,
        subtitle: roles[subtitle] || subtitle,
        media: media,
      }
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'destinationHub',
  title: 'Pakistan Delivery Hub',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'City Name',
      type: 'string',
      description: 'e.g., Karachi, Lahore, Islamabad & Rawalpindi.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'province',
      title: 'Province / Region',
      type: 'string',
    }),
    defineField({
      name: 'transitTimeline',
      title: 'Transit Timeline',
      type: 'string',
      description: 'e.g., "20-25 Days (Sea) / 3-5 Days (Air)".',
    }),
    defineField({
      name: 'coverageAreas',
      title: 'Delivery Coverage Areas',
      type: 'array',
      description: 'Districts/cities delivered to from this hub.',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'customsHub',
      title: 'Customs Clearance Hub',
      type: 'string',
      description: 'e.g., "Karachi Port / KPT".',
    }),
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'province'},
  },
})

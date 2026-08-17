import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'originHub',
  title: 'UAE Pickup Hub',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'City Name',
      type: 'string',
      description: 'e.g., Dubai, Abu Dhabi, Sharjah.',
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
      name: 'pickupAreas',
      title: 'Pickup Areas',
      type: 'array',
      description: 'Neighborhoods/areas covered for pickup in this city.',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
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
    select: {title: 'name', subtitle: 'slug.current'},
  },
})


import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Delivery Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Partner Type',
      type: 'string',
      options: {
        list: [
          { title: 'Global Express (UAE)', value: 'global' },
          { title: 'Pakistan Last-Mile', value: 'local' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
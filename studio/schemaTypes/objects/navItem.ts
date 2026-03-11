import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Link Text', type: 'string' }),
    defineField({ name: 'path', title: 'URL Path', type: 'string', description: 'e.g. /services/sea-cargo' }),
  ]
})

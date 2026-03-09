import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO & Meta'},
    {name: 'richSnippets', title: 'Rich Snippets (FAQ)'},
  ],
  fields: [
    // --- NEW ORDER FIELD ---
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      group: 'content',
      description: 'Lower numbers appear first (e.g., 1 before 2). If empty, posts sort by date.',
      initialValue: 99,
    }),
    // --- EXISTING FIELDS ---
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      group: 'content',
      description: 'Use keywords like "Pakistan Cargo" or "Dubai Shipping Guide".',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Vital for SEO. Describe the image for Google.',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Post Body',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'caption', type: 'string', title: 'Caption'},
            {name: 'alt', type: 'string', title: 'Alt Text'},
          ],
        }),
        defineArrayMember({
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'YouTube Video URL',
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
    }),
    defineField({
      name: 'keywords',
      title: 'Target Keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Section',
      type: 'array',
      group: 'richSnippets',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', title: 'Answer'},
          ],
        }),
      ],
    }),
  ],
  // Preview configuration to see the order in Sanity Studio
  preview: {
    select: {
      title: 'title',
      order: 'order',
      date: 'publishedAt',
      media: 'mainImage',
    },
    prepare({title, order, date, media}) {
      return {
        title: title,
        subtitle: `Priority: ${order || 'N/A'} | Date: ${date ? date.split('T')[0] : 'No date'}`,
        media: media,
      }
    },
  },
})

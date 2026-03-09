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
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      group: 'content',
      initialValue: 99,
    }),
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      group: 'content',
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
      title: 'Expert Author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'content',
      validation: (Rule) => Rule.required(), // Essential for E-E-A-T
    }),
    defineField({
      name: 'topic',
      title: 'Primary Topic',
      type: 'string',
      group: 'content',
      options: {
        list: [
          {title: 'Customs & Regulations', value: 'customs'},
          {title: 'Packing & Safety', value: 'packing'},
          {title: 'Shipping Rates & Tips', value: 'rates'},
          {title: 'Company News', value: 'news'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    defineField({
      name: 'body',
      title: 'Post Content',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
        }),
      ],
    }),
    // SEO Group
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
    }),
    // Rich Snippets
    defineField({
      name: 'faqs',
      title: 'Post FAQs',
      type: 'array',
      group: 'richSnippets',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'question', type: 'string'},
            {name: 'answer', type: 'text'},
          ],
        }),
      ],
    }),
  ],
})

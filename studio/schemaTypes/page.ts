import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'about', title: 'About Us Details'},
    {name: 'contact', title: 'Contact Details'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title'},
    }),

    // --- ABOUT PAGE SPECIFIC FIELDS ---
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'heroTitlePart1',
      title: 'Hero Title (White Text)',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'heroTitlePart2',
      title: 'Hero Title (Blue Text)',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'yearsExp',
      title: 'Years of Experience',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'cargoMoved',
      title: 'Cargo Moved Stat',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'clientsCount',
      title: 'Satisfied Clients Stat',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'destinationsText',
      title: 'Destinations Stat',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'bodyTitle',
      title: 'Body Section Title (White Text)',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'bodyTitleAccent',
      title: 'Body Section Title (Blue Text)',
      type: 'string',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'quoteText',
      title: 'Mission Quote',
      type: 'text',
      group: 'about',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'quoteAuthor',
      title: 'Mission Quote Attribution',
      type: 'string',
      group: 'about',
      initialValue: 'Leadership Team',
      hidden: ({document}) => document?._id !== 'about-us',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'about',
      options: {hotspot: true},
      hidden: ({document}) => document?._id !== 'about-us',
    }),

    // --- CONTACT PAGE SPECIFIC FIELDS ---
    defineField({
      name: 'heroTitle',
      title: 'Contact Hero Title',
      type: 'string',
      group: 'contact',
      initialValue: 'Get a Fast Quote',
      hidden: ({document}) => document?._id !== 'contact',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Contact Hero Subtitle',
      type: 'string',
      group: 'contact',
      hidden: ({document}) => document?._id !== 'contact',
    }),
    defineField({
      name: 'workingHours',
      title: 'Display Working Hours',
      type: 'string',
      group: 'contact',
      hidden: ({document}) => document?._id !== 'contact',
    }),
    defineField({
      name: 'sidebarTitle',
      title: 'Sidebar Blue Box Title',
      type: 'string',
      group: 'contact',
      hidden: ({document}) => document?._id !== 'contact',
    }),
    defineField({
      name: 'sidebarText',
      title: 'Sidebar Blue Box Text',
      type: 'text',
      group: 'contact',
      hidden: ({document}) => document?._id !== 'contact',
    }),

    // --- GENERIC CONTENT FIELD ---
    defineField({
      name: 'content',
      title: 'Page Body / Description',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}, {type: 'image'}],
    }),

    // --- SEO GROUP ---
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
    }),
  ],
})

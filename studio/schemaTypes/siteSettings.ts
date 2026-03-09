import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO & Meta Data' },
    { name: 'contact', title: 'Global Contact & CTA' },
    { name: 'business', title: 'Business Identity' },
  ],
  fields: [
    // --- SEO GROUP ---
    defineField({
      name: 'title',
      title: 'Global Site Title',
      type: 'string',
      group: 'seo',
      description: 'The main title for Google (50-60 characters recommended).',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Global Meta Description',
      type: 'text',
      group: 'seo',
      description: 'The snippet for humans in search results (150-160 chars).',
      validation: (Rule) => Rule.required().min(120).max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Core Business Keywords',
      type: 'array',
      group: 'seo',
      description: 'These populate the Schema "knowsAbout" field. Add your locked keywords here.',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Sharing Image',
      type: 'image',
      group: 'seo',
      description: 'Image shown on WhatsApp/Facebook (1200x630px).',
    }),

    // --- BUSINESS IDENTITY GROUP (For Schema.org) ---
    defineField({
      name: 'businessName',
      title: 'Official Business Name',
      type: 'string',
      group: 'business',
      initialValue: 'PakCargo.ae',
    }),
    defineField({
      name: 'address',
      title: 'Office/Warehouse Address',
      type: 'string',
      group: 'business',
      description: 'Physical location for Local SEO trust.',
    }),
    defineField({
      name: 'phone',
      title: 'Business Phone',
      type: 'string',
      group: 'business',
      description: 'Primary contact for schema (e.g., +971 50 123 4567).',
    }),
    defineField({
      name: 'mainServiceAreas',
      title: 'Main Service Regions',
      type: 'array',
      group: 'business',
      description: 'Emirates you serve (e.g., Dubai, Abu Dhabi).',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Dubai', value: 'Dubai' },
          { title: 'Abu Dhabi', value: 'Abu Dhabi' },
          { title: 'Sharjah', value: 'Sharjah' },
          { title: 'Ajman', value: 'Ajman' },
          { title: 'Al Ain', value: 'Al Ain' },
          { title: 'Ras Al Khaimah', value: 'Ras Al Khaimah' },
          { title: 'Fujairah', value: 'Fujairah' },
          { title: 'Umm Al Quwain', value: 'Umm Al Quwain' },
        ]
      }
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Profiles (sameAs)',
      type: 'array',
      group: 'business',
      description: 'Links to Facebook, Instagram, etc. to prove brand authority.',
      of: [{ type: 'url' }],
    }),

    // --- EXISTING CONTACT & CTA GROUP ---
    defineField({
      name: 'announcementBar',
      title: 'Announcement Bar (Global)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'ctaType',
      title: 'Global CTA Type',
      type: 'string',
      group: 'contact',
      options: {
        list: [
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'Phone', value: 'phone' }
        ],
      },
    }),
    defineField({
      name: 'ctaValue',
      title: 'CTA Contact Value',
      type: 'string',
      group: 'contact',
      description: 'Enter phone number (e.g., 971501234567 for WhatsApp).'
    }),
  ],
})
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO & Meta Data'},
    {name: 'navigation', title: 'Navigation (Menus)'}, // NEW: Global Menu Control
    {name: 'business', title: 'Business Identity'},
    {name: 'contact', title: 'Global Contact & CTA'},
    {name: 'tracking', title: 'Tracking & Analytics'},
    {name: 'verification', title: 'Trust & Verification'},
  ],
  fields: [
    // --- SEO GROUP ---
    defineField({
      name: 'title',
      title: 'Global Site Title',
      type: 'string',
      group: 'seo',
      description: 'The main title for Google (e.g., PakCargo.ae | Best Pakistan Cargo Service).',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'description',
      title: 'Global Meta Description',
      type: 'text',
      group: 'seo',
      description: 'The snippet for search results (150-160 chars).',
      validation: (Rule) => Rule.required().min(120).max(160),
    }),
    defineField({
      name: 'keywords',
      title: 'Core Business Keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Sharing Image',
      type: 'image',
      group: 'seo',
    }),

    // --- NAVIGATION GROUP (The Best Practice for Scaling) ---
    defineField({
      name: 'headerMenu',
      title: 'Header Navigation',
      type: 'array',
      group: 'navigation',
      description: 'Main links shown at the top of the page.',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {
              name: 'label',
              title: 'Link Label',
              type: 'string',
              description: 'e.g., "All Services"',
            },
            {
              name: 'link',
              title: 'URL Path',
              type: 'string',
              description: 'e.g., "/services" or "/contact"',
            },
            {name: 'isButton', title: 'Show as Button?', type: 'boolean', initialValue: false},
          ],
        },
      ],
    }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Quick Links',
      type: 'array',
      group: 'navigation',
      description: 'Informational links shown in the footer columns.',
      of: [
        {
          type: 'object',
          name: 'footerLink',
          fields: [
            {name: 'label', title: 'Link Label', type: 'string'},
            {name: 'link', title: 'URL Path', type: 'string'},
          ],
        },
      ],
    }),

    // --- TRACKING & ANALYTICS ---
    defineField({
      name: 'gtmId',
      title: 'Google Tag Manager ID',
      type: 'string',
      group: 'tracking',
      description: 'GTM-XXXXXXX',
    }),
    defineField({
      name: 'gaId',
      title: 'Google Analytics 4 ID',
      type: 'string',
      group: 'tracking',
      description: 'G-XXXXXXX',
    }),
    defineField({
      name: 'siteVerificationCode',
      title: 'Google Search Console Verification',
      type: 'string',
      group: 'tracking',
    }),

    // --- BUSINESS IDENTITY GROUP ---
    defineField({
      name: 'businessName',
      title: 'Official Business Name',
      type: 'string',
      group: 'business',
      initialValue: 'PakCargo.ae',
    }),
    defineField({
      name: 'address',
      title: 'Warehouse/Office Address',
      type: 'string',
      group: 'business',
    }),
    defineField({
      name: 'mainServiceAreas',
      title: 'Main Service Regions',
      type: 'array',
      group: 'business',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Dubai', value: 'Dubai'},
          {title: 'Abu Dhabi', value: 'Abu Dhabi'},
          {title: 'Sharjah', value: 'Sharjah'},
          {title: 'Ajman', value: 'Ajman'},
          {title: 'Al Ain', value: 'Al Ain'},
          {title: 'Ras Al Khaimah', value: 'Ras Al Khaimah'},
          {title: 'Fujairah', value: 'Fujairah'},
          {title: 'Umm Al Quwain', value: 'Umm Al Quwain'},
        ],
      },
    }),

    // --- TRUST & VERIFICATION ---
    defineField({
      name: 'tradeLicense',
      title: 'UAE Trade License Number',
      type: 'string',
      group: 'verification',
    }),
    defineField({
      name: 'openingHours',
      title: 'Business Hours',
      type: 'string',
      group: 'verification',
      initialValue: 'Mo-Su 00:00-24:00',
    }),

    // --- GLOBAL CONTACT & CTA ---
    defineField({
      name: 'phone',
      title: 'Primary Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'contact',
      description: 'Country code first, no plus sign (e.g., 971501234567).',
    }),
  ],
})

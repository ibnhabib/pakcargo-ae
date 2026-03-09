import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO & Meta Data'},
    {name: 'contact', title: 'Global Contact & CTA'},
    {name: 'business', title: 'Business Identity'},
    {name: 'verification', title: 'Trust & Verification'},
  ],
  fields: [
    // --- SEO GROUP ---
    defineField({
      name: 'title',
      title: 'Global Site Title',
      type: 'string',
      group: 'seo',
      description:
        'The main title for Google (e.g., PakCargo.ae | Best Pakistan Cargo Service from UAE).',
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
      description:
        'CRITICAL: Add the 10 keywords you listed here. These populate the Schema "knowsAbout" field.',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Sharing Image',
      type: 'image',
      group: 'seo',
      description: 'Image shown on WhatsApp/Facebook (1200x630px).',
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
      name: 'legalName',
      title: 'Legal Company Name',
      type: 'string',
      group: 'business',
      description: 'As it appears on your UAE Trade License.',
    }),
    defineField({
      name: 'address',
      title: 'Warehouse/Office Address',
      type: 'string',
      group: 'business',
      description: 'Full physical address (e.g., Jebel Ali Freezone, Warehouse X, Dubai).',
    }),
    defineField({
      name: 'geoCoordinates',
      title: 'Google Maps Geo-Coordinates',
      type: 'object',
      group: 'business',
      description: 'Crucial for "Cargo Near Me" rankings.',
      fields: [
        {name: 'lat', title: 'Latitude', type: 'number'},
        {name: 'lng', title: 'Longitude', type: 'number'},
      ],
    }),
    defineField({
      name: 'mainServiceAreas',
      title: 'Main Service Regions',
      type: 'array',
      group: 'business',
      description: 'The Emirates you serve.',
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

    // --- TRUST & VERIFICATION (The SEO Secret Sauce) ---
    defineField({
      name: 'tradeLicense',
      title: 'UAE Trade License Number',
      type: 'string',
      group: 'verification',
      description: 'Adding this proves legitimacy to search crawlers.',
    }),
    defineField({
      name: 'openingHours',
      title: 'Business Hours',
      type: 'string',
      group: 'verification',
      description: 'e.g., Mo-Sa 09:00-21:00',
      initialValue: 'Mo-Su 00:00-24:00', // 24/7 is common for cargo
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Profiles',
      type: 'array',
      group: 'verification',
      of: [{type: 'url'}],
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
      title: 'WhatsApp (For Direct Chat)',
      type: 'string',
      group: 'contact',
      description: 'Number with country code, no "+" (e.g., 971501234567).',
    }),
    defineField({
      name: 'announcementBar',
      title: 'Global Announcement',
      type: 'string',
      group: 'contact',
      description: 'e.g., "Special Ramadan Rates Now Live!"',
    }),
  ],
})

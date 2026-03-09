import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Logistics Expert (Author)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., Senior Operations Manager or Logistics Strategist.',
      initialValue: 'Logistics Expert',
    }),
    defineField({
      name: 'image',
      title: 'Professional Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'experienceYears',
      title: 'Years of Experience',
      type: 'number',
      description: 'The number of years you have worked in the UAE-Pakistan cargo industry.',
    }),
    defineField({
      name: 'bio',
      title: 'Expert Biography (E-E-A-T)',
      type: 'text',
      description:
        'Crucial: Mention your specific knowledge of Jebel Ali operations, Pakistan Customs (FBR), and door-to-door logistics.',
    }),
    defineField({
      name: 'socialProfiles',
      title: 'Social Media / Professional Links',
      type: 'array',
      of: [{type: 'url'}],
      description: 'Link to your LinkedIn or professional profile if available to verify identity.',
    }),
    defineField({
      name: 'expertise',
      title: 'Specific Areas of Expertise',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., "Customs Clearance", "Sea Freight", "Household Relocation".',
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})

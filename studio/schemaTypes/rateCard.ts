import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rateCard',
  title: 'Master Rate Card',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Display Priority',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1 for Sea Cargo, 2 for Air Cargo).',
      initialValue: 10,
    }),
    defineField({
      name: 'cargoType',
      title: 'Cargo Category',
      type: 'string',
      description: 'e.g., Sea Cargo, Air Cargo, or Special Electronics.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'route',
      title: 'Shipping Route (SEO)',
      type: 'string',
      description: 'e.g., UAE to Pakistan (all cities) or Dubai to Lahore.',
      initialValue: 'UAE to Pakistan',
    }),
    defineField({
      name: 'pricePerKg',
      title: 'Price Value',
      type: 'number',
      description: 'The numeric value only (e.g., 1.50 or 5).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unitType',
      title: 'Pricing Unit',
      type: 'string',
      options: {
        list: [
          {title: 'Per KG (Standard)', value: 'KGM'},
          {title: 'Per Cubic Meter (CBM)', value: 'MTQ'},
          {title: 'Per Box/Piece', value: 'C62'},
        ],
      },
      initialValue: 'KGM',
    }),
    defineField({
      name: 'minWeight',
      title: 'Minimum Requirement',
      type: 'string',
      description: 'e.g., "Min 30 KG" or "No Minimum".',
    }),
    defineField({
      name: 'transitTime',
      title: 'Estimated Transit Time',
      type: 'string',
      description: 'e.g., "7-10 Days" or "4-6 Weeks". Essential for customer trust.',
    }),
    defineField({
      name: 'notes',
      title: 'Service Highlights',
      type: 'text',
      rows: 3,
      description: 'e.g., "Includes Door-to-Door & Customs Clearance".',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Rate Last Verified',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      description: 'Signals to Google that your prices are fresh.',
    }),
  ],
  preview: {
    select: {
      title: 'cargoType',
      price: 'pricePerKg',
      unit: 'unitType',
      order: 'order',
    },
    prepare({title, price, unit, order}) {
      const unitLabel = unit === 'KGM' ? '/kg' : unit === 'MTQ' ? '/CBM' : '/pc'
      return {
        title: `${title} - AED ${price}${unitLabel}`,
        subtitle: `Priority: ${order} | Route: UAE to Pakistan`,
      }
    },
  },
})

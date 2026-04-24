import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Témoignages',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Prénom', type: 'string', validation: r => r.required() }),
    defineField({ name: 'city', title: 'Ville', type: 'string' }),
    defineField({ name: 'service', title: 'Type de prestation', type: 'string', description: 'Ex: Maquillage mariée' }),
    defineField({ name: 'quote', title: 'Témoignage', type: 'text', rows: 4, validation: r => r.required() }),
    defineField({ name: 'rating', title: 'Note (1-5)', type: 'number', validation: r => r.min(1).max(5), initialValue: 5 }),
    defineField({ name: 'featured', title: 'Mis en avant', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Ordre', type: 'number', initialValue: 0 }),
  ],
  orderings: [
    { title: 'Ordre défini', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'service' },
  },
})

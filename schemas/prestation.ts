import { defineField, defineType } from 'sanity'

export const prestation = defineType({
  name: 'prestation',
  title: 'Prestations',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'includes',
      title: 'Ce qui est inclus',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'icon', title: 'Emoji icône', type: 'string', description: 'Ex: 💍 👑 📸' }),
    defineField({ name: 'featured', title: 'Mis en avant', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Ordre', type: 'number', initialValue: 0 }),
  ],
  orderings: [
    { title: 'Ordre défini', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'icon' },
  },
})

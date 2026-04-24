import { defineField, defineType } from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Configuration du site',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Titre hero (ligne 1)', type: 'string' }),
    defineField({ name: 'heroTitleItalic', title: 'Titre hero (ligne italique)', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Sous-titre hero', type: 'text', rows: 2 }),
    defineField({
      name: 'stats',
      title: 'Chiffres clés',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valeur', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'socialNetworks',
      title: 'Réseaux sociaux',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'ID réseau', type: 'string', description: 'instagram, tiktok, youtube...' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'active', title: 'Actif', type: 'boolean', initialValue: true },
          ],
          preview: { select: { title: 'id', subtitle: 'url' } },
        },
      ],
    }),
    defineField({
      name: 'googleReviewsUrl',
      title: 'URL Avis Google',
      type: 'url',
    }),
    defineField({
      name: 'googleRating',
      title: 'Note Google (ex: 4.7)',
      type: 'string',
    }),
    defineField({
      name: 'googleReviewCount',
      title: 'Nombre d\'avis Google',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'heroTitle' },
    prepare: () => ({ title: 'Configuration du site' }),
  },
})

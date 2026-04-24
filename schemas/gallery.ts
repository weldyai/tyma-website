import { defineField, defineType } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Galerie',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Titre',
      type: 'string',
      validation: r => r.required(),
    }),
    defineField({
      name: 'sub',
      title: 'Sous-titre',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Photo uploadée', value: 'upload' },
          { title: 'URL externe (Unsplash, lien direct…)', value: 'external' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Instagram — embed post complet', value: 'instagram' },
          { title: 'TikTok — embed post complet', value: 'tiktok' },
        ],
        layout: 'radio',
      },
      initialValue: 'upload',
      validation: r => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.source !== 'upload',
    }),
    defineField({
      name: 'videoId',
      title: 'ID YouTube',
      type: 'string',
      description: 'Ex: dQw4w9WgXcQ (la partie après youtube.com/watch?v=)',
      hidden: ({ document }) => document?.source !== 'youtube',
    }),
    defineField({
      name: 'externalUrl',
      title: 'URL',
      type: 'url',
      description: 'Instagram/TikTok : coller l\'URL du POST (ex: instagram.com/p/xxx). NB: les URLs d\'images Instagram directes ne fonctionnent pas — uploader la photo via "Photo uploadée".',
      hidden: ({ document }) => !['instagram', 'tiktok', 'external'].includes(document?.source as string),
    }),
    defineField({
      name: 'tall',
      title: 'Format portrait (plus grand)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Mise en avant',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Ordre défini', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Plus récent', name: 'dateDesc', by: [{ field: '_createdAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'label', subtitle: 'source', media: 'image' },
  },
})

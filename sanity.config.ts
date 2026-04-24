import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Tyma Makeup Artist',
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu du site')
          .items([
            S.listItem()
              .title('Configuration du site')
              .child(
                S.document()
                  .schemaType('siteConfig')
                  .documentId('siteConfig')
              ),
            S.divider(),
            S.listItem().title('Galerie').schemaType('gallery').child(S.documentTypeList('gallery')),
            S.listItem().title('Témoignages').schemaType('testimonial').child(S.documentTypeList('testimonial')),
            S.listItem().title('Prestations').schemaType('prestation').child(S.documentTypeList('prestation')),
          ]),
    }),
    visionTool(),
  ],
})

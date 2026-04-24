import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'c4bmydni',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const GALLERY = [
  { label: "Mariée",     sub: "Look Classique Nacré",    img: "photo-1487412720507-e7ab37603c6f", focal: "faces", tall: true,  order: 1 },
  { label: "Soirée",     sub: "Glam Oriental",            img: "photo-1529665253569-6d01c0eaf7b6", focal: "top",   tall: false, order: 2 },
  { label: "Shooting",   sub: "Studio Mode",              img: "photo-1616683693504-3ea7e9ad6fec", focal: "top",   tall: false, order: 3 },
  { label: "Mariée",     sub: "Look Bohème Romantique",   img: "photo-1522335789203-aabd1fc54bc9", focal: "top",   tall: true,  order: 4 },
  { label: "Éditorial",  sub: "Haute Couture",            img: "photo-1595335696065-2f30ae83e026", focal: "faces", tall: false, order: 5 },
  { label: "Gala",       sub: "Soirée de Prestige",       img: "photo-1560869713-7d0a29430803",    focal: "top",   tall: false, order: 6 },
]

async function seed() {
  console.log('Envoi des images vers Sanity...')

  for (const item of GALLERY) {
    const doc = {
      _type: 'gallery',
      label: item.label,
      sub: item.sub,
      source: 'external',
      externalUrl: `https://images.unsplash.com/${item.img}?w=600&q=80&auto=format&fit=crop&crop=${item.focal}`,
      tall: item.tall,
      featured: false,
      order: item.order,
    }

    const result = await client.create(doc)
    console.log(`✅ Créé : ${item.label} → ${result._id}`)
  }

  console.log('\nTerminé ! Toutes les images sont dans Sanity.')
  console.log('Tu peux les remplacer par de vraies photos depuis le Studio.')
}

seed().catch(console.error)

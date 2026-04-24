import { client } from './client'
import { unstable_cache } from 'next/cache'

// Types
export type GalleryItem = {
  _id: string
  label: string
  sub?: string
  source: 'upload' | 'youtube' | 'instagram' | 'tiktok'
  image?: { asset: { _ref: string } }
  videoId?: string
  externalUrl?: string
  tall?: boolean
  featured?: boolean
  order: number
}

export type Testimonial = {
  _id: string
  name: string
  city?: string
  service?: string
  quote: string
  rating: number
  featured?: boolean
}

export type Prestation = {
  _id: string
  title: string
  description?: string
  includes?: string[]
  icon?: string
  featured?: boolean
}

// Queries GROQ
export const getGallery = unstable_cache(
  async (): Promise<GalleryItem[]> => {
    return client.fetch(`
      *[_type == "gallery"] | order(order asc, _createdAt desc) {
        _id, label, sub, source, image, videoId, externalUrl, tall, featured, order
      }
    `)
  },
  ['gallery'],
  { revalidate: 3600, tags: ['gallery'] }
)

export const getTestimonials = unstable_cache(
  async (): Promise<Testimonial[]> => {
    return client.fetch(`
      *[_type == "testimonial"] | order(order asc) {
        _id, name, city, service, quote, rating, featured
      }
    `)
  },
  ['testimonials'],
  { revalidate: 3600, tags: ['testimonials'] }
)

export const getPrestations = unstable_cache(
  async (): Promise<Prestation[]> => {
    return client.fetch(`
      *[_type == "prestation"] | order(order asc) {
        _id, title, description, includes, icon, featured
      }
    `)
  },
  ['prestations'],
  { revalidate: 3600, tags: ['prestations'] }
)

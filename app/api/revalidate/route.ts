import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

// Webhook Sanity → déclenché quand un contenu est modifié dans le studio
// Configurer dans Sanity : https://sanity.io/docs/webhooks
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  const type = body._type as string | undefined

  // Revalider le tag correspondant au type modifié
  const tagMap: Record<string, string[]> = {
    gallery: ['gallery'],
    testimonial: ['testimonials'],
    prestation: ['prestations'],
    siteConfig: ['gallery', 'testimonials', 'prestations'],
  }

  const tags = type ? (tagMap[type] ?? ['gallery', 'testimonials', 'prestations']) : Object.values(tagMap).flat()

  // Revalidate the main page when any content changes
  void tags
  revalidatePath('/', 'page')

  return NextResponse.json({ revalidated: true, tags })
}

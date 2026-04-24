import { NextResponse } from 'next/server'

export const revalidate = 1800 // rafraîchir toutes les 30 min

export type BeholdPost = {
  id: string
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  mediaUrl: string
  thumbnailUrl?: string
  caption?: string
  timestamp: string
  permalink: string
  sizes?: {
    small?: { url: string; width: number; height: number }
    medium?: { url: string; width: number; height: number }
    large?: { url: string; width: number; height: number }
  }
}

export async function GET() {
  const feedId = process.env.BEHOLD_FEED_ID

  if (!feedId) {
    return NextResponse.json(
      { error: 'BEHOLD_FEED_ID manquant dans .env.local — créer un compte sur behold.so' },
      { status: 503 }
    )
  }

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 1800 },
    })

    if (!res.ok) throw new Error(`Behold API error: ${res.status}`)

    const data = await res.json()
    const posts: BeholdPost[] = Array.isArray(data) ? data : (data.posts ?? [])

    // Garder seulement photos + vidéos, max 12
    const filtered = posts
      .filter(p => p.mediaType === 'IMAGE' || p.mediaType === 'VIDEO' || p.mediaType === 'CAROUSEL_ALBUM')
      .slice(0, 12)

    return NextResponse.json({ posts: filtered })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

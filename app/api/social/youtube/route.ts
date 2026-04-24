import { NextResponse } from 'next/server'

export const revalidate = 3600 // rafraîchir toutes les heures

export type YouTubeVideo = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  url: string
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if (!apiKey || !channelId) {
    return NextResponse.json(
      { error: 'YOUTUBE_API_KEY et YOUTUBE_CHANNEL_ID requis dans .env.local' },
      { status: 503 }
    )
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=12&type=video`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) throw new Error(`YouTube API error: ${res.status}`)

    const data = await res.json()

    const videos: YouTubeVideo[] = (data.items ?? []).map((item: Record<string, unknown>) => {
      const snippet = item.snippet as Record<string, unknown>
      const resourceId = (item.id as Record<string, unknown>)
      const thumbnails = snippet.thumbnails as Record<string, { url: string }>
      return {
        id: resourceId.videoId as string,
        title: snippet.title as string,
        description: snippet.description as string,
        thumbnail: thumbnails.high?.url ?? thumbnails.medium?.url ?? '',
        publishedAt: snippet.publishedAt as string,
        url: `https://www.youtube.com/watch?v=${resourceId.videoId}`,
      }
    })

    return NextResponse.json({ videos })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

import { NextResponse } from "next/server";

export const revalidate = 3600; // cache 1h

type YTSnippet = {
  title: string;
  thumbnails: { maxres?: { url: string }; high?: { url: string }; medium?: { url: string } };
};

type YTItem = {
  id: { videoId: string };
  snippet: YTSnippet;
};

type YTDurationItem = {
  id: string;
  contentDetails: { duration: string };
  snippet: YTSnippet;
};

function parseDurationSeconds(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 999;
  return (parseInt(m[1] || "0") * 3600) + (parseInt(m[2] || "0") * 60) + parseInt(m[3] || "0");
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return NextResponse.json({ error: "Missing config" }, { status: 500 });
  }

  // 1. Fetch latest 20 videos from channel
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=20&key=${apiKey}`;
  const searchRes = await fetch(searchUrl, { next: { revalidate: 3600 } });
  const searchData = await searchRes.json();

  if (!searchData.items?.length) {
    return NextResponse.json({ shorts: [] });
  }

  const ids = (searchData.items as YTItem[]).map((i) => i.id.videoId).join(",");

  // 2. Fetch durations to filter Shorts (≤ 60s)
  const detailUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${ids}&key=${apiKey}`;
  const detailRes = await fetch(detailUrl, { next: { revalidate: 3600 } });
  const detailData = await detailRes.json();

  const shorts = (detailData.items as YTDurationItem[])
    .filter((v) => parseDurationSeconds(v.contentDetails.duration) <= 60)
    .map((v) => ({
      id: v.id,
      label: v.snippet.title,
      thumb:
        v.snippet.thumbnails.maxres?.url ||
        v.snippet.thumbnails.high?.url ||
        v.snippet.thumbnails.medium?.url ||
        "",
    }));

  return NextResponse.json({ shorts });
}

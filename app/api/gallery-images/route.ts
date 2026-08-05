import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "gallery");
  let images: string[] = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/gallery/${f}`);
  } catch {
    images = [];
  }
  return NextResponse.json({ images });
}

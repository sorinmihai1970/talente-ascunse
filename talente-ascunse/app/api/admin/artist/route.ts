import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getArtistByEmail } from "@/lib/artists";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json({ artist: null });

  const artist = getArtistByEmail(email);
  return NextResponse.json({ artist: artist ?? null });
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const artistsPath = path.join(process.cwd(), "lib", "artists.ts");
  const content = fs.readFileSync(artistsPath, "utf-8");

  const newEntry = `  {
    contactEmail: ${JSON.stringify(data.contactEmail)},
    firstName: ${JSON.stringify(data.firstName)},
    locality: ${JSON.stringify(data.locality)},
    county: ${JSON.stringify(data.county)},
    storyRo: ${JSON.stringify(data.storyRo)},
    storyEn: ${JSON.stringify(data.storyEn)},
  },`;

  const updated = content.replace(
    /^(export const artists: Artist\[\] = \[)/m,
    `$1\n${newEntry}`
  );

  if (updated === content) {
    return NextResponse.json({ error: "Could not insert artist" }, { status: 500 });
  }

  fs.writeFileSync(artistsPath, updated, "utf-8");
  return NextResponse.json({ ok: true });
}

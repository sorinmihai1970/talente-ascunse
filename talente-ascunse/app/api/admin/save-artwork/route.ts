import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const artworksPath = path.join(process.cwd(), "lib", "artworks.ts");
  const content = fs.readFileSync(artworksPath, "utf-8");

  const storyField = data.storyRo
    ? `    story: { ro: ${JSON.stringify(data.storyRo)}, en: ${JSON.stringify(data.storyEn)} },\n`
    : "";

  const newEntry = `  {
    slug: ${JSON.stringify(data.slug)},
    title: ${JSON.stringify(data.titleRo)},
    titleEn: ${JSON.stringify(data.titleEn)},
    technique: ${JSON.stringify(data.technique)},
    techniqueLabel: { ro: ${JSON.stringify(data.techniqueLabelRo)}, en: ${JSON.stringify(data.techniqueLabelEn)} },
    artistFirstName: ${JSON.stringify(data.artistFirstName)},
    locality: ${JSON.stringify(data.locality)},
    county: ${JSON.stringify(data.county)},
    contactEmail: ${JSON.stringify(data.contactEmail)},
    description: { ro: ${JSON.stringify(data.descriptionRo)}, en: ${JSON.stringify(data.descriptionEn)} },
${storyField}    image: ${JSON.stringify(data.image)},${data.featured ? "\n    featured: true," : ""}
  },`;

  const updated = content.replace(
    /^(export const artworks: Artwork\[\] = \[)/m,
    `$1\n${newEntry}`
  );

  if (updated === content) {
    return NextResponse.json({ error: "Could not insert artwork" }, { status: 500 });
  }

  fs.writeFileSync(artworksPath, updated, "utf-8");
  return NextResponse.json({ ok: true });
}

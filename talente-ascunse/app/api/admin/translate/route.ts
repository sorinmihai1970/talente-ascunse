import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: NextRequest) {
  const { texts, generateDescription } = await request.json() as {
    texts: Record<string, string>;
    generateDescription?: { titleRo: string; techniqueRo: string };
  };

  const entries = Object.entries(texts).filter(([, v]) => v.trim());

  const hasTitleRo = entries.some(([k]) => k === "titleRo");

  let prompt: string;

  if (hasTitleRo) {
    prompt = `Ai primit un slug (cuvinte separate prin cratimă, fără diacritice) care reprezintă titlul unei lucrări de artă. Transformă-l într-un titlu frumos în română, cu diacritice corecte și majusculă la început. Returnează DOAR un JSON valid cu cheia "titleRo", fără explicații.

${JSON.stringify(Object.fromEntries(entries), null, 2)}`;
  } else if (generateDescription) {
    const { titleRo, techniqueRo } = generateDescription;
    const hasDescRo = entries.some(([k]) => k === "descriptionRo");
    const hasStoryRo = entries.some(([k]) => k === "storyRo");

    const tasks: string[] = [];
    if (!hasDescRo) {
      tasks.push(`- "descriptionRo": generează o descriere artistică în română (2-3 propoziții, ton cald și elevat) pentru lucrarea "${titleRo}" (tehnică: ${techniqueRo})`);
      tasks.push(`- "descriptionEn": traduce descrierea generată în engleză`);
    } else {
      tasks.push(`- "descriptionRo": păstrează textul existent, corectează doar diacriticele`);
      tasks.push(`- "descriptionEn": traduce "descriptionRo" în engleză`);
    }
    if (hasStoryRo) {
      tasks.push(`- "storyEn": traduce "storyRo" în engleză`);
    }
    tasks.push(`- "titleEn": traduce titlul "${titleRo}" în engleză`);

    const inputData = Object.fromEntries(entries);

    prompt = `Ești asistentul unei platforme de artă românească pentru tineri talentați. Ai următoarele sarcini:

${tasks.join("\n")}

Date existente:
${JSON.stringify(inputData, null, 2)}

Returnează DOAR un JSON valid cu cheile: ${[
      !hasDescRo ? '"descriptionRo"' : null,
      '"descriptionEn"',
      hasStoryRo ? '"storyEn"' : null,
      '"titleEn"',
    ].filter(Boolean).join(", ")}, fără explicații.`;
  } else {
    if (entries.length === 0) return NextResponse.json({ translations: {} });

    prompt = `Ai două sarcini pentru o platformă de artă românească:
1. Pentru cheile care se termină în "Ro": corectează diacriticele române (ă, â, î, ș, ț) și gramatica, păstrând textul original — NU traduce, doar corectează.
2. Pentru cheile care se termină în "En": traduce textul corespunzător din română în engleză, cu ton cald și elevat.

Returnează DOAR un JSON valid cu aceleași chei, fără explicații.

${JSON.stringify(Object.fromEntries(entries), null, 2)}`;
  }

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }

  const jsonMatch = content.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return NextResponse.json({ error: "Invalid response" }, { status: 500 });
  }

  const translations = JSON.parse(jsonMatch[0]);
  return NextResponse.json({ translations });
}

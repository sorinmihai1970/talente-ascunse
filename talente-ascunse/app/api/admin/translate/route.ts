import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: NextRequest) {
  const { texts } = await request.json() as { texts: Record<string, string> };

  const entries = Object.entries(texts).filter(([, v]) => v.trim());
  if (entries.length === 0) {
    return NextResponse.json({ translations: {} });
  }

  const prompt = `Traduce următoarele texte din română în engleză pentru o platformă de artă. Păstrează tonul cald și elevat. Returnează DOAR un JSON valid cu aceleași chei, fără explicații.

${JSON.stringify(Object.fromEntries(entries), null, 2)}`;

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

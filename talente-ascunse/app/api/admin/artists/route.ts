import { NextResponse } from "next/server";
import { artists } from "@/lib/artists";

export async function GET() {
  const emails = artists.map((a) => a.contactEmail);
  return NextResponse.json({ emails });
}

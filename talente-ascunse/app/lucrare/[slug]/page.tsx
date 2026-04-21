"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { t, tr } from "@/lib/translations";
import { getArtworkBySlug } from "@/lib/artworks";

export default function ArtworkPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang } = useLang();

  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        {lang === "ro" ? "Lucrarea nu a fost găsită." : "Artwork not found."}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/galerie"
          className="text-sm text-[#1a9410] hover:underline flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tr(t.artwork.backToGallery, lang)}
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Imagine lucrare */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative bg-gray-100">
            <Image
              src={artwork.image}
              alt={lang === "ro" ? artwork.title : artwork.titleEn}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Detalii */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {lang === "ro" ? artwork.title : artwork.titleEn}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#e0f5e0] text-[#1a9410] text-sm font-medium">
                {lang === "ro" ? artwork.techniqueLabel.ro : artwork.techniqueLabel.en}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                {artwork.locality}, {artwork.county}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                {artwork.artistFirstName}
              </span>
            </div>

            {/* Descriere */}
            <p className="text-gray-600 leading-relaxed">
              {lang === "ro" ? artwork.description.ro : artwork.description.en}
            </p>

            {/* Poveste */}
            {artwork.story && (
              <div className="bg-[#e0f5e0] rounded-2xl p-5">
                <h2 className="font-semibold text-[#1a9410] mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {tr(t.artwork.story, lang)}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  {lang === "ro" ? artwork.story.ro : artwork.story.en}
                </p>
              </div>
            )}

            {/* Sustin artistul */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-gray-700 text-sm">
                {tr(t.artwork.support, lang)}{" "}
                <strong>{artwork.artistFirstName}</strong>
                {tr(t.artwork.supportSuffix, lang)}
              </p>
              <a
                href="mailto:contact@excedo.ro"
                className="mt-2 inline-block text-[#1a9410] font-semibold text-sm hover:underline"
              >
                contact@excedo.ro
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

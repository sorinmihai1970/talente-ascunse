"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { t, tr } from "@/lib/translations";
import { artworks, type Technique } from "@/lib/artworks";
import ArtworkCard from "@/components/ArtworkCard";

type TechFilter = "toate" | Technique;

const techFilters: { key: TechFilter; label: { ro: string; en: string } }[] = [
  { key: "toate", label: t.gallery.filters.all },
  { key: "pictura", label: t.gallery.filters.painting },
  { key: "acuarela", label: t.gallery.filters.watercolor },
  { key: "desen", label: t.gallery.filters.drawing },
  { key: "sculptura", label: t.gallery.filters.sculpture },
];

const uniqueArtists = [...new Set(artworks.map((a) => a.artistFirstName))];

export default function GalleryPage() {
  const { lang } = useLang();
  const [activeTech, setActiveTech] = useState<TechFilter>("toate");
  const [activeArtist, setActiveArtist] = useState<string>("toti");

  const filtered = artworks.filter((a) => {
    const matchTech = activeTech === "toate" || a.technique === activeTech;
    const matchArtist = activeArtist === "toti" || a.artistFirstName === activeArtist;
    return matchTech && matchArtist;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{tr(t.gallery.title, lang)}</h1>
          <p className="text-gray-500 mt-2">{tr(t.gallery.subtitle, lang)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white sticky top-16 z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
          {/* Filtru tehnică */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {techFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveTech(f.key)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                  activeTech === f.key
                    ? "bg-[#1a9410] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-[#e0f5e0] hover:text-[#1a9410]"
                }`}
              >
                {tr(f.label, lang)}
              </button>
            ))}
          </div>
          {/* Filtru artist */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveArtist("toti")}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                activeArtist === "toti"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {lang === "ro" ? "Toți artiștii" : "All artists"}
            </button>
            {uniqueArtists.map((artist) => (
              <button
                key={artist}
                onClick={() => setActiveArtist(artist)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex-shrink-0 ${
                  activeArtist === artist
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {artist}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            {lang === "ro" ? "Nu există lucrări în această categorie." : "No artworks in this category."}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((artwork) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

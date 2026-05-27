"use client";

import Link from "next/link";
import Image from "next/image";
import type { Artwork } from "@/lib/artworks";
import type { Lang } from "@/lib/translations";

interface Props {
  artwork: Artwork;
  lang: Lang;
}

export default function ArtworkCard({ artwork, lang }: Props) {
  return (
    <Link href={`/lucrare/${artwork.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Image
          src={artwork.image}
          alt={lang === "ro" ? artwork.title : artwork.titleEn}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1">
          {lang === "ro" ? artwork.title : artwork.titleEn}
        </h3>
        <p className="text-sm text-gray-500 mb-2">
          {lang === "ro" ? artwork.techniqueLabel.ro : artwork.techniqueLabel.en}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{artwork.artistFirstName}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#e0f5e0] text-[#1a9410]">
            {artwork.locality}
          </span>
        </div>
      </div>
    </Link>
  );
}

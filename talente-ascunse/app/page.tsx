"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { t, tr } from "@/lib/translations";
import { artworks, getFeaturedArtworks, stats } from "@/lib/artworks";
import ArtworkCard from "@/components/ArtworkCard";
import { useState, useEffect } from "react";

function HeroSection() {
  const { lang } = useLang();
  const featured = getFeaturedArtworks();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % featured.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featured.length]);

  const artwork = featured[current];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background image rotativa */}
      <div className="absolute inset-0">
        <Image
          src={artwork.image}
          alt={lang === "ro" ? artwork.title : artwork.titleEn}
          fill
          priority
          className="object-cover opacity-40 transition-opacity duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a9410]/20 border border-[#1a9410]/40 w-fit">
            <div className="w-2 h-2 rounded-full bg-[#1a9410] animate-pulse" />
            <span className="text-[#4ade80] text-xs font-medium">EXCEDO × Talente Ascunse</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {tr(t.hero.title, lang)}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            {tr(t.hero.subtitle, lang)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/galerie"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1a9410] hover:bg-[#157a0d] text-white font-semibold transition-colors"
            >
              {tr(t.hero.cta, lang)}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            {tr(t.hero.nudge, lang)}{" "}
            <Link href="/inscrie" className="text-[#4ade80] hover:underline font-medium">
              {tr(t.hero.nudgeCta, lang)}
            </Link>
          </p>
        </div>

        {/* Featured artwork card */}
        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[480px]">
            <Image
              src={artwork.image}
              alt={lang === "ro" ? artwork.title : artwork.titleEn}
              fill
              className="object-cover"
              sizes="500px"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold text-lg">
                {lang === "ro" ? artwork.title : artwork.titleEn}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-300 text-sm">{artwork.artistFirstName}</span>
                <span className="text-gray-500">·</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a9410]/80 text-white">
                  {artwork.locality}
                </span>
              </div>
            </div>
          </div>
          {/* Dots indicator */}
          <div className="flex gap-2 justify-center mt-4">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#1a9410] w-6" : "bg-gray-600"}`}
                aria-label={`Lucrare ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const { lang } = useLang();

  return (
    <section className="bg-[#1a9410] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold">{stats.artworks}</div>
            <div className="text-green-200 text-sm mt-1">{tr(t.stats.artworks, lang)}</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{stats.localities}</div>
            <div className="text-green-200 text-sm mt-1">{tr(t.stats.localities, lang)}</div>
          </div>
          <div>
            <div className="text-4xl font-bold">{stats.counties}</div>
            <div className="text-green-200 text-sm mt-1">{tr(t.stats.counties, lang)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedGallery() {
  const { lang } = useLang();
  const featured = getFeaturedArtworks();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {lang === "ro" ? "Lucrări în evidență" : "Featured artworks"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {lang === "ro"
                ? "O selecție din galeria noastră"
                : "A selection from our gallery"}
            </p>
          </div>
          <Link
            href="/galerie"
            className="text-sm font-semibold text-[#1a9410] hover:underline flex items-center gap-1"
          >
            {lang === "ro" ? "Vezi toate" : "See all"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const { lang } = useLang();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#e0f5e0] rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {lang === "ro"
              ? "Ai un tânăr artist în familie sau comunitate?"
              : "Do you have a young artist in your family or community?"}
          </h2>
          <p className="text-gray-600 mb-6">
            {lang === "ro"
              ? "Ajută-ne să descoperim talentele ascunse din România rurală. Înscrie o lucrare și facem noi restul."
              : "Help us discover hidden talents from rural Romania. Submit an artwork and we'll do the rest."}
          </p>
          <Link
            href="/inscrie"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a9410] hover:bg-[#157a0d] text-white font-semibold transition-colors"
          >
            {tr(t.nav.submit, lang)}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedGallery />
      <CallToAction />
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { t, tr } from "@/lib/translations";
import { useState } from "react";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/galerie", label: tr(t.nav.gallery, lang) },
    { href: "/despre", label: tr(t.nav.about, lang) },
    { href: "/inscrie", label: tr(t.nav.submit, lang) },
    { href: "/contact", label: tr(t.nav.contact, lang) },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Tagline */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-[#1a9410] flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="EXCEDO"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-300 text-xl font-light hidden sm:block">|</span>
            <span className="text-sm font-semibold text-gray-800 hidden sm:block leading-tight">
              {tr(t.nav.tagline, lang)}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-[#1a9410] transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={toggle}
              className="ml-2 text-xs font-bold px-3 py-1.5 rounded-full border-2 border-[#1a9410] text-[#1a9410] hover:bg-[#1a9410] hover:text-white transition-colors"
            >
              {lang === "ro" ? "EN" : "RO"}
            </button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggle}
              className="text-xs font-bold px-2.5 py-1 rounded-full border-2 border-[#1a9410] text-[#1a9410]"
            >
              {lang === "ro" ? "EN" : "RO"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-[#1a9410] font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

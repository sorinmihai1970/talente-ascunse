"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Acasă" },
  { href: "/despre-mine", label: "Despre mine" },
  { href: "/terapii", label: "Terapii & Servicii" },
  { href: "/cursuri", label: "Cursuri & Webinare" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#2D1B69] sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          <span className="text-[#7C3AED]">Simona</span>{" "}
          <span className="text-white">Popescu</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#a78bfa] ${
                pathname === l.href ? "text-[#a78bfa]" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#5b21b6] transition-colors"
          >
            Programează sesiune
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2D1B69] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium py-1 ${
                pathname === l.href ? "text-[#a78bfa]" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-[#7C3AED] text-white px-4 py-2 rounded-full text-sm font-semibold text-center mt-2"
          >
            Programează sesiune
          </Link>
        </div>
      )}
    </nav>
  );
}

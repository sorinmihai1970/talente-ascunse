'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Despre Noi', href: '#despre' },
  { label: 'Meniu', href: '#meniu' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Rezervare', href: '#rezerva' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => {
    setMenuOpen(false)
    document.body.style.overflow = ''
    const el = document.querySelector(href)
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1A0C06]/97 backdrop-blur-md shadow-lg py-3' : 'py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-playfair text-xl font-semibold text-white tracking-wide">
          <span className="text-[#B8963E] text-sm">✦</span>
          Dulce Élégance
          <span className="text-[#B8963E] text-sm">✦</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10">
          {links.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-white/80 text-xs font-medium tracking-widest uppercase hover:text-[#D4AF72] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#B8963E] scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Meniu">
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#1A0C06] flex flex-col items-center justify-center gap-8 z-40">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-white text-xl font-medium tracking-widest uppercase hover:text-[#D4AF72] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

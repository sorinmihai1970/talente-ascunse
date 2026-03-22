'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'Despre Noi', href: '#despre' },
  { label: 'Meniu', href: '#meniu' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Rezervare', href: '#rezerva' },
  { label: 'Contact', href: '#contact' },
]

const produse = [
  'Torturi la Comandă',
  'Prăjituri & Eclere',
  'Macarons Franțuzești',
  'Băuturi Artizanale',
  'Evenimente Private',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-[#1A0C06] text-[#FAF6EF]/60 pt-20 pb-0">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/6">

          {/* Brand */}
          <div>
            <div className="font-playfair text-xl text-white tracking-[2px] mb-4">
              ✦ Dulce Élégance ✦
            </div>
            <p className="font-cormorant text-base leading-relaxed">
              Cofetărie artizanală cu tradiție din 2009, unde pasiunea pentru detaliu se transformă în fiecare zi în dulciuri de neuitat.
            </p>
          </div>

          {/* Navigare */}
          <div>
            <h5 className="text-[#D4AF72] text-xs font-semibold tracking-[2.5px] uppercase mb-5">Navigare</h5>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#FAF6EF]/55 hover:text-[#D4AF72] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produse */}
          <div>
            <h5 className="text-[#D4AF72] text-xs font-semibold tracking-[2.5px] uppercase mb-5">Produse</h5>
            <ul className="flex flex-col gap-3">
              {produse.map(p => (
                <li key={p}>
                  <a href="#meniu" className="text-sm text-[#FAF6EF]/55 hover:text-[#D4AF72] transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[#D4AF72] text-xs font-semibold tracking-[2.5px] uppercase mb-5">Newsletter</h5>
            <p className="font-cormorant text-base mb-4 leading-relaxed">
              Abonați-vă pentru noutăți, rețete exclusive și oferte speciale.
            </p>
            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email-ul dvs."
                  className="flex-1 px-4 py-2.5 bg-white/7 border border-[#B8963E]/30 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#B8963E] transition-colors"
                />
                <button type="submit"
                  className="px-4 py-2.5 bg-[#B8963E] text-white hover:bg-[#D4AF72] transition-colors text-base">
                  →
                </button>
              </form>
            ) : (
              <p className="text-[#D4AF72] text-sm font-medium">✓ Abonament confirmat!</p>
            )}
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-[#FAF6EF]/35">
          <p>© 2026 Dulce Élégance. Toate drepturile rezervate.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF72] transition-colors">Politica de Confidențialitate</a>
            <a href="#" className="hover:text-[#D4AF72] transition-colors">Termeni & Condiții</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

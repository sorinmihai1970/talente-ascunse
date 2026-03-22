'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=85&fit=crop"
          alt="Tort artizanal elegant"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#D4AF72] text-xs font-medium tracking-[5px] uppercase mb-6"
        >
          — Cofetărie Artizanală din 2009 —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="font-playfair text-[clamp(4rem,10vw,8rem)] font-bold text-white leading-[0.95] mb-7"
        >
          Dulce<br />
          <em className="font-normal text-[#D4AF72]">Élégance</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-cormorant text-[clamp(1rem,2vw,1.4rem)] font-light text-white/85 mb-11 leading-relaxed"
        >
          Unde arta întâlnește dulcele.<br />
          Creații artizanale pentru fiecare moment special din viața voastră.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#meniu"
            className="px-9 py-3.5 bg-[#B8963E] text-white text-xs font-semibold tracking-[2px] uppercase border-2 border-[#B8963E] hover:bg-transparent hover:text-[#B8963E] transition-all duration-300"
          >
            Descoperă Meniul
          </a>
          <a
            href="#despre"
            className="px-9 py-3.5 bg-transparent text-white text-xs font-semibold tracking-[2px] uppercase border-2 border-white/60 hover:bg-white hover:text-[#1A0C06] transition-all duration-300"
          >
            Povestea Noastră
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] tracking-[3px] uppercase">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

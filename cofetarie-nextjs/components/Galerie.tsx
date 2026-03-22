'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: 'https://loremflickr.com/600/800/cake,wedding?lock=50',          alt: 'Torturi Artizanale',  label: 'Torturi Artizanale',  tall: true  },
  { src: 'https://loremflickr.com/600/400/macaron,colorful?lock=51',       alt: 'Macarons',            label: 'Macarons'                         },
  { src: 'https://loremflickr.com/600/400/eclair,pastry?lock=52',          alt: 'Prăjituri & Eclere',  label: 'Prăjituri & Eclere'               },
  { src: 'https://loremflickr.com/900/400/bakery,cafe,interior?lock=53',   alt: 'Sala Noastră',        label: 'Sala Noastră',        wide: true  },
  { src: 'https://loremflickr.com/600/400/dessert,chocolate,elegant?lock=54', alt: 'Detalii & Craft',  label: 'Detalii & Craft'                  },
]

export default function Galerie() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="galerie" className="py-28 bg-[#FAF6EF]">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-8 text-center mb-14">
        <span className="text-[#B8963E] text-xs font-semibold tracking-[4px] uppercase">Imagini din Cofetărie</span>
        <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#1A0C06] leading-tight mt-3">
          Galeria <em className="font-normal text-[#B8963E]">Noastră</em>
        </h2>
        <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mx-auto mt-5" />
      </div>

      {/* Grid */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 grid-rows-2 gap-2 h-[560px] px-2 max-w-7xl mx-auto"
      >
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative overflow-hidden group cursor-pointer
              ${img.tall ? 'row-span-2' : ''}
              ${img.wide ? 'col-span-2' : ''}
            `}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1A0C06]/0 group-hover:bg-[#1A0C06]/40 transition-all duration-300 flex items-end p-6">
              <span className="text-white font-playfair text-xl font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

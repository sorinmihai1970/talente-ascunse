'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const info = [
  { icon: '✦', title: 'Adresă', text: 'Str. Florilor nr. 12\nBucurești, Sector 1' },
  { icon: '✆', title: 'Telefon & Email', text: '+40 721 000 000\ncontact@dulceelegance.ro' },
  { icon: '◷', title: 'Program', text: 'Lun–Vin: 08:00 – 21:00\nSâm–Dum: 09:00 – 22:00' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8963E] text-xs font-semibold tracking-[4px] uppercase">Veniți la Noi</span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#1A0C06] leading-tight mt-3">
            Contact <em className="font-normal text-[#B8963E]">& Locație</em>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {info.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border-l-[3px] border-[#B8963E] px-6 py-5 shadow-sm"
              >
                <span className="text-[#B8963E] text-lg block mb-2">{item.icon}</span>
                <h4 className="font-playfair text-base font-semibold text-[#1A0C06] mb-1">{item.title}</h4>
                <p className="font-cormorant text-base text-[#7A5C44] leading-relaxed whitespace-pre-line">{item.text}</p>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3 pt-2"
            >
              {[['ig', 'Instagram'], ['fb', 'Facebook'], ['tk', 'TikTok']].map(([label, aria]) => (
                <a key={label} href="#" aria-label={aria}
                  className="w-11 h-11 border-[1.5px] border-[#B8963E] text-[#B8963E] text-xs font-bold flex items-center justify-center hover:bg-[#B8963E] hover:text-white transition-all duration-300">
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 min-h-[380px] bg-[#EFE6D5] border-2 border-dashed border-[#D4AF72]/50 flex flex-col items-center justify-center gap-4 text-center p-8"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[#B8963E] text-4xl"
            >
              ✦
            </motion.div>
            <p className="font-playfair text-xl font-semibold text-[#1A0C06]">Dulce Élégance</p>
            <span className="text-sm text-[#7A5C44]">Str. Florilor nr. 12, București, Sector 1</span>
            <a href="#"
              className="mt-2 text-xs font-semibold tracking-[1.5px] uppercase border border-[#B8963E] text-[#B8963E] px-5 py-2 hover:bg-[#B8963E] hover:text-white transition-all duration-300">
              Deschide în Google Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

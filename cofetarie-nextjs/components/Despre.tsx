'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const stats = [
  { nr: '8.500+', label: 'Clienți fericiți' },
  { nr: '180+',   label: 'Rețete unice' },
  { nr: '100%',   label: 'Natural & artizanal' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Despre() {
  return (
    <section id="despre" className="py-28 bg-[#FAF6EF]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Imagini */}
          <FadeUp>
            <div className="relative pb-20 pr-4">
              {/* Imagine principală */}
              <div className="w-4/5 aspect-[4/5] overflow-hidden shadow-2xl">
                <Image
                  src="https://loremflickr.com/600/750/cake,patisserie?lock=102"
                  alt="Cofetăria noastră"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Imagine secundară */}
              <div className="absolute bottom-0 right-0 w-[42%] aspect-square overflow-hidden shadow-2xl border-4 border-[#FAF6EF]">
                <Image
                  src="https://loremflickr.com/400/400/macaron,french?lock=205"
                  alt="Macarons artizanale"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-[#B8963E] text-white px-4 py-3 text-center">
                  <span className="block font-playfair text-2xl font-bold leading-none">15+</span>
                  <span className="block text-[10px] font-medium tracking-wider uppercase mt-1 leading-tight">Ani de<br />pasiune</span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <div className="pt-4">
            <FadeUp delay={0.1}>
              <span className="text-[#B8963E] text-xs font-semibold tracking-[4px] uppercase">Povestea Noastră</span>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#1A0C06] leading-tight mt-3 mb-5">
                Artă în fiecare<br />
                <em className="font-normal text-[#B8963E]">detaliu dulce</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mb-6" />
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-cormorant text-lg text-[#7A5C44] leading-relaxed mb-5">
                Născuți din pasiunea pentru patiseria franceză clasică, am deschis în 2009 un loc în care tradiția și rafinamentul contemporan se regăsesc în fiecare produs. Folosim doar ingrediente naturale, selectate de la furnizori de încredere, pentru ca fiecare mușcătură să fie o revelație.
              </p>
              <p className="font-cormorant text-lg text-[#7A5C44] leading-relaxed">
                Cofetarii noștri, formați în școli renumite din Paris și Bruxelles, transformă zilnic cele mai fine ingrediente în mici opere de artă. Credem că un tort bun nu se uită niciodată — el devine parte din amintirile voastre cele mai prețioase.
              </p>
            </FadeUp>

            {/* Statistici */}
            <FadeUp delay={0.4}>
              <div className="flex gap-8 my-10 py-8 border-t border-b border-[#EFE6D5]">
                {stats.map((s) => (
                  <div key={s.label} className="text-center flex-1">
                    <span className="block font-playfair text-3xl font-bold text-[#B8963E]">{s.nr}</span>
                    <span className="block text-[11px] font-medium tracking-wider uppercase text-[#7A5C44] mt-2">{s.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <a
                href="#meniu"
                className="inline-block px-9 py-3.5 bg-[#B8963E] text-white text-xs font-semibold tracking-[2px] uppercase border-2 border-[#B8963E] hover:bg-transparent hover:text-[#B8963E] transition-all duration-300"
              >
                Explorează Meniul
              </a>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}

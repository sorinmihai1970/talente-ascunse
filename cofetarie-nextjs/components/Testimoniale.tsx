'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const reviews = [
  {
    text: 'Am comandat tortul pentru nunta noastră și a fost o adevărată operă de artă. Toți invitații au fotografiat înainte să taie — era prea frumos să mănânci. Gustul a fost pe măsura aspectului: divin.',
    name: 'Elena & Mihai Popescu',
    role: 'Nuntă — Iunie 2025',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    text: 'Vin în fiecare sâmbătă dimineață pentru un cappuccino și un ecler cu vanilie. E ritualul meu perfect de weekend. Personalul te primește mereu cu un zâmbet cald, ca acasă.',
    name: 'Andrei Mihalache',
    role: 'Client fidel — 4 ani',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    text: 'Macarons-urile lor sunt cele mai autentice pe care le-am gustat în afara Parisului. Cojile perfecte, umplutura generoasă, aromele intense. Am cumpărat o cutie de 24 și nu au ajuns acasă întregi.',
    name: 'Ioana Stănescu',
    role: 'Client fidel — 3 ani',
    avatar: 'https://i.pravatar.cc/80?img=9',
  },
  {
    text: 'Am rezervat masa pentru ziua de naștere a soției și au decorat totul cu flori și lumânări fără să cer. Au adus un macaron cu lumânuță aprinsă. Detalii care fac diferența. Revenim cu siguranță.',
    name: 'Cristian Dumitrescu',
    role: 'Client — Aniversare',
    avatar: 'https://i.pravatar.cc/80?img=15',
  },
]

export default function Testimoniale() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent(i => (i - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent(i => (i + 1) % reviews.length)

  return (
    <section className="py-28 bg-[#EFE6D5]">
      <div className="max-w-6xl mx-auto px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#B8963E] text-xs font-semibold tracking-[4px] uppercase">Ce Spun Clienții</span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#1A0C06] leading-tight mt-3">
            Impresii <em className="font-normal text-[#B8963E]">& Recenzii</em>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mx-auto mt-5" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[0, 1, 2].map(offset => {
                  const review = reviews[(current + offset) % reviews.length]
                  return (
                    <div key={offset} className="bg-[#FAF6EF] p-8 shadow-sm">
                      <div className="text-[#B8963E] text-base tracking-widest mb-5">★★★★★</div>
                      <p className="font-cormorant text-lg italic text-[#3A2211] leading-relaxed mb-7">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                          <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                        </div>
                        <div>
                          <strong className="block text-sm font-semibold text-[#1A0C06]">{review.name}</strong>
                          <span className="text-xs text-[#7A5C44] tracking-wide uppercase">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev}
              className="w-11 h-11 border-[1.5px] border-[#B8963E] text-[#B8963E] hover:bg-[#B8963E] hover:text-white transition-all duration-300 flex items-center justify-center text-lg">
              ←
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full border border-[#B8963E] transition-all ${i === current ? 'bg-[#B8963E]' : 'bg-transparent'}`}
                />
              ))}
            </div>
            <button onClick={next}
              className="w-11 h-11 border-[1.5px] border-[#B8963E] text-[#B8963E] hover:bg-[#B8963E] hover:text-white transition-all duration-300 flex items-center justify-center text-lg">
              →
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

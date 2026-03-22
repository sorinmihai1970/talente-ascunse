'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Rezervare() {
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rezerva" className="relative py-28 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://loremflickr.com/1600/900/bakery,cafe,elegant?lock=60"
          alt="Ambient cofetărie"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Text stânga */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pt-4"
          >
            <span className="text-[#B8963E] text-xs font-semibold tracking-[4px] uppercase">Vă Așteptăm</span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#FAF6EF] leading-tight mt-3 mb-5">
              Rezervați<br />
              <em className="font-normal text-[#D4AF72]">O Masă</em>
            </h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mb-7" />
            <p className="font-cormorant text-lg text-[#FAF6EF]/75 leading-relaxed mb-10">
              Oferiți-vă un moment de răsfăț autentic într-un cadru elegant și liniștit. Echipa noastră va pregăti pentru voi o experiență senzorială completă — de la primul cappuccino până la ultimul macaron.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: '◷', title: 'Program', text: 'Luni – Vineri: 08:00 – 21:00\nSâmbătă – Duminică: 09:00 – 22:00' },
                { icon: '✆', title: 'Rezervări telefonice', text: '+40 721 000 000' },
                { icon: '✉', title: 'Email', text: 'rezervari@dulceelegance.ro' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-[#B8963E] text-xl w-8 shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <strong className="block text-[#FAF6EF] text-xs font-semibold tracking-[2px] uppercase mb-1">{item.title}</strong>
                    <span className="font-cormorant text-[#FAF6EF]/65 text-base leading-relaxed whitespace-pre-line">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formular dreapta */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative bg-[#FAF6EF] p-10"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 className="font-playfair text-2xl font-semibold text-[#1A0C06] mb-7">Completați formularul</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Nume complet</label>
                    <input type="text" placeholder="ex: Maria Ionescu" required
                      className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Telefon</label>
                    <input type="tel" placeholder="+40 7xx xxx xxx" required
                      className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Data dorită</label>
                    <input type="date" required
                      className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Ora dorită</label>
                    <input type="time" min="08:00" max="21:30" required
                      className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Număr persoane</label>
                    <select className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors appearance-none">
                      {['1 persoană','2 persoane','3–4 persoane','5–6 persoane','7+ persoane'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Ocazie specială</label>
                    <select className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors appearance-none">
                      {['Fără ocazie specială','Aniversare de cuplu','Zi de naștere','Întâlnire romantică','Petrecere privată','Altele'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-6">
                  <label className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[#7A5C44]">Mențiuni & preferințe</label>
                  <textarea rows={3} placeholder="Alergii alimentare, preferințe de masă, mesaj special..."
                    className="px-4 py-3 border-[1.5px] border-[#EFE6D5] bg-white text-[#3A2211] text-sm focus:border-[#B8963E] outline-none transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="w-full py-4 bg-[#B8963E] text-white text-xs font-semibold tracking-[2px] uppercase border-2 border-[#B8963E] hover:bg-transparent hover:text-[#B8963E] transition-all duration-300">
                  Rezervă Acum
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#B8963E] text-white text-2xl flex items-center justify-center">✓</div>
                <h3 className="font-playfair text-2xl font-semibold text-[#1A0C06]">Rezervare Confirmată!</h3>
                <p className="font-cormorant text-lg text-[#7A5C44]">Vă mulțumim! Unul dintre colegii noștri vă va contacta în cel mai scurt timp.</p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

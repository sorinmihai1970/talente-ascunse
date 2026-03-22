'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const tabs = ['Torturi', 'Prăjituri', 'Macarons', 'Băuturi'] as const
type Tab = typeof tabs[number]

const menuData: Record<Tab, {
  img: string
  tag?: string
  name: string
  desc: string
  price: string
}[]> = {
  Torturi: [
    { img: 'https://loremflickr.com/400/300/cake,strawberry?lock=10', tag: 'Bestseller', name: 'Tort Fraisier', desc: 'Cremă diplomată ușoară ca un nor, căpșuni de grădină la maturitate perfectă, pandișpan delicat cu vanilie Bourbon', price: 'de la 180 lei' },
    { img: 'https://loremflickr.com/400/300/chocolate,cake?lock=11', tag: 'Clasic', name: 'Tort Opéra', desc: 'Straturi fine de blat Joconde înmuiat în cafea de specialitate, cremă ganache neagră și mousse aromat', price: 'de la 200 lei' },
    { img: 'https://loremflickr.com/400/300/entremet,raspberry?lock=12', name: 'Entremet Zmeură', desc: 'Mousse aerian de zmeură proaspătă, insert de coulis intens, învelit în oglinda roz a eleganței perfecte', price: 'de la 220 lei' },
    { img: 'https://loremflickr.com/400/300/dark,chocolate,dessert?lock=13', tag: 'Nou', name: 'Noir Intensité', desc: 'Forța ciocolatei Valrhona 70%, temperată de praliné crocant de alune și crunch feuilletine', price: 'de la 210 lei' },
  ],
  Prăjituri: [
    { img: 'https://loremflickr.com/400/300/eclair,pastry?lock=20', tag: 'Clasic', name: 'Ecler Vanilie Bourbon', desc: 'Pâte à choux auriu și crocant, umplut cu cremă patisieră de vanilie Bourbon, acoperit cu fondant lustruit', price: '18 lei' },
    { img: 'https://loremflickr.com/400/300/millefeuille,puff?lock=21', tag: 'Bestseller', name: 'Mille-Feuille', desc: 'O mie de foi de foietaj caramelizat, cremă diplomat catifelată, căpșuni proaspete de sezon', price: '22 lei' },
    { img: 'https://loremflickr.com/400/300/lemon,tart?lock=22', name: 'Tarte au Citron', desc: 'Lemon curd vibrant și catifelat, meringue italiană flambată la minut, pe un sablé breton perfect', price: '20 lei' },
    { img: 'https://loremflickr.com/400/300/choux,cream,pastry?lock=23', tag: 'Nou', name: 'Paris-Brest', desc: 'Coroana de pâte à choux crocantă, umplută cu cremă praliné de alune și ganache moale', price: '25 lei' },
  ],
  Macarons: [
    { img: 'https://loremflickr.com/400/300/macaron,raspberry?lock=30', name: 'Macaron Framboise', desc: 'Coji fine din migdale măcinate, umplute cu ganache de zmeură proaspătă — dulce și acid în echilibru perfect', price: '8 lei / buc' },
    { img: 'https://loremflickr.com/400/300/macaron,vanilla?lock=31', tag: 'Bestseller', name: 'Macaron Vanille', desc: 'Coji delicate cu aromă de vanilie Bourbon, ganache cremos de crème brûlée — delicat și de neuitat', price: '8 lei / buc' },
    { img: 'https://loremflickr.com/400/300/macaron,caramel?lock=32', tag: 'Favorit', name: 'Salted Caramel', desc: 'Coji aurii de caramel, inimă de ganache caramel cu fleur de sel breton — contrastul care cucerește', price: '8 lei / buc' },
    { img: 'https://loremflickr.com/400/300/macaron,pistachio?lock=33', name: 'Macaron Pistache', desc: 'Coji cu fistic sicilian DOP, cremă intensă de ganache pistacio — un gust nobil pentru un palat rafinat', price: '9 lei / buc' },
  ],
  Băuturi: [
    { img: 'https://loremflickr.com/400/300/cappuccino,coffee?lock=40', name: 'Cappuccino Artizanal', desc: 'Espresso single origin Ethiopia, lapte spumat la temperatura perfectă, cu latte art desenat cu grijă', price: '18 lei' },
    { img: 'https://loremflickr.com/400/300/tea,elegant,cup?lock=41', tag: 'Cald', name: 'Ceai Earl Grey Royal', desc: 'Ceai bergamot premium Mariage Frères, lapte de ovăz cald și miere de tei din Apuseni', price: '14 lei' },
    { img: 'https://loremflickr.com/400/300/hot,chocolate,mug?lock=42', tag: 'Favorit', name: 'Chocolat Chaud', desc: 'Ciocolată Valrhona 66% topită lent, frișcă naturală bătută la minut, pudră de cacao neagră', price: '20 lei' },
    { img: 'https://loremflickr.com/400/300/lemonade,rose,drink?lock=43', name: 'Limonadă Rosé', desc: 'Lămâie stoarsă la minut, sirop de petale de trandafir, Perrier, mentă proaspătă și gheață cu lavandă', price: '15 lei' },
  ],
}

export default function Meniu() {
  const [activeTab, setActiveTab] = useState<Tab>('Torturi')

  return (
    <section id="meniu" className="py-28 bg-[#1A0C06]">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#B8963E] text-xs font-semibold tracking-[4px] uppercase">Creațiile Noastre</span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-[#FAF6EF] leading-tight mt-3">
            Meniul <em className="font-normal text-[#D4AF72]">Nostru</em>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#B8963E] to-transparent mx-auto mt-5" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 flex-wrap mb-14">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-xs font-semibold tracking-[2px] uppercase border transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#B8963E] border-[#B8963E] text-white'
                  : 'bg-transparent border-[#B8963E]/30 text-[#FAF6EF]/50 hover:border-[#B8963E] hover:text-[#D4AF72]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {menuData[activeTab].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white/4 border border-[#B8963E]/15 hover:border-[#B8963E]/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Imagine */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  {item.tag && (
                    <span className="absolute top-3 left-3 bg-[#B8963E] text-white text-[10px] font-semibold tracking-[1.5px] uppercase px-2.5 py-1">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-semibold text-[#FAF6EF] mb-2">{item.name}</h3>
                  <p className="text-[#FAF6EF]/50 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-[#D4AF72] font-semibold">{item.price}</span>
                    <a
                      href="#rezerva"
                      className="text-[11px] font-semibold tracking-[1.5px] uppercase border border-[#B8963E] text-[#B8963E] px-4 py-1.5 hover:bg-[#B8963E] hover:text-white transition-all duration-300"
                    >
                      Comandă
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

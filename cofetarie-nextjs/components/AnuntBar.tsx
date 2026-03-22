'use client'

const items = [
  '✦ Torturi la comandă',
  '✦ Prăjituri artizanale',
  '✦ Macarons franțuzești',
  '✦ Livrare la domiciliu',
  '✦ Evenimente & aniversări',
  '✦ Ingrediente 100% naturale',
]

export default function AnuntBar() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-[#1A0C06] py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-[#D4AF72] text-xs font-medium tracking-[2px] uppercase mx-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

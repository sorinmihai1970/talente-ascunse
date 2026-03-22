import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Dulce Élégance — Cofetărie Artizanală',
  description: 'Cofetărie artizanală cu tradiție din 2009. Torturi, prăjituri, macarons franțuzești și băuturi fine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} font-montserrat bg-[#FAF6EF] text-[#3A2211] antialiased`}>
        {children}
      </body>
    </html>
  )
}

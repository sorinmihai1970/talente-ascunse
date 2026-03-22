import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AnuntBar from '@/components/AnuntBar'
import Despre from '@/components/Despre'
import Meniu from '@/components/Meniu'
import Galerie from '@/components/Galerie'
import Rezervare from '@/components/Rezervare'
import Testimoniale from '@/components/Testimoniale'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnuntBar />
      <Despre />
      <Meniu />
      <Galerie />
      <Rezervare />
      <Testimoniale />
      <Contact />
      <Footer />
    </main>
  )
}

import Header from '@/components/Header'
import Hero from '@/components/Hero'
// import MainServices from '@/components/MainServices' // Comentado temporariamente
import Brands from '@/components/Brands'
import Differentials from '@/components/Differentials'
import About from '@/components/About'
import Services from '@/components/Services'
import Technology from '@/components/Technology'
import Scanners from '@/components/Scanners'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <About />
      {/* <MainServices /> */} {/* Comentado temporariamente */}
      <Differentials />
      <Services />
      <Technology />
      <Scanners />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
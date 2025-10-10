'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brands = [
  { name: 'BMW', logo: '/images/logos/bmw-logo.png' },
  { name: 'Jeep', logo: '/images/logos/jeep-logo.png' },
  { name: 'Mercedes-Benz', logo: '/images/logos/mercedes-logo.png' },
  { name: 'Volvo', logo: '/images/logos/volvo-logo.png' },
  { name: 'BYD', logo: '/images/logos/byd-logo.png' },
  { name: 'Subaru', logo: '/images/logos/subaru-logo.png' },
  { name: 'Mitsubishi', logo: '/images/logos/mitsubishi-logo.png' },
  { name: 'Ferrari', logo: '/images/logos/ferrari-logo.png' },
  { name: 'Audi', logo: '/images/logos/audi-logo.png' },
  { name: 'Land Rover', logo: '/images/logos/land-rover-logo.png' },
  { name: 'Chevrolet', logo: '/images/logos/chevrolet-logo.png' },
  { name: 'GWM', logo: '/images/logos/gwm-logo.png' },
  { name: 'Porsche', logo: '/images/logos/porsche-logo.png' },
]

export default function Brands() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false }),
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: true,
      containScroll: 'trimSnaps',
    },
    [autoplay]
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => autoplay.play())
  }, [emblaApi, autoplay])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Duplicar os slides para loop infinito suave
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-4 bg-black">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Carrossel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="shrink-0 basis-[150px] md:basis-[200px] px-3"
                >
                  <div className="flex justify-center items-center h-20">
                    <Image
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      width={120}
                      height={75}
                      className="max-h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-neutral-800/60 hover:bg-neutral-700/80 text-neutral-400 hover:text-white p-2 rounded-full transition-all duration-300 z-10"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-neutral-800/60 hover:bg-neutral-700/80 text-neutral-400 hover:text-white p-2 rounded-full transition-all duration-300 z-10"
            onClick={scrollNext}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
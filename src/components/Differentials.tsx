'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const differentials = [
  {
    title: 'EQUIPAMENTOS DE ALTA TECNOLOGIA EMBARCADA',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
  },
  {
    title: 'AGILIDADE NO DIAGNÓSTICO',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
  },
  {
    title: 'EXCELÊNCIA NO ATENDIMENTO E FOLLOW-UP COM O CLIENTE',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
  },
  {
    title: 'EQUIPE DEDICADA PARA ORÇAMENTOS',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  },
  {
    title: '*TABELAS DE PREÇOS DIFERENCIADA PARA FROTISTA',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    title: '*MOBILIZAÇÃO E DESMOBILIZAÇÃO DE FROTA',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
  },
]

export default function Differentials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Duplicar os slides para loop infinito suave
  const duplicatedDifferentials = [...differentials, ...differentials]

  return (
    <section id="diferenciais" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Nossos Diferenciais
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            O que nos torna referência em serviços automotivos no Vale do Paraíba
          </p>
        </div>

        <div className="relative">
          {/* Carrossel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {duplicatedDifferentials.map((differential, index) => (
                <div
                  key={`differential-${index}`}
                  className="flex-[0_0_auto] w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div className="relative h-96 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Imagem de fundo */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${differential.image})` }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Conteúdo */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {differential.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            onClick={scrollNext}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Observação */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 italic">
            *Serviço encontrado apenas na Loja Varga Serviços SJC
          </p>
        </div>
      </div>
    </section>
  )
}

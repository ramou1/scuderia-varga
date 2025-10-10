'use client'

import { useCallback, useEffect, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const differentials = [
  {
    title: 'EQUIPAMENTOS DE ALTA TECNOLOGIA EMBARCADA',
    image: '/images/diferenciais/equipamentos-alta-tecnologia.png',
  },
  {
    title: 'AGILIDADE NO DIAGNÓSTICO',
    image: '/images/diferenciais/agilidade-diagnostico.jpeg',
  },
  {
    title: 'EXCELÊNCIA NO ATENDIMENTO E FOLLOW-UP COM O CLIENTE',
    image: '/images/diferenciais/excelencia-atendimento.jpeg',
  },
  {
    title: 'EQUIPE DEDICADA PARA ORÇAMENTOS',
    image: '/images/diferenciais/equipe-dedicada.jpeg',
  },
  {
    title: '*TABELAS DE PREÇOS DIFERENCIADA PARA FROTISTA',
    image: '/images/diferenciais/tabela-frotistas.jpeg',
  },
  {
    title: '*MOBILIZAÇÃO E DESMOBILIZAÇÃO DE FROTA',
    image: '/images/diferenciais/mobilizacao-frotas.jpeg',
  },
]

export default function Differentials() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false }),
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
  const duplicatedDifferentials = [...differentials, ...differentials]

  return (
    <section id="diferenciais" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Nossos Diferenciais
          </h2>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto">
            O que nos torna referência em serviços automotivos no Vale do Paraíba
          </p>
        </div>

        <div className="relative">
          {/* Carrossel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {duplicatedDifferentials.map((differential, index) => (
                <div
                  key={`differential-${index}`}
                  className="shrink-0 basis-full md:basis-1/2 lg:basis-1/4 px-3"
                >
                  <div className="relative h-96 rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300">
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
          <p className="text-sm text-neutral-300 italic">
            *Serviço encontrado apenas na Loja Varga Serviços SJC
          </p>
        </div>
      </div>
    </section>
  )
}

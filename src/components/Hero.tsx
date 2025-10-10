'use client'

import Image from 'next/image'

export default function Hero() {

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video - YouTube */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Vídeo do YouTube - Ajustado para mostrar parte inferior */}
        <iframe
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/HSLzQvu4InA?autoplay=1&mute=1&loop=1&playlist=HSLzQvu4InA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&start=0"
          title="Scuderia Varga Video"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          style={{
            width: '177.77777778vh',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '100%',
            top: '-10%', // Ajuste para mostrar mais da parte inferior
            border: 'none',
          }}
        />
        
        {/* Overlay escuro suave */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Seção informativa sobreposta */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-2 py-2 md:py-3">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-4 text-white">
            
            {/* Logo Principal - Sobrepondo o container */}
            <div className="flex items-center">
              <div className="relative -ml-6 -mt-2">
                <Image
                  src="/images/icone.png"
                  alt="Scuderia Varga"
                  width={100}
                  height={100}
                  className="relative z-10"
                />
              </div>
            </div>

            {/* Três Endereços */}
            <div className="flex-1 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-sm font-medium">Avenida Andrômeda 2410</div>
                <div className="text-xs text-gray-300">Jardim Satélite - SJC</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-sm font-medium">Rua Maria de Lourdes Coutinho 100</div>
                <div className="text-xs text-gray-300">Vila Adyana - SJC</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-sm font-medium">Avenida Cassiano Ricardo 204</div>
                <div className="text-xs text-gray-300">Vila Adyana - SJC</div>
              </div>
            </div>

            {/* Contato e Redes Sociais */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium">@scuderiavarga</div>
                <div className="text-xs text-gray-300">WhatsApp: 12 99601-1497</div>
              </div>
            </div>

            {/* Logo BY Varga - Menor */}
            <div className="flex items-center">
              <Image
                src="/images/by-varga.png"
                alt="By Varga"
                width={60}
                height={40}
                className="opacity-90"
              />
            </div>

          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-3 text-white">
            {/* Primeira linha - Logo principal e BY Varga */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="/images/icone.png"
                  alt="Scuderia Varga"
                  width={50}
                  height={50}
                />
              </div>
              
              <div className="flex items-center">
                <Image
                  src="/images/by-varga.png"
                  alt="By Varga"
                  width={40}
                  height={30}
                  className="opacity-90"
                />
              </div>
            </div>

            {/* Segunda linha - Endereços */}
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-xs font-medium">Avenida Andrômeda 2410 - Jardim Satélite</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium">Rua Maria de Lourdes Coutinho 100 - Vila Adyana</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium">Avenida Cassiano Ricardo 204 - Vila Adyana</div>
              </div>
            </div>

            {/* Terceira linha - Contato */}
            <div className="text-center">
              <div className="text-xs font-medium">@scuderiavarga</div>
              <div className="text-xs text-gray-300">WhatsApp: 12 99601-1497</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
'use client'

import Image from 'next/image'

export default function Hero() {

  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
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

    </section>
  )
}
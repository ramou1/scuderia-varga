'use client'

export default function Hero() {

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video - YouTube */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Vídeo do YouTube */}
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/HSLzQvu4InA?autoplay=1&mute=1&loop=1&playlist=HSLzQvu4InA&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&start=0"
          title="Scuderia Varga Video"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          style={{
            width: '177.77777778vh',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '100%',
            border: 'none',
          }}
        />
        
        {/* Overlay escuro suave */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Vídeo local comentado (caso queira usar no futuro) */}
        {/* 
        <Image
          src="/images/cover-youtube.png"
          alt="Scuderia Varga"
          fill
          className="object-cover"
          priority
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source src="/videos/institucional.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
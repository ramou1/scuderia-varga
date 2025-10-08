'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const scanners = [
  {
    name: 'X431 PRO SE LAUNCH',
    image: '/images/scanners/scanner01.png'
  },
  {
    name: 'SUN PDL8100',
    image: '/images/scanners/scanner02.png'
  },
  {
    name: 'KTS 590',
    image: '/images/scanners/scanner03.png'
  },
  {
    name: 'MULTIMEC IK2115',
    image: '/images/scanners/scanner04.png'
  }
]

export default function Scanners() {
  return (
    <section id="scanners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 uppercase">
            Alta Tecnologia em Scanners
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            PARA ATENDER TODAS AS MARCAS E MODELOS
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-3xl mx-auto">
            Possuímos os mais tecnológicos scanners do mercado, homologados pelas montadoras, 
            atendendo assim todas as marcas e modelos de carros
          </p>
        </motion.div>

        {/* Scanner Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {scanners.map((scanner, index) => {
            return (
              <motion.div
                key={scanner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                {/* Imagem do Scanner */}
                <div className="relative h-48 bg-white">
                  <Image
                    src={scanner.image}
                    alt={scanner.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                {/* Título */}
                <div className="p-4 text-center bg-gray-50">
                  <h3 className="text-base font-bold text-gray-800 uppercase">
                    {scanner.name}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Launch Pad 7 Highlight */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-neutral-800 text-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Imagem */}
              <div className="relative h-64 md:h-full">
                <Image
                  src="/images/scanners/scanner05.png"
                  alt="Scanner Launch Pad 7"
                  fill
                  className="object-contain p-4 md:p-8"
                />
              </div>
              
              {/* Conteúdo */}
              <div className="p-6 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
                  Scanner Launch Pad 7
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  O Scanner Launch PAD 7 foi desenvolvido para efetuar diagnósticos precisos e eficientes em sistemas eletrônicos, 
                  combinando tecnologia avançada e facilidade de uso, essencial para otimizar o serviço.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

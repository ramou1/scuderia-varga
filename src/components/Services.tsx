'use client'

import { motion } from 'framer-motion'
import { Wrench, Settings, Car, Gauge, Droplets, Shield, Zap, Filter } from 'lucide-react'

const services = [
  { icon: Settings, title: 'Alinhamento' },
  { icon: Wrench, title: 'Análise de Pré Compra' },
  { icon: Gauge, title: 'Ar Condicionado' },
  { icon: Zap, title: 'Balanceamento' },
  { icon: Car, title: 'Câmbio' },
  { icon: Shield, title: 'Direção' },
  { icon: Zap, title: 'Elétrica' },
  { icon: Filter, title: 'Filtros' },
  { icon: Shield, title: 'Freios' },
  { icon: Settings, title: 'Injeção Eletrônica' },
  { icon: Droplets, title: 'Lubrificantes' },
  { icon: Wrench, title: 'Mecânica Geral' },
  { icon: Car, title: 'Martelinho de Ouro' },
  { icon: Gauge, title: 'Pneus' },
  { icon: Droplets, title: 'Sistema de Arrefecimento' },
  { icon: Shield, title: 'Suspensão' },
  { icon: Settings, title: 'Revisão de Blindagem' }
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl font-bold text-white max-w-5xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços automotivos com tecnologia de ponta e equipe especializada
          </p>
        </motion.div>

        {/* Detailed Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center gap-4"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white uppercase">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
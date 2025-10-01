'use client'

import { motion } from 'framer-motion'
import { 
  Wind, 
  Target, 
  Sparkles, 
  Gauge, 
  Circle, 
  Wrench, 
  Droplets, 
  Settings, 
  Shield, 
  Zap 
} from 'lucide-react'

const mainServices = [
  { name: 'DIAGNÓSTICO COMPUTADORIZADO', icon: Settings },
  { name: 'AR CONDICIONADO', icon: Wind },
  { name: 'ALINHAMENTO 3D', icon: Target },
  { name: 'OXISANITIZAÇÃO', icon: Sparkles },
  { name: 'BALANCEAMENTO COMPUTADORIZADO', icon: Gauge },
  { name: 'PNEUS', icon: Circle },
  { name: 'SUSPENSÃO', icon: Wrench },
  { name: 'TROCA DE ÓLEO', icon: Droplets },
  { name: 'FLUÍDO DE CÂMBIO AUTOMÁTICO', icon: Settings },
  { name: 'FREIOS', icon: Shield },
  { name: 'INJEÇÃO ELETRÔNICA', icon: Zap },
]

export default function MainServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
            Serviços Principais
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos com tecnologia de ponta
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mainServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm uppercase leading-tight">
                    {service.name}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Wrench, Settings, Car, Gauge, Droplets, Shield, Zap, Filter } from 'lucide-react'

const services = [
  {
    icon: Settings,
    title: 'Alinhamento',
    description: 'Alinhamento 3D com tecnologia de ponta para máxima precisão'
  },
  {
    icon: Wrench,
    title: 'Análise de Pré Compra',
    description: 'Avaliação completa antes da aquisição do veículo'
  },
  {
    icon: Gauge,
    title: 'Ar Condicionado',
    description: 'Manutenção e reparo completo do sistema de ar condicionado'
  },
  {
    icon: Zap,
    title: 'Balanceamento',
    description: 'Balanceamento computadorizado com equipamentos de última geração'
  },
  {
    icon: Car,
    title: 'Câmbio',
    description: 'Manutenção e reparo de sistemas de transmissão'
  },
  {
    icon: Shield,
    title: 'Direção',
    description: 'Diagnóstico e reparo do sistema de direção'
  },
  {
    icon: Zap,
    title: 'Elétrica',
    description: 'Diagnóstico e reparo de sistemas elétricos'
  },
  {
    icon: Filter,
    title: 'Filtros',
    description: 'Troca de filtros de ar, óleo, combustível e ar condicionado'
  },
  {
    icon: Shield,
    title: 'Freios',
    description: 'Sistema completo de freios com segurança garantida'
  },
  {
    icon: Settings,
    title: 'Injeção Eletrônica',
    description: 'Diagnóstico e reparo de sistemas de injeção'
  },
  {
    icon: Droplets,
    title: 'Lubrificantes',
    description: 'Troca de óleo e fluidos com produtos de qualidade'
  },
  {
    icon: Wrench,
    title: 'Mecânica Geral',
    description: 'Serviços gerais de manutenção preventiva e corretiva'
  },
  {
    icon: Car,
    title: 'Martelinho de Ouro',
    description: 'Reparo de amassados sem pintura'
  },
  {
    icon: Gauge,
    title: 'Pneus',
    description: 'Venda e montagem de pneus de todas as marcas'
  },
  {
    icon: Droplets,
    title: 'Sistema de Arrefecimento',
    description: 'Manutenção completa do sistema de arrefecimento'
  },
  {
    icon: Shield,
    title: 'Suspensão',
    description: 'Diagnóstico e reparo de sistemas de suspensão'
  },
  {
    icon: Settings,
    title: 'Revisão de Blindagem',
    description: 'Manutenção especializada em veículos blindados'
  }
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
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
            TODOS OS SERVIÇOS
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex gap-4"
              >
                <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 bg-red-600 text-white rounded-lg">
                  <Icon className="w-6 h-6 mt-3" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
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
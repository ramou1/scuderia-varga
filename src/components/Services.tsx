'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Wrench, Settings, Car, Gauge, Droplets, Shield, Zap, Filter } from 'lucide-react'
import ServiceModal from './ServiceModal'

const services = [
  { 
    icon: Settings, 
    title: 'Alinhamento',
    subtitle: 'Precisão milimétrica para o seu veículo.',
    description: 'Tecnologia 3D de última geração que garante alinhamento perfeito, melhor dirigibilidade e economia de pneus.'
  },
  { 
    icon: Wrench, 
    title: 'Análise de Pré Compra',
    subtitle: '',
    description: ''
  },
  { 
    icon: Gauge, 
    title: 'Ar Condicionado',
    subtitle: 'Conforto o ano inteiro.',
    description: 'Revisão completa do sistema de ar, incluindo filtro, gás e componentes. Ar puro e climatização eficiente, sempre.'
  },
  { 
    icon: Zap, 
    title: 'Balanceamento',
    subtitle: 'Estabilidade e conforto na direção.',
    description: 'Equipamento moderno para um balanceamento preciso, que reduz vibrações e prolonga a vida útil dos pneus.'
  },
  { 
    icon: Car, 
    title: 'Câmbio',
    subtitle: 'Cuide da saúde do seu câmbio.',
    description: 'Utilizamos fluido adequado para cada modelo. Serviço técnico que garante trocas limpas, seguras e no tempo certo.'
  },
  { 
    icon: Shield, 
    title: 'Direção',
    subtitle: '',
    description: ''
  },
  { 
    icon: Zap, 
    title: 'Elétrica',
    subtitle: '',
    description: ''
  },
  { 
    icon: Filter, 
    title: 'Filtros',
    subtitle: '',
    description: ''
  },
  { 
    icon: Shield, 
    title: 'Freios',
    subtitle: 'Confiança em cada frenagem.',
    description: 'Revisão detalhada com componentes de alta qualidade. Segurança máxima para você e sua família.'
  },
  { 
    icon: Settings, 
    title: 'Injeção Eletrônica',
    subtitle: 'Eficiência e economia com tecnologia.',
    description: 'Diagnóstico preciso e regulagem do sistema de injeção. Menor consumo, melhor desempenho e menor emissão de poluentes.'
  },
  { 
    icon: Droplets, 
    title: 'Lubrificantes',
    subtitle: '',
    description: ''
  },
  { 
    icon: Wrench, 
    title: 'Mecânica Geral',
    subtitle: '',
    description: ''
  },
  { 
    icon: Car, 
    title: 'Martelinho de Ouro',
    subtitle: '',
    description: ''
  },
  { 
    icon: Gauge, 
    title: 'Pneus',
    subtitle: 'Qualidade do solo ao volante.',
    description: 'Venda, instalação e manutenção com as melhores marcas do mercado. Garantindo rodagem suave e segura.'
  },
  { 
    icon: Settings, 
    title: 'Revisão de Blindagem',
    subtitle: 'Segurança especializada para veículos blindados.',
    description: 'Inspeção especializada em veículos blindados. Verificação de sistemas de proteção, vidros e estruturas de segurança.'
  },
  { 
    icon: Droplets, 
    title: 'Sistema de Arrefecimento',
    subtitle: '',
    description: ''
  },
  { 
    icon: Shield, 
    title: 'Suspensão',
    subtitle: 'Segurança e desempenho em cada curva.',
    description: 'Avaliação técnica e manutenção completa da suspensão, garantindo estabilidade, conforto e resposta imediata na direção.'
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
    <section id="servicos" className="relative bg-neutral-900" style={{ minHeight: '600px' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/bg-carro.png)' }}
      />
      
      {/* Overlay cinza suave */}
      <div className="absolute inset-0 bg-neutral-500/30" />
      
      {/* Content Container */}
      <div className="relative z-10 py-20">
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
                  className="bg-neutral-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center gap-4 cursor-pointer"
                  onClick={() => openModal(service)}
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
      </div>
    </section>

    {/* Modal Component */}
    <ServiceModal 
      service={selectedService ? {
        name: selectedService.title,
        icon: selectedService.icon,
        title: selectedService.title,
        subtitle: selectedService.subtitle,
        description: selectedService.description
      } : null}
      isOpen={isModalOpen}
      onClose={closeModal}
    />
  </>
  )
}
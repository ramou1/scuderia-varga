'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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
import ServiceModal from './ServiceModal'

const mainServices = [
  { 
    name: 'DIAGNÓSTICO COMPUTADORIZADO', 
    icon: Settings,
    title: 'Diagnóstico Computadorizado',
    subtitle: 'Precisão que você confia.',
    description: 'Utilizamos tecnologia de ponta para identificar falhas com total exatidão. Mais agilidade e menos suposições.'
  },
  { 
    name: 'AR CONDICIONADO', 
    icon: Wind,
    title: 'Manutenção de Ar Condicionado',
    subtitle: 'Conforto o ano inteiro.',
    description: 'Revisão completa do sistema de ar, incluindo filtro, gás e componentes. Ar puro e climatização eficiente, sempre.'
  },
  { 
    name: 'ALINHAMENTO 3D', 
    icon: Target,
    title: 'Alinhamento 3D',
    subtitle: 'Precisão milimétrica para o seu veículo.',
    description: 'Tecnologia 3D de última geração que garante alinhamento perfeito, melhor dirigibilidade e economia de pneus.'
  },
  { 
    name: 'OXISANITIZAÇÃO', 
    icon: Sparkles,
    title: 'Oxisanitização',
    subtitle: 'Seu carro livre de odores e micro-organismos.',
    description: 'Higienização com oxigênio ativo, eliminando fungos, bactérias e odores desagradáveis do ar-condicionado e do interior do veículo.'
  },
  { 
    name: 'BALANCEAMENTO COMPUTADORIZADO', 
    icon: Gauge,
    title: 'Balanceamento Computadorizado',
    subtitle: 'Estabilidade e conforto na direção.',
    description: 'Equipamento moderno para um balanceamento preciso, que reduz vibrações e prolonga a vida útil dos pneus.'
  },
  { 
    name: 'PNEUS', 
    icon: Circle,
    title: 'Pneus',
    subtitle: 'Qualidade do solo ao volante.',
    description: 'Venda, instalação e manutenção com as melhores marcas do mercado. Garantindo rodagem suave e segura.'
  },
  { 
    name: 'SUSPENSÃO', 
    icon: Wrench,
    title: 'Suspensão',
    subtitle: 'Segurança e desempenho em cada curva.',
    description: 'Avaliação técnica e manutenção completa da suspensão, garantindo estabilidade, conforto e resposta imediata na direção.'
  },
  { 
    name: 'TROCA DE ÓLEO', 
    icon: Droplets,
    title: 'Troca de Óleo',
    subtitle: 'Motor protegido e com mais vida útil.',
    description: 'Serviço rápido e eficiente, com óleo e filtro corretos para cada tipo de motor. Revisão completa e personalizada.'
  },
  { 
    name: 'FLUÍDO DE CÂMBIO AUTOMÁTICO', 
    icon: Settings,
    title: 'Troca de Fluido do Câmbio Automático',
    subtitle: 'Cuide da saúde do seu câmbio.',
    description: 'Utilizamos fluido adequado para cada modelo. Serviço técnico que garante trocas limpas, seguras e no tempo certo.'
  },
  { 
    name: 'FREIOS', 
    icon: Shield,
    title: 'Freios',
    subtitle: 'Confiança em cada frenagem.',
    description: 'Revisão detalhada com componentes de alta qualidade. Segurança máxima para você e sua família.'
  },
  { 
    name: 'INJEÇÃO ELETRÔNICA', 
    icon: Zap,
    title: 'Injeção Eletrônica',
    subtitle: 'Eficiência e economia com tecnologia.',
    description: 'Diagnóstico preciso e regulagem do sistema de injeção. Menor consumo, melhor desempenho e menor emissão de poluentes.'
  },
]

export default function MainServices() {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      <section className="relative bg-neutral-900" style={{ minHeight: '600px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/bg-carro.png)' }}
        />
        
        {/* Overlay cinza suave */}
        <div className="absolute inset-0 bg-neutral-500/30" />
        
        {/* Content Container */}
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              Principais Serviços
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
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
                  className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 cursor-pointer"
                  onClick={() => openModal(service)}
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
        </div>
      </section>

      {/* Modal Component */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}
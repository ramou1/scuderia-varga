'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import ServiceModal from './ServiceModal'

const services = [
  { 
    icon: 'alinhamento.png', 
    title: 'Alinhamento',
    subtitle: 'Precisão milimétrica para o seu veículo.',
    description: 'Tecnologia 3D de última geração que garante alinhamento perfeito, melhor dirigibilidade e economia de pneus.'
  },
  { 
    icon: 'analise-pre-compra.png', 
    title: 'Análise de Pré Compra',
    subtitle: 'Importante para garantir que o carro está realmente em dia.',
    description: 'Pré-compra ou venda é a análise minuciosa do carro antes do cliente fechar negócio ou então antes do proprietário vender. Neste serviço, o mecânico avalia a aparência de itens como o motor, os filtros, as rodas, a lataria, as suspensões, a embreagem e etc. Essa "vistoria" mostra as reais condições do carro e pode descobrir problemas escondidos. Ela ajuda o cliente a decidir se vai comprar ou não e até mesmo se o preço está justo.'
  },
  { 
    icon: 'ar-condicionado.png', 
    title: 'Ar Condicionado',
    subtitle: 'Conforto o ano inteiro.',
    description: 'Revisão completa do sistema de ar, incluindo filtro, gás e componentes. Ar puro e climatização eficiente, sempre.'
  },
  { 
    icon: 'balanceamento.png', 
    title: 'Balanceamento',
    subtitle: 'Estabilidade e conforto na direção.',
    description: 'Equipamento moderno para um balanceamento preciso, que reduz vibrações e prolonga a vida útil dos pneus.'
  },
  { 
    icon: 'cambio.png', 
    title: 'Câmbio',
    subtitle: 'Cuide da saúde do seu câmbio.',
    description: 'Contamos com uma equipe técnica altamente qualificada e equipamentos modernos para garantir o diagnóstico preciso e o melhor desempenho do sistema de transmissão do seu veículo.'
  },
  { 
    icon: 'diagnostico-computadorizado.png', 
    title: 'Diagnóstico Computadorizado',
    subtitle: 'Tecnologia avançada para identificar problemas.',
    description: 'Utilizamos scanners de última geração para diagnóstico preciso e rápido de falhas no sistema eletrônico do veículo, garantindo reparos eficientes e econômicos.'
  },
  { 
    icon: 'direcao.png', 
    title: 'Direção',
    subtitle: 'Precisão e segurança no controle do seu veículo.',
    description: 'Diagnóstico preciso em conjunto de direção elétrica (EPS), inspeções completa no sistema de  direção hidráulica, elétrica e mecânica.'
  },
  { 
    icon: 'eletrica.png', 
    title: 'Elétrica',
    subtitle: 'Diagnóstico e reparos elétricos com precisão e segurança.',
    description: 'Equipamentos de ultima geração e de alta precisão para identificar falhas no sistema elétrico do veiculo com rapidez e precisão.'
  },
  { 
    icon: 'freios.png', 
    title: 'Freios',
    subtitle: 'Confiança em cada frenagem.',
    description: 'Revisão detalhada com componentes de alta qualidade. Segurança máxima para você e sua família.'
  },
  { 
    icon: 'injecao-eletronica.png', 
    title: 'Injeção Eletrônica',
    subtitle: 'Eficiência e economia com tecnologia.',
    description: 'Diagnóstico preciso e regulagem do sistema de injeção. Menor consumo, melhor desempenho e menor emissão de poluentes.'
  },
  { 
    icon: 'lubrificantes.png', 
    title: 'Lubrificantes',
    subtitle: 'Proteção máxima para o motor com os melhores lubrificantes.',
    description: 'Desempenho total, com lubrificantes de alta qualidade e troca técnica de confiança.'
  },
  { 
    icon: 'mecanica-geral.png', 
    title: 'Mecânica Geral',
    subtitle: '',
    description: 'Cuidado completo para seu veículo rodar com segurança e desempenho máximo.'
  },
  { 
    icon: 'martelinho-ouro.png', 
    title: 'Martelinho de Ouro',
    subtitle: 'Reparos precisos, sem pintura, mantendo a originalidade do seu veículo.',
    description: 'Pequenos reparos, preservando a pintura original e mantando a originalidade e o valor de seu veiculo.'
  },
  { 
    icon: 'pneus.png', 
    title: 'Pneus',
    subtitle: 'Qualidade do solo ao volante.',
    description: 'Venda, instalação e manutenção com as melhores marcas do mercado. Garantindo rodagem suave e segura.'
  },
  { 
    icon: 'revisao-blindagem.png', 
    title: 'Revisão de Blindagem',
    subtitle: 'Segurança especializada para veículos blindados.',
    description: 'É um serviço especializado que visa garantir a integridade, segurança e desempenho do sistema balístico instalado no veículo, mantendo os mais altos padrões de proteção sem comprometer o conforto e a sofisticação típicos de modelos de alto padrão.'
  },
  { 
    icon: 'sistema-arrefecimento.png', 
    title: 'Sistema de Arrefecimento',
    subtitle: 'Mantendo a temperatura ideal para o desempenho do seu motor.',
    description: 'O sistema de arrefecimento é essencial para o bom funcionamento do motor do seu veículo. Ele tem a função de controlar a temperatura do motor, evitando o superaquecimento e garantindo um desempenho ideal em todas as condições de uso.'
  },
  { 
    icon: 'suspensao.png', 
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
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900/70 px-4 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center gap-4 cursor-pointer"
                  onClick={() => openModal(service)}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white rounded-lg p-2">
                    <Image
                      src={`/images/icones/${service.icon}`}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
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
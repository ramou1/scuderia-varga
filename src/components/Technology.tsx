'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cpu, Target, Droplets, Wind } from 'lucide-react'

const technologies = [
  {
    icon: Target,
    title: 'BALANCEADORA FORTA TECH B1030',
    image: '/images/tecnologia01.png',
    description: 'Com laser óptico inteligente de posição, a balanceadora B1030 da FORTA TECH, garante o desempenho, qualidade e precisão na execução dos balanceamentos. Possui motor com sistema de levitação magnética, 512 posições angulares, medição automática de distância e diâmetro da roda, e o localizador de posição inteligente informando ao mecânico o correto local de posicionamento dos chumbos a serem inseridos.'
  },
  {
    icon: Cpu,
    title: 'ALINHADORA 3D FORTA TECH ADVANCED',
    image: '/images/tecnologia02.png',
    description: 'Alinhamento veicular com mobilidade e versatilidade – permite a execução precisa e eficiente em qualquer elevador. Com tecnologia de ponta, conta com cálculos precisos e câmeras com resolução 4k, garantindo as medições detalhadas e precisas, aumentando a qualidade e reduzindo o tempo de execução. Utilizando mini targets de medição com filtro de luz, assegura qualidade e estabilidade superiores, durante todo o processo, homologado pela Volvo e pela VW.'
  },
  {
    icon: Droplets,
    title: 'MÁQUINA DE TROCA DE LÍQUIDO DE ARREFECIMENTO MAHOVI',
    image: '/images/tecnologia03.png',
    description: 'A máquina de troca de líquido de arrefecimento Mahovi, possui um design intuitivo e funcionalidades avançadas que fazem a extração a vácuo e arquivamento de pressão do líquido refrigerante ao mesmo tempo, tornando um processo ágil e seguro, garantindo que o motor do veículo opere na temperatura ideal e com máxima eficiência.'
  },
  {
    icon: Wind,
    title: 'RECICLADORA DE AR-CONDICIONADO ISC RALLY PRO ITALIANA',
    image: '/images/tecnologia04.png',
    description: 'Um equipamento projetado para recuperação e reciclagem do gás refrigerante presente no sistema de ar condicionado automotivo, teste de vazamento do sistema, diagnóstico de pressão, eficiência e praticidade, garantindo também a sustentabilidade uma vez que não libera os gases nocivos para a camada de ozônio.'
  }
]

export default function Technology() {
  return (
    <section id="tecnologia" className="py-20 bg-gray-50">
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
            Nossa Tecnologia
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Utilizamos equipamentos de última geração homologados pelas principais montadoras para garantir a máxima qualidade nos nossos serviços
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-gray-100"
              >
                {/* Image */}
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-center leading-tight">
                    {tech.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {tech.description}
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

'use client'

import { motion } from 'framer-motion'
import { Target, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 uppercase">
            Quem Somos
          </h2>
        </motion.div>

        {/* Conteúdo principal - Layout lado a lado */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start max-w-6xl mx-auto">
          
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <p className="text-base md:text-lg">
              Há mais de 25 anos, a <strong>Varga Serviços SJC</strong> mantém o objetivo de consolidar-se como um dos melhores centros automotivos do Vale do Paraíba. Somos reconhecidos pelos nossos clientes pela qualidade, agilidade e honestidade fornecida, para clientes pessoas físicas e jurídicas (frotistas).
            </p>
            
            <p className="text-base md:text-lg">
              Hoje formamos o <strong>Grupo VS</strong>, onde toda a essência da Varga Serviços é encontrada em nossas 3 unidades: Varga Serviços e Scuderia Varga em São José dos Campos e a Varga Serviços Bosch Car Service em Caraguatatuba.
            </p>
            
            <p className="text-base md:text-lg">
              Oferecemos serviços personalizados para atender a diversos segmentos como: locadoras, empresas públicas e privadas, gerenciadoras de frota e pessoa física. Possuímos uma equipe altamente qualificada e treinada para a resolução de qualquer desafio.
            </p>
            
            <p className="text-base md:text-lg">
              Nossa estrutura permite fornecer serviços ágeis, reduzindo o tempo de indisponibilidade do veículo ao cliente final. Com foco no cliente, buscamos estar sempre atualizados nas novas tecnologias e qualificações dos nossos colaboradores, para garantir a qualidade no serviço prestado, de forma rápida e segura.
            </p>
          </motion.div>

          {/* Cards Missão e Valores à direita */}
          <div className="space-y-6">
            {/* Missão */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                  Missão
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser referência como centro automotivo para o segmento Convencional e Premium em todo território de atuação. Fornecendo de forma ágil e honesta as soluções efetivas para nossos clientes, com o maior nível de qualidade e excelência nos serviços prestados.
                </p>
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                  Valores
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  No Grupo VS, a paixão é o nosso combustível para a inovação e a excelência. Agimos com respeito, honestidade e dedicamo-nos à qualidade em tudo o que fazemos, buscando constantemente ir além do esperado. Nossa motivação profunda reside no amor pelo que criamos e no impacto positivo que geramos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

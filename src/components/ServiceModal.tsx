'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ServiceModalProps {
  service: {
    name: string
    icon: string
    title: string
    subtitle: string
    description: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header da Modal */}
        <div className="bg-neutral-800 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl">
                <Image
                  src={`/images/icones/${service.icon}`}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-neutral-300 text-lg font-medium">{service.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Conteúdo da Modal */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
          
          {/* Botão de ação */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/5512996011497"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'

const locations = [
  {
    name: 'Scuderia Varga',
    city: 'São José dos Campos',
    address: 'Av. Andrômeda, 2410 – Jardim Satélite',
    cep: 'São José dos Campos – SP, 12230-001',
    phone: '(12) 3933-0505',
    whatsapp: '+55 12 99601-1497',
    email: 'atendimento@scuderiavarga.com.br'
  },
  {
    name: 'Varga Serviços',
    city: 'São José dos Campos',
    address: 'Rua das Acácias, 390 – Vila das Acácias',
    cep: 'São José dos Campos – SP, 12231-020',
    phone: '(12) 3942-1026 / (12) 3942-1027',
    whatsapp: '+55 12 97409-0077',
    email: 'atendimento@vargasjc.com.br'
  },
  {
    name: 'Varga Serviços Bosch',
    city: 'Caraguatatuba',
    address: 'Rua Manoel Henrique de Oliveira, 1870 – Martim de Sá',
    cep: 'Caraguatatuba – SP, 11662-610',
    phone: '(12) 3883-9452 / (12) 97401-7151',
    whatsapp: '+55 12 97401-7151',
    email: 'atendimento.caragua@vargasjc.com.br'
  }
]

const businessHours = {
  weekdays: 'Segunda a Sexta: 8:00 às 18:00',
  saturday: 'Sábado: 8:00 às 18:00'
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Image
                src="/images/logo-scuderia-horizontal.png"
                alt="Scuderia Varga"
                width={240}
                height={72}
                className="h-16 w-auto"
              />
              <Image
                src="/images/by-varga.png"
                alt="By Varga"
                width={140}
                height={56}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Há mais de 25 anos oferecendo serviços automotivos de qualidade no Vale do Paraíba. 
              Especialistas em marcas premium com tecnologia de ponta.
            </p>
          </div>

          {/* Unidades */}
          {locations.map((location, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-red-500 uppercase">
                {location.name}
              </h3>
              <p className="text-sm font-semibold text-gray-300">
                {location.city}
              </p>
              
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                  <div>
                    <p>{location.address}</p>
                    <p>{location.cep}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-red-500 transition-colors">
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <a href={`mailto:${location.email}`} className="text-xs hover:text-red-500 transition-colors break-all">
                    {location.email}
                  </a>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="pt-4 border-t border-gray-800">
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span>{businessHours.weekdays}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span>{businessHours.saturday}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="border-t border-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 uppercase">
            Nossas Unidades
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Scuderia Varga - SJC */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29329.915832662373!2d-45.885077!3d-23.234371!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4becddf74a7d%3A0x685dd978e25b4446!2sScuderia%20Varga%20-%20BMW%2C%20Jeep%2C%20Mercedes%2C%20Volvo%20Oficina%20Especializada%20SJC%20%2F%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1spt-BR!2sus!4v1759324568021!5m2!1spt-BR!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Varga Serviços - SJC */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29335.505977456523!2d-45.885505!3d-23.208921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a607d388b35%3A0xe850c22f914371e4!2sVarga%20Servi%C3%A7os%20-%20Unidade%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1spt-BR!2sus!4v1759324624693!5m2!1spt-BR!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Bosch Car Service - Caraguatatuba */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29245.279922023798!2d-45.390697!3d-23.616524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd637c1718d663%3A0x307cdef8d05e4295!2sBosch%20Car%20Service%20-%20Varga%20Servi%C3%A7os!5e0!3m2!1spt-BR!2sus!4v1759324633057!5m2!1spt-BR!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Scuderia Varga. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Site desenvolvido por <span className="text-red-500 font-semibold">Ramon Oliveira</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
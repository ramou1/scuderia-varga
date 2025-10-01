import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scuderia Varga - Centro Automotivo Premium',
  description: 'Há mais de 25 anos oferecendo serviços automotivos de qualidade no Vale do Paraíba. Especialistas em BMW, Mercedes-Benz, Audi, Porsche e outras marcas premium.',
  keywords: 'centro automotivo, BMW, Mercedes-Benz, Audi, Porsche, alinhamento, balanceamento, injeção eletrônica, São José dos Campos',
  authors: [{ name: 'Ramon Oliveira' }],
  icons: {
    icon: '/images/icone.png',
    shortcut: '/images/icone.png',
    apple: '/images/icone.png',
  },
  openGraph: {
    title: 'Scuderia Varga - Centro Automotivo Premium',
    description: 'Há mais de 25 anos oferecendo serviços automotivos de qualidade no Vale do Paraíba.',
    url: 'https://scuderiavarga.com.br',
    siteName: 'Scuderia Varga',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={GeistSans.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
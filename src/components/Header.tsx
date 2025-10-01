'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'QUEM SOMOS', href: '#quem-somos' },
    { label: 'DIFERENCIAIS', href: '#diferenciais' },
    { label: 'SERVIÇOS', href: '#servicos' },
    { label: 'TECNOLOGIA', href: '#tecnologia' },
    { label: 'SCANNERS', href: '#scanners' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/scuderiavarga', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <header className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-black/80 backdrop-blur-sm'}`}>
      {/* Top bar com WhatsApp */}
      <div className="bg-gray-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a 
            href="https://wa.me/5512996011497" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="text-xs md:text-sm font-medium uppercase">
              Atendimento pelo WhatsApp: +55 12 99601-1497
            </span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src="/images/logo-scuderia-horizontal.png"
              alt="Scuderia Varga"
              width={240}
              height={72}
              className="h-10 md:h-16 w-auto"
            />
            <Image
              src="/images/by-varga.png"
              alt="By Varga"
              width={120}
              height={48}
              className="h-6 md:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-red-500 text-xs font-medium transition-colors uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-red-500 text-base font-medium transition-colors uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
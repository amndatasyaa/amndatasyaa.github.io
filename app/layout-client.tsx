'use client'

import { useKonamiCode } from './hooks/useKonamiCode'
import MatrixRain from './components/MatrixRain'
import { Poppins } from 'next/font/google'
import { useState } from 'react'
import Hamburger from './components/Hamburger'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const konami = useKonamiCode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${poppins.className} ${konami ? 'matrix-theme' : ''}`}>
        {konami && <MatrixRain />}
        <div className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="/play" onClick={() => setIsMenuOpen(false)}>Play</a>
        </div>
        <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {children}
      </body>
    </html>
  )
}


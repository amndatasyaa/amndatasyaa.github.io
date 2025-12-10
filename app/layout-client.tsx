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
          <a href="/notebook" onClick={() => setIsMenuOpen(false)}>Notebook</a>
        </div>
        <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <nav className="navbar">
          <div className="logo">
            <div className="logo-circle">AT</div>
            <span className="logo-text">Amanda Tasya</span>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/play" className="nav-link">
                Play
              </a>
            </li>
            <li>
              <a href="/notebook" className="nav-link">
                Notebook
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}


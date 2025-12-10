'use client'

import React from 'react'

interface HamburgerProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={`hamburger ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </button>
  )
}

export default Hamburger

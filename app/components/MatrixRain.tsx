'use client'

import React,
{
  useEffect,
  useState
}
from 'react'

const MatrixRain = () => {
  const [rainDrops, setRainDrops] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const columns = Math.floor(window.innerWidth / 20)

    const drops = Array(columns)
      .fill(0)
      .map((_, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const duration = Math.random() * 5 + 2
        const delay = Math.random() * 5
        const left = `${i * 20}px`
        const top = `${Math.random() * -1000}px`

        return (
          <div
            key={i}
            className="rain-drop"
            style={{
              left,
              top,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            {char}
          </div>
        )
      })

    setRainDrops(drops)
  }, [])

  return <div className="matrix-rain">{rainDrops}</div>
}

export default MatrixRain

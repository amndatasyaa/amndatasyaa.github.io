'use client'

import { useState, useEffect, useCallback } from 'react'

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export const useKonamiCode = () => {
  const [keys, setKeys] = useState<string[]>([])
  const [konami, setKonami] = useState(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-konamiCode.length)
        if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
          setKonami(true)
        }
        return newKeys
      })
    },
    [setKeys, setKonami]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return konami
}

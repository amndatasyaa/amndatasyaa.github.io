'use client'

import { Poppins } from 'next/font/google'
import { useKonamiCode } from '../hooks/useKonamiCode'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const konami = useKonamiCode()
  return (
    <html lang="en">
      <body className={`${poppins.className} ${konami ? 'matrix-theme' : ''}`}>{children}</body>
    </html>
  )
}

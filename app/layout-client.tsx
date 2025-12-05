'use client'

import { useKonamiCode } from './hooks/useKonamiCode'
import MatrixRain from './components/MatrixRain'
import { Poppins } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}

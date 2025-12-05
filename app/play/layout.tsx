import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flappy Bird | Amanda Tasya Dedi',
  description: 'A simple Flappy Bird game built with React and TypeScript.',
}

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

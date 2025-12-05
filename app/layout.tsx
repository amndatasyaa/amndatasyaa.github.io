import type { Metadata } from 'next'
import RootLayoutClient from './layout-client'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amanda Tasya Dedi | Aspiring Software Engineer',
  description: 'Computer Science student at the National University of Singapore (NUS) seeking software engineering internships. Proficient in JavaScript, Python, React, and more.',
  keywords: ['Software Engineer', 'Web Developer', 'NUS Computer Science', 'Internship', 'React Developer', 'Full-Stack Developer', 'Amanda Tasya Dedi', 'Singapore'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>
}

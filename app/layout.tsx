import type { Metadata } from 'next'
import RootLayoutClient from './layout-client'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amanda Tasya Dedi | Data Science & Software Engineering Portfolio | NUS',
  description: "Amanda Tasya Dedi's portfolio. A Computer Science student at NUS, actively seeking Data Science and Software Engineering internships. Expertise in Python, React, JavaScript, and machine learning. Explore projects and skills.",
  keywords: ['Amanda Tasya Dedi', 'Data Science', 'Software Engineering', 'Internship', 'NUS', 'Python', 'React', 'Machine Learning', 'Web Development', 'Portfolio', 'Computer Science'],
  openGraph: {
    title: 'Amanda Tasya Dedi | Data Science & Software Engineering Portfolio | NUS',
    description: "Amanda Tasya Dedi's portfolio. A Computer Science student at NUS, actively seeking Data Science and Software Engineering internships. Expertise in Python, React, JavaScript, and machine learning. Explore projects and skills.",
    url: 'https://amndatasyaa.github.io/',
    siteName: 'Amanda Tasya Dedi Portfolio',
    images: [
      {
        url: 'https://amndatasyaa.github.io/profile.jpg', // Replace with an actual image for social sharing
        width: 800,
        height: 600,
        alt: 'Amanda Tasya Dedi Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanda Tasya Dedi | Data Science & Software Engineering Portfolio | NUS',
    description: "Amanda Tasya Dedi's portfolio. A Computer Science student at NUS, actively seeking Data Science and Software Engineering internships. Expertise in Python, React, JavaScript, and machine learning. Explore projects and skills.",
    creator: '@amndatasyaa', // Replace with actual Twitter handle
    images: ['https://amndatasyaa.github.io/profile.jpg'], // Replace with an actual image for social sharing
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>
}

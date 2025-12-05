'use client'

import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      <h1 style={{ fontFamily: 'var(--heading-font)', fontSize: '72px' }}>404</h1>
      <p style={{ fontSize: '24px', marginBottom: '10px' }}>
        Error: Page Not Found
      </p>
      <p style={{ fontSize: '18px', maxWidth: '400px', marginBottom: '30px' }}>
        It seems you&apos;ve stumbled upon a null value in our dataset. The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Return to Home
      </Link>
    </div>
  )
}

export default NotFoundPage

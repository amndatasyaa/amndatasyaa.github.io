'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activePage, setActivePage] = useState<'home' | 'contact'>('home')

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">AT</div>
          <span className="logo-text">Amanda Tasya</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a
              onClick={() => setActivePage('home')}
              className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setActivePage('contact')}
              className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section className={`page-section ${activePage === 'home' ? 'active' : ''}`} id="home">
        <div className="home">
          <div className="profile-container">
            <Image
              src="/profile.jpg"
              alt="Amanda"
              className="profile-img"
              width={450}
              height={450}
              priority
            />
          </div>

          <div className="home-content">
            <h3>Hello, <span>World!</span></h3>
            <h1>Amanda Tasya Dedi</h1>
            <p>I&apos;m a first year computer science student at National University of Singapore.</p>
          </div>
        </div>
      </section>

      <section className={`page-section ${activePage === 'contact' ? 'active' : ''}`} id="contact">
        <div className="contact-section">
          <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out!</p>

            <div className="social-icons">
              <a href="https://linkedin.com/in/amndatasyaa" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/amndatasyaa" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/amndatasyaa" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:amandatasyadedi@gmail.com">amandatasyadedi@gmail.com</a>
              </div>

              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>+65 8308-3161</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

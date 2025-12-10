'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ScatterPlot from './components/ScatterPlot'

export default function Home() {
  const [showScatterPlot, setShowScatterPlot] = useState(false)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <>
      {showScatterPlot && <ScatterPlot onClose={() => setShowScatterPlot(false)} />}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">AT</div>
          <span className="logo-text">Amanda Tasya</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li>
            <a href="/play" className="nav-link">
              Play
            </a>
          </li>
        </ul>
      </nav>

      <motion.section
        id="home"
        className="page-section home-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="home">
          <div className="profile-container">
            <Image
              src="/profile.jpg"
              alt="Amanda Tasya Dedi - Aspiring Software Engineer"
              className="profile-img"
              width={450}
              height={450}
              priority
            />
          </div>

          <div className="home-content">
            <h3>Hello, I&apos;m</h3>
            <h1>Amanda Tasya Dedi</h1>
            <p>A Computer Science student at NUS, actively seeking a <strong>Data Science</strong> or <strong>Software Engineering Internship</strong> to apply my skills in web development and problem-solving.</p>
            <div className="home-buttons">
              <a href="mailto:amandatasyadedi@gmail.com?subject=Resume Request&body=Hi Amanda, I would like to request a copy of your resume." className="btn btn-primary">Request Resume</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
              <a href="/play" className="btn btn-secondary">Play Flappy Bird!</a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="about-section">
          <h2>About Me</h2>
          <p>As a dedicated Computer Science student at the National University of Singapore (NUS), I have a strong foundation in programming and a passion for building innovative software solutions. I am particularly interested in <strong>data science</strong> and <strong>full-stack web development</strong> and am eager to contribute to a fast-paced team where I can grow my skills and make a real impact. I am a proactive learner, a strong collaborator, and I am excited to bring my technical abilities and enthusiasm to a challenging internship role in the tech industry.</p>
          <button onClick={() => setShowScatterPlot(true)} className="btn btn-secondary" style={{ marginTop: '30px' }}>
            Show me the data!
          </button>
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>National University of Singapore (NUS)</h3>
            <p>Bachelor of Computing in Computer Science</p>
            <p>Expected Graduation: 2028</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="skills-section">
          <h2>Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js & Express.js</li>
                <li>Tailwind CSS</li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Figma</li>
                <li>MongoDB</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/*
      <motion.section
        id="projects"
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Personal Portfolio Website</h3>
              <p>A personal portfolio website built with Next.js and deployed on GitHub Pages. This project showcases my skills and projects in a clean and elegant design.</p>
              <div className="project-technologies">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/amndatasyaa/amndatasyaa.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://amndatasyaa.github.io/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
            <div className="project-card">
              <h3>E-commerce Website</h3>
              <p>A full-stack e-commerce website built with the MERN stack. Features include user authentication, product catalog, shopping cart, and checkout.</p>
              <div className="project-technologies">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Weather App</h3>
              <p>A simple weather application that allows users to check the current weather in any city. Built with React and the OpenWeatherMap API.</p>
              <div className="project-technologies">
                <span>React</span>
                <span>API</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      */}

      <motion.section
        id="contact"
        className="page-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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

            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

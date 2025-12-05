'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import Bird from './components/Bird'
import Pipes from './components/Pipes'
import Background from './components/Background'

const BIRD_SIZE = 50
const GAME_WIDTH = 800
const GAME_HEIGHT = 600
const GRAVITY = 0.6
const JUMP_STRENGTH = 10
const PIPE_WIDTH = 60
const PIPE_GAP = 200
const PIPE_SPAWN_RATE = 1500 // in ms

const FlappyBirdGame = () => {
  const [birdPosition, setBirdPosition] = useState({ y: GAME_HEIGHT / 2 })
  const [birdVelocity, setBirdVelocity] = useState(0)
  const [pipes, setPipes] = useState<{ x: number; height: number }[]>([])
  const [score, setScore] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  const handleJump = useCallback(() => {
    if (!isGameOver) {
      setBirdVelocity(-JUMP_STRENGTH)
    }
  }, [isGameOver])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        handleJump()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('click', handleJump)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('click', handleJump)
    }
  }, [handleJump])

  useEffect(() => {
    if (!isStarted || isGameOver) return

    const gameLoop = setInterval(() => {
      // Gravity
      setBirdVelocity((v) => v + GRAVITY)
      setBirdPosition((pos) => ({ y: pos.y + birdVelocity }))

      // Move pipes
      setPipes((pipes) =>
        pipes.map((pipe) => ({ ...pipe, x: pipe.x - 2 })).filter((pipe) => pipe.x > -PIPE_WIDTH)
      )

      // Collision detection
      const birdTop = birdPosition.y
      const birdBottom = birdPosition.y + BIRD_SIZE
      if (birdBottom > GAME_HEIGHT || birdTop < 0) {
        setIsGameOver(true)
      }

      pipes.forEach((pipe) => {
        const birdLeft = 100
        const birdRight = 100 + BIRD_SIZE
        const pipeLeft = pipe.x
        const pipeRight = pipe.x + PIPE_WIDTH

        if (
          birdRight > pipeLeft &&
          birdLeft < pipeRight &&
          (birdTop < pipe.height || birdBottom > pipe.height + PIPE_GAP)
        ) {
          setIsGameOver(true)
        }

        // Score
        if (pipe.x + PIPE_WIDTH === 100) {
          setScore((score) => score + 1)
        }
      })
    }, 1000 / 60) // 60 FPS

    return () => clearInterval(gameLoop)
  }, [isStarted, isGameOver, birdPosition, birdVelocity, pipes])

  useEffect(() => {
    if (!isStarted || isGameOver) return

    const pipeSpawner = setInterval(() => {
      const height = Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP - 100)) + 50
      setPipes((pipes) => [...pipes, { x: GAME_WIDTH, height }])
    }, PIPE_SPAWN_RATE)

    return () => clearInterval(pipeSpawner)
  }, [isStarted, isGameOver])

  const startGame = () => {
    setBirdPosition({ y: GAME_HEIGHT / 2 })
    setBirdVelocity(0)
    setPipes([])
    setScore(0)
    setIsStarted(true)
    setIsGameOver(false)
  }

  return (
    <div
      className="game-container"
      style={{
        width: `${GAME_WIDTH}px`,
        height: `${GAME_HEIGHT}px`,
        position: 'relative',
        overflow: 'hidden',
        margin: '50px auto',
        backgroundColor: 'var(--bg-color)',
        border: '2px solid var(--primary-color)',
        borderRadius: '15px'
      }}
    >
      <Background />
      <Bird birdPosition={birdPosition} />
      <Pipes pipes={pipes} pipeWidth={PIPE_WIDTH} pipeGap={PIPE_GAP} />

      <div className="game-info" style={{ position: 'absolute', top: '20px', left: '20px', color: 'var(--text-color)', fontSize: '24px', fontWeight: 'bold' }}>
        Score: {score}
      </div>

      {!isStarted && (
        <div className="start-screen" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--heading-font)', color: 'var(--text-color)' }}>Flappy Bird</h1>
          <button onClick={startGame} className="btn btn-primary" style={{ marginTop: '20px' }}>
            Start Game
          </button>
        </div>
      )}

      {isGameOver && (
        <div className="game-over-screen" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'var(--text-color)' }}>
          <h2 style={{ fontFamily: 'var(--heading-font)' }}>Game Over</h2>
          <p>Your Score: {score}</p>
          <button onClick={startGame} className="btn btn-primary" style={{ marginTop: '20px' }}>
            Restart
          </button>
        </div>
      )}
    </div>
  )
}

export default FlappyBirdGame

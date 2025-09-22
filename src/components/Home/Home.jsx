import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Hero3D from './Hero3D'
import './Home.css'

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="home-container">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Hi, I'm <span className="gradient-text">Ansh Singh</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Full Stack Developer & Creative Technologist
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            I craft digital experiences that blend cutting-edge technology 
            with intuitive design, bringing ideas to life through code.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.button 
              className="cta-button primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(100, 108, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <motion.a 
              href="/resume.pdf" 
              target="_blank"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-3d">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </Canvas>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Scroll to explore</p>
      </motion.div>
    </div>
  )
}

export default Home
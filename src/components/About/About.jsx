import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 95, color: '#f7df1e' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'Python', level: 82, color: '#3776ab' },
    { name: 'Three.js', level: 75, color: '#000000' },
    { name: 'MongoDB', level: 80, color: '#47a248' },
    { name: 'PostgreSQL', level: 78, color: '#336791' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="about-container section">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="about-grid">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="glassmorphism about-card">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate full-stack developer with a love for creating 
                immersive digital experiences. With a background in computer science 
                and years of hands-on experience, I specialize in building modern, 
                scalable web applications that solve real-world problems.
              </p>
              <p>
                My journey in tech started with curiosity about how things work 
                under the hood. Today, I combine technical expertise with creative 
                vision to deliver solutions that are not just functional, but 
                delightful to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </motion.div>
          
          <motion.div className="skills-section" variants={itemVariants}>
            <div className="glassmorphism skills-card">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="stats-section" variants={itemVariants}>
          <div className="stats-grid">
            <motion.div 
              className="stat-item glassmorphism"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number gradient-text">50+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="stat-item glassmorphism"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number gradient-text">3+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="stat-item glassmorphism"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number gradient-text">100+</div>
              <div className="stat-label">GitHub Commits</div>
            </motion.div>
            
            <motion.div 
              className="stat-item glassmorphism"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number gradient-text">24/7</div>
              <div className="stat-label">Learning Mode</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
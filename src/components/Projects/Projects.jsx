import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and real-time inventory management.',
      longDescription: 'This comprehensive e-commerce solution includes a responsive frontend built with React and Tailwind CSS, a robust backend API with Node.js and Express, and a MongoDB database for data persistence. Key features include user authentication with JWT, Stripe payment integration, real-time notifications, admin dashboard, and inventory management system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      image: '/project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: '3D Portfolio Website',
      category: 'frontend',
      description: 'An interactive 3D portfolio website using Three.js and React. Features immersive 3D models, particle systems, and smooth animations.',
      longDescription: 'This cutting-edge portfolio showcases advanced web technologies including Three.js for 3D graphics, React Three Fiber for React integration, and Framer Motion for smooth animations. The site features interactive 3D models, particle systems, physics simulations, and responsive design that works across all devices.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'GLSL'],
      image: '/project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'fullstack',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      longDescription: 'A comprehensive project management solution featuring real-time collaboration, drag-and-drop task organization, team chat, file sharing, and progress tracking. Built with modern technologies for optimal performance and user experience.',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
      image: '/project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Analytics Dashboard',
      category: 'frontend',
      description: 'A data visualization dashboard for weather analytics with interactive charts, maps, and real-time weather data integration.',
      longDescription: 'An advanced weather analytics platform featuring interactive data visualizations, real-time weather API integration, historical data analysis, and predictive modeling. The dashboard includes customizable charts, heat maps, and geographical visualizations.',
      technologies: ['React', 'D3.js', 'Chart.js', 'Weather API'],
      image: '/project4.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'AI Chatbot Integration',
      category: 'backend',
      description: 'An intelligent chatbot system with natural language processing capabilities and seamless integration with existing platforms.',
      longDescription: 'A sophisticated AI chatbot solution leveraging natural language processing, machine learning algorithms, and contextual understanding. Features include multi-platform integration, conversation analytics, and continuous learning capabilities.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      image: '/project5.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      category: 'backend',
      description: 'A secure and transparent voting system built on blockchain technology ensuring vote integrity and transparency.',
      longDescription: 'A revolutionary voting platform utilizing blockchain technology for maximum security and transparency. Features include cryptographic vote verification, immutable vote records, real-time results, and comprehensive audit trails.',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React'],
      image: '/project6.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="projects-container section">
      <motion.div 
        className="projects-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="projects-header" variants={itemVariants}>
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div className="filter-buttons" variants={itemVariants}>
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className={`project-card glassmorphism ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>{project.title[0]}</span>
                  </div>
                  <div className="project-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-links">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal glassmorphism"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-content">
                <h3>{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
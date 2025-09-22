import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'ansh@example.com',
      link: 'mailto:ansh@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'San Francisco, CA',
      link: 'https://maps.google.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      content: 'linkedin.com/in/anshsingh',
      link: 'https://linkedin.com/in/anshsingh'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📸' }
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
    <div className="contact-container section">
      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Ready to collaborate? Let's create something amazing together. 
            I'm always open to discussing new opportunities and exciting projects.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="glassmorphism contact-info-card">
              <h3>Let's Connect</h3>
              <p className="contact-intro">
                Whether you have a project in mind, want to collaborate, 
                or just want to say hello, I'd love to hear from you!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-section" variants={itemVariants}>
            <div className="glassmorphism contact-form-card">
              <h3>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className={`submit-button ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <span className="loading-text">
                      <span className="loading-spinner"></span>
                      Sending...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="success-text">
                      ✓ Message Sent!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div className="contact-footer" variants={itemVariants}>
          <div className="footer-content">
            <p>© 2024 Ansh Singh. Built with React, Three.js, and lots of ☕</p>
            <div className="footer-links">
              <a href="#home">Privacy Policy</a>
              <a href="#home">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
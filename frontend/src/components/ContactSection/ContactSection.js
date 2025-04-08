import React, { useState } from 'react';
import './ContactSection.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert(error.message || 'Error sending message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Get In Touch</span>
          <span className="title-underline"></span>
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              Have a project in mind or want to discuss opportunities?  
              Feel free to reach out—I'd love to hear from you!
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <span>alijandeveloper15@gmail.com
                </span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" />
                <span>GitHub</span>
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter className="social-icon" />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={errors.message ? 'error' : ''}
                placeholder="How can I help you?"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitted ? 'success' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="btn-content">
                  <span className="spinner"></span>
                  Sending...
                </span>
              ) : isSubmitted ? (
                <span className="btn-content">
                  <span className="checkmark">✓</span>
                  Message Sent!
                </span>
              ) : (
                <span className="btn-content">Send Message</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
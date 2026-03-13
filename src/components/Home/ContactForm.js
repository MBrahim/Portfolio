import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

// Telegram Bot Configuration (Create React App env vars must be prefixed with REACT_APP_)
const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return false;
    }
    if (!formData.inquiry.trim()) {
      setStatus({ type: 'error', message: 'Please enter your inquiry' });
      return false;
    }
    return true;
  };

  const sendTelegramNotification = async (data) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn('Telegram bot token or chat ID is missing. Skipping Telegram notification.');
      return false;
    }

    const message = `
🔔 *NEW CONTACT FORM SUBMISSION*
    
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone || 'Not provided'}
*Inquiry:* ${data.inquiry}
*Message:* ${data.message || 'No additional message'}
*Time:* ${new Date().toLocaleString()}
    `;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      });
      
      if (response.data.ok) {
        return true;
      } else {
        console.error('Telegram API error:', response.data);
        return false;
      }
    } catch (error) {
      console.error('Telegram notification failed:', error.response?.data || error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Send notification to Telegram
      const telegramSent = await sendTelegramNotification(formData);
      
      // Save to localStorage as backup
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        notificationSent: telegramSent
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      if (telegramSent) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!' 
        });
      } else {
        setStatus({ 
          type: 'warning', 
          message: 'Message saved locally. I\'ll check it when I\'m back online. Thank you!' 
        });
      }
      
      // Clear form
      setFormData({ name: '', email: '', phone: '', inquiry: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again or contact me directly through MohamedMo250ah@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="contact-form-container">
              <h1 className="contact-heading">
                Let's <span className="purple">Work Together</span>
              </h1>
              <p className="contact-subtitle">
                Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <Row>
                  <Col md={6} className="mb-3">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="form-input"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="form-input"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <div className="form-group">
                      <label htmlFor="phone">Phone (optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="form-input"
                        disabled={isSubmitting}
                      />
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="form-group">
                      <label htmlFor="inquiry">Inquiry *</label>
                      <input
                        type="text"
                        id="inquiry"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleChange}
                        placeholder="Subject of your inquiry"
                        className="form-input"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-4">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        className="form-input form-textarea"
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                  </Col>
                </Row>
                
                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.type === 'success' && '✅ '}
                    {status.type === 'error' && '❌ '}
                    {status.type === 'warning' && '⚠️ '}
                    {status.message}
                  </div>
                )}
                
                <Row>
                  <Col className="text-center">
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">📨</span>
                          Send Message
                        </>
                      )}
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactForm;
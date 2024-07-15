import React, { useState } from 'react';
import './css/contact.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send('service_n16qxmj', 'template_lg5427j', templateParams, '4nEN-mWz__WfEduVL')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p>Connect with me:</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ponrasuthanghavel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/PonrasuThanghavel" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
          </div>
          <div className="personal-info">
            <p>Email: ponrasuthanghavel@gmail.com</p>
            <p>Phone: +91 9344731456</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

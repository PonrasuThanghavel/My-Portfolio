import React from 'react';
import './css/contact.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p>Connect with me:</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ponrasuthanghavel/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/PonrasuThanghavel" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
          </div>
          <div className="personal-info">
            <p>Email: ponrasuthanghavel@gmail.com</p>
            <p>Phone: +91 9344731456</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

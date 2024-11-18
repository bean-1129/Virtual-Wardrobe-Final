import React from 'react';
import logo from '../imgs/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quick-links">
        <img src={logo} alt='logo' style={{width: '100px'}} />
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/wardrobe">Wardrobe</a></li>
            <li><a href="/ar">Try On</a></li>
            <li><a href="/chatbot">Chatbot</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Contact Us:</h3>
          <p>smsaurabhmishra61@gmail.com</p>
          <p></p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Virtual Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

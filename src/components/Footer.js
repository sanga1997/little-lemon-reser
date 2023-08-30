import React from 'react';
import './Footer.css'; // Create this CSS file for styling
import logo2 from "../images/logo2.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo2} alt="Logo 2" />
      </div>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
      </ul>
    </footer>
  );
};

export default Footer;

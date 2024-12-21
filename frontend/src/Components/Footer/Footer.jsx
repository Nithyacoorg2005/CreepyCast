import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{marginTop:"100px"}} className="creepy-footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Creepy<span>Cast</span></h2>
          <p>Your ultimate destination for horror and thrill.</p>
        </div>

     
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/audiobooks">Audiobooks</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/podcasts">Podcasts</a></li>
            <li><a href="/series">Series</a></li>
          </ul>
        </div>

  
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📧 Email: <a href="mailto:support@creepycast.com">support@creepycast.com</a></p>
          <p>📞 Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          <p>📍 Address: 666 Horror Lane, Spookyville</p>
        </div>

  
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i style={{color:"#ffff"}}className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CreepyCast. All Rights Reserved.</p>
        <p>🖤 Designed with scares and screams!</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import './footer.css'

import {FiFacebook,FiInstagram, FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>WILDPENAS</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>  
        <li>
          <a href="#about">About</a>
        </li>  
        <li>
          <a href="#experience">Experience</a>
        </li>  
        <li>  
          <a href="#services">Services</a>
        </li>  
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>  
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>  
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com/penasnipute" target="_blank" rel="noopener noreferrer"><FiFacebook/></a>
        <a href="http://instagram.com/penasnipute" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="http://twitter.com/penasnipute" target="_blank" rel="noopener noreferrer"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; WILDPENAS. Some rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer
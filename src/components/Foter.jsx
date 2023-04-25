import React from 'react'
import '../styles/footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Foter() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <img src="/" about='logo' />
            <div className='footer-add'>
                Health care path lab, Mandawa Modh
                <br />
                Jhunjhunu, Rajasthan
            </div>
            <div>
            &copy; 2023 Dream Education Consultancy
            </div> 
        </div>
        <div className='footer-second'>
            <a href="">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#contact">Contact</a>
        </div>
        <div className='footer-third'>
            <a href="#testimonial">Testimonials</a>
            <a href="#universities">Universities</a>
            <a href="#countries">Countries</a>
        </div>
        <div className='footer-last'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
        </div>
      
    </div>
  )
}

export default Foter

import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../assets/logo.png"

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    console.log(showMenu)
  };

  return (
    
        <div className='header '>
         
      <img src={logo} alt='logo' />
      <div className='nav'>
        {/* <AiOutlineClose size={25} color='white' className='close' onClick={handleMenuToggle} /> */}
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="#services">Our Services</a>
        {/* <a href="/">Responsibilities</a> */}
        <a href="#countries">Country</a>
        <button type='button' className='btn-contact'><a href='#contact'> Contact</a></button>
      </div>
    </div>
  
  )
}

export default Header

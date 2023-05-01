import React from 'react'
import "../styles/contact.css"
import { AiOutlineWhatsApp } from "react-icons/ai";
function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Ready to chase your dreams?</h1>
      <button>
        <AiOutlineWhatsApp size={25} color='white' />
        +91 9602005921
      </button>
    </div>
  )
}

export default Contact

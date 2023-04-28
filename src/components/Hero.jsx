import React from 'react'
import "../styles/hero.css"
import hero from "../assets/hero.png"
function Hero() {
  return (
    <div className='hero ' id='hero'>
        <div className='hero-content'>
            <h1>
                We Help to <span>Build</span> <br />Your Dream
            </h1>
            <p>
                Unlock your potential to become a doctor with<span> Dream Education Consultancy</span>, the ultimate destination for students looking to pursue MBBS abroad. Our comprehensive resources and expert guidance help make studying abroad a reality..
            </p>
            <button className='btn-contact'><a href='https://form.jotform.com/231175517885464'>Apply with us</a></button>
        </div>
        <div className='hero-img'>
            <img src={hero} alt='hero-img' />
        </div>
    </div>
  )
}

export default Hero

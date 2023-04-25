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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi vel animi fugit consectetur ipsa dignissimos cumque delectus quo quam quia rerum itaque vitae consequatur minima dolores quae, nihil incidunt.
            </p>
            <button className='btn-contact'>Apply With Us</button>
        </div>
        <div className='hero-img'>
            <img src={hero} alt='hero-img' />
        </div>
    </div>
  )
}

export default Hero

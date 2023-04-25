import React from 'react'
import Slider from "react-slick";
import '../styles/universities.css'
import u1 from '../assets/u1.png'
function Universities() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        speed: 500,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='universities' id='universities'>
      <h3>featured universities</h3>
      <Slider {...settings} className='slider'>
      <div>
        <img src={u1} />
      </div>
      <div>
        <img src={u1} />
      </div>
      <div>
        <img src={u1} />
      </div>
      <div>
        <img src={u1} />
      </div>
      <div>
        <img src={u1} />
      </div>
      <div>
        <img src={u1} />
      </div>
      <div>
        <img src={u1} />
      </div>
      
    </Slider>
    </div>
  )
}

export default Universities

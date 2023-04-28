import React from 'react'
import Slider from "react-slick";
import '../styles/universities.css'

function Universities() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 8000,
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
        <a href='http://www.kaznu.kz/' >
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Al-Farabi_University_-_logo_-_01.jpg/300px-Al-Farabi_University_-_logo_-_01.jpg" /> </a>
      </div>
      <div>
        <a href='https://kaznmu.edu.kz/eng/'>
        <img src="https://kaznmu.edu.kz/eng/wp-content/themes/understrap-child-en/images/logo2.png" /></a>
      </div>
     
      <div>
        <a href='https://www.astanamedicaluniversity.com/'>
        <img src="https://www.astanamedicaluniversity.com/wp-content/uploads/2018/08/astana-logo.png" /></a>
      </div>
     
      <div>
        <a href='https://kokshetaustateuniversity.com/'>
        <img src="https://www.educatepulse.com/wp-content/uploads/2021/05/KOKSHETAU-STATE-UNIVERSITY-Logo.png" /></a>
      </div>
      <div>
        <a href='https://skmakazakhstan.com/'>
        <img src="https://skma.edu.kz/img/logo.png" /></a>
      </div>
  
     
      
    </Slider>
    </div>
  )
}

export default Universities

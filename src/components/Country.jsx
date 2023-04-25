import React from 'react'
import Slider from "react-slick";
import "../styles/country.css"
function Country() {
    const data = [
        {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/acj-2301-kazakhstan-tourist-attractions-1.jpg",
        title:"Study in Kazakhstan",
        desc:"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."    
        },
        {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/acj-2301-kazakhstan-tourist-attractions-1.jpg",
        title:"Study in Kazakhstan",
        desc:"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."    
        },
        {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/acj-2301-kazakhstan-tourist-attractions-1.jpg",
        title:"Study in Kazakhstan",
        desc:"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."    
        },
        {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/acj-2301-kazakhstan-tourist-attractions-1.jpg",
        title:"Study in Kazakhstan",
        desc:"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est."    
        },
]
var settings = {
    dots: true,
    infinite: true,
    // autoplay:true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
          breakpoint: 650,
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
    <div className='country' id='countries' >
        <h1>countries we covered</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis qui ut cumque laboriosam, aperiam dolore possimus saepe libero asperiores!</h4>
        <Slider {...settings} className='list'>
            {data.map((item)=>{
                const {img, title, desc} = item;
                return (
                    <div className="single-item">
                        <img src={img} alt="country" />
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                )
            })}
        </Slider>
    </div>
  )
}

export default Country

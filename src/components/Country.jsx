import React from 'react'
import Slider from "react-slick";
import "../styles/country.css"
function Country() {
    const data = [
        {
        img: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/acj-2301-kazakhstan-tourist-attractions-1.jpg",
        title:"Study in Kazakhstan",
        desc:"Kazakhstan is an ideal destination for MBBS studies abroad, with its affordable tuition fees, high-quality education, and modern infrastructure. Top universities offer English-medium programs and opportunities for clinical training, preparing students for a successful medical career."    
        },
        {
        img: "https://www.swedishnomad.com/wp-content/images/2020/11/Things-to-do-in-Saint-Petersburg-Russia.jpg",
        title:"Study in Russia",
        desc:"Russia offers excellent opportunities for MBBS students with its world-class medical universities, advanced facilities, and experienced faculty. English-taught programs, practical training, and affordable tuition fees make it a popular study abroad destination."    
        },
        {
        img: "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/83b08925_Tbilisi-dreamstime_m_95312132.jpeg",
        title:"Study in Georgia",
        desc:"Georgia is a popular destination for MBBS studies with its globally recognized medical universities, low tuition fees, and modern facilities. English-medium programs, experienced faculty, and opportunities for clinical exposure make it a top choice for students."    
        },
        {
        img: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/18174406/bangladesh-places-to-visit-FEATURE-compressed.jpg",
        title:"Study in Bangladesh",
        desc:"Bangladesh is a great choice for MBBS students with its affordable tuition fees, experienced faculty, and state-of-the-art medical infrastructure. Top universities offer English-medium programs, hands-on clinical training, and opportunities for research and innovation."    
        },
        {
        img: "https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/044a3434_Bishkek-dreamstime_m_79375910.jpeg",
        title:"Study in Kyrgyzstan ",
        desc:"Kyrgyzstan is a popular destination for MBBS studies with its affordable tuition fees, English-medium programs, and opportunities for clinical exposure. Top universities offer modern facilities, experienced faculty, and a supportive learning environment for students."    
        },
        {
        img: "https://www.travelanddestinations.com/wp-content/uploads/2019/11/Fountain-and-Independence-Monument-in-Dushanbe.jpg",
        title:"Study in Tajikistan ",
        desc:"Tajikistan is a great choice for MBBS students with its affordable tuition fees, English-medium programs, and experienced faculty. Top universities offer modern facilities, clinical exposure, and a student-centered approach to learning, preparing graduates for a successful medical career."    
        },
        {
        img: "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_1290/https://www.india-tours.com/blog/wp-content/uploads/2021/09/rivers-in-nepal1.jpg",
        title:"Study in Nepal",
        desc:"Nepal is an attractive destination for MBBS students with its affordable tuition fees, experienced faculty, and opportunities for clinical exposure. Top universities offer English-medium programs, modern facilities, and a supportive learning environment, making it an ideal choice for students seeking quality medical education."    
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
        <h4>MBBS abroad made easy. We cover Kazakhstan, Russia, Georgia, Bangladesh, Kyrgyzstan, Tajikistan, and Nepal. Personalized guidance for admissions, visa, and accommodation</h4>
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

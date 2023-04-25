import React from "react";
import Slider from "react-slick";
import "../styles/testimonial.css";
function Testimonial() {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Nishu Malik",
      desig: "reporter",
      desc: "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est.",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Nishu Malik",
      desig: "reporter",
      desc: "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est.",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Nishu Malik",
      desig: "reporter",
      desc: "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est.",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Nishu Malik",
      desig: "reporter",
      desc: "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est.",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "manish kumar",
      desig: "reporter",
      desc: "Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores voluptatum voluptate porro harum. Facilis voluptatum eum est.",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial " id="testimonial">
      <h1>Testimonial</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        perspiciatis qui ut cumque laboriosam, aperiam dolore possimus saepe
        libero asperiores!
      </h4>
      <div className="list" >
        {data.map((item) => {
          const { id, img, title, desc, desig } = item;
          return (
            <div className="single-item" key={id}>
              <div className="item-head">
                <img src={img} alt="country" />
                <div className="item-content">
                  <h2>{title}</h2>
                  <p>{desig}</p>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;

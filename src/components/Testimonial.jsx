import React from "react";
import Slider from "react-slick";
import "../styles/testimonial.css";
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"
import t4 from "../assets/t4.jpg"
function Testimonial() {
  const data = [
    {
      id: 1,
      img: t1,
      title: "Sachin Moond",
      desig: "reporter",
      desc: "As a student searching for options to pursue MBBS abroad,they were  lifesaver. Their comprehensive and up-to-date information made the whole process much simpler and stress-free",
    },
    {
      id: 2,
      img: t2,
      title: "Manish Choudhary",
      desig: "reporter",
      desc: "I would highly recommend Dream Education Consultancy to anyone looking for guidance on studying MBBS abroad. Their team is knowledgeable, friendly, and always willing to help",
    },
    {
      id: 3,
      img: t4,
      title: "Nishu Malik",
      desig: "reporter",
      desc: "Thanks to DEC, I was able to find the perfect university to study MBBS abroad. Their user-friendly website and expert advice made the entire process a breeze",
    },
    {
      id: 4,
      img: t3,
      title: "Karan Yadav",
      desig: "reporter",
      desc: "Studying MBBS abroad is a big decision, but they provides all the necessary resources and support to help students navigate the process with confidence and ease.",
    },
 
  ];
 
  return (
    <div className="testimonial " id="testimonial">
      <h1>Testimonial</h1>
      <h4>
      Choosing the right university to study MBBS abroad can be daunting. We provides valuable resources and guidance to help students make informed decisions and pursue their dreams.
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
                  <p>Student</p>
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

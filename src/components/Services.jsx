import React from 'react'
import "../styles/services.css"
function Services() {
    const data = [
        {
            title : "Career Counselling",
            desc : "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        },
        {
            title : "University Admissions",
            desc : "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        },
        {
            title : "Visa Consultancy",
            desc : "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        },
        {
            title : "Accodomation",
            desc : "Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat."
        },
    ]
  return (
    <div className='services ' id='services'> 
      <h1>Our Services</h1>
      <h4>Executive Trade International is an University Application Centre, guiding Indian students to Australian, British, Canadian and Irish universities!</h4>
      <div className='list'>
        {data.map((item)=>{
            const {title, desc} = item;
            return (
                <div className='single-item'>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Services

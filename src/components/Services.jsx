import React from 'react'
import "../styles/services.css"
function Services() {
    const data = [
        {
            title : "Career Counselling",
            desc : "Offering advice on the various postgraduate training options available, including residency programs, fellowship opportunities, and research fellowships."
        },
        {
            title : "University Admissions",
            desc : "Assisting with the selection of a university and program that aligns with the student's career goals and interests, taking into account factors such as location, academic offerings, and campus culture."
        },
        {
            title : "Visa Consultancy",
            desc : "Providing guidance on the visa application process for studying abroad, including documentation required for successful visa application."
        },
        {
            title : "Accodomation",
            desc : "Providing guidance on different types of accommodation options available to students, including on-campus housing, private rentals, homestays, and hostels."
        },
    ]
  return (
    <div className='services ' id='services'> 
      <h1>Our Services</h1>
      <h4>Comprehensive Services for Studying MBBS Abroad: From Admissions to Graduation, We've Got You Covered</h4>
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

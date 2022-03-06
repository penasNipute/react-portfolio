import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.avif'
import AVTR2 from '../../assets/avatar2.avif'
import AVTR3 from '../../assets/avatar3.avif'
import AVTR4 from '../../assets/avata4.jpg'


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Livia Marine',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
  {
    avatar: AVTR2,
    name: 'Carlos Filho',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
  {
    avatar: AVTR3,
    name: 'Clone StarWar',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem exercitationem veritatis nam modi dolorum, reprehenderit, dignissimos, quasi totam aspernatur natus. Esse iste iusto enim nam quia optio suscipit tenetur in, possimus impedit quidem eos consectetur minima reprehenderit. Tenetur, sapiente.'
  },
  {
    avatar: AVTR4,
    name: 'Osires egipcia',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, est voluptatum delectus incidunt corporis quis dolorum nemo consequuntur deserunt quam architecto dolore, consequatur eius debitis illum voluptate libero, tempore in.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

       <Swiper
        className="container testimonials__container"
        
        // install Swiper modules
        modules={ [Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
       {
         data.map(({avatar, name, review}, index)=>{
           return(
            <SwiperSlide key={index} className="testimonial">          
            <div className="client__avatar">
              <img src={avatar} alt="avatar client" />
            </div>
              <h5 className="client__name">{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
           )
         })
       }
       
        
       </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              UI/UX Design
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong preference for easy to use, intuitive UX/UI. </p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>
             Web Development
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>My layouts will work on any device, big or small. </p>
            </li>
          </ul>
        </article>
        {/* END OF  Web Development */}
        
        <article className="service">
          <div className="service__head">
            <h3>
              Content Creation
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fast load times and lag free interaction, my highest priority. </p>
            </li>
          </ul>
        </article>
        {/*END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services
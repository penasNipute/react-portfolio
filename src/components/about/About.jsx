import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>
        About ME
      </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="my picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about_icon' />
              <h5>Expirience</h5>
              <small>3+ Years Working</small>
            </article>
            
             <article className='about__card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>2+ Woldwide</small>
            </article> 
            
            <article className='about__card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Complited </small>
            </article>
          </div>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas obcaecati sint libero itaque labore, debitis consequatur error, in saepe cumque odio nesciunt eveniet nisi et consectetur fugiat inventore molestias.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About
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
              <small>2+ Years Working</small>
            </article>
            
             <article className='about__card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>0+ Woldwide</small>
            </article> 
            
            <article className='about__card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>
        
          <p>
            
            🔭 I’m currently working on self-employed explainer of general education
            🌱 I’m currently learning HTML, CSS, Javascript (React and NodeJS)... and finishing degree in mathematics
            🤔 I’m looking for learning new technologies and working on new projects
            📫 How to reach me: penaswild@gmail.com/ +258 84 2340 980/ +258 83 3071 728
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}

export default About
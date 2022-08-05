import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Web site with dropdown menu  (Responsive)',
    github: 'https://github.com/penasNipute/intro-section-with-dropdown-navigation-main',
    demo:'https://penasnipute.github.io/intro-section-with-dropdown-navigation-main/'
  },
  {
    id:2,
    image:IMG2,
    title:'Product Preview Card Component  (Responsive)', 
    github: 'https://github.com/penasNipute/product-preview-card-component-main',
    demo:'https://penasnipute.github.io/product-preview-card-component-main/'
  },
  {
    id:3,
    image:IMG3,
    title:'Loja de Carros  (Responsive)',
    github: 'https://github.com/penasNipute/projecto1/',
    demo:'https://penasnipute.github.io/projecto1/'
  },
  {
    id:4,
    image:IMG4,
    title:'Rocket Blog',
    github: 'https://github.com/penasNipute/rocketblog',
    demo:'https://rocketblog.pages.dev/'
  },
  {
    id:5,
    image:IMG5,
    title:'Rocket Shoes',
    github: 'https://github.com/penasNipute/rockeatshoes',
    demo:'https://penasnipute.github.io/RockeatShoes/'
  },
  {
    id:6,
    image:IMG6,
    title:'CountDown (Responsive)',
    github: 'https://github.com/penasNipute/devchallenge',
    demo:'https://penasnipute.github.io/DevChallenge/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>
        Portfolio
      </h2>

      <div className="container portfolio__container">

        {data.map(({id, image, title, github, demo}) =>{
          return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">  
            <a href={github} target="_blank" className="btn">Github</a>
            <a href={demo } target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
          </article>
          )
        })
        }  
               
      </div>
    </section>
  )
}

export default Portfolio
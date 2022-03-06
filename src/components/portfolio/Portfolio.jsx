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
    title:'Orion UI kit - Charts templates & infographics',
    github: 'https://github.com/penasNipute',
    demo:'https://dribbble.com/shots/17393884-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12518740?mode=media'
  },
  {
    id:2,
    image:IMG2,
    title:'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/penasNipute',
    demo:'https://dribbble.com/shots/17238644-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps/attachments/12344216?mode=media'
  },
  {
    id:3,
    image:IMG3,
    title:'Futuristic dashboards to visualize your data',
    github: 'https://github.com/penasNipute',
    demo:'https://dribbble.com/shots/17096624-Futuristic-dashboards-to-visualize-your-data/attachments/12188738?mode=media'
  },
  {
    id:4,
    image:IMG4,
    title:'High-quality dashboard templates for startups',
    github: 'https://github.com/penasNipute',
    demo:'https://dribbble.com/shots/17096643-High-quality-dashboard-templates-for-startups/attachments/12188761?mode=media'
  },
  {
    id:5,
    image:IMG5,
    title:'Service templates for video streaming',
    github: 'https://github.com/penasNipute',
    demo:'https://dribbble.com/shots/16955838-Service-templates-for-video-streaming/attachments/12029587?mode=media'
  },
  {
    id:6,
    image:IMG6,
    title:'Game streaming templates',
    github: 'https://github.com/penasNipute',
    demo:'https://dribbble.com/shots/16811926-Game-streaming-templates/attachments/11867417?mode=media'
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
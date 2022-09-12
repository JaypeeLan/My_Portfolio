import React from 'react'
import ProjectsReuseComp from './ProjectsReuseComp'
import img1 from '../images/ip-add-tracker.png'
import img2 from "../images/cameophotos.png"
import img3 from "../images/glasssdesign.png"
import img4 from "../images/restaurant-pagee.png"
import img5 from "../images/url-shortener.png"


const Projects = () => {
  return (
    <section id="projects">
      <h2>Some of my works</h2>
      <div className="project">
        <ProjectsReuseComp
          src={img1}
          projectTitle="React + API"
          projectText="Ip Adress tracker to get a location via its public ip address or domain"
          github="https://github.com/JaypeeLan/IP-Address-location-Tracker.git"
          live="https://ip-address-location.netlify.app/"
        />
        <ProjectsReuseComp
          src={img2}
          projectTitle="Jquery + Bootstrap 5"
          projectText="A fully responsive landing page for a photographer"
          github="https://github.com/JaypeeLan/photography.git"
          live="https://cameophotos.netlify.app/"
        />
        <ProjectsReuseComp
          src={img3}
          projectTitle="HTML + CSS3"
          projectText="A login/registration page using glassmorphism design"
          github="https://github.com/JaypeeLan/glassmorphism.git"
          live="https://glasssdesign.netlify.app/"
        />
        <ProjectsReuseComp
          src={img4}
          projectTitle="JavaScript scroll API"
          projectText="A fully responsive light-themed landing page for restaurant"
          github="https://github.com/JaypeeLan/Restaurant-landing-page.git"
          live="https://restaurant-pagee.netlify.app/"
        />
        <ProjectsReuseComp
          src={img5}
          projectTitle="React + URL shorten API"
          projectText="Long URLs? Just copy the link and get a shorter link."
          github="https://github.com/JaypeeLan/Url-shortener.git"
          live="https://url-shortenerrr.netlify.app/"
        />
      </div>
    </section>
  )
}

export default Projects

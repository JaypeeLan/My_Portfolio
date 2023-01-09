import React from "react";
import ProjectsReuseComp from "./ProjectsReuseComp";
import img1 from "../images/ip-add-tracker.png";
import img2 from "../images/cameophotos.png";
import img3 from "../images/glasssdesign.png";
import img4 from "../images/screencapture-youtube-lite-clone-zeta-vercel-app-2023-01-09-23_23_54.png";
import img5 from "../images/url-shortener.png";
import img6 from "../images/screencapture-ecommercecloneapp-netlify-app-2023-01-09-23_22_35.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Some of my works</h2>
      <div className="project">
        <ProjectsReuseComp
          src={img1}
          projectTitle="React + Leaflet API"
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
          projectTitle="HTML + CSS animation"
          projectText="A login/registration page using glassmorphism design"
          github="https://github.com/JaypeeLan/glassmorphism.git"
          live="https://glasssdesign.netlify.app/"
        />
        <ProjectsReuseComp
          src={img4}
          projectTitle="React + Youtube v3 API"
          projectText="A youtube clone built with React js and Youtube v3 API from Rapid API"
          github="https://github.com/JaypeeLan/Youtube-lite-clone"
          live="https://youtube-lite-clone-zeta.vercel.app/"
        />
        <ProjectsReuseComp
          src={img5}
          projectTitle="React + URL shorten API"
          projectText="Long URLs? Just copy the link and get a shorter link."
          github="https://github.com/JaypeeLan/Url-shortener.git"
          live="https://url-shortenerrr.netlify.app/"
        />
        <ProjectsReuseComp
          src={img6}
          projectTitle="React + Styled Components"
          projectText="An Ecommerce clone with few products from fake API store."
          github="https://github.com/JaypeeLan/ecommerce-clone"
          live="https://ecommercecloneapp.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;

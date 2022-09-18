import React from 'react'
import Reveal from 'react-reveal/Reveal'
import Zoom from 'react-reveal/Zoom'
import spiderman from '../images/spiderman-meme_4X.png'

const Landing = () => {
  return (
    <section id="home">
      <Reveal>
        <div id="landing-page">
          <p className="hi">
            Hi, <span>I am</span>
          </p>
          <p className="myName">Laniran JohnPaul</p>
          <p>A developer of the web, by the web and for the web</p>
          <p>
            I am a frontend developer interested in bringing your ideas to life,
            solving real life problems and providing new ideas to your
            organisation using latest technologies.
          </p>
          <a
            href="src\Laniran_JohnPaul_CV.pdf"
            target="_blank"
            className="download"
          >
            RESUME
          </a>
        </div>
      </Reveal>

      <Zoom>
        <div>
          <img src={spiderman} alt="spiderman" />
          <blockquote class="bp4-blockquote">
            GOOD HTML STRUCTURE = LESS CSS CODE = CLEAN CODE
          </blockquote>
          <h3>Me, 2021</h3>
        </div>
      </Zoom>
    </section>
  )
}

export default Landing

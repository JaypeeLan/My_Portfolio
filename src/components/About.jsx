import React from 'react'
import Avatar from 'avataaars'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Reveal from 'react-reveal/Reveal'

const About = () => {
  return (
    <section id="about">
      <div className="about_headings">
        <h2>About me</h2>
        <Bounce>
        <Avatar
          avatarStyle="Circle"
          topType="ShortHairTheCaesarSidePart"
          accessoriesType="Round"
          hairColor="Red"
          facialHairType="Blank"
          clotheType="CollarSweater"
          clotheColor="Black"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor="Black"
          style={{ height: '200px' }}
        />
        </Bounce>
      </div>
      <Zoom>
        <div className="about-me">
          <Reveal>
            <p>
              An energetic self-taught and skilled web developer with excellent
              awareness of web design industry trends and issues regarding user
              experience and accessibility. Created websites for clients as well
              as worked on self-initiated projects using the best practices.
            </p>
          </Reveal>
          <Zoom>
            <p>
              During my free time, I love solving technical problems, a computer
              geek. Outside work like being around friends and enjoy video
              games, learning a new language (I am a big fan of brazilian
              portuguese and spanish) and playing chess, and also polish my
              algorithm and CSS.
            </p>
          </Zoom>
        </div>
      </Zoom>
    </section>
  )
}

export default About

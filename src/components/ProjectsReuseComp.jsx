import React from 'react'
import { AnimatedSocialIcon } from 'react-animated-social-icons'
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
} from '@coreui/react'

const ProjectsReuseComp = ({
  src,
  projectTitle,
  projectText,
  github,
  live,
}) => {
  return (
    <CCard>
      <CCardImage orientation="top" src={src} />
      <CCardBody>
        <CCardTitle>{projectTitle} </CCardTitle>
        <CCardText>{projectText}</CCardText>
      </CCardBody>
      <CCardBody>
        <div className="preview_icon" href="#">
          <AnimatedSocialIcon
            brandName="github"
            url={github}
            animation="bounce"
            defaultColor="#D1D1D1"
            hoverColor="red"
            width="2em"
            animationDuration={0.8}
          />
          <AnimatedSocialIcon
            brandName="www"
            url={live}
            animation="sink"
            defaultColor="#D1D1D1"
            hoverColor="red"
            width="2em"
          />
        </div>
      </CCardBody>
    </CCard>
  )
}

export default ProjectsReuseComp

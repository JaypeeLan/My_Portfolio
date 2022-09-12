import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlinePreview } from 'react-icons/md'

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
        <div className="preview_icon">
          <a href={github}>
            <AiFillGithub size={25} color="red"/>
          </a>

          <a href={live}>
            <MdOutlinePreview size={25} />
          </a>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default ProjectsReuseComp

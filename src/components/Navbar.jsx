import React from 'react'
import { useState, useRef } from 'react'
import logo from '../images/cover.png'
import { Link } from 'react-scroll'
import open from '../images/open.png'
import close from '../images/close.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const toggleNav = () => {
    setIsMobile(!isMobile)
  }

  const link = useRef(null)
  const closeNav = () => {
    if (isMobile) {
      setIsMobile(false)
    }
  }

  return (
    <div id="navbar">
      <nav>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <img style={{ height: '35px' }} src={logo} alt="logo" />
        </Link>

        <ul className={isMobile ? 'active' : 'desktop'} ref={link}>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={600}
              onClick={closeNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
              onClick={closeNav}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-nav" onClick={toggleNav}>
          {isMobile ? (
            <img src={open} alt="menu" />
          ) : (
            <img src={close} alt="navbar" />
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
// import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Say Hello</h2>

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email: <input type="email" name="email" />
          </label>
        </p>

        <p>
          <label htmlFor="Message">
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <div className="social_icons">
        <a
          href="https://github.com/JaypeeLan"
          target="_blank"
          className="socials"
        >
          <BsGithub size={35} color="green" />
        </a>

        <a
          href="https://www.linkedin.com/in/laniranjohnpaul/"
          target="_blank"
          className="socials"
        >
          <BsLinkedin size={35} color="blue" />
        </a>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
// import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Say Hello</h2>

      <form
        name="contact form"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact form" />
        <div>
          <label>
            Your Name: <input type="text" name="name" />
          </label>

          <label htmlFor="email">
            Your Email: <input id="email" type="email" name="email" />
          </label>
        </div>

        <label htmlFor="Message">
          Message: <textarea name="message"></textarea>
        </label>

        <button type="submit">Send</button>
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

import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Say Hello</h2>
      <Form>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          placeholder="Email: "
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          placeholder="Message"
          rows="9"
        />

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
        />
      </Form>

      <div className="social_icons">
        <a
          href="https://github.com/JaypeeLan"
          target="_blank"
          className="socials"
        >
          <BsGithub size={35} color="green"/>
        </a>

        <a
          href="https://www.linkedin.com/in/laniranjohnpaul/"
          target="_blank"
          className="socials"
        >
          <BsLinkedin  size={35} color="blue"/>
        </a>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { AnimatedSocialIcon } from 'react-animated-social-icons'
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
            <AnimatedSocialIcon
              brandName="github"
              animation="bounce"
              defaultColor="#D1D1D1"
              hoverColor="red"
              width="2em"
              animationDuration={0.8}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/laniranjohnpaul/"
            target="_blank"
            className="socials"
          >
            <AnimatedSocialIcon
              brandName="linkedin"
              width="2em"
              defaultColor="#D1D1D1"
              hoverColor="blue"
              animation="grow"
            />
          </a>
        </div>
    </section>
  )
}

export default Contact

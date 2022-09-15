import React, { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import axios from 'axios'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mlevjjpg',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <section id="contact">
      <h2>Say Hello</h2>
    

      <form onSubmit={handleOnSubmit}>
        {/* email */}
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder='Email'
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        {/* message */}
        <textarea
          id="message"
          name="message"
          placeholder='Message'
          rows="9"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error" style={{textAlign: "center", padding: "15px", color: "red"}}>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p style={{textAlign: "center", padding: "15px", color: "green"}}>{status.info.msg}</p>}

      {/* ------------------------------------------------------- */}
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

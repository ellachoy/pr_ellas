import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

export default function Contacts() {
  const form = useRef()
  const handleOnSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm('service_di04xym', 'template_p7xmf9g', form.current, {
        publicKey: 'Yuh5lLivA0Ntu8EVi',
      })
      .then(
        result => {
          console.log(result.text)
          alert('Message Sent Successfully')
        },
        error => {
          console.log(error.text)
          alert('Something went wrong!')
        }
      )
    e.target.reset()
  }
  return (
    <div className='contact-form'>
      <form ref={form} onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor='from_name'>Name</label>
          <input
            type='text'
            id='from_name'
            name='from_name'
            placeholder=' Name..'
            required
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type='email'
            id='from_email'
            name='from_email'
            placeholder=' Email..'
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            rows='8'
            cols='30'
            placeholder=' Message..'
            required
          />
        </div>
        <input type='submit' value='Send' className='submit-button' />
      </form>
    </div>
  )
}

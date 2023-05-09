import React from 'react'
import "../Styles/Contact.css"

function Contact() {
  return (
    <div>
      <div className='contact-top'>
      <div className='contact-us'>
      <h3 className='help'>Need Help?</h3>
      <h3 className='chat'>Let's Chat</h3>
      </div>

      <div className='contact-form'>
        <form>
        <input placeholder='Full Name'></input><br/><br/>
        <input placeholder='Email Address'></input><br/><br/>
        <textarea placeholder='Type your message here'></textarea><br/>
        <button className='send-msg'><b>SEND MESSAGE</b></button>
        </form>
      </div>
      </div>

      <div className='contact-footer'>
          <h3>GET IN TOUCH</h3>
          <label className='phone'><b>Phone Number :</b></label><br/>
          <label className='email'><b>Email Address :</b></label><br/>
          <label className='address'><b>Our Address :</b></label><br/>
      </div>
    </div>
  )
}

export default Contact
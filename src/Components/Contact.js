import React from 'react'
import "../Styles/Contact.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

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
          <div className='column'><b>Phone Number</b><BsFillTelephoneFill/>
          <p><b>089-942-664</b></p>
          <p><b>062-339-876</b></p>
          </div>
          <div className='column'><b>Email Address</b><MdEmail/>
          <p><b>petsy@gmail.com</b></p>
          </div>
          <div className='column'><b>Location</b><MdLocationPin/>
          <p><b>72 La Sien Ave. <br/>
                Ferrington, MI 43731</b></p>
          </div>
      </div>
    </div>
  )
}

export default Contact
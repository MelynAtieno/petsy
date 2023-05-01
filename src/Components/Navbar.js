import React from 'react'
import "../Styles/Navbar.css"
//import { Link } from "react-router-dom"

function Navbar() {
  return (
    
    <div>
      
      <nav className='home-nav'>
      <a href='/home' className='petsy-nav'><b>PETSY</b></a>
        <ul>
        
        <li><a href='/home' className='nav-item'><b>HOME</b></a></li>
        <li><a href='/whyus' className='nav-item'><b>WHY US?</b></a></li>
        <li><a href='/contact' className='nav-item'><b>CONTACT</b></a></li>
        </ul>
      </nav>
      
    </div>
    
  )
}

export default Navbar
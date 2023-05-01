import React from 'react'
import "../Styles/Navbar.css"
//import { Link } from "react-router-dom"

function Navbar() {
  return (
    
    <div>
      
      <nav className='home-nav'>
        <ul>
        <li>
        <a href='/home' className='petsy-nav'><b>PETSY</b></a>
        <a href='/home' className='nav-item'><b>HOME</b></a>
        <a href='/whyus?' className='nav-item'><b>WHY US?</b></a>
        <a href='/contact' className='nav-item'><b>CONTACT</b></a>
        </li>
        </ul>
      </nav>
      
    </div>
    
  )
}

export default Navbar
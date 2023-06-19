import React from 'react'
import "../Styles/ShopNavbar.css"
//import { SidebarData } from './SidebarData'
import { Link } from "react-router-dom"
import { FaCat, FaDog, FaHome } from 'react-icons/fa'
import { GiParrotHead, GiRabbit } from 'react-icons/gi'

function ShopNavbar() {
  return (
    <div className='sidenav-container'>
        <div className='sidenav'>
          <ul className='sidenav-list'>
            {/* {SidebarData.map((val,key)=>{
              return(
                <li key={key} className='sidenav-items' onClick={() => (window.location.pathname = val.link)}>
                   <div id='icon'>{val.icon}</div>
                   <div id='title'><b>{val.title}</b></div>
                </li>
              )
            })}    */}
            
            <li  className='sidenav-items'>
              <Link to="/shop" className='icon-link'><FaHome size={35}/></Link>
               <Link to="/shop" className='sidenav-title'><b>HOME</b></Link>
            </li>

            <li  className='sidenav-items'>
              <Link to="/shop-cats" className='icon-link'> <FaCat size={35}/></Link> 
              <Link to="/shop-cats" className='sidenav-title'><b>CATS</b></Link>
            </li>

            <li  className='sidenav-items'>
              <Link to="/shop-dogs" className='icon-link'><FaDog size={35}/></Link>
               <Link to="/shop-dogs" className='sidenav-title'><b>DOGS</b></Link>
            </li>

            <li  className='sidenav-items'>
              <Link to="/shop-rabbits" className='icon-link'><GiRabbit size={35}/></Link> 
              <Link to="/shop-rabbits" className='sidenav-title'><b>RABBITS</b></Link>
            </li>

            <li  className='sidenav-items'>
              <Link to="/shop-parrots" className='icon-link'><GiParrotHead size={35}/></Link> 
              <Link to="/shop-parrots" className='sidenav-title'><b>PARROTS</b></Link>
            </li>

            </ul> 
        </div>
    </div>
  )
}

export default ShopNavbar
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
            
            <li  className='sidenav-items'><FaHome/> <Link to="/shop">HOME</Link></li>
            <li  className='sidenav-items'><FaCat/> <Link to="/shop-cats">CATS</Link></li>
            <li  className='sidenav-items'><FaDog/> <Link to="/shop-dogs">DOGS</Link></li>
            <li  className='sidenav-items'><GiRabbit/> <Link to="/shop-rabbits">RABBITS</Link></li>
            <li  className='sidenav-items'><GiParrotHead/> <Link to="/shop-parrots">PARROTS</Link></li>

            </ul> 
        </div>
    </div>
  )
}

export default ShopNavbar
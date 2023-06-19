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
            
            <li  className='sidenav-items'><FaHome size={35}/> <Link to="/shop" className='sidenav-title'><b>HOME</b></Link></li>
            <li  className='sidenav-items'><FaCat size={35}/> <Link to="/shop-cats" className='sidenav-title'><b>CATS</b></Link></li>
            <li  className='sidenav-items'><FaDog size={35}/> <Link to="/shop-dogs" className='sidenav-title'><b>DOGS</b></Link></li>
            <li  className='sidenav-items'><GiRabbit size={35}/> <Link to="/shop-rabbits" className='sidenav-title'><b>RABBITS</b></Link></li>
            <li  className='sidenav-items'><GiParrotHead size={35}/> <Link to="/shop-parrots" className='sidenav-title'><b>PARROTS</b></Link></li>

            </ul> 
        </div>
    </div>
  )
}

export default ShopNavbar
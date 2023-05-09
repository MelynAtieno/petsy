import React from 'react'
import "../Styles/Home.css"
import TypewriterComponent from 'typewriter-effect'
import { useNavigate } from 'react-router-dom'

function Home() {
  const toShop = useNavigate();

  return (
    <div className='homepage'>
      
        <div className='header'>
                <h1 className='needpet'><b>NEED A PET?</b></h1>
                <h1 className='gotcha'> <TypewriterComponent 
          options={{
            strings:["WE GOT YOU !"],
            autoStart: true,
            loop: true,
            pauseFor:50
          }}
        />
        </h1>
        </div>

          
   
    <div className='shop-now-button'>
        <button className='shop-now' onClick={() => {toShop("/shop")}}><b>SHOP NOW</b></button>
    </div>
    
   
    </div>
  )
}

export default Home
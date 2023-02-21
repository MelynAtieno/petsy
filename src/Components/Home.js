import React from 'react'
import "../Styles/Home.css"
import TypewriterComponent from 'typewriter-effect'
import cat1 from "../Images/cat1.jpg"

function Home() {
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

        <div>
            <img className='cat1' src={cat1} alt='cat1'></img>
        </div>
    
    <div className='shop-now-button'>
        <button className='shop-now'><b>SHOP NOW</b></button>
    </div>
    </div>
  )
}

export default Home
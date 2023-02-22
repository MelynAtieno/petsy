import React from 'react'
import "../Styles/Home.css"
import TypewriterComponent from 'typewriter-effect'
import cat1 from "../Images/cat1.jpg"
import dog2 from "../Images/dog2.jpg"
import parrot1 from "../Images/parrot1.jpg"
import rabbit1 from "../Images/rabbit1.jpg"
import dog3 from "../Images/dog3.jpg"

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

        <div className='cat1-div'>
            <img className='cat1' src={cat1} alt='cat1'></img>
        </div>

        <div className='dog3-div'> 
            <img className='dog3' src={dog3} alt="dog3"></img>
        </div>

        <div className='img-row'>

        <div className='img-column'>
          <img className='dog2' src={dog2} alt="dog2"></img>
        </div>

        <div className='img-column'>
          <img className='parrot1' src={parrot1} alt="parrot1"></img>
        </div>

    <div className='img-column'>
          <img className='rabbit1' src={rabbit1} alt="rabbit"></img>
    </div>

        </div>
   
    <div className='shop-now-button'>
        <button className='shop-now'><b>SHOP NOW</b></button>
    </div>
    
   
    </div>
  )
}

export default Home
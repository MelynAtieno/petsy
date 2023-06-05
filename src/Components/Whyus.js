import React from 'react'
import "../Styles/Whyus.css"
import happypetowner from "../Images/happypetowner.jpg"
import history from "../Images/dog5.jpg"
import femaleavatar from "../Images/female-avatar.png"
import { HiUserGroup } from 'react-icons/hi'
import { FaTrophy, FaHandshake } from "react-icons/fa"
import cat1 from "../Images/cat1.jpg"
import dog6 from "../Images/dog6.jpg"
import parrot1 from "../Images/parrot1.jpg"
import rabbit1 from "../Images/rabbit1.jpg"



function Whyus() {
  return (
    <div>
      <div className='mission'>
        <div className='mission-text'>
      <h3>We Want You To Be Happy</h3>
        <p classname="why"><b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis nobis. <br/>
    Non vero nulla, modi mollitia eius aut odio ex, 
    sequi nemo sed quasi <br/>inventore corrupti doloribus, rem voluptates! Beatae?
        </b></p>
        </div>
        <div className='img-mission'>
          <img className='pet-owner' src={happypetowner} alt='happypetowner'></img>
        </div>
        </div>


        <div className='our-history'>
        <div>
    <img className='history-img' src={history} alt='history'></img>
    </div>
        <div className='hstry-text'>
        <h3>Our History</h3>
       
        <p classname="history"><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Libero nobis iure cupiditate repellendus enim rem eligendi? <br/> Aliquam architecto ex nihil corporis possimus id esse, 
    eaque veritatis doloribus laborum quam repudiandae?</b></p>
    </div>
   
    </div>
    

    <div className='team'>
        <h3>Meet The Team</h3>
        <div className='team-container'>
        <div class="team-image"> <img src={femaleavatar} alt="team-member" height="200px"/> 
        <p className='team-name'><b>Alice Madison </b></p><br/>
        <p><b>Chief  Executive Officer</b></p>
        </div> 
        <div class="team-image"> <img src={femaleavatar} alt="team-member" height="200px"/>
        <p className='team-name'><b>Russell James</b></p><br/>
        <p><b>Chief Technology Officer</b></p>

         </div> 
        <div class="team-image"> <img src={femaleavatar} alt="team-member" height="200px"/>
        <p className='team-name'><b>Giji Fehmen</b></p><br/>
        <p><b>Operations Manager</b></p>
         </div> 
      
        </div>
        

    </div>

    <div className='achievements'>
      <h3>Special Achievements</h3>
      <div className='achieve-container'>
      <div className='achieve'>
      <HiUserGroup size={150} />
      <h1>3000+</h1>
      <p><b>Happy Customers</b></p>
      </div>

      <div className='achieve'>
        <FaTrophy size={150} />
        <h1>6</h1>
        <p><b>Awards</b></p>
      </div>
      
      <div className='achieve'>
        <FaHandshake size={150} />
        <h1>10</h1>
        <p><b>Partnerships</b></p>
      </div>
      </div>

    </div>

    <div className='pets-sell'>
        <h3>PETS WE SELL</h3>
      <div className='pets-container'>
        <div className='pet-image'>
            <img src={cat1} alt='cat1' height={250} width={250}></img>
        </div>
        <div className='pet-image'>
            <img src={dog6} alt='dog6'  height={250} width={250}></img>
        </div>
        <div className='pet-image'>
            <img src={parrot1} alt='parrot1'  height={250} width={250}></img>
        </div>
        <div className='pet-image'>
            <img src={rabbit1} alt='rabbit1'  height={250} width={250}></img>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Whyus
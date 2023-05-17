import React from 'react'
import "../Styles/Whyus.css"
import happypetowner from "../Images/happypetowner.jpg"
import history from "../Images/dog5.jpg"

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
        <div className='hstry-text'>
        <h3>Our History</h3>
        <p classname="history"><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Libero nobis iure cupiditate repellendus enim rem eligendi? <br/> Aliquam architecto ex nihil corporis possimus id esse, 
    eaque veritatis doloribus laborum quam repudiandae?</b></p>
    </div>
    <div>
    <img className='history-img' src={history} alt='history'></img>
    </div>
    </div>
    

    <div className='team'>
        <h3>Meet The Team</h3>
        
    </div>

    <div className='achievements'>
      <h3>Special Achievements</h3>
      <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni voluptatem, beatae et magnam praesentium corporis in numquam eum voluptate blanditiis nemo, 
    aut obcaecati modi tempora labore nam. Voluptatibus, obcaecati modi!</b></p> <br/>
      <p><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Placeat totam suscipit eaque error pariatur ut provident sapiente, velit, 
      mollitia hic odit dolore illo quos inventore eius nisi quo officia officiis?</b></p> <br/>
      <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tenetur aut rerum officiis, doloremque repellat assumenda, cumque, 
        illo eos saepe suscipit perferendis molestiae vel velit nesciunt accusamus quis praesentium? 
        Voluptates, sint.</b></p><br/>
        <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vel ab minima beatae, aliquam, neque vero aliquid rem fugiat ad molestiae enim eveniet libero? 
          Quo error ut quae cumque ad facilis?</b></p>

    </div>

    <div className='pets-sell'>
        <h3>PETS WE SELL</h3>
        <ul>
          <li><b>Cats</b></li>
          <li><b>Dogs</b></li>
          <li><b>Rabbits</b></li>
          <li><b>Parrots</b></li>
        </ul>
    </div>
    </div>
  )
}

export default Whyus
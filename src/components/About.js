import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-25' >
                <h3>About Us</h3>
                <h1>WELCOME TO MAESTRO PIZZINI</h1>
                <p>
                When you think of comfort food one of the first dishes that comes to mind is Pizza. 
                <br/>There’s just something magical about Pizza that sets it above all other dishes in this regard,<br/> 
                so much so that it has attained an almost ‘legend’ level status amongst people around the world.
                </p>
                <div className='about_btn'>
                    <a href='' className='btn btn-smart'>Read More</a>
                </div>

                </div>

                <div className='col-6'>
                    <div className='about_img'>
                        <img src="/img/pizza.jpg" alt="Pizza"/>
                    </div>
                    
                </div>

            </div>
           
            </div>
            </div>
       
      
    
  )
}

export default About

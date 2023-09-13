import React from 'react'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='container'>
        <div className='row'>
        <div className='col-6'>
                    <div className='menu_img'>
                        <img src="/img/pizza.jpg" alt="Pizza"/>
                    </div>
                    
                </div>
                <div className='col-6 p-25' >
                <h3>The Pizza Menu</h3>
                <h1>CHICAGO THIN CRUST</h1>
                <p>
                When you think of comfort food one of the first dishes that comes to mind is Pizza. 
                <br/>There’s just something magical about Pizza that sets it above all other dishes in this regard.
                </p>
                <div className='menu_btn'>
                    <a href='' className='btn btn-smart'>View More</a>
                </div>

                </div>

                

            </div>
           
            </div>
            </div>
  )
}

export default Menu

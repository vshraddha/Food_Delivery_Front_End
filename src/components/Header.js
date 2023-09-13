import React from "react"
import Navbar from "./Navbar"

const Header = () => {
    return(
        <div className="banner">
            <Navbar/>
            <div className="banner_content">
                <div className="container">
                    <div className="container_text">
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO PIZINNI</h1>
                    
                    <p>What’s better than having a crispy melty pizza, you ask?

Having that crispy and melty pizza in the comfort of your own home with the ones you love, we say. .</p>

<div className="banner_btn">
                        <a href="" className="btn btn-smart">Delivery Now</a>
                    </div>

                    </div>
                    

            
                </div>
            </div>

        </div>
    )
}

export default Header
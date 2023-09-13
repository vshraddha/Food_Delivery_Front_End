import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar_text">
            <div className='logo'><img src="/img/logo.png" alt="logo" /></div>
                <ul className='navbar_ul'>
                    <li><a href="">Home</a></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                    
                    
                </ul> 
            </div>
        
      
    </nav>
  )
}

export default Navbar

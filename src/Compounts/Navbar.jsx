import React from 'react'
import'./Navbar.css'
import{Link} from "react-router-dom"
{/* <button  className="no"type='button' > Mens</button> */}
const Navbar = () => {
  return (
    <>
    <div className='container-fluid '>
      <nav>
      <div className='dd'>
      <img src="src/assets/logo.png " alt="ggg"  className="nav-logo"/>
   
      <ol>
        <li className='h'>
          <Link to="/">Home</Link>
       

        </li>
        <li> 
        <Link to="/Tour.jsx">Tour</Link>
        
        </li>
       <li>
       <Link to="/About.jsx">About</Link>
        
        </li>
        <li>
        <Link to="/Conduct.jsx"> Conduct</Link>
       
        </li>

      </ol>
      <button type="button" class="btn btn12 btn-outline-secondary rounded-pill"><Link to="/Login.jsx">Login</Link></button>
      <button type="icon" class="btn cart-btn btn-outline-secondary rounded-pill">Register</button>
      </div>
      </nav>
    </div>
  
    </>
  )
}

export default Navbar

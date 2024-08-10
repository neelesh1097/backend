import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='navigate'>
    <div>

      
     
         <ul className='nav-ul'>

         <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/Signup'>Signup</Link></li>
            <li><Link to ='/Login'>Login</Link></li>
         </ul>

         </div>
         </nav>
  )
}

export default Nav
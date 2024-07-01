import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
           
        </ul>
        </div>
  )
}

export default Navbar
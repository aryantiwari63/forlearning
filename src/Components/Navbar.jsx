import React from 'react';
import { Link } from 'react-router-dom';
import Navstyle from './Navbar.css';

function Navbar() {
  return (
    <div>
      <div >
        <ul className='nav'>
          <p>hello</p>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/upload">upload</Link></li>
            <li><Link to="/card">card</Link></li>
        </ul>
        </div>
        </div>
  )
}

export default Navbar
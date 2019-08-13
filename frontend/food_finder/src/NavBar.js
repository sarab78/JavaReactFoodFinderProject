import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <h3>D-In or Out</h3>
      <ul>
        <li className="navLink">
          <Link to="/home">Home</Link>
      </li>
        <li className="navLink">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;

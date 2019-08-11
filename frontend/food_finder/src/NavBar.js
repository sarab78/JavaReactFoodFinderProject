import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <h3>FoodFinder</h3>
      <ul>
        <li className="navLink">
          <Link to="/home">Home</Link>
      </li>
        <li className="navLink">
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;

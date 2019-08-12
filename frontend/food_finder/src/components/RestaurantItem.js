import React from 'react';
import {Link} from 'react-router-dom';


const RestaurantItem = (props) => {

  const handleClick = (event) => {
    props.findSelectedRestaurant(props.id);
  }

  return(
      <div>
          <p onClick={handleClick}>{props.unit.restaurant.name}</p>
          <img onClick={handleClick} src={props.unit.restaurant.featured_image} height="60" width="60"></img>
        <Link to='/out/restaurant'>
          <button>View Restaurant Details</button>
        </Link>
      </div>
    )
};

export default RestaurantItem

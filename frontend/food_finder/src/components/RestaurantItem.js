import React from 'react';
import {Link} from 'react-router-dom';


const RestaurantItem = (props) => {

  const handleClick = (event) => {
    props.findSelectedRestaurant(props.id);
  }

  return(
      <div>
          <p onClick={handleClick}>{props.unit.restaurant.name}</p>
        <Link to='/out/restaurant'>
          <button>View Restaurant Details</button>
        </Link>
      </div>
    )
};

export default RestaurantItem

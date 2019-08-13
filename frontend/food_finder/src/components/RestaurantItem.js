import React from 'react';


const RestaurantItem = (props) => {

  const handleClick = (event) => {
    props.findSelectedRestaurant(props.id);
    props.showButton()
  }

  return(
      <div>
          <p onClick={handleClick}>{props.unit.restaurant.name}</p>
          <img onClick={handleClick} src={props.unit.restaurant.featured_image} height="60" width="60"></img>
      </div>
    )
};

export default RestaurantItem

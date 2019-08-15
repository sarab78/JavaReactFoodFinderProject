import React from 'react';


const RestaurantItem = (props) => {

  const handleClick = (event) => {
    props.findSelectedRestaurant(props.id);
    props.showButton()
  }

  return(
      <div className="restaurant-item">
          <img onClick={handleClick} src={props.unit.restaurant.featured_image}></img>
          <p onClick={handleClick}>{props.unit.restaurant.name}</p>
      </div>
    )
};

export default RestaurantItem

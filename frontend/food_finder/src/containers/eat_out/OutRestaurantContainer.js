import React from 'react';

const OutRestaurantContainer = (props) => {
  return(
    <div>
      <p>TestRestaurantContainer</p>
      <p>{console.log(props.selectedRestaurant)}</p>
      <p>{props.selectedRestaurant.restaurant.name}</p>
    </div>
  )
};

export default OutRestaurantContainer;

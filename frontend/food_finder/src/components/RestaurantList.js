import React from 'react';
import RestaurantItem from './RestaurantItem';
import './RestaurantList.css'

const RestaurantList = (props) => {

  if(!props.restaurantList){
    return 'Loading. . . '
  }

    const list = props.restaurantList.map((restaurant, key) => {
      return <div className="restaurant-scroll">
            <li >
              <RestaurantItem unit={restaurant} id={key}  findSelectedRestaurant={props.selectedRestaurant}/>
            </li>
            </div>
    })

    const updateRestaurantSelection = (event) => {
      console.log(event);
    }

  return (
      <div className="restaurant-list">
      <ul>
        {list}
      </ul>

      </div>
  )
};

export default RestaurantList

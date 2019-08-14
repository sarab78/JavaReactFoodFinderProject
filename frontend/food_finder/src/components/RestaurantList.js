import React from 'react';
import RestaurantItem from './RestaurantItem';
import './RestaurantList.css'
import {Link} from 'react-router-dom';


const RestaurantList = (props) => {

  if(!props.restaurantList){
    return 'Loading. . . '
  }

  function showButton() {
     if(!props.selectedRestaurantInfo) return null;
     return (
       <Link to='/out/restaurant'>
         <button>View Restaurant Details</button>
       </Link>
     )
  }

    const list = props.restaurantList.map((restaurant, key) => {
      return(
            <li>
              <RestaurantItem unit={restaurant} id={key}  findSelectedRestaurant={props.selectedRestaurant} showButton={showButton}/>
            </li>
          )
    })

    const updateRestaurantSelection = (event) => {
      console.log(event);
    }

  return (
      <div className="restaurant-list-container">
      <div className="restaurant-list">
      <ul>
        {list}
      </ul>
      </div>
      <div className="restaurant-button">
        {showButton()}
      </div>
      </div>
  )
};

export default RestaurantList

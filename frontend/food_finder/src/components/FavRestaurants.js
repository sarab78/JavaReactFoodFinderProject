import React from 'react';



const FavRestaurants = (props) => {

  const userRestaurants = props.restaurantFav.map((restaurant, index) => {
    {if (restaurant){
      return  <div>
              <li onClick={console.log('Holy Moley Part2')}>
                <p>{restaurant.name} </p>
                <img src={restaurant.featured_image} width="100" height="100"></img>
              </li>
           </div>
        }}
  })


  return (
    <div>
      <h4>Your Saved Restaurants</h4>
      {userRestaurants}
    </div>
  )
};

export default FavRestaurants;


        // {userRestaurants}

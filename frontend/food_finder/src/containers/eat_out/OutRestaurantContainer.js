import React from 'react';

const OutRestaurantContainer = (props) => {

  if (!props.user) {
    window.location = '/home'
  }

const reviews = props.selectedRestaurant.restaurant.all_reviews.reviews.map((review) => {
  return <li> Rating: {review.review.rating} <br></br>
            {review.review.review_text} </li>
})

// nextImage(n){
//   return returnImage(1);
// }
//
// const images = returnImage((n) => {
//   return
// })

  return(
    <div>
      <h3>{props.selectedRestaurant.restaurant.name}</h3>
      <p>Average Cost: £{props.selectedRestaurant.restaurant.average_cost_for_two}</p>
      <img src={props.selectedRestaurant.restaurant.menu_url}></img>
     <iframe
       src={props.selectedRestaurant.restaurant.menu_url}
       frameBorder="0"
       />
     <img src={props.selectedRestaurant.restaurant.photos[1].photo.url} width="200" height="170"></img>
     <h4>Reviews</h4>
     <ul>
     {reviews}
     </ul>
    </div>
  )
};

export default OutRestaurantContainer;


       // style={{
       //   position: "absolute",
       //   top: 0,
       //   left: 0,
       //   width: "100%",
       //   height: "100%"
       // }}

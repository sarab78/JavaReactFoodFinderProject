import React from 'react';

const OutRestaurantContainer = (props) => {

  if (!props.user) {
    window.location = '/home'
  }

const reviews = props.selectedRestaurant.restaurant.all_reviews.reviews.map((review) => {
  return <li> Rating: {review.review.rating} <br></br>
            {review.review.review_text} </li>
})

let startImage = 2;

const nextImage = () => {
  let checkStartImage = startImage + 1 === props.selectedRestaurant.restaurant.photos.length;
  {if(checkStartImage) {
  startImage = 0;
} else {
  startImage += 1;
  }}
  imageAddress = "";
  imageAddress = props.selectedRestaurant.restaurant.photos[startImage].photo.url + 'v=2';
};

const previousImage = () => {
  let checkStartImage = startImage === 0;
  {if(checkStartImage) {
  startImage = props.selectedRestaurant.restaurant.photos.length;
} else {
  startImage -= 1;
}}
imageAddress = "";
imageAddress = props.selectedRestaurant.restaurant.photos[startImage].photo.url + 'v=1';
}

let imageAddress = props.selectedRestaurant.restaurant.photos[startImage].photo.url;


  return(
    <div>
      <h3>{props.selectedRestaurant.restaurant.name}</h3>
      <p>Average Cost: £{props.selectedRestaurant.restaurant.average_cost_for_two}</p>
      <img src={props.selectedRestaurant.restaurant.menu_url}></img>
     <iframe
       src={props.selectedRestaurant.restaurant.menu_url}
       frameBorder="0"
       />
     <img src={imageAddress} width="200" height="170"></img>
     <button onClick={previousImage}>Previous Image</button>
     <button onClick={nextImage}>Next Image</button>
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

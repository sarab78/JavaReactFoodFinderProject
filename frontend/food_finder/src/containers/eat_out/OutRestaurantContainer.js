import React from 'react';
import NavBar from '../../NavBar'
import './OutRestaurantContainer.css'
import {Link} from 'react-router-dom';

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

  const addToRestaurantFav = () => {
    props.addToRestaurantFavMain(props.selectedRestaurant)
  }


  return(
    <div className="restaurant-details">
      <NavBar />

      <div className="restaurant-name">
      <h2>{props.selectedRestaurant.restaurant.name}</h2>
      </div>

      <div className="restaurant-address">
      <h3>{props.selectedRestaurant.restaurant.location.address}</h3>
      </div>

      <div className="restaurant-cost">
      <p>Average Cost for two people: £{props.selectedRestaurant.restaurant.average_cost_for_two}</p>
      </div>

    <div className="restaurant-images">
     <img src={imageAddress} width="200" height="170"></img>
     <div className="restaurant-images-buttons">

     </div>
     </div>

     <div className="restaurant-website">
     <a href={props.selectedRestaurant.restaurant.menu_url} target="_blank">
       <button type='button'>{props.selectedRestaurant.restaurant.name} - Click here for menu information</button>
     </a>
     </div>

     <div className="restaurant-review">
     <h4>Reviews</h4>
     <ul>
     {reviews}
     </ul>
     </div>

     <div className="restaurant-favourites-button">
     <button onClick={addToRestaurantFav}>Add To My Favourites</button>
     </div>

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

       // <div className="restaurant-menu">
       // <img src={props.selectedRestaurant.restaurant.menu_url}></img>
       // <iframe
       // src={props.selectedRestaurant.restaurant.menu_url}
       // frameBorder="0"
       // />
       // </div>
     // 
     // <button onClick={previousImage}>Previous Image</button>
     // <button onClick={nextImage}>Next Image</button>

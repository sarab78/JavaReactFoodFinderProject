import React from 'react';
import './ProfileDetail.css'

const ProfileDetails = (props) => {

  const handleSubmit = (event) => {
      event.preventDefault();
    const updatedUser = {
        "firstName": event.target.firstName.value,
        "lastName": event.target.lastName.value,
        "location": event.target.location.value,
        "cuisine": event.target.cuisine.value,
        "ingredient": event.target.ingredient.value
        }
        console.log(updatedUser);
        props.updateUserDetails(updatedUser)
      }

  const cuisineOptions = props.cuisines.map((cuisine, index) => {
    return <option type="option" name="cuisines" key={index} value={cuisine._links.self.href}>{cuisine.name}</option>
  })
  const ingredientOptions = props.ingredients.map((ingredient, index) => {
    return <option type="option" name="ingredients" key={index} value={ingredient._links.self.href}>{ingredient.name}</option>
  })


  return(
  <div className="profileform">
      <div className="profile-form">
        <form onSubmit={handleSubmit}>
          <input id="profile-initial" type="text" value={props.user.firstName} name="firstName"/>
          <input id="profile-initial" type="text" value={props.user.lastName} name="lastName"/>
          <input id="profile-initial" type="text" placeholder={props.user.location} name="location"/>
          <br/>
          <br/>
          <label/>Your favoured cuisine type:
          <select name="cuisine">
            <option disabled selected value>{props.user._embedded.cuisine.name}</option>
          {cuisineOptions}
          </select>
          <br/>
          <br/>
          <label/>Your favoured main ingredient:
          <select name="ingredient">
            <option disabled selected value>{props.user._embedded.ingredient.name}</option>
          {ingredientOptions}
          </select>
          <br/>
          <br/>
          <button type="submit">Save</button>
        </form>
      </div>

  </div>
)
};

export default ProfileDetails;

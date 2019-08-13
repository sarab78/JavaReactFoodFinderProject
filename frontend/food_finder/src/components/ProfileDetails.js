import React from 'react';

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
  <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={props.firstName} name="firstName"/>
          <input type="text" value={props.lastName} name="lastName"/>
          <input type="text" value={props.location} name="location"/>
          <label/>Please choose your favourite cuisine type
          <select name="cuisine">
          {cuisineOptions}
          </select>
          <label/>Please choose your favourite main ingredient
          <select name="ingredient">
          {ingredientOptions}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>

  </div>
)
};

export default ProfileDetails;

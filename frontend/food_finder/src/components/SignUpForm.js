import React from 'react';
import './SignUpForm.css'

const SignUpForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
        // console.log(event.target.cuisine.value);
    let cuisineChoice = props.cuisineTypes.slice(event.target.cuisine.value, event.target.cuisine.value + 1)
    // cuisineChoice = cusine {id: 1, name: 'Chinese', cuisine_id: 1}
    // console.log(cuisineChoice);
    let ingredientChoice = props.ingredients.slice(event.target.ingredient.value, event.target.ingredient.value + 1)
    // ingredientChoice = ingredientChoice[0].keys.slice(0, 1)

    const user = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "location": event.target.location.value,
      "cuisine": event.target.cuisine.value,
      "ingredient": event.target.ingredient.value
    }
    props.signUpContainer(user);
    props.redirectButton()
  }

  const cuisineOptions = props.cuisineTypes.map((cuisine, index) => {
    return <option type="option" name="cuisines" key={index} value={cuisine._links.self.href}>{cuisine.name}</option>
    console.log(cuisine);
  })
  const ingredientOptions = props.ingredients.map((ingredient, index) => {
    return <option type="option" name="ingredients" key={index} value={ingredient._links.self.href}>{ingredient.name}</option>
  })




  return(
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName"/>
        <input type="text" placeholder="Last Name" name="lastName"/>
        <select name="location">
          <option disabled selected value> -- Location -- </option>
          <option name="location">Glasgow</option>
        </select>
        <label/>Please choose your favourite cuisine type
        <select name="cuisine">
        <option disabled selected value> -- select an favourite cusine -- </option>
        {cuisineOptions}
        </select>
        <label/>Please choose your favourite main ingredient
        <select name="ingredient">
        <option disabled selected value> -- select an favourite ingredient -- </option>
        {ingredientOptions}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  )
};

export default SignUpForm;

        // <input type="text" placeholder="Location" name="location"/>

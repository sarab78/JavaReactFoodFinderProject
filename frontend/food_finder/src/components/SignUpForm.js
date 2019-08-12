import React from 'react';

const SignUpForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "location": event.target.location.value,
      "cuisine": event.target.cuisine.value,
      "ingredient": event.target.ingredient.value
    }
    console.log(user);
    props.signUpContainer(user);
  }

  const cuisineOptions = props.cuisineTypes.map((cuisine, index) => {
    return <option type="option" name="cusines" key={index} value={cuisine}>{cuisine.name}</option>
  })
  const ingredientOptions = props.ingredients.map((ingredient, index) => {
    return <option type="option" name="ingredients" key={index} value={ingredient}>{ingredient.name}</option>
  })




  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName"/>
        <input type="text" placeholder="Last Name" name="lastName"/>
        <input type="text" placeholder="Location" name="location"/>
        <br/>
        <label/>Please choose your favourite cuisine type
        <br/>
        <select name="cuisine">
        {cuisineOptions}
        </select>
        <br/>
        <label/>Please choose your favourite main ingredient
        <br/>
        <select name="ingredient">
        {ingredientOptions}
        </select>
        <br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
};

export default SignUpForm;
